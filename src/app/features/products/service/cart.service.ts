import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList : Array<Product> = []
  public productList = new BehaviorSubject<any>([]);
  

  constructor() { }
  getProducts(){
    return this.productList.asObservable()
  }

  setProduct(product:any){
    this.cartList.push(...product);
    this.productList.next(product)
  }
  addToCart(product:any){
    this.cartList.push(product);
    this.productList.next(this.cartList)
    this.getTotalPrice();
    console.log(this.cartList)

  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartList.splice(index,1);
      }
    })
    this.productList.next(this.cartList);
  }
  removeAllCart(){
    this.cartList = []
    this.productList.next(this.cartList);
  }
  
}
