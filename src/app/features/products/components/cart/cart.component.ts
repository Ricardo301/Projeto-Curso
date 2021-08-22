import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';

@Component({
  
  selector: 'app-cartC',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
   
  
  dataSource:Array<Product> = [];
  displayedColumns: string[] =[];
  public grandTotal !: number;

  constructor(private Product:ProductService, private cartService:CartService) { }
 @Input()
  products: Array<Product> = [];
  ngOnInit(): void {
   // this.dataSource = this.Product.dataSource;
     this.displayedColumns = this.Product.displayedColumns;
    this.products = this.Product.products;
    
    

    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();

      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
    
  }
   removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
 

}
