import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

//Creamos la variable, esto deberia venir de un servicio pero para el
//ejemplo hemos creado un interface
listaContactos: IContacto[] = [
  {
   id: 0,
   nombre: 'Diana',
   apellidos: 'Perdomo',
   email: '@DianaPerdomo',
   sexo: 'hombre'
  },
  {
   id: 1,
   nombre: 'Heracio',
   apellidos: 'Angula',
   email: '@angula',
   sexo: 'mujer'
  },
  {
    id: 2,
    nombre: 'Juan',
    apellidos: 'Vallejo',
    email: '@vallejo',
    sexo: 'mujer'
  },  
]



//Aqui vamos a hacer un ejemplo con una funcion para poder navegar, pasandole informacion a traves del estado
constructor(private router: Router, private route: ActivatedRoute) { }

ngOnInit(): void {
    //navegacion a traves de queryParams
    //Despues de activar la route: ActivateRoute
    //obtenemos los queryParams que estan en la homePage navegarAContacts()
    this.route.queryParams.subscribe((params: any) => {

      console.log('QueryParams', params.sexo)

    })
  }

volverAHome(contacto: IContacto) {
  //Navegacion a traves del estado
  let navigationExtras: NavigationExtras = {
    state: {
      data: contacto
    }
  }

  this.router.navigate(['home'], navigationExtras) //cuando navegamos a este ruta podemos pasarle los extras
}

}



// 1:16