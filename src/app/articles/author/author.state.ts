import {State, Action, Selector, StateContext} from '@ngxs/store';
import {AuthorAction} from './author.actions';
import {Injectable} from '@angular/core';
import {Author} from './author';
import {AuthorGQL} from '../../graphql/graphql.generated';
import {map} from 'rxjs/operators';

export interface AuthorStateModel {
  author: Author | null;
}

@State<AuthorStateModel>({
  name: 'author',
  defaults: {
    author: null,
  }
})
@Injectable()
export class AuthorState {

  constructor(private authorGQL: AuthorGQL) {
  }


  @Selector()
  static getState(state: AuthorStateModel) {
    return state;
  }

  @Selector()
  static author({author}: AuthorStateModel) {
    return author;
  }

  @Action(AuthorAction.Load)
  async load(ctx: StateContext<AuthorStateModel>, {authorId: id}: AuthorAction.Load) {
    const author = await this.authorGQL
      .fetch({id}, {fetchPolicy: 'no-cache'})
      .pipe(
        map(result => result.data.author)
      )
      .toPromise();
    ctx.patchState({author});
  }
}
