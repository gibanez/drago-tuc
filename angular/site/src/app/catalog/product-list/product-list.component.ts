import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/service/product.service';
import {Response} from 'src/app/Model/Response';
import {Category} from 'src/app/Model/Category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(protected productService: ProductService) { }

  ngOnInit() {
    this.productService.getHome().subscribe((res: Response) => {
      this.products = res.data;
    });
  }

  findByCategory(category: Category = null) {
    const products = (category)?this.productService.getByCategory(category):this.productService.getHome();
    products.subscribe((res: Response) => {
      this.products = res.data;
    });
  }

}
