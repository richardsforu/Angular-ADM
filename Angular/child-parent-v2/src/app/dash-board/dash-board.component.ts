import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  buttons = [10, 20, -30, 40, -50, 60, -5, 100, 200, -50]
  totalCount: number = 0

  displayTotalCount(totalCount: number) {
    this.totalCount = totalCount;
  }

  ngOnInit(): void {
  }

}
