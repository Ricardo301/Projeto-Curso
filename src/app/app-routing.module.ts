import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './features/page/cart/cart.component';
import { HomePageComponent } from './features/page/home-page/home-page.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

  {path:'cart', component: CartComponent},
  { path: 'home', component: HomePageComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
