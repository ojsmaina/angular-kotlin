import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { ConnectionService } from '../../services/connection.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  connectionsFormGroup: FormGroup;
  customerQueryField: FormControl = new FormControl();
  customerResults: any[] = [];

  //form state
  loading = false;
  success = false;

  constructor(private _formBuilder: FormBuilder, private connectionService: ConnectionService,private customerService: CustomerService, private _http: HttpClient) {
  }

  ngOnInit() {
    this.connectionsFormGroup = this._formBuilder.group({
      meterSerialNumber: ['', Validators.required],
      meterLocation: ['', Validators.required],
      customer: ['', Validators.required]
    });

    this.customerQueryField.valueChanges.pipe(
       debounceTime(1000),
       distinctUntilChanged(),
       switchMap((query) => this.customerService.searchCustomer(query))).subscribe(res => {
           res['content'].forEach(item => {
             this.customerResults.push(item)
           });
       });
  }

  get meterSerialNumber(){
    return this.connectionsFormGroup.get("meterSerialNumber");
  }

  get meterLocation(){
    return this.connectionsFormGroup.get("meterLocation");
  }

  get customerId(){
    return this.connectionsFormGroup.get("customerId");
  }

  searchCustomer(){

  }
  async submitConnectionHandler() {
    this.loading = true;
    const connectionData = this.connectionsFormGroup.value;

    try {
      //submit form
      this.connectionService.createConnection(connectionData);
      this.success = true;
    }catch (e) {
      console.log(e)
    }

    this.loading = false;
  }
}
