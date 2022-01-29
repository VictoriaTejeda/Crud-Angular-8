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
}
