import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './services/guards/login.guard';

import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
  },
  { path: '**', component: PageNotFoundComponent, data: { titulo: 'Error 404' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
        // enableTracing: true,
        onSameUrlNavigation: 'reload',
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
