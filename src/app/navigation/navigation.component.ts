import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {AuthState} from '../auth/auth.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Select(AuthState.isAuthenticated)
  isAuthenticated$: Observable<boolean>;

  constructor(private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {
  }

  async logout() {
    await this.auth.logout().toPromise();
    this.router.navigate(['/']);
  }
}
