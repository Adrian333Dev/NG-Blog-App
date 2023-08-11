import { createActionGroup, props } from '@ngrx/store';
import { IAuthResponse, ISignUpRequest } from '@auth/models/interfaces';
import { IServerErrorsResponse } from '@shared/models/interfaces';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    'Sign Up': props<ISignUpRequest>(),
    'Sign Up Success': props<IAuthResponse>(),
    'Sign Up Failure': props<IServerErrorsResponse>(),
  },
});
