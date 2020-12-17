import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  @Input()
  message: string = '';


  @Input()
  n1: number = 0;
  @Input()
  n2: number = 0;





}
