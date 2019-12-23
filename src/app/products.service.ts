import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:3000'; // window.location.origin;
  products = [];
  constructor(private httpClient: HttpClient) {}

  get_products() {
    return this.httpClient
      .get(this.baseUrl + '/products')
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
