import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  btnLabel: number = 0;
  
  totalHits=0;

  style1='btn btn-primary';
  style2='btn btn-danger';

  @Output()
  parentData=new EventEmitter()

  buttonHitCount(btnLabel: number){
    this.totalHits+=1;
    this.parentData.emit(btnLabel);
  }

  ngOnInit(): void {
  }

}
