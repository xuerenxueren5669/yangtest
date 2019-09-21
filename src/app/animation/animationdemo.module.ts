import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationdemoRoutingModule } from './animationdemo-routing.module';
import { Animationcomponent } from './animationdemo/animationcomponent';
import {TestmModule} from 'yangjw-app';
import {CartoonModule} from 'yangcartoon-app/cartoon.module';

@NgModule({
  imports: [
    CommonModule,
    AnimationdemoRoutingModule,
    TestmModule,
    CartoonModule
  ],
  declarations: [Animationcomponent]
})
export class AnimationdemoModule { }
