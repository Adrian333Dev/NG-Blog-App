import { inject, Injectable } from '@angular/core';
import { map, switchMap, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { AuthService } from '@auth/services/auth.service';
import { authActions } from './actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService = inject(AuthService);
  store = inject(Store);

  signUpEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signUp),
      switchMap((req) =>
        this.authService.signUp(req).pipe(
          map((currentUser) => authActions.signUpSuccess({ currentUser })),
          catchError(({ error: { errors } }: HttpErrorResponse) =>
            of(authActions.signUpFailure({ errors }))
          )
        )
      )
    );
  });
}
