import { createFeature, createReducer, on } from '@ngrx/store';
import { IFeedState } from '../models/interfaces';
import { feedActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getFeed, (state) => ({
      ...state,
      isLoading: true,
      error: null,
      data: null,
    })),
    on(feedActions.getFeedSuccess, (state, { feed: data }) => ({
      ...state,
      isLoading: false,
      error: null,
      data,
    })),
    on(feedActions.getFeedFailure, (state) => ({
      ...state,git 
      isLoading: false,
      error: 'Error loading feed',
      data: null,
    })),
    on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsLoading,
  selectError,
  selectData: selectFeedData,
} = feedFeature;
