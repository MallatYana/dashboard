import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  canActivate: [],
  children: [
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./shared/dashboard/dashboard.routes').then(m => m.dashboardRoutes)
    },
    {
      path: 'dashboard/:id',
      loadChildren: () =>
        import('./shared/dashboard/dashboard.routes').then(m => m.dashboardRoutes)
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'dashboard',
    },
  ]
}]
