import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment.development';

import { IAuthResponse, ISignUpRequest } from '@auth/models/interfaces';
import { ICurrentUser } from '@shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  http = inject(HttpClient);

  signUp(payload: ISignUpRequest): Observable<ICurrentUser> {
    return this.http
      .post<IAuthResponse>(`${this.apiUrl}`, payload)
      .pipe(map((res) => res.currentUser));
  }
}
