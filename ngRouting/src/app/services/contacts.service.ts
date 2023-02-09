
/*Este servicio a sido creado para que nos otorgue la lista de contactos
*
*/


import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mocks/contacts.mocks';
import { IContacto } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

//vamos a crear una lista de observables, los observables se pueden emitir 
listaContactos: IContacto[] = LISTA_CONTACTOS




  constructor() { }

  obtenerContactos(sexo?: string): Promise<IContacto[]> | undefined { //Esto se va a encargar de filtrar los contactos. en este caso por sexo.
    // Hacemos una promesa con la lista de contacto
    
    if(sexo == 'hombre' || sexo == 'mujer') {
    let listaFiltrada: IContacto[] = this.listaContactos.filter((contacto) => contacto.sexo == sexo);
    return Promise.resolve(listaFiltrada);
  } else if(sexo == 'todos') {
    return Promise.resolve(this.listaContactos);
  } else {
    return Promise.reject('filtro no valido')
  }
}

}
