import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationdemoRoutingModule } from './animationdemo-routing.module';
import { Animationcomponent } from './animationdemo/animationcomponent';
import {TestmModule} from 'yangjw-app';
import {CartoonModule} from 'yangcartoon-app/cartoon.module';
import {CoreModule} from 'yangjw-app';
@NgModule({
  imports: [
    CommonModule,
    AnimationdemoRoutingModule,
    TestmModule,
    CartoonModule,
    CoreModule.forRoot({"userName":"12345"})
  ],
  declarations: [Animationcomponent]
})
export class AnimationdemoModule { }
