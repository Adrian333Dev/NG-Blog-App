import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IArticle } from '@shared/models/interfaces';
import { RouterLink } from '@angular/router';
import { EllipsisPipe } from '@shared/pipes';
import { ArticleTagsComponent } from '../article-tags/article-tags.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink, EllipsisPipe, ArticleTagsComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: IArticle = {} as IArticle;
}
