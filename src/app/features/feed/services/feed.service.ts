import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { IGetFeedResponse } from '../models/interfaces';
import { environment } from 'src/environments/environment.development';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private baseUrl = apiUrl;
  http = inject(HttpClient);

  getFeed(url: string): Observable<IGetFeedResponse> {
    return this.http.get<IGetFeedResponse>(`${this.baseUrl}${url}`);
  }
}
