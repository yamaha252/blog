import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from './auth.state';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthState]),
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      }
    ]),
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class AuthModule {
}
