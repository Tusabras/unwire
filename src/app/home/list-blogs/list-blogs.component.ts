import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss']
})
export class ListBlogsComponent implements OnInit {
  @Input() shirts:Array<object>;

  @Input() isGold:boolean;
  @Input() isBrown:boolean;
  @Input() isRed:boolean;
  @Input() isYellow:boolean;
  @Input() isPink:boolean;
  @Input() isGreen:boolean;
  @Input() isBlack:boolean;
  @Input() isWhite:boolean;
  @Input() isGrey:boolean;
  @Input() isBlue:boolean;

  @Input() isXS:boolean;
  @Input() isS:boolean;
  @Input() isM:boolean;
  @Input() isL:boolean;
  @Input() isXL:boolean;
  @Input() isXXL:boolean;


  constructor() { }
 
  ngOnInit() {}

}
