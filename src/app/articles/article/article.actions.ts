export namespace ArticleAction {
  export class Load {
    public static readonly type = '[Article] Load item';

    constructor(public id: string) {
    }
  }

  export class RemoveComment {
    public static readonly type = '[Article] Remove comment';

    constructor(public commentId: string) {
    }
  }
}
