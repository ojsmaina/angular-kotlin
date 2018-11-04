import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import { Connection } from '../model/connection.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private connectionUrl = "http://localhost:5000/connections";
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getConnections(
    filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3):  Observable<Connection[]> {

    return this.http.get<Connection[]>(this.connectionUrl, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    });
  }


}
