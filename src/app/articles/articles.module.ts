import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticlesComponent} from './articles.component';


@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArticlesComponent,
      },
      {
        path: ':articleId',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
      }
    ]),
  ]
})
export class ArticlesModule {
}
