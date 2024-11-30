import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path:'', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
    ],
  },
  { path: '**', loadComponent: () => import('./shared/pages/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) },
];
