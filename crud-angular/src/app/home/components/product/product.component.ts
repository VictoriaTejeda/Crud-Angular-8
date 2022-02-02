import { Component, 
  Input, 
  OnInit,
   Output, 
   EventEmitter
    } from '@angular/core';
    
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> 
  @Output() deleteClicked: EventEmitter<any> 

  constructor() {
    this.productClicked= new EventEmitter();
    this.deleteClicked= new EventEmitter();
  }

  ngOnInit(): void {
    console.log('nOnInit');
  }

}
