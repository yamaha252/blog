import {ArticleQuery} from '../../graphql/graphql.generated';

export type Article = ArticleQuery['article'];
export type ArticleComments = Article['comments'];
