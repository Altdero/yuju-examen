import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  LoginGuard,
  // RouteGuard,
  ApiService,
  ErrorService,
  UserService
} from './services.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuard,
    // RouteGuard,
    ApiService,
    ErrorService,
    UserService
  ]
})
export class ServicesModule { }
