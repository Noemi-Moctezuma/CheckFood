(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modalCupon-modal-cupon-module~perfil-perfil-module"],{

/***/ "2FBn":
/*!**************************************************!*\
  !*** ./src/app/modalCupon/modal-cupon.module.ts ***!
  \**************************************************/
/*! exports provided: ModalCuponPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCuponPageModule", function() { return ModalCuponPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_cupon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-cupon-routing.module */ "PFN/");
/* harmony import */ var _modal_cupon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-cupon.page */ "90wj");







let ModalCuponPageModule = class ModalCuponPageModule {
};
ModalCuponPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_cupon_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalCuponPageRoutingModule"]
        ],
        declarations: [_modal_cupon_page__WEBPACK_IMPORTED_MODULE_6__["ModalCuponPage"]]
    })
], ModalCuponPageModule);



/***/ }),

/***/ "90wj":
/*!************************************************!*\
  !*** ./src/app/modalCupon/modal-cupon.page.ts ***!
  \************************************************/
/*! exports provided: ModalCuponPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCuponPage", function() { return ModalCuponPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_cupon_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-cupon.page.html */ "Pykf");
/* harmony import */ var _modal_cupon_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-cupon.page.scss */ "Eysy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data-service.service */ "xf3R");







//import { Screenshot } from '@ionic-native/screenshot/ngx';
let ModalCuponPage = class ModalCuponPage {
    constructor(modalCtrl, alertController, dataService) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.dataService = dataService;
        this.id = '2';
    }
    ngOnInit() {
        this.obtenerPuntos();
    }
    obtenerPuntos() {
        var info = {
            opcion: 'obtenerPuntos',
            id: this.id
        };
        this.dataService.post('perfil', info).subscribe((data) => {
            this.puntos = data[0].puntos;
            this.dinero = (this.puntos) / 10;
            console.log(this.dinero);
        });
    }
    //cerrar modal y mandar los parámetros a vista principal
    cancelar() {
        this.modalCtrl.dismiss({
        //nombre:data
        });
    }
    cerrarConInfo(data) {
        this.modalCtrl.dismiss({
        //nombre:data
        });
    }
    alertError() {
        this.alertController.create({
            header: '¡Error!',
            message: 'Error al canjear cupón',
            buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
    ;
    aceptar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.puntos > 0) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: '¿Está seguro en cambiar el cupón?',
                    message: 'Esta acción no se puede revertir',
                    buttons: [
                        {
                            text: 'Aceptar',
                            cssClass: 'primary',
                            handler: () => {
                                console.log('Aceptar');
                                var info = {
                                    opcion: 'limpiarPuntos',
                                    id: this.id
                                };
                                this.dataService.post('perfil', info).subscribe((data) => {
                                    if (data == true) {
                                        this.obtenerPuntos();
                                        this.cupon();
                                    }
                                    else {
                                        this.alertError();
                                    }
                                });
                            }
                        },
                        {
                            text: 'Cancelar',
                            cssClass: 'secondary',
                            handler: () => {
                                console.log('Cancelar');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.alertController.create({
                    header: '¡Error!',
                    message: 'Tu saldo es insuficinete para canjear el cupón',
                    buttons: ['OK']
                }).then(res => {
                    res.present();
                });
            }
        });
    }
    cupon() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Cupón',
                message: 'CF' + this.id + "P" + this.puntos + "A",
                buttons: [
                    {
                        text: 'Tomar captura',
                        cssClass: 'primary',
                        handler: () => {
                            console.log('Captura');
                            //this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then();
                        }
                    }, {
                        text: 'Cerrar',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Cerrar');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ModalCuponPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
ModalCuponPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-cupon',
        template: _raw_loader_modal_cupon_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_cupon_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalCuponPage);



/***/ }),

/***/ "Eysy":
/*!**************************************************!*\
  !*** ./src/app/modalCupon/modal-cupon.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  text-align: center;\n  background-color: #f6f5f4;\n  border: 0px solid #f6f5f4;\n  border-radius: 70px;\n  margin: 5%;\n  height: 93%;\n}\n\n.titulo {\n  margin: 0%;\n  border-radius: 70px 70px 0px 0px;\n  -moz-border-radius: 70px 70px 0px 0px;\n  -webkit-border-radius: 70px 70px 0px 0px;\n  background-color: #81af4f;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  color: white;\n  font-size: 25px;\n}\n\n.linea-punteada {\n  height: 35px;\n  border-bottom-style: dotted;\n  border-bottom-width: 10px;\n  margin-bottom: 20px;\n}\n\n.boton {\n  border: 2px solid;\n  color: white;\n  border-radius: 18px;\n  height: 40px;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 35%;\n}\n\n.texto {\n  color: #c75142;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vZGFsLWN1cG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoibW9kYWwtY3Vwb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb25kb3tcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNDtcclxuICAgIGJvcmRlcjowcHggc29saWQgI2Y2ZjVmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6NzBweDtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBoZWlnaHQ6IDkzJTtcclxufVxyXG4udGl0dWxve1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwcHggNzBweCAwcHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3MHB4IDcwcHggMHB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNzBweCA3MHB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFhZjRmO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogd2hpdGU7ICAgXHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5saW5lYS1wdW50ZWFkYXtcclxuICAgIGhlaWdodDozNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkOyBcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5ib3RvbntcclxuICAgIGJvcmRlcjoycHggc29saWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjE4cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuLnRleHRve1xyXG4gICAgY29sb3I6ICNjNzUxNDI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "PFN/":
/*!**********************************************************!*\
  !*** ./src/app/modalCupon/modal-cupon-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ModalCuponPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCuponPageRoutingModule", function() { return ModalCuponPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_cupon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-cupon.page */ "90wj");




const routes = [
    {
        path: '',
        component: _modal_cupon_page__WEBPACK_IMPORTED_MODULE_3__["ModalCuponPage"]
    }
];
let ModalCuponPageRoutingModule = class ModalCuponPageRoutingModule {
};
ModalCuponPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalCuponPageRoutingModule);



/***/ }),

/***/ "Pykf":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalCupon/modal-cupon.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n\n</ion-header>\n<body style=\"height:100%\" >\n  <div class=\"fondo\">\n    \n    <p class=\"titulo\">¿Canjear cupón?</p>\n\n    <div class=\"linea-punteada\">\n\n     \n    </div>\n    <div class=\"texto\">\n      <p>Usted cuenta con:</p>\n      <p style=\"font-weight: bold; font-size: 20px;\">\n        {{puntos}} puntos  \n      </p>\n      <p>lo que equivale a:</p>\n      <p style=\" font-weight: bold; font-size: 20px;\">\n        $ {{dinero}} pesos mexicanos\n      </p>\n      <br>\n      <p> Si desea cambiarlos presione el botón \"canjear puntos\", al hacerlo se mostrará el cupón de descuento\n        el cual puede mostrar en las siguientes tiendas de autoservicio: </p>\n      <p>- La Comer\n        <br>\n        - Bodega Ahurrera\n        <br>\n        - Soriana</p>\n      <p>Al canjear el cupón de descuento los puntos se eliminarán de su cuenta por lo que se recomienda tomar captura de pantalla o anotar el cupón de descuento</p>\n    </div>\n\n\n    <button class=\"boton\" (click)=\"aceptar()\" style=\"margin-right: 5%; background-color:#81af4f;\">\n      Canjear cupón\n    </button>\n    <button class=\"boton\" (click)=\"cancelar()\" style=\"margin-left: 5%; background-color: #c75142;\">\n      Cancelar\n    </button>\n\n  </div>\n\n</body>\n\n\n\n\n");

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
        this.urlLaptop = 'http://192.168.1.74/webservice/checkfood/';
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



/***/ })

}]);
//# sourceMappingURL=default~modalCupon-modal-cupon-module~perfil-perfil-module.js.map