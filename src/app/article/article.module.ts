import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [ArticleComponent, ArticleCommentComponent],
  imports: [CommonModule, ArticleRoutingModule, ShareModule],
})
export class ArticleModule {}
