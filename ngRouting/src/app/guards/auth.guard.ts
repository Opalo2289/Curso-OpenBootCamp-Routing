
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router: Router) { }
 
 
  canActivate(
    route: ActivatedRouteSnapshot, //Esto dice en que ruta estamos
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let token = sessionStorage.getItem('token'); //Esto deberia conseguirse a traves de un servicio

    if(token){
      return true
    }else {
      this.router.navigate(['login'])
      return false;
    }
    //Si return es true: Cargamos la ruta
    //Si return es false: no cargamos la ruta

    //para proteger una ruta, nos vamos al routingModule
  }
  
}


// cuando le doy a el boton de contactos lo que carga es la pagina de login 
// debido a que se implementó en el AppComponent.Routing.module este audth guards
