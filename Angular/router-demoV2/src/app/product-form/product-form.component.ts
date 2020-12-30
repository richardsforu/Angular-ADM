import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  isSubmited = false;
  isAddMode: boolean;

  constructor(private ps: ProductService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  handleSubmit() {

    if (this.isAddMode) {
      this.saveProduct();
    } else {
      this.editProduct()
    }
    /*
    this.isSubmited = true;
    console.log(this.productForm.value);

    if (this.productForm.valid) {
      this.ps.saveProduct(this.productForm.value).subscribe(response => {
        console.log(response);
        this.router.navigate(['/products'])
      })
    }
    */
  }


  saveProduct() {

    if (this.productForm.valid) {
      this.ps.saveProduct(this.productForm.value).subscribe(response => {
        console.log(response);
        this.router.navigate(['/products'])
      })
    }

  }

  editProduct() {
    if (this.productForm.valid) {
      this.ps.updateProduct(this.productForm.value).subscribe(response => {
        console.log(response);
        this.router.navigate(['/products'])
      })
    }
  }
  get fc() {
    return this.productForm.controls;
  }

  ngOnInit(): void {
    let id = null;
    this.route.paramMap.subscribe((params => {
      this.isAddMode = !params.get('pid');
      id = params.get('pid');
    }))



    this.productForm = this.fb.group({
      id: [, [Validators.required]],
      name: [, [Validators.required]],
      price: [, [Validators.required]],
      description: [, [Validators.required]],
    })

    if (!this.isAddMode) {
      this.ps.findProductById(id).subscribe(product => {
        this.productForm.patchValue(product);
      })
    }

  }

}
