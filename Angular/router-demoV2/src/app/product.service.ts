import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/api/products/";

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  public requestOptions = {
    headers: new HttpHeaders(this.headerDict), 
  };

  //load all products
  listAllProducts(): any {
    return this.http.get(this.baseUrl);
  }

  // find product by id
  findProductById(id): any {
    return this.http.get(this.baseUrl + `/${id}`)
  }

  //save Product
  saveProduct(product) {
    console.log(product);
    return this.http.post(this.baseUrl, JSON.stringify(product),this.requestOptions);
  }

  //delete Product
  deleteProduct(id) {
    this.http.delete(this.baseUrl + `/${id}`).subscribe(response => {
    })
  }

  //update Product
  updateProduct(product): any {
    return this.http.put(this.baseUrl, product);
  }




}
