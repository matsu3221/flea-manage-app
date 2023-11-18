import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonNavbarComponent } from './common/common-navbar/common-navbar.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ListingManageComponent } from './listing-manage/listing-manage.component';
import { TotalSalesManegeComponent } from './total-sales-manege/total-sales-manege.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonNavbarComponent,
    ProductManageComponent,
    ListingManageComponent,
    TotalSalesManegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
