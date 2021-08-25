import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticleComponent} from './article.component';
import {ArticleResolver} from './article.resolver';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';
import { CommentRemoveDialogComponent } from './article-comments/comment-remove-dialog/comment-remove-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCommentsComponent,
    CommentRemoveDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
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
