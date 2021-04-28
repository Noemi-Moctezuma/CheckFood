(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+OVq":
/*!***********************************************!*\
  !*** ./src/app/modal/modal-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageRoutingModule", function() { return ModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.page */ "Af+r");




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rodrigo\Desktop\checkfood\src\main.ts */"zUnb");


/***/ }),

/***/ "6ejR":
/*!******************************************************!*\
  !*** ./src/app/modalCambioPerfil/modal.component.ts ***!
  \******************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "bpxj");
/* harmony import */ var _modal_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component.less */ "GQ0r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "mEWK");





let ModalComponent = class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
};
ModalComponent.ctorParameters = () => [
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
ModalComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'jw-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_modal_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalComponent);



/***/ }),

/***/ "Af+r":
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.page.html */ "wwHD");
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.page.scss */ "qdCT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-service.service */ "xf3R");






let ModalPage = class ModalPage {
    constructor(navParams, viewCtrl, dataService, alertController) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dataService = dataService;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.data = this.navParams.data[0];
        console.log(this.data);
        this.nombre = this.data.nombre;
        this.tamano = this.data.tamano;
        this.banner_aurrera = this.data.banner_aurrera;
        this.banner_comer = this.data.banner_comer;
        this.banner_soriana = this.data.banner_soriana;
        this.banner_publicidad = this.data.banner_publicidad;
        this.precio_aurrera = this.data.precio_aurrera;
        this.precio_comer = this.data.precio_comer;
        this.precio_soriana = this.data.precio_soriana;
        this.fecha_aurrera = this.data.fecha_actualizacion_aurrera;
        this.fecha_soriana = this.data.fecha_actualizacion_comer;
        this.precio_soriana = this.data.fecha_actualizacion_soriana;
        this.user_id = this.data.user_id;
        this.producto_id = this.data.producto_id;
    }
    //cerrar modal muestra de precios
    dismiss() {
        this.viewCtrl.dismiss();
    }
    //cabrir modal in modal para sugerir precios
    sugerir(tienda, producto, user, ds) {
        var nombre_t = tienda;
        setTimeout(function () {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
            //cerrar modal in modal on backdrop click
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    nombre_t = null;
                }
            };
            //cerrar modal in modal on button click
            let cancelButton = document.getElementById("cancelar");
            cancelButton.addEventListener("click", function () {
                setTimeout(function () {
                    modal.style.display = "none";
                    nombre_t = null;
                }, 300);
            });
            //aceptar y guardar precio nuevo
            let acceptButton = document.getElementById("aceptar");
            acceptButton.addEventListener("click", function () { aceptar(producto, user, ds); });
            function aceptar(producto, user, dataService) {
                if (nombre_t) {
                    /*             let precio = (<HTMLInputElement>document.getElementById("precio")).value;
                                precio = precio.toString();
                                precio = precio.slice(0, (precio.indexOf("."))+3);
                                const sendData = {
                                  opcion: 'sugerirPrecio',
                                  user_id: Number(user),
                                  producto_id: Number(producto),
                                  precio: Number(precio),
                                  tienda: nombre_t
                                };
                                console.log(sendData);
                                dataService.post('producto', sendData).subscribe(data =>{
                                  console.log(data);
                                  
                                }) */
                }
            }
        }, 300);
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPage);



/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Cch1":
/*!***************************************************!*\
  !*** ./src/app/modalCambioPerfil/modal.module.ts ***!
  \***************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "6ejR");




let ModalModule = class ModalModule {
};
ModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]]
    })
], ModalModule);



/***/ }),

/***/ "GQ0r":
/*!********************************************************!*\
  !*** ./src/app/modalCambioPerfil/modal.component.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUNnQztBQUNoQztFQUNFLGlDQUFpQztFQUMvQixhQUFBO0FBQ0o7QUFIQTtFQUtFLDhDQUE4QztFQUN4QyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNOLHFEQUFxRDtFQUUvQyxhQUFBO0VBQU4sc0NBQXNDO0VBR2hDLGNBQUE7QUFEUjtBQWZBO0VBbUJZLGFBQUE7RUFDQSxnQkFBQTtFQURWLGdEQUFnRDtFQUl0QyxZQUFBO0FBRlo7QUFyQkE7RUF1QkUsK0NBQStDO0VBTXpDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBSk4sNEJBQTRCO0VBT3RCLHNCQUFBO0VBQ0EsYUFBQTtFQUxOLCtEQUErRDtFQVF6RCxZQUFBO0FBTlI7QUFVQTtFQVJFLDZFQUE2RTtFQVUzRSxnQkFBQTtBQVJKIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIC5qdy1tb2RhbCB7XG4gICAgICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBcbiAgICAgICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICAgIC5qdy1tb2RhbC1ib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgICAgICAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gICAgICAgICAgICBtYXJnaW46IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuanctbW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICBcbiAgICAgICAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICAgICAgICB6LWluZGV4OiA5MDA7XG4gICAgfVxufVxuXG5ib2R5Lmp3LW1vZGFsLW9wZW4ge1xuICAgIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "XARU":
/*!********************************************!*\
  !*** ./src/app/modalCambioPerfil/index.ts ***!
  \********************************************/
/*! exports provided: ModalModule, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.module */ "Cch1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_0__["ModalModule"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "mEWK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });





/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _modalCambioPerfil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalCambioPerfil */ "XARU");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.module */ "hVeP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "jAoO");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");















let AppModule = class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_13__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__["fab"]);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconLibrary"] }
];
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_8__["ModalPageModule"], _modalCambioPerfil__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicRouteStrategy"] }, _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_11__["Screenshot"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "bpxj":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalCambioPerfil/modal.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jw-modal\">\r\n    <div class=\"jw-modal-body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n<div class=\"jw-modal-background\"></div>");

/***/ }),

/***/ "hVeP":
/*!***************************************!*\
  !*** ./src/app/modal/modal.module.ts ***!
  \***************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.page */ "Af+r");
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-routing.module */ "+OVq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








let ModalPageModule = class ModalPageModule {
};
ModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_6__["ModalPageRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_5__["ModalPage"]]
    })
], ModalPageModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "mEWK":
/*!****************************************************!*\
  !*** ./src/app/modalCambioPerfil/modal.service.ts ***!
  \****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ModalService = class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
};
ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ModalService);



/***/ }),

/***/ "qdCT":
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: absolute;\n}\n\n.cls-button {\n  border-radius: 50%;\n  --box-shadow:none;\n  --background: #d7e6a3!important;\n}\n\n.contenido {\n  --background: white!important;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.container-gris {\n  background-color: #f6f5f4;\n  margin: 25px;\n  border-radius: 35px;\n  overflow: auto;\n}\n\n.franja-roja {\n  background-color: #c75142;\n  width: 100%;\n  height: 70px;\n  border-radius: 35px 35px 0 0;\n}\n\n.container-circulo {\n  position: relative;\n}\n\n.circulo {\n  height: 75px;\n  width: 75px;\n  background-color: white;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -75%);\n  left: 50%;\n  text-align: center;\n}\n\n.icono {\n  color: black;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.titulo {\n  text-align: center;\n  color: #81af4f;\n  font-family: OpenSans-Bold;\n  margin: 25px 0 0 0;\n  padding-bottom: 15px;\n  border-bottom: dotted 4px black;\n}\n\n.publicidad {\n  height: 140px !important;\n  width: 90%;\n  margin: auto;\n  display: block;\n}\n\nion-row {\n  margin: 0 10px 25px;\n  border: 1px solid white;\n  border-radius: 20px;\n  background-color: white;\n}\n\n.container-banner {\n  border-radius: 20px 0 0 20px;\n  display: flex;\n  align-items: center;\n}\n\n.container-precio {\n  border-radius: 0 20px 20px 0;\n  background-color: #f6f5f4;\n}\n\n.banners {\n  height: 65px;\n  object-fit: cover;\n  object-position: 50% 50%;\n}\n\n.precio {\n  color: #81af4f;\n  font-family: OpenSans-Bold;\n  letter-spacing: -1px;\n  text-align: center;\n  margin: 12px 0;\n}\n\n.botonSugerirPrecio {\n  text-align: center;\n  display: block;\n  float: right !important;\n  padding: 0;\n  color: #c75142;\n  font-family: OpenSans-Light;\n  letter-spacing: -1px;\n  font-size: 12px;\n  margin: 0;\n}\n\n.soloSugerir {\n  float: unset !important;\n  height: 100%;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 11;\n  /* Sit on top */\n  padding-top: 50%;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n}\n\n.modal-header {\n  padding: 2px 16px;\n  background-color: #81af4f;\n  color: white;\n  width: calc 100%;\n  border: solid 1px #81af4f;\n}\n\n.modal-body {\n  border: 1px solid #81af4f;\n  padding: 16px;\n  border-radius: 0 0 30px 30px;\n  color: black;\n}\n\n.modal-body ion-input {\n  width: 100%;\n  padding: 10px 10px;\n  margin-top: 5px;\n  border-radius: 5px;\n  border: 2px solid #d7e6a3;\n  outline: none;\n}\n\n.modal-content {\n  border-radius: 30px 30px;\n  overflow: hidden;\n  background-color: #fefefe;\n  margin: auto;\n  width: 85%;\n}\n\n.container-buttons {\n  padding-top: 16px;\n}\n\n.container-buttons .container-aceptar {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n}\n\n.container-buttons .container-cancelar {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n}\n\n.container-buttons button {\n  height: 30px;\n  width: 80%;\n  outline: none;\n}\n\n#aceptar {\n  --background: #81af4f;\n  color: white;\n}\n\n#cancelar {\n  --background: #c75142;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFFSjs7QUFBQTtFQUNJLDZCQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFOQTtFQUNJLFlBQUE7RUFBYyxTQUFBO0VBQ2Qsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtBQVdKOztBQVRBO0VBQ0ksd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYUo7O0FBWEE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVpBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtBQWVKOztBQWJBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFnQko7O0FBZEE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWlCSjs7QUFmQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFrQko7O0FBaEJBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FBbUJKOztBQWpCQTtFQUNJLGFBQUE7RUFBZSxzQkFBQTtFQUNmLGVBQUE7RUFBaUIsa0JBQUE7RUFDakIsV0FBQTtFQUFhLGVBQUE7RUFDYixnQkFBQTtFQUFrQix3QkFBQTtFQUNsQixPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtFQUFjLGdCQUFBO0VBQ2QsY0FBQTtFQUFnQiw0QkFBQTtBQTJCcEI7O0FBekJBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBNEJKOztBQTFCQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBRUEsWUFBQTtBQTRCSjs7QUEzQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUE2QlI7O0FBMUJBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUE2Qko7O0FBMUJBO0VBQW9CLGlCQUFBO0FBOEJwQjs7QUE3Qkk7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQStCUjs7QUE3Qkk7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQStCUjs7QUE3Qkk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUErQlI7O0FBNUJBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBK0JKOztBQTVCQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQStCSiIsImZpbGUiOiJtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jbHMtYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZDdlNmEzIWltcG9ydGFudDtcclxufVxyXG4uY29udGVuaWRve1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhaW5lci1ncmlze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNDtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uZnJhbmphLXJvamEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3NTE0MjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweCAzNXB4IDAgMDtcclxufVxyXG4uY29udGFpbmVyLWNpcmN1bG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNpcmN1bG97XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pY29ub3tcclxuICAgIGNvbG9yOiBibGFjazsgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4udGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4MWFmNGY7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnMtQm9sZDtcclxuICAgIG1hcmdpbjogMjVweCAwIDAgMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDRweCBibGFjaztcclxufVxyXG4ucHVibGljaWRhZHtcclxuICAgIGhlaWdodDogMTQwcHghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmlvbi1yb3d7XHJcbiAgICBtYXJnaW46IDAgMTBweCAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lci1iYW5uZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lci1wcmVjaW97XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNFxyXG59XHJcbi5iYW5uZXJze1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XHJcbn1cclxuLnByZWNpb3tcclxuICAgIGNvbG9yOiAjODFhZjRmO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLUJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTJweCAwIDtcclxufVxyXG4uYm90b25TdWdlcmlyUHJlY2lvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogI2M3NTE0MjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fucy1MaWdodDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5zb2xvU3VnZXJpcntcclxuICAgIGZsb2F0OiB1bnNldCFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDExOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogNTAlOyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFhZjRmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGNhbGMgKDEwMCUpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggICM4MWFmNGY7XHJcbn1cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgxYWY0ZjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMzBweCAzMHB4IDtcclxuXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkN2U2YTM7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBcclxufVxyXG4uY29udGFpbmVyLWJ1dHRvbnN7IHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgLmNvbnRhaW5lci1hY2VwdGFye1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIH1cclxuICAgIC5jb250YWluZXItY2FuY2VsYXJ7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gICAgfVxyXG4gICAgYnV0dG9ueyBcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG59XHJcbiNhY2VwdGFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODFhZjRmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuI2NhbmNlbGFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzc1MTQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'inicio-sesion',
        pathMatch: 'full'
    },
    {
        path: 'producto',
        loadChildren: () => __webpack_require__.e(/*! import() | producto-producto-module */ "producto-producto-module").then(__webpack_require__.bind(null, /*! ./producto/producto.module */ "WiN2")).then(m => m.ProductoPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => Promise.all(/*! import() | perfil-perfil-module */[__webpack_require__.e("default~modalCupon-modal-cupon-module~perfil-perfil-module"), __webpack_require__.e("perfil-perfil-module")]).then(__webpack_require__.bind(null, /*! ./perfil/perfil.module */ "ZEuG")).then(m => m.PerfilPageModule)
    },
    {
        path: 'modal-cupon',
        loadChildren: () => __webpack_require__.e(/*! import() | modalCupon-modal-cupon-module */ "default~modalCupon-modal-cupon-module~perfil-perfil-module").then(__webpack_require__.bind(null, /*! ./modalCupon/modal-cupon.module */ "2FBn")).then(m => m.ModalCuponPageModule)
    },
    {
        path: 'categoria-seleccionada',
        loadChildren: () => __webpack_require__.e(/*! import() | categoria-seleccionada-categoria-seleccionada-module */ "categoria-seleccionada-categoria-seleccionada-module").then(__webpack_require__.bind(null, /*! ./categoria-seleccionada/categoria-seleccionada.module */ "kIUw")).then(m => m.CategoriaSeleccionadaPageModule)
    },
    {
        path: 'inicio-sesion',
        loadChildren: () => __webpack_require__.e(/*! import() | inicio-sesion-inicio-sesion-module */ "inicio-sesion-inicio-sesion-module").then(__webpack_require__.bind(null, /*! ./inicio-sesion/inicio-sesion.module */ "m/SL")).then(m => m.InicioSesionPageModule)
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() | registro-registro-module */ "registro-registro-module").then(__webpack_require__.bind(null, /*! ./registro/registro.module */ "+WFb")).then(m => m.RegistroPageModule)
    },
    {
        path: 'categorias',
        loadChildren: () => __webpack_require__.e(/*! import() | categorias-categorias-module */ "categorias-categorias-module").then(__webpack_require__.bind(null, /*! ./categorias/categorias.module */ "cHTx")).then(m => m.CategoriasPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wwHD":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border header\">\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"cls-button\" color=\"dark\" defaultHref=\"\" icon=\"close\" (click)=\"dismiss()\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen class=\"contenido\">\r\n  <div class=\"container-gris\">\r\n    <div class=\"franja-roja\"></div>\r\n    <div class=\"container-circulo\">\r\n      <div class=\"circulo\" >\r\n        <fa-icon class=\"icono\" icon=\"dollar-sign\" size=3x></fa-icon>\r\n      </div>\r\n    </div>\r\n    <h2 class=\"titulo\">PRECIOS</h2>\r\n      <ion-img  class=\"publicidad\" src=\"{{this.banner_publicidad}}\"></ion-img>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"container-banner\" size= \"7\">\r\n          <ion-img class=\"banners\" src=\"{{this.banner_comer}}\"></ion-img>\r\n        </ion-col>\r\n        <ion-col class=\"container-precio\">\r\n          <ng-container *ngIf=\"this.user_id; else login\">\r\n            <ng-container *ngIf=\"this.precio_comer != 0; else soloSugerirComer\">\r\n              <p class=\"precio\">{{this.precio_comer | currency}} MXN</p>\r\n              <ion-button class=\" botonSugerirPrecio\" fill=\"clear\" size=\"small\" (click)=\"sugerir('comer', this.producto_id, this.user_id, dataService)\">SUGERIR PRECIO</ion-button>\r\n            </ng-container>\r\n            <ng-template #soloSugerirComer >\r\n              <ion-button class=\"botonSugerirPrecio soloSugerir\" fill=\"clear\" size=\"small\" expand=\"full\" (click)=\"sugerir('comer', this.producto_id, this.user_id, dataService)\">SUGERIR PRECIO</ion-button>\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-template #login>logeate, ese</ng-template>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"container-banner\" size= \"7\">\r\n          <ion-img class=\"banners\" src=\"{{this.banner_soriana}}\"></ion-img>\r\n        </ion-col>\r\n        <ion-col class=\"container-precio\">\r\n          <ng-container *ngIf=\"this.user_id; else login2\">\r\n            <ng-container *ngIf=\"this.precio_soriana != 0; else soloSugerirSoriana\">\r\n              <p class=\"precio\">{{this.precio_soriana | currency}} MXN</p>\r\n              <ion-button class=\" botonSugerirPrecio\" fill=\"clear\" size=\"small\"  (click)=\"sugerir('soriana', this.producto_id, this.user_id, dataService)\">SUGERIR PRECIO</ion-button>\r\n            </ng-container>\r\n            <ng-template #soloSugerirSoriana>\r\n              <ion-button class=\"botonSugerirPrecio soloSugerir\" fill=\"clear\" size=\"small\" expand=\"full\" (click)=\"sugerir('soriana', this.producto_id, this.user_id, dataService)\">SUGERIR PRECIO</ion-button>\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-template #login2>logeate, ese</ng-template>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"container-banner\" size= \"7\">\r\n          <ion-img class=\"banners\" src=\"{{this.banner_aurrera}}\"></ion-img>\r\n        </ion-col>\r\n        <ion-col class=\"container-precio\">\r\n          <ng-container *ngIf=\"this.user_id; else login3\">\r\n            <ng-container *ngIf=\"this.precio_aurrera != 0; else soloSugerirAurrera\">\r\n              <p class=\"precio\">{{this.precio_aurrera | currency}} MXN</p>\r\n              <ion-button class=\" botonSugerirPrecio\" fill=\"clear\" size=\"small\" (click)=\"sugerir('aurrera', this.producto_id, this.user_id, dataService)\">SUGERIR PRECIO</ion-button>\r\n            </ng-container>\r\n            <ng-template #soloSugerirAurrera>\r\n              <ion-button class=\"botonSugerirPrecio soloSugerir\" fill=\"clear\" size=\"small\" expand=\"full\" (click)=\"sugerir('aurrera', this.producto_id, this.user_id, dataService)\">SUGERIR PRECIO</ion-button>\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-template #login3>logeate, ese</ng-template>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n  <!-- The Modal -->\r\n  <ion-item lines=\"none\" id=\"myModal\" class=\"modal\" color=\"transparent\">\r\n\r\n    <!-- Modal content -->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2>Sugerir precio nuevo</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <ion-label class=\"ion-text-wrap\">Nuevo precio para {{nombre}} ({{tamano}})</ion-label>\r\n          <ion-input id=\"precio\" type=\"number\" clear-input autofocus inputmode=\"decimal\"></ion-input>\r\n          <div class=\"container-buttons\">\r\n            <div class=\"container-aceptar\">\r\n              <ion-button id=\"aceptar\">Aceptar</ion-button>\r\n            </div>\r\n            <div class=\"container-cancelar\">\r\n              <ion-button id=\"cancelar\">Cancelar</ion-button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </ion-item>");

/***/ }),

/***/ "xf3R":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        //la url de su compu; la ip es la que se muestra cuando corren el comando ionic serve
        //
        this.urlLaptop = 'http://192.168.0.14/webservice/checkfood/';
        this.url = 'http://localhost/webservice/checkfood/';
        this.api = '/service.php';
    }
    post(model, params) {
        return this.http.post(this.urlLaptop + model + this.api, params, { responseType: 'json' });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map