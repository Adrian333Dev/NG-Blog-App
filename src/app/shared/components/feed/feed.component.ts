import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';

import { feedActions } from './store/actions';
import { selectError, selectFeedData, selectIsLoading } from './store/reducers';
import { ArticleListComponent } from '../article-list/article-list.component';
import { LoaderPageComponent } from '../loader-page/loader-page.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ArticleListComponent,
    LoaderPageComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';

  store = inject(Store);

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  });

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({ url: this.apiUrl }));
  }
}
