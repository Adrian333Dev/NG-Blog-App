import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'global-feed',
    loadChildren: () =>
      import('./global-feed/global-feed.routes').then(
        (m) => m.globalFeedRoutes
      ),
  },
];
