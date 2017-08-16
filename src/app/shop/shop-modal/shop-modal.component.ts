import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-modal',
  templateUrl: './shop-modal.component.html',
  styleUrls: ['./shop-modal.component.scss']
})
export class ShopModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  begin(){ 
    // $('html, body').animate({scrollTop:0}, {duration:0});
  }
  gratuity=0.1;
  setGratuity(newval){
    this.gratuity = newval;
  }
}
