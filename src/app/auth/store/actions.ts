import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  IAuthResponse,
  ISignInRequest,
  ISignUpRequest,
} from '@auth/models/interfaces';
import { IServerErrorsResponse } from '@shared/models/interfaces';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    'Sign Up': props<ISignUpRequest>(),
    'Sign Up Success': props<IAuthResponse>(),
    'Sign Up Failure': props<IServerErrorsResponse>(),

    'Sign In': props<ISignInRequest>(),
    'Sign In Success': props<IAuthResponse>(),
    'Sign In Failure': props<IServerErrorsResponse>(),

    'Get Current User': emptyProps(),
    'Get Current User Success': props<IAuthResponse>(),
    'Get Current User Failure': emptyProps(),
  },
});
