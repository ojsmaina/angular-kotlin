import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Reading} from '../model/Reading';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private connectionUrl = "http://localhost:5000/connections";
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  save(connectionId: number,billingData: Reading, ) {
    this.http.post(this.connectionUrl+"/"+connectionId+"/bill", JSON.stringify(billingData),this.headers)
      .subscribe(response => {
        console.log(response);
      },(err: HttpErrorResponse) => {
        console.log(err);
      });
  }
}
