import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { map, switchMap, of, catchError, tap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { AuthService } from '@auth/services';
import { PersistenceService } from '@shared/service';
import { authActions } from './actions';

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  store = inject(Store);
  router = inject(Router);

  authService = inject(AuthService);
  persistenceService = inject(PersistenceService);

  signUpEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signUp),
      switchMap((req) =>
        this.authService.signUp(req).pipe(
          map((user) => {
            this.persistenceService.set('accessToken', user.token);
            return authActions.signUpSuccess({ user });
          }),
          catchError(({ error: { errors } }: HttpErrorResponse) =>
            of(authActions.signUpFailure({ errors }))
          )
        )
      )
    );
  });

  signInEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signIn),
      switchMap((req) =>
        this.authService.signIn(req).pipe(
          map((user) => {
            this.persistenceService.set('accessToken', user.token);
            return authActions.signInSuccess({ user });
          }),
          catchError(({ error: { errors } }: HttpErrorResponse) =>
            of(authActions.signInFailure({ errors }))
          )
        )
      )
    );
  });

  redirectAfterSignUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.signUpSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );

  redirectAfterSignInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.signInSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );
}
