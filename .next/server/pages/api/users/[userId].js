"use strict";
(() => {
var exports = {};
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_models_Users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3463);
/* harmony import */ var _lib_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_handlers__WEBPACK_IMPORTED_MODULE_1__]);
_lib_handlers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const handler = (0,_lib_handlers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
handler.get(async (req, res)=>{
    const { query: { userId  }  } = req;
    const user = await lib_models_Users__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
        email: userId
    });
    if (!user) {
        return res.status(400).json({
            success: false,
            error: {
                code: 10001
            }
        });
    }
    return res.status(200).json({
        success: true,
        user
    });
});
handler.put(async (req, res)=>{
    const { query: { userId  }  } = req;
    const user = await lib_models_Users__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
        id: userId
    }, req.body, {
        new: false,
        runValidators: true
    });
    if (!user) {
        return res.status(400).json({
            success: false,
            error: {
                code: 10001
            }
        });
    }
    return res.status(200).json({
        success: true,
        user
    });
});
handler.delete(async (req, res)=>{
    const { query: { userId  }  } = req;
    const deletedUser = await lib_models_Users__WEBPACK_IMPORTED_MODULE_0__/* ["default"].deleteOne */ .Z.deleteOne({
        _id: userId
    });
    if (!deletedUser) {
        return res.status(400).json({
            success: false
        });
    }
    return res.status(200).json({
        success: true,
        data: {}
    });
});
handler.post(async (req, res)=>{
    const { body  } = req;
    const user = await lib_models_Users__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
        id: body.id
    });
    // console.log('user: ', user)
    if (!user) {
        return res.status(400).json({
            success: false,
            error: {
                code: 10001
            }
        });
    }
    return res.status(200).json({
        success: true,
        user
    });
});
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const {
//     query: { userId },
//     method,
//     body,
//   } = req
//   await dbConnect()
//   switch (method) {
//     case 'GET':
//       try {
//         const user = await User.findOne({ email: userId })
//         if (!user) {
//           return res.status(400).json({ success: false, error: { code: 10001 } })
//         }
//         res.status(200).json({ success: true, user })
//       } catch (error) {
//         res.status(400).json(error)
//       }
//       break
//     case 'PUT':
//       try {
//         const user = await User.findOneAndUpdate({ id: userId }, req.body, {
//           new: false,
//           runValidators: true,
//         })
//         if (!user) {
//           return res.status(400).json({ success: false, error: { code: 10001 } })
//         }
//         res.status(200).json({ success: true, user })
//       } catch (error) {
//         const message = getErrorMessage(error)
//         res.status(400).json({ success: false, error, message })
//       }
//       break
//     case 'DELETE':
//       try {
//         const deletedUser = await User.deleteOne({ _id: userId })
//         if (!deletedUser) {
//           return res.status(400).json({ success: false })
//         }
//         res.status(200).json({ success: true, data: {} })
//       } catch (error) {
//         res.status(400).json(error)
//       }
//       break
//     case 'POST':
//       try {
//         const user = await User.findOne({ id: body.id })
//         // console.log('user: ', user)
//         if (!user) {
//           return res.status(400).json({ success: false, error: { code: 10001 } })
//         }
//         res.status(200).json({ success: true, user })
//       } catch (error) {
//         res.status(400).json(error)
//       }
//       break
//     default:
//       res.status(400).json({ success: false, error: { code: 10000 } })
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
var __webpack_exports__ = __webpack_require__.X(0, [472], () => (__webpack_exec__(874)));
module.exports = __webpack_exports__;

})();