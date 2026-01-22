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
  selector: 'app-why-work-with-me',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './why-work-with-me.component.html',
  styleUrls: ['./why-work-with-me.component.css'],
})
export class WhyWorkWithMeComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  differentiators = [
    {
      key: 'item1',
      icon: 'fa-comments',
      color: 'yellow',
    },
    {
      key: 'item2',
      icon: 'fa-hand-holding',
      color: 'blue',
    },
    {
      key: 'item3',
      icon: 'fa-lightbulb',
      color: 'purple',
    },
    {
      key: 'item4',
      icon: 'fa-award',
      color: 'green',
    },
    {
      key: 'item5',
      icon: 'fa-chart-line',
      color: 'orange',
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
