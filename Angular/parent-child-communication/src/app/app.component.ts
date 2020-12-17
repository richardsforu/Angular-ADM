import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  n1:number=0;
  n2:number=0;

  numbers=[10,20,30,2310,-20,730,50,-100,100,950,-1200,1000,150,150,350,-54,-65,123];

  message:string='';

  greetMessage(message:string){
    this.message=message;
    console.log(this.message);
    
  }

}
