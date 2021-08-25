import {ArticlesQuery} from '../graphql/graphql.generated';

export type Article = ArticlesQuery['articles']['items'][number];
