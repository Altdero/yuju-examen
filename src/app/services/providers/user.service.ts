import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /**
   * login - Valida las credenciales del usuario
   *
   * @param {*} loginForm - Credenciales del usuario
   * @returns {Observable<boolean>} - Respuesta del servicio
   * @memberof UserService
   */
  login(loginForm: any): Observable<boolean> {
    if ((loginForm.user === 'usuario' || loginForm.user === 'invitado') && loginForm.password === '123456') {
      return of(true);
    }

    return throwError('¡Usuario y/o password incorrecto!');
  }

}
