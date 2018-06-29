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
		var e = new Error('Cannot find module "' + req + '".');
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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newproduct/newproduct.component */ "./src/app/newproduct/newproduct.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'products', component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] },
    { path: 'products/new', component: _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_3__["NewproductComponent"] },
    { path: 'products/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: 'products/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
    { path: '', redirectTo: "/products", pathMatch: 'full' },
    { path: '**', redirectTo: "/product" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<div id='appWrapper'>\n  <h1>Commerce Manager</h1>\n  <router-outlet></router-outlet>\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('test');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newproduct/newproduct.component */ "./src/app/newproduct/newproduct.component.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"],
                _newproduct_newproduct_component__WEBPACK_IMPORTED_MODULE_8__["NewproductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='detBox'>\n  <h3>Details for {{product.name}}</h3><br><br>\n  <h4>Name: {{product.name}}</h4>\n  <h4>Qty: {{product.qty}}</h4>\n  <h4>Price: ${{product.price}}</h4>\n  <div class='btnBox'>\n    <button class='btn' [routerLink]=\"['/products']\">Back</button>\n    <button class='btn' (click)='delete(product._id)' *ngIf=\"product.qty == 0\">Delete</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(productservice, route, router) {
        this.productservice = productservice;
        this.route = route;
        this.router = router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productservice.getProduct(this.route.params['value'].id)
            .subscribe(function (data) {
            if (!data['error']) {
                _this.product = data;
            }
            else {
                console.log(data);
            }
        });
    };
    DetailsComponent.prototype.delete = function (id) {
        var _this = this;
        this.productservice.delete(id)
            .subscribe(function (data) {
            if (!data['error']) {
                _this.router.navigate(['/products']);
            }
            else {
                console.log(data);
            }
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red{\n    font-size:10px;\n    color:red;\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Update {{product.name}}</h3>\n<div>\n  <form (submit)='submit()'>\n    Name: <input type=\"text\" name=\"newProduct.name\" id=\"newProduct.name\" required minlength='3' [(ngModel)]='newProduct.name' #name='ngModel' class='form-control'>\n    Qty: <input type=\"number\" oninput=\"validity.valid||(value='');\" name=\"newProduct.qty\" id=\"newProduct.qty\" required min='0' [(ngModel)]='newProduct.qty' #qty='ngModel' class='form-control'>\n    Price: $ <input type=\"number\" pattern=\"[0-9]+(\\.[0-9]{0,2})?%?\" name=\"newProduct.price\" id=\"newProduct.price\" required min='0' [(ngModel)]='newProduct.price' #price='ngModel' class='form-control'>\n    <br>\n    <p class='red' *ngIf=\"qty.dirty && !qty.valid\">Qty must be a value of 0 or more</p>\n    <p class='red' *ngIf=\"name.dirty && !name.valid\">Name must have at least 3 characters</p>\n    <p class='red' *ngIf='price.dirty && !price.valid'>Price must be a valid price of 0.01 or more</p>\n    <p class='red' *ngFor=\"let error of errors\">{{error}}</p>\n    <button class='btn' (click)='reset()' type='button'>Reset</button>\n    <button class='btn' type='button' [routerLink]=\"['/products']\">Cancel</button>\n    <button class='btn' *ngIf='name.valid && qty.valid && price.valid && (name.dirty || price.dirty || qty.dirty)'>Update</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(productservice, route, router) {
        this.productservice = productservice;
        this.route = route;
        this.router = router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errors = [];
        this.newProduct = { name: '', qty: undefined, price: undefined };
        this.productservice.getProduct(this.route.params['value'].id)
            .subscribe(function (data) {
            if (!data['error']) {
                _this.product = data;
                _this.reset();
            }
            else {
                for (var _i = 0, _a = Object.keys(data['error']['errors']); _i < _a.length; _i++) {
                    var error = _a[_i];
                    _this.errors.push(data['error']['errors'][error].message);
                }
            }
        });
    };
    EditComponent.prototype.reset = function () {
        this.newProduct.name = this.product.name;
        this.newProduct.qty = this.product.qty;
        this.newProduct.price = this.product.price;
    };
    EditComponent.prototype.submit = function () {
        var _this = this;
        this.errors = [];
        this.productservice.update(this.newProduct)
            .subscribe(function (data) {
            if (!data['error']) {
                _this.router.navigate(['/products']);
            }
            else {
                console.log(data['error']);
                for (var _i = 0, _a = Object.keys(data['error']['errors']); _i < _a.length; _i++) {
                    var error = _a[_i];
                    _this.errors.push(data['error']['errors'][error].message);
                }
            }
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/newproduct/newproduct.component.css":
/*!*****************************************************!*\
  !*** ./src/app/newproduct/newproduct.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red{\n    font-size:10px;\n    color:red;\n}"

/***/ }),

/***/ "./src/app/newproduct/newproduct.component.html":
/*!******************************************************!*\
  !*** ./src/app/newproduct/newproduct.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='formBox'>\n  <form (submit)='submit()'>\n      Name: <input type=\"text\" name=\"newProduct.name\" id=\"newProduct.name\" required minlength='3' [(ngModel)]='newProduct.name' #name='ngModel' class='form-control'>\n      Qty: <input type=\"number\" oninput=\"validity.valid||(value='');\" name=\"newProduct.qty\" id=\"newProduct.qty\" required min='1' [(ngModel)]='newProduct.qty' #qty='ngModel' class='form-control'>\n      Price: $ <input type=\"number\" pattern=\"[0-9]+(\\.[0-9]{0,2})?%?\" name=\"newProduct.price\" id=\"newProduct.price\" required min='0.01' step=0.01 [(ngModel)]='newProduct.price' #price='ngModel' class='form-control'>\n      <br>\n      <p class='red' *ngIf=\"qty.dirty && !qty.valid\">Qty must be a whole number of 1 or more</p>\n      <p class='red' *ngIf=\"name.dirty && !name.valid\">Name must have at least 3 characters</p>\n      <p class='red' *ngIf='price.dirty && !price.valid'>Price must be a valid price of 0.01 or more</p>\n      <p class='red' [(ngModel)]='error'>{{error[0]}}</p>\n      <button id='sub' class='btn' type='submit' *ngIf='name.valid && qty.valid && price.valid'>Submit</button>\n      <button class='btn' [routerLink]=\"['/products']\" type=\"button\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/newproduct/newproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newproduct/newproduct.component.ts ***!
  \****************************************************/
/*! exports provided: NewproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewproductComponent", function() { return NewproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewproductComponent = /** @class */ (function () {
    function NewproductComponent(productservice, router) {
        this.productservice = productservice;
        this.router = router;
    }
    NewproductComponent.prototype.ngOnInit = function () {
        this.errors = [];
        this.newProduct = { name: '', price: undefined, qty: 0 };
    };
    NewproductComponent.prototype.submit = function () {
        var _this = this;
        this.productservice.newProduct(this.newProduct).subscribe(function (data) {
            if (!data['error']) {
                _this.router.navigate(['/products']);
            }
            else {
                for (var _i = 0, _a = Object.keys(data['error']['errors']); _i < _a.length; _i++) {
                    var error = _a[_i];
                    _this.errors.push(data['error']['errors'][error].message);
                }
            }
        });
    };
    NewproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newproduct',
            template: __webpack_require__(/*! ./newproduct.component.html */ "./src/app/newproduct/newproduct.component.html"),
            styles: [__webpack_require__(/*! ./newproduct.component.css */ "./src/app/newproduct/newproduct.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewproductComponent);
    return NewproductComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
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


var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get('/api/products');
    };
    ProductService.prototype.newProduct = function (product) {
        return this._http.post('/api/products', product);
    };
    ProductService.prototype.getProduct = function (id) {
        return this._http.get('/api/products/' + id);
    };
    ProductService.prototype.delete = function (id) {
        return this._http.delete('/api/products/' + id);
    };
    ProductService.prototype.update = function (product) {
        return this._http.put('/api/products/' + product._id, product);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class='btn' [routerLink]=\"['/products/new']\"> Add New Product</button>\n\n<table class='table table-striped' *ngIf=\"products[0]\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Qty</th>\n      <th>Price</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let product of products\">\n      <td>{{product._id}}</td>\n      <td>{{product.name}}</td>\n      <td>{{product.qty}}</td>\n      <td>${{product.price}}</td>\n      <td><button class='btn' [routerLink]=\"['/products', product._id]\">Details</button><button class='btn' [routerLink]=\"['/products', product._id, 'edit']\">Edit</button></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(productservice) {
        this.productservice = productservice;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('component');
        this.productservice.getProducts().subscribe(function (data) {
            console.log(data);
            if (data[0] != 'error') {
                _this.products = data;
            }
            else {
                console.log(data['error']);
            }
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
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

module.exports = __webpack_require__(/*! /Users/noah/Documents/CodingDojo/MEAN project/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map