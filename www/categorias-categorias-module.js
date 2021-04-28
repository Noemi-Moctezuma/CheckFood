(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-module"],{

/***/ "cHTx":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-routing.module */ "r4jW");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias.page */ "zjH6");







let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })
], CategoriasPageModule);



/***/ }),

/***/ "l6Wj":
/*!*************************************************!*\
  !*** ./src/app/categorias/categorias.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  position: relative;\n  text-align: center;\n  border-radius: 35px;\n  margin: 5%;\n  height: 95%;\n  z-index: 1;\n  background-color: #f6f5f4;\n}\n\n.franja {\n  border-radius: 30px 30px 0px 0px;\n  -moz-border-radius: 30px 30px 0px 0px;\n  -webkit-border-radius: 30px 30px 0px 0px;\n  background-color: #81af4f;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  color: white;\n  font-family: Cocogoose-Bold;\n  font-size: 20px;\n}\n\n.linea-punteada {\n  height: 25px;\n  border-bottom-style: dotted;\n  border-bottom-width: 5px;\n  margin-bottom: 20px;\n  color: black;\n}\n\n.botoncitoPerfil {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: green;\n  border-radius: 50%;\n  margin-top: -10vh;\n  margin-left: 61%;\n  z-index: 100;\n}\n\n.botoncitoHome {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: blue;\n  border-radius: 50%;\n  z-index: 100;\n  margin-top: -13vh;\n  margin-left: 45%;\n}\n\n.botoncitoCategorias {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: red;\n  border-radius: 50%;\n  margin-top: -10vh;\n  margin-left: 29%;\n  z-index: 100;\n}\n\n.menu {\n  width: 50%;\n  position: absolute;\n  left: 25%;\n  right: 25%;\n  bottom: 0px;\n  z-index: 90;\n}\n\n.fondoCategorias {\n  position: absolute;\n  text-align: center;\n  margin-top: 6vh;\n  margin-left: 5vw;\n  height: 20vh;\n  width: 80vw;\n}\n\n.titulo {\n  font-family: OpenSans-Regular;\n  color: #81af4f;\n  font-size: 12px;\n}\n\n.foto {\n  margin-top: 3vh;\n  margin-left: 2.4vw;\n  width: 8vh;\n  z-index: 10;\n  margin-bottom: 1vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGVnb3JpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUE7O0FBRkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBS0oiLCJmaWxlIjoiY2F0ZWdvcmlhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6MzVweDtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNWY0O1xyXG59XHJcbi5mcmFuamF7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxYWY0ZjtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAgQ29jb2dvb3NlLUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmxpbmVhLXB1bnRlYWRhe1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkOyBcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib3RvbmNpdG9QZXJmaWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIC8vb3BhY2l0eTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjElO1xyXG4gICAgei1pbmRleDogMTAwXHJcbn1cclxuLmJvdG9uY2l0b0hvbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIC8vb3BhY2l0eTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTN2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbn1cclxuLmJvdG9uY2l0b0NhdGVnb3JpYXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIC8vb3BhY2l0eTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI5JTtcclxuICAgIHotaW5kZXg6IDEwMFxyXG59XHJcbi5tZW51e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlOyBcclxuICAgIGxlZnQ6MjUlOyBcclxuICAgIHJpZ2h0OjI1JTsgXHJcbiAgICBib3R0b206MHB4O1xyXG4gICAgei1pbmRleDogOTA7XHJcbn1cclxuLmZvbmRvQ2F0ZWdvcmlhc3tcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDZ2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICB3aWR0aDogODB2dztcclxufVxyXG4udGl0dWxve1xyXG5mb250LWZhbWlseTpPcGVuU2Fucy1SZWd1bGFyO1xyXG5jb2xvcjogIzgxYWY0ZjtcclxuZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb3Rve1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNHZ3O1xyXG4gICAgd2lkdGg6IDh2aDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG59Il19 */");

/***/ }),

/***/ "r4jW":
/*!*********************************************************!*\
  !*** ./src/app/categorias/categorias-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function() { return CategoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias.page */ "zjH6");




const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }
];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {
};
CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriasPageRoutingModule);



/***/ }),

/***/ "umP3":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<body style=\"height:100%\" >\r\n  <div class=\"fondo\">\r\n    <div class=\"franja\">\r\n      ¿QUIZÁ POR TEMÁTICA?\r\n    </div>  \r\n    <div class=\"linea-punteada\">\r\n\r\n    </div>\r\n\r\n<div class=\"fondoCategorias\">\r\n<img src=\"assets/categoriaSeleccionada/fondoCategorias.png\" alt=\"\" style=\"z-index: 2;\">\r\n</div>\r\n<div class=\"fondoCategorias\" style=\"margin-top:28vh;\">\r\n  <img src=\"assets/categoriaSeleccionada/fondoCategorias.png\" alt=\"\" style=\"z-index: 2;\">\r\n\r\n</div>\r\n<div class=\"fondoCategorias\" style=\"margin-top:48vh;\">\r\n  <img src=\"assets/categoriaSeleccionada/fondoCategorias.png\" alt=\"\" style=\"z-index: 2;\">\r\n\r\n</div>\r\n        \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"4\" *ngFor=\"let item of map | keyvalue\" >\r\n          \r\n          <div text-align= “center” class=\"foto\"> <img src=\"assets/categoriaSeleccionada/{{item.key}}.png\" class=\"foto\" (click)=\"seleccionarCategoria(item.key) \">\r\n          </div>\r\n          <div class=\"titulo\">\r\n            {{item.value}}\r\n          </div>\r\n        </ion-col>\r\n          \r\n    \r\n      </ion-row>\r\n    </ion-grid>\r\n    \r\n    \r\n    \r\n\r\n  </div>\r\n\r\n  \r\n  <button routerLink=\"/perfil\" class=\"botoncitoPerfil\"></button>\r\n  <button routerLink=\"/home\" class=\"botoncitoHome\"></button>\r\n  <button routerLink=\"/categorias\" class=\"botoncitoCategorias\"></button>\r\n  \r\n<img src=\"/assets/botonesMenu/categorias.png\" alt=\"\" class=\"menu\">\r\n</body>\r\n\r\n");

/***/ }),

/***/ "zjH6":
/*!***********************************************!*\
  !*** ./src/app/categorias/categorias.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPage", function() { return CategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias.page.html */ "umP3");
/* harmony import */ var _categorias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias.page.scss */ "l6Wj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let CategoriasPage = class CategoriasPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.object = { 1: 'LÁCTEOS Y REFRIGERADOS', 2: 'BEBIDAS',
            3: 'BOTANAS', 4: 'DULCES', 5: 'BEBÉS', 6: 'CEREALES',
            7: 'SALCHICHONERÍA Y CARNES', 8: 'ENLATADOS Y CONSERVAS', 9: 'ALIMENTOS SALUDABLES' };
        this.map = new Map([[1, 'LÁCTEOS Y REFRIGERADOS'], [2, 'BEBIDAS'],
            [3, 'BOTANAS'], [4, 'DULCES'], [5, 'BEBÉS'], [6, 'CEREALES'],
            [7, 'SALCHICHONERÍA Y CARNES'], [8, 'ENLATADOS Y CONSERVAS'], [9, 'ALIMENTOS SALUDABLES']]);
    }
    ngOnInit() {
    }
    seleccionarCategoria(data) {
        console.log(data);
        localStorage.setItem('categoria_id', data);
        this.navCtrl.navigateRoot('/categoria-seleccionada');
    }
};
CategoriasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorias',
        template: _raw_loader_categorias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriasPage);



/***/ })

}]);
//# sourceMappingURL=categorias-categorias-module.js.map