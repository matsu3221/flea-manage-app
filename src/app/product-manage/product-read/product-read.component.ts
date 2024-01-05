import { Component, Input,OnChanges,SimpleChanges  } from '@angular/core';
import { Product } from '../product';
import { ProdctService } from '../product.service'

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnChanges {
  @Input() product?:any
  public meStatusOn:boolean = false;
  public meStatusOff:boolean = true;

  public peStatusOn:boolean = false;
  public peStatusOff:boolean = true;

  public yaStatusOn:boolean = false;
  public yaStatusOff:boolean = true;

  public raStatusOn:boolean = false;
  public raStatusOff:boolean = true;

  public status:string = "";
  public price:string = "";
  public purchase:string = "";  

  constructor(private service: ProdctService) { }


  ngOnChanges(changes: SimpleChanges) {
    console.log('監視')
    console.log('[ngOnChanges] execute');
    // SimpleChanges を使って変更前の値と変更後の値、そして変更されているかをログ出力する
    for (const prop in changes) {
      const change = changes[prop];
      console.log(`${prop}: ${change.firstChange}, ${change.previousValue} => ${change.currentValue}`);
    }
    this.status = this.product.first
    this.price = this.product.last
    this.purchase = this.product.Handle
  }

  ngOnInit(){
    console.log('read内')
    console.log(this.product)
    this.status = this.product.first
    this.price = this.product.last
    this.purchase = this.product.Handle
    console.log(this.status)
    console.log("入った")
  }

  onClickMe(){
    if(this.meStatusOn==true){
      //"メ"ボタンがオンの時はメをオフにするため、meStatusOffをtrueへ
      this.meStatusOn=false
      this.meStatusOff=true
      console.log("オフ")
    }else{
      //"メ"ボタンがオンの時はメをオフにするため、meStatusOffをfalseへ
      this.meStatusOn=true
      this.meStatusOff=false
      console.log("オン")
    }
  }

  onClickPe(){
    if(this.peStatusOn==true){
      //"メ"ボタンがオンの時はメをオフにするため、meStatusOffをtrueへ
      this.peStatusOn=false
      this.peStatusOff=true
      console.log("オフ")
    }else{
      //"メ"ボタンがオンの時はメをオフにするため、meStatusOffをfalseへ
      this.peStatusOn=true
      this.peStatusOff=false
      console.log("オン")
    }
  }

  onClickYa(){
    if(this.yaStatusOn==true){
      //"メ"ボタンがオンの時はメをオフにするため、StatusOffをtrueへ
      this.yaStatusOn=false
      this.yaStatusOff=true
      console.log("オフ")
    }else{
      //"メ"ボタンがオンの時はメをオフにするため、YaStatusOffをfalseへ
      this.yaStatusOn=true
      this.yaStatusOff=false
      console.log("オン")
    }
  }

  onClickRa(){
    if(this.raStatusOn==true){
      //"メ"ボタンがオンの時はメをオフにするため、raStatusOffをtrueへ
      this.raStatusOn=false
      this.raStatusOff=true
      console.log("オフ")
    }else{
      //"メ"ボタンがオンの時はメをオフにするため、raStatusOffをfalseへ
      this.raStatusOn=true
      this.raStatusOff=false
      console.log("オン")
    }
  }

  onUpdate(){
    console.log('サービス')
    this.product.first = this.status
    this.product.last = this.price
    this.product.Handle = this.purchase
    this.service.updateProduct(this.product)
  }
}
