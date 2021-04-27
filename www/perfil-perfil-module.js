(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "W8eC":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "uuZe");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "oKkR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modalCupon_modal_cupon_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalCupon/modal-cupon.page */ "90wj");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../data-service.service */ "xf3R");
/* harmony import */ var _modalCambioPerfil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalCambioPerfil */ "XARU");










let PerfilPage = class PerfilPage {
    constructor(modalCtrl, alertController, dataService, modalService, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.dataService = dataService;
        this.modalService = modalService;
        this.navCtrl = navCtrl;
        this.id = localStorage.getItem('usuario_id');
        this.foto = '';
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
        this.habilitarEditar = false;
    }
    ngOnInit() {
        //console.log("id en perfil"+this.id);
        //petición para obtener datos del usuario y agregarlos desde que inicia la vista
        var info = {
            opcion: 'perfil',
            id: this.id
        };
        //console.log(info);
        this.dataService.post('perfil', info).subscribe((data) => {
            //console.log(data);
            this.foto = 'assets/fotosPerfil/' + data[0].avatar + '.png';
            document.getElementById("idNombre").setAttribute("value", data[0].username);
            document.getElementById("idContrasena").setAttribute("value", data[0].contrasena);
            document.getElementById("idCorreo").setAttribute("value", data[0].correo);
        });
    }
    alertError() {
        this.alertController.create({
            header: '¡Error!',
            message: 'Error al editar información de perfil',
            buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
    ;
    alertOk() {
        this.alertController.create({
            header: '¡Editado con éxito!',
            message: 'Información del perfil editada con éxito',
            buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
    abrirModalCupon() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //crear modal
            const modal = yield this.modalCtrl.create({
                component: _modalCupon_modal_cupon_page__WEBPACK_IMPORTED_MODULE_5__["ModalCuponPage"],
                componentProps: {}
            });
            //abrir modal 
            yield modal.present();
            //acciones que cierran modal y tratando datos recibidos del modal 
            const { data } = yield modal.onDidDismiss();
        });
    }
    editar() {
        //Cambio de botones y cambio de la accion de la función según sea el caso
        if (this.habilitarEditar == true) {
            this.habilitarEditar = false;
            //console.log("mandar datos")
            document.getElementById("idEditar").setAttribute("style", "margin-right: 5%; background-color:green; color: white");
            document.getElementById("idNombre").setAttribute("disabled", "true");
            document.getElementById("idContrasena").setAttribute("disabled", "true");
            document.getElementById("idCorreo").setAttribute("disabled", "true");
            var info = {
                opcion: 'editarPerfil',
                id: this.id,
                username: (document.getElementById("idNombre").value),
                contrasena: (document.getElementById("idContrasena").value),
                correo: (document.getElementById("idCorreo").value),
            };
            this.dataService.post('perfil', info).subscribe((data) => {
                if (data == true) {
                    this.alertOk();
                }
                else {
                    this.alertError();
                }
            });
        }
        else {
            //console.log("cambiar boton");
            document.getElementById("idEditar").setAttribute("style", "margin-right: 5%; background-color:white; border-color:green; color: green");
            document.getElementById("idNombre").removeAttribute("disabled");
            document.getElementById("idContrasena").removeAttribute("disabled");
            document.getElementById("idCorreo").removeAttribute("disabled");
            this.habilitarEditar = true;
        }
    }
    cerrarSesion() {
        localStorage.setItem('usuario_id', null);
        this.navCtrl.navigateRoot('/inicio-sesion');
    }
    openModal() {
        document.getElementById('idFondo').style.display = 'block';
    }
    cambiarPerfil(data) {
        document.getElementById('idFondo').style.display = 'none';
        this.foto = 'assets/fotosPerfil/' + data + '.png';
        //mandar cambio de foto de perfil a la base de datos
        var info = {
            opcion: 'cambioFotoPerfil',
            id: this.id,
            avatar: data
        };
        //console.log(info);
        this.dataService.post('perfil', info).subscribe((data) => {
            if (data = !true) {
                this.alertError();
            }
        });
    }
    cerrarModalFoto() {
        document.getElementById('idFondo').style.display = 'none';
    }
};
PerfilPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _modalCambioPerfil__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilPage);



/***/ }),

/***/ "ZEuG":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "bn5b");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "W8eC");
/* harmony import */ var _modalCupon_modal_cupon_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalCupon/modal-cupon.page */ "90wj");
/* harmony import */ var _modalCupon_modal_cupon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modalCupon/modal-cupon.module */ "2FBn");









let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modalCupon_modal_cupon_page__WEBPACK_IMPORTED_MODULE_7__["ModalCuponPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"],
            _modalCupon_modal_cupon_module__WEBPACK_IMPORTED_MODULE_8__["ModalCuponPageModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "bn5b":
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "W8eC");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "oKkR":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  text-align: center;\n  background-color: #f6f5f4;\n  border: 3px solid #f6f5f4;\n  border-radius: 40px;\n  margin: 5%;\n  height: 93%;\n}\n\n.fotoPerfil {\n  width: 150px;\n  height: 150px;\n  margin: 0px auto;\n  border: 10px solid white;\n  border-radius: 50%;\n}\n\n.fotoPerfil2 {\n  width: 155px;\n  height: 155px;\n  margin: 1px auto;\n  border: 2px solid #d7e6a3;\n  border-radius: 50%;\n}\n\n.dato {\n  font-family: Cocogoose-Light;\n  font-size: 12px;\n  letter-spacing: 1px;\n  color: black;\n  border-radius: 18px;\n  height: 50px;\n  background-color: #f6f5f4;\n  text-align: center;\n  margin: 15px;\n  width: 80%;\n}\n\n.boton {\n  border: 2px solid;\n  color: white;\n  border-radius: 18px;\n  height: 40px;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 35%;\n  font-family: Cocogoose-Light;\n  font-size: 11px;\n  letter-spacing: 1px;\n}\n\n.menu {\n  width: 50%;\n  position: absolute;\n  left: 25%;\n  right: 25%;\n  bottom: 0px;\n}\n\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n.jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\n\n.jw-modal-body {\n  background: white;\n  width: 70%;\n  height: 60%;\n  /* margin exposes part of the modal background */\n  margin: 15%;\n  margin-top: 45%;\n  border: 0px solid #f6f5f4;\n  border-radius: 30px;\n}\n\n.jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\n\n.jw-modal-wrapper {\n  display: none;\n}\n\n.modal-top {\n  border-radius: 30px 30px 0px 0px;\n  -moz-border-radius: 30px 30px 0px 0px;\n  -webkit-border-radius: 30px 30px 0px 0px;\n  background-color: #81af4f;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  color: white;\n  font-family: Cocogoose-light;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.linea-punteada {\n  height: 25px;\n  border-bottom-style: dotted;\n  border-bottom-width: 5px;\n  margin-bottom: 20px;\n}\n\n.foto {\n  width: 80px;\n  height: 80px;\n  display: block;\n  margin: auto;\n}\n\n.botonCerrar {\n  border-radius: 0px 30px 0px 0px;\n  -moz-border-radius: 0px 30px 0px 0px;\n  -webkit-border-radius: 0px 30px 0px 0px;\n  background-color: #81af4f;\n  height: 5%;\n  width: 40px;\n  right: 15%;\n  position: absolute;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.botoncitoPerfil {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: green;\n  border-radius: 50%;\n  margin-top: -18%;\n  margin-left: 61%;\n  z-index: 100;\n}\n\n.botoncitoHome {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: blue;\n  border-radius: 50%;\n  z-index: 100;\n  margin-top: -25%;\n  margin-left: 45%;\n}\n\n.botoncitoCategorias {\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background-color: red;\n  border-radius: 50%;\n  margin-top: -18%;\n  margin-left: 29%;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFPQTtFQUNJLDZFQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFNQTtFQUNJLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxxREFBQTtFQUNBLGFBQUE7RUFFQSxzQ0FBQTtFQUNBLGNBQUE7QUFMSjs7QUFTQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSxnREFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksK0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBRUEsK0RBQUE7RUFDQSxZQUFBO0FBVEo7O0FBV0E7RUFDSSxhQUFBO0FBUko7O0FBVUE7RUFDSSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUko7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBTko7O0FBUUE7RUFDSSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQU5KIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY1ZjQ7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkICNmNmY1ZjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgaGVpZ2h0OiA5MyU7XHJcbiAgICBcclxuXHJcbn1cclxuLmZvdG9QZXJmaWx7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgYm9yZGVyOjEwcHggc29saWQgd2hpdGUgO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcblxyXG59XHJcbi5mb3RvUGVyZmlsMntcclxuICAgIHdpZHRoOiAxNTVweDtcclxuICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICBtYXJnaW46MXB4IGF1dG87XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNkN2U2YTMgO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBcclxufVxyXG4uZGF0b3tcclxuICAgIGZvbnQtZmFtaWx5OiAgQ29jb2dvb3NlLUxpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxOHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjZmNWY0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4uYm90b257XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxOHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogIENvY29nb29zZS1MaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBcclxufVxyXG4ubWVudXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgXHJcbiAgICBsZWZ0OjI1JTsgXHJcbiAgICByaWdodDoyNSU7IFxyXG4gICAgYm90dG9tOjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmJvZHkuanctbW9kYWwtb3BlbiB7XHJcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmp3LW1vZGFsIHtcclxuICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgXHJcbiAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgXHJcbn1cclxuLmp3LW1vZGFsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcblxyXG4gICAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xyXG4gICAgbWFyZ2luOiAxNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA0NSU7XHJcbiAgICBib3JkZXI6MHB4IHNvbGlkICNmNmY1ZjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICBcclxufVxyXG4uanctbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICBcclxuICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuanctbW9kYWwgYW5kIGFib3ZlIGV2ZXJ5dGhpbmcgZWxzZSAgKi9cclxuICAgIHotaW5kZXg6IDkwMDtcclxufVxyXG4uanctbW9kYWwtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1vZGFsLXRvcHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFhZjRmO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogIENvY29nb29zZS1saWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLmxpbmVhLXB1bnRlYWRhe1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkOyBcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvdG97XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG4uYm90b25DZXJyYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMzBweCAwcHggMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwcHggMzBweCAwcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMzBweCAwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxYWY0ZjtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHJpZ2h0OiAxNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmJvdG9uY2l0b1BlcmZpbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgLy9vcGFjaXR5OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYxJTtcclxuICAgIHotaW5kZXg6IDEwMFxyXG59XHJcbi5ib3RvbmNpdG9Ib21le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICAvL29wYWNpdHk6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbn1cclxuLmJvdG9uY2l0b0NhdGVnb3JpYXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIC8vb3BhY2l0eTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xOCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjklO1xyXG4gICAgei1pbmRleDogMTAwXHJcbn0iXX0= */");

/***/ }),

/***/ "uuZe":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<body style=\"height:100%\" >\r\n  <div class=\"fondo\">\r\n    <div style=\"padding-top: 50px; padding-bottom: 50px;\">\r\n      <div class=\"fotoPerfil2\">\r\n        <div class=\"fotoPerfil\" >\r\n          <img [src]=foto (click)=\"openModal()\" >\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    <div>\r\n      \r\n      <input style=\"border:3px solid #c75142;\" type=\"text\" class=\"dato\" id=\"idNombre\" [disabled]=\"true\">\r\n      <input style=\"border:1px solid #c75142;\" type=\"password\" class=\"dato\" id=\"idContrasena\" disabled \r\n      style=\"font-size: 60px; font-weight: bolder;\">\r\n      <input style=\"border:1px solid #c75142;\" type=\"text\" class=\"dato\" id=\"idCorreo\" disabled>\r\n\r\n\r\n\r\n\r\n      <button style=\"border:3px solid #6b7932;\" class=\"dato\" (click)=\"abrirModalCupon()\" >\r\n        Canjear cupón\r\n      </button>\r\n        <button id=\"idEditar\" class=\"boton\" (click)=\"editar()\" style=\"margin-right: 5%; background-color:#81af4f;\">\r\n          Editar Datos\r\n        </button>\r\n        <button class=\"boton\" (click)=\"cerrarSesion()\" style=\"margin-left: 5%; background-color: #c75142;\">\r\n          Cerrar Sesión\r\n        </button>\r\n    </div>\r\n\r\n    \r\n    <div class=\"jw-modal-wrapper\" id=\"idFondo\">\r\n  \r\n      <div class=\"jw-modal\">\r\n        <div class=\"jw-modal-body\">\r\n\r\n          <div class=\"modal-top\">\r\n            <button class=\"botonCerrar\"  (click)=\"cerrarModalFoto()\">\r\n              x\r\n            </button>\r\n            <p>Cambiar foto de perfil</p>\r\n\r\n          </div>\r\n          <div class=\"linea-punteada\"></div>\r\n          <div>\r\n            <ion-grid>\r\n              <ion-row>\r\n                \r\n                <ion-col size=\"6\" *ngFor=\" let imagen of imagenes\" >\r\n            \r\n                  <div text-align= “center”> <img src=\"assets/fotosPerfil/{{imagen}}.png\" class=\"foto\" (click)=\"cambiarPerfil(imagen) \">\r\n                    </div>\r\n                </ion-col>\r\n                  \r\n            \r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n            \r\n            \r\n     \r\n        </div>\r\n      </div>\r\n      <div class=\"jw-modal-background\">\r\n\r\n      </div>\r\n      \r\n      </div>\r\n  </div>\r\n  \r\n  <button routerLink=\"/perfil\" class=\"botoncitoPerfil\"></button>\r\n  <button routerLink=\"/home\" class=\"botoncitoHome\"></button>\r\n  <button routerLink=\"/categorias\" class=\"botoncitoCategorias\"></button>\r\n  \r\n<img src=\"/assets/botonesMenu/perfil.png\" alt=\"\" class=\"menu\">\r\n</body>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map