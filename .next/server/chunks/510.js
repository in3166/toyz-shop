"use strict";
exports.id = 510;
exports.ids = [510];
exports.modules = {

/***/ 8510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ProductsSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    title: {
        type: String,
        required: [
            true,
            "Please provide a title for this Products."
        ],
        maxlength: [
            60,
            "Title cannot be more than 60 characters"
        ]
    },
    owner: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
        ref: "Users",
        required: [
            true,
            "Please provide the Products owner's id"
        ],
        maxlength: [
            60,
            "Owner's id cannot be more than 20 characters"
        ]
    },
    price: {
        type: Number,
        required: [
            true,
            "Please provied the Products price."
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Please provied the Products description."
        ],
        maxlength: [
            1000,
            "Description cannot be more than 1000 characters"
        ]
    },
    image: {
        required: [
            true,
            "Please provide an image url for this Products."
        ],
        type: String
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Products) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Products", ProductsSchema));


/***/ })

};
;