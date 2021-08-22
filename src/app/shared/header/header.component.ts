import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/features/products/models/product.model';
import { CartService } from 'src/app/features/products/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    
    
  }
 



}
