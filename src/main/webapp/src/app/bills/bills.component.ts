import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import {Connection} from '../model/connection.model';
import {Customer} from '../model/customer';
import {ConnectionService} from '../services/connection.service';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  customerQueryField: FormControl = new FormControl();
  customerConnections: any[] = [];
  selectedConnection: Connection;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerQueryField.valueChanges.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap((query) => this.customerService.searchCustomer(query))).subscribe(res => {
      res['content'].forEach(item => {
        this.customerConnections = item.connections;
  });
});
  }

  onSelect(connection: Connection): void {
    this.selectedConnection = connection;
  }
}
