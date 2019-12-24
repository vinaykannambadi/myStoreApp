import { ProductsService } from './../products.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: Product[] = [];
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private productService: ProductsService,

  ) {}

  ngOnInit() {

    this.productService.get_products().subscribe((res: any[]) => {
      this.items = res;

    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
