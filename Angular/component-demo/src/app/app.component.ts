import { Component } from '@angular/core';

@Component({ // @ decarator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  user: string = 'Praveen';
  product = { id: 10, name: 'Laptop', price: 19000 }
  names=['James','Praveen','Raj','Kavya'];

  n1 = '1000';
  n2 = '2000';
  sum:number =0

  // Imp Note: Assigning data to varibles is only possible with in functions/methods

  getProduct() {
    return JSON.stringify(this.product);
  }

  getUser(): string {
    return 'Praveen';
  }

  getSum():number {
    // BU logic
  //  return Number.parseInt(this.n1)+ Number.parseInt(this.n2);
  return this.sum=((+this.n1)+(+this.n2));
  }









}
