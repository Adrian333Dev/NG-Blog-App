import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from '../article/article.component';
import { IArticle } from '@shared/models/interfaces';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  @Input() articles: IArticle[] = [];
}
