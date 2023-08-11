/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AppComponent } from '@/app.component';
import { appRoutes } from '@/app.routes';

import { authFeatureKey, authReducer } from '@auth/store/reducers';
import { AuthEffects } from '@auth/store/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideStore(),
    provideEffects(AuthEffects),
    provideState(authFeatureKey, authReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
});
