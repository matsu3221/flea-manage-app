import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent {
  product?:Product
  create?:boolean = false
  read?:boolean = false

  selectProduct(child_product:Product){
    this.product=child_product
    this.read = true
    this.create = false
    console.log(this.product)
  }

  createProduct(){
    this.read = false
    this.create = true
  }
}
