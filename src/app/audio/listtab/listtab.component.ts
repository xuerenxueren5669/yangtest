import { Component, OnInit } from '@angular/core';
import {NzDemoFormValidateStaticComponent} from '../nz-demo-form-validate-static/nz-demo-form-validate-static.component';
import {MyFormObj} from '../MyFormObj';

@Component({
  selector: 'app-listtab',
  templateUrl: './listtab.component.html',
  styleUrls: ['./listtab.component.css']
})
export class ListtabComponent implements OnInit {

  index:number = 0;
  isVisible =false;

  listOfSelection = [
    {
      text    : 'Select All Rows',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text    : 'Select Odd Rows',
      onSelect: () => {
        this.dataSet.forEach((data, index) => data.checked = index % 2 !== 0);
        this.refreshStatus();
      }
    },
    {
      text    : 'Select Even Rows',
      onSelect: () => {
        this.dataSet.forEach((data, index) => data.checked = index % 2 === 0);
        this.refreshStatus();
      }
    }
  ];
  allChecked = false;
  dataSet: Array<{ key:number, name: string; age: number; address: string; checked: boolean }> = [];
  indeterminate = false;

  refreshStatus(): void {
    const allChecked = this.dataSet.every(value => value.checked === true);
    const allUnChecked = this.dataSet.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.dataSet.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 0; i < 46; i++) {
      this.dataSet.push({
        key:  this.index,
        name   : `Edward King ${i}`,
        age    : 32,
        address: `London, Park Lane no. ${i}`,
        checked: false
      });
      this.index ++;
    }
  }

  addRow(staticForm:NzDemoFormValidateStaticComponent):void {
    this.isVisible = true;
    let customMyForm:MyFormObj =  MyFormObj.defaultInstance(this.dataSet.length);
    staticForm.myFormObj = customMyForm;
  }

  modifyRow(staticForm:NzDemoFormValidateStaticComponent):void{
    this.isVisible = true;
    let tempList:  Array<{key:number, name: string; age: number; address: string; checked: boolean }> =  this.dataSet.filter(data => data.checked === true);
    if(tempList) {
      staticForm.myFormObj = new MyFormObj(tempList[0].key,tempList[0].name, ""+tempList[0].age, tempList[0].address,"","","","",new Date(),"","",12);
    }
  }

  handleOk(staticForm:NzDemoFormValidateStaticComponent): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    console.log(staticForm.myFormObj);
    let customFormObj = staticForm.myFormObj;
    let itemIndex: number = this.dataSet.findIndex(item => item.key === customFormObj.key);

    if(itemIndex<0){
      this.dataSet = [...this.dataSet, {
        key: this.dataSet.length, name: customFormObj.errorValid,
        age: customFormObj.inputnumberSuccess,
        address: customFormObj.validating,
        checked: false
      }];
    }else {
      const arraybegin: Array<{ key: number, name: string; age: number; address: string; checked: boolean }> = this.dataSet.slice(0, itemIndex);
      const arrayEnd: Array<{ key: number, name: string; age: number; address: string; checked: boolean }> = this.dataSet.slice(itemIndex + 1, this.dataSet.length);

      this.dataSet = [...arraybegin, {
        key: customFormObj.key, name: customFormObj.errorValid,
        age: customFormObj.inputnumberSuccess,
        address: customFormObj.validating,
        checked: false
      }, ...arrayEnd];
    }

  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
