import { Component, OnInit } from '@angular/core';
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
  },
  {
   id: 1,
   nombre: 'Heracio',
   apellidos: 'Angula',
   email: '@angula',
  },
  {
    id: 2,
    nombre: 'Juan',
    apellidos: 'Vallejo',
    email: '@vallejo',
  },  
]




constructor() { }

ngOnInit(): void {
    
  }

}