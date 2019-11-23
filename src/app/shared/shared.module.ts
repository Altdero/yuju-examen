import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialAngularModule } from './material-angular.module';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DataOrderComponent } from '../components/components.index';


@NgModule({
  declarations: [
    HeaderMenuComponent,
    PageNotFoundComponent,
    DataOrderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialAngularModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialAngularModule,
    HeaderMenuComponent,
    PageNotFoundComponent,
    DataOrderComponent
  ],
  entryComponents: []
})
export class SharedModule { }
