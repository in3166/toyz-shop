"use strict";
(() => {
var exports = {};
exports.id = 669;
exports.ids = [669];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 6150:
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
    const { query: { productId  }  } = req;
    const product = await lib_models_Products__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
        _id: productId
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
handler.put(async (req, res)=>{
    const { query: { productId  }  } = req;
    const product = await lib_models_Products__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(productId, req.body, {
        new: true,
        runValidators: true
    });
    if (!product) {
        return res.status(400).json({
            success: false
        });
    }
    return res.status(200).json({
        success: true,
        data: product
    });
});
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const {
//     query: { productId },
//     method,
//   } = req
//   await dbConnect()
//   switch (method) {
//     case 'GET':
//       try {
//         const product = await Product.findOne({ _id: productId }).populate({
//           path: 'owner',
//           model: User,
//           select: '-password',
//         })
//         if (!product) {
//           return res.status(400).json({ success: false })
//         }
//         res.status(200).json({ success: true, product })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }
//       break
//     case 'PUT':
//       try {
//         const product = await Product.findByIdAndUpdate(productId, req.body, {
//           new: true,
//           runValidators: true,
//         })
//         if (!product) {
//           return res.status(400).json({ success: false })
//         }
//         res.status(200).json({ success: true, data: product })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }
//       break
//     case 'DELETE':
//       try {
//         const deletedProduct = await Product.deleteOne({ _id: productId })
//         if (!deletedProduct) {
//           return res.status(400).json({ success: false })
//         }
//         res.status(200).json({ success: true, data: {} })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }
//       break
//     default:
//       res.status(400).json({ success: false })
//       break
//   }
//   return null
// }
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
var __webpack_exports__ = __webpack_require__.X(0, [472,510], () => (__webpack_exec__(6150)));
module.exports = __webpack_exports__;

})();