import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private ps: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  product = {};
  ngOnInit(): void {

    //let x = this.route.snapshot.paramMap.get('id');
    let x = null;
    this.route.paramMap.subscribe(params => {
      x = params.get('id');
    })

    this.ps.findProductById(x).subscribe(product => {
      console.log(product);
      this.product = product;

    })

  }

}
