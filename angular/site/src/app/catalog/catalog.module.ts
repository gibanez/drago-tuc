import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {ProductService} from 'src/app/service/product.service';
import {CategoryService} from 'src/app/service/category.service';
import { CategoryListComponent } from './category-list/category-list.component';
@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ProductItemComponent, CategoryListComponent],
  providers: [ProductService, CategoryService]
})
export class CatalogModule { }
