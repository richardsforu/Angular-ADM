import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:8080/api/products';



  // list all products
  listAllProducts(): any {
    console.log('.. product service load data');

    return this.http.get(this.baseURL);
    // returns a Observable stream
  }

  //save Product
  saveProduct(product: any) {
    return this.http.post(this.baseURL, product);
  }

  findProduct(id):any {
    return this.http.get(this.baseURL + `/${id}`);
  }

  deleteProduct(id) {
    return this.http.delete(this.baseURL + `/${id}`);
  }


  //update Product
  updateProduct(product: any) {
    return this.http.put(this.baseURL, product);
  }




}
