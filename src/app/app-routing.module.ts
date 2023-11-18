import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingManageComponent } from './listing-manage/listing-manage.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { TotalSalesManegeComponent } from './total-sales-manege/total-sales-manege.component';

const routes: Routes = [
  { path: '', redirectTo: '/productManage', pathMatch: 'full' },
  { path: 'productManage', component: ProductManageComponent },
  { path: 'listingManage', component: ListingManageComponent },
  { path: 'totalSalesManage', component: TotalSalesManegeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
