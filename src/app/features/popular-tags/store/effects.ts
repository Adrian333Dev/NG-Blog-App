import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, switchMap, of, catchError } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { PopularTagsService } from '../services';
import { popularTagsActions } from './actions';

@Injectable()
export class PopularTagsEffects {
  actions$ = inject(Actions);
  router = inject(Router);
  store = inject(Store);
  popularTagsService = inject(PopularTagsService);

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(popularTagsActions.getPopularTags),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags) =>
            popularTagsActions.getPopularTagsSuccess({ popularTags })
          ),
          catchError(() => of(popularTagsActions.getPopularTagsFailure()))
        );
      })
    )
  );
}
