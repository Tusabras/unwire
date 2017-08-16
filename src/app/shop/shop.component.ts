import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/global.service';
declare let $:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private globalService: GlobalService) {
    
    this.getItems();

    globalService.itemValue.subscribe((nextValue) => {
      console.log(nextValue);  // this will happen on every change
      this.getItemsNext(nextValue);
    })
   
   }
  
  ngOnInit() {
    // setInterval(()=>{},3000);

    
  }

  showShopModal(){
    $('#shopModal').modal('show');
  }

  removeFromCart(id){
    if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
      this.items = localStorage.getItem('itemsUnwire').split(',');
    }
    else this.items = [];

    let count = 0; 
    let ind = '';
    for(let it of this.items){
      // console.log(this.shirt.id, parseInt(it)); 
      if(id === parseInt(it)) {
        count++;
        ind = it;
      }
    }
    if(count>0){
      var index = this.items.indexOf(ind);
      
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
    else if(count===0) this.items.push(id.toString()) 

    this.globalService.theItem = this.items.toString();
    this.isInCart = !this.isInCart ;

    
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
