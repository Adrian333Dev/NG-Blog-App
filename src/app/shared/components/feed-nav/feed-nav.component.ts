import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import { selectCurrentUser } from '@auth/store/reducers';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feed-nav',
  standalone: true,
  imports: [CommonModule, NgbNavModule, RouterLink],
  templateUrl: './feed-nav.component.html',
  styleUrls: ['./feed-nav.component.scss'],
})
export class FeedNavComponent {
  @Input() activeTab: string = '';

  store = inject(Store);

  currentUser$ = this.store.select(selectCurrentUser);
}
