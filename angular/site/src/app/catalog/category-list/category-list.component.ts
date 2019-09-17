import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CategoryService} from 'src/app/service/category.service';
import {Category} from 'src/app/Model/Category';
import {Response} from 'src/app/Model/Response';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  @Output() onSelected: EventEmitter<any> = new EventEmitter()
  constructor(protected categoryService: CategoryService) { }
  ngOnInit() {
    this.categoryService.getAll().subscribe((res: Response) => {
      this.categories = res.data;
    });
  }
  selected(category: Category) {
    this.onSelected.emit(category);
  }
}
