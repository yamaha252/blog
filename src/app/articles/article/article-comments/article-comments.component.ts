import {Component, Input, OnInit} from '@angular/core';
import {ArticleComments} from '../article';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AuthState} from '../../../auth/auth.state';
import {MatDialog} from '@angular/material/dialog';
import {
  CommentRemoveDialogComponent,
  CommentRemoveDialogComponentData
} from './comment-remove-dialog/comment-remove-dialog.component';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss']
})
export class ArticleCommentsComponent implements OnInit {

  @Input() comments: ArticleComments;

  @Select(AuthState.isAuthenticated)
  isAuthenticated$: Observable<boolean>;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  remove(commentId: string) {
    this.dialog.open<CommentRemoveDialogComponent, CommentRemoveDialogComponentData>(CommentRemoveDialogComponent, {
      data: {commentId},
    })
  }
}
