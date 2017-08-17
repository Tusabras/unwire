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
      // this will happen on every change
      this.getItemsNext(nextValue);
    })
   
   }
  
  ngOnInit() {
    this.findClothes(); 
  }
  shirts=[];

  //We charge all the shirts.
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

  //open the modal with the shopping information
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

  //We get the items we have stored in our localstorage. So they are persisted on time.
  getItems(){
    if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
      this.items = localStorage.getItem('itemsUnwire').split(',');
    }
    else {
      this.items = [];
      // localStorage.removeItem('itemsUnwire');
    }
  } 

  //We update our information of the items, with the next values that are about to come.
  getItemsNext(nextValue){ 
    if(localStorage.getItem('itemsUnwire')!=null && nextValue!=''){
      this.items = nextValue.split(',');
    }
    else { 
      this.items = [];
    }
  }

}
