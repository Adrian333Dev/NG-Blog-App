import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-tags-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-tags-list.component.html',
  styleUrls: ['./article-tags-list.component.scss'],
})
export class ArticleTagsListComponent {
  @Input() tags: string[] = [];
}
