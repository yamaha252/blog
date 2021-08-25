import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {ArticleStateModel} from './article.state';
import {Store} from '@ngxs/store';
import {ArticleAction} from './article.actions';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolver implements Resolve<ArticleStateModel> {
  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('articleId');
    if (id) {
      return this.store.dispatch(new ArticleAction.Load(id));
    }
    throw new Error('No article found');
  }
}
