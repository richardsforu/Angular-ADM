import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meterilize-angular';
  basicDatepicker;

  onSelect(data){
    console.log(data.target.value);
    
  }

}
