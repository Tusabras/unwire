import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ClothesService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  //get all heroes from db
  getClothes(): Promise<any> {
    return this.http.get('http://mock-shirt-backend.getsandbox.com/shirts')
                .map(res => res.json())
                .toPromise()
                .catch(this.handleError);
  }

  //handle errors
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}