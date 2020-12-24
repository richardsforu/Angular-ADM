import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {



  public products = new Array<Product>();
  filteredList = [];
  product: Product;


  p1 = new Product('P001', 'Pen', 23, 'Reg Ink');
  p2 = new Product('P002', 'Laptop', 90500, 'Dell');
  p3 = new Product('P003', 'Mobile', 35000, 'Samsung');
  p4 = new Product('P004', 'Watch', 23000, 'S2');
  p5 = new Product('P005', 'Tab', 16000, 'Lenova');

  constructor() {
    this.products.push(this.p1);
    this.products.push(this.p2);
    this.products.push(this.p3);
    this.products.push(this.p4);
    this.products.push(this.p5);

  }

  // Product Operations

  // 1. add a new Product
  addProduct(product: Product) {
    this, this.products.push(product);
  }

  // 2. list all Products
  findAll(): Array<Product> {
    return this.products;
  }

  // 3. Find Product By ID
  findById(id: string): Product {
    this.product = this.products.find(product => product.id === id);
    if (!this.product) {
      console.log('---- true');

      return new Product('', '', 0, '');
    }
    return this.product;
  }

  // 3. Find By Name
  findByName(name: string): Array<Product> {
    console.log(name);
    if (!name) {
      return null;
    }
    return this.products.filter((product, idx) => product.name.toString().indexOf(name) > -1)
  }
}
