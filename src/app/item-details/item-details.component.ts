import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../shared/clothes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../shared/global.service';
// declare let $:any;
 
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  m_shirt:any;
  
    constructor(private route: ActivatedRoute, private router: Router, private clothesService: ClothesService, private globalService: GlobalService) { 
      // this.note = '';
      // this.flagIsSending = false;
      this.m_shirt={};
      globalService.itemValue.subscribe((nextValue) => {
        // console.log(nextValue);  // this will happen on every change
        setTimeout(() => {
          this.isInShop();
        }, 200);
      }) 
    }
    toUpper(s){
      if(s)return s.toUpperCase();
      else return '';
    } 

    decideSingularPlural(num){
      if(num===1) return ' UNIT';
      else return ' UNITS';
    }
    findClothes(uid){  
      this.clothesService.getClothes()
      .map(res => res.json())
      .subscribe(
        data => {
          let intUID = parseInt(uid);
          // this.shirts = data;
          // console.log("el uid es",uid,data)
          for(let i of data){
            // console.log(i);
               
            if(i.id === intUID) this.m_shirt = i;
          }
        },
        err => this.handleError(err,uid),
        () => console.log('get clothes completed')
     ); 
    } 
  
    private handleError(error: any,uid): void {
      // Repeat the action until it does correctly
      this.findClothes(uid);
    }
      
    uid='';
    ngOnInit() {
      
      this.route.params.forEach((params: Params) => {
        if(params['uid']){
            let uid = params['uid'];
            // console.log(uid);
            this.findClothes(uid);
            this.uid = uid;
            this.isInShop();
        }
    });
        // setTimeout(() => {
        //   $('html, body').animate({scrollTop:0}, {duration:0});
        // }, 200);
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
        if(this.m_shirt.id === parseInt(it)) {
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
      else if(count===0) this.items.push(this.m_shirt.id.toString()) 

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
          // console.log(this.m_shirt.id, parseInt(it)); 
          if(this.uid === it) count++;
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
