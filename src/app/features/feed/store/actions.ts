import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IGetFeedResponse } from './../models/interfaces';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get Feed': props<{ url: string }>(),
    'Get Feed Success': props<{ feed: IGetFeedResponse }>(),
    'Get Feed Failure': emptyProps(),
  },
});
