import {Component, OnInit} from '@angular/core';
import {ArticlesState, ArticlesStateModel} from './articles.state';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {ArticlesAction} from './articles.actions';
import {AuthorAction} from './author/author.actions';
import {MatDialog} from '@angular/material/dialog';
import {AuthorComponent} from './author/author.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Select(ArticlesState.articles)
  articles$: Observable<ArticlesStateModel['articles']>;

  @Select(ArticlesState.pagesCount)
  pagesCount$: Observable<number>;

  constructor(private store: Store,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  loadPage(page: number) {
    this.store.dispatch(new ArticlesAction.Load(page));
  }

  async openAuthor(authorId: string) {
    await this.store.dispatch(new AuthorAction.Load(authorId)).toPromise();
    this.dialog.open<AuthorComponent>(AuthorComponent);
  }
}
