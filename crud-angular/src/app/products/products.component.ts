import { Component, OnInit } from '@angular/core';
import { product } from '../product.model'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: product[] =[
    { id:  '1',
     image: 'https://i.ibb.co/wY8YB5Y/libro2.jpg',
     title: 'el abandono',
     autor: 'Mel Leyva',
     price: 400,
     description: 'libro libron'
   },
   {
     id:  '2',
     image: 'https://i.ibb.co/KW9J8mk/libro1984.jpg',
     title: '1984',
     autor: 'Diego Verdaguez',
     price: 500,
     description: 'libro libron'
   },
   {
     id:  '3',
     image: 'https://i.ibb.co/mvJfpTP/libro-Alicia.jpg',
     title: 'Alicia',
     autor: 'Jorge Ortega',
     price: 550,
     description: 'libro libron'
   }
 
   ];

   clickProduct(id:number){
    console.log('product');
    console.log(id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
