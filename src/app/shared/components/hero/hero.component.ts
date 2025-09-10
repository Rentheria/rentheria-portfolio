import { Component } from '@angular/core';
import { EnergyOrbsComponent } from '../energy-orbs/energy-orbs.component';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-hero',
  imports: [EnergyOrbsComponent, TerminalComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
