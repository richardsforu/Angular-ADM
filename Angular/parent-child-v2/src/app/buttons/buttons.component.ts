import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent{

  @Input()
  btnLabel: number=0;
  btnHitCount=0;

  class1='btn btn-success';
  class2='btn btn-danger';

  display(s1){
    console.log(s1);
    this.btnHitCount+=1;
    
  }
}
