import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomePageComponent } from './features/page/home-page/home-page.component';

import { ProductsModule } from './features/products/products.module';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {  MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt);

import {MatBadgeModule} from '@angular/material/badge';
import { CartPageComponent } from './features/page/cart-page/cart-page.component';
import { ProductService } from './features/products/service/product.service';
import { CartComponent } from './features/products/components/cart/cart.component';
import {MatCardModule } from '@angular/material/card';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartPageComponent,
    CartComponent
    
   
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ProductsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatBadgeModule,
    MatCardModule,
   
    
    
   
    
    
  ],
  providers: [  {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  },
  ProductService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
