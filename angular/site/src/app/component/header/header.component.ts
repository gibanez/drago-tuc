import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imageUrl: string;
  menu = true;
  constructor() { }

  ngOnInit() {
    this.imageUrl = environment.host + '/site'
  }

}
