import {State, Action, Selector, StateContext} from '@ngxs/store';
import {ArticlesAction} from './articles.actions';
import {ArticlesGQL} from '../graphql/graphql.generated';
import {Article} from './articles';
import {map} from 'rxjs/operators';

export interface ArticlesStateModel {
  articles: Article[];
  totalCount: number;
}

@State<ArticlesStateModel>({
  name: 'articles',
  defaults: {
    articles: [],
    totalCount: 0,
  }
})
export class ArticlesState {

  static countOnPage = 20;

  constructor(private articlesGQL: ArticlesGQL) {
  }

  @Selector()
  static getState(state: ArticlesStateModel) {
    return state;
  }

  @Selector()
  static articles({articles}: ArticlesStateModel) {
    return articles;
  }

  @Selector()
  static totalCount({totalCount}: ArticlesStateModel) {
    return totalCount;
  }

  @Selector()
  static pagesCount({totalCount}: ArticlesStateModel) {
    return Math.ceil(totalCount / this.countOnPage);
  }

  @Action(ArticlesAction.Load)
  async load(ctx: StateContext<ArticlesStateModel>, {page}: ArticlesAction.Load) {
    const limit = ArticlesState.countOnPage;
    const offset = limit * (page - 1);
    const {items: articles, totalCount} = await this.articlesGQL
      .fetch({limit, offset}, {fetchPolicy: 'cache-first'})
      .pipe(
        map(result => result.data.articles)
      ).toPromise();

    ctx.patchState({articles, totalCount});
  }
}