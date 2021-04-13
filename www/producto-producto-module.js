(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producto-producto-module"],{

/***/ "WiN2":
/*!*********************************************!*\
  !*** ./src/app/producto/producto.module.ts ***!
  \*********************************************/
/*! exports provided: ProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageModule", function() { return ProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto.page */ "l3rG");
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./producto-routing.module */ "f26X");








let ProductoPageModule = class ProductoPageModule {
};
ProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _producto_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProductoPageRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
        ],
        declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_6__["ProductoPage"]]
    })
], ProductoPageModule);



/***/ }),

/***/ "f26X":
/*!*****************************************************!*\
  !*** ./src/app/producto/producto-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPageRoutingModule", function() { return ProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto.page */ "l3rG");




const routes = [
    {
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_3__["ProductoPage"]
    }
];
let ProductoPageRoutingModule = class ProductoPageRoutingModule {
};
ProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductoPageRoutingModule);



/***/ }),

/***/ "grnP":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/producto.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border header\">\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"back-button\" color=\"dark\" defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"contenido\">\r\n  <div class=\"container-gris\">\r\n    <div class=\"franja-verde\"></div>\r\n    <div class=\"container-blanco\">\r\n      <div class=\"container-foto\">\r\n        <ion-img class=\"foto\" src=\"{{ imagen_rt }}\"></ion-img>\r\n      </div> \r\n        <ion-fab-button (click)=\"precios()\" class=\"precios\"  color=\"light\"> \r\n          <fa-icon style=\"pointer-events:none;\" icon=\"dollar-sign\" size=2x></fa-icon>\r\n        </ion-fab-button>\r\n      <div class=\"container-info\">\r\n        <p class=\"prod\">{{ nombre }} ({{ cantidad_tamano }})</p>\r\n        <ion-grid *ngIf=\" azucares || sodio || calorias || adulcorante || fibra || grasas \">\r\n          <ion-row>\r\n            <ion-col class=\"col-nopadding\"  *ngIf= \"azucares\">\r\n              <ion-row>\r\n                <ion-col class=\"col-nopadding\">\r\n                  <p class=\"acs-titulos\">Azúcar</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col >\r\n                  <p class=\"acs-contenido\">{{ azucares }}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col class=\"col-nopadding\" *ngIf= \"calorias\">\r\n              <ion-row>\r\n                <ion-col class=\"col-nopadding\">\r\n                  <p class=\"acs-titulos\">Calorías</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <p class=\"acs-contenido\">{{ calorias }}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col class=\"col-nopadding\" *ngIf= \"sodio\">\r\n              <ion-row>\r\n                <ion-col class=\"col-nopadding\">\r\n                  <p class=\"acs-titulos\">Sodio</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <p class=\"acs-contenido\">{{ sodio }}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"col-nopadding\" *ngIf= \"adulcorante\">\r\n              <ion-row>\r\n                <ion-col class=\"col-nopadding\">\r\n                  <p class=\"acs-titulos\">Adulcorantes</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <p class=\"acs-contenido\">{{ adulcorante }}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col class=\"col-nopadding\" *ngIf= \"fibra\">\r\n              <ion-row>\r\n                <ion-col class=\"col-nopadding\">\r\n                  <p class=\"acs-titulos\">Fibra</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <p class=\"acs-contenido\">{{ fibra }}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col class=\"col-nopadding\" *ngIf= \"grasas\">\r\n              <ion-row>\r\n                <ion-col class=\"col-nopadding\">\r\n                  <p class=\"acs-titulos\">Grasas</p>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <p class=\"acs-contenido\">{{ grasas }}</p>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-row *ngIf=\" sellos || aditivos\">\r\n          <ion-col>\r\n            <span class=\"rad-titulo\">Radiografía</span>\r\n            <div class=\"radiografia\">\r\n              <p *ngIf=\"sellos\" style=\"margin-bottom: 0;\">Sellos de advertencia: <span>{{ sellos }}</span></p>\r\n              <p *ngIf=\"aditivos\" style=\"margin-top: 0;\">Aditivos: <span>{{ aditivos }}</span></p>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\" ingredientes \">\r\n          <ion-col>\r\n            <span class=\"ing-titulo\">Ingredientes</span>\r\n            <div class=\"ingredientes\">\r\n              <p *ngIf=\"ingredientes\">{{ ingredientes }}</p>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</ion-content>");

/***/ }),

/***/ "l3rG":
/*!*******************************************!*\
  !*** ./src/app/producto/producto.page.ts ***!
  \*******************************************/
/*! exports provided: ProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoPage", function() { return ProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_producto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./producto.page.html */ "grnP");
/* harmony import */ var _producto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto.page.scss */ "pDph");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data-service.service */ "xf3R");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../modal/modal.page */ "Af+r");







let ProductoPage = class ProductoPage {
    constructor(dataService, modalController) {
        this.dataService = dataService;
        this.modalController = modalController;
        this.producto_id = 6;
        this.user_id = 2;
    }
    precios() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"],
                componentProps: this.data_modal
            });
            modal.present();
        });
    }
    ngOnInit() {
        const sendData = {
            opcion: 'info',
            id: this.producto_id
        };
        this.dataService.post('producto', sendData).subscribe(data => {
            this.producto_id = data[0].id;
            this.nombre = data[0].nombre;
            this.precio_comer = data[0].precio_comer;
            this.precio_soriana = data[0].precio_soriana;
            this.precio_aurrera = data[0].precio_aurrera;
            this.fecha_actualizacion_comer = data[0].fecha_actualizacion_comer;
            this.fecha_actualizacion_soriana = data[0].fecha_actualizacion_soriana;
            this.fecha_actualizacion_aurrera = data[0].fecha_actualizacion_aurrera;
            this.banner_comer = data[0].banner_comer;
            this.banner_aurrera = data[0].banner_aurrera;
            this.banner_soriana = data[0].banner_soriana;
            this.ingredientes = data[0].ingredientes;
            this.cantidad_tamano = data[0].cantidad_tamano;
            this.azucares = data[0].azucares;
            this.sodio = data[0].sodio;
            this.grasas = data[0].grasas;
            this.fibra = data[0].fibra;
            this.adulcorante = data[0].adulcorante;
            this.calorias = data[0].calorias;
            this.aditivos = data[0].aditivos;
            this.sellos = data[0].sellos;
            this.imagen_rt = data[0].imagen_rt;
            //obtener el id del usuario
            //this.user_id = parseInt(localStorage.getItem('id'), 10);
            this.data_modal = [{
                    precio_comer: this.precio_comer,
                    precio_soriana: this.precio_soriana,
                    precio_aurrera: this.precio_aurrera,
                    fecha_actualizacion_comer: this.fecha_actualizacion_comer,
                    fecha_actualizacion_soriana: this.precio_soriana,
                    fecha_actualizacion_aurrera: this.fecha_actualizacion_aurrera,
                    banner_comer: this.banner_comer,
                    banner_aurrera: this.banner_aurrera,
                    banner_soriana: this.banner_soriana,
                    user_id: this.user_id,
                    producto_id: this.producto_id
                }];
        });
    }
};
ProductoPage.ctorParameters = () => [
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-producto',
        template: _raw_loader_producto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductoPage);



/***/ }),

/***/ "pDph":
/*!*********************************************!*\
  !*** ./src/app/producto/producto.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: absolute;\n}\n\n.back-button {\n  --background:#d7e6a3;\n}\n\n.contenido {\n  --background: white!important;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.container-gris {\n  background-color: #f6f5f4;\n  margin: 25px;\n  border-radius: 35px;\n  overflow: auto;\n}\n\n.franja-verde {\n  background-color: #81af4f;\n  width: 100%;\n  height: 35px;\n  border-radius: 35px 35px 0 0;\n}\n\n.container-blanco {\n  background-color: white;\n  border-radius: 25px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 25% 25px 25px 25px !important;\n}\n\n.container-foto {\n  position: relative;\n}\n\n.foto {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  border: 4px solid #d7e6a3;\n  z-index: 2;\n}\n\n.container-info {\n  position: relative;\n}\n\n.prod {\n  color: #c75142;\n  font-family: OpenSans-Bold;\n  text-align: center;\n  font-size: 14px;\n  padding-top: 30%;\n  padding: 30% 5% 0% 5%;\n  margin: 0%;\n  position: relative;\n}\n\n.acs-titulos {\n  color: black;\n  text-align: center;\n  margin: 0;\n  font-family: OpenSans-Light;\n  font-size: 13px;\n}\n\n.acs-contenido {\n  color: #c75142;\n  text-align: center;\n  margin: 0;\n  font-family: OpenSans-SemiBoldItalic;\n  font-size: 12px;\n}\n\n.col-nopadding {\n  padding-bottom: 0;\n}\n\n.rad-titulo {\n  color: #c75142;\n  font-family: OpenSans-Bold;\n  font-size: 14px;\n  margin: 3%;\n}\n\n.radiografia {\n  margin: 0 3%;\n  color: black;\n  font-size: 12px;\n}\n\n.radiografia p {\n  font-family: OpenSans-Italic;\n}\n\n.radiografia span {\n  font-family: OpenSans-Regular;\n}\n\n.ing-titulo {\n  color: #81af4f;\n  font-family: OpenSans-Bold;\n  font-size: 14px;\n  margin: 3%;\n}\n\n.ingredientes {\n  margin: 0 3%;\n  color: black;\n}\n\n.ingredientes p {\n  font-family: OpenSans-LightItalic;\n  font-size: 12px;\n}\n\n.precios {\n  position: absolute;\n  transform: translateY(-25%);\n  left: 77%;\n  border: 2px solid #c75142;\n  border-radius: 50%;\n  width: 50px !important;\n  height: 50px !important;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQkFBQTtBQUVKOztBQUFBO0VBQ0ksNkJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esd0NBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBTUo7O0FBSkE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EscUNBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFBZ0IsMEJBQUE7RUFDaEIsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVhBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksaUJBQUE7QUFlSjs7QUFiQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBZ0JKOztBQWRBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWhCSTtFQUNJLDRCQUFBO0FBa0JSOztBQWhCSTtFQUNJLDZCQUFBO0FBa0JSOztBQWZBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFrQko7O0FBaEJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFtQko7O0FBbEJJO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0FBb0JSOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBb0JKIiwiZmlsZSI6InByb2R1Y3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJhY2stYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkN2U2YTM7XHJcbn1cclxuLmNvbnRlbmlkb3tcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXItZ3Jpc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY1ZjQ7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmZyYW5qYS12ZXJkZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFhZjRmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4IDM1cHggMCAwO1xyXG59XHJcbi5jb250YWluZXItYmxhbmNve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAyNSUgMjVweCAyNXB4IDI1cHghaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXItZm90byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZvdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2Q3ZTZhMztcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmNvbnRhaW5lci1pbmZve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9ke1xyXG4gICAgY29sb3I6ICNjNzUxNDI7IGZvbnQtZmFtaWx5OiBPcGVuU2Fucy1Cb2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwJTtcclxuICAgIHBhZGRpbmc6IDMwJSA1JSAwJSA1JTtcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmFjcy10aXR1bG9ze1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLUxpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5hY3MtY29udGVuaWRve1xyXG4gICAgY29sb3I6ICNjNzUxNDI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnMtU2VtaUJvbGRJdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbC1ub3BhZGRpbmd7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ucmFkLXRpdHVsb3tcclxuICAgIGNvbG9yOiAjYzc1MTQyO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDMlO1xyXG59XHJcbi5yYWRpb2dyYWZpYXtcclxuICAgIG1hcmdpbjogMCAzJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLUl0YWxpYztcclxuICAgIH1cclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLVJlZ3VsYXI7XHJcbiAgICB9XHJcbn1cclxuLmluZy10aXR1bG97XHJcbiAgICBjb2xvcjogIzgxYWY0ZjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fucy1Cb2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG4uaW5ncmVkaWVudGVze1xyXG4gICAgbWFyZ2luOiAwIDMlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcHtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlblNhbnMtTGlnaHRJdGFsaWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbi5wcmVjaW9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1JSk7XHJcbiAgICBsZWZ0OiA3NyU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzc1MTQyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4IWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn0iXX0= */");

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
        this.urlLaptop = 'http://192.168.0.22/webservice/checkfood/';
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
//# sourceMappingURL=producto-producto-module.js.map