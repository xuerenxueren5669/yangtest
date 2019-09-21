import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-videodemo',
  templateUrl: './videodemo.component.html',
  styleUrls: ['./videodemo.component.css']
})
export class VideodemoComponent {


  // url = 'rtmp://live.hkstv.hk.lxdns.com/live/hks';
  url = 'assets/demo.mp4';
  safeUrl: any;

  constructor(private sanitizer: DomSanitizer) {
    this.getUrl(this.url);
  }

  getUrl(url: string) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);  // 获取安全链接

  }

}
