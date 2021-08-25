import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from '../../article.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {

  @ViewChild(NgForm, {static: true})
  form: NgForm;

  @Input() articleId: string;

  name: string;
  email: string;
  url: string;
  text: string;

  submitting: boolean;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
  }

  async submit() {
    this.submitting = true;
    try {
      await this.articleService.addComment(this.articleId, {
        name: this.name,
        email: this.email,
        url: this.url,
        text: this.text,
      }).toPromise();
      this.form.resetForm({});
    } catch (e) {
      this.form.control.setErrors({
        backend: true,
      });
    } finally {
      this.submitting = false;
    }
  }
}
