import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { IListPopularTagsResponse } from './../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  http = inject(HttpClient);

  getPopularTags() {
    return this.http
      .get<IListPopularTagsResponse>('/tags')
      .pipe(map(({ tags }) => tags));
  }
}
