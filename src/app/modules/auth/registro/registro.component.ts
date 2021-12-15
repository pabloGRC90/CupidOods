import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {


  nuevoUsuario: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    //con esto en el constructor estamos definiendo un formulario reactivo de Angular, indicando que va a tener
    //dos controles usuario e email que se van a corresponder con los nombres de los controles en el HTML.
    this.nuevoUsuario = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]]
    });
  }

  ngOnInit(): void {
  }

  //Devuelve los controles del formulario (esto se usa en el html)
  get formulario() {
    return this.nuevoUsuario.controls;
  }

  //Método que hace el envío del formulario
  onSubmit() {
    this.submitted = true;
    if(this.nuevoUsuario.invalid)
      return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    let user = this.nuevoUsuario.value;
    this.onReset();

    this.router.navigate(['preferences/form']);
  }

  //Permite limpiar el formulario
  onReset() {
    this.submitted = false;
    this.nuevoUsuario.reset();
  }
}


