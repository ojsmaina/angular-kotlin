import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-stepper',
  templateUrl: './customer-stepper.component.html',
  styleUrls: ['./customer-stepper.component.css']
})
export class CustomerStepperComponent implements OnInit {
  isLinear = false;
  customerFormGroup: FormGroup;
  connectionsFormGroup: FormGroup;

  //form state
  loading = false;
  success = false;

  private url = 'http://localhost:5000/customers';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _formBuilder: FormBuilder,private http: HttpClient) {}

  ngOnInit() {
    this.customerFormGroup = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      middleName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      idNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      email: ['', [Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phoneNumbers: this._formBuilder.array([]),
      meterSerialNumber: ['', Validators.required],
      meterLocation: ['', Validators.required]
    });

    this.connectionsFormGroup = this._formBuilder.group({

    });

    this.connectionsFormGroup.valueChanges.subscribe(console.log);
  }

  //Customer form controls
  get firstName(){
    return this.customerFormGroup.get("firstName");
  }

  get middleName(){
    return this.customerFormGroup.get("middleName");
  }

  get surname(){
    return this.customerFormGroup.get("surname");
  }

  get idNumber(){
    return this.customerFormGroup.get("idNumber");
  }

  get email(){
    return this.customerFormGroup.get("email");
  }
  get formPhoneNumbers(){
    return this.customerFormGroup.get("phoneNumbers") as FormArray
  }

  addPhoneNumber() {
    const phoneNumber = this._formBuilder.group({
      number: ['',
        [Validators.required,
          Validators.pattern('^254+[0-9]*'),
          Validators.minLength(12),
          Validators.maxLength(12)]
      ],
    });

    this.formPhoneNumbers.push(phoneNumber);
  }

  deleteFormPhoneNumber(i){
    this.formPhoneNumbers.removeAt(i);
  }

//Connection form controls
  get meterSerialNumber(){
    return this.customerFormGroup.get("meterSerialNumber");
  }

  get meterLocation(){
    return this.customerFormGroup.get("meterLocation");
  }

  async submitCustomerConnectionHandler() {
    this.loading = true;

    const customerData = this.customerFormGroup.value;

    console.log("Customer data" + customerData);

    try {
      //submit form
      this.http.post(this.url, JSON.stringify(customerData),this.headers)
        .subscribe(response => {
          console.log(response);
        },(err: HttpErrorResponse) => {
          console.log(err);
        });
      this.success = true;
    }catch (e) {
      console.log(e)
    }

    this.loading = false;
  }
}

