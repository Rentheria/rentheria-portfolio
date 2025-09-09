import { Component } from '@angular/core';
import { HeroComponent } from '../../../shared/components/hero/hero.component';
import { AboutComponent } from '../../../shared/components/about/about.component';
import { ProjectComponent } from '../../../shared/components/project/project.component';

@Component({
  selector: 'app-overview',
  imports: [HeroComponent, AboutComponent, ProjectComponent],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {}
