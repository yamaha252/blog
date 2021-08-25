import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticleComponent} from './article.component';
import {ArticleResolver} from './article.resolver';
import {ArticleCommentsComponent} from './article-comments/article-comments.component';
import {CommentDeleteDialogComponent} from './article-comments/comment-delete-dialog/comment-delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxsModule} from '@ngxs/store';
import {ArticleState} from './article.state';
import { CommentCreateComponent } from './article-comments/comment-create/comment-create.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCommentsComponent,
    CommentDeleteDialogComponent,
    CommentCreateComponent
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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class ArticleModule {
}
