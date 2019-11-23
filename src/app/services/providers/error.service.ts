import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of, throwError } from 'rxjs';

import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private _router: Router
  ) { }

  /**
   * _alert
   *
   * Crea alerta de SweetAlert2
   *
   * @param {number} code - Código de retorno del error
   * @param {string} message - Mensaje a mostrar en la alerta
   * @param {string} icon - (Opcional) - Tipo de alerta (warning, error, success, etc.)
   * @memberof ErrorService
   */
  _alert(code: number, message: string) {
    switch (code) {
      case 0:
        Swal.fire('Sin conexión', 'El servicio no está disponible, por favor, intenta más tarde', 'info');
        return throwError('');
      case 401:
        Swal.fire('Credenciales inválidas', message, 'warning');
        return throwError('');
      case 403:
        Swal.fire('Acceso prohibido', message, 'warning');
        return throwError('');
      case 404:
        Swal.fire('Sin información', message, 'info');
        return of('');
      default:
        Swal.fire('¡Upss...!', message, 'error');
        return throwError('');
    }
  }

}
