
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  accesoUsuario: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    //con esto en el constructor estamos definiendo un formulario reactivo de Angular, indicando que va a tener
    //dos controles usuario e email que se van a corresponder con los nombres de los controles en el HTML.
    this.accesoUsuario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]]
    });
  }

  ngOnInit(): void {
  }

  //Devuelve los controles del formulario (esto se usa en el html)
  get formulario() {
    return this.accesoUsuario.controls;
  }

  //Método que hace el envío del formulario
  onSubmit() {
    this.submitted = true;
    if(this.accesoUsuario.invalid)
      return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    let user = this.accesoUsuario.value;
    console.log(user);
    //Desglosando sería:
    console.log("El usuario: "+user.usuario);
    console.log("El email: "+user.email);
    this.onReset();

    this.router.navigate(['profiles/profile-list']);

  }

  //Permite limpiar el formulario
  onReset() {
    this.submitted = false;
    this.accesoUsuario.reset();
  }

  onForgot() {
    this.router.navigate(['auth/forgot-pass']);
  }
}

