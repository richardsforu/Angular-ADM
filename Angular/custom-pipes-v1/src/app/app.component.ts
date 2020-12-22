import { Component } from '@angular/core';
import { users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  users = [...users];
  searchTerm: string;
  direction: string = 'asc';
  column: string = 'first';
  type: string = 'string';

  setSortParams(param) {
    this.direction = param.dir;
    this.column = param.col;
    this.type = param.typ;
  }



}
