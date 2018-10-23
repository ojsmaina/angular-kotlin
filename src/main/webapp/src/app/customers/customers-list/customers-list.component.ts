import { CollectionViewer, DataSource} from '@angular/cdk/collections';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import { of } from 'rxjs';
import { BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import { Observable} from 'rxjs/internal/Observable';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {merge} from 'rxjs/internal/observable/merge';
import {catchError, debounceTime, distinctUntilChanged, finalize, tap} from 'rxjs/operators';
import { Customer} from '../../model/customer';
import { CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, AfterViewInit {

  customer: Customer;
  dataSource: CustomerDataSource;
  totalCustomers: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  displayedColumns = ['firstName', 'middleName', 'surname', 'idNumber', 'email'];

  constructor(private route: ActivatedRoute, private _customerService: CustomerService) {
  }

  ngOnInit() {
    this.customer = this.route.snapshot.data["customer"];
    this.dataSource = new CustomerDataSource(this._customerService);
    this.dataSource.loadCustomers('', 'asc', 0, 3);
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadCustomersPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadCustomersPage())
      )
      .subscribe();

  }

  loadCustomersPage() {
    this.dataSource.loadCustomers(
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

}

export class CustomerDataSource implements DataSource<Customer> {

  private customerSubject = new BehaviorSubject<Customer[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private _customerService: CustomerService) {}

  loadCustomers(filter:string,
              sortDirection:string,
              pageIndex:number,
              pageSize:number) {

    this.loadingSubject.next(true);

    this._customerService.findCustomers(filter, sortDirection,
      pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(
        customers => this.customerSubject.next(customers["content"])
    );

  }

  connect(collectionViewer: CollectionViewer): Observable<Customer[]> {
    console.log("Connecting data source");
    return this.customerSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.customerSubject.complete();
    this.loadingSubject.complete();
  }

}


