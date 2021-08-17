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
import { ProductsListComponent } from './features/products/components/products-list/products-list.component';
import { ProductsModule } from './features/products/products.module';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './features/page/cart/cart.component';
registerLocaleData(localePt);





@NgModule({
  declarations: [
    AppComponent,
    
    HomePageComponent,
          CartComponent,
    
          
    
    
    
   

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
    HttpClientModule
    
   
    
    
  ],
  providers: [  {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
