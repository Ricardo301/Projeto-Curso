import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array <Product> = [
    {
      id: 1,
      name: 'Arduino Nano', 
      price:49.50, 
      quantity:6, 
      img:'https://www.pngkey.com/png/detail/207-2079634_nano-arduino-nano-sunfounder.png',
      category:'Arduino',
      datasheet:'http://www.farnell.com/datasheets/1682238.pdf'
    },
    {
      id:2,
      name: 'CI 555',
      price: 0.90,
      quantity:200,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS916HujmNI5Er2OYtPcYbWzAOBIIHq_5ETlOts89KzmjCGiCR1PhMqU38-BPWhI9wBxaRJmyA&usqp=CAc',
      category: 'Componente',
      datasheet: 'https://www.ti.com/lit/ds/symlink/lm555.pdf'
    },
    {
      id:2,
      name:'BMS 3s',
      price:35.00,
      quantity:50,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooR9-ssrgAlzjYHVmP3_3lTQCUILicXCAv4PQNzTLcn3TeBrswkeS0LHw8_9aTT8JCD5Mf0M&usqp=CAc',
      category:'Componente',
      datasheet:'http://www.mantech.co.za/Datasheets/Products/BMS-20A-3S-S_SGT.pdf'
    },
    {
      id:3,
      name:'Ponte H ',
      price:20.00,
      quantity:100,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacCHYzmOCkdVQdYrC1POKJ_ikbVnZlgJlwnLsRwm7HHNAR3uexvPufLKZb61Aqeir6S8rpSY&usqp=CAc',
      category:'Componente',
      datasheet:'https://img.filipeflop.com/files/download/Datasheet_L298_Ponte_H.pdf'
    },{
      id:4,
      name:'Alicate Amperimetro',
      price:360.00,
      quantity:15,
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXeYf7cZAXQ4WLpVxzj5nUz5IxGyPSBoGlxdD6ZaR1Rgt7YDnF04Ed-e2CfTqFjsgg-hPaC8&usqp=CAc',
      category:'Ferramenta',
      datasheet:'https://www.minipa.com.br/images/Manual/ET-3320A-1100-BR.pdf'
    }

  ]
  filtroProduto: Array<Product> = this.products;

   dataSource: Array<Product> =this.products;
   displayedColumns: string[] = ['img', 'price', 'datasheet','symbol'];

  constructor() { }
   

   getProducts(){
     return this.products
   }
}
