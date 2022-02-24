import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: null,
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}
