import {Article, Author, Comment} from './graphql.generated';

export interface ArticleModel extends Partial<Article> {
  authorId: string;
}

export interface AuthorModel extends Partial<Author> {
  login: string;
  password: string;
}

export interface CommentModel extends Partial<Comment> {
  articleId: string;
}

export class ArticleType implements Article {
  constructor(private model: ArticleModel) {
  }

  get id(): string {
    return this.model.id || '';
  }

  get text(): string {
    return this.model.text || '';
  }

  get title(): string {
    return this.model.title || '';
  }

  get imageUrl(): string {
    return this.model.imageUrl || '';
  }

  get date(): string {
    return this.model.date;
  }

  get author() {
    const author = authors.find(a => a.id === this.model.authorId);
    if (!author) {
      throw new Error('No article author found');
    }
    return new AuthorType(author);
  }

  get comments() {
    const commentsResult = comments
      .filter(c => c.articleId === this.model.id)
      .map(c => new CommentType(c));
    return {
      totalCount: commentsResult.length,
      items: commentsResult,
    }
  }
}

export class AuthorType implements Author {
  constructor(private model: AuthorModel) {
  }

  get id(): string {
    return this.model.id || '';
  }

  get name(): string {
    return this.model.name || '';
  }

  get articles() {
    const articlesFiltered = articles
      .filter(a => a.authorId === this.model.id)
      .map(a => new ArticleType(a));
    return {
      totalCount: articlesFiltered.length,
      items: articlesFiltered,
    };
  }
}

export class CommentType implements Comment {
  constructor(private model: CommentModel) {
  }

  get id(): string {
    return this.model.id || '';
  }

  get name(): string {
    return this.model.name || '';
  }

  get email(): string {
    return this.model.email || '';
  }

  get text(): string {
    return this.model.text || '';
  }

  get url(): string {
    return this.model.url || '';
  }

  get date(): string {
    return this.model.date;
  }

  get article() {
    const article = articles.find(a => a.id === this.model.articleId);
    if (!article) {
      throw new Error('No article found');
    }
    return new ArticleType(article);
  }
}

export const articles: ArticleModel[] = [
  {
    id: '1',
    authorId: '1',
    date: new Date('2001-01-02'),
    title: 'Title of the article',
    text: 'Text of the article',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    authorId: '1',
    date: new Date('2001-01-04'),
    title: 'Title of the article',
    text: 'Text of the article',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    authorId: '2',
    date: new Date('2001-01-01'),
    title: 'Title of the article',
    text: 'Text of the article',
    imageUrl: 'https://via.placeholder.com/150',
  }
];

export const authors: AuthorModel[] = [
  {
    id: '1',
    name: 'Author 1',
    login: 'test1',
    password: 'password',
  },
  {
    id: '2',
    name: 'Author 2',
    login: 'test2',
    password: 'password',
  }
];

export const comments: CommentModel[] = [
  {
    id: '1',
    articleId: '1',
    date: new Date('2001-01-02'),
    name: 'Comment author',
    email: 'test@example.com',
    url: 'example.com',
    text: 'Test comment',
  },
  {
    id: '2',
    articleId: '1',
    date: new Date('2001-01-01'),
    name: 'Comment author',
    email: 'test@example.com',
    url: 'example.com',
    text: 'Test comment',
  },
  {
    id: '3',
    articleId: '2',
    date: new Date('2001-01-03'),
    name: 'Comment author',
    email: 'test@example.com',
    url: 'example.com',
    text: 'Test comment',
  },
];
