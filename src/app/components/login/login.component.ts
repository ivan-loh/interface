import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError = '';

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this
      .authService
      .login(this.username, this.password)
      .subscribe(() => {
        this.loginError = '';
        this.username = '';
        this.password = '';
        this.router.navigate(['home']);
      }, err => {
        this.loginError = err;
        this.username = '';
        this.password = '';
      });
  }

}
