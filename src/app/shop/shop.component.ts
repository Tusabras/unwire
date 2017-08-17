import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { ClothesService } from '../shared/clothes.service';
declare let $:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  
  constructor(private globalService: GlobalService, private clothesService: ClothesService) {
    
    this.getItems();

    globalService.itemValue.subscribe((nextValue) => {
      // console.log(nextValue);  // this will happen on every change
      this.getItemsNext(nextValue);
    })
   
   }
  
  ngOnInit() {
    this.findClothes(); 
  }
  shirts=[];
  // findClothes(){
  //   this.clothesService.getClothes().then((data) => {
  //       this.shirts = data;
  //   }); 
  // }

  findClothes(){ 
    this.clothesService.getClothes()
    .map(res => res.json())
    .subscribe(
      data => this.shirts = data,
      err => this.handleError(err),
      () => console.log('get clothes completed')
   ); 
  }
 
  private handleError(error: any): void{
    // Repeat the action until it does correctly
    this.findClothes();
  }

  shirtsToBuy=[];
  showShopModal(){
    this.shirtsToBuy=[];
    for(let shirt of this.shirts){
      // console.log(shirt);
      for(let i of this.items){
        // console.log(shirt.id,i);
        if(shirt.id===parseInt(i)) this.shirtsToBuy.push(shirt);
      }
    }
    $('#shopModal').modal('show');
  }

  


  isInCart = false;
  items = [];
  getItems(){
    if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
      this.items = localStorage.getItem('itemsUnwire').split(',');
    }
    else {
      this.items = [];
      // localStorage.removeItem('itemsUnwire');
    }
  } 
  getItemsNext(nextValue){ 
    // console.log(localStorage.getItem('itemsUnwire'),localStorage.getItem('itemsUnwire')!='',localStorage.getItem('itemsUnwire')!=' ', localStorage.getItem('itemsUnwire')!='')
    if(localStorage.getItem('itemsUnwire')!=null && nextValue!=''){
      this.items = nextValue.split(',');
    }
    else { 
      this.items = [];
      // localStorage.removeItem('itemsUnwire');
    }
  }
  isInShop(){
    if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
      this.items = localStorage.getItem('itemsUnwire').split(',');
      // console.log("los items son",this.items); 
      for(let it of this.items){
        // console.log(this.m_shirt.id, parseInt(it)); 
        // if(this.uid === it) this.isInCart = true;
      }
    }
    else this.items = []; 
  }

}
