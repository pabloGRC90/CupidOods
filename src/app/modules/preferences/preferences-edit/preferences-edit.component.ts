import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preference } from 'src/app/modules/preferences/models/preferences';
import { PreferencesService } from 'src/app/modules/preferences/services/preferences.service';

@Component({
  selector: 'app-preferences-edit',
  templateUrl: './preferences-edit.component.html',
  styleUrls: ['./preferences-edit.component.scss']
})
export class PreferencesEditComponent implements OnInit {

  public preferences: Preference[] = [];
  changePreferenciasUsuario: FormGroup;
  submitted: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private preferencesService: PreferencesService)
  {
    this.changePreferenciasUsuario = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength]],
      provincia: ['', [Validators.required]],
      // years: ['', [Validators.required]],
      tipoRelacion: ['', [Validators.required]],
      // sport: [''],
      // art: [''],
      // politic: [''],
      wantSons: ['', [Validators.required]],
      haveSons: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      preferencia: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength]],
    });
  }


  ngOnInit(): void {
    this.getPreferences();
  }


  public getPreferences() {
    this.preferencesService.getPreferences().subscribe((response) => {
      this.preferences = response;
    });
  }

  public mostrar(preferences: Preference) {
    // this.modal.open(ProfileDetailComponent, { size: 'md' });
    // this.profileDataService.profileTrigger.emit(profile);
  }


  //Devuelve los controles del formulario (esto se usa en el html)
  get formulario() {
    return this.changePreferenciasUsuario.controls;
  }

  //Método que hace el envío del formulario
  onSubmit() {
    this.submitted = true;
    if(this.changePreferenciasUsuario.invalid)
      return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    let user = this.changePreferenciasUsuario.value;
    // console.log(user);
    //Desglosando sería:
    // console.log("El usuario: "+user.usuario);
    // console.log("El email: "+user.email);
    this.onReset();

    alert("Preferencias de usuario cambiadas");
    this.router.navigate(['profiles/profile-list']);
  }

  //Permite limpiar el formulario
  onReset() {
    this.submitted = false;
    this.changePreferenciasUsuario.reset();
  }

  changePass(){
    this.router.navigate(['auth/change-pass']);
  }


}
