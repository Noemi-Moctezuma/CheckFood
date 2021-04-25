(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "+WFb":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "q4Mr");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "5Trh");







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "5Trh":
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro.page.html */ "6WTV");
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss */ "klLB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data-service.service */ "xf3R");







let RegistroPage = class RegistroPage {
    constructor(alertController, dataService, navCtrl) {
        this.alertController = alertController;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.foto = 'assets/fotosPerfil/perfil0.png';
        this.avatar = '';
        this.imagenes = [
            "perfil1",
            "perfil2",
            "perfil3",
            "perfil4",
            "perfil5",
            "perfil6",
            "perfil7",
            "perfil8"
        ];
    }
    ngOnInit() {
    }
    openModal() {
        document.getElementById('idFondo').style.display = 'block';
    }
    cambiarPerfil(data) {
        //console.log(data);
        document.getElementById('idFondo').style.display = 'none';
        this.avatar = data;
        this.foto = 'assets/fotosPerfil/' + data + '.png';
    }
    cerrarModalFoto() {
        document.getElementById('idFondo').style.display = 'none';
    }
    registrar() {
        var info = {
            opcion: 'registrar',
            nombre: (document.getElementById("nombreId").value),
            correo: (document.getElementById("correoId").value),
            contrasena: (document.getElementById("contraId").value),
            avatar: this.avatar
        };
        this.dataService.post('registro', info).subscribe((data) => {
            //console.log(data);
            if (data != 'error') {
                //console.log("idi de usuairo: "+data[0] )
                localStorage.setItem('usuario_id', data[0]);
                this.alertOk();
            }
        });
    }
    alertError() {
        this.alertController.create({
            header: '¡Ocurrió un error!',
            message: 'No se pudo crear el perfil, por favor inténtalo de nuevo',
            buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
    ;
    alertOk() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¡Usuario creado!',
                message: 'Perfil creado con éxito',
                buttons: [
                    {
                        text: 'Aceptar',
                        cssClass: 'primary',
                        handler: () => {
                            this.navCtrl.navigateRoot('/perfil');
                        }
                    },
                ]
            });
            alert.present();
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistroPage);



/***/ }),

/***/ "6WTV":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<body style=\"height:100%\" >\n  <div class=\"fondo\">\n    <div class=\"franja\">\n      REGISTRO\n    </div>  \n    <div class=\"linea-punteada\">\n\n    </div>\n    <div class=\"fotoPerfil2\">\n      <div class=\"fotoPerfil\" >\n        <img [src]=foto (click)=\"openModal()\" >\n      </div>\n    </div>\n\n    <div class=\"titulo\">\n      <div class=\"icono\">\n        <ion-icon name=\"person\" style=\"color: #c75142; \"></ion-icon>  \n      </div>\n        NOMBRE DE USUARIO\n    </div>\n    <input type=\"text\" class=\"dato\" id=\"nombreId\">\n\n\n    <div class=\"titulo\">\n      <div class=\"icono\">\n        <ion-icon name=\"mail\" style=\"color: #c75142; \"></ion-icon>  \n      </div>\n        CORREO\n    </div>\n    <input type=\"text\" class=\"dato\" id=\"correoId\">\n\n      <div class=\"titulo\">\n      \n        <div class=\"icono\">\n        \n          <ion-icon name=\"lock-closed\" style=\"color: #c75142; \"></ion-icon>\n          \n        </div>\n        \n          CONTRASEÑA\n      </div>\n      <input type=\"password\" class=\"dato\" id=\"contraId\"\n      style=\"font-size: 60px; font-weight: bolder;\">\n\n      <div class=\"boton\" (click)=\"registrar()\">\n        Registrarme\n      </div>\n      <div class=\"texto\">\n        \n      Ya tengo cuenta <a href=\"inicio-sesion\" style=\"color: #c75142; font-family: Cocogoose-Bold; font-size: 16px;\"> Iniciar Sesión</a>\n\n      </div>\n\n\n\n      <div class=\"jw-modal-wrapper\" id=\"idFondo\">\n  \n        <div class=\"jw-modal\">\n          <div class=\"jw-modal-body\">\n  \n            <div class=\"modal-top\">\n              <button class=\"botonCerrar\"  (click)=\"cerrarModalFoto()\">\n                x\n              </button>\n              <p>Elegir avatar</p>\n  \n            </div>\n            <div class=\"linea-punteada2\"></div>\n            <div>\n              <ion-grid>\n                <ion-row>\n                  \n                  <ion-col size=\"6\" *ngFor=\" let imagen of imagenes\" >\n              \n                    <div text-align= “center”> <img src=\"assets/fotosPerfil/{{imagen}}.png\" class=\"foto\" (click)=\"cambiarPerfil(imagen) \">\n                      </div>\n                  </ion-col>\n                    \n              \n                </ion-row>\n              </ion-grid>\n            </div>\n              \n              \n       \n          </div>\n        </div>\n        <div class=\"jw-modal-background\">\n  \n        </div>\n        \n        </div>\n\n\n  </div>\n</body>\n\n");

/***/ }),

/***/ "klLB":
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  position: relative;\n  text-align: center;\n  border-radius: 40px;\n  margin: 5%;\n  height: 95%;\n  background-image: url(\"/assets/fondo/borroso.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 1;\n}\n\n.franja {\n  border-radius: 30px 30px 0px 0px;\n  -moz-border-radius: 30px 30px 0px 0px;\n  -webkit-border-radius: 30px 30px 0px 0px;\n  background-color: #c75142;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  color: white;\n  font-family: Cocogoose-Bold;\n  font-size: 22px;\n}\n\n.linea-punteada {\n  height: 25px;\n  border-bottom-style: dotted;\n  border-bottom-width: 5px;\n  margin-bottom: 20px;\n  color: white;\n}\n\n.fotoPerfil {\n  width: 110px;\n  height: 110px;\n  margin: 0px auto;\n  border: 10px solid white;\n  border-radius: 50%;\n}\n\n.fotoPerfil2 {\n  width: 115px;\n  height: 115px;\n  margin: 1px auto;\n  border: 2px solid #d7e6a3;\n  border-radius: 50%;\n}\n\n.dato {\n  margin-top: 10px;\n  position: center;\n  color: #c75142;\n  font-family: Cocogoose-Light;\n  border-radius: 50px;\n  height: 40px;\n  background-color: white;\n  border: 2px solid #d7e6a3;\n  width: 68%;\n  text-align: center;\n}\n\n.titulo {\n  font-family: Cocogoose-Bold;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  margin-top: 7%;\n  position: relative;\n  color: #44280b;\n  margin-left: 20%;\n}\n\n.boton {\n  text-align: center;\n  position: center;\n  color: white;\n  border-radius: 15px;\n  width: 40%;\n  height: 40px;\n  text-align: center;\n  font-family: Cocogoose-Light;\n  font-size: 11px;\n  letter-spacing: 1px;\n  background-color: #81af4f;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 30%;\n  margin-top: 60px;\n  margin-bottom: 40px;\n}\n\n.texto {\n  font-family: Cocogoose-Light;\n  color: #44280b;\n  font-size: 14px;\n}\n\n.icono {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #c75142;\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n  background-color: white;\n  margin-left: -12%;\n}\n\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n.jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\n\n.jw-modal-body {\n  background: white;\n  width: 70%;\n  height: 60%;\n  /* margin exposes part of the modal background */\n  margin: 15%;\n  margin-top: 45%;\n  border: 0px solid #f6f5f4;\n  border-radius: 30px;\n}\n\n.jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\n\n.jw-modal-wrapper {\n  display: none;\n}\n\n.modal-top {\n  border-radius: 30px 30px 0px 0px;\n  -moz-border-radius: 30px 30px 0px 0px;\n  -webkit-border-radius: 30px 30px 0px 0px;\n  background-color: #81af4f;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  color: white;\n  font-family: Cocogoose-light;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.linea-punteada2 {\n  height: 25px;\n  border-bottom-style: dotted;\n  border-bottom-width: 5px;\n  margin-bottom: 20px;\n}\n\n.foto {\n  width: 80px;\n  height: 80px;\n  display: block;\n  margin: auto;\n}\n\n.botonCerrar {\n  border-radius: 0px 30px 0px 0px;\n  -moz-border-radius: 0px 30px 0px 0px;\n  -webkit-border-radius: 0px 30px 0px 0px;\n  background-color: #81af4f;\n  height: 5%;\n  width: 40px;\n  right: 15%;\n  position: absolute;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBR0E7RUFFSSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNQTtFQUVJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpKOztBQVFBO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFRQTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBWUE7RUFDSSw2RUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBV0E7RUFDSSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEscURBQUE7RUFDQSxhQUFBO0VBRUEsc0NBQUE7RUFDQSxjQUFBO0FBVko7O0FBY0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsZ0RBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFlQTtFQUNJLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUVBLCtEQUFBO0VBQ0EsWUFBQTtBQWRKOztBQWdCQTtFQUNJLGFBQUE7QUFiSjs7QUFlQTtFQUNJLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFiSjs7QUFlQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFjQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFYSjs7QUFhQTtFQUNJLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVkoiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ZvbmRvL2JvcnJvc28ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgXHJcblxyXG59XHJcbi5mcmFuamF7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzc1MTQyO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICBDb2NvZ29vc2UtQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmxpbmVhLXB1bnRlYWRhe1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkOyBcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvdG9QZXJmaWx7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgYm9yZGVyOjEwcHggc29saWQgd2hpdGUgO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcblxyXG59XHJcbi5mb3RvUGVyZmlsMntcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICBtYXJnaW46MXB4IGF1dG87XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNkN2U2YTMgO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBcclxufVxyXG4uZGF0b3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gICAgY29sb3I6I2M3NTE0MjtcclxuICAgIGZvbnQtZmFtaWx5OiBDb2NvZ29vc2UtTGlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjZDdlNmEzIDtcclxuICAgIHdpZHRoOiA2OCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi50aXR1bG97XHJcblxyXG4gICAgZm9udC1mYW1pbHk6Q29jb2dvb3NlLUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogIzQ0MjgwYjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBcclxufVxyXG5cclxuLmJvdG9ue1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAgQ29jb2dvb3NlLUxpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MWFmNGY7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLnRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6IENvY29nb29zZS1MaWdodDtcclxuICAgIGNvbG9yOiAjNDQyODBiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaWNvbm97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNjNzUxNDIgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTIlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuYm9keS5qdy1tb2RhbC1vcGVuIHtcclxuICAgIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uanctbW9kYWwge1xyXG4gICAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBcclxuICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICBcclxufVxyXG4uanctbW9kYWwtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXHJcbiAgICBtYXJnaW46IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IDQ1JTtcclxuICAgIGJvcmRlcjowcHggc29saWQgI2Y2ZjVmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgIFxyXG59XHJcbi5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICAgIFxyXG4gICAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xyXG4gICAgei1pbmRleDogOTAwO1xyXG59XHJcbi5qdy1tb2RhbC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubW9kYWwtdG9we1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MWFmNGY7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAgQ29jb2dvb3NlLWxpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ubGluZWEtcHVudGVhZGEye1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkOyBcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvdG97XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG4uYm90b25DZXJyYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAwcHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwcHggMzBweCAwcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMzBweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxYWY0ZjtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHJpZ2h0OiAxNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "q4Mr":
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "5Trh");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



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
//# sourceMappingURL=registro-registro-module.js.map