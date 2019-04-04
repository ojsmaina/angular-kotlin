(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bills_bills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bills/bills.component */ "./src/app/bills/bills.component.ts");
/* harmony import */ var _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connections/connection/connection.component */ "./src/app/connections/connection/connection.component.ts");
/* harmony import */ var _connections_connections_list_connections_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connections/connections-list/connections-list.component */ "./src/app/connections/connections-list/connections-list.component.ts");
/* harmony import */ var _connections_connections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connections/connections.component */ "./src/app/connections/connections.component.ts");
/* harmony import */ var _customers_customer_stepper_customer_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customer-stepper/customer-stepper.component */ "./src/app/customers/customer-stepper/customer-stepper.component.ts");
/* harmony import */ var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers/customers-list/customers-list.component */ "./src/app/customers/customers-list/customers-list.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: "", redirectTo: "/dashboard", pathMatch: 'full' },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: "customers", component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: "list", component: _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_7__["CustomersListComponent"] },
            { path: "add", component: _customers_customer_stepper_customer_stepper_component__WEBPACK_IMPORTED_MODULE_6__["CustomerStepperComponent"] }
        ]
    },
    { path: "connections", component: _connections_connections_component__WEBPACK_IMPORTED_MODULE_5__["ConnectionsComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: "list", component: _connections_connections_list_connections_list_component__WEBPACK_IMPORTED_MODULE_4__["ConnectionsListComponent"] },
            { path: "add-connection", component: _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionComponent"] }
        ]
    },
    { path: "bills", component: _bills_bills_component__WEBPACK_IMPORTED_MODULE_2__["BillsComponent"] },
    { path: "reports", component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"] },
    { path: "users", component: _users_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"], _connections_connections_component__WEBPACK_IMPORTED_MODULE_5__["ConnectionsComponent"], _bills_bills_component__WEBPACK_IMPORTED_MODULE_2__["BillsComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_10__["ReportsComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Wamis!';
        this.version = '1.0';
        this.result = '';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _connections_connections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connections/connections.component */ "./src/app/connections/connections.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customers/customers-list/customers-list.component */ "./src/app/customers/customers-list/customers-list.component.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _users_user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _customers_customer_stepper_customer_stepper_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customers/customer-stepper/customer-stepper.component */ "./src/app/customers/customer-stepper/customer-stepper.component.ts");
/* harmony import */ var _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./connections/connection/connection.component */ "./src/app/connections/connection/connection.component.ts");
/* harmony import */ var _connections_connections_list_connections_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./connections/connections-list/connections-list.component */ "./src/app/connections/connections-list/connections-list.component.ts");
/* harmony import */ var _bills_bills_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bills/bills.component */ "./src/app/bills/bills.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                _connections_connections_component__WEBPACK_IMPORTED_MODULE_7__["ConnectionsComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_9__["ReportsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_14__["CustomersListComponent"],
                _users_user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
                _customers_customer_stepper_customer_stepper_component__WEBPACK_IMPORTED_MODULE_17__["CustomerStepperComponent"],
                _connections_connection_connection_component__WEBPACK_IMPORTED_MODULE_18__["ConnectionComponent"],
                _connections_connections_list_connections_list_component__WEBPACK_IMPORTED_MODULE_19__["ConnectionsListComponent"],
                _bills_bills_component__WEBPACK_IMPORTED_MODULE_20__["BillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [_services_customer_service__WEBPACK_IMPORTED_MODULE_15__["CustomerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bills/bills.component.css":
/*!*******************************************!*\
  !*** ./src/app/bills/bills.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-control > input,\n.search-control > button {\n  font-size: 1.2rem;\n}\n\n.search-control > input{\n  width: 100%;\n}\n\n.filter-wrapper,\n.keyword-wrapper {\n  display: flex;\n  margin: 7px 20px 5px 0px;\n}\n\n.filter-wrapper {\n  min-height: 2%;\n  flex-flow: column wrap;;\n  position: relative\n}\n\n.keyword-wrapper {\n  width: 100%;\n  position: relative;\n}\n\n#keyword {\n  border: 1px solid #ccc;\n  padding: 10px;\n  font: 1.5em 'Arimo', sans-serif;\n  width: 100%;\n  outline: none;\n  transition: border 0.5s ease-in-out;\n  border-color : rgba(81, 203, 238, 1);\n}\n\n#keyword:focus {\n  /*border-color : rgba(81, 203, 238, 1);;*/\n}\n\n#keyword-button {\n  position: absolute;\n  right: 26%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  font-size: 1.7em;\n  color: #8DB9ED\n}\n\n#keyword-button:hover {\n  color: #ccc\n}\n\n.filter-select {\n  width: 20%;\n  list-style: square;\n  font-size: 1.1em;\n  color: rgb(105, 105, 105);\n  border: 1px solid #ccc;\n  border-top: none;\n  top: calc(50% + 25px);\n  overflow-y: auto;\n  background: #fff;\n  margin: 2px 20px 20px 0px;\n}\n\n.tags {\n  font-size: 12px;\n  font-style: italic;\n  color: #c6c6c6;\n  margin-right: 10px;\n  position: relative;\n  top: -10px;\n}\n\n.filter-select-list:hover .tags {\n  color: #fff;\n}\n\n.filter-select-list {\n  cursor: pointer;\n  padding: 5px 10px;\n}\n\n.customer-name {\n  display: inline-block;\n  position: absolute;\n}\n\n.filter-select-list:hover {\n  background:  #C0C0C0;\n  color: #fff\n}\n\n.list-highlight,\n.list-highlight:hover {\n  background: rgb(55, 55, 55);\n  color: #fff\n}\n\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\n.connections li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color:#CFD8DC !important;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.connections .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n.billing-form{\n padding: 20px;\n}\n\n.submit-btn{\n  margin: 20px;\n}\n\n.customer-connections-list{\n  margin: 5px;\n  padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/bills/bills.component.html":
/*!********************************************!*\
  !*** ./src/app/bills/bills.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <section class=\"filter-wrapper\">\n      <div class=\"keyword-wrapper\">\n          <input type=\"text\" [formControl]=\"customerQueryField\" id=\"keyword\" placeholder=\"search for a customer...\" autofocus />\n      </div>\n    </section>\n\n    <mat-list>\n      <mat-list-item class=\"customer-connections-list\" *ngFor=\"let connection of customerConnections\" [class.selected]=\"connection === connection\"\n                     (click)=\"onSelect(connection)\">\n        <span class=\"badge\">{{connection.id}}</span>{{connection.meterSerialNumber}} in  {{connection.meterLocation}}\n      </mat-list-item>\n\n    </mat-list>\n</div>\n  <div class=\"col-sm-8\" *ngIf=\"connectionSelected\">\n    <div class=\"row\">\n    <mat-toolbar role=\"toolbar\" color=\"primary\">\n      <mat-toolbar-row>\n        Billing Information for {{connection.meterLocation}}\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <form [formGroup]=\"billingFormGroup\" class=\"billing-form\" (ngSubmit)=\"submitReadings()\">\n      <table class=\"billing-form-table\">\n        <tr>\n        <td>\n          <label class=\"col-sm-2 control-label\" for=\"previousReading\">  <mat-label>Previous reading</mat-label></label>\n        </td>\n        <td>\n          <mat-form-field appearance=\"outline\">\n            <input matInput id=\"previousReading\" placeholder=\"Meter serial number\" formControlName=\"previousReading\">\n            <mat-error *ngIf=\"previousReading.invalid && previousReading.touched\">\n              The previous reading is required\n            </mat-error>\n          </mat-form-field>\n        </td>\n        <td></td>\n      </tr>\n        <tr>\n          <td>\n            <label class=\"col-sm-2 control-label\" for=\"currentReading\">  <mat-label>Current reading</mat-label></label>\n          </td>\n          <td>\n            <mat-form-field appearance=\"outline\">\n              <input matInput id=\"currentReading\" placeholder=\"Meter serial number\" formControlName=\"currentReading\">\n              <mat-error *ngIf=\"currentReading.invalid && currentReading.touched\">\n                The current reading is required\n              </mat-error>\n            </mat-form-field>\n          </td>\n          <td>\n            <button type=\"button\" class=\"submit-btn\" mat-raised-button color=\"accent\" [disabled]=\"billingFormGroup.invalid\" type=\"submit\">Submit</button>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </div>\n    <div class=\"row\">\n      <mat-toolbar role=\"toolbar\" color=\"primary\">\n        <mat-toolbar-row>\n          Previous Bills\n        </mat-toolbar-row>\n      </mat-toolbar>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/bills/bills.component.ts":
/*!******************************************!*\
  !*** ./src/app/bills/bills.component.ts ***!
  \******************************************/
/*! exports provided: BillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsComponent", function() { return BillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/billing.service */ "./src/app/services/billing.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillsComponent = /** @class */ (function () {
    function BillsComponent(fb, customerService, billingService) {
        this.fb = fb;
        this.customerService = customerService;
        this.billingService = billingService;
        this.customerQueryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.customerConnections = [];
        //form state
        this.loading = false;
        this.success = false;
    }
    BillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerQueryField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (query) { return _this.customerService.searchCustomer(query); })).subscribe(function (res) {
            res['content'].forEach(function (item) {
                _this.customerConnections = item.connections;
            });
        });
        this.billingFormGroup = this.fb.group({
            previousReading: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            currentReading: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(BillsComponent.prototype, "previousReading", {
        get: function () {
            return this.billingFormGroup.get("previousReading");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillsComponent.prototype, "currentReading", {
        get: function () {
            return this.billingFormGroup.get("currentReading");
        },
        enumerable: true,
        configurable: true
    });
    BillsComponent.prototype.onSelect = function (connection) {
        this.connection = connection;
        this.connectionSelected = true;
    };
    BillsComponent.prototype.submitReadings = function () {
        this.loading = true;
        var billingData = this.billingFormGroup.value;
        console.log("Connection reading" + billingData);
        try {
            //submit form
            this.billingService.save(this.connection.id, billingData);
            this.success = true;
        }
        catch (e) {
            console.log(e);
        }
        this.loading = false;
    };
    BillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bills',
            template: __webpack_require__(/*! ./bills.component.html */ "./src/app/bills/bills.component.html"),
            styles: [__webpack_require__(/*! ./bills.component.css */ "./src/app/bills/bills.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], _services_billing_service__WEBPACK_IMPORTED_MODULE_3__["BillingService"]])
    ], BillsComponent);
    return BillsComponent;
}());



/***/ }),

/***/ "./src/app/connections/connection/connection.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/connections/connection/connection.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-control > input,\n.search-control > button {\n  font-size: 1.2rem;\n}\n\n.search-control > input{\n  width: 50%;\n}\n\n.filter-wrapper,\n.keyword-wrapper {\n  display: flex;\n  margin: 20px 20px 20px 0px;\n}\n\n.filter-wrapper {\n  min-height: 100%;\n  flex-flow: column wrap;;\n  position: relative\n}\n\n.keyword-wrapper {\n  width: 100%;\n  position: relative;\n}\n\n#keyword {\n  border: 1px solid #ccc;\n  padding: 10px;\n  font: 1.5em 'Arimo', sans-serif;\n  width: 50%;\n  outline: none;\n  transition: border 0.5s ease-in-out\n}\n\n#keyword:focus {\n  border-color : rgba(81, 203, 238, 1);;\n}\n\n#keyword-button {\n  position: absolute;\n  right: 26%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  font-size: 1.7em;\n  color: #8DB9ED\n}\n\n#keyword-button:hover {\n  color: #ccc\n}\n\n.filter-select {\n  width: 20%;\n  list-style: square;\n  font-size: 1.1em;\n  color: rgb(105, 105, 105);\n  border: 1px solid #ccc;\n  border-top: none;\n  top: calc(50% + 25px);\n  overflow-y: auto;\n  background: #fff;\n  margin: 2px 20px 20px 0px;\n}\n\n.tags {\n  font-size: 12px;\n  font-style: italic;\n  color: #c6c6c6;\n  margin-right: 10px;\n  position: relative;\n  top: -10px;\n}\n\n.filter-select-list:hover .tags {\n  color: #fff;\n}\n\n.filter-select-list {\n  cursor: pointer;\n  padding: 5px 10px;\n}\n\n.customer-name {\n  display: inline-block;\n  position: absolute;\n}\n\n.filter-select-list:hover {\n  background:  #C0C0C0;\n  color: #fff\n}\n\n.list-highlight,\n.list-highlight:hover {\n  background: rgb(55, 55, 55);\n  color: #fff\n}\n\n"

/***/ }),

/***/ "./src/app/connections/connection/connection.component.html":
/*!******************************************************************!*\
  !*** ./src/app/connections/connection/connection.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"filter-wrapper\">\n  <div class=\"keyword-wrapper\">\n    <input type=\"text\" [formControl]=\"customerQueryField\" id=\"keyword\" placeholder=\"search for a customer...\" autofocus />\n  </div>\n</section>\n\n<form [formGroup]=\"connectionsFormGroup\" (ngSubmit)=\"submitConnectionHandler()\">\n\n  <mat-form-field style=\"width: 30%\">\n    <mat-select placeholder=\"Choose customer\" formControlName=\"customerId\">\n      <mat-option *ngFor=\"let customer of customerResults\" [value]=\"customer.id\">\n        {{customer.firstName}} {{customer.middleName}} {{customer.surname}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n<table>\n  <tr>\n    <td>\n      <label class=\"col-sm-2 control-label\" for=\"meterSerialNumber\">  <mat-label>Meter Serial number</mat-label></label>\n    </td>\n    <td>\n      <mat-form-field appearance=\"outline\">\n        <input matInput id=\"meterSerialNumber\" placeholder=\"Meter serial number\" formControlName=\"meterSerialNumber\">\n        <mat-error *ngIf=\"meterSerialNumber.invalid && meterSerialNumber.touched\">\n          The meter serial number is required\n        </mat-error>\n      </mat-form-field>\n    </td>\n    <td></td>\n\n  </tr>\n\n  <tr>\n    <td>\n      <label class=\"col-sm-2 control-label\" for=\"meterLocation\">  <mat-label>Meter location</mat-label></label>\n    </td>\n    <td colspan=\"2\">\n      <mat-form-field  class=\"full-width-input\" >\n        <textarea matInput placeholder=\"Meter location\" formControlName=\"meterLocation\" id=\"meterLocation\"></textarea>\n        <mat-error *ngIf=\"meterLocation.invalid && meterLocation.touched\">\n          The meter location is required\n        </mat-error>\n      </mat-form-field>\n\n    </td>\n  </tr>\n<tr>\n  <td colspan=\"2\">\n    <div>\n      <button mat-raised-button color=\"accent\" [disabled]=\"connectionsFormGroup.invalid\" type=\"submit\">Submit</button>\n    </div>\n  </td>\n</tr>\n\n</table>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/connections/connection/connection.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/connections/connection/connection.component.ts ***!
  \****************************************************************/
/*! exports provided: ConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionComponent", function() { return ConnectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/connection.service */ "./src/app/services/connection.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ConnectionComponent = /** @class */ (function () {
    function ConnectionComponent(_formBuilder, connectionService, customerService) {
        this._formBuilder = _formBuilder;
        this.connectionService = connectionService;
        this.customerService = customerService;
        this.customerQueryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.customerResults = [];
        //form state
        this.loading = false;
        this.success = false;
    }
    ConnectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectionsFormGroup = this._formBuilder.group({
            meterSerialNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            meterLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            customerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.customerQueryField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (query) { return _this.customerService.searchCustomer(query); })).subscribe(function (res) {
            res['content'].forEach(function (item) {
                _this.customerResults.push(item);
            });
        });
    };
    Object.defineProperty(ConnectionComponent.prototype, "meterSerialNumber", {
        get: function () {
            return this.connectionsFormGroup.get("meterSerialNumber");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionComponent.prototype, "meterLocation", {
        get: function () {
            return this.connectionsFormGroup.get("meterLocation");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionComponent.prototype, "customerId", {
        get: function () {
            return this.connectionsFormGroup.get("customerId");
        },
        enumerable: true,
        configurable: true
    });
    ConnectionComponent.prototype.submitConnectionHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connectionData, connections;
            return __generator(this, function (_a) {
                this.loading = true;
                connectionData = this.connectionsFormGroup.value;
                connections = [];
                connections.push(connectionData);
                try {
                    //submit form
                    this.customerService.connect(this.customerId.value, connections);
                    this.success = true;
                }
                catch (e) {
                    console.log(e);
                }
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    ConnectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connection',
            template: __webpack_require__(/*! ./connection.component.html */ "./src/app/connections/connection/connection.component.html"),
            styles: [__webpack_require__(/*! ./connection.component.css */ "./src/app/connections/connection/connection.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"], _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], ConnectionComponent);
    return ConnectionComponent;
}());



/***/ }),

/***/ "./src/app/connections/connections-list/connections-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/connections/connections-list/connections-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connections/connections-list/connections-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/connections/connections-list/connections-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"connection\">\n\n  <mat-form-field>\n    <input matInput placeholder=\"Search connection\" #input>\n  </mat-form-field>\n\n  <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n    <mat-spinner></mat-spinner>\n  </div>\n\n  <mat-table class=\"lessons-table mat-elevation-z8\" [dataSource]=\"dataSource\"\n             matSort matSortActive=\"seqNo\" matSortDirection=\"asc\" matSortDisableClear>\n\n    <ng-container matColumnDef=\"meterSerialNumber\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Meter serial Number</mat-header-cell>\n      <mat-cell *matCellDef=\"let connection\">{{connection.meterSerialNumber}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"meterLocation\">\n      <mat-header-cell *matHeaderCellDef>Meter Location</mat-header-cell>\n      <mat-cell class=\"description-cell\"\n                *matCellDef=\"let connection\">{{connection.meterLocation}}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"connectionCode\">\n      <mat-header-cell *matHeaderCellDef>Connection code</mat-header-cell>\n      <mat-cell class=\"duration-cell\"\n                *matCellDef=\"let connection\">{{connection.connectionCode}}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"status\">\n      <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>\n      <mat-cell class=\"duration-cell\"\n                *matCellDef=\"let connection\">{{connection.status}}\n      </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"customer\">\n      <mat-header-cell *matHeaderCellDef>Owner</mat-header-cell>\n      <mat-cell class=\"duration-cell\"\n                *matCellDef=\"let connection\">{{connection.customer.firstName}}\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n  </mat-table>\n\n  <!--todo change [length]=\"10\" to a dynamic value-->\n  <mat-paginator [length]=\"10\" [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[3, 5, 10]\"></mat-paginator>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/connections/connections-list/connections-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/connections/connections-list/connections-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConnectionsListComponent, ConnectionDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsListComponent", function() { return ConnectionsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionDataSource", function() { return ConnectionDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_observable_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/merge */ "./node_modules/rxjs/internal/observable/merge.js");
/* harmony import */ var rxjs_internal_observable_merge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_merge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/connection.service */ "./src/app/services/connection.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConnectionsListComponent = /** @class */ (function () {
    function ConnectionsListComponent(route, _connectionService) {
        this.route = route;
        this._connectionService = _connectionService;
        this.totalCustomers = 0;
        this.displayedColumns = ['meterSerialNumber', 'meterLocation', 'connectionCode', 'status', 'customer'];
    }
    ConnectionsListComponent.prototype.ngOnInit = function () {
        this.connection = this.route.snapshot.data["connection"];
        this.dataSource = new ConnectionDataSource(this._connectionService);
        this.dataSource.loadConnections('', 'asc', 0, 3);
    };
    ConnectionsListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadConnectionsPage();
        }))
            .subscribe();
        Object(rxjs_internal_observable_merge__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () { return _this.loadConnectionsPage(); }))
            .subscribe();
    };
    ConnectionsListComponent.prototype.loadConnectionsPage = function () {
        this.dataSource.loadConnections(this.input.nativeElement.value, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ConnectionsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ConnectionsListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConnectionsListComponent.prototype, "input", void 0);
    ConnectionsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connections-list',
            template: __webpack_require__(/*! ./connections-list.component.html */ "./src/app/connections/connections-list/connections-list.component.html"),
            styles: [__webpack_require__(/*! ./connections-list.component.css */ "./src/app/connections/connections-list/connections-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_connection_service__WEBPACK_IMPORTED_MODULE_8__["ConnectionService"]])
    ], ConnectionsListComponent);
    return ConnectionsListComponent;
}());

var ConnectionDataSource = /** @class */ (function () {
    function ConnectionDataSource(connectionService) {
        this.connectionService = connectionService;
        this.connectionSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    ConnectionDataSource.prototype.loadConnections = function (filter, sortDirection, pageIndex, pageSize) {
        var _this = this;
        this.loadingSubject.next(true);
        this.connectionService.getConnections(filter, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.loadingSubject.next(false); })).subscribe(function (connections) { return _this.connectionSubject.next(connections["content"]); });
    };
    ConnectionDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.connectionSubject.asObservable();
    };
    ConnectionDataSource.prototype.disconnect = function (collectionViewer) {
        this.connectionSubject.complete();
        this.loadingSubject.complete();
    };
    return ConnectionDataSource;
}());



/***/ }),

/***/ "./src/app/connections/connections.component.css":
/*!*******************************************************!*\
  !*** ./src/app/connections/connections.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connections/connections.component.html":
/*!********************************************************!*\
  !*** ./src/app/connections/connections.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row>\n    <button mat-icon-button (click)=\"addConnection()\">\n      <mat-icon class=\"glyphicon-plus\">add</mat-icon>\n      Create connection\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/connections/connections.component.ts":
/*!******************************************************!*\
  !*** ./src/app/connections/connections.component.ts ***!
  \******************************************************/
/*! exports provided: ConnectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsComponent", function() { return ConnectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionsComponent = /** @class */ (function () {
    function ConnectionsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ConnectionsComponent.prototype.ngOnInit = function () {
    };
    ConnectionsComponent.prototype.addConnection = function () {
        this.router.navigate(['add-connection'], { relativeTo: this.route });
    };
    ConnectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connections',
            template: __webpack_require__(/*! ./connections.component.html */ "./src/app/connections/connections.component.html"),
            styles: [__webpack_require__(/*! ./connections.component.css */ "./src/app/connections/connections.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ConnectionsComponent);
    return ConnectionsComponent;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"]
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"]
            ],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/customers/customer-stepper/customer-stepper.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/customers/customer-stepper/customer-stepper.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table td {\n  text-align: left;\n  padding-left: 20px;\n  font-weight: 700;\n  margin: auto;\n}\n\ntable tr {\n  border-top: 2px solid rgba(109, 176, 231, 0.8);\n  transition: background 0.6s, color 0.6s;\n}\n\n.next-button{\n  float: right;\n}\n\n.full-width-input{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/customers/customer-stepper/customer-stepper.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customers/customer-stepper/customer-stepper.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"customerFormGroup\" (ngSubmit)=\"submitCustomerConnectionHandler()\">\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"customerFormGroup\">\n\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <table>\n        <tr>\n          <td>\n            <label class=\"col-lg-2 control-label\" for=\"firstName\"> <mat-label>First Name</mat-label></label>\n          </td>\n          <td>\n            <mat-form-field appearance=\"outline\">\n            <input matInput id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"firstName.invalid && firstName.touched\">\n              The first name looks invalid (Only alphabets allowed)\n            </mat-error>\n          </mat-form-field></td>\n          <td>\n            <label class=\"col-sm-2 control-label\" for=\"middleName\">   <mat-label>Middle name</mat-label></label>\n          </td>\n          <td>\n            <mat-form-field appearance=\"outline\">\n              <input matInput id=\"middleName\" placeholder=\"Middle name\" formControlName=\"middleName\">\n              <mat-error *ngIf=\"middleName.invalid && middleName.touched\">\n                The middle name looks invalid (Only alphabets allowed)\n              </mat-error>\n            </mat-form-field>\n\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label class=\"col-sm-2 control-label\" for=\"surname\">  <mat-label>Surname</mat-label></label>\n          </td>\n          <td>\n            <mat-form-field appearance=\"outline\">\n              <input matInput id=\"surname\" placeholder=\"Surname\" formControlName=\"surname\">\n              <mat-error *ngIf=\"surname.invalid  && surname.touched\">\n                The surname looks invalid (Only alphabets allowed)\n              </mat-error>\n            </mat-form-field>\n          </td>\n\n          <td>\n            <label class=\"col-sm-2 control-label\" for=\"idNumber\"> <mat-label>ID Number</mat-label></label>\n          </td>\n          <td>\n            <mat-form-field appearance=\"outline\">\n              <mat-label>National ID Number</mat-label>\n              <input matInput id=\"idNumber\" placeholder=\"National ID Number\" formControlName=\"idNumber\">\n              <mat-error *ngIf=\"idNumber.invalid && idNumber.touched\">\n                The National ID looks invalid (Only numbers allowed)\n              </mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label class=\"col-sm-2 control-label\" for=\"email\">  <mat-label>Email address</mat-label></label>\n          </td>\n          <td colspan=\"3\">\n            <mat-form-field appearance=\"outline\" class=\"full-width-input\">\n              <input matInput id=\"email\" placeholder=\"Email address\" formControlName=\"email\">\n              <mat-error *ngIf=\"email.invalid && email.touched\">\n                The email address is invalid\n              </mat-error>\n            </mat-form-field>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label class=\"col-sm-2 control-label\" for=\"number\"> <mat-label>Phone Number</mat-label></label>\n          </td>\n          <td>\n            <div formArrayName=\"phoneNumbers\">\n              <div *ngFor=\"let number of formPhoneNumbers.controls; let i=index;\" [formGroupName]=\"i\">\n                <mat-form-field>\n                  <input matInput id=\"number\" placeholder=\"Phone Number\" formControlName=\"number\">\n                  <mat-error *ngIf=\"number.invalid && number.touched\">\n                    The phone number is invalid <br />\n                    - should start with a 7\n                    - should contain 9 digits\n                  </mat-error>\n                </mat-form-field>\n\n                <button mat-raised-button color=\"warn\" (click)=\"deleteFormPhoneNumber(i)\"> Delete Phone number\n                  <mat-icon aria-label=\"add phone number icon\">delete</mat-icon>\n                </button>\n              </div>\n            </div>\n\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"addPhoneNumber()\"> Add Phone number\n              <mat-icon aria-label=\"add phone number icon\">add</mat-icon>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"4\">\n            <div  class=\"next-button btn-primary\">\n              <button type=\"button\" mat-button matStepperNext >Next</button>\n            </div>\n          </td>\n        </tr>\n      </table>\n  </mat-step>\n  <mat-step [stepControl]=\"connectionsFormGroup\">\n      <ng-template matStepLabel>Fill out Connection details</ng-template>\n\n      <table>\n        <tr>\n          <td>\n            <label class=\"col-sm-2 control-label\" for=\"number\"> <mat-label>New Connection</mat-label></label>\n          </td>\n          <td>\n            <div formArrayName=\"connections\">\n              <div *ngFor=\"let connection of formConnections.controls; let i=index;\" [formGroupName]=\"i\">\n                <mat-form-field>\n                  <input matInput id=\"meterSerialNumber\" placeholder=\"Meter serial number\" formControlName=\"meterSerialNumber\">\n\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\">\n                  <textarea matInput placeholder=\"Meter location\" formControlName=\"meterLocation\" id=\"meterLocation\"></textarea>\n                </mat-form-field>\n\n                <button mat-raised-button color=\"warn\" (click)=\"deleteFormConnection(i)\"> Delete Connection\n                  <mat-icon aria-label=\"add connection icon\">delete</mat-icon>\n                </button>\n              </div>\n            </div>\n\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"addConnection()\"> Add Connection\n              <mat-icon aria-label=\"add connection icon\">add</mat-icon>\n            </button>\n          </td>\n\n        </tr>\n        <tr>\n        <td>\n            <div>\n              <button type=\"button\" mat-button matStepperPrevious>Back</button>\n              <button type=\"button\" mat-button matStepperNext >Next</button>\n            </div>\n\n          </td>\n        </tr>\n      </table>\n\n\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <div>\n      <button type=\"button\" mat-button matStepperPrevious>Back</button>\n      <button type=\"button\" class=\"submit-btn\" mat-raised-button color=\"accent\" [disabled]=\"customerFormGroup.invalid\" type=\"submit\">Submit</button>\n      <!--<button mat-button (click)=\"stepper.reset()\">Reset</button>-->\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>   </form>\n"

/***/ }),

/***/ "./src/app/customers/customer-stepper/customer-stepper.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customers/customer-stepper/customer-stepper.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerStepperComponent", function() { return CustomerStepperComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CustomerStepperComponent = /** @class */ (function () {
    function CustomerStepperComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.isLinear = false;
        //form state
        this.loading = false;
        this.success = false;
        this.url = 'http://localhost:5000/customers';
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CustomerStepperComponent.prototype.ngOnInit = function () {
        this.customerFormGroup = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            middleName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            idNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            phoneNumbers: this.fb.array([]),
            connections: this.fb.array([])
        });
        this.connectionsFormGroup = this.fb.group({});
        this.connectionsFormGroup.valueChanges.subscribe(console.log);
    };
    Object.defineProperty(CustomerStepperComponent.prototype, "firstName", {
        //Customer form controls
        get: function () {
            return this.customerFormGroup.get("firstName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerStepperComponent.prototype, "middleName", {
        get: function () {
            return this.customerFormGroup.get("middleName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerStepperComponent.prototype, "surname", {
        get: function () {
            return this.customerFormGroup.get("surname");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerStepperComponent.prototype, "idNumber", {
        get: function () {
            return this.customerFormGroup.get("idNumber");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerStepperComponent.prototype, "email", {
        get: function () {
            return this.customerFormGroup.get("email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerStepperComponent.prototype, "formPhoneNumbers", {
        get: function () {
            return this.customerFormGroup.get("phoneNumbers");
        },
        enumerable: true,
        configurable: true
    });
    CustomerStepperComponent.prototype.addPhoneNumber = function () {
        var phoneNumber = this.fb.group({
            number: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^254+[0-9]*'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]
            ],
        });
        this.formPhoneNumbers.push(phoneNumber);
    };
    CustomerStepperComponent.prototype.deleteFormPhoneNumber = function (i) {
        this.formPhoneNumbers.removeAt(i);
    };
    Object.defineProperty(CustomerStepperComponent.prototype, "formConnections", {
        //Connection form controls
        get: function () {
            return this.customerFormGroup.get("connections");
        },
        enumerable: true,
        configurable: true
    });
    CustomerStepperComponent.prototype.addConnection = function () {
        var connection = this.fb.group({
            meterSerialNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            meterLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formConnections.push(connection);
    };
    CustomerStepperComponent.prototype.deleteFormConnection = function (i) {
        this.formConnections.removeAt(i);
    };
    CustomerStepperComponent.prototype.submitCustomerConnectionHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customerData;
            return __generator(this, function (_a) {
                this.loading = true;
                customerData = this.customerFormGroup.value;
                console.log("Customer data" + customerData);
                try {
                    //submit form
                    this.http.post(this.url, JSON.stringify(customerData), this.headers)
                        .subscribe(function (response) {
                        console.log(response);
                    }, function (err) {
                        console.log(err);
                    });
                    this.success = true;
                }
                catch (e) {
                    console.log(e);
                }
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    CustomerStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-stepper',
            template: __webpack_require__(/*! ./customer-stepper.component.html */ "./src/app/customers/customer-stepper/customer-stepper.component.html"),
            styles: [__webpack_require__(/*! ./customer-stepper.component.css */ "./src/app/customers/customer-stepper/customer-stepper.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CustomerStepperComponent);
    return CustomerStepperComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-list/customers-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/customers-list/customers-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customers-list/customers-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/customers-list/customers-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customer\">\n\n  <mat-form-field>\n    <input matInput placeholder=\"Search customer\" #input>\n  </mat-form-field>\n\n  <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n    <mat-spinner></mat-spinner>\n  </div>\n\n  <mat-table class=\"lessons-table mat-elevation-z8\" [dataSource]=\"dataSource\"\n             matSort matSortActive=\"seqNo\" matSortDirection=\"asc\" matSortDisableClear>\n\n    <ng-container matColumnDef=\"firstName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let customer\">{{customer.firstName}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"middleName\">\n      <mat-header-cell *matHeaderCellDef>Middle Name</mat-header-cell>\n      <mat-cell class=\"description-cell\"\n                *matCellDef=\"let customer\">{{customer.middleName}}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"surname\">\n      <mat-header-cell *matHeaderCellDef>Surname</mat-header-cell>\n      <mat-cell class=\"duration-cell\"\n                *matCellDef=\"let customer\">{{customer.surname}}\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"idNumber\">\n      <mat-header-cell *matHeaderCellDef>ID Number</mat-header-cell>\n      <mat-cell class=\"duration-cell\"\n                *matCellDef=\"let customer\">{{customer.idNumber}}\n      </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef>Email</mat-header-cell>\n      <mat-cell class=\"duration-cell\"\n                *matCellDef=\"let customer\">{{customer.email}}\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n  </mat-table>\n\n  <!--todo change [length]=\"10\" to a dynamic value-->\n  <mat-paginator [length]=\"10\" [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[3, 5, 10]\"></mat-paginator>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customers-list/customers-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-list/customers-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersListComponent, CustomerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDataSource", function() { return CustomerDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_observable_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/merge */ "./node_modules/rxjs/internal/observable/merge.js");
/* harmony import */ var rxjs_internal_observable_merge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_merge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent(route, _customerService) {
        this.route = route;
        this._customerService = _customerService;
        this.totalCustomers = 0;
        this.displayedColumns = ['firstName', 'middleName', 'surname', 'idNumber', 'email'];
    }
    CustomersListComponent.prototype.ngOnInit = function () {
        this.customer = this.route.snapshot.data["customer"];
        this.dataSource = new CustomerDataSource(this._customerService);
        this.dataSource.loadCustomers('', 'asc', 0, 3);
    };
    CustomersListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadCustomersPage();
        }))
            .subscribe();
        Object(rxjs_internal_observable_merge__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () { return _this.loadCustomersPage(); }))
            .subscribe();
    };
    CustomersListComponent.prototype.loadCustomersPage = function () {
        this.dataSource.loadCustomers(this.input.nativeElement.value, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CustomersListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CustomersListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomersListComponent.prototype, "input", void 0);
    CustomersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-list',
            template: __webpack_require__(/*! ./customers-list.component.html */ "./src/app/customers/customers-list/customers-list.component.html"),
            styles: [__webpack_require__(/*! ./customers-list.component.css */ "./src/app/customers/customers-list/customers-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]])
    ], CustomersListComponent);
    return CustomersListComponent;
}());

var CustomerDataSource = /** @class */ (function () {
    function CustomerDataSource(_customerService) {
        this._customerService = _customerService;
        this.customerSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    CustomerDataSource.prototype.loadCustomers = function (filter, sortDirection, pageIndex, pageSize) {
        var _this = this;
        this.loadingSubject.next(true);
        this._customerService.findCustomers(filter, sortDirection, pageIndex, pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.loadingSubject.next(false); })).subscribe(function (customers) { return _this.customerSubject.next(customers["content"]); });
    };
    CustomerDataSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.customerSubject.asObservable();
    };
    CustomerDataSource.prototype.disconnect = function (collectionViewer) {
        this.customerSubject.complete();
        this.loadingSubject.complete();
    };
    return CustomerDataSource;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentComponentIsList\">\n<mat-toolbar>\n  <mat-toolbar-row>\n    <button mat-icon-button (click)=\"addCustomer()\">\n      <mat-icon class=\"glyphicon-plus\">add</mat-icon>\n      Add Customer\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(router, route) {
        this.router = router;
        this.route = route;
        this.componentName = this.router.url;
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent.prototype.currentComponentIsList = function () {
        return this.componentUrl = (this.router.url == "/customers/list");
    };
    CustomersComponent.prototype.addCustomer = function () {
        this.router.navigate(['add'], { relativeTo: this.route });
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards | async\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.toolbar-space-filler {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.sidenav-container{\n  background-color: #fafafa;\n}\n\n.content{\n  margin: 10px;\n}\n\n.submit-button-holder{\n  flex: 1 1 auto;\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <!--show dashboard when this button is clicked-->\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle side nav\" mat-icon-button color=\"secondary\" (click)=\"showDashbord()\">\n        <h5 class=\"title\">{{title}} <mat-icon aria-label=\"Side nav toggle icon\">home</mat-icon> </h5>\n      </button>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/customers\">Customers</a>\n      <a mat-list-item routerLink=\"/connections\">Connections</a>\n      <a mat-list-item routerLink=\"/bills\">Readings & Bills</a>\n      <a mat-list-item routerLink=\"/reports\">Reports</a>\n      <a mat-list-item routerLink=\"/users\">Users and Accounts</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar role=\"toolbar\" color=\"primary\">\n      <mat-toolbar-row>\n        <button type=\"button\" aria-label=\"Toggle side nav\" mat-icon-button (click)=\"drawer.toggle()\" color=\"secondary\">\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n        </button>\n        <span class=\"toolbar-space-filler\"></span>\n        <span>\n          <mat-menu #appMenu=\"matMenu\">\n            <button mat-menu-item>Settings</button>\n            <button mat-menu-item>Help & About</button>\n            <button mat-menu-item>Logout</button>\n          </mat-menu>\n          <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n        </span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <div class=\"content\">\n    <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(breakpointObserver, router) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.title = "Wamis 1.0";
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    NavigationComponent.prototype.showDashbord = function () {
        this.router.navigate(['']);
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reports works!\n</p>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/services/billing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/billing.service.ts ***!
  \*********************************************/
/*! exports provided: BillingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingService", function() { return BillingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillingService = /** @class */ (function () {
    function BillingService(http) {
        this.http = http;
        this.connectionUrl = "http://localhost:5000/connections";
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    BillingService.prototype.save = function (connectionId, billingData) {
        this.http.post(this.connectionUrl + "/" + connectionId + "/bill", JSON.stringify(billingData), this.headers)
            .subscribe(function (response) {
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    BillingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], BillingService);
    return BillingService;
}());



/***/ }),

/***/ "./src/app/services/connection.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionService = /** @class */ (function () {
    function ConnectionService(http) {
        this.http = http;
        this.connectionUrl = "http://localhost:5000/connections";
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ConnectionService.prototype.getConnections = function (filter, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        return this.http.get(this.connectionUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    };
    ConnectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ConnectionService);
    return ConnectionService;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.customerUrl = "http://localhost:5000/customers";
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.customerUrl);
    };
    CustomerService.prototype.findCustomers = function (filter, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        return this.http.get(this.customerUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    };
    CustomerService.prototype.searchCustomer = function (queryString) {
        var _URL = this.customerUrl + "?filter=" + queryString;
        return this.http.get(_URL);
    };
    CustomerService.prototype.connect = function (customerId, connections) {
        this.http.post(this.customerUrl + "/" + customerId + "/connect", JSON.stringify(connections), this.headers)
            .subscribe(function (response) {
            console.log(response);
        }, function (err) {
            console.log(err);
        });
    };
    CustomerService.prototype.getCustomerConnections = function (customerId) {
        var _URL = this.customerUrl + "/" + customerId + "/connections";
        return this.http.get(_URL);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serviceUrl = "https://jsonplaceholder.typicode.com/users";
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.serviceUrl);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/users/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/user/user.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/users/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"userDataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name. </th>\n      <td mat-cell *matCellDef=\"let user\"> {{user.name}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef> Email </th>\n      <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"phone\">\n      <th mat-header-cell *matHeaderCellDef> Phone </th>\n      <td mat-cell *matCellDef=\"let user\"> {{user.phone}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"company\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let user\"> {{user.company.name}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedUserColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedUserColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent, UserDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataSource", function() { return UserDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.userDataSource = new UserDataSource(this.userService);
        this.displayedUserColumns = ['name', 'email', 'phone', 'company'];
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UserComponent.prototype, "paginator", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/users/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());

var UserDataSource = /** @class */ (function (_super) {
    __extends(UserDataSource, _super);
    function UserDataSource(_userService) {
        var _this = _super.call(this) || this;
        _this._userService = _userService;
        return _this;
    }
    UserDataSource.prototype.connect = function () {
        return this._userService.getUsers();
    };
    UserDataSource.prototype.disconnect = function () { };
    return UserDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gmaina/vscodeProjects/angular-kotlin/src/main/webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map