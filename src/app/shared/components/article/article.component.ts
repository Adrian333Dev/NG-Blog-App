import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IArticle } from '@shared/models/interfaces';
import { RouterLink } from '@angular/router';
import { EllipsisPipe } from '@shared/pipes';
import { ArticleTagsListComponent } from '../article-tags-list/article-tags-list.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink, EllipsisPipe, ArticleTagsListComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: IArticle = {} as IArticle;
}
