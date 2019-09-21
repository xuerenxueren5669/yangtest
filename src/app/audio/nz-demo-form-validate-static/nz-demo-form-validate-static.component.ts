import { Component, OnInit } from '@angular/core';
import {MyFormObj} from '../MyFormObj';

@Component({
  selector: 'app-nz-demo-form-validate-static',
  templateUrl: './nz-demo-form-validate-static.component.html',
  styleUrls: ['./nz-demo-form-validate-static.component.css']
})
export class NzDemoFormValidateStaticComponent implements OnInit {

  public myFormObj:MyFormObj = MyFormObj.defaultInstance(0);

  constructor() { }

  ngOnInit() {
  }

}
