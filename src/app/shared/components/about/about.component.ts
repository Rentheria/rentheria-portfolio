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
  selector: 'app-about',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    // This will be handled by the IntersectionObserver
  }

  private setupScrollAnimations(): void {
    // Create intersection observer
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

    // Observe all elements with scroll-animate class
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
