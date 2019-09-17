import { Injectable, Output, EventEmitter } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  private addProductSubjet = new Subject<void>();
  public addProduct$ = this.addProductSubjet.asObservable();
  constructor() { }
  addProduct(product) {
    this.addProductSubjet.next(product);
  }
}
