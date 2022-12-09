(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 4016:
/***/ ((module) => {

// Exports
module.exports = {
	"topWrapper": "uploadImageForm_topWrapper__2xf4q",
	"infoWrapper": "uploadImageForm_infoWrapper__Z9HYJ",
	"imageWrapper": "uploadImageForm_imageWrapper__1pRC1",
	"previewImage": "uploadImageForm_previewImage___HAe2",
	"priviewFilebox": "uploadImageForm_priviewFilebox__5ZR7p",
	"uploadName": "uploadImageForm_uploadName__BfKTL",
	"plus": "uploadImageForm_plus__LzrWY",
	"inputFile": "uploadImageForm_inputFile__MPz5O",
	"submitButtonWrapper": "uploadImageForm_submitButtonWrapper__bT8w6",
	"submitButton": "uploadImageForm_submitButton__hxi8u",
	"loadingBar": "uploadImageForm_loadingBar__mr8bG",
	"loadingScroll": "uploadImageForm_loadingScroll__MbOs_",
	"rotation": "uploadImageForm_rotation__s4Pap",
	"moveRight": "uploadImageForm_moveRight__GHe8G",
	"openModal": "uploadImageForm_openModal__8MpX0"
};


/***/ }),

/***/ 7709:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "container_container__fTbCc",
	"sm": "container_sm__1KMlQ",
	"md": "container_md__WSIpK",
	"lg": "container_lg__xgT23",
	"white": "container_white__rL3_Z"
};


/***/ }),

/***/ 4272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var _container_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7709);
/* harmony import */ var _container_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_container_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Container = ({ children , color ="white" , width ="sm"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,styles__WEBPACK_IMPORTED_MODULE_1__.cx)((_container_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container), (_container_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[`${color}`], (_container_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[`${width}`]),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 9109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getErrorMessage */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((code)=>{
    switch(code){
        case 10000:
            return "Wrong Method.";
        case 11000:
            return "Duplicate key error.";
        case 10001:
            return "User not found.";
        case 10003:
            return "Not Correct Password.";
        default:
            return "Unknown Error.";
    }
});
function isErrorWithMessage(error) {
    return typeof error === "object" && error !== null && "message" in error && typeof error.message === "string";
}
function toErrorWithMessage(maybeError) {
    if (isErrorWithMessage(maybeError)) return maybeError;
    try {
        return new Error(JSON.stringify(maybeError));
    } catch  {
        // 순환 참조와 같이 JSON.stringify에서 에러가 발생하는 경우 처리
        return new Error(String(maybeError));
    }
}
function getErrorMessage(error) {
    return toErrorWithMessage(error).message;
}


/***/ }),

/***/ 7456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ product),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./hooks/index.tsx + 4 modules
var hooks = __webpack_require__(6535);
// EXTERNAL MODULE: ./components/_shared/Container/index.tsx
var Container = __webpack_require__(4272);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./hooks/useFormInput.ts
var useFormInput = __webpack_require__(7896);
// EXTERNAL MODULE: ./utils/validates/validateInput.ts
var validateInput = __webpack_require__(4893);
// EXTERNAL MODULE: ./components/_shared/InputText/index.tsx
var InputText = __webpack_require__(4608);
// EXTERNAL MODULE: ./components/_shared/SnackBar/index.tsx
var SnackBar = __webpack_require__(1018);
// EXTERNAL MODULE: ./components/_shared/SnackBar/useSnackBar.ts
var useSnackBar = __webpack_require__(1025);
// EXTERNAL MODULE: ./components/UploadProudctForm/uploadImageForm.module.scss
var uploadImageForm_module = __webpack_require__(4016);
var uploadImageForm_module_default = /*#__PURE__*/__webpack_require__.n(uploadImageForm_module);
;// CONCATENATED MODULE: ./components/UploadProudctForm/index.tsx











const DEFAULT_IMAGE_PATH = "/products/default.png";
const UploadImageForm = ({ onUploadSubmit  })=>{
    const t = (0,hooks/* useI18n */.QT)();
    const router = (0,router_.useRouter)();
    const inputFocusRef = (0,external_react_.useRef)(null);
    const [snackBarStatus, setSnackBarStatus] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const { message , setMessage  } = (0,useSnackBar/* useSnackbar */.D)();
    const [imageFile, setImageFile] = (0,external_react_.useState)();
    const [imagePreviewUrl, setImagePreviewUrl] = (0,external_react_.useState)(DEFAULT_IMAGE_PATH);
    const { data: session , status  } = (0,react_.useSession)();
    (0,external_react_.useEffect)(()=>{
        if (!session && status !== "loading") {
            setSnackBarStatus("warning");
            setMessage("Please Login");
            router.push("/signin");
        }
    }, [
        router,
        session,
        setMessage,
        status
    ]);
    const title = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validateProductTitle */.eT
    });
    const price = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validateProductPrice */.$Q
    });
    const description = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validateProductDescription */.ko
    });
    const handleImageChange = async (e)=>{
        e.preventDefault();
        const reader = new FileReader();
        const { files  } = e.currentTarget;
        if (!files) return;
        if (files && files?.length < 1) return;
        reader.onloadend = ()=>{
            setImageFile(files[0]);
            setImagePreviewUrl(reader.result?.toString() || "");
        };
        reader.readAsDataURL(files[0]);
    };
    const handleOnSubmit = async (e)=>{
        setLoading(true);
        e.preventDefault();
        if (!imageFile) {
            setSnackBarStatus("warning");
            setMessage(`${t("upload.snackBarImageNotValid")}`);
            setLoading(false);
            return;
        }
        if (!title.valueIsValid || !price.valueIsValid || !description.valueIsValid) {
            setSnackBarStatus("warning");
            setMessage(`${t("upload.snackBarValid")}`);
            setLoading(false);
            return;
        }
        const data = {
            owner: session?.user._id,
            description: description.value,
            title: title.value,
            price: Number(price.value)
        };
        // console.log(data)
        const error = await onUploadSubmit(data, imageFile);
        // eslint-disable-next-line no-console
        console.log(error);
        setLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleOnSubmit,
        className: (uploadImageForm_module_default()).UploadImageForm,
        children: [
            loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (uploadImageForm_module_default()).loadingBar
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (uploadImageForm_module_default()).topWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (uploadImageForm_module_default()).imageWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: (uploadImageForm_module_default()).previewImage,
                                src: imagePreviewUrl,
                                alt: "product preview"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
                                className: (uploadImageForm_module_default()).priviewFilebox,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (uploadImageForm_module_default()).uploadName,
                                        value: imagePreviewUrl === DEFAULT_IMAGE_PATH ? "" : imageFile?.name,
                                        readOnly: true,
                                        placeholder: "상품 사진 등록"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "img",
                                        className: (uploadImageForm_module_default()).plus
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (uploadImageForm_module_default()).inputFile,
                                        type: "file",
                                        id: "img",
                                        onChange: (e)=>handleImageChange(e)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (uploadImageForm_module_default()).infoWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                                type: "text",
                                formTitle: `${t("upload.title")}`,
                                value: title.value,
                                onChange: title.valueChangeHandler,
                                reset: title.reset,
                                onBlur: title.inputBlurHandler,
                                hasError: title.hasError,
                                errorMessage: `${t("upload.errorMessageTitle")}`,
                                inputFocusRef: inputFocusRef
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                                type: "number",
                                formTitle: `${t("upload.price")}`,
                                value: price.value,
                                onChange: price.valueChangeHandler,
                                reset: price.reset,
                                onBlur: price.inputBlurHandler,
                                hasError: price.hasError,
                                errorMessage: `${t("upload.errorMessagePrice")}`
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                type: "textarea",
                formTitle: `${t("upload.description")}`,
                value: description.value,
                onChange: description.valueChangeHandler,
                reset: description.reset,
                onBlur: description.inputBlurHandler,
                hasError: description.hasError,
                errorMessage: `${t("upload.errorMessageDescription")}`,
                rows: 5
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (uploadImageForm_module_default()).submitButtonWrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: (uploadImageForm_module_default()).submitButton,
                    children: `${t("upload.submitBtn")}`
                })
            }),
            message && /*#__PURE__*/ jsx_runtime_.jsx(SnackBar/* default */.Z, {
                message: message,
                status: snackBarStatus,
                setMessage: setMessage
            })
        ]
    });
};
/* harmony default export */ const UploadProudctForm = (UploadImageForm);

// EXTERNAL MODULE: ./lib/errorHandler.ts
var errorHandler = __webpack_require__(9109);
;// CONCATENATED MODULE: ./pages/product/index.tsx






const AddProudctPage = ()=>{
    const t = (0,hooks/* useI18n */.QT)();
    const handleSubmit = async (data, file)=>{
        const formData = new FormData();
        formData.append("body", JSON.stringify({
            data
        }));
        formData.append("file", file);
        const response = await fetch("/api/products", {
            method: "POST",
            body: formData
        });
        const uploadResult = await response.json();
        if (!uploadResult?.success) {
            const field = uploadResult.error?.keyValue?.email !== undefined ? "Email" : "ID";
            let message = !uploadResult.error.message ? (0,errorHandler/* default */.Z)(uploadResult.error?.code) : uploadResult.error.message;
            message += ` (${field})`;
            return {
                ...uploadResult.error,
                message
            };
        }
        // const addProductResult = await response.json()
        // if (!addProductResult.success) {
        //   const field = addProductResult.error?.keyValue?.email !== undefined ? 'Email' : 'ID'
        //   let message = !addProductResult.error.message
        //     ? errorHandler(addProductResult.error?.code)
        //     : addProductResult.error.message
        //   message += ` (${field})`
        //   return { ...addProductResult.error, message }
        // }
        return null;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        color: "white",
        width: "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: `${t("upload.header")}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(UploadProudctForm, {
                onUploadSubmit: handleSubmit
            })
        ]
    });
};
const getStaticProps = async (context)=>{
    const { locale , locales  } = context;
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale || "ko", [
                "common"
            ]),
            locales
        }
    };
};
/* harmony default export */ const product = (AddProudctPage);


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [560,261,837], () => (__webpack_exec__(7456)));
module.exports = __webpack_exports__;

})();