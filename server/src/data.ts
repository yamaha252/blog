import {Article, Author, Comment} from './graphql.generated';

export interface ArticleModel extends Partial<Article> {
  authorId: string;
}

export interface AuthorModel extends Partial<Author> {
}

export interface CommentModel extends Partial<Comment> {
  articleId: string;
}

export function articleToType(article: ArticleModel): ArticleModel {
  const commentsResult = comments.filter(c => c.articleId === article.id) as Comment[];
  return {
    ...article,
    author: authors.find(a => a.id === article.authorId) as Author,
    comments: {
      totalCount: commentsResult.length,
      items: commentsResult,
    },
  };
}

export const articles: ArticleModel[] = [
  {
    id: '1',
    authorId: '1',
    date: '2001-01-02',
    title: 'Title of the article',
    text: 'Text of the article',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    authorId: '1',
    date: '2001-01-03',
    title: 'Title of the article',
    text: 'Text of the article',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    authorId: '2',
    date: new Date(),
    title: 'Title of the article',
    text: 'Text of the article',
    imageUrl: 'https://via.placeholder.com/150',
  }
];

export const authors: AuthorModel[] = [
  {
    id: '1',
    name: 'Author 1',
  },
  {
    id: '2',
    name: 'Author 2',
  }
];

export const comments: CommentModel[] = [
  {
    id: '1',
    articleId: '1',
    date: '2001-01-02',
    name: 'Comment author',
    email: 'test@example.com',
    url: 'example.com',
    text: 'Test comment',
  },
  {
    id: '2',
    articleId: '1',
    date: '2001-01-02',
    name: 'Comment author',
    email: 'test@example.com',
    url: 'example.com',
    text: 'Test comment',
  },
  {
    id: '3',
    articleId: '2',
    date: '2001-01-02',
    name: 'Comment author',
    email: 'test@example.com',
    url: 'example.com',
    text: 'Test comment',
  },
];
