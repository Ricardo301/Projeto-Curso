import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
 
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
 
 
  //loading = true;
  subscription = [];
 
  //dataSource = ;

  constructor() { }

  ngOnInit(): void {
    this.subscription.push(
    
    )
    
  }
 

}
