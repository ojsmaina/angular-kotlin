import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {map, tap} from 'rxjs/operators';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = "http://localhost:5000/customers";

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
}
