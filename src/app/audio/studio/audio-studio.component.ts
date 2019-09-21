import { Component, OnInit} from '@angular/core';
import { AudioService } from '../audio.service';
import { Audio } from '../audio.model';
import { PlayData } from '../play-data.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
    selector: 'audio-studio',
    styleUrls: ['audio-studio.component.css'],
    templateUrl: 'audio-studio.component.html',
    animations: [
        trigger('studioDisp', [
            state('void', style({ top: '-100%' })),
            state('*', style({ top: 0 })),
            state('on', style({ top: 0, height: '100%' })),
            state('off', style({ top: 0, height: '0.5rem', width: '13%' })),
            transition('void => off', [animate('0.3s ease-in', style({top: '-100%'}))]),
            transition('off => void', [animate('0.3s ease-out', style({top: 0}))]),
            transition('on => void', [animate('0.3s ease-out', style({top: 0}))]),
            transition('off => on', [animate('0.3s ease-in', style({top: 0, height: '100%'}))]),
            transition('on => off', [animate('0.3s ease-out', style({top: 0, height: '0.5rem'}))])
        ])
    ]
})
export class AudioStudioComponent implements OnInit {

    public playList: Audio[];
    public playData: PlayData;
    public audios: Audio[];
    public disp;

    private touchStart;
    private touchEnd;

    private  playMode:number = 0;

    constructor(public audio: AudioService) {
        this.disp = 'off';
      audio.Add({Url: '/assets/audio/DEAMN - Give Me Your Love.mp3', Title: 'DEAMN - Give Me Your Love',
        Cover: '/assets/img/2219A91D.jpg'});
      audio.Add({Url: '/assets/audio/J.Fla - Shape of You.mp3', Title: 'J.Fla - Shape of You',
        Cover: '/assets/img/336076CD.jpg'});
      audio.Add({Url: '/assets/audio/Years & Years - Desire.mp3', Title: 'Years & Years - Desire',
        Cover: '/assets/img/04262CC3.jpg'});
      audio.Add({Url: '/assets/audio/封茗囧菌 - 胭脂妆（Cover 树屋女孩）.mp3', Title: '封茗囧菌 - 胭脂妆（Cover 树屋女孩）',
        Cover: '/assets/img/04262CC3.jpg'});
    }

  public changePlayMode(currntPlayMode:number):number{
    //0:单曲循环 1:顺序播放  2:列表循环
    this.playMode = ++ currntPlayMode;
    if(this.playMode >2){
      this.playMode = 0;
    }
    this.audio.changePlayMode(currntPlayMode);
    return this.playMode;
  }

    public ngOnInit() {
        this.playList = this.audio.PlayList();
        this.playData = this.audio.PlayData();
    }

    public audioSwiped(e) {
        console.log(e);
        switch (e) {
            case 'up':
                this.disp = 'off';
                return;
            case 'down':
                this.disp = 'on';
                return;
            default:
                return;
        }
    }

    public Skip(e) {
        this.audio.Skip(e.layerX /
        document.getElementById('audio-total').getBoundingClientRect().width);
    }
}
