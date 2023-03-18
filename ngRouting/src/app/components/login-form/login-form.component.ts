import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//Importamos lo necesario para el formulario

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup ({});
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>(); //Es de tipo objeto <con esto conseguimos emitir el objeto que son los valores del formulario>

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  get email () {
    return this.loginForm.get('email');
  }

  get password () {
    return this.loginForm.get('password');
  }

  //Submit del formulario login
  submitLogin () {
    if (this.loginForm.valid) {
      console.table(this.loginForm.value); // El value es para acceder a los valores email y password
      this.loginAction.emit(this.loginForm.value)
      this.loginForm.reset();
    }
  }
}
