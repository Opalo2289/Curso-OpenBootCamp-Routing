import { Component, OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  // email: string = '';
  // password: string = ''; Estos valores al momento de realizar el login-form-components.ts ya no es necesario, debido a que los datos ahora los va a pasar ese componente[de aqui nos dirigimos al metodo loginUser]

  //queremos que si se carga la pagina de login se guarde en el sesonEstorage
  // de aqui tenemos que dirigirnos  al auth guard
  ngOnInit(): void {

    let token = sessionStorage.getItem('token'); //Esto nos sirve para hacer un boton de logout 

    if (token) {
      this.router.navigate(['home'])
    }


  }

  loginUser(value: any) { //estos datos vienen del login-form || la funcion de loginUser se la tenemos que pasar al formulario a traves de un @aupout por lo tanto (tenemos que hacer la importacion  || importamos tambien el eventEmiter) en el formulario osea en el loginForm// 
  
    let{email, password} = value
    
    this.authService.login(email, password).subscribe(
      (response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token)
          this.router.navigate(['home'])
        }
      },
      (error) => console.error(`ha habido un error al hacer el login ${error}`),
      () => console.info('peticion de login terminada')
    ) //operacion de login

    /*sessionStorage.setItem('token', '298739873')
    this.router.navigate(['contacts'])*/
  }

}


