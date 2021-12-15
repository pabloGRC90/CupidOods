import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
