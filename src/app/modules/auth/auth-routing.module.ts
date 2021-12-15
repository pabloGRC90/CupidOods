import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren:() => import('./core/core.module').then((m) => m.CoreModule),
  // },
  // {
  //   path: 'ghibli',
  //   loadChildren:() => import('./ghibli/ghibli.module').then((m) => m.GhibliModule),
  // },
  // {
  //   path: '**',
  //   redirectTo:'',
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'forgot-pass',
    component: ForgotPassComponent,
  },
  {
    path: 'change-pass',
    component: ChangePassComponent,
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
