exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 7990:
/***/ ((module) => {

// Exports
module.exports = {
	"backDropButton": "modal_backDropButton__z9axD",
	"backDrop": "modal_backDrop__G2_w2",
	"openBackDrop": "modal_openBackDrop__VE_6v",
	"modal": "modal_modal__Lo9ZZ",
	"openModal": "modal_openModal__g_iC8",
	"rotation": "modal_rotation__UJx9_",
	"moveRight": "modal_moveRight__ToaJr",
	"loadingScroll": "modal_loadingScroll__RxY9I"
};


/***/ }),

/***/ 5459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7990);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const BackDrop = ({ onCancel  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        onClick: onCancel,
        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().backDropButton),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().backDrop)
        })
    });
};
const ModalOverlay = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modal),
        children: children
    });
};
const Modal = ({ onCancel , children  })=>{
    const backDropElement = document?.getElementById("backdropRoot");
    const modalElement = document?.getElementById("modalOverlay");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            backDropElement && /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackDrop, {
                onCancel: onCancel
            }), backDropElement),
            modalElement && /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalOverlay, {
                children: children
            }), modalElement)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ })

};
;