webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<header-bar></header-bar>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n  \n\n<footer-bar></footer-bar>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__warranty_warranty_component__ = __webpack_require__("../../../../../src/app/warranty/warranty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nationalprogramming_nationalprogramming_component__ = __webpack_require__("../../../../../src/app/nationalprogramming/nationalprogramming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__warranty_warranty_component__["a" /* WarrantyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__nationalprogramming_nationalprogramming_component__["a" /* NationalProgrammingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* rootRouterConfig */], { useHash: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warranty_warranty_component__ = __webpack_require__("../../../../../src/app/warranty/warranty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nationalprogramming_nationalprogramming_component__ = __webpack_require__("../../../../../src/app/nationalprogramming/nationalprogramming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");





var rootRouterConfig = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'warranty', component: __WEBPACK_IMPORTED_MODULE_1__warranty_warranty_component__["a" /* WarrantyComponent */] },
    { path: 'nationalprogramming', component: __WEBPACK_IMPORTED_MODULE_2__nationalprogramming_nationalprogramming_component__["a" /* NationalProgrammingComponent */] },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_3__order_order_component__["a" /* OrderComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/contact/contact-component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.form-content {\n  width: 90%;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.form-content .sd-form-control {\n  display: block;\n  margin-bottom: 10px;\n  width: 100%;\n  padding: 10px;\n}\n.form-content textarea.sd-form-control {\n  max-width: 100%;\n}*/\n\n.ordersubmit:focus {\n    box-shadow: none;\n    border: none;\n    outline-color: transparent;\n    outline-width: 0px;\n}\n\n\n\n@media screen and (max-width:600px) and (min-width: 200px) {\n    .company-form {\n        padding-left: 18px !important;\n    }\n    .company-form2 {\n        padding-left: 0px !important;\n    }\n    .company-form3 {\n        padding-left: 18px !important;\n        text-align: center !important;\n    } \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-30\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <label class=\"subtitle-label\">Our quote process is fast and simple.</label>\n        <p class=\"font-size-18\" style=\"color:#767375;\">We place your company label on each sign prior to shipment.</p>\n    </div>\n</div>\n<div class=\"row mt-30\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <label class=\"subtitle-label\">Get Started : Step 1</label>\n    </div>\n</div>\n<div class=\"row mt-30\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <p class=\"subtitle-label\" style=\"font-size:18px;\">Company Details</p>\n    </div>\n</div>\n<form (ngSubmit)=\"submitForm()\" [formGroup]=\"contactForm\" novalidate>\n    <div class=\"form-content\">\n        <div class=\"row margin-top-10\">\n            <div class=\"col-lg-2 col-xs-1\">\n            </div>\n            <div class=\"col-lg-4 col-xs-12 company-form\" style=\"padding-left:56px;\">\n                <label class=\"width-100percent\" style=\"margin-bottom:10px;\">\n                    <input type=\"text\" formControlName=\"companyname\" class=\"sd-form-control width-100percent\" placeholder=\"Company Name\" style=\"padding:5px;border: 1px solid #eaeaea;\">\n                </label>\n                <label class=\"width-100percent\">\n                    <input type=\"text\" formControlName=\"companycontactname\" class=\"sd-form-control width-100percent\" placeholder=\"Company Contact Name\" style=\"padding:5px;border: 1px solid #eaeaea;\">\n                </label>\n                <label class=\"width-100percent\">\n                    <input type=\"email\" formControlName=\"companycontactemail\" class=\"sd-form-control width-100percent\" placeholder=\"Company Contact Email\" style=\"padding:5px;border: 1px solid #eaeaea;\">\n                </label>\n            </div>\n            <div class=\"col-lg-4 col-xs-12\">\n                <label class=\"width-100percent\">\n                    <textarea formControlName=\"companyaddress\" class=\"sd-form-control width-100percent\" placeholder=\"Company Address:(street/state/zipcode etc)\" rows=\"5\" style=\"border: 1px solid #eaeaea;padding:5px;\"></textarea>\n                </label>\n            </div>\n        </div>\n        <div class=\"row mt-30\">\n            <div class=\"col-lg-12 col-xs-12 text-center\">\n                <p class=\"subtitle-label\" style=\"font-size:18px;\">Project Details</p>\n            </div>\n        </div>\n        <div class=\"row margin-top-10\">\n            <div class=\"col-lg-2 col-xs-1\">\n            </div>\n            <div class=\"col-lg-4 col-xs-12 company-form\" style=\"padding-left:56px;\">\n                <label class=\"width-100percent\">\n                    <input type=\"text\" formControlName=\"projectname\" class=\"sd-form-control width-100percent\" placeholder=\"Project Name\" style=\"padding:5px;border: 1px solid #eaeaea;\">\n                </label>\n                <label class=\"width-100percent\" style=\"margin-bottom:10px;\">\n                    <input type=\"text\" formControlName=\"projectmangername\" class=\"sd-form-control width-100percent\" placeholder=\"Name Of Project Manager\" style=\"padding:5px;border: 1px solid #eaeaea;\">\n                </label>\n                <label class=\"width-100percent\" style=\"margin-bottom:10px;\">\n                    <input type=\"email\" formControlName=\"projectmangeremail\" class=\"sd-form-control width-100percent\" placeholder=\"Email Of Project Manager\" style=\"padding:5px;border: 1px solid #eaeaea;\">\n                </label>\n                <label class=\"width-100percent\" style=\"margin-bottom:10px;\">\n                    <input type=\"number\" formControlName=\"quantilessets\" class=\"sd-form-control width-100percent\" placeholder=\"Quantiles Sets Needed\" style=\"padding:5px;border: 1px solid #eaeaea;\">\n                </label>\n            </div>\n            <div class=\"col-lg-4 col-xs-12 company-form\">\n                <label class=\"width-100percent\">\n                    <textarea formControlName=\"projectmangeraddress\" class=\"sd-form-control width-100percent\" placeholder=\"Address Of Project Manager:(street/state/zipcode etc)\" rows=\"3\" style=\"border: 1px solid #eaeaea;padding:5px;\"></textarea>\n                </label>\n                <label class=\"width-100percent\">\n                    <textarea formControlName=\"deliveryaddress\" class=\"sd-form-control width-100percent\" placeholder=\"Delivery Address\" rows=\"3\" style=\"border: 1px solid #eaeaea;padding:5px;\"></textarea>\n                </label>\n            </div>\n        </div>\n        <div class=\"row company-form\">\n            <div class=\"col-lg-2 col-xs-0\">\n            </div>\n            <div class=\"col-lg-8 col-xs-12 company-form2\" style=\"padding-left: 56px;\">\n                <label class=\"width-100percent\" style=\"margin-bottom:10px;\">\n                    <input type=\"text\" formControlName=\"quantilessets\" class=\"sd-form-control width-100percent\" placeholder=\"Upload Project file\" style=\"padding:5px;border: 1px solid #eaeaea;\">\n                </label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-2 col-xs-0\">\n            </div>\n            <div class=\"col-lg-8 col-xs-12 company-form\" style=\"padding-left:56px;\">\n                <p class=\"margin-bottom-0\"><b>Make Sure Your Project File include Following</b></p>\n                <p class=\"margin-bottom-0\">Overall Dimensions,Letter Height,Face Color,Return Color,Edegcap Color,Font Style Names,PMS color,Please specify your mounting: flush mount or raceway or wireway</p>\n                <p><b>Note:</b> For an accurate and fast question, Please send vector artwork in one of the following formats: PDF,EPS or AI.We will accept GIF and JPEG files, but vectora artwork will be required for production.</p>\n            </div>\n        </div>\n        <div class=\"form-submit row margin-bottom-30\">\n            <div class=\"col-lg-2 col-xs-0\"></div>\n            <div class=\"col-lg-3 col-xs-12 company-form3\" style=\"padding-left:56px;\">\n                <button type=\"submit\" class=\"btn btn-info btn-lg form-submit ordersubmit\" style=\"background-color:#d35402;border-color:#d35402;padding-left:42px;padding-right: 42px;border-radius:30px;\">\n                    <span class=\"glyphicon glyphicon-send\"></span><span style=\"padding-left:10px\"> Submit !</span>\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n<!-- <h2>Contact Reactive Form</h2>\n\n<form (ngSubmit)=\"submitForm()\" [formGroup]=\"contactForm\" novalidate>\n  <div class=\"form-content\">\n    <label>\n      Name:\n      <input type=\"text\" formControlName=\"name\" class=\"sd-form-control\" placeholder=\"Enter your name.\">\n    </label>\n    <label>\n      Email:\n      <input type=\"email\" formControlName=\"email\" class=\"sd-form-control\" placeholder=\"Enter your email.\">\n    </label>\n    <label>\n      Content:\n      <textarea formControlName=\"content\" class=\"sd-form-control\" placeholder=\"Content here.\"></textarea>\n    </label>\n    <div class=\"form-submit\">\n      <button type=\"submit\">Submit</button>\n    </div>\n  </div>\n</form>\n\n<div class=\"form-value\">\n  Form value:\n  <pre>\n    {{contactForm.value | json}}\n  </pre>\n  <p>\n    Status: {{contactForm.status}}\n  </p>\n  <p>\n    Valid: {{contactForm.valid}}\n  </p>\n  <p>Submit then open console to see full form.</p>\n</div> -->\n<!-- <div class=\"form-value\">\n  Form value:\n  <pre>\n    {{contactForm.value | json}}\n  </pre>\n  <p>\n    Status: {{contactForm.status}}\n  </p>\n  <p>\n    Valid: {{contactForm.valid}}\n  </p>\n  <p>Submit then open console to see full form.</p>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_CustomValidators__ = __webpack_require__("../../../../../src/app/forms/CustomValidators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            companycontactname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            companycontactemail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__forms_CustomValidators__["a" /* default */].validateEmail]],
            companyaddress: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(150)]],
            projectname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            projectmangername: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            projectmangeremail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__forms_CustomValidators__["a" /* default */].validateEmail]],
            quantilessets: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            projectmangeraddress: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(150)]],
            deliveryaddress: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(150)]],
        });
    };
    ContactComponent.prototype.submitForm = function () {
        console.log(this.contactForm);
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact-component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*#footer-container {\n    background-color: #eaeaea;\n    height: auto;\n    overflow: hidden;\n    bottom: 0;\n\n}*/\n/*#footer-main {\n\n    margin-left: 20%; \n    margin-right: 20%;\n}\n\ntd {\n    vertical-align: top;\n    width: 50%;\n\n}\n#col1 {\n    margin-left:10px; \n    padding-right: 30px;\n    padding-bottom: 20px;\n}\n\n#col2 {\n    padding-left:30px;\n    margin-right:10px; \n    border: solid;\n    border-top: none;\n    border-right:none;\n    border-bottom: none; \n    border-width: 1px;\n    border-color: #cbcbcb;\n    padding-right: 20px;\n    margin-right: 30px; \n}\n\n#footer-copyright {\n    text-align: center;\n    vertical-align: middle;\n    color: white;\n    background-color: #322c35;\n    height: 40px;\n    line-height: 40px; \n    margin:  none;\n    font-size: 10px;\n}\n\n.heading {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-size: 25px;\n}\n.content {\n    font-size: 12px;\n\n}*/\n.footer-company{\n    background-color: #eaeaea;\n}\n\n@media screen and (max-width: 576px){\n    .footer-paraone{\n        border-right: none !important;\n    }\n    .footer-paratwo{\n        border:none !important;\n        padding-bottom: 30px !important;\n        padding-left: 51px !important;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"footer-company\">\n    <div class=\"row\">\n        <div class=\"col-lg-1 col-md-2 col-sm-1 col-xs-1\">\n        </div>\n        <div class=\"col-lg-5 col-md-4 col-sm-5 col-xs-10  footer-paraone padding-top-50 padding-bottom-50\" style=\"border-right:1px solid #322c35;\">\n            <p class=\"font-family-roboto-slab-light font-size-35\">About Us</p>\n            <p class=\"font-family-open-sans-regular font-size-18\"> We are a <b>whole sale</b> sign manufacturer with over <b>20 years of custom sign experience</b> manufacturing commercial Signage and Graphics.</p>\n            <p class=\"font-family-open-sans-regular font-size-18\">\n                We are <b>UL listed</b> and products and products will be labeled bearing the mark. With <b>National Manufacturing Faculties</b> and <b>Global Logistics & Shipping support</b>- We handle it all !!\n            </p>\n        </div>\n        <div class=\"col-lg-5 col-md-4 col-sm-5 col-xs-11 footer-paratwo padding-top-50 padding-bottom-50\" style=\";padding-left: 33px;\">\n            <p class=\"font-family-roboto-slab-light font-size-35\">Contact Information</p>\n            <div class=\"content\" style=\"padding-top:5px;\"><span class=\"glyphicon glyphicon-earphone\"></span><span class=\"font-family-open-sans-regular font-size-18\" style=\"padding-left:10px\">1800-265-1265265-232</span></div>\n            <div class=\"content\" style=\"padding-top:5px;\"><span class=\"glyphicon glyphicon-send\"></span><span style=\"padding-left:10px\" class=\"font-family-open-sans-regular font-size-18\">sales@chicagoDiscountSigns.com</span></div>\n            <div class=\"content font-family-open-sans-regular font-size-18\" style=\"padding-top:5px;\">\n                Please send your signage info by e-mail.\n                <div class=\"font-family-open-sans-regular font-size-18\">We <b>cannot</b> provide immediate phone quotations.</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" style=\"background-color:#322c35\">\n        <div class=\"col-lg-12 text-center\">\n            <p style=\"color:#FFF;margin-top:10px;margin-bottom:10px;font-size:19px\">CopyRight</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footer-bar',
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forms/CustomValidators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    /**
     * sample from http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
     */
    CustomValidators.validateEmail = function (c) {
        var EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return CustomValidators;
}());
/* harmony default export */ __webpack_exports__["a"] = (CustomValidators);


/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n    width: 100%;\n    height: 100%;\n    margin-right: 0;\n    margin-left: 0;\n    overflow-x: hidden;\n}\n\n#header-container {\n    background-color: white;\n    /*border-style: solid;*/\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-color: gray;\n    border-width: 1px;\n    height: auto;\n    overflow: hidden;\n}\n\n#header-main {\n\n    margin-left: 20%;\n    margin-right: 20%;\n}\n\n#title {\n\n    /*font: \"PMingLiU\";*/\n    font-size: 35px;\n    color: #D35400;\n}\n\n.left-items {\n    float: left;\n}\n\n.right-items {\n    float: right;\n    text-align: right;\n}\n\n.common-font {\n\n    /*font-family: \"HelveticaNeue-Light\";*/\n    /*color: gray;*/\n    margin-top: 3px;\n    margin-bottom: 0px;\n    color: #312832;\n}\n.font-color-entire-site{\n    color: #312832 !important;\n}\n\ntd {\n\n    float: right;\n}\n\n.right-items label {\n\n    font-size: 13px;\n    padding-top: 20px;\n}\n\n#request-quote-button {\n    background-color: #b9540f;\n    border: 0;\n    box-shadow: none;\n    border-radius: 20px;\n    width: 221px;\n    height: 41px;\n    margin-top: 5px;\n    color: white;\n    font-size: 17px;\n    font-family: \"HelveticaNeue-Light\";\n    background-image: url(/app/assets/images/email-white.png);\n    background-repeat: no-repeat;\n    background-position: 16px 16px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: right;\n}\n\n#request-quote-button:hover {\n    background-color: red;\n}\n\n.custom-navbar {\n    background-color: #FFF;\n}\n\n.custom-navbar .navbar-nav>li {\n    border-right: 1px solid #F1F1F1;\n}\n\n.mobile-navbar {\n    background-color: #FFF;\n    border-bottom-color: #F1F1F1;\n    color: #000;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    /*border:none;*/\n}\n\n.mobile-toggle {\n    border-color: #FFF;\n}\n\n.mobile-toggle:hover {\n    background-color: #FFF;\n}\n\n.mobile-toggle .icon-bar {\n    background-color: #b9540f;\n}\n\n.drop:hover {\n    color: #BC5322 !important;\n}\n\n\n\n@media screen and (max-width:340px) and (min-width:310px) {\n\n    #title {\n        font-size: 21px !important;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header-container\" class=\"hidden-xs\">\n    <div class=\"row \">\n\n        <div class=\"col-lg-6 col-md-5 col-sm-5 padding-top-10 padding-bottom-10\" style=\"padding-left: 92px\">\n            <label id=\"title\" class=\"font-family-oswald-regular\" style=\"font-weight:300;margin-bottom:0px\">Chicago Discount Signs</label>\n            <div class=\"common-font font-size-18 font-family-open-sans-regular\" style=\"font-weight:300;\">We are a Wholesale Extension of Your Fabrication Shop</div>\n            <div class=\"common-font font-size-16 font-family-open-sans-regular\" style=\"font-weight:300;\">We WholeSale All Types of Signage & Graphics </div>\n            <div class=\"common-font font-size-14 margin-bottom-10\" style=\"font-weight:300;\">We place your company label on each sign prior to shipment.</div>\n        </div>\n        <div class=\"col-lg-2 col-md-3 col-sm-0\"></div>\n        <div class=\"col-lg-4 col-md-3 col-sm-6 padding-top-10 padding-bottom-10\" style=\"padding-left: 0px\">\n            <div class=\"margin-top-10\">\n                <!-- <img align=center src=\"../app/assets/images/clock.png\" /> -->\n                <i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"color:#D35400;font-size:20px\"></i>\n                <label class=\"common-font font-size-18 font-family-open-sans-regular\" style=\"color:#312832;font-weight:300;padding-left:7px\">Open 24/7 to meet your whole needs</label>\n            </div>\n            <div style=\"text-align:center;padding-right:37px\">\n                <span _ngcontent-c1=\"\" class=\"glyphicon glyphicon-send\" style=\"color:#D35400;font-size:20px;left: -5px\"></span>\n                <label class=\"common-font font-family-open-sans-regular\" style=\"font-size:16px;padding-top:6px;font-weight:300\">Sales@ChicagoDiscountSigns.com</label>\n            </div>\n            <div style=\"text-align:center;margin-top:13px;padding-right:27px\">\n                <button type=\"button\" class=\"btn btn-info font-family-open-sans-regular\" style=\"background-color:#D35400;border-color:transparent;font-size:20px;font-weight:300;border-radius:23px;padding: 6px 31px\">\n                    <i class=\"fa fa-envelope-o\" aria-hidden=\"true\" style=\"padding-right:6px\"></i> Request A Free Quote\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<nav class=\"navbar navbar-default custom-navbar hidden-xs\" style=\"margin-bottom:0px;box-shadow: 0 1px 9px rgba(0, 0, 0, 0.1);\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-2 col-md-3 col-sm-1\"></div>\n            <div class=\"col-lg-9 col-md-9 col-sm-11\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a class=\"font-size-16 font-family-open-sans-regular\" routerLink=\"/home\" style=\"color:#777\">Home</a></li>\n                    <li><a class=\"font-size-16 font-family-open-sans-regular\" routerLink=\"/nationalprogramming\" style=\"color:#777\">National Programs</a></li>\n                    <li><a class=\"font-size-16 font-family-open-sans-regular\" routerLink=\"/order\" style=\"color:#777\">Delivery & Shipping</a></li>\n                    <li><a class=\"font-size-16 font-family-open-sans-regular\" routerLink=\"/warranty\" style=\"color:#777\">Warranty</a></li>\n                    <li><a class=\"font-size-16 font-family-open-sans-regular\" href=\" #\" style=\"color:#777\">Financing</a></li>\n                    <li style=\"border-right:none;\"><a class=\"font-size-16 font-family-open-sans-regular\" routerLink=\"/contactus\" style=\"color:#777\">Contact Us</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- Nav Bar For Mobile Device Only Starts -->\n<nav class=\"navbar navbar-inverse visible-xs mobile-navbar\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle mobile-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" id=\"title\" href=\"#\">Chicago Discount Signs</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li><a class=\"drop\" routerLink=\"/home\">Home</a></li>\n                <li><a class=\"drop\" routerLink=\"/nationalprogramming\">National Programs</a></li>\n                <li><a class=\"drop\" routerLink=\"/order\">Delivery & Shipping</a></li>\n                <li><a class=\"drop\" routerLink=\"/warranty\">Warranty</a></li>\n                <li><a class=\"drop\" href=\"#\">Financing</a></li>\n                <li><a class=\"drop\" routerLink=\"/contactus\">Contact Us</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- Nav Bar For Mobile Device Only Ends -->"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header-bar',
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
            template: __webpack_require__("../../../../../src/app/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-carousel .carousel-control.left,\n.home-carousel .carousel-control.right {\n    background: transparent;\n    width: 2%;\n}\n\n.home-carousel:after {\n    content: '';\n    position: absolute;\n    top: 92%;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 0;\n    height: 0;\n    border-bottom: solid 50px #FFF;\n    border-left: solid 50px transparent;\n    border-right: solid 50px transparent;\n}\n\n.home-background-color {\n    background-color: #52474B;\n}\n\n.text-color {\n    color: #51464A;\n}\n\n.image-Box {\n    background: url('/app/assets/images/np1.jpeg');\n    /*background-size: 100% 100%;*/\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 200px;\n}\n\n.ordering .spanone {\n    position: absolute;\n    width: 102px;\n    left: 43%;\n    right: 50%;\n    top: 12%;\n}\n\n.ordering .spananother {\n    position: absolute;\n    width: 146px;\n    left: 35%;\n    right: 50%;\n    font-size: 16px;\n    top: 38%;\n}\n\n.ordering .spanthird {\n    position: absolute;\n    width: 138px;\n    top: 48%;\n    left: 39%;\n    right: 50%;\n    font-size: 16px;\n}\n\n.ordering .spanfourth {\n    position: absolute;\n    width: 138px;\n    top: 58%;\n    left: 35%;\n    right: 50%;\n    font-size: 16px;\n}\n\n.ordering .spanfifth {\n    position: absolute;\n    width: 235px;\n    top: 69%;\n    left: 24%;\n    right: 50%;\n    font-size: 16px;\n}\n\n.orange {\n    vertical-align: middle;\n    color: white;\n    position: relative;\n    background-color: #52474B;\n    height: 226px !important;\n    width: 336px !important;\n    z-index: 3;\n    border-bottom-left-radius: 43%;\n    float: right;\n    margin-right: 2px;\n}\n\n.orange:after {\n    content: '';\n    position: absolute;\n    left: 100%;\n    width: 0;\n    height: 0;\n    border-top: solid 113px transparent;\n    border-bottom: solid 113px transparent;\n    border-left: solid 109px #52474B;\n}\n\n.green {\n    color: white;\n    position: relative;\n    background-color: #eaeaea;\n    height: 226px !important;\n    width: 380px !important;\n    z-index: 2;\n    margin-right: 50px;\n    margin-top: 2px;\n    float: right;\n}\n\n.green:after {\n    content: '';\n    position: absolute;\n    left: 100%;\n    width: 0;\n    height: 0;\n    border-top: solid 113px transparent;\n    border-bottom: solid 113px transparent;\n    border-left: solid 112px #eaeaea;\n}\n\n.green:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: solid 113px transparent;\n    border-bottom: solid 113px transparent;\n    border-left: solid 112px white;\n}\n\n.blue {\n    color: white;\n    position: relative;\n    background-color: #ededed;\n    height: 226px !important;\n    width: 383px !important;\n    border-top-right-radius: 50%;\n    float: right;\n    margin-right: 100px;\n}\n\n.blue:after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: 100%;\n    margin-left: 250px;\n    width: 0;\n    height: 0;\n}\n\n.blue:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: solid 115px transparent;\n    border-bottom: solid 115px transparent;\n    border-left: solid 111px white;\n}\n\n.customcarousel .glyphicon-chevron-left:before {\n    position: absolute;\n    top: 24px;\n    left: 0px;\n    font-size: 26px;\n}\n\n.customcarousel .glyphicon-chevron-right:before {\n    position: absolute;\n    top: 24px;\n    left: 0px;\n    font-size: 26px;\n}\n\n.home-carousel .carousel-control {\n    color: #000;\n    opacity: 0.9;\n}\n\n.step1 {\n    background-color: #4C4245;\n    height: 130px;\n    color: white;\n    text-align: center;\n    position: relative;\n}\n\n.step1:after {\n    content: '';\n    position: absolute;\n    top: 92%;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 0;\n    height: 0;\n    border-top: solid 50px #4C4245;\n    border-left: solid 50px transparent;\n    border-right: solid 50px transparent;\n}\n\n.step2 {\n    background-color: #eaeaea;\n    height: 140px;\n    color: #4C4245;\n    text-align: center;\n    position: relative;\n}\n\n.step2:after {\n    content: '';\n    position: absolute;\n    top: 92%;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 0;\n    height: 0;\n    border-top: solid 50px #eaeaea;\n    border-left: solid 50px transparent;\n    border-right: solid 50px transparent;\n}\n\n.step3 {\n    background-color: #eaeaea;\n    height: 140px;\n    color: #4C4245;\n    text-align: center;\n    position: relative;\n}\n\n.active{\n    background-color: #4C4245 !important;\n    color: #FFF !important;\n}\n.active:after{\n    border-left-color: #4C4245 !important; \n}\n.notActive{\n    background-color: #eaeaea !important;\n    color: #4C4245 !important;\n}\n.notActive:after{\n    border-left-color: #eaeaea !important;\n}\n\n\n\n\n@media screen and (max-width: 577px){\n\n    .carousel-img {\n        height: 408px !important;\n    }\n    .mycarousel-text {\n        top: 120px !important;\n    }\n    .home-carousel:after {\n        top: 89% !important;\n    }\n    .dateCards {\n        padding-left: 100px !important;\n        padding-right: 100px !important;\n        padding-bottom: 30px !important;\n    }\n    .shipment {\n        margin-top: 24px !important;\n    }\n    .certificatesone{\n        padding: 80px !important;\n    }\n    .certificatestwo{\n        padding: 80px !important;\n    }\n\n}\n\n/* Media Query For Iphone 6 Starts */\n\n\n\n/* Media Query For Iphone 6 Ends */\n\n\n/* Media Query For Iphone 6 Plus Starts */\n\n\n\n/* Media Query For Iphone 6 Plus Ends */\n\n\n/* Media Query For Ipad 768 * 1024 Starts  */\n\n@media screen and (max-width:770px) and (min-width:760px) {\n\n    .orange {\n        height: 195px !important;\n        width: 219px !important;\n    }\n    .orange:after {\n        border-top: solid 97px transparent !important;\n        border-bottom: solid 97px transparent !important;\n    }\n    .orange .spananother {\n        font-size: 14px !important;\n        left: 24% !important;\n        top: 35% !important;\n    }\n    .orange .spanthird {\n        font-size: 14px !important;\n        left: 29% !important;\n        top: 46% !important;\n    }\n    .orange .spanfourth {\n        font-size: 14px !important;\n        left: 24% !important;\n        top: 57% !important;\n    }\n    .orange .spanfifth {\n        font-size: 14px !important;\n        left: 8% !important;\n        top: 69% !important;\n    }\n    .green {\n        height: 195px !important;\n        width: 244px !important;\n        margin-right: 21px !important;\n        margin-top: -1px !important;\n    }\n    .green:after,\n    .green:before {\n        border-top: solid 97px transparent !important;\n        border-bottom: solid 97px transparent !important;\n    }\n    .green .spananother {\n        left: 38% !important;\n        font-size: 13px !important;\n    }\n    .green .spanthird {\n        left: 44% !important;\n        top: 45% !important;\n        font-size: 13px !important;\n    }\n    .green .spanfourth {\n        left: 44% !important;\n        top: 55% !important;\n        font-size: 13px !important;\n    }\n    .green .spanfifth {\n        left: 29% !important;\n        top: 65% !important;\n        font-size: 13px !important;\n    }\n    .blue {\n        height: 195px !important;\n        width: 266px !important;\n        margin-right: 20px !important;\n    }\n    .blue:before {\n        border-top: solid 97px transparent !important;\n        border-bottom: solid 97px transparent !important;\n    }\n    .blue .spananother {\n        left: 42% !important;\n        font-size: 13px !important;\n    }\n    .blue .spanthird {\n        left: 50% !important;\n        font-size: 13px !important;\n    }\n    .blue .spanfourth {\n        font-size: 13px !important;\n        left: 50% !important;\n    }\n    .blue .spanfifth {\n        font-size: 13px !important;\n        left: 34% !important;\n    }\n}\n\n\n\n/* Media Query For Ipad 768 * 1024 Ends   */\n\n\n/* Media Query For Desktop 1024 * 768 Starts  */\n\n@media screen and (max-width: 1030px) and (min-width: 1020px) {\n\n    .orange {\n        height: 187px !important;\n        width: 276px !important;\n    }\n\n    .orange:after {\n        border-top: solid 93px transparent !important;\n        border-bottom: solid 93px transparent !important;\n    }\n\n    .orange .spananother {\n        font-size: 15px !important;\n        left: 31% !important;\n        top: 35% !important;\n    }\n    .orange .spanthird {\n        font-size: 15px !important;\n        left: 36% !important;\n        top: 46% !important;\n    }\n    .orange .spanfourth {\n        font-size: 15px !important;\n        left: 33% !important;\n        top: 57% !important;\n    }\n    .orange .spanfifth {\n        font-size: 15px !important;\n        left: 19% !important;\n        top: 69% !important;\n    }\n    .green {\n        height: 187px !important;\n        width: 326px !important;\n        margin-top: -3px !important;\n        margin-right: 24px !important;\n    }\n    .green:before,\n    .green:after {\n        border-top: solid 93px transparent !important;\n        border-bottom: solid 93px transparent !important;\n    }\n    .blue {\n        height: 187px !important;\n        width: 337px !important;\n        margin-top: -3px !important;\n        margin-right: 36px !important;\n    }\n    .blue:before {\n        border-top: solid 93px transparent !important;\n        border-bottom: solid 93px transparent !important;\n    }\n    .singupButton {\n        padding-top: 14px !important;\n        padding-bottom: 14px !important;\n    }\n    .singupParaone {\n        font-size: 17px !important;\n    }\n}\n\n\n\n/* Media Query For Desktop 1024 * 768 Ends  */\n\n\n/* Media Query For Dektop 1366 * 768 Starts */\n\n@media screen and (max-width: 1400px) and (min-width: 1300px) {\n\n    .orange {\n        margin-right: -38px !important;\n    }\n    .blue {\n        margin-right: 130px !important;\n    }\n}\n\n\n\n\n/* Media Query For Dektop 1366 * 768 Ends */\n\n\n/*  Media Query For Desktop 1440 * 900 Starts */\n\n@media screen and (max-width: 1500px) and (min-width: 1430px) {\n\n    .orange {\n        margin-right: -44px !important;\n    }\n    .green {\n        margin-right: 59px !important;\n    }\n    .blue {\n        margin-right: 164px !important;\n    }\n}\n\n\n\n\n/*  Media Query For Desktop 1440 * 900 Ends */\n\n\n/* Media Qeury For Desktop 1600 * 900 Starts */\n\n@media screen and (max-width: 1620px) and (min-width: 1580px) {\n\n    .orange {\n        margin-right: -79px !important;\n    }\n    .green {\n        margin-right: 83px !important;\n    }\n    .blue {\n        margin-right: 241px !important;\n    }\n}\n\n\n\n\n/* Media Query For Dekstop 1600 * 900 Ends */\n\n\n/* Media Query For Desktop 1680 * 1050 Starts  */\n\n@media screen and (max-width: 1700px) and (min-width: 1670px) {\n\n    .orange {\n        margin-right: -102px !important;\n    }\n    .green {\n        margin-right: 83px !important;\n    }\n    .blue {\n        margin-right: 267px !important;\n    }\n}\n\n\n\n\n/* Media Query For Desktop 1680 * 1050 Ends */\n\n@media screen and (min-width: 1910px) {\n\n    .orange {\n        margin-right: -168px !important;\n    }\n    .green {\n        margin-right: 98px !important;\n    }\n    .blue {\n        margin-right: 361px !important;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Carousel Starts -->\n<div id=\"myCarousel\" class=\"carousel slide home-carousel\" data-ride=\"carousel\">\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"item active\" *ngIf='image_one'>\n            <img src=\"{{image_one}}\" alt=\"Chania\" width=\"100%\" class=\"height-600 carousel-img\">\n        </div>\n        <div class=\"item\" *ngIf='image_two'>\n            <img src=\"{{image_two}}\" alt=\"Chania\" width=\"100%\" class=\"height-600 carousel-img\">\n        </div>\n        <div class=\"item\" *ngIf='image_three'>\n            <img src=\"{{image_three}}\" alt=\"Flower\" width=\"100%\" class=\"height-600 carousel-img\">\n        </div>\n        <div class=\"item\" *ngIf='image_four'>\n            <img src=\"{{image_four}}\" alt=\"Flower\" width=\"100%\" class=\"height-600 carousel-img\">\n        </div>\n    </div>\n    <!-- Carousel Text Starts-->\n    <div class=\"width-100percent position-absolute top-180 mycarousel-text\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n                <p class=\"margin-bottom-0 font-family-open-sans-regular\" style=\"font-size:50px;font-weight:300;color:#2E262D\">Free Delivery & NationWide Shipping</p>\n                <p class=\"margin-bottom-20 font-family-open-sans-regular\" style=\"font-size:25px;font-weight:300;\">Free Delivery & NationWide Shipping</p>\n                <a href=\"\" class=\"margin-top-10 text-white border-radius-10 home-background-color font-size-25 font-family-open-sans-regular\" style=\"font-weight:400;border-radius:24px;padding:15px 65px\">\n                  Get Quote\n                </a>\n            </div>\n        </div>\n    </div>\n    <!-- Carousel Text Ends -->\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control customcarousel hidden-xs\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" style=\"background-image:url('../assets/images/arrow-bg-prev.png');background-size:100% 100%;background-position:center;height:77px\"></span>\n      <span class=\"sr-only\">Previous</span>\n      <!-- <img src=\"/app/assets/images/arrow-bg-prev.png\"> -->\n    </a>\n    <a class=\"right carousel-control customcarousel hidden-xs\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" style=\"background-image:url('../assets/images/arrow-bg-next.png');background-size:100% 100%;background-position:center;height:77px\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n<!-- Carousel Ends -->\n<div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\" style=\"margin-top:-25px\">\n        <i class=\"fa fa-calendar font-size-20\" aria-hidden=\"true\"></i>\n    </div>\n</div>\n<div style=\"padding-top: 50px;padding-bottom: 50px\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n            <label class=\"subtitle-label font-family-roboto-slab-light font-size-35\">Order Placed Today Will Ship on</label>\n        </div>\n    </div>\n    <div class=\"row margin-top-20\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n            <i class=\"fa fa-angle-down font-size-28\" aria-hidden=\"true\"></i>\n        </div>\n    </div>\n    <div class=\"row margin-top-20\">\n        <!-- <div class=\"col-lg-3 col-md-2 col-sm-2 col-xs-0\">\n        </div> -->\n        <div class=\"col-lg-12 col-md-8 col-sm-8 col-xs-0\" style=\"text-align:center;padding-left:180px;padding-right:180px\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 dateCards\">\n                    <div class=\"text-center position-absolute margin-left-auto margin-right-auto\" style=\"left:0;right:0\">\n                        <span class=\"fa-stack fa-lg\">\n                     <i class=\"fa fa-circle-thin fa-stack-2x home-background-color border-radius-50percent\"></i>\n                     <i class=\"fa fa-calendar fa-stack-1x\" style=\"color:#FFF\"></i>\n                    </span>\n                    </div>\n                    <div class=\"text-center marging-top-18 padding-all-4 backgroung-light-gray\">\n                        <p class=\"margin-bottom-0 margin-top-15 font-family-open-sans-regular shipment\" style=\"color:#312832;font-weight:300;font-size:30px\">Shipment Date for</p>\n                        <p class=\"margin-bottom-20 text-color\" style=\"font-size:28px\"><b>front lit letters</b></p>\n                    </div>\n                    <div class=\"text-center text-white home-background-color padding-all-10\">\n                        {{today | date:'d MMMM'}}\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 dateCards\">\n                    <div class=\"text-center position-absolute margin-left-auto margin-right-auto\" style=\"left:0;right:0\">\n                        <span class=\"fa-stack fa-lg\">\n                     <i class=\"fa fa-circle-thin fa-stack-2x home-background-color border-radius-50percent\"></i>\n                     <i class=\"fa fa-calendar fa-stack-1x\" style=\"color:#FFF\"></i>\n                    </span>\n                    </div>\n                    <div class=\"text-center marging-top-18 padding-all-4 backgroung-light-gray\">\n                        <p class=\"margin-bottom-0 margin-top-15 font-family-open-sans-regular shipment\" style=\"color:#312832;font-weight:300;font-size:30px\">Shipment Date for</p>\n                        <p class=\"margin-bottom-20 text-color\" style=\"font-size:28px\"><b>reverse lit letters</b></p>\n                    </div>\n                    <div class=\"text-center text-white home-background-color padding-all-10\">\n                        {{tomorrowdate | date:'d MMMM'}}\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 dateCards\">\n                    <div class=\"text-center position-absolute margin-left-auto margin-right-auto\" style=\"left:0;right:0\">\n                        <span class=\"fa-stack fa-lg\">\n                     <i class=\"fa fa-circle-thin fa-stack-2x home-background-color border-radius-50percent\"></i>\n                     <i class=\"fa fa-calendar fa-stack-1x\" style=\"color:#FFF\"></i>\n                    </span>\n                    </div>\n                    <div class=\"text-center marging-top-18 padding-all-4 backgroung-light-gray\">\n                        <p class=\"margin-bottom-0 margin-top-15 font-family-open-sans-regular shipment\" style=\"color:#312832;font-weight:300;font-size:30px\">Shipment Date for</p>\n                        <p class=\"margin-bottom-20 text-color\" style=\"font-size:28px\"><b>cabinets</b></p>\n                    </div>\n                    <div class=\"text-center text-white home-background-color padding-all-10\">\n                        {{dayaftertomorowdate | date:'d MMMM'}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row backgroung-light-gray\">\n    <div class=\"col-lg-3 col-md-2 col-sm-2 col-xs-0\">\n    </div>\n    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-0\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12 text-center\">\n                <img src=\"../assets/images/ulisted.png\" style=\"padding:36px;\" class=\"width-100percent certificatesone\">\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12 text-center\">\n                <img src=\"../assets/images/made-in-usa.png\" style=\"padding:36px;\" class=\"width-100percent certificatestwo\">\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12 text-center\">\n                <!-- <img src=\"../app/assets/images/five-year.png\" style=\"padding:36px;\" class=\"width-100percent\"> -->\n            </div>\n        </div>\n    </div>\n</div>\n<div style=\"padding-top: 50px;padding-bottom: 50px\">\n    <div *ngFor=\"let item of imagearray; index as i; even as isEven\">\n        <div class=\"row\" *ngIf='isEven' [ngClass]=\"{'margin-top-30': i > 1}\">\n            <div class=\"col-lg-12 col-md-8 col-sm-10\" style=\"text-align:center;padding-left:180px;padding-right: 180px\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 text-center\">\n                        <div class=\"background-size-100per-100per\" [ngStyle]=\"{'background': ' url(' + imagearray[i].src + ') no-repeat  center ','height':200 + 'px'}\">\n                        </div>\n                        <div class=\"backgroung-grey text-center\">\n                            <p class=\"padding-all-18 text-uppercase font-family-open-sans-regular font-size-20\" style=\"color: #312832;font-weight:400\">{{imagearray[i].name}}{{i}}</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 col-md-6 col-sm-6 text-center\">\n                        <div class=\"background-size-100per-100per\" [ngStyle]=\"{'background': ' url(' + imagearray[i+1].src + ') no-repeat  center ','height':200 + 'px'}\">\n                        </div>\n                        <div class=\"backgroung-grey text-center\">\n                            <p class=\"padding-all-18 text-uppercase font-family-open-sans-regular font-size-20\" style=\"color: #312832;font-weight:400\">{{imagearray[i+1].name}} {{i+1}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row backgroung-light-gray padding-top-50 padding-bottom-50\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <p class=\"margin-bottom-0 font-family-roboto-slab-light font-size-35\" style=\"color: #767375;\">Any Size - Any Style - Any Quantity</p>\n        <p class=\"margin-bottom-0 font-family-open-sans-regular font-size-16\" style=\"color: #767375\">1000 Square Feet of Fabrication facility Space </p>\n        <p class=\"font-size-16 font-family-open-sans-regular\" style=\"color: #767375\">We place your company label on each sign prior to shipment </p>\n    </div>\n</div>\n<div class=\"row padding-top-50 padding-bottom-50\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <label class=\"subtitle-label font-family-roboto-slab-light font-size-35\" style=\"font-weight:300\">Easy 3 Step Ordering Process</label>\n    </div>\n</div>\n<div class=\"row ordering hidden-xs\" style=\"padding-bottom:50px;\">\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n        <div class=\"orange\" (click)=\"clickedone()\" [ngClass]=\"{'active':Statusone , 'notActive':Statusfour }\">\n            <span class=\"spanone font-family-roboto-slab-light font-size-35\">Step 1</span>\n            <span class=\"spananother font-family-open-sans-regular font-size-16\">Send us your file &</span>\n            <span class=\"spanthird font-family-open-sans-regular font-size-16\">Project Details,</span>\n            <span class=\"spanfourth font-family-open-sans-regular font-size-16\">You will recieve a</span>\n            <span class=\"spanfifth font-family-open-sans-regular font-size-16\">customized estimated link back</span>\n        </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n        <div class=\"green\" (click)=\"clickedtwo()\" [ngClass]=\"{'active':Statustwo}\">\n            <span class=\"spanone greenspanone font-family-roboto-slab-light font-size-35\" style=\"color:#312832\" [ngClass]=\"{'active':Statustwo}\">Step 2</span>\n            <span class=\"spananother font-family-open-sans-regular font-size-16\" style=\"color:#312832;width:180px;font-weight:400\" [ngClass]=\"{'active':Statustwo}\">Click \"Make my Sign\" on</span>\n            <span class=\"spanthird font-family-open-sans-regular font-size-16\" style=\"color:#312832;font-weight:400\" [ngClass]=\"{'active':Statustwo}\">the estimated link,</span>\n            <span class=\"spanfourth font-family-open-sans-regular font-size-16\" style=\"color:#312832;left:39%;font-weight:400\" [ngClass]=\"{'active':Statustwo}\">You will recieve a</span>\n            <span class=\"spanfifth font-family-open-sans-regular font-size-16\" style=\"color:#312832;left:26%;width:259px;font-weight:400\" [ngClass]=\"{'active':Statustwo}\">customized completed notification</span>\n        </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n        <div class=\"blue\" (click)=\"clickedthree()\" [ngClass]=\"{'active':Statusthree}\">\n            <span class=\"spanone font-family-roboto-slab-light font-size-35\" style=\"color:#312832\" [ngClass]=\"{'active':Statusthree}\">Step 3</span>\n            <span class=\"spananother font-family-open-sans-regular font-size-16\" style=\"color:#312832;width:180px;font-weight:400\" [ngClass]=\"{'active':Statusthree}\">Click \"Ship my Sign\" on</span>\n            <span class=\"spanthird font-family-open-sans-regular font-size-16\" style=\"color:#312832;left:45%;font-weight:400\" [ngClass]=\"{'active':Statusthree}\">the completion,</span>\n            <span class=\"spanfourth font-family-open-sans-regular font-size-16\" style=\"color:#312832;left:45%;font-weight:400\" [ngClass]=\"{'active':Statusthree}\">notification link</span>\n            <span class=\"spanfifth font-family-open-sans-regular font-size-16\" style=\"color:#312832;left:26%;width:251px;font-weight:400\" [ngClass]=\"{'active':Statusthree}\">Your new sign is on its way-!!</span>\n        </div>\n    </div>\n</div>\n<!-- STEPS DIV TO BE SHOWN IN MOBILE ONLY STARTS -->\n<div class=\"row margin-top-20 margin-bottom-40 visible-xs\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-10 step1\">\n        <p class=\"margin-bottom-0 padding-top-15 font-size-22\">Step 1</p>\n        <p class=\"margin-bottom-0 margin-top-10 font-size-16\">Send us Your File & Project Details,You will recieve a customized estimated link back</p>\n    </div>\n    <div class=\"col-xs-1\"></div>\n</div>\n<div class=\"row margin-top-20 margin-bottom-40 visible-xs\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-10 step2\">\n        <p class=\"margin-bottom-0 padding-top-15 font-size-22\">Step 2</p>\n        <p class=\"margin-bottom-0 margin-top-10 font-size-16\">Click \"Make my Sign\" on the estimated link,You will recieve a customized completed notification.</p>\n    </div>\n    <div class=\"col-xs-1\"></div>\n</div>\n<div class=\"row margin-top-20 margin-bottom-40 visible-xs\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-10 step3\">\n        <p class=\"margin-bottom-0 padding-top-15 font-size-22\">Step 3</p>\n        <p class=\"margin-bottom-0 margin-top-10 font-size-16\">Click \"Ship my Sign\" on the completion, notification link,Your new sign is on its way-!!</p>\n    </div>\n    <div class=\"col-xs-1\"></div>\n</div>\n<!-- STEPS DIV TO BE SHOWN IN MOBILE ONLY ENDS -->\n<div class=\"padding-bottom-50 hidden-xs\">\n    <div class=\"row\" style=\"margin-bottom:5px;\">\n        <div class=\"col-lg-12\" style=\"text-align: center;\">\n            <button type=\"button\" class=\"btn btn-primary primary-orange-background-color\" style=\" border-color: transparent;padding:25px 59px;border-radius: 74px;\">\n                <p class=\"margin-bottom-0 singupParaone font-family-open-sans-regular\" style=\"color:#FFF;font-size:30px;font-weight:300\">Start Your New Order Sign Now</p>\n                <p class=\"font-family-open-sans-regular\" style=\"color:#FFF;font-weight:300;font-size: 18px\">Lightning Speed Turnaround</p>\n            </button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\" style=\"text-align:center;\">\n            <p class=\"margin-bottom-0 font-family-open-sans-regular\" style=\"font-size:25px;font-weight:300\">We Ship NationWide</p>\n            <p class=\"margin-bottom-0 font-family-open-sans-regular\" style=\"font-size:25px;font-weight:300\">Deliver On Time,Every Time!</p>\n        </div>\n    </div>\n</div>\n<!-- Sign Up Button For Mobile Only Starts -->\n<div class=\"margin-top-20 margin-bottom-20 visible-xs\">\n    <div class=\"row\">\n        <div class=\"col-xs-1\">\n        </div>\n        <div class=\"col-xs-10\" style=\"background-color:#d35402;padding:15px;text-align:center;border-radius:20px;\">\n            <p class=\"margin-bottom-0\" style=\"color:#FFF;font-size:18px;\">Start Your New Order Sign Now</p>\n            <p style=\"color:#FFF;font-size:16px\">Lightning Speed Turnaround</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <p class=\"margin-bottom-0\" style=\"font-size:21px;\">We Ship NationWide</p>\n            <p style=\"font-size:20px;\">Deliver On Time,Every Time!</p>\n        </div>\n    </div>\n</div>\n<!-- Sign Up Button For Mobile Only Ends -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.Statusone = false;
        this.Statustwo = false;
        this.Statusthree = false;
        this.Statusfour = false;
        this.today = Date.now();
        this.tomorrowdate = Date.now();
        this.dayaftertomorowdate = Date.now();
        this.image_one = 'https://ununsplash.imgix.net/photo-1416339134316-0e91dc9ded92?q=75&fm=jpg&s=883a422e10fc4149893984019f63c818';
        this.image_two = 'https://ununsplash.imgix.net/photo-1416339684178-3a239570f315?q=75&fm=jpg&s=c39d9a3bf66d6566b9608a9f1f3765af';
        this.image_three = 'https://ununsplash.imgix.net/photo-1416339276121-ba1dfa199912?q=75&fm=jpg&s=9bf9f2ef5be5cb5eee5255e7765cb327';
        this.image_four = 'https://ununsplash.imgix.net/photo-1416339684178-3a239570f315?q=75&fm=jpg&s=c39d9a3bf66d6566b9608a9f1f3765af';
        this.imagearray = [{ 'src': 'http://via.placeholder.com/460x200', 'name': 'Channel Letters' }, { 'src': 'http://via.placeholder.com/460x200', 'name': 'Custom Cabinets' }, { 'src': 'http://via.placeholder.com/460x200', 'name': 'Routed Products' }, { 'src': 'http://via.placeholder.com/460x200', 'name': 'Digital Printing' }];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.tomorrowdate = new Date(this.today);
        this.tomorrowdate.setDate(this.tomorrowdate.getDate() + 1);
        console.log(this.tomorrowdate.toLocaleDateString());
        this.dayaftertomorowdate = new Date(this.tomorrowdate);
        this.dayaftertomorowdate.setDate(this.dayaftertomorowdate.getDate() + 1);
        console.log(this.dayaftertomorowdate.toLocaleDateString());
    };
    HomeComponent.prototype.clickedone = function (event) {
        this.Statusone = true;
        this.Statustwo = false;
        this.Statusthree = false;
        this.Statusfour = false;
    };
    HomeComponent.prototype.clickedtwo = function (event) {
        this.Statustwo = true;
        this.Statusone = false;
        this.Statusthree = false;
        this.Statusfour = true;
    };
    HomeComponent.prototype.clickedthree = function (event) {
        this.Statusthree = true;
        this.Statusone = false;
        this.Statustwo = false;
        this.Statusfour = true;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nationalprogramming/nationalprogramming.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-underline:after {\n    content: '';\n    position: absolute;\n    /*top: 92%;*/\n    left: -13px;\n    right: 0;\n    margin: 0 auto;\n    width: 62px;\n    height: 0;\n    border:2px solid #000;\n    top: -1px\n}\nspan {\n    border-bottom: 1px solid #000;\n    padding-bottom: 5px;\n    position: relative;\n}\n\nspan:before {\n    content: '';\n    position: absolute;\n    width: 63px;\n    border-bottom: 3px solid #000;\n    bottom: -2px;\n    left: 50%;\n    -webkit-transform: translateX(-62%);\n            transform: translateX(-62%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nationalprogramming/nationalprogramming.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding-top-50 padding-bottom-50\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <!-- <label class=\"font-family-roboto-slab-light font-size-35\" style=\"font-weight:400\">National Programming</label> -->\n        <span class=\"font-family-roboto-slab-light font-size-35\" style=\"font-weight:400\">National Programming</span>\n    </div>\n</div>\n<!-- <div class=\"row\">\n    <div class=\"col-lg-4\"></div>\n    <div class=\"col-lg-4 text-underline\" style=\"border-bottom:2px solid\"></div>\n    <div class=\"col-lg-4\"></div>\n</div> -->\n<div class=\"padding-bottom-50\">\n    <div *ngFor=\"let item of imagearray; index as i; even as isEven\">\n        <div class=\"row\" style=\"padding-right:83px\"  *ngIf='isEven' [ngClass]=\"{'margin-top-30': i > 1}\">\n            <div class=\"col-lg-1 col-md-2 col-sm-2 col-xs-12\">\n            </div>\n            <div class=\"col-lg-11 col-md-10 col-sm-10 col-xs-12\" style=\"padding-left:0px\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-5 col-sm-5 col-xs-12\">\n                        <div class=\"background-size-100per-100per\" [ngStyle]=\"{'background': ' url(' + imagearray[i].src + ') no-repeat  center ','height':228 + 'px'}\"></div>\n                        <div class=\"backgroung-grey text-center\">\n                            <p class=\"padding-all-18 text-uppercase font-family-open-sans-regular font-size-20\" style=\"color: #312832;font-weight:400\">{{imagearray[i].name}}</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 col-md-5 col-sm-5 col-xs-12\">\n                        <div class=\"background-size-100per-100per\" [ngStyle]=\"{'background': ' url(' + imagearray[i+1].src + ') no-repeat center ','height':228 + 'px'}\"></div>\n                        <div class=\"backgroung-grey text-center\">\n                            <p class=\"padding-all-18 text-uppercase font-family-open-sans-regular font-size-20\" style=\"color: #312832;font-weight:400\">{{imagearray[i+1].name}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row padding-bottom-50\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\n        <p class=\"font-family-roboto-slab-light font-size-35 margin-bottom-0\">Any Size - Any Style - Any Quantity</p>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-1 col-md-2 col-sm-2\">\n    </div>\n    <div class=\"col-lg-11 col-md-10 col-sm-10\" style=\"padding-left:0px;padding-right:98px\">\n        <div class=\"backgroung-grey padding-top-20 padding-left-14 padding-right-10 padding-bottom-10\">\n            <p class=\"font-family-open-sans-regular font-size-16\">Chicago Discount Signs is both capable and experienced with National Account signage program rollouts.</p>\n            <p class=\"padding-top-20 font-family-open-sans-regular font-size-16\"><b>We Offer national accounts the following special terms:</b></p>\n            <p class=\"margin-bottom-0 font-family-open-sans-regular font-size-16\"><b>Volume Discounts: </b>Commit your national account signage needs to us, and we will discount our (already low) pricing to reflect the volume ordered.</p>\n            <p>Special Financing: We offer extended payment terms for projects that meet our program criteria.\n            </p>\n            <p class=\"padding-top-10 font-family-open-sans-regular font-size-16\"><b>Reduced Shipping Cost: </b>Based on our centralized location, we can quickly ship your signage anywhere in the U.S and International at a lower cost than our competitors.</p>\n            <p class=\"padding-top-10 font-family-open-sans-regular font-size-16\"><b>Extended Warranty: </b>For signage programs, we offer a two year workmanship warranty including LED failure, trim cap separation, transformer malfunction and other material defects (excluding labor cost) that may occur in the first 24 months from ship date. Neon illumination issues are extended to 120 days.</p>\n            <p class=\"padding-top-10 font-family-open-sans-regular font-size-16\"><b>Custom Project Fulfillment: </b>We place your company label on each sign prior to shipment. We can also provide storage & logistics of your signage prior to shipping.</p>\n            <p class=\"padding-top-10 font-family-open-sans-regular font-size-16\"><b>Contact us today at 8xx.xxx.xxx for further wholesale program signage information & details. \n            </b></p>\n        </div>\n    </div>\n</div>\n<div class=\"padding-bottom-50 padding-top-50 hidden-xs\">\n    <div class=\"row\" style=\"margin-bottom:5px;\">\n        <div class=\"col-lg-12\" style=\"text-align: center;\">\n            <button type=\"button\" class=\"btn btn-primary primary-orange-background-color\" style=\" border-color: transparent;padding:25px 59px;border-radius: 74px;\">\n                <p class=\"margin-bottom-0 singupParaone font-family-open-sans-regular\" style=\"color:#FFF;font-size:30px;font-weight:300\">Start Your New Order Sign Now</p>\n                <p class=\"font-family-open-sans-regular\" style=\"color:#FFF;font-weight:300;font-size: 18px\">Lightning Speed Turnaround</p>\n            </button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\" style=\"text-align:center;\">\n            <p class=\"margin-bottom-0 font-family-open-sans-regular\" style=\"font-size:25px;font-weight:300\">We Ship NationWide</p>\n            <p class=\"margin-bottom-0 font-family-open-sans-regular\" style=\"font-size:25px;font-weight:300\">Deliver On Time,Every Time!</p>\n        </div>\n    </div>\n</div>\n<!-- Sign Up Button For Mobile Only Starts -->\n<div class=\"margin-top-20 margin-bottom-20 visible-xs\">\n    <div class=\"row\">\n        <div class=\"col-xs-1\">\n        </div>\n        <div class=\"col-xs-10\" style=\"background-color:#d35402;padding:15px;text-align:center;border-radius:20px;\">\n            <p class=\"margin-bottom-0\" style=\"color:#FFF;font-size:18px;\">Start Your New Order Sign Now</p>\n            <p style=\"color:#FFF;font-size:16px\">Lightning Speed Turnaround</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <p class=\"margin-bottom-0\" style=\"font-size:21px;\">We Ship NationWide</p>\n            <p style=\"font-size:20px;\">Deliver On Time,Every Time!</p>\n        </div>\n    </div>\n</div>\n<!-- Sign Up Button For Mobile Only Ends -->"

/***/ }),

/***/ "../../../../../src/app/nationalprogramming/nationalprogramming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NationalProgrammingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NationalProgrammingComponent = (function () {
    function NationalProgrammingComponent() {
        this.imagearray = [{ 'src': 'http://via.placeholder.com/540x230', 'name': 'Channel Letters' }, { 'src': 'http://via.placeholder.com/540x230', 'name': 'Custom Cabinets' }, { 'src': 'http://via.placeholder.com/540x230', 'name': 'Routed Products' }, { 'src': 'http://via.placeholder.com/540x230', 'name': 'Digital Printing' }];
    }
    NationalProgrammingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nationalprogramming',
            styles: [__webpack_require__("../../../../../src/app/nationalprogramming/nationalprogramming.component.css")],
            template: __webpack_require__("../../../../../src/app/nationalprogramming/nationalprogramming.component.html")
        })
    ], NationalProgrammingComponent);
    return NationalProgrammingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subtitle-label {\n    font-family: Helvetica, sans-serif, Arial;\n    font-size: 34px;\n    font-weight: 100;\n    color: #767375;\n}\n\n.green-marker-label {\n    padding-left: 10px;\n    font-weight: normal;\n}\n.text-underline {\n    border-bottom: 1px solid #000;\n    padding-bottom: 5px;\n}\n\n.text-underline:before {\n    content: '';\n    position: absolute;\n    width: 63px;\n    border-bottom: 3px solid #000;\n    bottom: -1px;\n    left: 50%;\n    -webkit-transform: translateX(-62%);\n            transform: translateX(-62%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding-top-50\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <label class=\"font-family-roboto-slab-light font-size-35\" style=\"font-weight:300\">Deliver On Time, Every Time!</label>\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n            </div>\n            <div class=\"col-lg-4\" style=\"padding-left:44px;padding-right:44px\">\n                <div class=\"text-underline\"></div>\n            </div>\n            <div class=\"col-lg-4\">\n            </div>\n        </div>\n        <p class=\"padding-top-15 font-size-16 font-family-open-sans-regular\" style=\"font-weight: 300;color:#312832\">We place your company label on each sign prior to shipment</p>\n    </div>\n</div>\n<div class=\"row mt-30\">\n    <div class=\"col-lg-12\">\n        <div class=\"row\">\n            <div class=\"col-lg-2\">\n            </div>\n            <div class=\"col-lg-8\">\n                <img class=\"width-100percent\" src=\"../assets/images/map.png\">\n            </div>\n            <div class=\"col-lg-2\">\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row margin-top-40 margin-bottom-40\">\n    <div class=\"col-lg-6 text-align-end\">\n        <div>\n            <img class=\"height-35\" src=\"../assets/images/map-marker-green.png\">\n            <label class=\"green-marker-label\">New Locations Opening Soon!!</label>\n        </div>\n        <div class=\"padding-top-10 padding-right-90\">\n            <img class=\"height-35\" src=\"../assets/images/map-marker-orange.png\">\n            <label class=\"green-marker-label\">Corporate Office</label>\n        </div>\n    </div>\n</div>\n<div class=\"row padding-top-50\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <label class=\"font-family-roboto-slab-light font-size-35\" style=\"font-weight:300;\"><span class=\"text-uppercase\">Free</span> Chicago Discount Signs Delivery</label>\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n            </div>\n            <div class=\"col-lg-4\" style=\"padding-left:44px;padding-right:44px\">\n                <div class=\"text-underline\"></div>\n            </div>\n            <div class=\"col-lg-4\">\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row padding-bottom-50\">\n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-10\" style=\"padding-top:20px\">\n        <p class=\"font-family-open-sans-regular font-size-16\">\n            Chicago Discount Signs has its <b>own delivery service</b> and utilizes many common carriers to ship products to our customers. <b>Large signage</b> requires special crating and will be shipped by common carrier or company delivery. <b>Small signage</b> can be shipped <b>UPS, FedEx, or Common Carrier</b>.\n        </p>\n        <p class=\"font-family-open-sans-regular font-size-16\">\n            We will <b>notify you of added shipping costs</b> during the quotation process or when we acknowledge your order. If you have special shipping requirements, please tell your sales representative prior to calculation of quote. All <b>orders are insured</b> for their value.\n        </p>\n        <p class=\"font-family-open-sans-regular font-size-16\">\n            We take pride in <b>carefully crating, packaging,</b> and loading your products; however, damage can happen during shipment which is out of our control, Please examine the contents of all crates and packages immediately upon receipt of shipment. If damages occur follow procedures listed in Damaged Shipments.\n        </p>\n        <p class=\"font-size-18\"><b>Damaged Shipments</b></p>\n        <p class=\"font-family-open-sans-regular font-size-16\">\n            CDS will <b>replace and repair any product damaged upon delivery</b>, note damages on your delivery ticket and <b>contact Chicago Discount Signs</b> as soon as possible.\n        </p>\n        <p class=\"font-family-open-sans-regular font-size-16\"><b>Freight/Common Carrier Damages:</b></p>\n        <ul class=\"padding-left-14\" style=\"list-style-type:disc;\">\n            <li class=\"font-family-open-sans-regular font-size-16\">Inspect all items and make a list of all damages.\n            </li>\n            <li class=\"font-family-open-sans-regular font-size-16\">\n                Save all products and packaging received; without this we cannot assist you in filing the claim.\n            </li>\n            <li class=\"font-family-open-sans-regular font-size-16\">\n                Do not use product until damages have been inspected by freight company.\n            </li>\n            <li class=\"font-family-open-sans-regular font-size-16\">\n                Please contact Chicago Discount Signs . as soon as possible to report damages.\n            </li>\n            <li class=\"font-family-open-sans-regular font-size-16\">\n                Chicago Discount Signs will help you prepare and file paperwork for the damages.\n            </li>\n            <li class=\"font-family-open-sans-regular font-size-16\">\n                Most claims are resolved within two weeks.\n            </li>\n            <li class=\"font-family-open-sans-regular font-size-16\">\n                Chicago Discount Signs . will not be liable for damages incurred during shipping on carriers other than Sign Fab delivery.\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderComponent = (function () {
    function OrderComponent() {
    }
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'order',
            styles: [__webpack_require__("../../../../../src/app/order/order.component.css")],
            template: __webpack_require__("../../../../../src/app/order/order.component.html")
        })
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/warranty/warranty.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-center{\n    text-align: center;\n}\n\n.warranty-points-heading {\n /*   font-size: 13px;\n    font-family: helvetica;\n    font-weight: 600;*/\n}\n.warranty-points-conclusion {\n    /*font-size: 13px;\n    font-family: helvetica;\n    font-weight: 600;*/\n}\n.warranty-points{\n    /*font-size: 13px;\n    font-family: helvetica;\n    padding-left: 15px;*/\n}\nspan {\n    border-bottom: 1px solid #000;\n    padding-bottom: 5px;\n    position: relative;\n}\n\nspan:before {\n    content: '';\n    position: absolute;\n    width: 63px;\n    border-bottom: 3px solid #000;\n    bottom: -2px;\n    left: 50%;\n    -webkit-transform: translateX(-62%);\n            transform: translateX(-62%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/warranty/warranty.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row padding-top-50 padding-bottom-50\">\n    <div class=\"col-sm-12 text-center\">\n        <span class=\"font-family-roboto-slab-light font-size-35\" style=\"font-weight:400\">Warranty Information</span>\n    </div>\n</div>\n\n<div class=\"row padding-bottom-50\">\n    <div class=\"col-lg-1 col-sm-2\"></div>\n    <div class=\"col-lg-10 col-sm-8\">\n        <label class=\"warranty-points-heading font-family-open-sans-regular font-size-16\">Chicago Discount Sign, LLC (\"CDS\") warrants its signs to be free from defects, as follows:</label>\n        <ol class=\"warranty-points font-family-open-sans-regular font-size-16\" style=\"padding-left:17px;padding-top:10px\">\n            <li>If any of the following components of the sign structure malfunction because of defects in workmanship or materials\n                within 60 months after the date of shipment of the sign by CDS to the purchaser, CDS will at its sole option\n                either repair or replace the defective materials:\n                <ul>\n                    <li>Trim Cap</li>\n                    <li>Acrylic Faces</li>\n                    <li>Aluminum Returns and Backs</li>\n                    <li>Raceways</li>\n                    <li>Secondary Wiring</li>\n                </ul>\n            </li>\n            <br/>\n            <li>If the LED illumination fails to function properly within 60 months after the shipment of the sign CDS to purchaser,\n                CDS will at is sole option either replace defective units, or reimburse the purchaser for repair of the defective\n                units\n            </li>\n            <br/>\n            <li>If a power supply (transformer) fails to function properly within 60 months after the date of its shipment by\n                CDS to the purchaser, CDS will at its sole option repair or replace the defective power supply provided that\n                the power supply is returned to CDS by the purchaser for repair or replacement.\n            </li>\n            <br/>\n            <li>Labor to remove and reinstall defective items is not included in this warranty, and will be at purchaser’s expense.\n            </li>\n            <br/>\n            <li>This warranty does not apply (i) if the purchaser fails to handle and install the sign/transformer properly and\n                in accordance with any instructions from CDS, (ii) the sign/transformer is damaged after the sign is shipped\n                from the CDS manufacturing facility to the purchaser, and/or (iii) the purchaser misuses the sign, such as\n                by damage, breakage or physical harm.\n            </li>\n            <br/>\n            <li>OTHER THAN AS SPECIFICALLY SET FORTH ABOVE, DSW MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND OR NATURE\n                REGARDING THE SIGNS SOLD BY CDS; AND ALL SUCH REPRESENTATIONS AND WARRANTIES, INCLUDING (WITHOUT LIMITATION)\n                ALL IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, ARE EXPRESSLY DISCLAIMED BY\n                CDS and CAN CHANGE AT ANYTIME WITHOUT NOTICE.\n            </li>\n             <br/>\n        </ol>\n        <label class=\"warranty-points-conclusion font-family-open-sans-regular font-size-16\">\n            If you have any questions about this warranty, please feel free to call the CDS manufacturing facility at 8xx.xxx.xxxx.\n        </label>\n    </div>\n    <div class=\"col-lg-1 col-sm-2\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/warranty/warranty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarrantyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WarrantyComponent = (function () {
    function WarrantyComponent() {
    }
    WarrantyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'warranty',
            styles: [__webpack_require__("../../../../../src/app/warranty/warranty.component.css")],
            template: __webpack_require__("../../../../../src/app/warranty/warranty.component.html")
        })
    ], WarrantyComponent);
    return WarrantyComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map