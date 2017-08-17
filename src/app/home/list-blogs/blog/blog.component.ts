import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../shared/global.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() shirt:any;

  constructor(private globalService: GlobalService) {
    globalService.itemValue.subscribe((nextValue) => {
      // console.log(nextValue);  // this will happen on every change
      this.isInShop();
    })
   }

  ngOnInit() {
    this.isInShop();
  } 

  isfav:boolean=false;
  
    makeItFav() {
     this.isfav = !this.isfav;
    } 
    
    addToCart(){
      if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
        this.items = localStorage.getItem('itemsUnwire').split(',');
      }
      else this.items = [];

      let count = 0;
      let ind = '';
      for(let it of this.items){
        // console.log(this.shirt.id, parseInt(it)); 
        if(this.shirt.id === parseInt(it)) {
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
      else if(count===0) this.items.push(this.shirt.id.toString()) 

      // localStorage.setItem('itemsUnwire',this.items.toString());
      this.globalService.theItem = this.items.toString();
      this.isInCart = !this.isInCart ; 

       
    }
 

    isInCart = false;
    items = [];


    isInShop(){
      if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
        this.items = localStorage.getItem('itemsUnwire').split(',');
        // console.log("los items son",this.items); 
        let count=0;
        for(let it of this.items){
          // console.log(this.shirt.id, parseInt(it)); 
          if(this.shirt.id === parseInt(it)) count++;
        }
        if(count===0) this.isInCart = false;
        else this.isInCart = true;
      }
      else {
        this.items = [];
        this.isInCart = false;
      }
    }
    

}
