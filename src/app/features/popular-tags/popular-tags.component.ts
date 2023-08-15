import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';

import { popularTagsActions } from './store/actions';
import {
  selectError,
  selectIsLoading,
  selectPopularTagsData,
} from './store/reducers';
import { ErrorMessageComponent, LoaderPageComponent } from '@shared/components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular-tags',
  standalone: true,
  imports: [CommonModule, LoaderPageComponent, ErrorMessageComponent, RouterLink],
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  store = inject(Store);

  data$ = combineLatest({
    tags: this.store.select(selectPopularTagsData),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
  });
  ngOnInit() {
    this.store.dispatch(popularTagsActions.getPopularTags());
  }
}
