import { ArticleModel } from '../articles/article.model';

export namespace CommentModel {
  export interface SingleComment {
    id: number;
    createdAt: string;
    updatedAt: string;
    body: string;
    author: ArticleModel.Author;
  }

  export interface MultipleComment {
    comments: [SingleComment];
  }
}
