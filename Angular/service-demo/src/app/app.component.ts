import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  //product: any = { id: 'P001', name: 'Laptop', price: 85000, description: 'Intel I9' }

 

  // constructor executes first.
  constructor() {
 
    //this.product.instock = true;
  }



}
