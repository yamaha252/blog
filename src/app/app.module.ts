import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GraphQLModule} from './graphql/graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {NgxsDataPluginModule} from '@ngxs-labs/data';
import {NGXS_DATA_STORAGE_PLUGIN} from '@ngxs-labs/data/storage';
import {AuthModule} from './auth/auth.module';

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
    AuthModule,
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
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    NgxsDataPluginModule.forRoot([NGXS_DATA_STORAGE_PLUGIN]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
