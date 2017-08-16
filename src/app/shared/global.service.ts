import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';   

@Injectable()
export class GlobalService {
 itemValue = new Subject();

 set theItem(value) {
   this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
   localStorage.setItem('itemsUnwire', value);
 }

 get theItem() {
   return localStorage.getItem('itemsUnwire');
 }
}