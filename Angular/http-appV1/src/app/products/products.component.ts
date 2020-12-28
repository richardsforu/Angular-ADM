import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.listAllProducts().subscribe(products => this.products = products)
  }

  

}
