import { Component } from '@angular/core';
import {MenuService} from './menu.service';
import {forEach} from '@angular/router/src/utils/collection';
import {MainMenu} from './MainMenu';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  isCollapsed:boolean = false;
  title = 'media';
  menus:Array<MainMenu> = new Array<MainMenu>();
  sideLists = [];
  selectMenuObj:MainMenu;
  constructor(private menuService:MenuService,private router: Router){
    common.showInfo('yang','12');

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.menus = new Array<MainMenu>();
      this.getMenu();
    });

  }
    public  getMenu():void{
      this.menuService.getMenu().subscribe(res=>{
        for (let item in res){
          if(res.hasOwnProperty(item)){
            console.log(item);
            let tempMainMenu:MainMenu = new MainMenu();
            tempMainMenu.id = item;
            tempMainMenu.name = res[item].label;
            tempMainMenu.icon = res[item].icon;
            tempMainMenu.sideLists = res[item].sideLists;
            this.menus.push(tempMainMenu);
          }
        }
      });
    }

   public selectMenu(id:string):void {

    for (let i = 0; i < this.menus.length; i++) {
      const currentSideObject:MainMenu = this.menus[i];
      if(currentSideObject.id == id){
        this.selectMenuObj = currentSideObject;
       this.sideLists = currentSideObject.sideLists
        break;
      }
    }

  }

}
