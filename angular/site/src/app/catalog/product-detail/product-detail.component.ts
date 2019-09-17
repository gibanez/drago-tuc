import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/service/product.service';
import {ActivatedRoute} from "@angular/router";
import {ShopCartService} from 'src/app/catalog/shop-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  loading = true;
  currentImage = 0;
  constructor(protected productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private shopCartService: ShopCartService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.info(params);
      this.productService.find(params.id).subscribe(product => {
        this.loading = false;
        this.product = product;
      })
    })
  }
  nextImage() {
    if(this.product.images.length-1 > this.currentImage) {
      this.currentImage++
    }
    else {
      this.currentImage = 0;
    }
  }
  prevImage() {
    if(this.currentImage == 0) {
      this.currentImage = this.product.images.length-1;
    } else {
      this.currentImage--;
    }
  }

  addProduct(product) {
    this.shopCartService.addProduct(product);
    console.info(product)
  }

}
