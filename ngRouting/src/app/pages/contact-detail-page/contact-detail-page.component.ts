import { Component, OnInit } from '@angular/core';
//Esto es para navehar al detalle de los contactos
import { ActivatedRoute, Route } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {
 
 
id: any | undefined
contacto: IContacto = {

  id: 0,
  nombre: '',
  apellidos: '',
  email: '',
  sexo: ''
}

filtroPrevio: string = 'todos'


 constructor(private route: ActivatedRoute) { }
   
 ngOnInit(): void {
    //vamos a leer los parametros
    this.route.params.subscribe (
      (params:any) => {
        if(params.id) {
          this.id = params.id;
        }
      }
    ); 
    //this.route.parent?.params //Esto es si quiesieramos acceder a parametros de una ruta superior |  
      //vamos a leer tambien del [state] el contacto, creamos la variable contacto arriba y lo leemos usando el history
      if(history.state.data){
        this.contacto = history.state.data
      }

      if(history.state.filtro){
        this.filtroPrevio = history.state.filtro
      }
  }

}

/*
* QueryParams: Parametros por consulta
* Snapshop: Seria en ese momento concreto cuales serian las rutas que tenemos
* Params: siempre va a devolver un observable
*/

//Vamos a trabajar con guards, para controlar la navegacion
//Ejemplo, no puedo o puedo navegar a determinada ruta solo si estoy logueado
/*

 * CanActivate: puedo navegar la ruta
 * CanActivateChild:  puedo activar los hijos de esa ruta
 * CanLoad:  es para cargar perezosamente
 * 
 */