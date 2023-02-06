import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
  constructor(private router: Router) { }

  //queremos que si se carga la pagina de login se guarde en el sesonEstorage
  // de aqui tenemos que dirigirnos  al auth guard
  ngOnInit(): void {
    
    let token = sessionStorage.getItem('token'); //Esto nos sirve para hacer un boton de logout 

    if(token) {
      this.router.navigate(['home'])
    }


  }

  loginUser() {
    sessionStorage.setItem('token', '298739873')
    this.router.navigate(['contacts'])
  }

}
