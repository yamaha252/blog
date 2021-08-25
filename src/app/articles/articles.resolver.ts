import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Store} from '@ngxs/store';
import {ArticlesAction} from './articles.actions';
import {ArticlesStateModel} from './articles.state';

@Injectable({
  providedIn: 'root',
})
export class ArticlesResolver implements Resolve<ArticlesStateModel> {
  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.dispatch(new ArticlesAction.Load());
  }
}
