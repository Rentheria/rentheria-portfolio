import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
    ],
  },
];
