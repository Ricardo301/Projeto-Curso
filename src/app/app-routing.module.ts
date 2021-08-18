import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './features/page/cart-page/cart-page.component';


import { HomePageComponent } from './features/page/home-page/home-page.component';
import { CartComponent } from './features/products/components/cart/cart.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

  {path:'cart', component: CartPageComponent},
  { path: 'home', component: HomePageComponent },

  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
