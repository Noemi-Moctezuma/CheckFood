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
        this.idCategoria = localStorage.getItem('categoria_id');
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
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  position: absolute;\n  text-align: center;\n  background-color: #f6f5f4;\n  border: 3px solid #f6f5f4;\n  border-radius: 40px;\n  margin: 5%;\n  height: 93%;\n}\n\n.foto {\n  margin: 0px auto;\n  width: 90px;\n  margin-top: -28%;\n}\n\n.menu {\n  width: 50%;\n  position: absolute;\n  left: 25%;\n  right: 25%;\n  bottom: 0px;\n}\n\n.titulo {\n  font-family: Cocogoose-Bold;\n  margin-top: 10px;\n  color: #81af4f;\n  font-size: 20px;\n}\n\n.publicidad {\n  background-image: url(\"/assets/publicidad/aurrera.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: white;\n  height: 15%;\n  border-radius: 22px;\n  margin-bottom: 20px;\n}\n\n.linea-punteada {\n  height: 25px;\n  border-bottom-style: dotted;\n  border-bottom-width: 5px;\n  margin-bottom: 20px;\n}\n\n.botoncitoPerfil {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: green;\n  border-radius: 50%;\n  margin-top: 193%;\n  margin-left: 61%;\n  z-index: 100;\n}\n\n.botoncitoHome {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: blue;\n  border-radius: 50%;\n  z-index: 100;\n  margin-top: 186%;\n  margin-left: 45%;\n}\n\n.botoncitoCategorias {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: red;\n  border-radius: 50%;\n  margin-top: 193%;\n  margin-left: 29%;\n  z-index: 100;\n}\n\n.card {\n  border-radius: 10px;\n  background-color: white;\n  margin: 5px;\n  padding: 5px;\n}\n\n.bloque {\n  background-color: #f6f5f4;\n  border-radius: 40px;\n  height: 50%;\n  margin: 50px;\n}\n\n.extra {\n  background-color: #f6f5f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGVnb3JpYS1zZWxlY2Npb25hZGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUVJLHVEQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQURBO0VBRUksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0oiLCJmaWxlIjoiY2F0ZWdvcmlhLXNlbGVjY2lvbmFkYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNDtcclxuICAgIGJvcmRlcjozcHggc29saWQgI2Y2ZjVmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6NDBweDtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBoZWlnaHQ6IDkzJTtcclxufVxyXG4uZm90b3tcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI4JTtcclxufVxyXG4ubWVudXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgXHJcbiAgICBsZWZ0OjI1JTsgXHJcbiAgICByaWdodDoyNSU7IFxyXG4gICAgYm90dG9tOjBweDtcclxufVxyXG4udGl0dWxve1xyXG4gICAgZm9udC1mYW1pbHk6Q29jb2dvb3NlLUJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4MWFmNGY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnB1YmxpY2lkYWR7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcHVibGljaWRhZC9hdXJyZXJhLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubGluZWEtcHVudGVhZGF7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3R0ZWQ7IFxyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYm90b25jaXRvUGVyZmlse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICAvL29wYWNpdHk6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDE5MyU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjElO1xyXG4gICAgei1pbmRleDogMTAwXHJcbn1cclxuLmJvdG9uY2l0b0hvbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIC8vb3BhY2l0eTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxODYlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxufVxyXG4uYm90b25jaXRvQ2F0ZWdvcmlhc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgLy9vcGFjaXR5OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTkzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOSU7XHJcbiAgICB6LWluZGV4OiAxMDBcclxufVxyXG5cclxuLmNhcmR7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uYmxvcXVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6NDBweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgXHJcblxyXG59XHJcbi5leHRyYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY1ZjQ7XHJcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<body style=\"height:100%\" >\r\n  <div class=\"fondo\">\r\n      <img src=\"/assets/categoriaSeleccionada/0.png\" >\r\n      <div class=\"foto\">\r\n        <img [src]=foto  >\r\n      </div>\r\n      <div class=\"titulo\">\r\n        {{categoriaNombre}}\r\n      </div>\r\n      <div class=\"linea-punteada\"></div>\r\n      <div class=\"publicidad\">\r\n        <!--<img src=\"/assets/categoriaSeleccionada/publicidad.png\" >-->\r\n      </div>\r\n\r\n      <ion-content class=\"bloque\">\r\n        <ion-grid class=\"extra\">\r\n          <ion-row  class=\"extra\">\r\n            <ion-col size=\"4\" *ngFor=\" let producto of productos\">\r\n\r\n\r\n            <div class=\"card\" (click)=\"seleccionarProducto(producto.id)\"  routerLink=\"/producto\" >\r\n              <div text-align= “center” > <img src=\" {{producto.imagen_rt}}\">\r\n              </div>\r\n              <div style=\"font-family:OpenSans-SemiBold;\">{{producto.nombre}}</div>\r\n            </div>\r\n               \r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-content>\r\n      \r\n  </div>\r\n  \r\n  <button routerLink=\"/inicio-sesion\" class=\"botoncitoPerfil\"></button>\r\n  <button routerLink=\"/home\" class=\"botoncitoHome\"></button>\r\n  <button routerLink=\"/categorias\" class=\"botoncitoCategorias\"></button>\r\n  \r\n<img src=\"/assets/botonesMenu/categorias.png\" alt=\"\" class=\"menu\">\r\n</body>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=categoria-seleccionada-categoria-seleccionada-module.js.map