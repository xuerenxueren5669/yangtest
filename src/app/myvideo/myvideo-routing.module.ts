import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideodemoComponent} from './videodemo/videodemo.component';

const routes: Routes = [
  { path: '', component: VideodemoComponent ,data: {
      breadcrumb: 'my-videodemo'
    }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyvideoRoutingModule { }
