import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: 'posts',
    loadComponent: () =>
      import('./posts/view-list/view-list.component').then(
        (m) => m.ViewListComponent
      ),
  },
];
