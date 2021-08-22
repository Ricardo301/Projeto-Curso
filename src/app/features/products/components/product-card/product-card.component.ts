
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { CartService } from '../../service/cart.service';
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
   
 // dataSource:Array<Product> = [];
  displayedColumns: string[] =[];
  dataSource = new MatTableDataSource(this.products)
  public totalItem: number =0;

  
  
  
  // filtroProduto: Array<Product> = this.products;

  // dataSource: Array<Product> =this.products;
  //displayedColumns: string[] = ['img', 'price', 'datasheet','symbol'];
   
  constructor(private Product:ProductService,private cartService:CartService) {
    
    
   }

  ngOnInit(): void {
     //this.dataSource = this.Product.dataSource;
     this.dataSource = new MatTableDataSource(this.products);
     this.displayedColumns = this.Product.displayedColumns;
    this.products = this.Product.products

    this.dataSource.filterPredicate = (data: Product, filter: string) => {
      return data.name == filter;
     };

    this.products.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    
  }
    
  

  addTocart(products:any){
    this.cartService.addToCart(products)
  }
  

  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d: Product, filter: string) => {
      const textToSearch = d['name'] && d['name'].toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
  
  

