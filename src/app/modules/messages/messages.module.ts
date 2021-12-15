import { NgModule } from '@angular/core';
import { InboxComponent } from './inbox/inbox.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesRoutingModule } from './messages-routing.module';



@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    SharedModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
