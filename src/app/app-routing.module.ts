import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'videodemo', loadChildren: './myvideo/myvideo.module#MyvideoModule',  data: {
      breadcrumb: 'videodemo'
    },
  },
  { path: 'animation', loadChildren: './animation/animationdemo.module#AnimationdemoModule',  data: {
      breadcrumb: 'animation'
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
