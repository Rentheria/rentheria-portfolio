import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './section.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(DASHBOARD_ROUTES)],
})
export class DashboardModule {}
