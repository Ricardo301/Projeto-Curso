import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ProductService } from '../../products/service/product.service';
import { CartService } from '../../products/service/cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
 public totalItem: number=0;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(private breakpointObserver: BreakpointObserver, private product:ProductService, private cartService:CartService) {}

    ngOnInit(): void {
     
      this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    }

  

}
