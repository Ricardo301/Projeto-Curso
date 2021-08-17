
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import {ProductService} from '../../service/product.service';




@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: []
})
export class ProductCardComponent implements OnInit {
   @Input()
  products: Array<Product> = [];
   
  dataSource:Array<Product> = [];
  displayedColumns: string[] =[];

  
  
  
  // filtroProduto: Array<Product> = this.products;

  // dataSource: Array<Product> =this.products;
  //displayedColumns: string[] = ['img', 'price', 'datasheet','symbol'];
   
  constructor(private Product:ProductService) {
    
    
   }

  ngOnInit(): void {
     this.dataSource = this.Product.dataSource;
     this.displayedColumns = this.Product.displayedColumns;
    // this.products = this.Product.products
    
  }
  
  
}
