import { Component, OnInit } from '@angular/core';

/*
*Se importa Router y se injecta en el constructor
*Se elabora el metodo en este caso navegarAContacts()
*/
import { Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

token: string | null = null
contactoSeleccionado: IContacto | undefined

constructor (private router: Router) { }

  ngOnInit(): void {
   
   //comprobar si existe el token en el sesionEstorage
   this.token = sessionStorage.getItem('token') //De esta forma entonces podemos pasar informacion a traves de los estados 
   
   
    //Aqui leemos del estado el historial de nagevacion
    if(history.state.data)
    console.log(history.state.data) //Esta informacion la guardamos en una variable que se llama contactoSeleccionado ↑ 
    this.contactoSeleccionado = history.state.data //Esto lo pintamos en el html
  }

//Aqui vamos a hacer un evento(handler) que sera navegar de forma programatica. osea navegar a una ruta especifica
  navegarAContacts(): void {
    this.router.navigate(['contacts']); //Aqui le decimos la ruta a la que queremos navegar
  }

}

//Creamos un modelo de datos en models



