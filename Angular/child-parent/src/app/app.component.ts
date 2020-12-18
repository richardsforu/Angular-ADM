import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons = [10, 20, -30, 40, -50, 60, -5, 100, 200, -50]
  totalCount: number = 0

  displayTotalCount(totalCount: number) {
    console.log(totalCount);
    this.totalCount = totalCount;
  }

  /*
   calculateTotal(msg) {
     this.totalCount += +(msg); // + sign converts string into number
 
   }
 
   */
}
