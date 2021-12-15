import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren:() => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'auth',
    loadChildren:() => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'messages',
    loadChildren:() => import('./modules/messages/messages.module').then((m) => m.MessagesModule),
  },
  {
    path: 'preferences',
    loadChildren:() => import('./modules/preferences/preferences.module').then((m) => m.PreferencesModule),
  },
  {
    path: 'profiles',
    loadChildren:() => import('./modules/profiles/profiles.module').then((m) => m.ProfilesModule),
  },
  {
    path: 'matches',
    loadChildren:() => import('./modules/matches/matches.module').then((m) => m.MatchesModule),
  },
  {
    path: 'admin',
    loadChildren:() => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo:'',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
