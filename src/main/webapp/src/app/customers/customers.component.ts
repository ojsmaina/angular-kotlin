import {Component, OnInit, ViewChild} from '@angular/core';

import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  componentUrl: boolean;
  componentName: string =this.router.url;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  currentComponentIsList() : boolean{
    return this.componentUrl = (this.router.url == "/customers/list");
  }

  addCustomer() {
      this.router.navigate(['add'],{relativeTo: this.route})
  }
}

