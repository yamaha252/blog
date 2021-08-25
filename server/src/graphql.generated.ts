/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ArticleInput: ArticleInput;
  Articles: ResolverTypeWrapper<Articles>;
  AuthCredentials: ResolverTypeWrapper<AuthCredentials>;
  Author: ResolverTypeWrapper<Author>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentInput: CommentInput;
  Comments: ResolverTypeWrapper<Comments>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  ArticleInput: ArticleInput;
  Articles: Articles;
  AuthCredentials: AuthCredentials;
  Author: Author;
  Comment: Comment;
  CommentInput: CommentInput;
  Comments: Comments;
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Query: {};
  Void: Scalars['Void'];
  Boolean: Scalars['Boolean'];
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes['Comments'], ParentType, ContextType, RequireFields<ArticleCommentsArgs, 'limit' | 'offset'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticlesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Articles'] = ResolversParentTypes['Articles']> = {
  items?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthCredentialsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthCredentials'] = ResolversParentTypes['AuthCredentials']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  articles?: Resolver<ResolversTypes['Articles'], ParentType, ContextType, RequireFields<AuthorArticlesArgs, 'limit' | 'offset'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comments'] = ResolversParentTypes['Comments']> = {
  items?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<ResolversTypes['AuthCredentials'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'login' | 'password'>>;
  logout?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  articleAdd?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationArticleAddArgs, 'article'>>;
  commentAdd?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCommentAddArgs, 'articleId' | 'comment'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  articles?: Resolver<ResolversTypes['Articles'], ParentType, ContextType, RequireFields<QueryArticlesArgs, 'limit' | 'offset'>>;
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<QueryArticleArgs, 'id'>>;
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<QueryAuthorArgs, 'id'>>;
};

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  Articles?: ArticlesResolvers<ContextType>;
  AuthCredentials?: AuthCredentialsResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Comments?: CommentsResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Void?: GraphQLScalarType;
};

