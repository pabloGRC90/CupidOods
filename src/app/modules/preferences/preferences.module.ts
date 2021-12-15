import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PreferencesRoutingModule } from './preferences-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreferencesEditComponent } from './preferences-edit/preferences-edit.component';



@NgModule({
  declarations: [
    FormComponent,
    PreferencesEditComponent
  ],
  imports: [
    SharedModule,
    PreferencesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class PreferencesModule { }
