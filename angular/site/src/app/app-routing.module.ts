import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/component/home/home.component';
import {AboutComponent} from 'src/app/component/about/about.component';
import {ContactComponent} from 'src/app/component/contact/contact.component';
import {ProductComponent} from 'src/app/component/product/product.component';
import {ClientComponent} from 'src/app/component/client/client.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nosotros',
    component: AboutComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'productos-old',
    component: ProductComponent

  },
  {
    path: 'productos',
    loadChildren: './catalog/catalog.module#CatalogModule'
  },
  {
    path: 'clientes',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
