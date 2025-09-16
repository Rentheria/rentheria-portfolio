import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class HeroComponent {}
