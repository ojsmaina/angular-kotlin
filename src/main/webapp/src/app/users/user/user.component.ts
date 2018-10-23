import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../model/customer';
import { UserService } from '../../services/user.service'
import { Observable } from 'rxjs/internal/Observable';
import { DataSource } from '@angular/cdk/table';
import { User} from '../../model/user.model';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  userDataSource = new UserDataSource(this.userService);
  displayedUserColumns: string[] = ['name', 'email', 'phone', 'company'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any>{
    constructor(private _userService: UserService){
      super();
    }

  connect(): Observable<User[]> {
    return this._userService.getUsers();
  }

  disconnect(){}
}
