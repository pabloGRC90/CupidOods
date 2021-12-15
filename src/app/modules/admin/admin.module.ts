import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    FormAdminComponent,
    UserDetailComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
