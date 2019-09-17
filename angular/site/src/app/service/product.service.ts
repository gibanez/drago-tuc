import { Injectable } from '@angular/core';
import {HttpService} from 'src/app/service/http.service';
import {Category} from 'src/app/Model/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends HttpService {
  getHome() {
    return this.get('product?home[eq]=1&enable[eq]=1');
  }
  find(id) {
    return this.get('product/' + id);
  }
  getByCategory(category: Category) {
    return this.get('product?category_id[eq]=' + category.id + '&enable[eq]=1');
  }

}
