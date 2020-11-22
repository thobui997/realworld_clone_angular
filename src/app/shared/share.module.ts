import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-helper/article-list/article-list.component';
import { ArticleMetaComponent } from './article-helper/article-meta/article-meta.component';
import { ArticlePreviewComponent } from './article-helper/article-preview/article-preview.component';
import { ButtonFavoriteComponent } from './buttons/button-favorite/button-favorite.component';
import { ButtonFollowComponent } from './buttons/button-follow/button-follow.component';
import { ShowAuthenticateDirective } from './directives/show-authenticate.directive';

@NgModule({
  declarations: [
    ShowAuthenticateDirective,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    ButtonFollowComponent,
    ButtonFavoriteComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    ShowAuthenticateDirective,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    ButtonFollowComponent,
    ButtonFavoriteComponent,
  ],
})
export class ShareModule {}
