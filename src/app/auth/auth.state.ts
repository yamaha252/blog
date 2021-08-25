import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AuthAction} from './auth.actions';
import {Persistence, StateRepository} from '@ngxs-labs/data/decorators';
import {Injectable} from '@angular/core';

export interface AuthStateModel {
  accessToken: string | null;
}

@Persistence([
  {
    path: 'auth',
    existingEngine: sessionStorage,
  },
])
@StateRepository()
@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    accessToken: null,
  }
})
@Injectable()
export class AuthState {

  @Selector()
  public static getState(state: AuthStateModel) {
    return state;
  }

  @Selector()
  public static accessToken(state: AuthStateModel) {
    return state.accessToken;
  }

  @Selector()
  public static isAuthenticated(state: AuthStateModel) {
    return !!state.accessToken;
  }

  @Action(AuthAction.Login)
  public login(ctx: StateContext<AuthStateModel>, {accessToken}: AuthAction.Login) {
    ctx.patchState({accessToken});
  }

  @Action(AuthAction.Logout)
  public logout(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      accessToken: null,
    });
  }
}
