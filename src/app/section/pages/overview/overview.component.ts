import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../../shared/components/hero/hero.component';
import { AboutComponent } from '../../../shared/components/about/about.component';
import { ProjectComponent } from '../../../shared/components/project/project.component';
import { CareerHistoryComponent } from '../../../shared/components/career-history/career-history.component';
import { ContactComponent } from '../../../shared/components/contact/contact.component';

@Component({
  selector: 'app-overview',
  imports: [
    HeroComponent,
    AboutComponent,
    ProjectComponent,
    CareerHistoryComponent,
    ContactComponent,
    CommonModule,
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit, AfterViewInit {
  componentsLoaded = {
    hero: true,
    about: false,
    projects: false,
    experience: false,
    contact: false,
  };

  ngOnInit() {
    // Preload critical components
    this.preloadComponents();
  }

  ngAfterViewInit() {
    // Setup intersection observer for lazy loading
    this.setupLazyLoading();
  }

  private preloadComponents() {
    // Load about component after hero
    setTimeout(() => {
      this.componentsLoaded.about = true;
    }, 500);
  }

  private setupLazyLoading() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const component = target.getAttribute('data-component');

            if (
              component &&
              !this.componentsLoaded[
                component as keyof typeof this.componentsLoaded
              ]
            ) {
              this.componentsLoaded[
                component as keyof typeof this.componentsLoaded
              ] = true;
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px',
      }
    );

    // Observe lazy-loaded sections
    const lazySections = document.querySelectorAll('[data-component]');
    lazySections.forEach((section) => observer.observe(section));
  }
}
