import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher">
      <button
        *ngFor="let lang of availableLanguages"
        (click)="switchLanguage(lang.code)"
        [class.active]="currentLanguage === lang.code"
        class="language-btn"
        [title]="lang.name"
      >
        <span class="flag">{{ lang.flag }}</span>
        <span class="lang-code">{{ lang.code.toUpperCase() }}</span>
      </button>
    </div>
  `,
  styles: [
    `
      .language-switcher {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .language-btn {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem 0.75rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.5rem;
        color: white;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .language-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-1px);
      }

      .language-btn.active {
        background: rgba(168, 85, 247, 0.3);
        border-color: #a855f7;
        box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
      }

      .flag {
        font-size: 1rem;
      }

      .lang-code {
        font-weight: 500;
      }

      @media (max-width: 768px) {
        .language-switcher {
          gap: 0.25rem;
        }

        .language-btn {
          padding: 0.375rem 0.5rem;
          font-size: 0.75rem;
        }

        .lang-code {
          display: none;
        }
      }
    `,
  ],
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  currentLanguage = 'en';
  availableLanguages: Array<{ code: string; name: string; flag: string }> = [];
  private subscription: Subscription = new Subscription();

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    // Initialize with current language
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.availableLanguages = this.languageService.getAvailableLanguages();

    // Subscribe to language changes
    this.subscription = this.languageService.currentLanguage$.subscribe(
      (lang) => {
        this.currentLanguage = lang;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  switchLanguage(languageCode: string) {
    this.languageService.setLanguage(languageCode);
  }
}
