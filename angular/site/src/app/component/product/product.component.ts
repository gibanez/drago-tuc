import { Component, OnInit } from '@angular/core';
import {CategoryService} from 'src/app/service/category.service';
import {Observable} from "rxjs";
import {Response} from 'src/app/Model/Response';
import { Category} from 'src/app/Model/Category';
import {ProductService} from 'src/app/service/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  private categories: Array<Category>;
  constructor(protected categoryService: CategoryService,
              protected productService: ProductService
              ) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe((res: Response) => {
      this.categories = res.data;
    });

    this.productService.getHome().subscribe((res: Response) => {
      this.products = res.data;
    });
  }

  productsByCategory(category: Category) {
    this.productService.getByCategory(category).subscribe((res: Response) => {
      this.products = res.data;
    });
  }

}
