import { Component } from '@angular/core';
import { EMPLOYEES } from './employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  employees = EMPLOYEES;
  filterBy: string = '';
  

  selectedFilter(formField: any) {
    this.filterBy = formField.target.value;
  }


}
