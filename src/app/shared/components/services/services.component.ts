import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-services',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  services = [
    {
      key: 'web',
      icon: 'fa-cloud',
      color: 'yellow',
    },
    {
      key: 'frontend',
      icon: 'fa-laptop-code',
      color: 'blue',
    },
    {
      key: 'backend',
      icon: 'fa-server',
      color: 'purple',
    },
    {
      key: 'architecture',
      icon: 'fa-sitemap',
      color: 'green',
    },
    {
      key: 'mvp',
      icon: 'fa-rocket',
      color: 'orange',
    },
    {
      key: 'enterprise',
      icon: 'fa-building',
      color: 'cyan',
    },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    // This will be handled by the IntersectionObserver
  }

  private setupScrollAnimations(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const delay = element.getAttribute('data-delay') || '0';

            setTimeout(() => {
              element.classList.add('animate');
            }, parseInt(delay));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((element) => {
      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
