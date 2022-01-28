import { Component, 
  Input, 
  OnInit,
   Output, 
   EventEmitter
    } from '@angular/core';
    
import { product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {

  @Input() product: product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {
    console.log("añadir al carrito");
    this.productClicked.emit(this.product.id);
  }

  constructor() {
    console.log('contrustor')
  }


  ngOnInit(): void {
    console.log('nOnInit');
  }

}
