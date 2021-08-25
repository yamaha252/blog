import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {ArticleAction} from './article.actions';
import {CommentInput} from '../../graphql/graphql.generated';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private store: Store) {
  }

  addComment(articleId: string, comment: CommentInput) {
    return this.store.dispatch(new ArticleAction.AddComment(articleId, comment));
  }

  deleteComment(commentId: string) {
    return this.store.dispatch(new ArticleAction.DeleteComment(commentId));
  }
}
