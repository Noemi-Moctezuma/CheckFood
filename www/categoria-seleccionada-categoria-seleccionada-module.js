(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoria-seleccionada-categoria-seleccionada-module"],{

/***/ "Brq9":
/*!***********************************************************************!*\
  !*** ./src/app/categoria-seleccionada/categoria-seleccionada.page.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriaSeleccionadaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaSeleccionadaPage", function() { return CategoriaSeleccionadaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categoria_seleccionada_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categoria-seleccionada.page.html */ "pL2i");
/* harmony import */ var _categoria_seleccionada_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoria-seleccionada.page.scss */ "WxIu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data-service.service */ "xf3R");





let CategoriaSeleccionadaPage = class CategoriaSeleccionadaPage {
    constructor(dataService) {
        this.dataService = dataService;
        this.idCategoria = '2';
        this.productos = [];
    }
    ngOnInit() {
        this.foto = 'assets/categoriaSeleccionada/' + this.idCategoria + '.png';
        //traer el nombre de la categoria
        var info = {
            opcion: 'nombreCategoria',
            id: this.idCategoria
        };
        //console.log(info);
        this.dataService.post('categoriaSeleccionada', info).subscribe((data) => {
            this.categoriaNombre = data[0].categoria;
            this.categoriaNombre = this.categoriaNombre.toUpperCase();
        });
        //traer todos los productos de la categoria seleccionada
        var info = {
            opcion: 'productos',
            id: this.idCategoria
        };
        //console.log(info);
        this.dataService.post('categoriaSeleccionada', info).subscribe((data) => {
            this.productos = data;
            //console.log(this.productos[0].imagen_rt);  
        });
    }
    seleccionarProducto(id) {
        //console.log(id);
        localStorage.setItem('producto_id', id);
    }
};
CategoriaSeleccionadaPage.ctorParameters = () => [
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
CategoriaSeleccionadaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categoria-seleccionada',
        template: _raw_loader_categoria_seleccionada_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categoria_seleccionada_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriaSeleccionadaPage);



/***/ }),

/***/ "HZm9":
/*!*********************************************************************************!*\
  !*** ./src/app/categoria-seleccionada/categoria-seleccionada-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoriaSeleccionadaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaSeleccionadaPageRoutingModule", function() { return CategoriaSeleccionadaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categoria_seleccionada_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoria-seleccionada.page */ "Brq9");




const routes = [
    {
        path: '',
        component: _categoria_seleccionada_page__WEBPACK_IMPORTED_MODULE_3__["CategoriaSeleccionadaPage"]
    }
];
let CategoriaSeleccionadaPageRoutingModule = class CategoriaSeleccionadaPageRoutingModule {
};
CategoriaSeleccionadaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriaSeleccionadaPageRoutingModule);



/***/ }),

/***/ "WxIu":
/*!*************************************************************************!*\
  !*** ./src/app/categoria-seleccionada/categoria-seleccionada.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  position: absolute;\n  text-align: center;\n  background-color: #f6f5f4;\n  border: 3px solid #f6f5f4;\n  border-radius: 40px;\n  margin: 5%;\n  height: 93%;\n}\n\n.foto {\n  margin: 0px auto;\n  width: 90px;\n  margin-top: -28%;\n}\n\n.menu {\n  width: 50%;\n  position: absolute;\n  left: 25%;\n  right: 25%;\n  bottom: 0px;\n}\n\n.titulo {\n  margin-top: 10px;\n  color: #81af4f;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.publicidad {\n  background-color: white;\n  height: 15%;\n  border-radius: 22px;\n  margin-bottom: 20px;\n}\n\n.linea-punteada {\n  height: 25px;\n  border-bottom-style: dotted;\n  border-bottom-width: 5px;\n  margin-bottom: 20px;\n}\n\n.botoncitoPerfil {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: green;\n  border-radius: 50%;\n  margin-top: 193%;\n  margin-left: 61%;\n  z-index: 100;\n}\n\n.botoncitoHome {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: blue;\n  border-radius: 50%;\n  z-index: 100;\n  margin-top: 186%;\n  margin-left: 45%;\n}\n\n.botoncitoCategorias {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: red;\n  border-radius: 50%;\n  margin-top: 193%;\n  margin-left: 29%;\n  z-index: 100;\n}\n\n.card {\n  border-radius: 10px;\n  background-color: white;\n  margin: 5px;\n  padding: 5px;\n}\n\n.bloque {\n  background-color: #f6f5f4;\n  border-radius: 40px;\n  height: 50%;\n  margin: 50px;\n}\n\n.extra {\n  background-color: #f6f5f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGVnb3JpYS1zZWxlY2Npb25hZGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFGQTtFQUVJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS0o7O0FBREE7RUFDSSx5QkFBQTtBQUlKIiwiZmlsZSI6ImNhdGVnb3JpYS1zZWxlY2Npb25hZGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRve1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY1ZjQ7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkICNmNmY1ZjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgaGVpZ2h0OiA5MyU7XHJcbn1cclxuLmZvdG97XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yOCU7XHJcbn1cclxuLm1lbnV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gICAgbGVmdDoyNSU7IFxyXG4gICAgcmlnaHQ6MjUlOyBcclxuICAgIGJvdHRvbTowcHg7XHJcbn1cclxuLnRpdHVsb3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogIzgxYWY0ZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnB1YmxpY2lkYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5saW5lYS1wdW50ZWFkYXtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdHRlZDsgXHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5ib3RvbmNpdG9QZXJmaWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIC8vb3BhY2l0eTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTkzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MSU7XHJcbiAgICB6LWluZGV4OiAxMDBcclxufVxyXG4uYm90b25jaXRvSG9tZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgLy9vcGFjaXR5OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIG1hcmdpbi10b3A6IDE4NiU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xyXG59XHJcbi5ib3RvbmNpdG9DYXRlZ29yaWFze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAvL29wYWNpdHk6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxOTMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI5JTtcclxuICAgIHotaW5kZXg6IDEwMFxyXG59XHJcblxyXG4uY2FyZHtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5ibG9xdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNWY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czo0MHB4O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICBcclxuXHJcbn1cclxuLmV4dHJhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNDtcclxufSJdfQ== */");

/***/ }),

/***/ "kIUw":
/*!*************************************************************************!*\
  !*** ./src/app/categoria-seleccionada/categoria-seleccionada.module.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriaSeleccionadaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaSeleccionadaPageModule", function() { return CategoriaSeleccionadaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categoria_seleccionada_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria-seleccionada-routing.module */ "HZm9");
/* harmony import */ var _categoria_seleccionada_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria-seleccionada.page */ "Brq9");







let CategoriaSeleccionadaPageModule = class CategoriaSeleccionadaPageModule {
};
CategoriaSeleccionadaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categoria_seleccionada_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriaSeleccionadaPageRoutingModule"]
        ],
        declarations: [_categoria_seleccionada_page__WEBPACK_IMPORTED_MODULE_6__["CategoriaSeleccionadaPage"]]
    })
], CategoriaSeleccionadaPageModule);



/***/ }),

/***/ "pL2i":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categoria-seleccionada/categoria-seleccionada.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<body style=\"height:100%\" >\n  <div class=\"fondo\">\n      <img src=\"/assets/categoriaSeleccionada/0.png\" >\n      <div class=\"foto\">\n        <img [src]=foto  >\n      </div>\n      <div class=\"titulo\">\n        {{categoriaNombre}}\n      </div>\n      <div class=\"linea-punteada\"></div>\n      <div class=\"publicidad\">\n        <!--<img src=\"/assets/categoriaSeleccionada/publicidad.png\" >-->\n      </div>\n\n      <ion-content class=\"bloque\">\n        <ion-grid class=\"extra\">\n          <ion-row  class=\"extra\">\n            <ion-col size=\"4\" *ngFor=\" let producto of productos\">\n\n\n            <div class=\"card\" (click)=\"seleccionarProducto(producto.id)\"  routerLink=\"/producto\" >\n              <div text-align= “center” > <img src=\" {{producto.imagen_rt}}\">\n              </div>\n              {{producto.nombre}}\n            </div>\n               \n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-content>\n      \n  </div>\n  \n  <button routerLink=\"/perfil\" class=\"botoncitoPerfil\"></button>\n  <button routerLink=\"/home\" class=\"botoncitoHome\"></button>\n  <button routerLink=\"/categoria-seleccionada\" class=\"botoncitoCategorias\"></button>\n  \n<img src=\"/assets/botonesMenu/categorias.png\" alt=\"\" class=\"menu\">\n</body>\n\n");

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
//# sourceMappingURL=categoria-seleccionada-categoria-seleccionada-module.js.map