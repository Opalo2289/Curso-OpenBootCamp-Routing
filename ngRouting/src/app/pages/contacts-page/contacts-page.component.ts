import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

//Creamos la variable, esto deberia venir de un servicio pero para el
//ejemplo hemos creado un interface

/*
CON LA IMPLEMENTACION DEL SERVICIO CONTACT.SERVICE ESTA LISTA DE CONTACTOS YA NO LA NECESITAMOS.
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
]*/

filtroSexo: string = 'todos'
listaContactos: IContacto[] = []

//Aqui vamos a hacer un ejemplo con una funcion para poder navegar, pasandole informacion a traves del estado
constructor(private router: Router, private route: ActivatedRoute, private contactsService: ContactsService ) { } //con el contacts service nos traemos el servicio

ngOnInit(): void {
    //navegacion a traves de queryParams
    //Despues de activar la route: ActivateRoute
    //obtenemos los queryParams que estan en la homePage navegarAContacts()
    this.route.queryParams.subscribe((params: any) => {
    console.log('QueryParams', params.sexo);
    if(params.sexo) {
    this.filtroSexo = params.sexo
  }
    //AQUI OBTENEMOS LA LISTA DE CONTACTOS, hay que traerla del servicio, y primero hay que crear la variable ↑
    this.contactsService.obtenerContactos(this.filtroSexo)
    ?.then (
    (lista) => this.listaContactos = lista
    )
    .catch((error) => console.error(`Ha habido un error al obtener los contactos: ${error}`))
    .finally(() => console.info('Peticion de contactos terminada'))
  })

}

volverAHome(contacto: IContacto) {
  //Navegacion a traves del estado
  let navigationExtras: NavigationExtras = {
    state: {
      data: contacto
    }
  }

  this.router.navigate(['contacts'], navigationExtras) //cuando navegamos a este ruta podemos pasarle los extras
}

}



// 1:16