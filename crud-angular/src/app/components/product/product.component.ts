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
  @Output() productClicked: EventEmitter<any> 
  @Output() deleteClicked: EventEmitter<any> 

  constructor() {
    this.productClicked= new EventEmitter();
    this.deleteClicked= new EventEmitter();
  }

  editProduct(){
    this.productClicked.emit(this.product);
    console.log(this.product.id)
  }

  deleteProduct(){
    this.deleteClicked.emit(this.product);
    console.log(this.product.id)
  }
  ngOnInit(): void {
    console.log('nOnInit');
  }

}
