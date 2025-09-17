import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EnergyOrbsComponent } from '../energy-orbs/energy-orbs.component';
import { TerminalComponent } from '../terminal/terminal.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule,
    EnergyOrbsComponent,
    TerminalComponent,
    TranslatePipe,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    // Navigate to home if not already there
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        this.scrollToElement(sectionId);
      });
    } else {
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(sectionId: string) {
    // Wait a bit for the page to load, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        console.warn(`Section with id "${sectionId}" not found`);
      }
    }, 100);
  }
}
