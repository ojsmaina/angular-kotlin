import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {Connection} from '../model/connection.model';
import {ConnectionService} from '../services/connection.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  connectionResults: Connection[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        startWith(''),
        map(value => this._filterCOnnections(value))
      );
  }

  private _filterCOnnections(value: string): string[] {
    const filterValue = value.toLowerCase();
      this.connectionService.getConnections().subscribe(res => {
        res['content'].forEach(conn => {
          this.options.push(conn['meterSerialNumber'])
        });
      });

      console.log("The options are as follows"+ this.options);
      return this.options;
   // return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getConnection(connId: number) {
      console.log("connection id"+ connId);
      let  connection = this.connectionResults.filter(c => c.id == connId);
    console.log("connection "+ connection);
  }
}
