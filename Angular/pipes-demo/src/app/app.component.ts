import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  doj = new Date();

  emp = { id: 1024, name: 'Praveen', salary: 250000, designation: 'Trainer' }


}
