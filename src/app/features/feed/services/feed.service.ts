import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { IGetFeedResponse } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  http = inject(HttpClient);

  getFeed(url: string): Observable<IGetFeedResponse> {
    return this.http.get<IGetFeedResponse>(url);
  }
}
