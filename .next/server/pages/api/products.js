"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 553:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_models_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8510);
/* harmony import */ var lib_models_Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3463);
/* harmony import */ var _lib_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2069);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2616);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_handlers__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_handlers__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const config = {
    api: {
        bodyParser: false
    }
};
const handler = (0,_lib_handlers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
handler.get(async (req, res)=>{
    const products = await lib_models_Products__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find({}).populate({
        path: "owner",
        model: lib_models_Users__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        select: "-password"
    });
    res.status(200).json({
        success: true,
        products
    });
});
const asyncPares = (req)=>new Promise((resolve, reject)=>{
        const form = new (formidable__WEBPACK_IMPORTED_MODULE_3___default().IncomingForm)({
            uploadDir: `./public/products`,
            filter ({ name  }) {
                return !!name && (name.includes("img") || name.includes("file"));
            },
            filename (name, ext, part) {
                return `${(0,uuid__WEBPACK_IMPORTED_MODULE_4__.v1)()}-${part.originalFilename}`;
            },
            maxFileSize: 5 * 1024 * 1024,
            multiples: true
        });
        form.on("file", (name, file)=>{
            if (!file.mimetype?.includes("image")) {
                throw new Error("Not image file.");
            }
        });
        form.parse(req, (err, fields, files)=>{
            if (err) return reject(err);
            // resolve "returns" the promise so you will have a straighforward logic flow
            resolve({
                fields,
                files
            });
            return null;
        });
    });
handler.post(async (req, res)=>{
    // const form = new formidable.IncomingForm()
    const result = await asyncPares(req);
    const { fields , files  } = result;
    const body = JSON.parse(fields.body);
    body.data.image = `/products/${files.file.newFilename}`;
    const products = await lib_models_Products__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(body.data);
    // res.status(200).json({ success: true, products })
    res.status(201).json({
        success: true,
        data: products
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
var __webpack_exports__ = __webpack_require__.X(0, [472,510], () => (__webpack_exec__(553)));
module.exports = __webpack_exports__;

})();