import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product('', '', 0, '');
  filteredList=[];
  products = [];

  id: string = '';
  constructor(private ps: ProductService) { // executes as soon as class constructed only once of a object life cycle 
    // this.product = new Product();
    console.log(">> ProductComponent::constructor");
  }


  test() { // executes only when test event is fired every time
    console.log(">> ProductComponent::test method");

  }

  findProduct(id) { // BL

    this.product = this.ps.findById(id.target.value)
    // console.log(this.product);
  }
  findProducts(name) { // BL
    this.filteredList = this.ps.findByName(name.target.value)
    // console.log(this.product);
  }



  ngOnInit(): void { // ngOnInit executes immedialy after constructor only once in the life cycle
    this.products = this.ps.findAll();
    console.log(this.products);

    /* console.log(">> ProductComponent::ngOnInit");
    this.product.id = 'P002';
    this.product.name = 'Mobile';
    this.product.price = 10101010;
    this.product.description = 'Dell';
    console.log(this.product);

    */

  }

}
