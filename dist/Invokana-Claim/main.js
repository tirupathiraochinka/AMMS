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

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        //alert("Apiser const");
    }
    ApiService.prototype.login = function (email, password) {
        return this.http.post('api/Main/Login', {
            Username: email,
            password: password
        });
    };
    ApiService.prototype.register = function (user) {
        return this.http.post('api/user/register', user);
    };
    ApiService.prototype.getUserData = function () {
        return this.http.get('api/user/GetUserList');
    };
    ApiService.prototype.getInvokanaClaims = function () {
        return this.http.get('api/user/GetInvokanaClaims');
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .invalid-feedback {\r\n    display: block;\r\n    margin-top: .25rem;\r\n    font-size: 12px;\r\n    color: #dc3545;\r\n}\r\n\r\nlabel{\r\n    font-weight: 600;\r\n} */\r\n/* \r\n.container{\r\n    width: 1000px;\r\n} */\r\n/* .mandataryStar\r\n{\r\n    color:red;\r\n}\r\n\r\n.navbar-nav.navbar-center {\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translatex(-50%);\r\n}\r\n.about-us-text ul li{\r\n    display:inherit !important;\r\n}\r\n\r\nul.a {list-style-type: circle !important;}  */\r\n/*old css*/\r\n.invalid-feedback {\r\n    display: block;\r\n    margin-top: .25rem;\r\n    font-size: 12px;\r\n    color: #dc3545;\r\n}\r\nlabel{\r\n    font-weight: 600;\r\n}\r\n.mandataryStar\r\n{\r\n    color:red;\r\n}\r\n.navbar-nav.navbar-center {\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translatex(-50%);\r\n            transform: translatex(-50%);\r\n}\r\n.about-us-text ul li{\r\n    display:inherit !important;\r\n}\r\nul.a {list-style-type: circle !important;}\r\np{\r\n    text-align: justify;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBQ0g7OztHQUdHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OzZDQWM2QztBQUU3QyxVQUFVO0FBR1Y7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxTQUFTO0FBQ2I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUEsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6QztJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59ICovXHJcbi8qIFxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxufSAqL1xyXG4vKiAubWFuZGF0YXJ5U3RhclxyXG57XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2Lm5hdmJhci1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG59XHJcbi5hYm91dC11cy10ZXh0IHVsIGxpe1xyXG4gICAgZGlzcGxheTppbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsLmEge2xpc3Qtc3R5bGUtdHlwZTogY2lyY2xlICFpbXBvcnRhbnQ7fSAgKi9cclxuXHJcbi8qb2xkIGNzcyovXHJcblxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubWFuZGF0YXJ5U3RhclxyXG57XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2Lm5hdmJhci1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG59XHJcbi5hYm91dC11cy10ZXh0IHVsIGxpe1xyXG4gICAgZGlzcGxheTppbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsLmEge2xpc3Qtc3R5bGUtdHlwZTogY2lyY2xlICFpbXBvcnRhbnQ7fSBcclxucHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page/login-page.module */ "./src/app/login-page/login-page.module.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _dashboard_page_dashboard_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.module */ "./src/app/dashboard-page/dashboard-page.module.ts");
/* harmony import */ var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-page/dashboard-page.component */ "./src/app/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");














var appRoutes = [
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_9__["DashboardPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"]],
    },
    {
        path: '',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _login_page_login_page_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageModule"],
                _dashboard_page_dashboard_page_module__WEBPACK_IMPORTED_MODULE_8__["DashboardPageModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({ maxOpened: 1, preventDuplicates: true }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
            ],
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_10__["NeedAuthGuard"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: NeedAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedAuthGuard", function() { return NeedAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");




var NeedAuthGuard = /** @class */ (function () {
    function NeedAuthGuard(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    NeedAuthGuard.prototype.canActivate = function (route, state) {
        var redirectUrl = route['_routerState']['url'];
        console.log(redirectUrl);
        if (this.customerService.isLogged()) {
            return true;
        }
        this.router.navigateByUrl(this.router.createUrlTree(['/'], {
            queryParams: {
                redirectUrl: redirectUrl
            }
        }));
        return false;
    };
    NeedAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NeedAuthGuard);
    return NeedAuthGuard;
}());



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN = 'TOKEN';
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN, token);
    };
    CustomerService.prototype.isLogged = function () {
        return localStorage.getItem(TOKEN) != null;
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n \t\n  <!-- Preloader -->\n  <div class=\"preloader\"></div>\n \n  <!-- Main Header-->\n  <header class=\"main-header header-style-five\">\n  \n    <!-- Header Top -->\n    <div class=\"header-top\">\n        <div class=\"auto-container\">\n            <div class=\"top-outer clearfix\">\n                  \n                  <!--Top Left-->\n                  <div class=\"top-left\">\n                    <ul class=\"links clearfix\">\n                        <!--Language-->\n                          <!-- <li class=\"language dropdown\"><a class=\"btn btn-default dropdown-toggle\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" ><span class=\"flag-img\"><img src=\"../../assets/images/icons/flag.jpg\" alt=\"\" /></span>English &nbsp;<span class=\"fa fa-angle-down\"></span></a>\n                              <ul class=\"dropdown-menu style-one\" aria-labelledby=\"dropdownMenu2\">\n                                  <li><a>English</a></li>\n                                  <li><a>German</a></li>\n                                  <li><a>Arabic</a></li>\n                                  <li><a>Hindi</a></li>\n                              </ul>\n                          </li> -->\n                        <!-- <li><a ><span class=\"icon fa fa-phone\"></span>Talk With Our Spacialist: <strong>+0 625-07520-6644</strong> </a></li>\n                          <li><a ><span class=\"icon\"></span>Contact Us</a></li> -->\n                      </ul>\n                  </div>\n                  \n                  <!--Top Right-->\n                  <!-- <div class=\"top-right clearfix\">\n                    <ul class=\"clearfix\">\n                          <li><a [routerLink]=\"['/login']\"><span class=\"icon flaticon-user\"></span>Login</a> <span>or</span> <a><span class=\"icon flaticon-upload\"></span>Register</a></li>\n                          <li class=\"search-box-outer\">\n                              <div class=\"dropdown\">\n                                  <button class=\"search-box-btn dropdown-toggle\" type=\"button\" id=\"dropdownMenu3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"fa fa-search\"></span></button>\n                                  <ul class=\"dropdown-menu pull-right search-panel\" aria-labelledby=\"dropdownMenu3\">\n                                      <li class=\"panel-outer\">\n                                          <div class=\"form-container\">\n                                                  <div class=\"form-group\">\n                                                      <input type=\"search\" name=\"field-name\" value=\"\" placeholder=\"Search Here\" required>\n                                                      <button type=\"submit\" class=\"search-btn\"><span class=\"fa fa-search\"></span></button>\n                                                  </div>\n                                          </div>\n                                      </li>\n                                  </ul>\n                              </div>\n                          </li>\n                      </ul>                        \n                  </div> -->\n                  \n              </div>\n              \n          </div>\n      </div>\n      <!-- Header Top End -->\n      \n      <!-- Main Box -->\n    <div class=\"main-box\">\n        <div class=\"auto-container\">\n            <div class=\"outer-container clearfix\">\n                  <!--Logo Box-->\n                  <div class=\"logo-box\">\n                      <div class=\"logo\"><a><img src=\"../../assets/images/PHOTO-2019-03-19-01-54-50.png\" width=\"70\" height=\"50\" alt=\"\">America's Marketing & Media Sollutions LLC</a></div>\n                  </div>\n                  \n                  <!--Nav Outer-->\n                  <div class=\"nav-outer clearfix\">\n                  \n                      <!-- Main Menu -->\n                      <nav class=\"main-menu\">\n                          <div class=\"navbar-header\">\n                              <!-- Toggle Button -->    \t\n                              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                                  <span class=\"icon-bar\"></span>\n                                  <span class=\"icon-bar\"></span>\n                                  <span class=\"icon-bar\"></span>\n                              </button>\n                          </div>\n                          \n                          <div class=\"navbar-collapse collapse clearfix\">\n                              <ul class=\"navigation clearfix\">\n                                  <li class=\"current dropdown\"><a [routerLink]=\"['/dashboard/home']\">Dashboard</a>\n                                  </li>\n                                   <li class=\"dropdown\"><a ><button class=\"btn btn-warning\"> Add Applicant</button></a>\n                                    <ul>\n                                      <li><a (click)=\"redirectTo(1)\">Invokana Claim</a></li>\n                                      <li><a (click)=\"redirectTo(2)\">Xarelto Claimn</a></li>\n                                      <li><a (click)=\"redirectTo(3)\">Ivc Claim</a></li>\n                                  </ul>\n                                  </li>\n                                  <li *ngIf=\"isAdmin\" class=\"dropdown\"><a [routerLink]=\"['/dashboard/userregistration']\">Register User</a></li>\n                  <li *ngIf=\"isAdmin\" class=\"dropdown\"><a [routerLink]=\"['/dashboard/userlist']\">Users</a></li>\n                  <li class=\"dropdown\"><a>Applicants</a>\n                      <ul>\n                                          <li><a [routerLink]=\"['/dashboard/invokanaclaims']\">Invokana Claims</a></li>\n                                          <li><a [routerLink]=\"['/dashboard/xareltoclaims']\">Xarelto Claimns</a></li>\n                                          <li><a [routerLink]=\"['/dashboard/ivcclaims']\">Ivc Claims</a></li>\n                                      </ul>\n                  </li>\n                  <li class=\"dropdown\"><a style=\"cursor: pointer;\" (click)=\"logOut()\">Logout</a></li>\n                                  \n                               </ul>\n                          </div>\n                      </nav>\n                      <!-- Main Menu End-->\n                      \n                      <!--Outer Box-->\n                      <!-- <div class=\"outer-box\">\n                          <a class=\"theme-btn btn-style-one\"> <span class=\"icon flaticon-right-arrow-1\"></span> Get a Quote</a>\n                      </div> -->\n                      \n                  </div>\n                  <!--Nav Outer End-->\n                  \n            </div>    \n          </div>\n      </div>\n    \n      <!--Sticky Header-->\n      <div class=\"sticky-header\">\n        <div class=\"auto-container\">\n            \n              <div class=\"outer-container clearfix\">\n                  <!--Logo Box-->\n                  <div class=\"logo-box pull-left\">\n                      <div class=\"logo\"><a><img src=\"../../assets/images/PHOTO-2019-03-19-01-54-50.png\" width=\"70\" height=\"50\" alt=\"\">America's Marketing & Media Sollutions LLC</a></div>\n                  </div>\n                  \n                  <!--Nav Outer-->\n                  <div class=\"nav-outer clearfix\">\n                      <!-- Main Menu -->\n                      <nav class=\"main-menu\">\n                          <div class=\"navbar-header\">\n                              <!-- Toggle Button -->    \t\n                              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                                  <span class=\"icon-bar\"></span>\n                                  <span class=\"icon-bar\"></span>\n                                  <span class=\"icon-bar\"></span>\n                              </button>\n                          </div>\n                          \n                          <div class=\"navbar-collapse collapse clearfix\">\n                            <ul class=\"navigation clearfix\">\n                                <li class=\"current dropdown\"><a [routerLink]=\"['/dashboard/home']\">Dashboard</a>\n                                </li>\n                                 <li class=\"dropdown\"><a ><button class=\"btn btn-warning\"> Add Applicant</button></a>\n                                  <ul>\n                                    <li><a (click)=\"redirectTo(1)\">Invokana Claim</a></li>\n                                    <li><a (click)=\"redirectTo(2)\">Xarelto Claimn</a></li>\n                                    <li><a (click)=\"redirectTo(3)\">Ivc Claim</a></li>\n                                </ul>\n                                </li>\n                                <li *ngIf=\"isAdmin\" class=\"dropdown\"><a [routerLink]=\"['/dashboard/userregistration']\">Register User</a></li>\n                <li *ngIf=\"isAdmin\" class=\"dropdown\"><a [routerLink]=\"['/dashboard/userlist']\">Users</a></li>\n                <li class=\"dropdown\"><a>Applicants</a>\n                    <ul>\n                                        <li><a [routerLink]=\"['/dashboard/invokanaclaims']\">Invokana Claims</a></li>\n                                        <li><a [routerLink]=\"['/dashboard/xareltoclaims']\">Xarelto Claimns</a></li>\n                                        <li><a [routerLink]=\"['/dashboard/ivcclaims']\">Ivc Claims</a></li>\n                                    </ul>\n                </li>\n                <li class=\"dropdown\"><a style=\"cursor: pointer;\" (click)=\"logOut()\">Logout</a></li>\n                                \n                             </ul>\n                          </div>\n                      </nav>\n                      <!-- Main Menu End-->\n                      \n                  </div>\n                  <!--Nav Outer End-->\n                  \n            </div>\n              \n          </div>\n      </div>\n      <!--End Sticky Header-->\n      \n  </header>\n  <!--End Main Header -->\n\n  <section class=\"user-page-title\" style=\"background-image:url(../../assets/images/background/pattern-4.png);\">\n    <div class=\"auto-container\">\n        <h1></h1>\n    </div>\n    <!--Page Info-->\n    <div class=\"page-info\">\n        <div class=\"auto-container\">\n          <div class=\"inner-container\">\n                <ul class=\"bread-crumb\">\n                    <!-- <li><a href=\"index.html\"></a></li>\n                    <li></li> -->\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!--End Page Info-->\n  </section>\n\n    <router-outlet></router-outlet>\n  \n  <!--Main Footer-->\n  <footer class=\"main-footer\" class=\"footer\">\n  \n      <div class=\"copyright\">Copyright &copy; 2019 The <a >America's Marketing & Media Solutions LLC</a>. All rights reserved.</div>\n  </footer>\n  <!--Main Footer-->\n\n</div>\n<!--End pagewrapper-->\n\n<!--Scroll to top-->\n<div class=\"scroll-to-top scroll-to-target\" data-target=\"html\"><span class=\"icon fa fa-angle-double-up\"></span></div>\n"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_data_access_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data-access.service */ "./src/app/services/data-access.service.ts");








var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent(api, customer, location, router, formBuilder, dataAccess) {
        this.api = api;
        this.customer = customer;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dataAccess = dataAccess;
        this.isAdmin = false;
        //alert("cons")
        //   if(localStorage.getItem("TOKEN")!=null){
        // location.onPopState(() => {
        //   this.router.navigateByUrl('/dashboard/userlist');
        //   history.forward();
        //   });
        // }else{
        //   this.router.navigateByUrl('/home');
        // }
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //alert("oninit")
        this.dataAccess.currentMessage.subscribe(function (message) { return _this.message = message; });
        //this.loginModel =JSON.parse(this.message);
        this.loginModel = JSON.parse(localStorage.getItem("userinfo"));
        console.log(this.loginModel);
        if (this.loginModel.Status == 1 && this.loginModel.IsActive) {
            this.isAdmin = true;
        }
        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
    };
    DashboardPageComponent.prototype.redirectTo = function (type) {
        localStorage.setItem("isfromuser", 'true');
        if (type == 1)
            window.open("https://www.invokana-claim.com/", "_blank");
        else if (type == 2)
            window.open("https://www.xarelto-claims.com/", "_blank");
        else if (type == 3)
            window.open("https://www.ivc-claims.com/", "_blank");
    };
    DashboardPageComponent.prototype.logOut = function () {
        //localStorage.setItem("TOKEN",null);
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("userinfo");
        this.router.navigateByUrl('/');
    };
    DashboardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-page',
            template: __webpack_require__(/*! ./dashboard-page.component.html */ "./src/app/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-page.component.css */ "./src/app/dashboard-page/dashboard-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_data_access_service__WEBPACK_IMPORTED_MODULE_7__["DataAccessService"]])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/dashboard-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-page/dashboard-page.module.ts ***!
  \*********************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-page.component */ "./src/app/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _userregistration_userregistration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userregistration/userregistration.component */ "./src/app/dashboard-page/userregistration/userregistration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/dashboard-page/userlist/userlist.component.ts");
/* harmony import */ var _invokanaclaims_invokanaclaims_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./invokanaclaims/invokanaclaims.component */ "./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard-page/dashboard/dashboard.component.ts");
/* harmony import */ var _xareltoclaims_xareltoclaims_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./xareltoclaims/xareltoclaims.component */ "./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.ts");
/* harmony import */ var _ivcclaims_ivcclaims_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ivcclaims/ivcclaims.component */ "./src/app/dashboard-page/ivcclaims/ivcclaims.component.ts");














var routes = [
    {
        path: 'dashboard',
        component: _dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__["DashboardPageComponent"],
        children: [
            {
                path: 'userregistration',
                component: _userregistration_userregistration_component__WEBPACK_IMPORTED_MODULE_6__["UserregistrationComponent"]
            },
            {
                path: 'userlist',
                component: _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_9__["UserlistComponent"]
            },
            {
                path: 'invokanaclaims',
                component: _invokanaclaims_invokanaclaims_component__WEBPACK_IMPORTED_MODULE_10__["InvokanaclaimsComponent"]
            },
            {
                path: 'xareltoclaims',
                component: _xareltoclaims_xareltoclaims_component__WEBPACK_IMPORTED_MODULE_12__["XareltoclaimsComponent"]
            },
            {
                path: 'ivcclaims',
                component: _ivcclaims_ivcclaims_component__WEBPACK_IMPORTED_MODULE_13__["IvcclaimsComponent"]
            },
            {
                path: 'home',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
            }
        ]
    },
];
var externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('externalUrlRedirectResolver');
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule(location, router) {
        var _this = this;
        this.router = router;
        location.onPopState(function () {
            console.log("pressed back in add!!!!!");
            _this.router.navigateByUrl('/dashboard');
            //history.forward();
        });
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { useHash: true }), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({ maxOpened: 1, preventDuplicates: true }),
            ],
            declarations: [_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__["DashboardPageComponent"], _userregistration_userregistration_component__WEBPACK_IMPORTED_MODULE_6__["UserregistrationComponent"], _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_9__["UserlistComponent"], _invokanaclaims_invokanaclaims_component__WEBPACK_IMPORTED_MODULE_10__["InvokanaclaimsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _xareltoclaims_xareltoclaims_component__WEBPACK_IMPORTED_MODULE_12__["XareltoclaimsComponent"], _ivcclaims_ivcclaims_component__WEBPACK_IMPORTED_MODULE_13__["IvcclaimsComponent"]],
            exports: [
                _dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__["DashboardPageComponent"],
            ],
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_5__["NeedAuthGuard"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] },
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PlatformLocation"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard-page/dashboard/dashboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard/dashboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1wYWdlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard/dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard/dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br><br>\n<div class=\"container\">\n  <h3 style=\"text-align:center;\">Dashboard is under progress</h3>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-page/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard-page/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard-page/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1wYWdlL2ludm9rYW5hY2xhaW1zL2ludm9rYW5hY2xhaW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n\n    <div class=\"col-md-12\">\n      <h4>Invokana Claims</h4>\n      <div class=\"table-responsive\">\n        <table id=\"mytable\" class=\"table table-bordred table-striped\">\n\n          <thead>\n\n            <!-- <th><input type=\"checkbox\" id=\"checkall\" /></th> -->\n            <th>Name</th>\n            <th>Email</th>\n            <th>Contact</th>\n            <th>DOB</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>State</th>\n            <th>Zip</th>\n            <th>Besttimetocontact</th>\n\n            <!-- <th>Edit</th>\n\n            <th>Delete</th> -->\n          </thead>\n          <tbody>\n            <tr *ngIf=\"IsNoDataExist\"> <td colspan=\"9\" style=\"text-align:center;\">No Records Found</td></tr>\n            <tr *ngFor=\"let user of userlist\">\n              <!-- <td><input type=\"checkbox\" class=\"checkthis\" /></td> -->\n              <td>{{user.FullName}}</td>\n              <td>{{user.Email}}</td>\n              <td>{{user.PhoneNo}}</td>\n              <td>{{user.HowOld}}</td>\n              <td>{{user.Address}}</td>\n              <td>{{user.City}}</td>\n              <td>{{user.State}}</td>\n              <td>{{user.Zip}}</td>\n              <td>{{user.Besttimetocontact}}</td>\n              <!-- <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\"\n                    data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\"><span\n                      class=\"glyphicon glyphicon-pencil\"></span></button></p>\n              </td>\n              <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\"\n                    data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\"><span\n                      class=\"glyphicon glyphicon-trash\"></span></button></p>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.ts ***!
  \***************************************************************************/
/*! exports provided: InvokanaclaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvokanaclaimsComponent", function() { return InvokanaclaimsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");



var InvokanaclaimsComponent = /** @class */ (function () {
    function InvokanaclaimsComponent(api) {
        this.api = api;
        this.userlist = Array();
        this.IsNoDataExist = false;
    }
    InvokanaclaimsComponent.prototype.ngOnInit = function () {
        this.userlist = [];
        this.getUserData();
    };
    InvokanaclaimsComponent.prototype.getUserData = function () {
        var _this = this;
        // stop here if form is invalid
        this.api.getInvokanaClaims()
            .subscribe(function (result) {
            //this.userlist=result as Array<Object>;
            if (_this.userlist.length <= 0) {
                _this.IsNoDataExist = true;
            }
        });
    };
    InvokanaclaimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invokanaclaims',
            template: __webpack_require__(/*! ./invokanaclaims.component.html */ "./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.html"),
            styles: [__webpack_require__(/*! ./invokanaclaims.component.css */ "./src/app/dashboard-page/invokanaclaims/invokanaclaims.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], InvokanaclaimsComponent);
    return InvokanaclaimsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/ivcclaims/ivcclaims.component.css":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-page/ivcclaims/ivcclaims.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1wYWdlL2l2Y2NsYWltcy9pdmNjbGFpbXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard-page/ivcclaims/ivcclaims.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-page/ivcclaims/ivcclaims.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n\n    <div class=\"col-md-12\">\n      <h4>Ivc Claims</h4>\n      <div class=\"table-responsive\">\n        <table id=\"mytable\" class=\"table table-bordred table-striped\">\n\n          <thead>\n\n            <!-- <th><input type=\"checkbox\" id=\"checkall\" /></th> -->\n            <th>Name</th>\n            <th>Email</th>\n            <th>Contact</th>\n            <th>DOB</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>State</th>\n            <th>Zip</th>\n            <th>Besttimetocontact</th>\n\n            <!-- <th>Edit</th>\n\n            <th>Delete</th> -->\n          </thead>\n          <tbody>\n            <tr *ngIf=\"IsNoDataExist\"> <td colspan=\"9\" style=\"text-align:center;\">No Records Found</td></tr>\n            <tr *ngFor=\"let user of userlist\">\n              <!-- <td><input type=\"checkbox\" class=\"checkthis\" /></td> -->\n              <td>{{user.FullName}}</td>\n              <td>{{user.Email}}</td>\n              <td>{{user.PhoneNo}}</td>\n              <td>{{user.HowOld}}</td>\n              <td>{{user.Address}}</td>\n              <td>{{user.City}}</td>\n              <td>{{user.State}}</td>\n              <td>{{user.Zip}}</td>\n              <td>{{user.Besttimetocontact}}</td>\n              <!-- <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\"\n                    data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\"><span\n                      class=\"glyphicon glyphicon-pencil\"></span></button></p>\n              </td>\n              <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\"\n                    data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\"><span\n                      class=\"glyphicon glyphicon-trash\"></span></button></p>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-page/ivcclaims/ivcclaims.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-page/ivcclaims/ivcclaims.component.ts ***!
  \*****************************************************************/
/*! exports provided: IvcclaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IvcclaimsComponent", function() { return IvcclaimsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");



var IvcclaimsComponent = /** @class */ (function () {
    function IvcclaimsComponent(api) {
        this.api = api;
        this.userlist = Array();
        this.IsNoDataExist = false;
    }
    IvcclaimsComponent.prototype.ngOnInit = function () {
        this.userlist = [];
        this.getUserData();
    };
    IvcclaimsComponent.prototype.getUserData = function () {
        var _this = this;
        // stop here if form is invalid
        this.api.getInvokanaClaims()
            .subscribe(function (result) {
            //this.userlist=result as Array<Object>;
            if (_this.userlist.length <= 0) {
                _this.IsNoDataExist = true;
            }
        });
    };
    IvcclaimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ivcclaims',
            template: __webpack_require__(/*! ./ivcclaims.component.html */ "./src/app/dashboard-page/ivcclaims/ivcclaims.component.html"),
            styles: [__webpack_require__(/*! ./ivcclaims.component.css */ "./src/app/dashboard-page/ivcclaims/ivcclaims.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], IvcclaimsComponent);
    return IvcclaimsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/userlist/userlist.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-page/userlist/userlist.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1wYWdlL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-page/userlist/userlist.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-page/userlist/userlist.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n\n    <div class=\"col-md-12\">\n      <h4>User List</h4>\n      <div class=\"table-responsive\">\n        <table id=\"mytable\" class=\"table table-bordred table-striped\">\n\n          <thead>\n\n            <!-- <th><input type=\"checkbox\" id=\"checkall\" /></th> -->\n            <th>Name</th>\n            <th>Email</th>\n            <th>Contact</th>\n            <!-- <th>Edit</th>\n\n            <th>Delete</th> -->\n          </thead>\n          <tbody>\n            <tr *ngIf=\"IsNoDataExist\"> <td colspan=\"3\" style=\"text-align:center;\">No Records Found</td></tr>\n            <tr *ngFor=\"let user of userlist\">\n              <!-- <td><input type=\"checkbox\" class=\"checkthis\" /></td> -->\n              <td>{{user.Name}}</td>\n              <td>{{user.EmailId}}</td>\n              <td>{{user.MobileNo}}</td>\n              <!-- <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\"\n                    data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\"><span\n                      class=\"glyphicon glyphicon-pencil\"></span></button></p>\n              </td>\n              <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\"\n                    data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\"><span\n                      class=\"glyphicon glyphicon-trash\"></span></button></p>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-page/userlist/userlist.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-page/userlist/userlist.component.ts ***!
  \***************************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");



var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(api) {
        this.api = api;
        this.userlist = Array();
        this.IsNoDataExist = false;
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.userlist = [];
        this.getUserData();
    };
    UserlistComponent.prototype.getUserData = function () {
        var _this = this;
        // stop here if form is invalid
        this.api.getUserData()
            .subscribe(function (result) {
            _this.userlist = result;
            if (_this.userlist.length <= 0) {
                _this.IsNoDataExist = true;
            }
        });
    };
    UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/dashboard-page/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/dashboard-page/userlist/userlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/userregistration/userregistration.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard-page/userregistration/userregistration.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n    margin-top: 3%;\r\n    padding: 3%;\r\n}\r\n.register-left{\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: 4%;\r\n}\r\n.register-left input{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    width: 60%;\r\n    background: #f8f9fa;\r\n    font-weight: bold;\r\n    color: #383d41;\r\n    margin-top: 30%;\r\n    margin-bottom: 3%;\r\n    cursor: pointer;\r\n}\r\n.register-right{\r\n    background: #f8f9fa;\r\n    border-top-left-radius: 10% 50%;\r\n    border-bottom-left-radius: 10% 50%;\r\n}\r\n.register-left img{\r\n    margin-top: 15%;\r\n    margin-bottom: 5%;\r\n    width: 25%;\r\n    -webkit-animation: mover 2s infinite  alternate;\r\n    animation: mover 1s infinite  alternate;\r\n}\r\n@-webkit-keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n@keyframes mover {\r\n    0% { -webkit-transform: translateY(0); transform: translateY(0); }\r\n    100% { -webkit-transform: translateY(-20px); transform: translateY(-20px); }\r\n}\r\n.register-left p{\r\n    font-weight: lighter;\r\n    padding: 12%;\r\n    margin-top: -9%;\r\n}\r\n.register .register-form{\r\n    padding: 10%;\r\n    margin-top: 10%;\r\n}\r\n.btnRegister{\r\n    float: right;\r\n    margin-top: 10%;\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    background: #0062cc;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    width: 50%;\r\n    cursor: pointer;\r\n}\r\n.register .nav-tabs{\r\n    margin-top: 3%;\r\n    border: none;\r\n    background: #0062cc;\r\n    border-radius: 1.5rem;\r\n    width: 28%;\r\n    float: right;\r\n}\r\n.register .nav-tabs .nav-link{\r\n    padding: 2%;\r\n    height: 34px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-top-right-radius: 1.5rem;\r\n    border-bottom-right-radius: 1.5rem;\r\n}\r\n.register .nav-tabs .nav-link:hover{\r\n    border: none;\r\n}\r\n.register .nav-tabs .nav-link.active{\r\n    width: 100px;\r\n    color: #0062cc;\r\n    border: 2px solid #0062cc;\r\n    border-top-left-radius: 1.5rem;\r\n    border-bottom-left-radius: 1.5rem;\r\n}\r\n.register-heading{\r\n    text-align: center;\r\n    margin-top: 8%;\r\n    margin-bottom: -15%;\r\n    color: #495057;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLXBhZ2UvdXNlcnJlZ2lzdHJhdGlvbi91c2VycmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyREFBMkQ7SUFDM0QsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsK0NBQStDO0lBQy9DLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksS0FBSyxnQ0FBd0IsRUFBeEIsd0JBQXdCLEVBQUU7SUFDL0IsT0FBTyxvQ0FBNEIsRUFBNUIsNEJBQTRCLEVBQUU7QUFDekM7QUFDQTtJQUNJLEtBQUssZ0NBQXdCLEVBQXhCLHdCQUF3QixFQUFFO0lBQy9CLE9BQU8sb0NBQTRCLEVBQTVCLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkLXBhZ2UvdXNlcnJlZ2lzdHJhdGlvbi91c2VycmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbi5yZWdpc3Rlci1sZWZ0IGlucHV0e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzODNkNDE7XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmVnaXN0ZXItcmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAlIDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbiAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZXIge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcGFkZGluZzogMTIlO1xyXG4gICAgbWFyZ2luLXRvcDogLTklO1xyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4uYnRuUmVnaXN0ZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDYyY2M7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZWdpc3RlciAubmF2LXRhYnN7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDYyY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5re1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcclxufVxyXG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDYyY2M7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW07XHJcbn1cclxuLnJlZ2lzdGVyLWhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard-page/userregistration/userregistration.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard-page/userregistration/userregistration.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container register\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 register-left\">\n                        <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\"/>\n                        <h3>Welcome</h3>\n                        <p>User Registration!</p>\n                        <input type=\"submit\" name=\"\" value=\"Smile !\"/><br/>\n                    </div>\n                    <div class=\"col-md-9 register-right\">\n\n                        <form class=\"form-signin\" [formGroup]=\"register\" (ngSubmit)=\"registerUser()\">\n                        <div class=\"row register-form\">\n                            <!-- <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"Name\" placeholder=\"First Name *\" value=\"\" />\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"Name\" placeholder=\"EmailId\" value=\"\" />\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control\" formControlName=\"Name\" placeholder=\"Password *\" value=\"\" />\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control\"  formControlName=\"Name\" placeholder=\"Confirm Password *\" value=\"\" />\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"maxl\">\n                                        <label class=\"radio inline\"> \n                                            <input type=\"radio\" name=\"gender\" value=\"male\" checked>\n                                            <span> Male </span> \n                                        </label>\n                                        <label class=\"radio inline\"> \n                                            <input type=\"radio\" name=\"gender\" value=\"female\">\n                                            <span>Female </span> \n                                        </label>\n                                    </div>\n                                </div>\n                            </div> -->\n                            <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"Name\" placeholder=\"First Name *\" value=\"\" />\n                                        </div>\n                                <div class=\"form-group\">\n                                    <input type=\"email\" class=\"form-control\" formControlName=\"EmailId\" placeholder=\"Your Email *\" value=\"\" />\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" minlength=\"10\" maxlength=\"10\" formControlName=\"MobileNo\" name=\"txtEmpPhone\" class=\"form-control\" placeholder=\"Your Phone *\" value=\"\" />\n                                </div>\n                                <input type=\"submit\" class=\"btnRegister\"  value=\"Register\"/>\n                            </div>\n                        </div>\n</form>\n\n                        <!-- <ul class=\"nav nav-tabs nav-justified\" id=\"myTab\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Employee</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Hirer</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <h3 class=\"register-heading\">Apply as a Employee</h3>\n                               \n                            </div>\n                            <div class=\"tab-pane fade show\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                <h3  class=\"register-heading\">Apply as a Hirer</h3>\n                                <div class=\"row register-form\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Email *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" maxlength=\"10\" minlength=\"10\" class=\"form-control\" placeholder=\"Phone *\" value=\"\" />\n                                        </div>\n\n\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Password *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password *\" value=\"\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <select class=\"form-control\">\n                                                <option class=\"hidden\"  selected disabled>Please select your Sequrity Question</option>\n                                                <option>What is your Birthdate?</option>\n                                                <option>What is Your old Phone Number</option>\n                                                <option>What is your Pet Name?</option>\n                                            </select>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"`Answer *\" value=\"\" />\n                                        </div>\n                                        <input type=\"submit\" class=\"btnRegister\"  value=\"Register\"/>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                    </div>\n                </div>\n\n            </div>"

/***/ }),

/***/ "./src/app/dashboard-page/userregistration/userregistration.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard-page/userregistration/userregistration.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserregistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserregistrationComponent", function() { return UserregistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var UserregistrationComponent = /** @class */ (function () {
    function UserregistrationComponent(api, location, router, formBuilder, toastr) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.submitted = false;
        if (localStorage.getItem("TOKEN") != null) {
            location.onPopState(function () {
                _this.router.navigateByUrl('/dashboard');
                history.forward();
            });
        }
        else {
            this.router.navigateByUrl('/');
        }
    }
    UserregistrationComponent.prototype.ngOnInit = function () {
        this.register = this.formBuilder.group({
            Id: ['',],
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            EmailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            MobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Status: ['',],
            IsActive: ['',],
            UserName: ['',]
        });
    };
    Object.defineProperty(UserregistrationComponent.prototype, "f", {
        get: function () { return this.register.controls; },
        enumerable: true,
        configurable: true
    });
    UserregistrationComponent.prototype.registerUser = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.register.invalid) {
            this.toastr.warning('Warning!...', 'Please enter valid Data');
            return;
        }
        this.api.register(this.register.value)
            .subscribe(function (result) {
            _this.response = result;
            if (_this.response) {
                _this.toastr.success('Success!....', 'User Registration Successfully');
            }
            else {
                _this.toastr.error('Oops!....', 'Sory Something went Wrong, please try later');
            }
        });
    };
    UserregistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userregistration',
            template: __webpack_require__(/*! ./userregistration.component.html */ "./src/app/dashboard-page/userregistration/userregistration.component.html"),
            styles: [__webpack_require__(/*! ./userregistration.component.css */ "./src/app/dashboard-page/userregistration/userregistration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], UserregistrationComponent);
    return UserregistrationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1wYWdlL3hhcmVsdG9jbGFpbXMveGFyZWx0b2NsYWltcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n\n    <div class=\"col-md-12\">\n      <h4>Xarelto Claims</h4>\n      <div class=\"table-responsive\">\n        <table id=\"mytable\" class=\"table table-bordred table-striped\">\n\n          <thead>\n\n            <!-- <th><input type=\"checkbox\" id=\"checkall\" /></th> -->\n            <th>Name</th>\n            <th>Email</th>\n            <th>Contact</th>\n            <th>DOB</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>State</th>\n            <th>Zip</th>\n            <th>Besttimetocontact</th>\n\n            <!-- <th>Edit</th>\n\n            <th>Delete</th> -->\n          </thead>\n          <tbody>\n            <tr *ngIf=\"IsNoDataExist\"> <td colspan=\"9\" style=\"text-align:center;\">No Records Found</td></tr>\n            <tr *ngFor=\"let user of userlist\">\n              <!-- <td><input type=\"checkbox\" class=\"checkthis\" /></td> -->\n              <td>{{user.FullName}}</td>\n              <td>{{user.Email}}</td>\n              <td>{{user.PhoneNo}}</td>\n              <td>{{user.HowOld}}</td>\n              <td>{{user.Address}}</td>\n              <td>{{user.City}}</td>\n              <td>{{user.State}}</td>\n              <td>{{user.Zip}}</td>\n              <td>{{user.Besttimetocontact}}</td>\n              <!-- <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\"><button class=\"btn btn-primary btn-xs\"\n                    data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\"><span\n                      class=\"glyphicon glyphicon-pencil\"></span></button></p>\n              </td>\n              <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\"><button class=\"btn btn-danger btn-xs\"\n                    data-title=\"Delete\" data-toggle=\"modal\" data-target=\"#delete\"><span\n                      class=\"glyphicon glyphicon-trash\"></span></button></p>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.ts ***!
  \*************************************************************************/
/*! exports provided: XareltoclaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XareltoclaimsComponent", function() { return XareltoclaimsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");



var XareltoclaimsComponent = /** @class */ (function () {
    function XareltoclaimsComponent(api) {
        this.api = api;
        this.userlist = Array();
        this.IsNoDataExist = false;
    }
    XareltoclaimsComponent.prototype.ngOnInit = function () {
        this.userlist = [];
        this.getUserData();
    };
    XareltoclaimsComponent.prototype.getUserData = function () {
        var _this = this;
        // stop here if form is invalid
        this.api.getInvokanaClaims()
            .subscribe(function (result) {
            //this.userlist=result as Array<Object>;
            if (_this.userlist.length <= 0) {
                _this.IsNoDataExist = true;
            }
        });
    };
    XareltoclaimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xareltoclaims',
            template: __webpack_require__(/*! ./xareltoclaims.component.html */ "./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.html"),
            styles: [__webpack_require__(/*! ./xareltoclaims.component.css */ "./src/app/dashboard-page/xareltoclaims/xareltoclaims.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], XareltoclaimsComponent);
    return XareltoclaimsComponent;
}());



/***/ }),

/***/ "./src/app/login-page/aboutcompany/aboutcompany.component.css":
/*!********************************************************************!*\
  !*** ./src/app/login-page/aboutcompany/aboutcompany.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvYWJvdXRjb21wYW55L2Fib3V0Y29tcGFueS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login-page/aboutcompany/aboutcompany.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/login-page/aboutcompany/aboutcompany.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"page-title\" style=\"background-image:url(../../assets/images/background/pattern-4.png);\">\n  <div class=\"auto-container\">\n      <h1>Company</h1>\n  </div>\n  <div class=\"page-info\">\n      <div class=\"auto-container\">\n        <div class=\"inner-container\">\n              <ul class=\"bread-crumb\">\n                  <li><a>Home</a></li>\n                  <li>Company</li>\n              </ul>\n          </div>\n      </div>\n  </div>\n</section> -->\n\n<div class=\"container\">\n    <div class=\"row text-center\" id=\"heading\">\n      <div class=\"col-md-6 col-md-offset-3 wow animated zoomInDown\" id=\"heading-text\">\n        <h3>About Us</h3>\n                <!-- <p>Passionate Marketing Experts</p> -->\n                <hr class=\"full\">\n                <br/>\n      </div>\n    </div>\t<!-- row -->\n    <!-- <div class=\"row about-us-text\">\n      <div class=\"col-md-12 col-md-offset-2\"> -->\n          <div class=\"row about-us-text\">\n              <div class=\"col-md-12\">\n        <p >America's Marketing & Media Solutions LLC is a US based Contact Center provide Sales, lead generation & customer care services to our clients. We realize that single-channel cannot provide you with desired results. To ensure consistent quality and complete coverage, we utilize multi-channel approach. Firstly, our time tested methodologies help us in building programs for you that focus on various channels – web, email, phone, syndication and blogs. From the data source to the data delivery, everything matters to provide the best lead generation. We carefully select our sources and evaluate them on quality and performance perspective. We apply advanced techniques to get the best real data and the best target and deliver it in the format our clients want. We continuously invest in technology to apply the best filters that ensure that we deliver a real user with consolidated data.</p>\n        <br>\n        <!-- <p >TWO IMAGES FOR DATA SHOWS GENERATED VIA SWEEPSTAKES (HAVE TO REMOVE IT FROM BOTH THE PICTURES).</p> -->\n      <br>\n      <p >Undoubtedly telemarketing can still play an important part in your customer communication and marketing strategy, but only if it’s undertaken in the correct manner. In recent years the industry has suffered and gained a somewhat bad reputation from unscrupulous operators both on-shore and off-shore whose philosophy has been to chuck enough mud at the wall and hope that some of it will stick?</p>\n      </div>\n    </div>\t<!-- row -->\n<br>\n    <div class=\"row text-center\" id=\"heading\">\n        <div class=\"col-md-6 col-md-offset-3 wow animated zoomInDown\" id=\"heading-text\">\n                  <h4>A WINNING STRATEGY</h4>\n                  <hr class=\"full\">\n                  <br/>\n        </div>\n      </div>\t<!-- row -->\n      <!-- <div class=\"row about-us-text\">\n        <div class=\"col-md-10 col-md-offset-2\"> -->\n            <div class=\"row about-us-text\">\n                <div class=\"col-md-12\">\n          <p >So what are the key steps that can be put in place to help ensure your campaign is undertaken as professionally as possible and delivers a strong return on investment?\n          </p>\n        </div>\n      </div>\t<!-- row -->\n      <br>\n      <!-- <div class=\"row about-us-text\">\n        <div class=\"col-md-10 col-md-offset-2\"> -->\n            <div class=\"row about-us-text\">\n                <div class=\"col-md-12\">\n          <p><b>* </b> Accurate prospecting and quality of data is critical to the success or otherwise of any customer communication strategy. A hit and hope strategy will not and does not work.</p>\n        </div>\n      </div>\t<!-- row -->\n      <div class=\"row about-us-text\">\n          <div class=\"col-md-12\">\n          <p><b>* </b> Remember that warm prospecting will always deliver greater returns than pure cold calling, so if you have an existing database of clients then this is always a good place to start. Conversion rates are always much higher when there is an existing relationship or affinity partnership in place.</p>\n        </div>\n      </div>\t<!-- row -->\n      <div class=\"row about-us-text\">\n          <div class=\"col-md-12\">\n          <p><b>* </b> Ensure your product or service is well targeted to the consumer profile. There is absolutely no point in contacting people who are likely to have little requirement or need for your products or services.</p>\n        </div>\n      </div>\t<!-- row -->\n      <div class=\"row about-us-text\">\n          <div class=\"col-md-12\">\n          <p><b>* </b> Allocate suitable time in preparing your approach and communication strategy. Who are you targeting, why are you targeting them, and what are the key unique selling points that will help hook the customer?\n          </p>\n        </div>\n      </div>\t<!-- row -->\n      <div class=\"row about-us-text\">\n          <div class=\"col-md-12\">\n          <p><b>* </b> Make sure your team are well trained. Remember good telemarketers listen more than they speak, never talk over the customer and should display a high level of professionalism at all times.</p>\n        </div>\n      </div>\t<!-- row -->\n      <div class=\"row about-us-text\">\n          <div class=\"col-md-12\">\n          <p><b>* </b>Performance manage your team. This is one of the most important aspects, because outbound agents can be notoriously difficult to manage and motivate, especially if they are to stay focused and achieve results.\n          </p>\n        </div>\n      </div>\t<!-- row -->\n      <br>\n      <div class=\"row text-center\" id=\"heading\">\n        <div class=\"col-md-6 col-md-offset-3 wow animated zoomInDown\" id=\"heading-text\">\n                  <p>BENEFITS OF America's Marketing & Media Solutions LLC</p>\n                  <hr class=\"full\">\n                  <br/>\n        </div>\n      </div>\t<!-- row -->\n      <!-- <div class=\"row about-us-text\">\n        <div class=\"col-md-10 col-md-offset-2\"> -->\n            <div class=\"row about-us-text\">\n                <div class=\"col-md-12\">\n          <p >Outsource your telemarketing campaign to America's Marketing & Media Solutions LLC and we can take away the hassle of managing this process yourselves and you can be assured that all of the points we mention above and much much more behind the scenes is practised and not just preached. We really do understand the intricacies of successful  telemarketing because our Directors have numerous years of experience in producing successful results. We have the people, technology, and expertise that can help produce outstanding results on your behalf.          </p>\n        </div>\n      </div>\t<!-- row -->\n      <br>\n      <br>\n      <br>\n     \n\n      <div class=\"row text-center\" id=\"heading\">\n        <div class=\"col-md-6 col-md-offset-3 wow animated zoomInDown\" id=\"heading-text\">\n                  <h4>WHY America's Marketing & Media Solutions LLC CLOUD SOLUTIONS?</h4>\n                  <hr class=\"full\">\n                  <br/>\n        </div>\n      </div>\t<!-- row -->\n      <div class=\"row about-us-text\">\n          <div class=\"col-md-12\">\n          <p><b>WHY America's Marketing & Media Solutions LLC?</b></p>\n          <p >America's Marketing & Media Solutions LLC is a lead generation through content syndication service. America's Marketing & Media Solutions LLC takes your compelling content and syndicates it to sites within our network which match your target market.</p>\n        <p>As people request your content, America's Marketing & Media Solutions LLC filters out unwanted prospects by establishing filters so that you only receive (and pay for) leads which fit your target market.\n          </p>\n          <p><b>MULTI-CHANNEL</b></p>\n          <p >America's Marketing & Media Solutions LLCsyndicates branded content and distributes it through the network via email, blogs, social media, and mobile. You reach the best prospects.</p>\n        <br>\n          <p>PUBLISHER SITES , MOBILE , SOCIAL MEDIA GROUPS, BLOGS , EMAIL NEWSLETTERS , RSS(CONVERTED TO EMAIL)</p>\n          <p  >ACQUIRES TRAFFIC FROM </p>\n          <p  >  MULTIPLE ONLINE CHANNELS </p>\n              \n        </div>\n      </div>\t<!-- row -->\n      <br>\n     \n    \n\n  \n  </div>\t"

/***/ }),

/***/ "./src/app/login-page/aboutcompany/aboutcompany.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/login-page/aboutcompany/aboutcompany.component.ts ***!
  \*******************************************************************/
/*! exports provided: AboutcompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutcompanyComponent", function() { return AboutcompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-page.component */ "./src/app/login-page/login-page.component.ts");



var AboutcompanyComponent = /** @class */ (function () {
    function AboutcompanyComponent() {
    }
    AboutcompanyComponent.prototype.ngOnInit = function () {
        _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"].moduleName = "Company";
        _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"].isServiceStyle = true;
    };
    AboutcompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutcompany',
            template: __webpack_require__(/*! ./aboutcompany.component.html */ "./src/app/login-page/aboutcompany/aboutcompany.component.html"),
            styles: [__webpack_require__(/*! ./aboutcompany.component.css */ "./src/app/login-page/aboutcompany/aboutcompany.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutcompanyComponent);
    return AboutcompanyComponent;
}());



/***/ }),

/***/ "./src/app/login-page/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/login-page/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".captalize{\r\n    text-transform:uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FwdGFsaXple1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login-page/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login-page/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!--Main Slider-->\n\n<!--End Main Slider-->\n\n<!--Featured Section-->\n<section class=\"featured-section\">\n  <div class=\"auto-container\">\n      <div class=\"inner-container clearfix\">\n          \n            <!--Featured Block-->\n            <div class=\"featured-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"upper-box\">\n                      <div class=\"text\">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was  complete account system. </div>\n                        <a class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                    </div>\n                    <div class=\"lower-box\">\n                      <div class=\"lower-inner\">\n                            <div class=\"icon-box\">\n                                <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-1.png\" alt=\"\" /></span>\n                            </div>\n                            <h3><a>Advanced SEO Consultant</a></h3>\n                            <div class=\"title\">Big Business, Big Needs</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--Featured Block-->\n            <div class=\"featured-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"upper-box\">\n                      <div class=\"text\">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was  complete account system. </div>\n                        <a class=\"read-more\" ><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                    </div>\n                    <div class=\"lower-box\">\n                      <div class=\"lower-inner\">\n                            <div class=\"icon-box\">\n                                <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-2.png\" alt=\"\" /></span>\n                            </div>\n                            <h3><a >Keyword & Market Research</a></h3>\n                            <div class=\"title\">Results... On a Budget.</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--Featured Block-->\n            <div class=\"featured-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"upper-box\">\n                      <div class=\"text\">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was  complete account system. </div>\n                        <a class=\"read-more\" ><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                    </div>\n                    <div class=\"lower-box\">\n                      <div class=\"lower-inner\">\n                            <div class=\"icon-box\">\n                                <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-3.png\" alt=\"\" /></span>\n                            </div>\n                            <h3><a >Link Building & Promotion</a></h3>\n                            <div class=\"title\">Sales, Sales, Sales.</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</section>\n<!--End Featured Section-->\n\n<!--Services Section-->\n<section class=\"services-section\">\n  <div class=\"auto-container\">\n      <!--Sec Title-->\n        <div class=\"sec-title centered\">\n          <h2>Our services</h2>\n            <div class=\"text\">We help you generate high-quality online sales leads by implementing highly structured, persuasive Internet marketing campaigns.</div>\n        </div>\n\n        <div class=\"inner-container\">\n            <div class=\"clearfix\">\n                 <!--Featured Block Two-->\n                 <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-9.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">Xarelto Lawsuits</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-9.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/XareltoLawsuits']\">Xarelto Lawsuits</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                   <!--Featured Block Two-->\n                   <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-8.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">Invokana Lawsuits</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-8.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/InvokanaLawsuits']\">Invokana Lawsuits</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                   <!--Featured Block Two-->\n                   <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-7.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">IVC Filter Lawsuits</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-7.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/IVCLawsuits']\">IVC Filter Lawsuits</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                 <!--Featured Block Two-->\n                 <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-6.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">LEAD GENERATION</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-6.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/LEADGENERATION']\">LEAD GENERATION</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                 <!--Featured Block Two-->\n                 <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-5.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">TELEMARKETING SERVICES</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-5.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/TELEMARKETING']\">TELEMARKETING SERVICES</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                 <!--Featured Block Two-->\n                 <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-4.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">B2B LEAD GENERATION</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-4.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/B2BLEADGENERATION']\">B2B LEAD GENERATION</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                 <!--Featured Block Two-->\n                 <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-9.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">CONTENT MARKETING</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-9.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/CONTENTMARKETING']\">CONTENT MARKETING</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                 <!--Featured Block Two-->\n                 <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-8.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">PIPELINE DEVELOPMENT</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-8.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/PIPELINEDEVELOPMENT']\">PIPELINE DEVELOPMENT</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                 <!--Featured Block Two-->\n                 <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-7.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">APPOINTMENT SETTING</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-7.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/APPOINTMENTSETTING']\">APPOINTMENT SETTING</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!--Featured Block Two-->\n                <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-6.png\" alt=\"\" /></span>\n                        </div>\n                        <h3 class=\"captalize\">PRECISE TARGETING</h3>\n                        <div class=\"text\"></div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-6.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a class=\"captalize\" [routerLink]=\"['/servicedetails/BETTERROI']\">PRECISE TARGETING</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                \n\n                \n\n                  <!--Featured Block Two-->\n                  <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                      <div class=\"inner-box\">\n                          <div class=\"icon-box\">\n                              <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-4.png\" alt=\"\" /></span>\n                          </div>\n                          <h3 class=\"captalize\">Mobile Specialty</h3>\n                          <div class=\"text\"></div>\n                          <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"overlay-icon-box\">\n                                    <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-4.png\" alt=\"\" /></span>\n                                  </div>\n                                  <h3><a class=\"captalize\">Mobile Specialty</a></h3>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  \n                  <!--Featured Block Two-->\n                  <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                      <div class=\"inner-box\">\n                          <div class=\"icon-box\">\n                              <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-5.png\" alt=\"\" /></span>\n                          </div>\n                          <h3 class=\"captalize\">Big Data Analysis</h3>\n                          <div class=\"text\"></div>\n                          <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"overlay-icon-box\">\n                                    <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-5.png\" alt=\"\" /></span>\n                                  </div>\n                                  <h3><a class=\"captalize\">Big Data Analysis</a></h3>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  \n                  <!--Featured Block Two-->\n                  <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                      <div class=\"inner-box\">\n                          <div class=\"icon-box\">\n                              <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-6.png\" alt=\"\" /></span>\n                          </div>\n                          <h3 class=\"captalize\">Best Keyword Ranking</h3>\n                          <div class=\"text\"></div>\n                          <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"overlay-icon-box\">\n                                    <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-6.png\" alt=\"\" /></span>\n                                  </div>\n                                  <h3><a class=\"captalize\">Best Keyword Ranking</a></h3>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  \n                  <!--Featured Block Two-->\n                  <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                      <div class=\"inner-box\">\n                          <div class=\"icon-box\">\n                              <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-7.png\" alt=\"\" /></span>\n                          </div>\n                          <h3 class=\"captalize\">Speed Optimization</h3>\n                          <div class=\"text\"></div>\n                          <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"overlay-icon-box\">\n                                    <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-7.png\" alt=\"\" /></span>\n                                  </div>\n                                  <h3><a class=\"captalize\">Speed Optimization</a></h3>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  \n                  <!--Featured Block Two-->\n                  <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                      <div class=\"inner-box\">\n                          <div class=\"icon-box\">\n                              <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-8.png\" alt=\"\" /></span>\n                          </div>\n                          <h3 class=\"captalize\">Better Conversion</h3>\n                          <div class=\"text\"></div>\n                          <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"overlay-icon-box\">\n                                    <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-8.png\" alt=\"\" /></span>\n                                  </div>\n                                  <h3><a class=\"captalize\">Better Conversion</a></h3>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  \n                  <!--Featured Block Two-->\n                  <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                      <div class=\"inner-box\">\n                          <div class=\"icon-box\">\n                              <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-9.png\" alt=\"\" /></span>\n                          </div>\n                          <h3 class=\"captalize\">Network Monitoring</h3>\n                          <div class=\"text\"></div>\n                          <div class=\"overlay-box\">\n                            <div class=\"overlay-inner\">\n                                <div class=\"overlay-icon-box\">\n                                    <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-9.png\" alt=\"\" /></span>\n                                  </div>\n                                  <h3><a class=\"captalize\">Network Monitoring</a></h3>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  \n              </div>\n          </div>\n        \n        <div class=\"three-item-carousel owl-carousel owl-theme\">\n          \n            <!--Services Block-->\n            <div class=\"services-block\">\n              <div class=\"inner-box\">\n                  <div class=\"icon-box\">\n                      <span class=\"icon\"><img src=\"../../assets/images/icons/services-1.png\" alt=\"\" /></span>\n                    </div>\n                    <h3><a >Search Engine Optimization</a></h3>\n                    <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                    <a  class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                </div>\n            </div>\n            \n            <!--Services Block-->\n            <div class=\"services-block\">\n              <div class=\"inner-box\">\n                  <div class=\"icon-box\">\n                      <span class=\"icon\"><img src=\"../../assets/images/icons/services-2.png\" alt=\"\" /></span>\n                    </div>\n                    <h3><a >Pay Per Click Management</a></h3>\n                    <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                    <a  class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                </div>\n            </div>\n            \n            <!--Services Block-->\n            <div class=\"services-block\">\n              <div class=\"inner-box\">\n                  <div class=\"icon-box\">\n                      <span class=\"icon\"><img src=\"../../assets/images/icons/services-3.png\" alt=\"\" /></span>\n                    </div>\n                    <h3><a >Display Advertising</a></h3>\n                    <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                    <a  class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                </div>\n            </div>\n            \n            <!--Services Block-->\n            <div class=\"services-block\">\n              <div class=\"inner-box\">\n                  <div class=\"icon-box\">\n                      <span class=\"icon\"><img src=\"../../assets/images/icons/services-1.png\" alt=\"\" /></span>\n                    </div>\n                    <h3><a>Search Engine Optimization</a></h3>\n                    <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                    <a class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                </div>\n            </div>\n            \n            <!--Services Block-->\n            <div class=\"services-block\">\n              <div class=\"inner-box\">\n                  <div class=\"icon-box\">\n                      <span class=\"icon\"><img src=\"../../assets/images/icons/services-2.png\" alt=\"\" /></span>\n                    </div>\n                    <h3><a >Pay Per Click Management</a></h3>\n                    <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                    <a  class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                </div>\n            </div>\n            \n            <!--Services Block-->\n            <div class=\"services-block\">\n              <div class=\"inner-box\">\n                  <div class=\"icon-box\">\n                      <span class=\"icon\"><img src=\"../../assets/images/icons/services-3.png\" alt=\"\" /></span>\n                    </div>\n                    <h3><a >Display Advertising</a></h3>\n                    <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                    <a  class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                </div>\n            </div>\n            \n        </div>\n        \n    </div>\n</section>\n<!--End Services Section-->\n\n<!--Score Section-->\n<!-- <section class=\"score-section\" style=\"background-image:url(../../assets/images/background/1.jpg)\">\n  <div class=\"auto-container\">\n        <div class=\"sec-title centered\">\n          <h2 style=\"color:white;\">Some Features</h2>\n        </div>\n        <div class=\"inner-container\">\n          <div class=\"clearfix\">\n            \n                <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-4.png\" alt=\"\" /></span>\n                        </div>\n                        <h3>Mobile Specialty</h3>\n                        <div class=\"text\">Far far away, behind the word moun tains, far from the countries.</div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-4.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a >Mobile Specialty</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-5.png\" alt=\"\" /></span>\n                        </div>\n                        <h3>Big Data Analysis</h3>\n                        <div class=\"text\">Far far away, behind the word moun tains, far from the countries.</div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-5.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a>Big Data Analysis</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-6.png\" alt=\"\" /></span>\n                        </div>\n                        <h3>Best Keyword Ranking</h3>\n                        <div class=\"text\">Far far away, behind the word moun tains, far from the countries.</div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-6.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a>Best Keyword Ranking</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-7.png\" alt=\"\" /></span>\n                        </div>\n                        <h3>Speed Optimization</h3>\n                        <div class=\"text\">Far far away, behind the word moun tains, far from the countries.</div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-7.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a>Speed Optimization</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-8.png\" alt=\"\" /></span>\n                        </div>\n                        <h3>Better Conversion</h3>\n                        <div class=\"text\">Far far away, behind the word moun tains, far from the countries.</div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-8.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a>Better Conversion</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"featured-block-two col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/images/icons/featured-icon-9.png\" alt=\"\" /></span>\n                        </div>\n                        <h3>Network Monitoring</h3>\n                        <div class=\"text\">Far far away, behind the word moun tains, far from the countries.</div>\n                        <div class=\"overlay-box\">\n                          <div class=\"overlay-inner\">\n                              <div class=\"overlay-icon-box\">\n                                  <span class=\"overlay-icon\"><img src=\"../../assets/images/icons/featured-icon-9.png\" alt=\"\" /></span>\n                                </div>\n                                <h3><a>Network Monitoring</a></h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</section> -->\n<!--End Score Section-->\n\n<!--Featured Section Two-->\n<section class=\"featured-section-two\" style=\"background-image:url(../../assets/images/background/pattern-2.png)\">\n  <div class=\"auto-container\">\n      <!--Sec Title-->\n        <!-- <div class=\"sec-title centered\">\n          <h2>Some Features</h2>\n        </div> -->\n        \n    </div>\n</section>\n<!--End Featured Section Two-->\n"

/***/ }),

/***/ "./src/app/login-page/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login-page/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-page.component */ "./src/app/login-page/login-page.component.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"].moduleName = "Home";
        _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"].isServiceStyle = false;
        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/login-page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/login-page/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .invalid-feedback {\r\n    display: block;\r\n    margin-top: .25rem;\r\n    font-size: 12px;\r\n    color: #dc3545;\r\n}\r\n\r\nlabel{\r\n    font-weight: 600;\r\n} */\r\n/* \r\n.container{\r\n    width: 1000px;\r\n} */\r\n/* .mandataryStar\r\n{\r\n    color:red;\r\n}\r\n\r\n.navbar-nav.navbar-center {\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translatex(-50%);\r\n}\r\n.about-us-text ul li{\r\n    display:inherit !important;\r\n}\r\n\r\nul.a {list-style-type: circle !important;}  */\r\n/*old css*/\r\n.invalid-feedback {\r\n    display: block;\r\n    margin-top: .25rem;\r\n    font-size: 12px;\r\n    color: #dc3545;\r\n}\r\nlabel{\r\n    font-weight: 600;\r\n}\r\n.mandataryStar\r\n{\r\n    color:red;\r\n}\r\n.navbar-nav.navbar-center {\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translatex(-50%);\r\n            transform: translatex(-50%);\r\n}\r\n.about-us-text ul li{\r\n    display:inherit !important;\r\n}\r\nul.a {list-style-type: circle !important;}\r\np{\r\n    text-align: justify;\r\n}\r\n/**Login css***/\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBQ0g7OztHQUdHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OzZDQWM2QztBQUU3QyxVQUFVO0FBR1Y7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxTQUFTO0FBQ2I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUEsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6QztJQUNJLG1CQUFtQjtBQUN2QjtBQUdBLGVBQWUiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSAqL1xyXG4vKiBcclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbn0gKi9cclxuLyogLm1hbmRhdGFyeVN0YXJcclxue1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdi5uYXZiYXItY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcclxufVxyXG4uYWJvdXQtdXMtdGV4dCB1bCBsaXtcclxuICAgIGRpc3BsYXk6aW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bC5hIHtsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZSAhaW1wb3J0YW50O30gICovXHJcblxyXG4vKm9sZCBjc3MqL1xyXG5cclxuXHJcbi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm1hbmRhdGFyeVN0YXJcclxue1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdi5uYXZiYXItY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtNTAlKTtcclxufVxyXG4uYWJvdXQtdXMtdGV4dCB1bCBsaXtcclxuICAgIGRpc3BsYXk6aW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bC5hIHtsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZSAhaW1wb3J0YW50O30gXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5cclxuLyoqTG9naW4gY3NzKioqL1xyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n \t\n  <!-- Preloader -->\n  <div class=\"preloader\"></div>\n \n  <!-- Main Header-->\n  <header class=\"main-header\" [ngClass]=\"isService?'header-style-five':'header-style-one'\">\n  \n    <!-- Header Top -->\n    <div class=\"header-top\">\n        <div class=\"auto-container\">\n            <div class=\"top-outer clearfix\">\n                  \n                  <!--Top Left-->\n                  <div class=\"top-left\">\n                    <ul class=\"links clearfix\">\n                        <!--Language-->\n                          <!-- <li class=\"language dropdown\"><a class=\"btn btn-default dropdown-toggle\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" ><span class=\"flag-img\"><img src=\"../../assets/images/icons/flag.jpg\" alt=\"\" /></span>English &nbsp;<span class=\"fa fa-angle-down\"></span></a>\n                              <ul class=\"dropdown-menu style-one\" aria-labelledby=\"dropdownMenu2\">\n                                  <li><a>English</a></li>\n                                  <li><a>German</a></li>\n                                  <li><a>Arabic</a></li>\n                                  <li><a>Hindi</a></li>\n                              </ul>\n                          </li> -->\n                        <!-- <li><a ><span class=\"icon fa fa-phone\"></span>Talk With Our Spacialist: <strong>+0 625-07520-6644</strong> </a></li>\n                          <li><a ><span class=\"icon\"></span>Contact Us</a></li> -->\n                      </ul>\n                  </div>\n                  \n                  <!--Top Right-->\n                  <div class=\"top-right clearfix\">\n                    <ul class=\"clearfix\">\n                          <li><a [routerLink]=\"['/login']\"><span class=\"icon flaticon-user\"></span>Login</a></li>\n                      </ul>                        \n                  </div>\n                  \n              </div>\n              \n          </div>\n      </div>\n    <div class=\"main-box\">\n        <div class=\"auto-container\">\n            <div class=\"outer-container clearfix\">\n                  <!--Logo Box-->\n                  <div class=\"logo-box\">\n                      <div class=\"logo\"><b><a style=\"text-transform: uppercase;\"><img src=\"../../assets/images/PHOTO-2019-03-19-01-54-50.png\" width=\"70\" height=\"50\" alt=\"\">America's Marketing & Media Solutions LLC</a></b></div>\n                  </div>\n                  \n                  <!--Nav Outer-->\n                  <div class=\"nav-outer clearfix\">\n                  \n                      <!-- Main Menu -->\n                      <nav class=\"main-menu\">\n                          <div class=\"navbar-header\">\n                              <!-- Toggle Button -->    \t\n                              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                                  <span class=\"icon-bar\"></span>\n                                  <span class=\"icon-bar\"></span>\n                                  <span class=\"icon-bar\"></span>\n                              </button>\n                          </div>\n                          \n                          <div class=\"navbar-collapse collapse clearfix\">\n                              <ul class=\"navigation clearfix\">\n                                  <li class=\"current dropdown\"><a [routerLink]=\"['/home']\">Home</a>\n                                    <!-- <ul>\n                                          <li><a href=\"index.html\">Header Style 01</a></li>\n                                          <li><a href=\"index-2.html\">Header Style 02</a></li>\n                                          <li><a href=\"index-3.html\">Header Style 03</a></li>\n                                          <li><a href=\"index-4.html\">Header Style 04</a></li>\n                                      </ul> -->\n                                  </li>\n                                  <li class=\"dropdown\"><a [routerLink]=\"['/services']\">Services</a>\n                                    <!-- <ul>\n                                          <li><a >Search Engine Optimization</a></li>\n                                          \n                                      </ul> -->\n                                  </li>\n                                  <li class=\"dropdown\"><a [routerLink]=\"['/aboutcompany']\">company</a>\n                                    <!-- <ul>\n                                          <li><a href=\"about.html\">About Our Company</a></li>\n                                          \n                                      </ul> -->\n                                  </li>\n                                  <!-- <li class=\"dropdown\"><a >Case Studies</a>\n                                    <ul>\n                                          <li><a href=\"case.html\">Case Studies Default</a></li>\n                                         \n                                      </ul>\n                                  </li>\n                                  <li><a href=\"price.html\">Pricing</a></li>\n                                  <li class=\"dropdown\"><a >Blog</a>\n                                    <ul>\n                                          <li><a href=\"blog.html\">Blog Default</a></li>\n                                        \n                                      </ul>\n                                  </li> -->\n                               </ul>\n                          </div>\n                      </nav>\n                      <!-- Main Menu End-->\n                      \n                      <!--Outer Box-->\n                      <!-- <div class=\"outer-box\">\n                          <a class=\"theme-btn btn-style-one\"> <span class=\"icon flaticon-right-arrow-1\"></span> Get a Quote</a>\n                      </div> -->\n                      \n                  </div>\n                  <!--Nav Outer End-->\n                  \n            </div>    \n          </div>\n      </div>\n    \n      <!--Sticky Header-->\n      <div class=\"sticky-header\">\n        <div class=\"auto-container\">\n            \n              <div class=\"outer-container clearfix\">\n                  <!--Logo Box-->\n                  <div class=\"logo-box pull-left\">\n                      <div class=\"logo\"><b><a style=\"text-transform:uppercase;\"><img src=\"../../assets/images/PHOTO-2019-03-19-01-54-50.png\" width=\"70\" height=\"50\" alt=\"\">America's Marketing & Media Solutions LLC</a></b></div>\n                  </div>\n                  \n                  <!--Nav Outer-->\n                  <div class=\"nav-outer clearfix\">\n                      <!-- Main Menu -->\n                      <nav class=\"main-menu\">\n                          <div class=\"navbar-header\">\n                              <!-- Toggle Button -->    \t\n                              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                                  <span class=\"icon-bar\"></span>\n                                  <span class=\"icon-bar\"></span>\n                                  <span class=\"icon-bar\"></span>\n                              </button>\n                          </div>\n                          \n                          <div class=\"navbar-collapse collapse clearfix\">\n                              <ul class=\"navigation clearfix\">\n                                  <li class=\"current dropdown\"><a [routerLink]=\"['/home']\">Home</a>\n                                 \n                                  </li>\n                                  <li class=\"dropdown\"><a [routerLink]=\"['/services']\">Services</a>\n                                    <!-- <ul>\n                                          <li><a href=\"services.html\">Search Engine Optimization</a></li>\n                                          \n                                      </ul> -->\n                                  </li>\n                                  <li class=\"dropdown\"><a [routerLink]=\"['/aboutcompany']\">company</a>\n                                    <!-- <ul>\n                                          <li><a href=\"about.html\">About Our Company</a></li>\n                                         \n                                      </ul> -->\n                                  </li>\n                                  \n                               </ul>\n                          </div>\n                      </nav>\n                      <!-- Main Menu End-->\n                      \n                  </div>\n                  <!--Nav Outer End-->\n                  \n            </div>\n              \n          </div>\n      </div>\n      <!--End Sticky Header-->\n      \n  </header>\n  <!--End Main Header -->\n\n  \n\n  <section *ngIf=\"!isService\" class=\"main-slider\">\n    <div class=\"rev_slider_wrapper fullwidthbanner-container\"  id=\"rev_slider_one_wrapper\" data-source=\"gallery\" style=\"overflow:visible;height:850px;\">\n        <div  class=\"rev_slider fullwidthabanner\" id=\"rev_slider_one\" data-version=\"5.4.1\"  >\n            <ul class=\"tp-revslider-mainul\" style=\"visibility: visible; display: block; overflow: hidden; width: 1664px; height: 100%; max-height: none; left: 0px;\">\n            \n              <li data-description=\"Slide Description\" data-easein=\"default\" data-easeout=\"default\" data-fsmasterspeed=\"1500\" data-fsslotamount=\"7\" data-fstransition=\"fade\" data-hideafterloop=\"0\" data-hideslideonmobile=\"off\" data-index=\"rs-1688\" data-masterspeed=\"default\" data-param1=\"\" data-param10=\"\" data-param2=\"\" data-param3=\"\" data-param4=\"\" data-param5=\"\" data-param6=\"\" data-param7=\"\" data-param8=\"\" data-param9=\"\" data-rotate=\"0\" data-saveperformance=\"off\" data-slotamount=\"default\" data-thumb=\"../../assets/images/main-slider/image-1.jpg\" data-title=\"Slide Title\" data-transition=\"parallaxvertical\">\n                <img alt=\"\" class=\"rev-slidebg\" data-bgfit=\"cover\" data-bgparallax=\"10\" data-bgposition=\"center center\" data-bgrepeat=\"no-repeat\" data-no-retina=\"\" src=\"../../assets/images/main-slider/image-1.jpg\"> \n                \n                <div class=\"tp-caption\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['560','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['-30','-90','-90','-60']\"\n                data-x=\"['left','left','left','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <h2><span>best</span>Digital Marketing agency in <br> United States.</h2>\n                </div>\n                \n                <div class=\"tp-caption\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['470','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['40','40','20','0']\"\n                data-x=\"['left','left','left','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <div class=\"text\">We Offering Digital Marketing Solutions that can Tailored to Suit any Budget and Business.</div>\n                </div>\n                \n                <div class=\"tp-caption tp-resizeme\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['560','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['130','150','120','100']\"\n                data-x=\"['left','left','left','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <div class=\"btns-box\">\n                    <a  class=\"theme-btn btn-style-one\"> <span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                    </div>\n                </div>\n                \n                <div class=\"tp-caption tp-shape tp-shapewrapper tp-resizeme\"\n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"shape\"\n                data-height=\"auto\"\n                data-whitespace=\"nowrap\"\n                data-width=\"none\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['20','15','15','15']\"\n                data-x=\"['right','right','right','right']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-frames='[{\"from\":\"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1000,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <figure class=\"content-image\"><img src=\"../../assets/images/main-slider/content-image-1.png\" alt=\"\"></figure>\n                </div>\n                \n                </li>\n                \n                <li data-description=\"Slide Description\" data-easein=\"default\" data-easeout=\"default\" data-fsmasterspeed=\"1500\" data-fsslotamount=\"7\" data-fstransition=\"fade\" data-hideafterloop=\"0\" data-hideslideonmobile=\"off\" data-index=\"rs-1689\" data-masterspeed=\"default\" data-param1=\"\" data-param10=\"\" data-param2=\"\" data-param3=\"\" data-param4=\"\" data-param5=\"\" data-param6=\"\" data-param7=\"\" data-param8=\"\" data-param9=\"\" data-rotate=\"0\" data-saveperformance=\"off\" data-slotamount=\"default\" data-thumb=\"../../assets/images/main-slider/image-2.jpg\" data-title=\"Slide Title\" data-transition=\"parallaxvertical\">\n                <img alt=\"\" class=\"rev-slidebg\" data-bgfit=\"cover\" data-bgparallax=\"10\" data-bgposition=\"center center\" data-bgrepeat=\"no-repeat\" data-no-retina=\"\" src=\"../../assets/images/main-slider/image-2.jpg\"> \n                \n                <div class=\"tp-caption\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['560','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['-30','-50','-50','-50']\"\n                data-x=\"['right','right','right','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <h2 class=\"light\"><span>email</span>Marketing is extreanly cost <br> efficient and targeted.</h2>\n                </div>\n                \n                <div class=\"tp-caption\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['560','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['40','20','20','15']\"\n                data-x=\"['right','right','right','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <div class=\"text light\">We Offering Digital Marketing Solutions that can Tailored <br> to Suit any Budget and Business.</div>\n                </div>\n                \n                <div class=\"tp-caption tp-resizeme\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['560','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['130','100','100','100']\"\n                data-x=\"['right','right','right','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <div class=\"btns-box\">\n                    <a  class=\"theme-btn btn-style-one\"> <span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                    </div>\n                </div>\n                \n                <div class=\"tp-caption tp-shape tp-shapewrapper tp-resizeme\"\n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"shape\"\n                data-height=\"auto\"\n                data-whitespace=\"nowrap\"\n                data-width=\"none\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['20','0','0','0']\"\n                data-x=\"['left','left','left','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-frames='[{\"from\":\"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1000,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <figure class=\"content-image\"><img src=\"../../assets/images/main-slider/content-image-2.png\" alt=\"\"></figure>\n                </div>\n                \n                </li>\n                \n                <li data-description=\"Slide Description\" data-easein=\"default\" data-easeout=\"default\" data-fsmasterspeed=\"1500\" data-fsslotamount=\"7\" data-fstransition=\"fade\" data-hideafterloop=\"0\" data-hideslideonmobile=\"off\" data-index=\"rs-1690\" data-masterspeed=\"default\" data-param1=\"\" data-param10=\"\" data-param2=\"\" data-param3=\"\" data-param4=\"\" data-param5=\"\" data-param6=\"\" data-param7=\"\" data-param8=\"\" data-param9=\"\" data-rotate=\"0\" data-saveperformance=\"off\" data-slotamount=\"default\" data-thumb=\"../../assets/images/main-slider/image-3.jpg\" data-title=\"Slide Title\" data-transition=\"parallaxvertical\">\n                <img alt=\"\" class=\"rev-slidebg\" data-bgfit=\"cover\" data-bgparallax=\"10\" data-bgposition=\"center center\" data-bgrepeat=\"no-repeat\" data-no-retina=\"\" src=\"../../assets/images/main-slider/image-3.jpg\"> \n                \n                <div class=\"tp-caption\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['560','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['-30','-90','-90','-60']\"\n                data-x=\"['left','left','left','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <h2 class=\"light\"><span>ppc</span>Digital Marketing agency in <br> United States.</h2>\n                </div>\n                \n                <div class=\"tp-caption\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['470','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['30','40','20','0']\"\n                data-x=\"['left','left','left','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <div class=\"text light\">We Offering Digital Marketing Solutions that can Tailored to Suit any Budget and Business.</div>\n                </div>\n                \n                <div class=\"tp-caption tp-resizeme\" \n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"text\"\n                data-height=\"none\"\n                data-width=\"['560','700','700','550']\"\n                data-whitespace=\"normal\"\n                data-hoffset=\"['15','15','15','15']\"\n                data-voffset=\"['120','150','120','100']\"\n                data-x=\"['left','left','left','left']\"\n                data-y=\"['middle','middle','middle','middle']\"\n                data-textalign=\"['top','top','top','top']\"\n                data-frames='[{\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1500,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <div class=\"btns-box\">\n                    <a  class=\"theme-btn btn-style-one\"> <span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                    </div>\n                </div>\n                \n                <div class=\"tp-caption tp-shape tp-shapewrapper tp-resizeme\"\n                data-paddingbottom=\"[0,0,0,0]\"\n                data-paddingleft=\"[0,0,0,0]\"\n                data-paddingright=\"[0,0,0,0]\"\n                data-paddingtop=\"[0,0,0,0]\"\n                data-responsive_offset=\"on\"\n                data-type=\"shape\"\n                data-height=\"auto\"\n                data-whitespace=\"nowrap\"\n                data-width=\"none\"\n                data-hoffset=\"['-80','15','15','15']\"\n                data-voffset=\"['0','0','0','0']\"\n                data-x=\"['right','right','right','right']\"\n                data-y=\"['bottom','bottom','bottom','bottom']\"\n                data-frames='[{\"from\":\"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"speed\":1000,\"to\":\"o:1;\",\"delay\":1000,\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]'>\n                  <figure class=\"content-image\"><img src=\"../../assets/images/main-slider/content-image-3.png\" alt=\"\"></figure>\n                </div>\n                \n                </li>\n                \n            </ul>\n        </div>\n    </div>\n</section>\n\n<section *ngIf=\"isService\" class=\"page-title\" style=\"background-image:url(../../assets/images/background/pattern-4.png);\">\n    <div class=\"auto-container\">\n        <h1>{{modulName}}</h1>\n    </div>\n    <!--Page Info-->\n    <div class=\"page-info\">\n        <div class=\"auto-container\">\n          <div class=\"inner-container\">\n                <ul class=\"bread-crumb\">\n                    <li><a [routerLink]=\"['/home']\">Home</a></li>\n                    <li><a [routerLink]=\"['/services']\">{{modulName}}</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!--End Page Info-->\n</section>\n\n  <router-outlet></router-outlet>\n  <!--Main Footer-->\n  <footer class=\"main-footer\">\n    <div class=\"auto-container\">\n      \n        <!--Widgets Section-->\n          <div class=\"widgets-section\">\n            <div class=\"row clearfix\">\n                \n                  <div class=\"column col-md-4 col-sm-6 col-xs-12\">\n          <div class=\"footer-widget subscribe-widget\">\n                        <div class=\"footer-title\">\n                            <h2>Subscribe Us </h2>\n                          </div>\n                          <div class=\"widget-content\">\n                            <div class=\"text\">Subscribe us for recieve latest Updates <br> News and Offers.</div>\n                              <div class=\"subscribe-form\">\n                                  <form method=\"post\" action=\"contact.html\">\n                                      <div class=\"form-group\">\n                                          <input type=\"email\" name=\"email\" value=\"\" placeholder=\"Email Address...\" required=\"\">\n                                          <button type=\"submit\" class=\"theme-btn\"><span class=\"flaticon-right-arrow-1\"></span></button>\n                                      </div>\n                                  </form>\n                              </div>\n                              <ul class=\"social-icon-one\">\n                                  <li><a ><span class=\"fa fa-facebook-f\"></span></a></li>\n                                  <li><a ><span class=\"fa fa-twitter\"></span></a></li>\n                                  <li><a ><span class=\"fa fa-linkedin\"></span></a></li>\n                                  <li><a ><span class=\"fa fa-rss\"></span></a></li>\n                                  <li><a ><span class=\"fa fa-google-plus\"></span></a></li>\n                                  <li><a ><span class=\"fa fa-vimeo\"></span></a></li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n                  \n                  <!--Column-->\n                  <div class=\"column col-md-4 col-sm-6 col-xs-12\">\n          <div class=\"footer-widget office-widget\">\n                        <div class=\"footer-title\">\n                            <h2>Corporate Office</h2>\n                          </div>\n                          <div class=\"widget-content\">\n              <div class=\"single-item-carousel owl-carousel owl-theme\">\n                                \n                                  <div class=\"office-info\">\n                                    <ul>\n                                        <li><strong>Address:</strong></li>\n                                          <li>425 Cowly Brown Road <br> Block 4 / 2C, New York 10013, USA.</li>\n                                          <li><a >Find Us On Map</a></li>\n                                      </ul>\n                                  </div>\n                                  \n                                  <div class=\"office-info\">\n                                    <ul>\n                                        <li><strong>Address:</strong></li>\n                                          <li>425 Cowly Brown Road <br> Block 4 / 2C, New York 10013, USA.</li>\n                                          <li><a >Find Us On Map</a></li>\n                                      </ul>\n                                  </div>\n                                  \n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  \n              </div>\n          </div>\n          \n      </div>\n      <!--Copyright-->\n      <div class=\"copyright\">Copyright &copy; 2019 The <a >America's Marketing & Media Solutions LLC</a>. All rights reserved.</div>\n  </footer>\n  <!--Main Footer-->\n  \n  <!--Bottom Parallax-->\n  <div class=\"bottom-parallax\">\n      <!--About Section-->\n      <section class=\"about-section\" style=\"background-image:url(../../assets/images/background/pattern-3.png)\">\n          <div class=\"auto-container\">\n              <div class=\"inner\">\n                  <h2>We don’t just talk about what is coming next, we do it.</h2>\n                  <a class=\"theme-btn btn-style-three\">Join With Us</a>\n              </div>\n          </div>\n      </section>\n      <!--End About Section-->\n  </div>\n  \n</div>\n<!--End pagewrapper-->\n\n<!--Scroll to top-->\n<div class=\"scroll-to-top scroll-to-target\" data-target=\"html\"><span class=\"icon fa fa-angle-double-up\"></span></div>\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_access_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data-access.service */ "./src/app/services/data-access.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");










var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(api, customer, location, router, formBuilder, dataAccess, toastr, cdRef) {
        //   if(localStorage.getItem("TOKEN") && localStorage.getItem("TOKEN")!=null){
        //   location.onPopState(() => {
        //   console.log("pressed back in add!!!!!");
        //   this.router.navigateByUrl('/dashboard');
        //   history.forward();
        //   });
        // }
        // else{
        //   this.router.navigateByUrl('/home');
        // }
        this.api = api;
        this.customer = customer;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dataAccess = dataAccess;
        this.toastr = toastr;
        this.cdRef = cdRef;
        this.submitted = false;
        this.minDate = new Date();
        this.router.navigateByUrl('/home');
        LoginPageComponent_1.isServiceStyle = false;
    }
    LoginPageComponent_1 = LoginPageComponent;
    LoginPageComponent.prototype.ngAfterViewChecked = function () {
        this.isService;
        this.modulName;
        console.log("before   " + this.isService);
        this.cdRef.detectChanges();
        console.log("after   " + this.isService);
        window.scrollTo(0, 0);
    };
    LoginPageComponent.prototype.tryLogin = function () {
        var _this = this;
        this.api.login(this.login.value.Username, this.login.value.Password)
            .subscribe(function (r) {
            if (r.token) {
                localStorage.setItem("userinfo", JSON.stringify(r));
                _this.dataAccess.changeMessage(JSON.stringify(r));
                _this.customer.setToken(r.token);
                _this.router.navigateByUrl('/userlist');
            }
        }, function (r) {
            alert(r.error.error);
        });
    };
    Object.defineProperty(LoginPageComponent.prototype, "isService", {
        get: function () {
            return LoginPageComponent_1.isServiceStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "modulName", {
        get: function () {
            return LoginPageComponent_1.moduleName;
        },
        enumerable: true,
        configurable: true
    });
    LoginPageComponent.prototype.ngOnInit = function () {
        this.login = this.formBuilder.group({
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    Object.defineProperty(LoginPageComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.login.controls; },
        enumerable: true,
        configurable: true
    });
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.login.invalid) {
            this.toastr.warning('Warning!...', 'Please enter valid Data');
            return;
        }
        this.dataAccess.createInvokanaForm(this.login.value)
            .subscribe(function (hero) { _this.userInfo = hero; console.log(_this.userInfo); });
        // success => {
        //   console.log(Response);
        //   //console.log(res);
        //   //this.toastr.success('Success!....', 'Thank you for registering with us,Your details forwarded to Administration');
        // },
        // error => {
        //   this.toastr.error('Oops!....', 'Sory Some went Wrong, please try later');
        // }
        //);
    };
    var LoginPageComponent_1;
    LoginPageComponent.isServiceStyle = false;
    LoginPageComponent.moduleName = "Home";
    LoginPageComponent = LoginPageComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _services_data_access_service__WEBPACK_IMPORTED_MODULE_7__["DataAccessService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.module.ts":
/*!*************************************************!*\
  !*** ./src/app/login-page/login-page.module.ts ***!
  \*************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login-page/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/login-page/home/home.component.ts");
/* harmony import */ var _aboutcompany_aboutcompany_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutcompany/aboutcompany.component */ "./src/app/login-page/aboutcompany/aboutcompany.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "./src/app/login-page/services/services.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _servicedetails_servicedetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicedetails/servicedetails.component */ "./src/app/login-page/servicedetails/servicedetails.component.ts");













var routes = [
    {
        path: '',
        component: _login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            },
            {
                path: 'aboutcompany',
                component: _aboutcompany_aboutcompany_component__WEBPACK_IMPORTED_MODULE_9__["AboutcompanyComponent"]
            },
            {
                path: 'services',
                component: _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"]
            },
            {
                path: 'servicedetails/:name',
                component: _servicedetails_servicedetails_component__WEBPACK_IMPORTED_MODULE_12__["ServicedetailsComponent"]
            }
        ]
    },
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({ maxOpened: 1, preventDuplicates: true }),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _aboutcompany_aboutcompany_component__WEBPACK_IMPORTED_MODULE_9__["AboutcompanyComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"], _servicedetails_servicedetails_component__WEBPACK_IMPORTED_MODULE_12__["ServicedetailsComponent"]],
            exports: [
                _login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] },
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login-page/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/login-page/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.login-form-1{\r\n    padding: 5%;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form-1 h3{\r\n    text-align: center;\r\n    color: #333;\r\n}\r\n.login-form-2{\r\n    padding: 5%;\r\n    background: #0062cc;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form-2 h3{\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n.login-container form{\r\n    padding: 10%;\r\n}\r\n.btnSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.login-form-1 .btnSubmit{\r\n    font-weight: 600;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n}\r\n.login-form-2 .btnSubmit{\r\n    font-weight: 600;\r\n    color: #0062cc;\r\n    background-color: #fff;\r\n}\r\n.login-form-2 .ForgetPwd{\r\n    color: #fff;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n.login-form-1 .ForgetPwd{\r\n    color: #0062cc;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLDRFQUE0RTtBQUNoRjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1wYWdlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4ubG9naW4tZm9ybS0xe1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbi5sb2dpbi1mb3JtLTEgaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4ubG9naW4tZm9ybS0ye1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4ubG9naW4tZm9ybS0yIGgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciBmb3Jte1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59XHJcbi5idG5TdWJtaXRcclxue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2dpbi1mb3JtLTEgLmJ0blN1Ym1pdHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XHJcbn1cclxuLmxvZ2luLWZvcm0tMiAuYnRuU3VibWl0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubG9naW4tZm9ybS0yIC5Gb3JnZXRQd2R7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmxvZ2luLWZvcm0tMSAuRm9yZ2V0UHdke1xyXG4gICAgY29sb3I6ICMwMDYyY2M7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login-page/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/login-page/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-container\">\n            <div class=\"row\">\n              <div class=\"col-md-2\"></div>\n                <div class=\"col-md-8 login-form-1\">\n                    <h3>Login </h3>\n                    <form class=\"form-signin\" [formGroup]=\"login\" (ngSubmit)=\"tryLogin()\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"Username\" placeholder=\"Your Email *\" value=\"\" />\n                            <div *ngIf=\"submitted && f.Username.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.Username.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" formControlName=\"Password\" placeholder=\"Your Password *\" value=\"\" />\n                            <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.Password.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"submit\" class=\"btnSubmit\" value=\"Login\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"#\" class=\"ForgetPwd\">Forget Password?</a>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"col-md-2\"></div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/login-page/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var src_app_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_data_access_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-access.service */ "./src/app/services/data-access.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login-page.component */ "./src/app/login-page/login-page.component.ts");










var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, customer, location, router, formBuilder, dataAccess, toastr) {
        var _this = this;
        this.api = api;
        this.customer = customer;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dataAccess = dataAccess;
        this.toastr = toastr;
        this.submitted = false;
        this.minDate = new Date();
        if (localStorage.getItem("TOKEN") && localStorage.getItem("TOKEN") != null) {
            location.onPopState(function () {
                console.log("pressed back in add!!!!!");
                _this.router.navigateByUrl('/dashboard');
                history.forward();
            });
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        console.log(this.login.value);
        this.api.login(this.login.value.Username, this.login.value.Password)
            .subscribe(function (r) {
            if (r != null && r.token) {
                localStorage.setItem("userinfo", JSON.stringify(r));
                _this.dataAccess.changeMessage(JSON.stringify(r));
                _this.customer.setToken(r.token);
                _this.router.navigate(['/dashboard/home']);
            }
            else {
                _this.toastr.error('Oops!....', 'Invalid Credentials');
            }
        }, function (r) {
            _this.toastr.error('Oops!....', 'Sory Some went Wrong, please try later');
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        _login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"].moduleName = "Login";
        this.login = this.formBuilder.group({
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.login.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login-page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login-page/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_data_access_service__WEBPACK_IMPORTED_MODULE_7__["DataAccessService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login-page/servicedetails/servicedetails.component.css":
/*!************************************************************************!*\
  !*** ./src/app/login-page/servicedetails/servicedetails.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2Uvc2VydmljZWRldGFpbHMvc2VydmljZWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login-page/servicedetails/servicedetails.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/login-page/servicedetails/servicedetails.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-page-container\">\n  <div class=\"auto-container\">\n      <div class=\"row clearfix\">\n          \n            <!--Content Side-->\n            <div class=\"content-side col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n\n\n                <div class=\"blog-single\" *ngIf=\"name=='XareltoLawsuits'\">\n                    <div class=\"inner-box\">\n                                    <div class=\"image\">\n                                        <img src=\"../../../assets/images/resource/news-8.jpg\" alt=\"\" />\n                                    </div>\n                                    <div class=\"lower-content\">\n                                        \n                                        <h3 style=\"text-transform:uppercase;\">Xarelto Lawsuits</h3>\n                                        <div class=\"text\">\n                                          <p>Every year more than 120,000 people get affected from heart arrhythmia or atrial fibrillation and end up with losing their lives. A medical report claimed that about 5 million people are having issues due to abnormal heart rhythm.\n\n                                              That’s the reason behind introduction of drug: Xarelto. Back in the year 2011, Xarelto was one of the safest methods used for reducing the risks related to blood clots and heart stroke in the patients suffering from atrial fibrillation. People got excited and opted for this drug medication.\n                                              \n                                              Soon with time, patients realized that Xarelto was not safe to consume as multiple deaths and some unexpected ill effects were seen in a major population who were taking Xarelto. As a result, more than 15,000 lawsuits have already been filed against Xarelto and the number is still increasing.</p>\n                                        </div>\n                                    </div>\n                                    <blockquote>\n                                        <div class=\"quote-icon\"><span class=\"icon flaticon-right-quotation-sign\"></span></div>\n                                        <div class=\"blockquote-text\">   </div>\n                                        <div class=\"quote-info\">\n                                            <h4>About Xarelto- The Blood Thinner</h4>\n                                            <div class=\"quote-desination\">\n                                              <p>Xarelto is an orally consumable drug developed by the joint venture of Bayer and Johnson and Johnson’s Pharmaceuticals. This drug helps the patients and prevents DVT (Deep Vein Thrombosis) which results in formation of blood clots in the legs. FDA approved this drug in the initial days in order to relieve patients who underwent knee replacement surgeries.\n\n                                                  But in November 2011, it was also approved for the patients to avoid strokes caused by atrial fibrillation. During that period, there was nothing better substitute to Xarelto and on seeing the benefits people shifted from Warafin to this.\n                                                  \n                                                  Xarelto was assumed as safer than warafin but the risks of bleeding inside brain and stomach were similar. A year later, FDA approved Xarelto for the treatment and reduction of blood clots in patients with pulmonary embolism and DVT.\n                                                  \n                                                  Due to this, the demand of Xarelto was increased and the parent company made profit in billions.</p>\n                                            </div>\n                                        </div>\n                                    </blockquote>\n                                    <div class=\"lower-content\">\n                                        \n                                        <h3>How to file a lawsuit in this case?</h3>\n                                        <div class=\"text\">\n                                          <p>The manufacturers of Xarelto have received thousands of lawsuits claiming for compensations, as even doctors are unable to stop the internal bleeding caused by this drug.\n\n                                              We at Get Your Attorney care for you and your loved ones. All you have to do is getting a comprehensive health checkup from a registered doctor, rest all is managed by us. We can help you in filing the correct lawsuit in order to make sure that you achieve the decision in your favor and get a huge sum as compensation.\n                                              \n                                              We have vast experience in dealing with cases caused by Xarelto drug. With our judicial know-how, we make the process even quicker and represent your file with strong facts and arguments.</p>\n                                        </div>\n                                    </div>\n                                </div>\n                   </div>\n\n\n                   <div class=\"blog-single\" *ngIf=\"name=='InvokanaLawsuits'\">\n                      <div class=\"inner-box\">\n                                      <div class=\"image\">\n                                          <img src=\"../../../assets/images/resource/news-9.jpg\" alt=\"\" />\n                                      </div>\n                                      <div class=\"lower-content\">\n                                        \n                                          <h3 style=\"text-transform:uppercase;\">Invokana Lawsuits</h3>\n                                          <div class=\"text\">\n                                            <p>Higher levels of sugar in the blood results in diabetes, which makes blood clotting more complex. The open wounds heal slowly and are prone of getting infections. That’s the major reason why most people suffering from Diabetes require some sort of medication for cure amputation in lower limb.\n\n                                                Unknowingly most of the people who are taking these medications to regulate their blood sugar levels are not aware that the prescriptions they are taking can have some serious risks to their health while increasing the chances of amputation.\n                                                \n                                                One common drug that made billions of profit and is now a topic of debate is Invokana.\n                                                \n                                                This anti-diabetic drug was a part of controversy as the patients who were prescribed with this claimed that they have developed several side effects like kidney injuries, fractures, diabetic ketoacidosis, and amputation risks.\n                                                \n                                                </p>\n                                          </div>\n                                      </div>\n                                      <blockquote>\n                                          <div class=\"quote-icon\"><span class=\"icon flaticon-right-quotation-sign\"></span></div>\n                                          <div class=\"blockquote-text\">   </div>\n                                          <div class=\"quote-info\">\n                                              <h4>Working of Invokana </h4>\n                                              <div class=\"quote-desination\">\n                                                <p>Invokana is prescribed to be taken once in a day as an oral medication for the treatment of Type-2 Diabetes.\n\n                                                    Type-2 Diabetes is a medical condition where a body is not able to cope up with insulin for the regulation of normal blood sugar level. Invokana helps in regulating the lower blood sugar with SGLT2 which is a sodium glucose based transporter. This helps in absorbing glucose in the blood for lowering sugar levels.</p>\n                                              </div>\n                                          </div>\n                                      </blockquote>\n                                      <div class=\"lower-content\">\n                                          \n                                          <h3>Other fatal complications caused by Invokana</h3>\n                                          <div class=\"text\">\n                                            <p>From the date, Invokana was approved and till now, the count of people affected by this drug is increasing. Apart from general side effects, there are some major health issues that can be caused by taking Invokana.</p>\n\n                                            <b>Kidney Damage</b>\n                                            <p>SGLT2 which act as a transporter is the main culprit behind acute kidney damage. Between 2013 and 2015, FDA received 70 cases which were confirmed with Kidney injuries due to Invokana. The number can be higher but FDA only disclosed the cases that they were aware of. Kidney damages caused by Invokana are really fatal and can be permanent in some cases.</p>\n                                            <b>Lower Limb Amputation</b>\n                                            <p>People suffering from Diabetes are already prone to lower limb amputation. A clinical trial confirmed this by revealing that people taking Invokana are two times more likely to get amputation in the lower limb. This forced FDA to take strict actions which resulted in addition of black box warning labels on Invokana packaging.</p>\n                                            <b>We have helped hundreds of patients in getting justice</b>\n                                            <p>Get Your Attorney has helped countless clients in filing a successful lawsuit against Invokana manufacturers. We correctly process your details and transform them into a lawsuit that has definite chances to get you compensated.\n\n                                                If you and any of your known have suffered amputation due to Invokana, then we can help you! We can help you in filing a lawsuit, we can help you in claiming the medical bills you have paid from your pocket, and we can help you in getting a compensation amount that is fair enough.\n                                                \n                                                Filing lawsuits in product liability section needs quicker actions, and we assure you that we will perform each and every step of the process within the deadline.\n                                                \n                                                </p>\n                                          </div>\n                                      </div>\n                                  </div>\n                     </div>\n\n\n                     <div class=\"blog-single\" *ngIf=\"name=='IVCLawsuits'\">\n                        <div class=\"inner-box\">\n                                        <div class=\"image\">\n                                            <img src=\"../../../assets/images/resource/news-2.jpg\" alt=\"\" />\n                                        </div>\n                                        <div class=\"lower-content\">\n                                            \n                                            <h3 style=\"text-transform:uppercase;\">IVC Filter Lawsuits</h3>\n                                            <div class=\"text\">\n                                             <p>IVC filters are special kind of medical devices that are significantly designed to avoid bold clots causing life-threatening injuries. But if these filters are left for too long on the body, they can result in severe pain, damaged internal organs and in some cases even resulted into death\n\n                                                More than 300 injuries and 30 deaths have been spotted by FDA, and they stated that an IVC filter can break into small pieces, puncture internal organs and veins, and can even migrate to the brain, heart or lungs.\n                                                \n                                                In some fatal cases, IVC filter has damaged IVC (Inferior Vena Cava, badly punctured veins or moved to some other organs after the transplant.\n                                                \n                                                </p>\n\n                                                <b>Everything you should know about a IVC filter</b>\n\n                                                <p>IVC filters are medical devices that are implanted in the vessels which maintain a healthy blood flow from legs to the heart. They have a special design which is meant to detect and catch blood clots and avoid them to enter in the lungs. While catching the clot IVC filter makes sure that the blood flow is maintained.\n\n                                                    There was a time when these filters were utilized to cure patients suffering from pulmonary embolisms. Some IVC filters are for temporary use; on the other hand some were designed for permanent utilization.\n                                                    \n                                                    The results IVC filters delivered were very impressive and patients inclined towards this over regular medication. However, this situation didn’t lasted too long as people started claiming side effects caused by these filters.</p>\n                                                    <b>Some common complications of IVC filter to human body</b>\n\n                                                    <p>There are different brands manufacturing IVC and also there are multiple options like permanent filter and temporary one. But all the filters tend to have severe effects.\n                                                        Puncturing the blood veins and vessels\n                                                        Complex removal process\n                                                        Migration to other organ causing blockage\n                                                        Perforated vital organs\n                                                        Fracture in the filter\n                                                        There are fair chances that IVC filter breaks into pieces with time. Some of these tiny pieces are so small and sharp that they travel with the blood and damage the lungs and heart. In case IVC filter migrates to the heart, results can be fatal and can lead to death.</p>\n\n\n                                                        <b>Why Choose Us?</b>\n\n                                                        <p>After these side effects came to the limelight, Bard (the manufacturer of IVC filter) chose to hide this from medical organizations and FDA, which made the sufferers to file a claim against Bard.\n\n                                                            Get Your Attorney has the required expertise to determine the worth of your case; we are more than happy to talk to you about the case while moving forward to filing a lawsuit. If you have suffered from side effects of IVC filter then you are eligible to reimburse all the medical bills and future treatment charges.\n                                                            \n                                                            We will also help you get the complete compensation of the lost wages and the time you were off duty for the treatment. In addition to this, our attorneys assist you in collecting an additional amount for the suffering and pain you and your loved ones borne due to IVC filters.\n                                                            \n                                                            </p>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                       </div>\n              <!--Our Single-->\n              <div class=\"blog-single\" *ngIf=\"name=='LEADGENERATION'\">\n        <div class=\"inner-box\">\n                        <div class=\"image\">\n                            <img src=\"../../../assets/images/resource/news-1.jpg\" alt=\"\" />\n                        </div>\n                        <div class=\"lower-content\">\n                            <!-- <ul class=\"post-meta\">\n                                <li><span class=\"icon fa fa-user\"></span>Roger Jenina</li>\n                                <li><span class=\"icon fa fa-folder\"></span>Email Marketing</li>\n                            </ul> -->\n                            <h3>LEAD GENERATION</h3>\n                            <div class=\"text\">\n                                <p><b>WHAT IS LEAD GENERATION?</b></p>\n                                <p >Lead generation describes the marketing process of stimulating and capturing interest in a product or service for the purpose of developing sales pipeline.\n                                  </p>\n                                  <p>Lead generation often uses digital channels, and has been undergoing substantial changes in recent years from the rise of new online and social techniques. In particular, the abundance of information readily available online has led to the rise of the “self-directed buyer” and the emergence of new techniques to develop and qualify potential leads before passing them to sales. </p>\n\n\n                                  <p><b>WHY IS LEAD GENERATION IMPORTANT?</b></p>\n                                <p >The buying process has changed, and marketers need to find new ways to reach buyers and get heard through the noise.  Instead of finding customers with mass advertising and email blasts, marketers must now focus on being found and learn to build continuous relationships with buyers.\n                                  </p>\n                                \n                            </div>\n                        </div>\n                    </div>\n                    \n               \n                    \n                    \n                </div>\n                <div class=\"blog-single\" *ngIf=\"name=='TELEMARKETING'\">\n                  <div class=\"inner-box\">\n                                  <div class=\"image\">\n                                      <img src=\"../../../assets/images/resource/news-2.jpg\" alt=\"\" />\n                                  </div>\n                                  <div class=\"lower-content\">\n                                      \n                                      <h3>TELEMARKETING SERVICES</h3>\n                                      <div class=\"text\">\n                                          <p >Telemarketing is a marketing strategy that involves connecting with customers over the telephone or, more recently, through web-based video conferencing. \n                                            </p>\n                                            <br>\n                                            <p >Telemarketing is one of the most divisive strategies in modern marketing because many organizations have been known to use irritating or unethical practices in telemarketing. One of the most negatively-perceived versions of telemarketing is known as “robo-calling,” a practice that involves using a pre-recorded message delivered through an automatic dialing machine that can contact thousands of people every day. Because of these and other unpopular methods, there are many government regulations of telemarketing in several countries throughout the world.\n                                    \n                                              </p>\n                                              <br>\n                                              <p >Telemarketing can help a wide variety of organizations achieve improved results in different ways. Though the most obvious form of telemarketing involves company calls to individuals at home to pitch them products, telemarketing is also a significant strategy in business-to-business sales, event promotion, political campaigning, and lead generation for more sophisticated sales procedures.\n                                                </p>\n                                                <br>\n                                                <p >Companies that wish to promote an event that appeals to a specific demographic can also use telemarketing to reach potential participants. For instance, a company that organizes continuing education conferences for dentists could use telemarketing to contact a large number of dental practices to raise awareness about an upcoming conference, and encourage the dentists to attend.\n                                                  </p>\n                                                  <br>\n                                                  <p >Telemarketing can be used to achieve several different business goals, including:</p>\n                                                     <p> Selling a product </p>\n                                                     <p> Generating leads for a sales team </p>\n                                                     <p> Conducting surveys and collecting consumer data </p>\n                                                     <p> Maintaining contact with existing customers or encouraging previous customers to return.</p>\n                                      </div>\n                                  </div>\n                              </div>\n                 </div>\n\n\n\n                 <div class=\"blog-single\" *ngIf=\"name=='B2BLEADGENERATION'\">\n                    <div class=\"inner-box\">\n                                    <div class=\"image\">\n                                        <img src=\"../../../assets/images/resource/news-3.jpg\" alt=\"\" />\n                                    </div>\n                                    <div class=\"lower-content\">\n                                        \n                                        <h3>B2B LEAD GENERATION & CONTENT SYNDICATION</h3>\n                                        <div class=\"text\">\n                                            <p >Content syndication would be one of the most best & effective practice to leverage your investment in white papers, Webcasts, Seminars, case studies, analyst reports by making those documents instantly available to billions of technology buyers looking for information or solution related to business problem that your product solves. We promote your whitepapers or webinar/event invitations to prospects who have expressed their interest in you. Our team of experienced Lead Generation Professionals delineate that match your specifications and target the key decision makers.</p>\n\n                                            <div class=\"row about-us-text\">\n                                                <div class=\"col-md-12\">\n                                                  <p><b>How we make it work: </b></p>\n                                                  <p >After discussing your needs and demands, we create our custom content syndication plan.</p>\n                                                  <p >We negotiate for the lowest CPL possible according to your desired lead qualifications.</p>\n                                                  <p >After our discussion on the content you would like us to share with your clients, we place the content on your behalf.</p>\n                                                  <p >Once we score all the leads, we verify them with the help of our Lead Generation Quality Analysts, format them and send them across through email or even upload them directly on your CRM.</p>\n                                                  <p >We constantly monitor the campaign and make the necessary changes needed and also resolve any vendor issues.</p>\n                                                  <p >In the end, we send you a detailed lead summary audit and also incorporate lead conversion, if possible.</p>\n                                <p>America's Marketing & Media Solutions LLC Cloud Solutions LLC understands the demands sales organizations put on B2B marketers: delivering high quality leads at a cost that maximizes your demand generation ROI. Our extensive experience in this space has lead us to develop solutions that solve this problem. By leveraging your content and exposing it to the largest network available with an expansive audience of many markets, we empower you in your lead generation efforts with content syndication services.\n                                  </p>\n                                                </div>\n                                              </div>\t<!-- row -->\n                                              <br>\n                                              <div class=\"row about-us-text\">\n                                                  <div class=\"col-md-12\">\n                                                    <p><b>A REACH LIKE NO OTHER</b></p>\n                                                    <br>\n                                                    <p >(15K+ PUBLISHER SITES) Communicate your expertise and brand value through our online publisher partners that focus on reaching more than 300 markets and sub industries.</p>\n                                                    <p>(10+DEMAND CHANNELS) Extend your content to more than 10 communication channels that generate the demand needed to find your interested prospects. </p>\n                                                  <p>(100M+ VISITORS / MONTH) Reach a potential of more than 100 million unique visitors per month by leveraging our network of lead generation channels.</p>\n                                                  </div>\n                                                </div>\t<!-- row -->\n                                              <br>\n                                              <div class=\"row about-us-text\">\n                                                  <div class=\"col-md-12\">\n                                                    <p><b>GET LEADS YOU ACTUALLY WANT</b></p>\n                                                    <br>\n                                                    <p >Nothing is more painful than investing marketing dollars on content campaigns that don't generate the quality leads you need. America's Marketing & Media Solutions LLCoffers you two ways to achieve your goals while taking into consideration your budget.</p>\n                                \n                                                  </div>\n                                                </div>\t<!-- row -->\n                                              <br>\n                                              <div class=\"row about-us-text\">\n                                                  <div class=\"col-md-12\">\n                                                    <p><b>HOW?</b></p>\n                                                    <br>\n                                                    <p >Our full-service offering, Lead Source, and self-serve content syndication lead generation tool, LeadFlow, leverage the network to produce the leads you actually want. All you need is existing content that offers substantial thought leadership, such as eBooks, whitepapers, case studies, video presentations, infographics and much more.</p>\n                                \n                                                  </div>\n                                                </div>\t<!-- row -->\n                                              <br>\n                                             \n                                        </div>\n                                    </div>\n                                </div>\n                   </div>\n\n\n\n                   <div class=\"blog-single\" *ngIf=\"name=='CONTENTMARKETING'\">\n                      <div class=\"inner-box\">\n                                      <div class=\"image\">\n                                          <img src=\"../../../assets/images/resource/news-4.jpg\" alt=\"\" />\n                                      </div>\n                                      <div class=\"lower-content\">\n                                          \n                                          <h3>CONTENT MARKETING</h3>\n                                          <div class=\"text\">\n                                              <p >WHITEPAPER’S & E-BOOKS:-  GET YOUR DIGITAL CONTENT TO GENERATE LEADS FOR YOU</p>\n                                              <p>America's Marketing & Media Solutions LLC engages with the decision makers through periodic Whitepapers. It’s important to ensure that the Whitepapers reach the right party contact and is read. Hence, America's Marketing & Media Solutions LLC Reps ensure that the White papers are reaching the right contact person through a prior opt-in. This activity includes an opt-in and then a confirmation on the receipt of the said whitepaper.</p>\n                                              <p>We can work with your target/named accounts or target a list that is as per your specifications. Contacts however are always profiled role-based for better results of your content marketing campaign.</p>\n                                            <br>\n                                            <p><b>1. Viewership guaranteed – we use email, newsletter and telephone to ensure your digital asset is viewed\n                         </b></p>\n                                            <p><b>2. We profile your prospect while disseminating the asset so you understand them better</b></p>\n                                            <p><b>3. Opt-In taken while distributing/download trigger</b></p>\n                                            <p><b>4. Performance based pricing, so you only pay for downloads and not opt-ins </b></p>\n                                          </div>\n                                      </div>\n                                  </div>\n                     </div>\n\n\n                     <div class=\"blog-single\" *ngIf=\"name=='PIPELINEDEVELOPMENT'\">\n                        <div class=\"inner-box\">\n                                        <div class=\"image\">\n                                            <img src=\"../../../assets/images/resource/news-5.jpg\" alt=\"\" />\n                                        </div>\n                                        <div class=\"lower-content\">\n                                            \n                                            <h3>PIPELINE DEVELOPMENT</h3>\n                                            <div class=\"text\">\n                                                <p><b>ACCELERATE YOUR SALES PIPELINE!</b></p>\n                                                <p >Managing and developing the sales pipeline is one of the most important tasks in any sales driven organization. Marketing teams are tasked with generating quality business leads to fill the sales pipeline. Sales teams are tasked with managing the pipeline, acting on leads and closing deals.\n                                                </p>\n                                                <p>America's Marketing & Media Solutions LLC pipeline development solutions address the entire lead generation life cycle. From acquiring high quality leads, to improving lead data to nurturing these leads, our solutions help simplify the sales process and make your organization more efficient and effective in reaching your target customers.</p>\n                                              <br>\n                                              <p><b>Lead Verification</b></p>\n                                                <p >Realize greater value from your sales and marketing programs by improving the data you rely on. Inaccurate and unreliable contact data wastes money and time. America's Marketing & Media Solutions LLCcan verify your webinar, seminar or other activity to insure your list is accurate.\n                                                </p>\n                                                <br>\n                                                <p><b>High Quality Lead</b></p>\n                                                <p >The speed with which you can generate qualify leads dictates how fast you can build a sustainable pipeline. America's Marketing & Media Solutions LLC can qualify your leads and make them more \"sales ready\" based on your unique criteria. \n                                                </p>\n                                              \n                                            </div>\n                                        </div>\n                                    </div>\n                       </div>\n\n\n\n                       <div class=\"blog-single\" *ngIf=\"name=='BETTERROI'\">\n                          <div class=\"inner-box\">\n                                          <div class=\"image\">\n                                              <img src=\"../../../assets/images/resource/news-6.jpg\" alt=\"\" />\n                                          </div>\n                                          <div class=\"lower-content\">\n                                              \n                                              <h3>BETTER ROI WITH PRECISE TARGETING</h3>\n                                              <div class=\"text\">\n                                                  <p >America's Marketing & Media Solutions LLC AUDIENCE TARGET™ technology uses three layers of sophisticated targeting (Contextual,\n                                                      Attribute and Conversion) to pinpoint the right prospects, avoid fraud, stop waste, and deliver results\n                                                      </p>\n                                              </div>\n                                              <div class=\"row about-us-text\">\n                                                  <div class=\"col-md-12\">\n                                                  <p><b>Contextual Targeting </b></p>\n                                                  <br>\n                                                  <p >Your content or display ads are shown only on sites related to your target industry. For example, if your white paper is about CRM, then your white paper will be distributed only to CRM-related web properties.</p>\n                              \n                                                </div>\n                                              </div>\t<!-- row -->\n                                              <br>\n                                              \n                                              <div class=\"row about-us-text\">\n                                                  <div class=\"col-md-12\">\n                                                  <p><b>Demographic Targeting</b></p>\n                                                  <br>\n                                                  <p >If demographic information is known, then your content is shown only to your target demographic. For example, if you're targeting enterprise companies (1000+ employees), then your white paper will skew away from SMB users.</p>\n                              \n                                                </div>\n                                              </div>\t<!-- row -->\n                                              <br>\n                                              \n                                              <div class=\"row about-us-text\">\n                                                  <div class=\"col-md-12\">\n                                                    <p><b>Conversion Targeting</b></p>\n                                                    <br>\n                                                    <p >Acquiring and converting customers significantly impacts the success of any business. See how America's Marketing & Media Solutions LLCcan complement your current activities and accelerate your sales pipeline.</p>\n                                \n                                                  </div>\n                                                </div>\t<!-- row -->\n                                              <br>\n                                              <div class=\"row about-us-text\">\n                                                  <div class=\"col-md-12\">\n                                                    <p><b>EXPERTISE</b></p>\n                                                    <p><b>Focus on your work. We'll take care of the rest</b></p>\n                                                    <br>\n                                                    <p >America's Marketing & Media Solutions LLCprovides you with the tools and expertise to achieve your lead generation goals.</p>\n                                                    <p>America's Marketing & Media Solutions LLCworks with over 15,000 web properties to make sure your content is read and focused on your target market.</p>\n                                                    <p>Whether you want to use America's Marketing & Media Solutions LLC’S full service offering, which includes a dedicated Client Services Rep to assist you with everything from Creative Services to Content Analysis to Best Practices and Post campaign analytics, or whether you want to create your own campaign using America's Marketing & Media Solutions LLC’S sophisticated (yet easy to use) online campaign tool and America's Marketing & Media Solutions LLC’S Best Practices content and Self Service guides, America's Marketing & Media Solutions LLCwill provide you with the tools or service to create a successful lead generation campaign.</p>\n                                                  </div>\n                                                </div>\t<!-- row -->\n                                          </div>\n                                      </div>\n                         </div>\n\n\n\n                         <div class=\"blog-single\" *ngIf=\"name=='APPOINTMENTSETTING'\">\n                            <div class=\"inner-box\">\n                                            <div class=\"image\">\n                                                <img src=\"../../../assets/images/resource/news-7.jpg\" alt=\"\" />\n                                            </div>\n                                            <div class=\"lower-content\">\n                                                \n                                                <h3>APPOINTMENT SETTING</h3>\n                                                <div class=\"text\">\n                                                    <div class=\"row about-us-text\">\n                                                        <div class=\"col-md-12\">\n                                                        <br>\n                                                        <p >Conversations are needed in order to develop the relationships and further on to get business. As a B2B sales company, our Appointment Setting Service delivers qualified decision makers to your sales team and avoid the hassle and expense of hiring and training inside sales resources. Let your sales team concentrate on what they do best i.e. closing the deal than wasting their time on finding the prospects. Let us do that for you as that are what we are best at. We at Sales Tactics have our team of professionals who set up confirmed appointments, let that be CXOs, VPs etc. for your sales team and help our clients create pipeline and accelerate revenue. This practice is completely based on your company's product, solutions or services and value propositions.</p>\n                                    \n                                                      </div>\n                                                    </div>\t<!-- row -->\n                                                    <br>\n                                                    <div class=\"row about-us-text\">\n                                                        <div class=\"col-md-12\">\n                                                        <p><b>How we make it work:</b></p>\n                                                        <br>\n                                                        <p >After a detailed discussion about your company’s product or services we make a custom sales script.</p>\n                                                        <p> We negotiate on our pricing plans according to the number of seats you would like us to appoint on your campaign or a pay per appointment.</p>\n                                                        <p> We then train our resources about your company products or services, build a custom database consisting on your key accounts or matching specifications.</p>\n                                                        <p> Our goal is then to find the right prospects, separating them from the crowd, create a demand for your product or service and set an appointment.</p>\n                                                        <p> This set appointment is then passed on to you once our quality analyst approves it.  </p>\n                                                        <p> Next, you have your first call with the prospect on the scheduled date and time. We then follow.</p>\n                                                      </div>\n                                                    </div>\t<!-- row -->\n                                                  <br>\n                                                  <br>\n                                                         <div class=\"row about-us-text\">\n                                                        <div class=\"col-md-12\">\n                                                        <p><b>EVENT REGISTRATION & CONFRIMATION</b></p>\n                                                        <br>\n                                                        <p >Have problem promoting a corporate event/conference? We spread awareness, generate a demand amongst prospects and invite them to your event. Want more attendees at your booth in a conference? Building a rapport with your clients or prospects is what helps you stay at the back of their mind. We follow up with the attendees from the list you provide us via phone and email and confirm their visit at your booth. Our team of highly experienced telemarketers will call your desired prospects from the key accounts you desire and generate interest among them about your product or service helping you be more visible in the market, hence zeroing in on them.</p>\n                                    \n                                                      </div>\n                                                    </div>\t<!-- row -->\n                                                    <br>\n                                                    <div class=\"row about-us-text\">\n                                                        <div class=\"col-md-12\">\n                                                        <p><b>ACCOUNT PROFILING</b></p>\n                                                        <br>\n                                                        <p >Based on our account profile report and contacts discovery lists, we keep your sales management team informed of the right prospects, addressing their business challenges and delivering new business openings allowing them to sell more efficiently and successfully. This Account Profiling Practice gives you the opportunity to gain in depth understanding on how a potential customer operates, how they are structured, who are the key decision makers, their decision making process, who they currently purchase from as well as their future plans. We help you understand your market by analyzing your product. We give you an in depth knowledge of the accounts you can target and every minute detail which would help you close a deal. We take the pain and spoon feed your sales team with prospects who would be the decision makers for their company.</p>\n                                    \n                                                      </div>\n                                                    </div>\t<!-- row -->\n                                                </div>\n                                            </div>\n                                        </div>\n                           </div>\n\n\n\n                         \n            </div>\n            \n         \n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login-page/servicedetails/servicedetails.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/login-page/servicedetails/servicedetails.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServicedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicedetailsComponent", function() { return ServicedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ServicedetailsComponent = /** @class */ (function () {
    function ServicedetailsComponent(route) {
        this.route = route;
    }
    ServicedetailsComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.paramMap.get("name");
        console.log(this.name);
    };
    ServicedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicedetails',
            template: __webpack_require__(/*! ./servicedetails.component.html */ "./src/app/login-page/servicedetails/servicedetails.component.html"),
            styles: [__webpack_require__(/*! ./servicedetails.component.css */ "./src/app/login-page/servicedetails/servicedetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ServicedetailsComponent);
    return ServicedetailsComponent;
}());



/***/ }),

/***/ "./src/app/login-page/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/login-page/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2Uvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/login-page/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/login-page/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--Page Title-->\n \n  <!--End Page Title-->\n\n<section class=\"blog-page-section\">\n  <div class=\"auto-container\">\n      <div class=\"row clearfix\">\n\n\n              <!--News Block-->\n              <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n                  <div class=\"inner-box\">\n                      <div class=\"image\">\n                          <a [routerLink]=\"['/servicedetails/XareltoLawsuits']\"><img src=\"../assets/images/resource/news-8.jpg\" alt=\"\" /></a>\n                        </div>\n                        <div class=\"lower-content\">\n                          <div class=\"upper\">\n                              <h3><a style=\"text-transform:uppercase;\" [routerLink]=\"['/servicedetails/XareltoLawsuits']\">Xarelto Lawsuits</a></h3>\n                            </div>\n                            <div class=\"more\">\n                              <a [routerLink]=\"['/servicedetails/XareltoLawsuits']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <!--News Block-->\n                <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n                  <div class=\"inner-box\">\n                      <div class=\"image\">\n                          <a [routerLink]=\"['/servicedetails/InvokanaLawsuits']\"><img src=\"../assets/images/resource/news-9.jpg\" alt=\"\" /></a>\n                        </div>\n                        <div class=\"lower-content\">\n                          <div class=\"upper\">\n                              <h3><a style=\"text-transform:uppercase;\" [routerLink]=\"['/servicedetails/InvokanaLawsuits']\">Invokana Lawsuits</a></h3>\n                            </div>\n                            <div class=\"more\">\n                              <a [routerLink]=\"['/servicedetails/InvokanaLawsuits']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"image\">\n                            <a [routerLink]=\"['/servicedetails/IVCLawsuits']\"><img src=\"../assets/images/resource/news-2.jpg\" alt=\"\" /></a>\n                          </div>\n                          <div class=\"lower-content\">\n                            <div class=\"upper\">\n                                <h3><a style=\"text-transform:uppercase;\" [routerLink]=\"['/servicedetails/IVCLawsuits']\">IVC Filter Lawsuits</a></h3>\n                              </div>\n                              <div class=\"more\">\n                                <a [routerLink]=\"['/servicedetails/IVCLawsuits']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n          \n            <!--News Block-->\n            <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"image\">\n                      <a [routerLink]=\"['/servicedetails/LEADGENERATION']\"><img  src=\"../assets/images/resource/news-1.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"lower-content\">\n                      <div class=\"upper\">\n                          <h3><a [routerLink]=\"['/servicedetails/LEADGENERATION']\">LEAD GENERATION</a></h3>\n                        </div>\n                        <div class=\"more\">\n                          <a  class=\"read-more\" [routerLink]=\"['/servicedetails/LEADGENERATION']\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--News Block-->\n            <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"image\">\n                      <a [routerLink]=\"['/servicedetails/TELEMARKETING']\"><img src=\"../assets/images/resource/news-2.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"lower-content\">\n                      <div class=\"upper\">\n                          <h3><a [routerLink]=\"['/servicedetails/TELEMARKETING']\">TELEMARKETING SERVICES</a></h3>\n                        </div>\n                        <div class=\"more\">\n                          <a [routerLink]=\"['/servicedetails/TELEMARKETING']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--News Block-->\n            <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"image\">\n                      <a [routerLink]=\"['/servicedetails/B2BLEADGENERATION']\"><img src=\"../assets/images/resource/news-3.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"lower-content\">\n                      <div class=\"upper\">\n                          <h3><a [routerLink]=\"['/servicedetails/B2BLEADGENERATION']\">B2B LEAD GENERATION & CONTENT SYNDICATION</a></h3>\n                        </div>\n                        <div class=\"more\">\n                          <a [routerLink]=\"['/servicedetails/B2BLEADGENERATION']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--News Block-->\n            <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"image\">\n                      <a [routerLink]=\"['/servicedetails/CONTENTMARKETING']\"><img src=\"../assets/images/resource/news-4.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"lower-content\">\n                      <div class=\"upper\">\n                          <h3><a [routerLink]=\"['/servicedetails/CONTENTMARKETING']\">CONTENT MARKETING</a></h3>\n                        </div>\n                        <div class=\"more\">\n                          <a [routerLink]=\"['/servicedetails/CONTENTMARKETING']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--News Block-->\n            <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"image\">\n                      <a [routerLink]=\"['/servicedetails/PIPELINEDEVELOPMENT']\"><img src=\"../assets/images/resource/news-5.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"lower-content\">\n                      <div class=\"upper\">\n                          <h3><a [routerLink]=\"['/servicedetails/PIPELINEDEVELOPMENT']\">PIPELINE DEVELOPMENT</a></h3>\n                        </div>\n                        <div class=\"more\">\n                          <a  [routerLink]=\"['/servicedetails/PIPELINEDEVELOPMENT']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--News Block-->\n            <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"image\">\n                      <a [routerLink]=\"['/servicedetails/BETTERROI']\"><img src=\"../assets/images/resource/news-6.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"lower-content\">\n                      <div class=\"upper\">\n                          <h3><a [routerLink]=\"['/servicedetails/BETTERROI']\">BETTER ROI WITH PRECISE TARGETING</a></h3>\n                        </div>\n                        <div class=\"more\">\n                          <a [routerLink]=\"['/servicedetails/BETTERROI']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--News Block-->\n            <div class=\"news-block col-md-4 col-sm-6 col-xs-12\">\n              <div class=\"inner-box\">\n                  <div class=\"image\">\n                      <a [routerLink]=\"['/servicedetails/APPOINTMENTSETTING']\"><img src=\"../assets/images/resource/news-7.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"lower-content\">\n                      <div class=\"upper\">\n                          <h3><a [routerLink]=\"['/servicedetails/APPOINTMENTSETTING']\">APPOINTMENT SETTING</a></h3>\n                        </div>\n                        <div class=\"more\">\n                          <a [routerLink]=\"['/servicedetails/APPOINTMENTSETTING']\" class=\"read-more\"><span class=\"fa fa-chevron-circle-right\"></span> Read More</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n      \n            \n        </div>\n    </div>\n</section>\n\n  \n\n\n  \n  <!--Services Section-->\n  <section class=\"services-section\">\n    <div class=\"auto-container\">\n        <!--Sec Title-->\n          <div class=\"sec-title centered\">\n            <h2>Our services</h2>\n              <div class=\"text\">We help you generate high-quality online sales leads by implementing highly structured, persuasive Internet marketing campaigns.</div>\n          </div>\n          \n          <div class=\"row clearfix\">\n            \n              <!--Services Block-->\n              <div class=\"services-block col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"icon-box\">\n                        <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/services-1.png\" alt=\"\" /></span>\n                      </div>\n                      <h3><a >Search Engine Optimization</a></h3>\n                      <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                      <a  class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                  </div>\n              </div>\n              \n              <!--Services Block-->\n              <div class=\"services-block col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"icon-box\">\n                        <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/services-2.png\" alt=\"\" /></span>\n                      </div>\n                      <h3><a >Pay Per Click Management</a></h3>\n                      <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                      <a  class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                  </div>\n              </div>\n              \n              <!--Services Block-->\n              <div class=\"services-block col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"icon-box\">\n                        <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/services-3.png\" alt=\"\" /></span>\n                      </div>\n                      <h3><a >Display Advertising</a></h3>\n                      <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                      <a  class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                  </div>\n              </div>\n              \n              <!--Services Block-->\n              <div class=\"services-block col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"icon-box\">\n                        <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/services-7.png\" alt=\"\" /></span>\n                      </div>\n                      <h3><a href=\"email-marketing.html\">Email Marketing</a></h3>\n                      <div class=\"text\">The masterbuilder human happiness of one rejects dislikes avoids...</div>\n                      <a href=\"email-marketing.html\" class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                  </div>\n              </div>\n              \n              <!--Services Block-->\n              <div class=\"services-block col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"icon-box\">\n                        <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/services-8.png\" alt=\"\" /></span>\n                      </div>\n                      <h3><a href=\"web-development.html\">Web Development</a></h3>\n                      <div class=\"text\">Desires to obtain painitself because it is pain, but because occasionally...</div>\n                      <a href=\"web-development.html\" class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                  </div>\n              </div>\n              \n              <!--Services Block-->\n              <div class=\"services-block col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"icon-box\">\n                        <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/services-9.png\" alt=\"\" /></span>\n                      </div>\n                      <h3><a href=\"mobile-optimizations.html\">Mobile Optimization</a></h3>\n                      <div class=\"text\">Explain to you how all this onemistaken idea of denouncing pleasure...</div>\n                      <a href=\"mobile-optimizations.html\" class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                  </div>\n              </div>\n              \n          </div>\n          \n      </div>\n  </section>\n  <!--End Services Section-->\n  \n  <!--Marketing Section Two-->\n  <section class=\"marketing-section-two\" style=\"background-image:url(../../assets/../../assets/../assets/images/background/3.png)\">\n    <div class=\"auto-container\">\n        <div class=\"steps-blocks\">\n            <div class=\"row clearfix\">\n              \n              <!--Step Block-->\n                  <div class=\"step-block col-md-3 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/market-icon-1.png\" alt=\"\" /></span>\n                          </div>\n                          <h3><a href=\"#\">Get Client’s Goal</a></h3>\n                          <div class=\"step-number\">Step 01</div>\n                      </div>\n                  </div>\n                  \n                  <!--Step Block-->\n                  <div class=\"step-block col-md-3 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/market-icon-2.png\" alt=\"\" /></span>\n                          </div>\n                          <h3><a href=\"#\">Realize Challenges</a></h3>\n                          <div class=\"step-number\">Step 02</div>\n                      </div>\n                  </div>\n                  \n                  <!--Step Block-->\n                  <div class=\"step-block col-md-3 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/market-icon-3.png\" alt=\"\" /></span>\n                          </div>\n                          <h3><a href=\"#\">Find Solution</a></h3>\n                          <div class=\"step-number\">Step 03</div>\n                      </div>\n                  </div>\n                  \n                  <!--Step Block-->\n                  <div class=\"step-block col-md-3 col-sm-6 col-xs-12\">\n                    <div class=\"inner-box\">\n                        <div class=\"icon-box\">\n                            <span class=\"icon\"><img src=\"../../assets/../assets/images/icons/market-icon-4.png\" alt=\"\" /></span>\n                          </div>\n                          <h3><a href=\"#\">Final Result</a></h3>\n                          <div class=\"step-number\">Step 04</div>\n                      </div>\n                  </div>\n                  \n            </div>\n          </div>\n          <h3>We’ll Make Your Web Marketing! More Efficient!</h3>\n          <a href=\"contact.html\" class=\"theme-btn btn-style-one\">Get a Quote</a>\n      </div>\n  </section>\n  <!--End Marketing Section-->\n  \n  <!--Case Modern Section-->\n  <section class=\"case-modern-section\">\n    <div class=\"auto-container\">\n      \n        <!--Sec Title-->\n          <div class=\"sec-title centered\">\n            <h2>Case Studies</h2>\n              <div class=\"text\">We help you generate high-quality online sales leads by implementing highly structured, persuasive Internet marketing campaigns.</div>\n          </div>\n      \n        <div class=\"row clearfix\">\n            \n              <!--Case Block Two-->\n              <div class=\"case-block-two col-md-4 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"image\">\n                          <img src=\"../../assets/../assets/images/resource/case-7.jpg\" alt=\"\" />\n                          <div class=\"overlay-box\">\n                            <a href=\"cases-single.html\" class=\"theme-btn btn-style-one\">Visit Site</a>\n                          </div>\n                      </div>\n                      <div class=\"lower-box\">\n            <h3><a href=\"cases-single.html\">Dell Audience Monitoring</a></h3>\n                          <div class=\"text\">Number one position in search engine ads 25.54% increase... </div>\n                          <a href=\"cases-single.html\" class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                      </div>\n                  </div>\n              </div>\n              \n              <!--Case Block Two-->\n              <div class=\"case-block-two col-md-4 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"image\">\n                          <img src=\"../../assets/../assets/images/resource/case-8.jpg\" alt=\"\" />\n                          <div class=\"overlay-box\">\n                            <a href=\"cases-single.html\" class=\"theme-btn btn-style-one\">Visit Site</a>\n                          </div>\n                      </div>\n                      <div class=\"lower-box\">\n            <h3><a href=\"cases-single.html\">Website SEO Optimization</a></h3>\n                          <div class=\"text\">Manual Penalty Removal and 233% increase in Organic Traffic.</div>\n                          <a href=\"cases-single.html\" class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                      </div>\n                  </div>\n              </div>\n              \n              <!--Case Block Two-->\n              <div class=\"case-block-two col-md-4 col-sm-6 col-xs-12\">\n                <div class=\"inner-box\">\n                    <div class=\"image\">\n                          <img src=\"../../assets/../assets/images/resource/case-9.jpg\" alt=\"\" />\n                          <div class=\"overlay-box\">\n                            <a href=\"cases-single.html\" class=\"theme-btn btn-style-one\">Visit Site</a>\n                          </div>\n                      </div>\n                      <div class=\"lower-box\">\n            <h3><a href=\"cases-single.html\">Conference Marketing</a></h3>\n                          <div class=\"text\">Number one position in search engine ads 25.54% increase... </div>\n                          <a href=\"cases-single.html\" class=\"read-more\"><span class=\"icon flaticon-right-arrow-1\"></span> Read More</a>\n                      </div>\n                  </div>\n              </div>\n    \n          </div>\n          \n          <div class=\"text-center btn-box\">\n            <a href=\"#\" class=\"theme-btn btn-style-one\">View More</a>\n          </div>\n          \n      </div>\n      \n  </section>"

/***/ }),

/***/ "./src/app/login-page/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/login-page/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-page.component */ "./src/app/login-page/login-page.component.ts");



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
        _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"].moduleName = "Service";
        _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"].isServiceStyle = true;
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/login-page/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/login-page/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/services/data-access.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data-access.service.ts ***!
  \*************************************************/
/*! exports provided: DataAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAccessService", function() { return DataAccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': 'content-type',
        'Access-Control-Request-Method': 'POST',
        'Origin': 'http://invokana-claim.com',
        'Referer': 'http://invokana-claim.com/'
    })
};
var DataAccessService = /** @class */ (function () {
    function DataAccessService(client) {
        this.client = client;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.currentMessage = this.messageSource.asObservable();
    }
    DataAccessService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataAccessService.prototype.createInvokanaForm = function (invokanaModel) {
        return this.client.post('api/Main/PostInvokanObj', invokanaModel, httpOptions);
    };
    DataAccessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataAccessService);
    return DataAccessService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\AngProjects\VishnuProjects\AMMS1\AMMS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map