import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product?:Product;
  
   
  products: Array<Product> = [
    {
      id: 1, 
      price:49.50, 
      quantity:6, 
      img:'https://www.pngkey.com/png/detail/207-2079634_nano-arduino-nano-sunfounder.png',
      category:'Arduino',
      datasheet:'http://www.farnell.com/datasheets/1682238.pdf'
    },
    
    
  ];
  filtroProduto: Array<Product> = this.products;

  dataSource: Array<Product> =this.products;
  displayedColumns: string[] = ['img', 'price', 'datasheet','symbol'];
   
  constructor() { }

  ngOnInit(): void {
  }

}
