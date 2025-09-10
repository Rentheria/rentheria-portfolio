import { Component } from '@angular/core';
import { HeroComponent } from '../../../shared/components/hero/hero.component';
import { AboutComponent } from '../../../shared/components/about/about.component';
import { ProjectComponent } from '../../../shared/components/project/project.component';
import { CareerHistoryComponent } from '../../../shared/components/career-history/career-history.component';
import { ContactComponent } from '../../../shared/components/contact/contact.component';
import { ToastComponent } from '../../../shared/components/toast/toast.component';

@Component({
  selector: 'app-overview',
  imports: [
    HeroComponent,
    AboutComponent,
    ProjectComponent,
    CareerHistoryComponent,
    ContactComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {}
