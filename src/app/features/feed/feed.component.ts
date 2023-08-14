import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import queryString from 'query-string';

import { feedActions } from './store/actions';
import { selectError, selectFeedData, selectIsLoading } from './store/reducers';
import {
  ArticleListComponent,
  ErrorMessageComponent,
  LoaderPageComponent,
  PaginationComponent,
} from '@shared/components';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ArticleListComponent,
    LoaderPageComponent,
    ErrorMessageComponent,
    PaginationComponent,
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';

  store = inject(Store);
  router = inject(Router);
  route = inject(ActivatedRoute);

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  });

  // articles pagination properties
  limit: number = environment.paginationLimit;
  baseUrl = this.router.url.split('?')[0];
  currentPage: number = 1;

  onSetPage(page: number): void {
    this.router.navigate([this.baseUrl], {
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      (this.currentPage = Number(queryParams['page'] || '1')), this.getFeed();
    });
  }

  getFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrl);
    const apiUrl = `${parsedUrl.url}?${queryString.stringify({
      ...parsedUrl.query,
      limit: this.limit,
      offset,
    })}`;
    this.store.dispatch(feedActions.getFeed({ url: apiUrl }));
  }
}
