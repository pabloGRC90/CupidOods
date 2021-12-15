import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  [x: string]: any;

  changePass: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    //con esto en el constructor estamos definiendo un formulario reactivo de Angular, indicando que va a tener
    //dos controles usuario e email que se van a corresponder con los nombres de los controles en el HTML.
    this.changePass = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern]],
      passone: ['', [Validators.required, Validators.pattern]],
      passtwo: ['', [Validators.required, Validators.pattern]]
    });
  }

  ngOnInit(): void {
  }

  //Devuelve los controles del formulario (esto se usa en el html)
  get formulario() {
    return this.changePass.controls;
  }

  //Método que hace el envío del formulario
  onSubmit() {
    this.submitted = true;
    if((this.changePass.invalid) || (this.changePass.value.passone!=this.changePass.value.passtwo)){
      alert ("La nueva contraseña debe de coincidir en los dos campos")
      return;
    }

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    let user = this.changePass.value;
    console.log(user);
    //Desglosando sería:
    console.log("El email: "+user.email);
    this.onReset();

    alert("Ha cambiado su contraseña con éxito")

    this.router.navigate(['auth/preferences/form']);
  }

  // Permite limpiar el formulario
  onReset() {
    this.submitted = false;
    this.changePass.reset();
  }

  volver() {
    this.router.navigate(['preferences/form']);
  }
}
