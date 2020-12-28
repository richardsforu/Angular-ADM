import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  productSearchForm: FormGroup;
  showProduct = false;
  product: any;
  constructor(private fb: FormBuilder, private ps: ProductService) { }

  handleSubmit() {
    this.showProduct = true;
    if (this.productSearchForm.valid) {
      // console.log(this.productSearchForm.get('id').value);
      this.ps.findProduct(this.productSearchForm.get('id').value).subscribe(response => {
        console.log(response);
        this.product = response;

      })
    }
  }

  ngOnInit(): void {

    this.productSearchForm = this.fb.group({
      id: [, [Validators.required]]
    })


  }

}
