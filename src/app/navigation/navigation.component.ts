import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {AuthState} from '../auth/auth.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Select(AuthState.isAuthenticated)
  isAuthenticated$: Observable<boolean>;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
