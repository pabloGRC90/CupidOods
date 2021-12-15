import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePassComponent } from './change-pass/change-pass.component';
// import { ChangePassComponent } from './change-pass/change-pass.component';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    ForgotPassComponent,
    ChangePassComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistroComponent,
    // LoginComponent,
    // ForgotPassComponent
  ]
})
export class AuthModule { }


