import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticleComponent} from './article.component';
import {ArticleResolver} from './article.resolver';
import {ArticleCommentsComponent} from './article-comments/article-comments.component';
import {CommentRemoveDialogComponent} from './article-comments/comment-remove-dialog/comment-remove-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxsModule} from '@ngxs/store';
import {ArticleState} from './article.state';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCommentsComponent,
    CommentRemoveDialogComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([ArticleState]),
    RouterModule.forChild([
      {
        path: ':articleId',
        component: ArticleComponent,
        resolve: {
          article: ArticleResolver,
        }
      }
    ]),
    MatDialogModule,
  ]
})
export class ArticleModule {
}
