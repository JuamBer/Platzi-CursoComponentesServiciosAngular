import { Injectable } from '@angular/core';
import { Product } from './../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];

  constructor() { }

  getShoppingCart(): Product[]{
    return this.myShoppingCart;
  }

  addProduct(product: Product): void{
    this.myShoppingCart.push(product);
  }

  getTotal(): number{
   return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
