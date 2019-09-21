import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Animationcomponent} from './animationdemo/animationcomponent';

const routes: Routes = [
  { path: '', component: Animationcomponent,data: {
      breadcrumb: 'my-animation'
    } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationdemoRoutingModule { }
