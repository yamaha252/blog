import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorComponent} from './author.component';
import {NgxsModule} from '@ngxs/store';
import {AuthorState} from './author.state';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthorState]),
    MatDialogModule,
    RouterModule,
    MatButtonModule,
  ]
})
export class AuthorModule {
}
