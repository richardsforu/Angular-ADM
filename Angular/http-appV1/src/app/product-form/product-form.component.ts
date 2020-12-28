import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  formSubmited=false;

  constructor(private fb: FormBuilder, private ps: ProductService) { }

  handleSubmit() {
    this.formSubmited=true;
    if (this.productForm.valid) {
      this.ps.saveProduct(this.productForm.value).subscribe(response => {
        console.log(response);

      })

      console.log('product saved');

    }
    else {
      console.log('validation isues');

      return false;

    }
  }

  get fc() {
    return this.productForm.controls;
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: ['', [Validators.required]],
      name: [''],
      price: [],
      description: [''],
    })

  }

}
