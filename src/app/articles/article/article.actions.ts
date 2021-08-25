import {CommentInput} from '../../graphql/graphql.generated';

export namespace ArticleAction {
  export class Load {
    public static readonly type = '[Article] Load item';

    constructor(public id: string) {
    }
  }

  export class AddComment {
    public static readonly type = '[Article] Add comment';

    constructor(public articleId: string,
                public comment: CommentInput) {
    }
  }

  export class DeleteComment {
    public static readonly type = '[Article] Delete comment';

    constructor(public commentId: string) {
    }
  }
}
