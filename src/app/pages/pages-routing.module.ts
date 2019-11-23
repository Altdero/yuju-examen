import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard, RouteGuard } from '../services/services.index';

import { HomeComponent, MessagesComponent, OrdersComponent, ProductComponent } from './pages.index';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
  {
    path: 'ordenes',
    component: OrdersComponent,
    canActivate: [LoginGuard, RouteGuard],
    data: { titulo: 'Ordenes' }
  },
  {
    path: 'producto/:pk',
    component: ProductComponent,
    canActivate: [LoginGuard, RouteGuard],
    data: { titulo: 'Producto' }
  },
  {
    path: 'mensajes',
    component: MessagesComponent,
    canActivate: [LoginGuard, RouteGuard],
    data: { titulo: 'Mensajes' }
  },
  { path: '', redirectTo: '/ordenes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
