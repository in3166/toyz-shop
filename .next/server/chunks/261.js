exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 9455:
/***/ ((module) => {

// Exports
module.exports = {
	"snackBar": "snackBar_snackBar__Jfgy5",
	"moveRight": "snackBar_moveRight__VOTmc",
	"warning": "snackBar_warning__rjYfH",
	"error": "snackBar_error__bNCLK",
	"rotation": "snackBar_rotation__uNEnZ",
	"openModal": "snackBar_openModal__uFaxz",
	"loadingScroll": "snackBar_loadingScroll__pW3gr"
};


/***/ }),

/***/ 1018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var _snackBar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9455);
/* harmony import */ var _snackBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_snackBar_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var public_svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5845);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const SnackBar = ({ message , setMessage , status  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        role: "alert",
        className: (0,styles__WEBPACK_IMPORTED_MODULE_1__.cx)((_snackBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().snackBar), {
            [(_snackBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().visible)]: message !== ""
        }, {
            [(_snackBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().warning)]: status === "warning"
        }, {
            [(_snackBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().error)]: status === "error"
        }),
        children: [
            message,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: ()=>setMessage(""),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(public_svgs__WEBPACK_IMPORTED_MODULE_2__/* .CloseIcon */ .Tw, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(SnackBar));


/***/ }),

/***/ 1025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useSnackbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3837);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_1__);


const useSnackbar = (ms = 5000)=>{
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const setSnackbarMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text)=>{
        setMessage(text);
    }, []);
    const clearTimer = ()=>{
        if (timer.current) clearTimeout(timer.current);
    };
    (0,react_use__WEBPACK_IMPORTED_MODULE_1__.useUpdateEffect)(()=>{
        if (timer.current) clearTimer();
        if (message !== "") {
            timer.current = setTimeout(()=>{
                setMessage("");
                clearTimer();
            }, ms + 100);
        }
    }, [
        message
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            if (timer.current) clearTimer();
            setMessage("");
        };
    }, []);
    return {
        message,
        setMessage: setSnackbarMessage,
        clearTimer
    };
};


/***/ })

};
;