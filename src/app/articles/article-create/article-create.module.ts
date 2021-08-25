import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleCreateComponent} from './article-create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ArticleCreateComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArticleCreateComponent,
      }
    ])
  ]
})
export class ArticleCreateModule {
}
