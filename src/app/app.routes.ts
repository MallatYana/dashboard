import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  canActivate: [],
  children: [
    {
      path: 'dashboard',
      loadComponent: () =>
        import('./pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent),
      data: {
        title: 'Dashboard',
      }
    },
    {
      path: 'not-found',
      loadComponent: () =>
        import('./pages/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
      data: {
        title: '404',
      }
    },
    {
      path: '**',
      redirectTo: 'not-found',
    },
  ]
}]
