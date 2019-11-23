import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../../services/providers/api.service';

import { apiYujuProducts } from '../../config/general.config';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  idProduct: any;
  product: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService
  ) {
    this.idProduct = this._activatedRoute.snapshot.paramMap.get('pk');
    console.log(this.idProduct);
    this.getProduct();
  }

  ngOnInit() {
  }

  async getProduct() {
    await this._apiService.getProduct(`${ apiYujuProducts }${ this.idProduct }/`)
      .toPromise().then(res => this.product = res);
  }

}
