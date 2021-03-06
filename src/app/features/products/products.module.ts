import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [ProductCardComponent, ProductsListComponent,],
  imports: [
    CommonModule, MatCardModule,MatTableModule, MatButtonModule, MatIconModule,MatFormFieldModule
  
  ],
  
  exports:[ProductsListComponent,ProductCardComponent]
})
export class ProductsModule { }
