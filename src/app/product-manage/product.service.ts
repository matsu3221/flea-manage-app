import { Product } from "./product";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ProdctService {
    public products:Product[]=[
        {no:'000001',first:"AAA",last:"BBB",Handle:"CCC"},
        {no:'000002',first:"DDD",last:"EEE",Handle:"FFF"}
      ];
  
    getProdcts() {
        return this.products;
    }

    updateProduct(updateProduct:Product){
      for(var i = 0; i < this.products.length; i++){
        if(this.products[i].no == updateProduct.no){
          this.products[i]=updateProduct
          console.log(updateProduct)          
        }
      }
      console.log(this.products)
    }

    addProduct(){

    }
}