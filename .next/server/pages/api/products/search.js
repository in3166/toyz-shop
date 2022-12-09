"use strict";
(() => {
var exports = {};
exports.id = 478;
exports.ids = [478];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_models_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8510);
/* harmony import */ var lib_models_Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3463);
/* harmony import */ var _lib_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_handlers__WEBPACK_IMPORTED_MODULE_2__]);
_lib_handlers__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handler = (0,_lib_handlers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
handler.get(async (req, res)=>{
    const { query: { text  }  } = req;
    const product = await lib_models_Products__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({
        title: {
            $regex: text,
            $options: "i"
        }
    }).populate({
        path: "owner",
        model: lib_models_Users__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        select: "-password"
    });
    if (!product) {
        return res.status(400).json({
            success: false
        });
    }
    return res.status(200).json({
        success: true,
        product
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [472,510], () => (__webpack_exec__(7154)));
module.exports = __webpack_exports__;

})();