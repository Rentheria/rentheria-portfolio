import { Component } from '@angular/core';
import { HeroComponent } from '../../../shared/components/hero/hero.component';
import { AboutComponent } from '../../../shared/components/about/about.component';

@Component({
  selector: 'app-overview',
  imports: [HeroComponent, AboutComponent],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {}
