import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  getProduct(id: string){
    return this.httpClient.get(`http://localhost:3000/products/${id}`);
  }

  createProduct(product: Product){
    return this.httpClient.post(`http://localhost:3000/products`, product );
  }

  updateProduct(id: string, change:Partial<Product>){
    return this.httpClient.patch(`http://localhost:3000/products/${id}`,change);
  }

  deleteProduct(id: string){
    return this.httpClient.delete(`http://localhost:3000/products/${id}`);
  }
}
