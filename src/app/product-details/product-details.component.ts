import { LoaderService } from './../loader.service';
import { map } from 'rxjs/operators';
import { Observable, forkJoin, combineLatest } from 'rxjs';
import { ProductsService } from './../products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  items;
  product;
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.isLoading.emit(true);
    combineLatest([
      this.productService.get_products(),
      this.route.paramMap
    ]).subscribe(([res, params]) => {
      // console.log(res);
      this.items = res;
      this.product = this.items[params.get('productId')];
      this.isLoading.emit(false);
    });
  }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
