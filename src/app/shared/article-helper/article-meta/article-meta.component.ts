import { Component, Input, OnInit } from '@angular/core';
import { ArticleModel } from 'app/apis/articles/article.model';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.css'],
})
export class ArticleMetaComponent implements OnInit {
  @Input() article: ArticleModel.Article;
  constructor() {}

  ngOnInit(): void {}
}
