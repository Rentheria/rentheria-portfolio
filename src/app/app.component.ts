import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerminalComponent } from './shared/components/terminal/terminal.component';
import { EnergyOrbsComponent } from './shared/components/energy-orbs/energy-orbs.component';

@Component({
  selector: 'app-root',
  imports: [TerminalComponent, EnergyOrbsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rentheria-portfolio';
}
