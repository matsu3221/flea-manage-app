import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  public meStatusOn:boolean = false;
  public meStatusOff:boolean = true;

  public peStatusOn:boolean = false;
  public peStatusOff:boolean = true;

  public yaStatusOn:boolean = false;
  public yaStatusOff:boolean = true;

  public raStatusOn:boolean = false;
  public raStatusOff:boolean = true;

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
}
