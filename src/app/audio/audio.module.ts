import { NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AudioService } from './audio.service';
import { AudioStudioComponent } from './studio/audio-studio.component';
import {AudioRoutingModule} from './audio-routing.module';
import {TimePipe} from './time.pipe';
import {PlaymodePipe} from './playmode.pipe';;
import { ListtabComponent } from './listtab/listtab.component'
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NzDemoFormValidateStaticComponent} from './nz-demo-form-validate-static/nz-demo-form-validate-static.component';
import zh from '@angular/common/locales/zh';
import {registerLocaleData} from '@angular/common';
registerLocaleData(zh);

@NgModule({
    imports: [ CommonModule,
      ReactiveFormsModule,
      FormsModule,
      AudioRoutingModule,
      NgZorroAntdModule ],
    declarations: [ AudioStudioComponent,TimePipe,PlaymodePipe , ListtabComponent,NzDemoFormValidateStaticComponent],
    exports: [ AudioStudioComponent ],
    providers: [ AudioService ]
})
export class AudioModule {
    constructor(
        @Optional() @SkipSelf() parentModule: AudioModule) {
        if (parentModule) {
            throw new Error(
                'AudioModule is already loaded. Import it in the AppModule only');
        }
    }
}
