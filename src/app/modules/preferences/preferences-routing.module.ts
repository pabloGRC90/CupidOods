import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PreferencesEditComponent } from './preferences-edit/preferences-edit.component';


const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'preferences-edit',
    component: PreferencesEditComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencesRoutingModule {}
