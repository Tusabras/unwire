import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ClothesService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}


  getClothes(): any {
    return this.http.get('https://mock-shirt-backend.getsandbox.com/shirts')            
  }   

  postOrder(total, shirts): any { 
      let data = { total: total, basket: {shirts} }
      return this.http.post('https://mock-shirt-backend.getsandbox.com/order', JSON.stringify(data), this.options)
    }
  

  //handle errors
  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}