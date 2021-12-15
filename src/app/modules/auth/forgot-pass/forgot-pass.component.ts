import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  [x: string]: any;

  recuperarPass: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    //con esto en el constructor estamos definiendo un formulario reactivo de Angular, indicando que va a tener
    //dos controles usuario e email que se van a corresponder con los nombres de los controles en el HTML.
    this.recuperarPass = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  //Devuelve los controles del formulario (esto se usa en el html)
  get formulario() {
    return this.recuperarPass.controls;
  }

  //Método que hace el envío del formulario
  onSubmit() {
    this.submitted = true;
    if(this.recuperarPass.invalid)
      return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    let user = this.recuperarPass.value;
    console.log(user);
    //Desglosando sería:
    console.log("El email: "+user.email);
    this.onReset();

    alert("Se le ha enviado un correo electrónico para recuperar su contraseña")

    this.router.navigate(['auth/login']);
  }

  // Permite limpiar el formulario
  onReset() {
    this.submitted = false;
    this.recuperarPass.reset();
  }

  onRemind() {
    this.router.navigate(['auth/login']);
  }
}
