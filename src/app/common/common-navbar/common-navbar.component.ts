import { Component } from '@angular/core';

@Component({
  selector: 'app-common-navbar',
  templateUrl: './common-navbar.component.html',
  styleUrls: ['./common-navbar.component.scss']
})
export class CommonNavbarComponent {

  status = "offcanvas"
  
  onClick(){
    if(this.status==="offcanvas"){
      this.status="offcanvas show"
    }else{
      this.status="offcanvas"
    }
    console.log(this.status)
  }

  onClick_Close(){
    this.status = "offcanvas"
    console.log(this.status)
  }
}
