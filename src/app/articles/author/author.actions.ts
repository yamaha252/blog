export namespace AuthorAction {
  export class Load {
    public static readonly type = '[Author] Load';

    constructor(public authorId: string) {
    }
  }
}
