import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const components = [
  HeaderComponent,
  FooterComponent,

 
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
    
   
  ],
  exports:[
    ...components,
    FormsModule
  ]

})
export class SharedModule { }
