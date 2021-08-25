import {Component, Inject, OnInit} from '@angular/core';
import {ArticleAction} from '../../article.actions';
import {Store} from '@ngxs/store';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface CommentRemoveDialogComponentData {
  commentId: string;
}

@Component({
  selector: 'app-comment-remove-dialog',
  templateUrl: './comment-remove-dialog.component.html',
  styleUrls: ['./comment-remove-dialog.component.scss']
})
export class CommentRemoveDialogComponent implements OnInit {

  removing: boolean;

  constructor(@Inject(MAT_DIALOG_DATA)
              private data: CommentRemoveDialogComponentData,
              private dialog: MatDialogRef<CommentRemoveDialogComponent>,
              private store: Store) {
  }

  ngOnInit() {
  }

  async remove() {
    this.removing = true;
    await this.store.dispatch(new ArticleAction.RemoveComment(this.data.commentId));
    this.dialog.close();
  }
}
