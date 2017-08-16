import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../shared/clothes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shirts:Array<object>

  isGold = false;
  isBrown = false;
  isRed = false;
  isYellow = false;
  isPink = false;
  isGreen = false;
  isBlack = false;
  isWhite = false;
  isGrey = false;
  isBlue = false;

  isXS = false;
  isS = false;
  isM = false;
  isL = false;
  isXL = false;
  isXXL = false;
  
  constructor(private clothesService: ClothesService) { 
    // this.note = '';
    // this.flagIsSending = false;
    this.shirts=[];
  }

  findClothes(){
    this.clothesService.getClothes().then((data) => {
        this.shirts = data;
    }); 
  }
  ngOnInit() {

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    this.findClothes();
  } 

  

}
