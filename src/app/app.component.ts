import { Component, OnInit } from '@angular/core';
import { GlobalService } from './shared/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Unwire';
  constructor(private globalService:GlobalService){}
  ngOnInit(){ 
    if(localStorage.getItem('itemsUnwire')===null){
      this.globalService.theItem = '';
    }
  }
} 
  