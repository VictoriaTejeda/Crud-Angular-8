import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../core/models/crud/crud.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[]=[];

  constructor(
    private crudeService: CrudService
  ) { }

  ngOnInit() {
    this.fetchProducts()
  }

  fetchProducts() {
    this.crudeService.getAllProducts()
    .subscribe(products => {
      this.products=products;
    })
  }
  

}
