import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BillsComponent} from './bills/bills.component';
import {ConnectionComponent} from './connections/connection/connection.component';
import {ConnectionsListComponent} from './connections/connections-list/connections-list.component';
import {ConnectionsComponent} from './connections/connections.component';
import {CustomerStepperComponent} from './customers/customer-stepper/customer-stepper.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CustomersComponent} from './customers/customers.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportsComponent} from './reports/reports.component';
import {UserComponent} from './users/user/user.component';

const appRoutes: Routes = [
  {path: "", redirectTo : "/dashboard", pathMatch: 'full'},
  {path: "dashboard", component : DashboardComponent},
  {path: "customers", component : CustomersComponent,
    children : [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: "list", component: CustomersListComponent },
      { path: "add", component: CustomerStepperComponent }
    ]
  },
  {path: "connections", component : ConnectionsComponent,
    children : [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: "list", component: ConnectionsListComponent },
      { path: "add-connection", component: ConnectionComponent }
    ]

  },
  {path: "bills", component : BillsComponent },
  {path: "reports", component : ReportsComponent },
  {path: "users", component : UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { useHash: true }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [DashboardComponent,CustomersComponent,ConnectionsComponent,BillsComponent,ReportsComponent];

