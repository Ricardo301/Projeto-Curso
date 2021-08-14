import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
   
  ],
  exports:[
    ...components
  ]

})
export class SharedModule { }
