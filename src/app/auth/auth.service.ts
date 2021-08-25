import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {AuthAction} from './auth.actions';
import {LoginGQL, LogoutGQL} from '../graphql/graphql.generated';
import {Store} from '@ngxs/store';
import {AuthState} from './auth.state';
import {AuthModule} from './auth.module';

@Injectable({
  providedIn: AuthModule,
})
export class AuthService {

  constructor(private store: Store,
              private loginGQL: LoginGQL,
              private logoutGQL: LogoutGQL) {
  }

  get accessToken() {
    return this.store.selectSnapshot(AuthState.accessToken);
  }

  login(login: string, password: string) {
    return this.loginGQL.mutate({login, password}).pipe(
      map(result => result.data?.login.accessToken),
      tap(accessToken => {
        if (accessToken) {
          this.store.dispatch(new AuthAction.Login(accessToken));
        }
      }),
    );
  }

  logout() {
    return this.logoutGQL.mutate().pipe(
      tap(() => {
        this.store.dispatch(new AuthAction.Logout());
      }),
    );
  }
}
