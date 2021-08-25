/* tslint:disable:max-line-length */

/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Void: any;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['ID'];
  date: Scalars['DateTime'];
  author: Author;
  title: Scalars['String'];
  imageUrl: Scalars['String'];
  text: Scalars['String'];
  comments: Comments;
};

export type ArticleCommentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ArticleInput = {
  title: Scalars['String'];
  imageUrl: Scalars['String'];
  text: Scalars['String'];
};

export type Articles = {
  __typename?: 'Articles';
  items: Array<Article>;
  totalCount: Scalars['Int'];
};

export type AuthCredentials = {
  __typename?: 'AuthCredentials';
  accessToken: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
  articles: Articles;
};

export type AuthorArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  date: Scalars['DateTime'];
  name: Scalars['String'];
  email: Scalars['String'];
  url: Scalars['String'];
  text: Scalars['String'];
  article: Article;
};

export type CommentInput = {
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

export type Comments = {
  __typename?: 'Comments';
  items: Array<Comment>;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthCredentials;
  logout?: Maybe<Scalars['Void']>;
  articleAdd: Article;
  commentAdd: Comment;
};

export type MutationLoginArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type MutationArticleAddArgs = {
  article: ArticleInput;
};

export type MutationCommentAddArgs = {
  articleId: Scalars['ID'];
  comment: CommentInput;
};

export type Query = {
  __typename?: 'Query';
  articles: Articles;
  article: Article;
  author: Author;
};

export type QueryArticlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryArticleArgs = {
  id: Scalars['ID'];
};

export type QueryAuthorArgs = {
  id: Scalars['ID'];
};

export type ArticleAddMutationVariables = Exact<{
  article: ArticleInput;
}>;

export type ArticleAddMutation = {
  __typename?: 'Mutation';
  articleAdd: {
    __typename?: 'Article';
    id: string;
    date: any;
    title: string;
    imageUrl: string;
    text: string;
    author: { __typename?: 'Author'; id: string; name: string };
    comments: { __typename?: 'Comments'; totalCount: number };
  };
};

export type ArticleCommentsFragment = {
  __typename?: 'Comments';
  totalCount: number;
  items: Array<{
    __typename?: 'Comment';
    id: string;
    date: any;
    name: string;
    text: string;
  }>;
};

export type ArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ArticleQuery = {
  __typename?: 'Query';
  article: {
    __typename?: 'Article';
    id: string;
    date: any;
    title: string;
    imageUrl: string;
    text: string;
    author: { __typename?: 'Author'; id: string; name: string };
    comments: {
      __typename?: 'Comments';
      totalCount: number;
      items: Array<{
        __typename?: 'Comment';
        id: string;
        date: any;
        name: string;
        text: string;
      }>;
    };
  };
};

export type ArticleCommentsQueryVariables = Exact<{
  id: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type ArticleCommentsQuery = {
  __typename?: 'Query';
  article: {
    __typename?: 'Article';
    comments: {
      __typename?: 'Comments';
      totalCount: number;
      items: Array<{
        __typename?: 'Comment';
        id: string;
        date: any;
        name: string;
        text: string;
      }>;
    };
  };
};

export type ArticleShortFragment = {
  __typename?: 'Article';
  id: string;
  date: any;
  title: string;
  imageUrl: string;
  text: string;
  author: { __typename?: 'Author'; id: string; name: string };
  comments: { __typename?: 'Comments'; totalCount: number };
};

export type ArticlesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type ArticlesQuery = {
  __typename?: 'Query';
  articles: {
    __typename?: 'Articles';
    totalCount: number;
    items: Array<{
      __typename?: 'Article';
      id: string;
      date: any;
      title: string;
      imageUrl: string;
      text: string;
      author: { __typename?: 'Author'; id: string; name: string };
      comments: { __typename?: 'Comments'; totalCount: number };
    }>;
  };
};

export type AuthorArticlesFragment = {
  __typename?: 'Articles';
  totalCount: number;
  items: Array<{
    __typename?: 'Article';
    id: string;
    date: any;
    title: string;
  }>;
};

export type AuthorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type AuthorQuery = {
  __typename?: 'Query';
  author: {
    __typename?: 'Author';
    name: string;
    articles: {
      __typename?: 'Articles';
      totalCount: number;
      items: Array<{
        __typename?: 'Article';
        id: string;
        date: any;
        title: string;
      }>;
    };
  };
};

export type AuthorArticlesQueryVariables = Exact<{
  id: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type AuthorArticlesQuery = {
  __typename?: 'Query';
  author: {
    __typename?: 'Author';
    articles: {
      __typename?: 'Articles';
      totalCount: number;
      items: Array<{
        __typename?: 'Article';
        id: string;
        date: any;
        title: string;
      }>;
    };
  };
};

export type LoginMutationVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'AuthCredentials'; accessToken: string };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout?: Maybe<any> };

export const ArticleCommentsFragmentDoc = gql`
  fragment articleComments on Comments {
    totalCount
    items {
      id
      date
      name
      text
    }
  }
`;
export const ArticleShortFragmentDoc = gql`
  fragment articleShort on Article {
    id
    date
    title
    imageUrl
    text
    author {
      id
      name
    }
    comments {
      totalCount
    }
  }
`;
export const AuthorArticlesFragmentDoc = gql`
  fragment authorArticles on Articles {
    totalCount
    items {
      id
      date
      title
    }
  }
`;
export const ArticleAddDocument = gql`
  mutation articleAdd($article: ArticleInput!) {
    articleAdd(article: $article) {
      ...articleShort
    }
  }
  ${ArticleShortFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class ArticleAddGQL extends Apollo.Mutation<
  ArticleAddMutation,
  ArticleAddMutationVariables
> {
  document = ArticleAddDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const ArticleDocument = gql`
  query article($id: ID!) {
    article(id: $id) {
      id
      date
      title
      imageUrl
      text
      author {
        id
        name
      }
      comments {
        ...articleComments
      }
    }
  }
  ${ArticleCommentsFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class ArticleGQL extends Apollo.Query<
  ArticleQuery,
  ArticleQueryVariables
> {
  document = ArticleDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const ArticleCommentsDocument = gql`
  query articleComments($id: ID!, $limit: Int, $offset: Int) {
    article(id: $id) {
      comments(limit: $limit, offset: $offset) {
        ...articleComments
      }
    }
  }
  ${ArticleCommentsFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class ArticleCommentsGQL extends Apollo.Query<
  ArticleCommentsQuery,
  ArticleCommentsQueryVariables
> {
  document = ArticleCommentsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const ArticlesDocument = gql`
  query articles($limit: Int = 20, $offset: Int = 0) {
    articles(limit: $limit, offset: $offset) {
      totalCount
      items {
        ...articleShort
      }
    }
  }
  ${ArticleShortFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class ArticlesGQL extends Apollo.Query<
  ArticlesQuery,
  ArticlesQueryVariables
> {
  document = ArticlesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const AuthorDocument = gql`
  query author($id: ID!) {
    author(id: $id) {
      name
      articles {
        ...authorArticles
      }
    }
  }
  ${AuthorArticlesFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class AuthorGQL extends Apollo.Query<AuthorQuery, AuthorQueryVariables> {
  document = AuthorDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const AuthorArticlesDocument = gql`
  query authorArticles($id: ID!, $limit: Int, $offset: Int) {
    author(id: $id) {
      articles(limit: $limit, offset: $offset) {
        ...authorArticles
      }
    }
  }
  ${AuthorArticlesFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class AuthorArticlesGQL extends Apollo.Query<
  AuthorArticlesQuery,
  AuthorArticlesQueryVariables
> {
  document = AuthorArticlesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const LoginDocument = gql`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      accessToken
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<
  LoginMutation,
  LoginMutationVariables
> {
  document = LoginDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`;

@Injectable({
  providedIn: 'root',
})
export class LogoutGQL extends Apollo.Mutation<
  LogoutMutation,
  LogoutMutationVariables
> {
  document = LogoutDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
