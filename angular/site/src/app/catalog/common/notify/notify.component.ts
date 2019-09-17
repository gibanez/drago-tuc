import { Component, OnInit } from '@angular/core';
import {ShopCartService} from 'src/app/catalog/shop-cart.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  private product: void;
  public visible = false;
  constructor(private shopCartService: ShopCartService) { }
  ngOnInit() {
    this.shopCartService.addProduct$.subscribe(product => {
      this.visible = true;
      this.product = product;
      setTimeout(() => {
        this.visible = false;
      }, 3000);
    })
  }

}
