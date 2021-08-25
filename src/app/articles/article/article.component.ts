import {Component, OnInit} from '@angular/core';
import {ArticleState} from './article.state';
import {Observable} from 'rxjs';
import {Article} from './article';
import {Select} from '@ngxs/store';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Select(ArticleState.article)
  article$: Observable<Article>;

  constructor() {
  }

  ngOnInit() {
  }

}
