import { Injectable } from '@angular/core';
import {HttpService} from 'src/app/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends HttpService {
  getAll() {
    return this.get('category');
  }
}
