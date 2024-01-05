import { Component } from '@angular/core';
import { Product } from '../product';
import { ProdctService } from '../product.service';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{
  @Output() selectProductEvent = new EventEmitter<Product>();
  @Output() createProductEvent = new EventEmitter();
  products:Product[]=[]

  constructor(private productService:ProdctService){
    console.log("AAA");
    this.products = productService.getProdcts();
    console.log(this.products);
  }

  onSelectRecord(product:Product){
    this.selectProductEvent.emit(product);
  }

  onCreateButtonClick(){
    this.createProductEvent.emit();
  }
}
