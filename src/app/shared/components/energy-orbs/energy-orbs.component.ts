import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-energy-orbs',
  template: `
    <div class="floating-icon" [class.animate]="shouldAnimate">
      <div class="w-16 h-16 energy-orb energy-orb-electric"></div>
    </div>
    <div class="floating-icon" [class.animate]="shouldAnimate">
      <div class="w-20 h-20 energy-orb energy-orb-cyber"></div>
    </div>
    <div class="floating-icon" [class.animate]="shouldAnimate">
      <div class="w-24 h-24 energy-orb energy-orb-psychic"></div>
    </div>
  `,
  styleUrl: './energy-orbs.component.css',
})
export class EnergyOrbsComponent implements OnInit, OnDestroy {
  shouldAnimate = false;
  private animationTimeout?: number;

  ngOnInit() {
    // Delay animation start to improve initial load performance
    this.animationTimeout = window.setTimeout(() => {
      this.shouldAnimate = true;
    }, 1000);
  }

  ngOnDestroy() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }
}
