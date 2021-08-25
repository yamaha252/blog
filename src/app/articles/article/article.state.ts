import {State, Action, Selector, StateContext} from '@ngxs/store';
import {ArticleAction} from './article.actions';
import {Article} from './article';
import {ArticleGQL} from '../../graphql/graphql.generated';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export interface ArticleStateModel {
  article: Article | null;
}

@State<ArticleStateModel>({
  name: 'article',
  defaults: {
    article: null
  }
})
@Injectable()
export class ArticleState {

  constructor(private articleGQL: ArticleGQL) {
  }

  @Selector()
  static getState(state: ArticleStateModel) {
    return state;
  }

  @Selector()
  static article({article}: ArticleStateModel) {
    return article;
  }

  @Action(ArticleAction.Load)
  async load(ctx: StateContext<ArticleStateModel>, {id}: ArticleAction.Load) {
    const article = await this.articleGQL
      .fetch({id}, {fetchPolicy: 'cache-first'})
      .pipe(
        map(result => result.data.article),
      )
      .toPromise();
    ctx.patchState({article});
  }
}
