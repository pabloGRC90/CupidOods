import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile-list/profile-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailComponent
  ],
  imports: [
    SharedModule,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule { }
