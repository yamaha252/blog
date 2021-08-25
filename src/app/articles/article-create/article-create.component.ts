import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleCreateService} from './article-create.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Store} from '@ngxs/store';
import {ArticlesAction} from '../articles.actions';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  @ViewChild(NgForm, {static: true})
  form: NgForm;

  title: string;
  imageUrl: string;
  text: string;

  submitting: boolean;

  constructor(private router: Router,
              private store: Store,
              private articleCreateService: ArticleCreateService) {
  }

  ngOnInit() {
  }

  async submit() {
    this.submitting = true;
    try {
      await this.articleCreateService.create({
        title: this.title,
        imageUrl: this.imageUrl,
        text: this.text,
      }).toPromise();
      await this.store.dispatch(new ArticlesAction.Load()).toPromise();
      this.router.navigate(['/']);
    } catch (e) {
      this.form.control.setErrors({
        backend: true,
      });
    } finally {
      this.submitting = false;
    }
  }
}
