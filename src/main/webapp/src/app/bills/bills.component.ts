import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import {BillingService} from '../services/billing.service';
import {Connection} from '../model/connection';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  customerQueryField: FormControl = new FormControl();
  customerConnections: any[] = [];
  connection: Connection;
  connectionSelected: boolean;
  recentConnectionReading: number;

  //form state
  loading = false;
  success = false;

  billingFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private billingService: BillingService) { }

  ngOnInit() {
    this.customerQueryField.valueChanges.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap((query) => this.customerService.searchCustomer(query))).subscribe(res => {
      res['content'].forEach(item => {
        this.customerConnections = item.connections;

      });
    });

    this.billingFormGroup = this.fb.group({
        previousReading: [,Validators.required],
        currentReading: [,Validators.required]
    });
  }

  get previousReading(){
    return this.billingFormGroup.get("previousReading");
  }

  get currentReading(){
    return this.billingFormGroup.get("currentReading");
  }

  onSelect(connection: Connection): void {
    this.connection = connection;
    this.connectionSelected = true;
  }

  submitReadings() {
    this.loading = true;
    const billingData = this.billingFormGroup.value;

    console.log("Connection reading" + billingData);
    try {
      //submit form
      this.billingService.save(this.connection.id,billingData);
      this.success = true;
    }catch (e) {
      console.log(e)
    }

    this.loading = false;
  }
}
