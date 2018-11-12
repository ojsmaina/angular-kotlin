import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs/index';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {merge} from 'rxjs/internal/observable/merge';
import {catchError, debounceTime, distinctUntilChanged, finalize, tap} from 'rxjs/operators';
import {Connection} from '../../model/connection';
import {ConnectionService} from '../../services/connection.service';

@Component({
  selector: 'app-connections-list',
  templateUrl: './connections-list.component.html',
  styleUrls: ['./connections-list.component.css']
})
export class ConnectionsListComponent implements OnInit, AfterViewInit {

  connection: Connection;
  dataSource: ConnectionDataSource;
  totalCustomers: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  displayedColumns = ['meterSerialNumber', 'meterLocation', 'connectionCode', 'status', 'customer'];

  constructor(private route: ActivatedRoute, private _connectionService: ConnectionService) { }

  ngOnInit() {
    this.connection = this.route.snapshot.data["connection"];
    this.dataSource = new ConnectionDataSource(this._connectionService);
    this.dataSource.loadConnections('', 'asc', 0, 3);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadConnectionsPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadConnectionsPage())
      )
      .subscribe();
  }

  loadConnectionsPage() {
    this.dataSource.loadConnections(
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

}

export class ConnectionDataSource implements DataSource<Connection> {

  private connectionSubject = new BehaviorSubject<Connection[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private connectionService: ConnectionService) {}

  loadConnections(filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

    this.loadingSubject.next(true);

    this.connectionService.getConnections(filter, sortDirection,
      pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(
      connections => this.connectionSubject.next(connections["content"])
    );

  }

  connect(collectionViewer: CollectionViewer): Observable<Connection[]> {
    console.log("Connecting data source");
    return this.connectionSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.connectionSubject.complete();
    this.loadingSubject.complete();
  }

}
