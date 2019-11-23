import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ErrorService } from './error.service';

// import Swal, { SweetAlertIcon } from 'sweetalert2';

import { apiYuju } from '../../config/general.config';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _errorService: ErrorService
  ) { }

  /**
   * getURL
   *
   * Genera la petición GET con sus encabezados
   *
   * @private
   * @param {string} api - Complemento de la URL a consultar
   * @returns {Observable<any>} - Petición
   * @memberof ApiService
   */
  private getURL( api: string ): Observable<any> {
    const url = `${ apiYuju }${ api }`;
    return this._httpClient.get( url, { observe: 'response' } );
  }

  /**
   * getProducts
   *
   * Obtiene los productos de una tienda
   *
   * @param {string} api - Complemento de la URL a consultar
   * @returns {Observable<any>} - Información obtenida de la API
   * @memberof ApiService
   */
  getProducts( api: string ): Observable<any> {
    return this.getURL(api).pipe(
      map( res => res ),
      catchError( err => this._errorService._alert(err.status, err.error.detail) )
    );
  }



  /**
   * getProduct
   *
   * Obtiene la información de un producto
   *
   * @param {string} api - Complemento de la URL a consultar
   * @returns {Observable<any>} - Información obtenida de la API
   * @memberof ApiService
   */
  getProduct( api: string ): Observable<any> {
    return this.getURL(api).pipe(
      map( res => res.body ),
      catchError( err => this._errorService._alert(err.status, err.error.detail) )
    );
  }

}
