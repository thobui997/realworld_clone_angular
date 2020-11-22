import { Component, Input, OnInit } from '@angular/core';
import { ArticleModel } from 'app/apis/articles/article.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css'],
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: ArticleModel.Article;
  constructor() {}

  ngOnInit(): void {}

  onToggleFavorite(favorite: boolean) {
    this.article.favorited = favorite;
    if (favorite) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
}
