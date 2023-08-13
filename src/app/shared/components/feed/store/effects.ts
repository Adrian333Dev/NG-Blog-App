import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { map, switchMap, of, catchError, tap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { feedActions } from './actions';
import { FeedService } from '../services';

@Injectable()
export class FeedEffects {
  actions$ = inject(Actions);
  feedService = inject(FeedService);

  getFeedEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({ url }) =>
        this.feedService.getFeed(url).pipe(
          map((feed) => feedActions.getFeedSuccess({ feed })),
          catchError(() => of(feedActions.getFeedFailure()))
        )
      )
    );
  });
}
