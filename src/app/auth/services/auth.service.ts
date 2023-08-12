import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import {
  IAuthResponse,
  ISignInRequest,
  ISignUpRequest,
} from '@auth/models/interfaces';
import { ICurrentUser } from '@shared/models/interfaces';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = `${environment.apiUrl}/users`;

  http = inject(HttpClient);

  getCurrentUser(): Observable<ICurrentUser> {
    return this.http
      .get<IAuthResponse>(`${apiUrl}/user`)
      .pipe(map(({ user }) => user));
  }

  signUp(payload: ISignUpRequest): Observable<ICurrentUser> {
    return this.http
      .post<IAuthResponse>(`${this.url}`, payload)
      .pipe(map(({ user }) => user));
  }

  signIn(payload: ISignInRequest): Observable<ICurrentUser> {
    return this.http
      .post<IAuthResponse>(`${this.url}/login`, payload)
      .pipe(map(({ user }) => user));
  }
}
