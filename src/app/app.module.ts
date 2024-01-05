import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonNavbarComponent } from './common/common-navbar/common-navbar.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ListingManageComponent } from './listing-manage/listing-manage.component';
import { TotalSalesManegeComponent } from './total-sales-manege/total-sales-manege.component';
import { ProductListComponent } from './product-manage/product-list/product-list.component';
import { ProductCreateComponent } from './product-manage/product-create/product-create.component';
import { ProductReadComponent } from './product-manage/product-read/product-read.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    CommonNavbarComponent,
    ProductManageComponent,
    ListingManageComponent,
    TotalSalesManegeComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductReadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
