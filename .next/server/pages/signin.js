(() => {
var exports = {};
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 3112:
/***/ ((module) => {

// Exports
module.exports = {
	"signInForm": "signInForm_signInForm__6Vbwc",
	"signInButtonWrapper": "signInForm_signInButtonWrapper__cc0pM",
	"signInButton": "signInForm_signInButton__z7Cyv",
	"loadingBar": "signInForm_loadingBar__LAo87",
	"loadingScroll": "signInForm_loadingScroll__kSYF0",
	"rotation": "signInForm_rotation__VQbS_",
	"moveRight": "signInForm_moveRight__r4dYA",
	"openModal": "signInForm_openModal__uZF2m"
};


/***/ }),

/***/ 4756:
/***/ ((module) => {

// Exports
module.exports = {
	"formWrapper": "signIn_formWrapper__WB1d6",
	"siginInFooter": "signIn_siginInFooter__It4_A",
	"signInButton": "signIn_signInButton___3InO"
};


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

/***/ 3287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signin),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./public/svgs/index.js + 19 modules
var svgs = __webpack_require__(5845);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/index.tsx + 4 modules
var hooks = __webpack_require__(6535);
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
// EXTERNAL MODULE: ./components/SignInForm/signInForm.module.scss
var signInForm_module = __webpack_require__(3112);
var signInForm_module_default = /*#__PURE__*/__webpack_require__.n(signInForm_module);
;// CONCATENATED MODULE: ./components/SignInForm/index.tsx









const SignInForm = ({ onSignIn  })=>{
    const t = (0,hooks/* useI18n */.QT)();
    const inputFocusRef = (0,external_react_.useRef)(null);
    const [snackBarStatus, setSnackBarStatus] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const { message , setMessage  } = (0,useSnackBar/* useSnackbar */.D)(5000);
    const id = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validateId */.un
    });
    const password = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validatePassword */.uo
    });
    const handleOnSubmit = async (e)=>{
        setLoading(true);
        e.preventDefault();
        if (!id.valueIsValid || !password.valueIsValid) {
            setSnackBarStatus("warning");
            setMessage(`${t("common:signIn.snackBarValid")}`);
            setLoading(false);
            return;
        }
        const error = await onSignIn(id.value, password.value);
        if (error) {
            setSnackBarStatus("error");
            setMessage(`[${error.code || "Error"}]: ${error.message}`);
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleOnSubmit,
        className: (signInForm_module_default()).signInForm,
        children: [
            loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (signInForm_module_default()).loadingBar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                type: "text",
                formTitle: `${t("common:signIn.titleID")}`,
                value: id.value,
                onChange: id.valueChangeHandler,
                reset: id.reset,
                onBlur: id.inputBlurHandler,
                hasError: id.hasError,
                errorMessage: `${t("common:signIn.errorMessageID")}`,
                inputFocusRef: inputFocusRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                type: "password",
                formTitle: `${t("common:signIn.titlePW")}`,
                value: password.value,
                onChange: password.valueChangeHandler,
                reset: password.reset,
                onBlur: password.inputBlurHandler,
                hasError: password.hasError,
                errorMessage: `${t("common:signIn.errorMessagePW")}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (signInForm_module_default()).signInButtonWrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: (signInForm_module_default()).signInButton,
                    children: `${t("common:signIn.button")}`
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
/* harmony default export */ const components_SignInForm = (SignInForm);

// EXTERNAL MODULE: ./pages/signin/signIn.module.scss
var signIn_module = __webpack_require__(4756);
var signIn_module_default = /*#__PURE__*/__webpack_require__.n(signIn_module);
// EXTERNAL MODULE: ./lib/errorHandler.ts
var errorHandler = __webpack_require__(9109);
;// CONCATENATED MODULE: ./pages/signin/index.tsx









const SignIn = ()=>{
    const router = (0,router_.useRouter)();
    const signInHandler = async (id, password)=>{
        try {
            const response = await (0,react_.signIn)("credentials", {
                id,
                password,
                redirect: false
            });
            if (!response?.ok) {
                const message = (0,errorHandler/* default */.Z)(Number(response?.error));
                return {
                    code: Number(response?.error),
                    message,
                    name: "sign in error"
                };
            }
            router.push("/");
            return null;
        } catch (error) {
            return {
                code: Number(error),
                name: "sign in error"
            };
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (signIn_module_default()).formWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (signIn_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: (signIn_module_default()).id,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* SignInIcon */.GQ, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (signIn_module_default()).content,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_SignInForm, {
                    onSignIn: signInHandler
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: (signIn_module_default()).siginInFooter,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: ()=>(0,react_.signIn)("kakao", {
                                callbackUrl: "/"
                            }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 30,
                            height: 30,
                            src: "/svgs/kakaotalk_logo.png",
                            alt: "kakao login icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: ()=>(0,react_.signIn)("naver", {
                                callbackUrl: "/"
                            }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 30,
                            height: 30,
                            src: "/svgs/naver_icon.png",
                            alt: "naver login icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        onClick: ()=>(0,react_.signIn)("google", {
                                callbackUrl: "/"
                            }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 27,
                            height: 27,
                            src: "/svgs/google_icon.png",
                            alt: "google login icon"
                        })
                    })
                ]
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
/* harmony default export */ const signin = (SignIn);


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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [398,675,560,261,837], () => (__webpack_exec__(3287)));
module.exports = __webpack_exports__;

})();