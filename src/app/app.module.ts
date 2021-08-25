import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GraphQLModule} from './graphql/graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
