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

  
 
 
  //loading = true;
  subscription = [];
 
  //dataSource = ;

  constructor(private productS:ProductService) { }

  ngOnInit(): void {
    
    this.products = this.productS.products
    
  }
 

}
