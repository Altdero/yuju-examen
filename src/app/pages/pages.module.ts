import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent, MessagesComponent, OrdersComponent } from './pages.index';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    HomeComponent,
    MessagesComponent,
    OrdersComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ],
  // exports: [HomeComponent]
})
export class PagesModule { }
