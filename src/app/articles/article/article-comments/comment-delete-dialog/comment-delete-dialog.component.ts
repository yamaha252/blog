import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArticleService} from '../../article.service';

export interface CommentDeleteDialogComponentData {
  commentId: string;
}

@Component({
  selector: 'app-comment-delete-dialog',
  templateUrl: './comment-delete-dialog.component.html',
  styleUrls: ['./comment-delete-dialog.component.scss']
})
export class CommentDeleteDialogComponent implements OnInit {

  removing: boolean;

  constructor(@Inject(MAT_DIALOG_DATA)
              private data: CommentDeleteDialogComponentData,
              private dialog: MatDialogRef<CommentDeleteDialogComponent>,
              private articleService: ArticleService) {
  }

  ngOnInit() {
  }

  async remove() {
    this.removing = true;
    await this.articleService.deleteComment(this.data.commentId);
    this.dialog.close();
  }
}
