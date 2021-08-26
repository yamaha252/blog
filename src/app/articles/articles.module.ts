import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from './articles.component';
import {ArticlesResolver} from './articles.resolver';
import {NgxsModule} from '@ngxs/store';
import {ArticlesState} from './articles.state';
import {NumbersPipe} from './numbers.pipe';
import {AuthorModule} from './author/author.module';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    resolve: {
      articles: ArticlesResolver,
    }
  },
  {
    path: 'create',
    loadChildren: () => import('./article-create/article-create.module').then(m => m.ArticleCreateModule),
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
  },
];


@NgModule({
  declarations: [
    ArticlesComponent,
    NumbersPipe,
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([ArticlesState]),
    RouterModule.forChild(routes),
    AuthorModule,
  ]
})
export class ArticlesModule {
}
