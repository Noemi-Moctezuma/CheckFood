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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border header\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"contenido\">\n  <div class=\"container-gris\">\n    <div class=\"franja-verde\"></div>\n    <div class=\"container-blanco\">\n      <div class=\"container-foto\">\n        <ion-img class=\"foto\" src=\"{{ imagen_rt }}\"></ion-img>\n      </div> \n        <ion-fab-button class=\"precios\"  color=\"dark\"> \n          <fa-icon icon=\"dollar-sign\"></fa-icon>\n        </ion-fab-button>\n      <div class=\"container-info\">\n        <p class=\"prod\">{{ nombre }} ({{ cantidad_tamano }})</p>\n        <ion-grid *ngIf=\" azucares || sodio || calorias || adulcorante || fibra || grasas \">\n          <ion-row>\n            <ion-col class=\"col-nopadding\"  *ngIf= \"azucares\">\n              <ion-row>\n                <ion-col class=\"col-nopadding\">\n                  <p class=\"acs-titulos\">Azúcar</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col >\n                  <p class=\"acs-contenido\">{{ azucares }}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col class=\"col-nopadding\" *ngIf= \"calorias\">\n              <ion-row>\n                <ion-col class=\"col-nopadding\">\n                  <p class=\"acs-titulos\">Calorías</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p class=\"acs-contenido\">{{ calorias }}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col class=\"col-nopadding\" *ngIf= \"sodio\">\n              <ion-row>\n                <ion-col class=\"col-nopadding\">\n                  <p class=\"acs-titulos\">Sodio</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p class=\"acs-contenido\">{{ sodio }}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-nopadding\" *ngIf= \"adulcorante\">\n              <ion-row>\n                <ion-col class=\"col-nopadding\">\n                  <p class=\"acs-titulos\">Adulcorantes</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p class=\"acs-contenido\">{{ adulcorante }}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col class=\"col-nopadding\" *ngIf= \"fibra\">\n              <ion-row>\n                <ion-col class=\"col-nopadding\">\n                  <p class=\"acs-titulos\">Fibra</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p class=\"acs-contenido\">{{ fibra }}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col class=\"col-nopadding\" *ngIf= \"grasas\">\n              <ion-row>\n                <ion-col class=\"col-nopadding\">\n                  <p class=\"acs-titulos\">Grasas</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p class=\"acs-contenido\">{{ grasas }}</p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-row *ngIf=\" sellos || aditivos\">\n          <ion-col>\n            <span class=\"rad-titulo\">Radiografía</span>\n            <div class=\"radiografia\">\n              <p *ngIf=\"sellos\" style=\"margin-bottom: 0;\">Sellos de advertencia: <span>{{ sellos }}</span></p>\n              <p *ngIf=\"aditivos\" style=\"margin-top: 0;\">Aditivos: <span>{{ aditivos }}</span></p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\" ingredientes \">\n          <ion-col>\n            <span class=\"ing-titulo\">Ingredientes</span>\n            <div class=\"ingredientes\">\n              <p *ngIf=\"ingredientes\">{{ ingredientes }}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>");

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





let ProductoPage = class ProductoPage {
    constructor(dataService) {
        this.dataService = dataService;
        this._id = 16;
    }
    //_id = localStorage.getItem('id');
    ngOnInit() {
        const sendData = {
            opcion: 'info',
            id: this._id
        };
        this.dataService.post('producto', sendData).subscribe(data => {
            this.id = data[0].id;
            this.nombre = data[0].nombre;
            this.precio_comer = data[0].precio_comer;
            this.precio_soriana = data[0].precio_soriana;
            this.precio_aurrera = data[0].precio_aurrera;
            this.fecha_actualizacion_comer = data[0].fecha_actualizacion_comer;
            this.fecha_actualizacion_soriana = data[0].fecha_actualizacion_soriana;
            this.fecha_actualizacion_aurrera = data[0].fecha_actualizacion_aurrera;
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
            console.log(this.nombre);
            console.log(data);
        });
    }
};
ProductoPage.ctorParameters = () => [
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: absolute;\n}\n\n.contenido {\n  --background: white!important;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.container-gris {\n  background-color: #f6f5f4;\n  margin: 25px;\n  border-radius: 35px;\n  overflow: auto;\n}\n\n.franja-verde {\n  background-color: #81af4f;\n  width: 100%;\n  height: 35px;\n  border-radius: 35px 35px 0 0;\n}\n\n.container-blanco {\n  background-color: white;\n  border-radius: 25px;\n  width: 80%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 25% 10% 10% 10% !important;\n}\n\n.container-foto {\n  position: relative;\n}\n\n.foto {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  border: 4px solid #d7e6a3;\n}\n\n.container-info {\n  position: relative;\n}\n\n.prod {\n  color: #c75142;\n  font-family: OpenSans-Bold;\n  text-align: center;\n  font-size: 14px;\n  padding-top: 30%;\n  padding: 30% 5% 0% 5%;\n  margin: 0%;\n}\n\n.acs-titulos {\n  color: black;\n  text-align: center;\n  margin: 0;\n  font-family: OpenSans-Light;\n  font-size: 13px;\n}\n\n.acs-contenido {\n  color: #c75142;\n  text-align: center;\n  margin: 0;\n  font-family: OpenSans-SemiBoldItalic;\n  font-size: 12px;\n}\n\n.col-nopadding {\n  padding-bottom: 0;\n}\n\n.rad-titulo {\n  color: #c75142;\n  font-family: OpenSans-Bold;\n  font-size: 14px;\n  margin: 3%;\n}\n\n.radiografia {\n  margin: 0 3%;\n  color: black;\n  font-size: 12px;\n}\n\n.radiografia p {\n  font-family: OpenSans-Italic;\n}\n\n.radiografia span {\n  font-family: OpenSans-Regular;\n}\n\n.ing-titulo {\n  color: #81af4f;\n  font-family: OpenSans-Bold;\n  font-size: 14px;\n  margin: 3%;\n}\n\n.ingredientes {\n  margin: 0 3%;\n  color: black;\n}\n\n.ingredientes p {\n  font-family: OpenSans-LightItalic;\n  font-size: 12px;\n}\n\n.precios {\n  position: absolute;\n  transform: translateY(-50%);\n  left: 75%;\n  border: 2px solid #c75142;\n  border-radius: 50%;\n  width: 45px !important;\n  height: 45px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw2QkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFLSjs7QUFIQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esa0NBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtFQUFnQiwwQkFBQTtFQUNoQixrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQVdKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQWFKOztBQVhBO0VBQ0ksaUJBQUE7QUFjSjs7QUFaQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBZUo7O0FBYkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFnQko7O0FBZkk7RUFDSSw0QkFBQTtBQWlCUjs7QUFmSTtFQUNJLDZCQUFBO0FBaUJSOztBQWRBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFpQko7O0FBZkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFqQkk7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7QUFtQlI7O0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQW1CSiIsImZpbGUiOiJwcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jb250ZW5pZG97XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlIWltcG9ydGFudDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyLWdyaXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNWY0O1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5mcmFuamEtdmVyZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxYWY0ZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweCAzNXB4IDAgMDtcclxufVxyXG4uY29udGFpbmVyLWJsYW5jb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDI1JSAxMCUgMTAlIDEwJSFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhaW5lci1mb3RvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm90byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZDdlNmEzO1xyXG59XHJcbi5jb250YWluZXItaW5mb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvZHtcclxuICAgIGNvbG9yOiAjYzc1MTQyOyBmb250LWZhbWlseTogT3BlblNhbnMtQm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMCU7XHJcbiAgICBwYWRkaW5nOiAzMCUgNSUgMCUgNSU7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcbi5hY3MtdGl0dWxvc3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fucy1MaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uYWNzLWNvbnRlbmlkb3tcclxuICAgIGNvbG9yOiAjYzc1MTQyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLVNlbWlCb2xkSXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jb2wtbm9wYWRkaW5ne1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLnJhZC10aXR1bG97XHJcbiAgICBjb2xvcjogI2M3NTE0MjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fucy1Cb2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG4ucmFkaW9ncmFmaWF7XHJcbiAgICBtYXJnaW46IDAgMyU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fucy1JdGFsaWM7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fucy1SZWd1bGFyO1xyXG4gICAgfVxyXG59XHJcbi5pbmctdGl0dWxve1xyXG4gICAgY29sb3I6ICM4MWFmNGY7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnMtQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMyU7XHJcbn1cclxuLmluZ3JlZGllbnRlc3tcclxuICAgIG1hcmdpbjogMCAzJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLUxpZ2h0SXRhbGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG4ucHJlY2lvcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgbGVmdDogNzUlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2M3NTE0MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0NXB4IWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDVweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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
        this.url = 'http://localhost/webservice/checkfood/';
        this.api = '/service.php';
    }
    post(model, params) {
        return this.http.post(this.url + model + this.api, params, { responseType: 'json' });
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