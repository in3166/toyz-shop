"use strict";
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 2069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9310);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);
next_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const handlers = ()=>{
    return (0,next_connect__WEBPACK_IMPORTED_MODULE_1__["default"])({
        onError (error, req, res, next) {
            res.status(501).json({
                success: false,
                error: `Sorry something Happened! ${error.message}`
            });
            next(error);
        },
        onNoMatch (req, res) {
            res.status(405).json({
                success: false,
                error: `Method '${req.method}' Not Allowed`
            });
        }
    }).use(_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ dbMiddleware)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = "mongodb+srv://in:6624@cluster-predict.oko2q.mongodb.net/toyz_shop?retryWrites=true&w=majority" ?? 0;
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
// export async function dbConnect() {
//   let cached = global.mongoose
//   if (!cached) {
//     cached = { conn: null, promise: null }
//     global.mongoose = { conn: null, promise: null }
//   }
//   if (cached.conn) {
//     return cached.conn
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     }
//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((resMongoose) => {
//       return resMongoose
//     })
//   }
//   try {
//     cached.conn = await cached.promise
//   } catch (e) {
//     cached.promise = null
//     throw e
//   }
//   return cached.conn
// }
async function dbMiddleware(req, res, next) {
    try {
        // if (!global.mongoose) {
        // global.mongoose = await mongoose.connect(MONGODB_URI)
        // }
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI);
        return next();
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
    }
    return null;
}


/***/ }),

/***/ 3463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UsersSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    id: {
        type: String,
        unique: 1,
        required: [
            true,
            "Please enter the User's id"
        ],
        maxlength: [
            60,
            "Owner's Id cannot be more than 60 characters"
        ]
    },
    name: {
        type: String,
        required: [
            true,
            "Please enter a User's name."
        ],
        maxlength: [
            60,
            "Name cannot be more than 60 characters"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "Please enter the User's password."
        ]
    },
    email: {
        type: String,
        required: [
            true,
            "Please enter the User's email."
        ],
        maxlength: [
            1000,
            "Email cannot be more than 1000 characters"
        ],
        unique: 1
    },
    phone: {
        required: [
            true,
            "Please enter the User's Phone Number."
        ],
        type: String
    },
    likes: [
        {
            products: {
                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
                ref: "Products"
            }
        }
    ],
    role: {
        type: Number,
        required: [
            true,
            "Role is requied."
        ],
        default: 1
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Users", UsersSchema));


/***/ })

};
;