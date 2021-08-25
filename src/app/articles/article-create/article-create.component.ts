import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleCreateService} from './article-create.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

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
              private articleCreateService: ArticleCreateService) {
  }

  ngOnInit() {
  }

  async submit() {
    this.submitting = true;
    try {
      await this.articleCreateService.create(this.title, this.imageUrl, this.text).toPromise();
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
