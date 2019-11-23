import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../../services/providers/api.service';

import { apiYujuProducts } from '../../config/general.config';


@Component({
  selector: 'app-data-order',
  templateUrl: './data-order.component.html',
  styleUrls: ['./data-order.component.css']
})
export class DataOrderComponent {

  loading: boolean;
  initialLoading: boolean;
  stores: any[] = ['Mercado Libre', 'Linio', 'Amazon', 'Segunda Mano', 'La Tienda'];
  status: any[] = [
    {
      value: 1,
      viewValue: 'Envío pendiente',
    },
    {
      value: 2,
      viewValue: 'En tránsito a sucursal',
    },
    {
      value: 3,
      viewValue: 'En sucursal',
    },
    {
      value: 4,
      viewValue: 'Con mensajero',
    },
    {
      value: 5,
      viewValue: 'En tránsito con cliente',
    },
    {
      value: 6,
      viewValue: 'Recibido',
    },
  ];
  companies: any[] = ['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4', 'Empresa 5'];
  status2: any[] = [
    {
      value: 1,
      viewValue: 'Estatus 1',
    },
    {
      value: 2,
      viewValue: 'Estatus 2',
    },
    {
      value: 3,
      viewValue: 'Estatus 3',
    },
    {
      value: 4,
      viewValue: 'Estatus 4',
    },
    {
      value: 5,
      viewValue: 'Estatus 5',
    },
    {
      value: 6,
      viewValue: 'Estatus 6',
    },
  ];
  classification: any[] = [
    {
      value: 1,
      viewValue: 'Clasificación 1',
    },
    {
      value: 2,
      viewValue: 'Clasificación 2',
    },
    {
      value: 3,
      viewValue: 'Clasificación 3',
    },
    {
      value: 4,
      viewValue: 'Clasificación 4',
    },
    {
      value: 5,
      viewValue: 'Clasificación 5',
    },
    {
      value: 6,
      viewValue: 'Clasificación 6',
    },
  ];
  products: Observable<any[]>;
  actualPage = 1;
  pageSize = 30;
  totalProds = 0;
  totalPages = 0;
  totalPagesAux: any[];

  constructor( private _apiService: ApiService ) {
    this.initialLoad(1);
  }

  async initialLoad( page: number ) {
    this.loading = true;
    this.initialLoading = true;
    const { body, headers } = await this.getProducts(page);
    this.products = body;
    this.totalProds = headers.get('X-Pagination-Total-Count');
    this.totalPages = Math.ceil(this.totalProds / this.pageSize);
    this.totalPages = this.totalPages > 10 ? 10 : this.totalPages;
    this.totalPagesAux = new Array(this.totalPages);
    this.loading = false;
    this.initialLoading = false;
  }

  async changePage( page: number ) {
    this.loading = true;
    const { body } = await this.getProducts(page);
    this.products = body;
    this.loading = false;
  }

  async getProducts( page: number ) {
    this.actualPage = (page < 1) ? 1 : ((page > this.totalPages && this.totalPages > 0) ? this.totalPages : page);
    return this._apiService.getProducts(`${ apiYujuProducts }?page_size=${ this.pageSize }&page=${ this.actualPage }`)
      .toPromise().then(res => res);
  }

}
