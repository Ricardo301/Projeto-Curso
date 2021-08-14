import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [ProductCardComponent, ProductsListComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductsListComponent,ProductCardComponent]
})
export class ProductsModule { }
