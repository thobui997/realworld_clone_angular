import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAuthenticateDirective } from './directives/show-authenticate.directive';
import { ArticleMetaComponent } from './article-helper/article-meta/article-meta.component';
import { ArticlePreviewComponent } from './article-helper/article-preview/article-preview.component';
import { ArticleListComponent } from './article-helper/article-list/article-list.component';
import { ButtonFollowComponent } from './buttons/button-follow/button-follow.component';
import { ButtonFavoriteComponent } from './buttons/button-favorite/button-favorite.component';

@NgModule({
  declarations: [
    ShowAuthenticateDirective,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    ButtonFollowComponent,
    ButtonFavoriteComponent,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    ShowAuthenticateDirective,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    ButtonFollowComponent,
    ButtonFavoriteComponent,
  ],
})
export class ShareModule {}
