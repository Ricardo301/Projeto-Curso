import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [ProductCardComponent, ProductsListComponent, CartComponent],
  imports: [
    CommonModule, MatCardModule,MatTableModule, MatButtonModule, MatIconModule
  
  ],
  
  exports:[ProductsListComponent,ProductCardComponent,CartComponent]
})
export class ProductsModule { }
