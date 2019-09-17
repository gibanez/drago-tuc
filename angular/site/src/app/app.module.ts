import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from 'src/app/app-routing.module';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ClientComponent } from './component/client/client.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from 'src/app/service/message.service';
import {CategoryService} from 'src/app/service/category.service';
import {ProductService} from 'src/app/service/product.service';
import {NotifyComponent} from 'src/app/catalog/common/notify/notify.component';
import { AssetPipe } from './pipe/asset.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    NotifyComponent,
    AssetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessageService, CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
