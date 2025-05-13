import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-user',
    pathMatch: 'full',
  },
  {
    path: 'create-user',
    loadComponent: () => import('./features/create-user/create-user.component').then((m) => m.CreateUserComponent),
  },
];
