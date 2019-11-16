import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Animationcomponent} from './animationdemo/animationcomponent';
import {TitleComponent} from 'yangjw-app';

const routes: Routes = [
  { path: '',
    component: Animationcomponent,
    data: {
      breadcrumb: 'my-animation'
    },
    children: [{
      path: 'title',
      component: TitleComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationdemoRoutingModule { }
