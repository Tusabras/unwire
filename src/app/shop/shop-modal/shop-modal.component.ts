import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../shared/global.service';
import { ClothesService } from '../../shared/clothes.service';
declare let $:any;

@Component({
  selector: 'app-shop-modal',
  templateUrl: './shop-modal.component.html',
  styleUrls: ['./shop-modal.component.scss']
})
export class ShopModalComponent implements OnInit {

  @Input() shirtsToBuy:any;
  @Input() items:any;
  
  constructor(private globalService: GlobalService, private clothesService: ClothesService) { }

  ngOnInit() {
  }
  
  //sum the cost of the shirts
  sumTotal(){
    let sum = 0;
    for(let shirt of this.shirtsToBuy){
      sum+=shirt.price;
    }
    return sum;
  }
  
  //make an order to the server
  makeOrder(){
    this.clothesService.postOrder(this.sumTotal(),this.shirtsToBuy)
    
    .map(res => res.json())
    .subscribe(
      data => {
        this.items = [];
        this.shirtsToBuy = [];
        this.globalService.theItem = '';
        $('#shopModal').modal('hide');
      },
      err => this.handleError(err),
      () => console.log('get clothes completed')
   );
  }


  errorMsg='';
  thereHaveBeenAnError=false;
  private handleError(error: any): void {
      console.log(error);
      this.errorMsg = 'Something happened, the order could not be done! (check console)';
      this.thereHaveBeenAnError = true;  
      setTimeout(()=> {
        this.errorMsg = '';
        this.thereHaveBeenAnError = false;
      }, 3000);
  }


  //remove shirt from the cart.
  removeFromCart(id,key){
    if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
      this.items = localStorage.getItem('itemsUnwire').split(',');
    }
    else this.items = [];

    let count = 0; 
    let ind = '';
    for(let it of this.items){
      if(id === parseInt(it)) {
        count++;
        ind = it;
      }
    }
    if(count>0){
      var index = this.items.indexOf(ind);
      
      if (index > -1) {
        this.items.splice(index, 1);
        this.shirtsToBuy.splice(key,1); 
      }
    }
    else if(count===0) this.items.push(id.toString()) 

    this.globalService.theItem = this.items.toString();

    
  }
}
