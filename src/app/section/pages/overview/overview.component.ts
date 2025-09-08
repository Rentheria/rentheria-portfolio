import { Component } from '@angular/core';
import { HeroComponent } from '../../../shared/components/hero/hero.component';

@Component({
  selector: 'app-overview',
  imports: [HeroComponent],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {}
