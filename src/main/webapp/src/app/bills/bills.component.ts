import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {ConnectionService} from '../services/connection.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  myControl = new FormControl();
  options1: string[] = ['One', 'Two', 'Three'];
  options: string[] = [];
  customerResults: any[] = [];
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
        res['content'].forEach(item => {
          this.options.push(item['meterSerialNumber'])
        });
      });

      console.log("The options are as follows"+ this.options);
      return this.options;
   // return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
