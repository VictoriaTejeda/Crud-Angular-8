import { Component, OnInit, Input,  } from '@angular/core';
import { CrudService } from '../../../core/models/crud/crud.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
 

  constructor(
    private crudeService: CrudService
  ) { }

  ngOnInit() {
    this.fetchProducts()
  }

  fetchProducts() {
    this.crudeService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      })
  }
  createProduct() {
    const newProduct: Product = {
      id: "7",
      image: "https://i.ibb.co/wY8YB5Y/libro2.jpg",
      title: "El abandono",
      autor: "Mel Leyva",
      price: 400,
      description: "Habla del abandono del Alma, vuelve a encontarte con tu yo.",
      calification: 1
    };
    this.crudeService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      })

  }

  UpdateProduct() {
    const udProduct: Partial<Product> = {
      price: 300,
      description: "edicion prueba",
    };
    this.crudeService.updateProduct('7', udProduct)
      .subscribe(product => {
        console.log(product);
      })
  }

  deleteProduct() {
    this.crudeService.deleteProduct('7')
      .subscribe(res => {
        console.log(res);
      })
  }


}
