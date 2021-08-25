import {Injectable} from '@angular/core';
import {ArticleAddGQL, ArticleInput} from '../../graphql/graphql.generated';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleCreateService {

  constructor(private articleAddGQL: ArticleAddGQL) {
  }

  create(article: ArticleInput) {
    return this.articleAddGQL.mutate({article})
      .pipe(
        map(result => result.data?.articleAdd)
      );
  }
}
