import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {map, tap} from 'rxjs/operators';
import {Connection} from '../model/connection.model';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = "http://localhost:5000/customers";
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customerUrl);
  }

  findCustomers(
    filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3):  Observable<Customer[]> {

    return this.http.get<Customer[]>(this.customerUrl, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    });
  }

  searchCustomer(queryString: string): Observable<Customer[]>{
    let _URL = this.customerUrl +"?filter="+ queryString;
    return this.http.get<Customer[]>(_URL);
  }

  connect(connection: Connection){
    const custId = connection.customer.id;
    this.http.post(this.customerUrl+"/"+custId+"/connect", JSON.stringify(connection),this.headers)
      .subscribe(response => {
        console.log(response);
      },(err: HttpErrorResponse) => {
        console.log(err);
      });
  }
}
