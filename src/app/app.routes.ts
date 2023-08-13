import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/global-feed/global-feed.routes').then(
        (m) => m.globalFeedRoutes
      ),
  },
];
