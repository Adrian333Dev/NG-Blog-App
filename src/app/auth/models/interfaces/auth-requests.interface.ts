import { ISignInForm, ISignUpForm } from './auth-forms.interface';

export interface ISignUpRequest {
  user: ISignUpForm;
}

export interface ISignInRequest {
  user: ISignInForm;
}
