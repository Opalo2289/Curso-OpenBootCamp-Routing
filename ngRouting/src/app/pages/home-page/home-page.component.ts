import { Component, OnInit } from '@angular/core';

/*
*Se importa Router y se injecta en el constructor
*Se elabora el metodo en este caso navegarAContacts()
*/
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

constructor (private router: Router) { }

  ngOnInit(): void {
    
  }

//Aqui vamos a hacer un evento(handler) que sera navegar de forma programatica. osea navegar a una ruta especifica
  navegarAContacts(): void {
    this.router.navigate(['contacts']); //Aqui le decimos la ruta a la que queremos navegar
  }

}

//Creamos un modelo de datos en models



