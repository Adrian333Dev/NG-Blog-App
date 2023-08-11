import { ICurrentUser, IServerErrors } from '@shared/models/interfaces';

export interface IAuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null | undefined;
  validationErrors: IServerErrors | null;
}
