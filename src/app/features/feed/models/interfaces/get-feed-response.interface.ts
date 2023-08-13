import { IArticle } from '@shared/models/interfaces';

export interface IGetFeedResponse {
  articles: IArticle[];
  articlesCount: number;
}
