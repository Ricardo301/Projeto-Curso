import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
 
 
 products: Array <Product> = [];

 //public productList: any;

  
 
 
  //loading = true;
  subscription = [];
 
  

  constructor(private productS:ProductService, private api:ProductService) { }

  ngOnInit(): void {
    
    this.products = this.productS.products

    
    
  }
 

}
