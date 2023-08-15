import { IAuthState } from '@auth/models/interfaces';
import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { IPopularTagsState } from '../models/interfaces/popular-tags-state.interface';
import { popularTagsActions } from './actions';

const initialState: IPopularTagsState = {
  isLoading: false,
  error: null,
  data: null,
};

const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    on(popularTagsActions.getPopularTags, (state) => ({
      ...state,
      isLoading: true,
      error: null,
    })),
    on(popularTagsActions.getPopularTagsSuccess, (state, { popularTags }) => ({
      ...state,
      isLoading: false,
      data: popularTags,
    })),
    on(popularTagsActions.getPopularTagsFailure, (state) => ({
      ...state,
      isLoading: false,
      error: 'Error while loading popular tags',
    }))
  ),
});

export const {
  name: popularTagsFeatureKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectError,
  selectData: selectPopularTagsData,
} = popularTagsFeature;
