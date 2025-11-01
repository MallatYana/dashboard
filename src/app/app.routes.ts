import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [{
  path: '',
  canActivate: [],
  children: [
    {
      path: 'dashboard',
      component: DashboardPageComponent,
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'dashboard',
    },
  ]
}]
