/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

import { AppComponent } from '@/app.component';
import { appRoutes } from '@/app.routes';

import { authFeatureKey, authReducer } from '@auth/store/reducers';
import { AuthEffects } from '@auth/store/effects';
import { authInterceptor } from '@auth/interceptors';
import { FeedEffects } from '@/features/feed/store/effects';
import { feedFeatureKey, feedReducer } from '@/features/feed/store/reducers';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes),
    provideStore({ router: routerReducer }),
    provideRouterStore(),
    provideEffects([AuthEffects, FeedEffects]),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
});
