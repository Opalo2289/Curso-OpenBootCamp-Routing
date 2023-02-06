/*
* 1- Necesitamos declarar las rutas osea los path: 
  -No deberian haber rutas con el mismo nombre
  -
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'hijo',
        component: HomePageComponent
      }
    ]
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [ AuthGuard ] //se pueden poner mas si se han creado, dependiendo de su valor permitira navegar a la pagina o no.
  },
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
