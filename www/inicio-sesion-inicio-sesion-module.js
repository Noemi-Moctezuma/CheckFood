(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-sesion-inicio-sesion-module"],{

/***/ "Dm7o":
/*!*******************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  position: relative;\n  text-align: center;\n  border-radius: 40px;\n  margin: 5%;\n  height: 95%;\n  background-image: url(\"/assets/fondo/borroso.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 1;\n}\n\n.logo {\n  position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 40%;\n  height: auto;\n  margin-top: 30%;\n  z-index: 100;\n}\n\n.dato {\n  margin-top: 10px;\n  position: center;\n  color: #c75142;\n  font-family: Cocogoose-Light;\n  border-radius: 50px;\n  height: 40px;\n  background-color: white;\n  border: 2px solid #d7e6a3;\n  width: 70%;\n  text-align: center;\n}\n\n.icono {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #c75142;\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n  background-color: white;\n  margin-left: -12%;\n}\n\n.titulo {\n  font-family: Cocogoose-Bold;\n  letter-spacing: -1px;\n  display: flex;\n  align-items: center;\n  margin-top: 10%;\n  position: relative;\n  color: #44280b;\n  margin-left: 20%;\n}\n\n.boton {\n  text-align: center;\n  position: center;\n  color: white;\n  border-radius: 15px;\n  width: 40%;\n  height: 40px;\n  text-align: center;\n  font-family: Cocogoose-Light;\n  font-size: 11px;\n  letter-spacing: 1px;\n  background-color: #81af4f;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 30%;\n  margin-top: 60px;\n  margin-bottom: 40px;\n}\n\n.texto {\n  font-family: Cocogoose-Light;\n  color: #44280b;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluaWNpby1zZXNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUQsWUFBQTtBQURIOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFFSSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSEo7O0FBT0E7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU9BO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpKIiwiZmlsZSI6ImluaWNpby1zZXNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ZvbmRvL2JvcnJvc28ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgXHJcblxyXG59XHJcbi5sb2dve1xyXG4gICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB6LWluZGV4OiAxMDA7XHJcblxyXG59XHJcbi5kYXRve1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBjb2xvcjojYzc1MTQyO1xyXG4gICAgZm9udC1mYW1pbHk6IENvY29nb29zZS1MaWdodDtcclxuICAgIGJvcmRlci1yYWRpdXM6NTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNkN2U2YTMgO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmljb25ve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjYzc1MTQyIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyJTtcclxuXHJcbn1cclxuLnRpdHVsb3tcclxuXHJcbiAgICBmb250LWZhbWlseTpDb2NvZ29vc2UtQm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjNDQyODBiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIFxyXG59XHJcblxyXG4uYm90b257XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICBDb2NvZ29vc2UtTGlnaHQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxYWY0ZjtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4udGV4dG97XHJcbiAgICBmb250LWZhbWlseTogQ29jb2dvb3NlLUxpZ2h0O1xyXG4gICAgY29sb3I6ICM0NDI4MGI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Nh2W":
/*!***************************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: InicioSesionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageRoutingModule", function() { return InicioSesionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-sesion.page */ "sosP");




const routes = [
    {
        path: '',
        component: _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_3__["InicioSesionPage"]
    }
];
let InicioSesionPageRoutingModule = class InicioSesionPageRoutingModule {
};
InicioSesionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioSesionPageRoutingModule);



/***/ }),

/***/ "fW6e":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-sesion/inicio-sesion.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<body style=\"height:100%\" >\r\n  <div class=\"fondo\">\r\n\r\n      <img class=\"logo\" src=\"/assets/fondo/logo.png\" alt=\"\">\r\n      <div class=\"titulo\">\r\n        <div class=\"icono\">\r\n          <ion-icon name=\"person\" style=\"color: #c75142; \"></ion-icon>  \r\n        </div>\r\n          CORREO\r\n      </div>\r\n      <input type=\"text\" class=\"dato\" id=\"nombreId\">\r\n      <div class=\"titulo\">\r\n      \r\n        <div class=\"icono\">\r\n        \r\n          <ion-icon name=\"lock-closed\" style=\"color: #c75142; \"></ion-icon>\r\n          \r\n        </div>\r\n        \r\n          CONTRASEÑA\r\n      </div>\r\n      <input type=\"password\" class=\"dato\" id=\"contraId\"\r\n      style=\"font-size: 60px; font-weight: bolder;\">\r\n\r\n      <div class=\"boton\" (click)=\"iniciarSesion()\">\r\n        Iniciar sesión\r\n      </div>\r\n      <div class=\"texto\">\r\n        \r\n      Aún no tengo cuenta <a href=\"registro\" style=\"color: #c75142; font-family: Cocogoose-Bold; font-size: 16px;\"> Registrarme</a>\r\n\r\n      </div>\r\n  </div>\r\n</body>\r\n\r\n");

/***/ }),

/***/ "m/SL":
/*!*******************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioSesionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageModule", function() { return InicioSesionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-sesion-routing.module */ "Nh2W");
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-sesion.page */ "sosP");







let InicioSesionPageModule = class InicioSesionPageModule {
};
InicioSesionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioSesionPageRoutingModule"]
        ],
        declarations: [_inicio_sesion_page__WEBPACK_IMPORTED_MODULE_6__["InicioSesionPage"]]
    })
], InicioSesionPageModule);



/***/ }),

/***/ "sosP":
/*!*****************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion.page.ts ***!
  \*****************************************************/
/*! exports provided: InicioSesionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPage", function() { return InicioSesionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_sesion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio-sesion.page.html */ "fW6e");
/* harmony import */ var _inicio_sesion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio-sesion.page.scss */ "Dm7o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data-service.service */ "xf3R");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let InicioSesionPage = class InicioSesionPage {
    constructor(dataService, alertController, navCtrl) {
        this.dataService = dataService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    iniciarSesion() {
        var info = {
            opcion: 'inicioSesion',
            nombre: (document.getElementById("nombreId").value),
            contra: (document.getElementById("contraId").value)
        };
        //console.log(info);
        this.dataService.post('inicioSesion', info).subscribe((data) => {
            if (data != false) {
                // console.log(data[0].id);
                localStorage.setItem('usuario_id', data[0].id);
                this.navCtrl.navigateRoot('/perfil');
            }
            else {
                this.alertError();
            }
        });
    }
    alertError() {
        this.alertController.create({
            header: '¡Error al entrar!',
            message: 'Información de usuario incorrecta',
            buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
};
InicioSesionPage.ctorParameters = () => [
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
InicioSesionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio-sesion',
        template: _raw_loader_inicio_sesion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_sesion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioSesionPage);



/***/ })

}]);
//# sourceMappingURL=inicio-sesion-inicio-sesion-module.js.map