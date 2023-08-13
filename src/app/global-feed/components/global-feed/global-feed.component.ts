import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from '@shared/components';

@Component({
  selector: 'app-global-feed',
  standalone: true,
  imports: [CommonModule, FeedComponent],
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
})
export class GlobalFeedComponent {}
