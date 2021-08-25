export namespace ArticlesAction {
  export class Load {
    public static readonly type = '[Articles] Load items';

    constructor(public page: number = 1) {
    }
  }
}
