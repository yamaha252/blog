export namespace AuthAction {
  export class Login {
    public static readonly type = '[Auth] Login';

    constructor(public accessToken: string) {
    }
  }

  export class Logout {
    public static readonly type = '[Auth] Logout';
  }
}
