import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../article';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AuthState} from '../../../auth/auth.state';
import {MatDialog} from '@angular/material/dialog';
import {
  CommentDeleteDialogComponent,
  CommentDeleteDialogComponentData
} from './comment-delete-dialog/comment-delete-dialog.component';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss']
})
export class ArticleCommentsComponent implements OnInit {

  @Input() article: Article;

  @Select(AuthState.isAuthenticated)
  isAuthenticated$: Observable<boolean>;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  remove(commentId: string) {
    this.dialog.open<CommentDeleteDialogComponent, CommentDeleteDialogComponentData>(CommentDeleteDialogComponent, {
      data: {commentId},
    })
  }
}
