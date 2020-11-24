// tslint:disable-next-line: no-namespace
export namespace ArticleModel {
  export interface MultipleArticle {
    articles: Article[];
    articlesCount: number;
  }

  export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
  }

  export interface Author {
    username: string;
    bio: string | null;
    image: string | null;
    following: boolean;
  }
}
