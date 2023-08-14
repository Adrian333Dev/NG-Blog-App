import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import {
  IAuthResponse,
  ISignInRequest,
  ISignUpRequest,
} from '@auth/models/interfaces';
import { ICurrentUser } from '@shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  getCurrentUser(): Observable<ICurrentUser> {
    return this.http.get<IAuthResponse>('/user').pipe(map(({ user }) => user));
  }

  signUp(payload: ISignUpRequest): Observable<ICurrentUser> {
    return this.http
      .post<IAuthResponse>('/users', payload)
      .pipe(map(({ user }) => user));
  }

  signIn(payload: ISignInRequest): Observable<ICurrentUser> {
    return this.http
      .post<IAuthResponse>('login', payload)
      .pipe(map(({ user }) => user));
  }
}
