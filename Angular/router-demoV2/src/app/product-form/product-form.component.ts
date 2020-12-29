import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  isSubmited = false;
  constructor(private ps: ProductService, private fb: FormBuilder, private router: Router) { }

  handleSubmit() {
    this.isSubmited = true;
    console.log(this.productForm.value);

    if (this.productForm.valid) {
      this.ps.saveProduct(this.productForm.value).subscribe(response => {
        console.log(response);
        this.router.navigate(['/products'])
      })
    }
  }

  get fc() {
    return this.productForm.controls;
  }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      id: [, [Validators.required]],
      name: [, [Validators.required]],
      price: [, [Validators.required]],
      description: [, [Validators.required]],
    })


  }

}
