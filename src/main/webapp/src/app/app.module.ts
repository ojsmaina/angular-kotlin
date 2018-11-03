import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnectionsComponent } from './connections/connections.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

import { CustomerService } from './services/customer.service';
import { UserComponent } from './users/user/user.component';
import { CustomerStepperComponent } from './customers/customer-stepper/customer-stepper.component';
import { ConnectionComponent } from './connections/connection/connection.component';
import { ConnectionsListComponent } from './connections/connections-list/connections-list.component';
import { BillsComponent } from './bills/bills.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConnectionsComponent,
    CustomersComponent,
    ReportsComponent,
    NavigationComponent,
    DashboardComponent,
    CustomersListComponent,
    UserComponent,
    CustomerStepperComponent,
    ConnectionComponent,
    ConnectionsListComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
