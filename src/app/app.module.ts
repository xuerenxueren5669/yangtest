import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import {MenuService} from './menu.service';
import {HttpClientModule} from '@angular/common/http';
import {AudioModule} from './audio';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
    AudioModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
