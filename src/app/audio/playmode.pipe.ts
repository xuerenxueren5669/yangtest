import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myPlayMode'
})

export class PlaymodePipe implements PipeTransform {
    public transform(value: number): any {
      //0:单曲循环 1:顺序播放  2:列表循环
       if(value === 0){
         return "单曲循环";
       }else if(value ===1){
         return "顺序播放";
       }else if(value === 2){
         return "列表循环";
       }else{
         return "单曲循环";
       }
    }
}
