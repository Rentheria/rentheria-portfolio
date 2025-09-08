import { Component } from '@angular/core';

@Component({
  selector: 'app-energy-orbs',
  template: `
    <div class="floating-icon">
      <div
        class="w-16 h-16 float animate-float energy-orb energy-orb-electric"
      ></div>
    </div>
    <div class="floating-icon">
      <div
        class="w-20 h-20 float animate-float energy-orb energy-orb-cyber"
      ></div>
    </div>
    <div class="floating-icon">
      <div
        class="w-24 h-24 float animate-float energy-orb energy-orb-psychic"
      ></div>
    </div>
  `,
  styleUrl: './energy-orbs.component.css',
})
export class EnergyOrbsComponent {}
