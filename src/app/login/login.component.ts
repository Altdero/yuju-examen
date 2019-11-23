import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../services/services.index';

import { tokenYuju } from '../config/general.config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accessRoute: string;
  loginCredentials: FormGroup;
  hide = true;
  error = false;
  errorMessage: string;

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
    this.loginCredentials = new FormGroup({
      user: new FormControl( '', [Validators.required] ),
      password: new FormControl( '', [Validators.required] ),
      tokenYuju: new FormControl( tokenYuju ),
    });
  }

  ngOnInit() {
    localStorage.removeItem('logged');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenYuju');
    this.accessRoute = localStorage.getItem('accessRoute') || '/home';
    localStorage.removeItem('accessRoute');
  }

  /**
   * access - Valida las credenciales del usuario para acceder al examen
   *
   * @memberof LoginComponent
   */
  access() {
    this._userService.login(this.loginCredentials.value).subscribe( (res: boolean) => {
      this.error = false;
      localStorage.setItem('logged', 'true');
      localStorage.setItem('user', this.loginCredentials.controls.user.value);
      localStorage.setItem('tokenYuju', this.loginCredentials.controls.tokenYuju.value || tokenYuju);
      this._router.navigate([this.accessRoute]);
    }, (err: string) => {
      this.error = true;
      this.errorMessage = err;
    } );
  }

}
