import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StoremapComponent } from './storemap/storemap.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  
  {path:'order',component:OrderDetailsComponent},
  {path:'map',component:StoremapComponent},
  {path:'product',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
