import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(NgForm, {static: true})
  form: NgForm;

  login: string;
  password: string;

  submitting: boolean;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  async submit() {
    this.submitting = true;
    try {
      await this.auth.login(this.login, this.password).toPromise();
      this.router.navigate(['/']);
    } catch (e) {
      this.form.control.setErrors({
        backend: true,
      });
    } finally {
      this.submitting = false;
    }
  }
}
