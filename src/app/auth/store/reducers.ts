import { IAuthState } from '@auth/models/interfaces';
import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './actions';

const initialState: IAuthState = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.signUp, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(authActions.signUpSuccess, (state, { user }) => ({
      ...state,
      isSubmitting: false,
      currentUser: user,
    })),
    on(authActions.signUpFailure, (state, { errors }) => ({
      ...state,
      isSubmitting: false,
      validationErrors: errors,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature;
