import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match-list/match-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatchesRoutingModule } from './matches-routing.module';
import { MatchDetailComponent } from './match-detail/match-detail.component';



@NgModule({
  declarations: [
    MatchComponent,
    MatchDetailComponent
  ],
  imports: [
    SharedModule,
    MatchesRoutingModule
  ]
})
export class MatchesModule { }
