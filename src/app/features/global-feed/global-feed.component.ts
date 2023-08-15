import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent, PopularTagsComponent } from '@shared/components';
import { FeedComponent } from '@/features/feed/feed.component';

@Component({
  selector: 'app-global-feed',
  standalone: true,
  imports: [CommonModule, FeedComponent, BannerComponent, PopularTagsComponent],
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
