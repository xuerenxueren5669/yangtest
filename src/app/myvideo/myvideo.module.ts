import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyvideoRoutingModule } from './myvideo-routing.module';
import { VideodemoComponent } from './videodemo/videodemo.component';

@NgModule({
  imports: [
    CommonModule,
    MyvideoRoutingModule
  ],
  declarations: [VideodemoComponent]
})
export class MyvideoModule { }
