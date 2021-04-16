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
    constructor(modalCtrl, alertController, dataService, modalService) {
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.dataService = dataService;
        this.modalService = modalService;
        this.id = '2';
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
        //petición para obtener datos del usuario y agregarlos desde que inicia la vista
        var info = {
            opcion: 'perfil',
            id: this.id
        };
        console.log(info);
        this.dataService.post('perfil', info).subscribe((data) => {
            console.log(data);
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
            console.log("mandar datos");
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
            console.log("cambiar boton");
            document.getElementById("idEditar").setAttribute("style", "margin-right: 5%; background-color:white; border-color:green; color: green");
            document.getElementById("idNombre").removeAttribute("disabled");
            document.getElementById("idContrasena").removeAttribute("disabled");
            document.getElementById("idCorreo").removeAttribute("disabled");
            this.habilitarEditar = true;
        }
    }
    cerrarSesion() {
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
        console.log(info);
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
    { type: _modalCambioPerfil__WEBPACK_IMPORTED_MODULE_7__["ModalService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  text-align: center;\n  background-color: #f6f5f4;\n  border: 3px solid #f6f5f4;\n  border-radius: 70px;\n  margin: 5%;\n  height: 93%;\n}\n\n.fotoPerfil {\n  width: 150px;\n  height: 150px;\n  margin: 0px auto;\n  border: 10px solid white;\n  border-radius: 50%;\n}\n\n.fotoPerfil2 {\n  width: 154px;\n  height: 154px;\n  margin: 0px auto;\n  border: 2px solid #d7e6a3;\n  border-radius: 50%;\n}\n\n.dato {\n  color: black;\n  border-radius: 18px;\n  height: 50px;\n  background-color: #f6f5f4;\n  text-align: center;\n  margin: 15px;\n  width: 80%;\n}\n\n.boton {\n  border: 2px solid;\n  color: white;\n  border-radius: 18px;\n  height: 40px;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 35%;\n}\n\n.menu {\n  width: 50%;\n  position: absolute;\n  left: 25%;\n  right: 25%;\n  bottom: 0px;\n}\n\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n.jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\n\n.jw-modal-body {\n  background: white;\n  width: 70%;\n  height: 60%;\n  /* margin exposes part of the modal background */\n  margin: 15%;\n  margin-top: 45%;\n  border: 0px solid #f6f5f4;\n  border-radius: 30px;\n}\n\n.jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\n\n.jw-modal-wrapper {\n  display: none;\n}\n\n.modal-top {\n  border-radius: 30px 30px 0px 0px;\n  -moz-border-radius: 30px 30px 0px 0px;\n  -webkit-border-radius: 30px 30px 0px 0px;\n  background-color: #81af4f;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  color: white;\n}\n\n.linea-punteada {\n  height: 25px;\n  border-bottom-style: dotted;\n  border-bottom-width: 5px;\n  margin-bottom: 20px;\n}\n\n.foto {\n  width: 80px;\n  height: 80px;\n  display: block;\n  margin: auto;\n}\n\n.botonCerrar {\n  border-radius: 0px 30px 0px 0px;\n  -moz-border-radius: 0px 30px 0px 0px;\n  -webkit-border-radius: 0px 30px 0px 0px;\n  background-color: #81af4f;\n  height: 5%;\n  width: 40px;\n  right: 15%;\n  position: absolute;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUNBO0VBQ0ksNkVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksOENBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLHFEQUFBO0VBQ0EsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFFQSwrREFBQTtFQUNBLFlBQUE7QUFISjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFJQTtFQUNJLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG97XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY1ZjQ7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkICNmNmY1ZjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjcwcHg7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgaGVpZ2h0OiA5MyU7XHJcbn1cclxuLmZvdG9QZXJmaWx7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgYm9yZGVyOjEwcHggc29saWQgd2hpdGUgO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxuLmZvdG9QZXJmaWwye1xyXG4gICAgd2lkdGg6IDE1NHB4O1xyXG4gICAgaGVpZ2h0OiAxNTRweDtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIGJvcmRlcjoycHggc29saWQgI2Q3ZTZhMyA7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxufVxyXG4uZGF0b3tcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxOHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjZmNWY0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4uYm90b257XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxOHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcbi5tZW51e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlOyBcclxuICAgIGxlZnQ6MjUlOyBcclxuICAgIHJpZ2h0OjI1JTsgXHJcbiAgICBib3R0b206MHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuYm9keS5qdy1tb2RhbC1vcGVuIHtcclxuICAgIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uanctbW9kYWwge1xyXG4gICAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBcclxuICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICBcclxufVxyXG4uanctbW9kYWwtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXHJcbiAgICBtYXJnaW46IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IDQ1JTtcclxuICAgIGJvcmRlcjowcHggc29saWQgI2Y2ZjVmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgIFxyXG59XHJcbi5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICAgIFxyXG4gICAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xyXG4gICAgei1pbmRleDogOTAwO1xyXG59XHJcbi5qdy1tb2RhbC13cmFwcGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubW9kYWwtdG9we1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MWFmNGY7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGluZWEtcHVudGVhZGF7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3R0ZWQ7IFxyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZm90b3tcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcbi5ib3RvbkNlcnJhcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDBweCAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDBweCAwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAzMHB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFhZjRmO1xyXG4gICAgaGVpZ2h0OiA1JTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "uuZe":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<body style=\"height:100%\" >\n  <div class=\"fondo\">\n    <div style=\"padding-top: 50px; padding-bottom: 50px;\">\n      <div class=\"fotoPerfil2\">\n        <div class=\"fotoPerfil\" >\n          <img [src]=foto (click)=\"openModal()\" >\n        </div>\n      </div>\n      \n    </div>\n    <div>\n      \n      <input style=\"border:3px solid #c75142;\" type=\"text\" class=\"dato\" id=\"idNombre\" [disabled]=\"true\">\n      <input style=\"border:1px solid #c75142;\" type=\"password\" class=\"dato\" id=\"idContrasena\" disabled>\n      <input style=\"border:1px solid #c75142;\" type=\"text\" class=\"dato\" id=\"idCorreo\" disabled>\n\n\n\n\n      <button style=\"border:3px solid #6b7932;\" class=\"dato\" (click)=\"abrirModalCupon()\" >\n        Canjear cupón\n      </button>\n        <button id=\"idEditar\" class=\"boton\" (click)=\"editar()\" style=\"margin-right: 5%; background-color:#81af4f;\">\n          Editar Datos\n        </button>\n        <button class=\"boton\" (click)=\"cerrarSesion()\" style=\"margin-left: 5%; background-color: #c75142;\">\n          Cerrar Sesión\n        </button>\n    </div>\n    <div class=\"jw-modal-wrapper\" id=\"idFondo\">\n  \n      <div class=\"jw-modal\">\n        <div class=\"jw-modal-body\">\n\n          <div class=\"modal-top\">\n            <button class=\"botonCerrar\"  (click)=\"cerrarModalFoto()\">\n              x\n            </button>\n            <p>Cambiar foto de perfil</p>\n\n          </div>\n          <div class=\"linea-punteada\"></div>\n          <div>\n            <ion-grid>\n              <ion-row>\n                \n                <ion-col size=\"6\" *ngFor=\" let imagen of imagenes\" >\n            \n                  <div text-align= “center”> <img src=\"assets/fotosPerfil/{{imagen}}.png\" class=\"foto\" (click)=\"cambiarPerfil(imagen) \">\n                    </div>\n                </ion-col>\n                  \n            \n              </ion-row>\n            </ion-grid>\n          </div>\n            \n            \n     \n        </div>\n      </div>\n      <div class=\"jw-modal-background\">\n\n      </div>\n      \n      </div>\n    <img src=\"/assets/botonesMenu/perfil.png\" alt=\"\" class=\"menu\">\n  </div>\n</body>\n\n");

/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map