import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../shared/clothes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  m_shirt:object
  
    constructor(private route: ActivatedRoute, private router: Router, private clothesService: ClothesService) { 
      // this.note = '';
      // this.flagIsSending = false;
      this.m_shirt={};
    }
    toUpper(s){
      return s.toUpperCase();
    } 

    decideSingularPlural(num){
      if(num===1) return ' UNIT';
      else return ' UNITS';
    }
    findClothes(uid){
      this.clothesService.getClothes().then((data) => {
        let intUID = parseInt(uid);
          // this.shirts = data;
          // console.log("el uid es",uid,data)
          for(let i of data){
            console.log(i);
              
            if(i.id === intUID) this.m_shirt = i;
          }
      });  
    } 
    ngOnInit() {
  
      this.route.params.forEach((params: Params) => {
        if(params['uid']){
            let uid = params['uid'];
            console.log(uid);
            this.findClothes(uid);

        }
    });
    } 

}
