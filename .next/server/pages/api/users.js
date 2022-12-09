"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 8209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_models_Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3463);
/* harmony import */ var _lib_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_handlers__WEBPACK_IMPORTED_MODULE_2__]);
_lib_handlers__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SALT_ROUND = 7;
const handler = (0,_lib_handlers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
handler.get(async (req, res)=>{
    const users = await lib_models_Users__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({});
    return res.status(200).json({
        success: true,
        data: users
    });
});
handler.get(async (req, res)=>{
    const enteredUser = req.body;
    const hashPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(enteredUser.password, SALT_ROUND);
    enteredUser.password = hashPassword;
    const user = await lib_models_Users__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(enteredUser);
    return res.status(201).json({
        success: true,
        data: user
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [472], () => (__webpack_exec__(8209)));
module.exports = __webpack_exports__;

})();