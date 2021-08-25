import {State, Action, Selector, StateContext} from '@ngxs/store';
import {ArticleAction} from './article.actions';
import {Article} from './article';
import {ArticleGQL, CommentAddGQL, CommentDeleteGQL} from '../../graphql/graphql.generated';
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

  constructor(private articleGQL: ArticleGQL,
              private commentAddGQL: CommentAddGQL,
              private commentDeleteGQL: CommentDeleteGQL) {
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
      .fetch({id}, {fetchPolicy: 'no-cache'})
      .pipe(
        map(result => result.data.article),
      )
      .toPromise();
    ctx.patchState({article});
  }

  @Action(ArticleAction.AddComment)
  async addComment(ctx: StateContext<ArticleStateModel>, {articleId, comment}: ArticleAction.AddComment) {
    const {article} = ctx.getState();
    const result = await this.commentAddGQL
      .mutate({articleId, comment})
      .pipe(
        map(result => result.data?.commentAdd)
      )
      .toPromise();

    if (article && result) {
      ctx.patchState({
        article: {
          ...article,
          comments: result.comments
        }
      });
    }
  }

  @Action(ArticleAction.DeleteComment)
  async removeComment(ctx: StateContext<ArticleStateModel>, {commentId}: ArticleAction.DeleteComment) {
    const {article} = ctx.getState();
    const result = await this.commentDeleteGQL
      .mutate({commentId})
      .pipe(
        map(result => result.data?.commentDelete)
      )
      .toPromise();

    if (article && result) {
      ctx.patchState({
        article: {
          ...article,
          comments: result.comments
        }
      });
    }
  }
}
