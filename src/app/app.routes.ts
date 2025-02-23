import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/todos/todos.component').then((m) => m.TodosComponent),
  },
];
