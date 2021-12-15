
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  preferenciasUsuario: FormGroup;
  submitted: boolean = false;

  // constructor(private formBuilder: FormBuilder, private router: Router, public year: Number, public month: Number, public day: Number) {
  constructor(private formBuilder: FormBuilder, private router: Router) {
    //con esto en el constructor estamos definiendo un formulario reactivo de Angular, indicando que va a tener
    //dos controles usuario e email que se van a corresponder con los nombres de los controles en el HTML.

    // this.year=2000;
    // this.month=2;
    // this.day=3;

    this.preferenciasUsuario = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength]],
      provincia: ['', [Validators.required]],
      years: ['', [Validators.required]],
      tipoRelacion: ['', [Validators.required]],
      sport: [''],
      art: [''],
      politic: [''],
      wantSons: ['', [Validators.required]],
      haveSons: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      preferencia: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength]],
    });
  }


  ngOnInit(): void {
  }

  //Devuelve los controles del formulario (esto se usa en el html)
  get formulario() {
    return this.preferenciasUsuario.controls;
  }

  minAge() {
    const today = new Date();
      const minAge = 18;
      return new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
    }
  maxAge() {
    const today = new Date();
      const maxAge = 100;
      return new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
    }

  //Método que hace el envío del formulario
  onSubmit() {
    this.submitted = true;
    if(this.preferenciasUsuario.invalid)
      return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    let user = this.preferenciasUsuario.value;
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
    this.preferenciasUsuario.reset();
  }

  changePass(){
    this.router.navigate(['auth/change-pass']);
  }
}

