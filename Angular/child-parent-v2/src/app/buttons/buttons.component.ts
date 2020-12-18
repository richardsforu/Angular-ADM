import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  @Input()
  buttons: [];

  totalCount: number = 0;

  @Output()
  totalCountSummary = new EventEmitter()

  calculateTotal(btnLable) {
    this.totalCount += +btnLable; // + convers any string into number
    this.totalCountSummary.emit(this.totalCount);
  }

  ngOnInit(): void {
  }

}
