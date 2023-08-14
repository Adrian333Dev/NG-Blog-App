import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-tags.component.html',
  styleUrls: ['./article-tags.component.scss'],
})
export class ArticleTagsComponent {
  @Input() tags: string[] = [];
}
