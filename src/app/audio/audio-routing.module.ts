import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AudioStudioComponent} from './studio/audio-studio.component';
import {ListtabComponent} from './listtab/listtab.component';

const routes: Routes = [
  { path: 'music',
    component: AudioStudioComponent,
    outlet: 'music'
    },
  {
    path: 'listtab',
    component:ListtabComponent,
    data: {
       breadcrumb: 'my-audio'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioRoutingModule { }
