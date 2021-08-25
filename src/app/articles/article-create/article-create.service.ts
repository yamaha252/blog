import {Injectable} from '@angular/core';
import {ArticleCreateModule} from './article-create.module';
import {ArticleAddGQL} from '../../graphql/graphql.generated';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: ArticleCreateModule
})
export class ArticleCreateService {

  constructor(private articleAddGQL: ArticleAddGQL) {
  }

  create(title: string, imageUrl: string, text: string) {
    return this.articleAddGQL.mutate({article: {title, imageUrl, text}})
      .pipe(
        map(result => result.data?.articleAdd)
      );
  }
}
