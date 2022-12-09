(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 3613:
/***/ ((module) => {

// Exports
module.exports = {
	"signUpForm": "signUpForm_signUpForm__sD_4O",
	"footer": "signUpForm_footer__9IIvo",
	"signUpButton": "signUpForm_signUpButton__lJhxu",
	"loadingBar": "signUpForm_loadingBar__LxD3J",
	"loadingScroll": "signUpForm_loadingScroll__l6V0e",
	"rotation": "signUpForm_rotation__ZT8Yr",
	"moveRight": "signUpForm_moveRight__UNnhS",
	"openModal": "signUpForm_openModal__wY04J"
};


/***/ }),

/***/ 5188:
/***/ ((module) => {

// Exports
module.exports = {
	"formWrapper": "signUp_formWrapper__LCkEL",
	"footer": "signUp_footer__APQvf",
	"signUpButton": "signUp_signUpButton__QqDZx"
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

/***/ 8572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signup),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./lib/errorHandler.ts
var errorHandler = __webpack_require__(9109);
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
// EXTERNAL MODULE: ./components/SignUpForm/signUpForm.module.scss
var signUpForm_module = __webpack_require__(3613);
var signUpForm_module_default = /*#__PURE__*/__webpack_require__.n(signUpForm_module);
;// CONCATENATED MODULE: ./components/SignUpForm/index.tsx










const SignUpForm = ({ onAddUser  })=>{
    const t = (0,hooks/* useI18n */.QT)();
    const inputFocusRef = (0,external_react_.useRef)(null);
    const router = (0,router_.useRouter)();
    const userEmail = router.query?.email?.toString() ?? "";
    const [snackBarStatus, setSnackBarStatus] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const { message , setMessage  } = (0,useSnackBar/* useSnackbar */.D)(5000);
    const id = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validateId */.un,
        initialValue: ""
    });
    const name = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validateName */.Ol,
        initialValue: ""
    });
    const password = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validatePassword */.uo,
        initialValue: ""
    });
    const phone = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validatePhoneNumber */.Y0,
        initialValue: ""
    });
    const email = (0,useFormInput/* default */.Z)({
        validateFunction: validateInput/* validateEmail */.oH,
        initialValue: userEmail || ""
    });
    const handleOnSubmit = async (e)=>{
        setLoading(true);
        e.preventDefault();
        if (!id.valueIsValid || !password.valueIsValid || !phone.valueIsValid || !name.valueIsValid) {
            setSnackBarStatus("warning");
            setMessage(`${t("common:signUp.snackBar")}`);
            setLoading(false);
            return;
        }
        const newUser = {
            id: id.value,
            name: name.value,
            password: password.value,
            email: userEmail || email.value,
            phone: phone.value
        };
        const error = await onAddUser(newUser);
        if (error) {
            setSnackBarStatus("error");
            setMessage(`[${error.code || "Error"}]: ${error.message}`);
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleOnSubmit,
        className: (signUpForm_module_default()).signUpForm,
        children: [
            loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (signUpForm_module_default()).loadingBar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                type: "text",
                formTitle: `${t("common:signUp.titleID")}`,
                value: id.value,
                onChange: id.valueChangeHandler,
                reset: id.reset,
                onBlur: id.inputBlurHandler,
                hasError: id.hasError,
                errorMessage: `${t("common:signUp.errorMessageID")}`,
                inputFocusRef: inputFocusRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                type: "password",
                formTitle: `${t("common:signUp.titlePW")}`,
                value: password.value,
                onChange: password.valueChangeHandler,
                reset: password.reset,
                onBlur: password.inputBlurHandler,
                hasError: password.hasError,
                errorMessage: `${t("common:signUp.errorMessagePW")}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                type: "text",
                formTitle: `${t("common:signUp.titleName")}`,
                value: name.value,
                onChange: name.valueChangeHandler,
                reset: name.reset,
                onBlur: name.inputBlurHandler,
                hasError: name.hasError,
                errorMessage: `${t("common:signUp.errorMessageName")}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                type: "text",
                formTitle: `${t("common:signUp.titlePhone")}`,
                value: phone.value,
                onChange: phone.valueChangeHandler,
                reset: phone.reset,
                onBlur: phone.inputBlurHandler,
                hasError: phone.hasError,
                errorMessage: `${t("common:signUp.errorMessagePhone")}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InputText/* default */.Z, {
                type: "text",
                formTitle: `${t("common:signUp.titleEmail")}`,
                value: userEmail || email.value,
                onChange: email.valueChangeHandler,
                reset: email.reset,
                onBlur: email.inputBlurHandler,
                hasError: email.hasError,
                read: userEmail !== "",
                errorMessage: userEmail === "" && `${t("common:signUp.errorMessageEmail")}` || ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (signUpForm_module_default()).footer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: (signUpForm_module_default()).signUpButton,
                    children: `${t("common:signUp.button")}`
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
/* harmony default export */ const components_SignUpForm = (SignUpForm);

// EXTERNAL MODULE: ./public/svgs/index.js + 19 modules
var svgs = __webpack_require__(5845);
// EXTERNAL MODULE: ./pages/signup/signUp.module.scss
var signUp_module = __webpack_require__(5188);
var signUp_module_default = /*#__PURE__*/__webpack_require__.n(signUp_module);
;// CONCATENATED MODULE: ./pages/signup/index.tsx









const SignUp = ()=>{
    const router = (0,router_.useRouter)();
    const addUserHandler = async (enteredUserData)=>{
        enteredUserData.likes = [];
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                body: JSON.stringify(enteredUserData),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const signUpResult = await response.json();
            if (!signUpResult.success) {
                const field = signUpResult.error?.keyValue?.email !== undefined ? "Email" : "ID";
                let message = !signUpResult.error.message ? (0,errorHandler/* default */.Z)(signUpResult.error?.code) : signUpResult.error.message;
                message += ` (${field})`;
                return {
                    ...signUpResult.error,
                    message
                };
            }
            const responseSignin = await (0,react_.signIn)("credentials", {
                id: enteredUserData.id,
                password: enteredUserData.password,
                redirect: false
            });
            if (!responseSignin?.ok) {
                return new Error(responseSignin?.error);
            }
            router.push("/");
            return null;
        } catch (error) {
            return error;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Add a New User"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "You can join our Toyz shop!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (signUp_module_default()).formWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: (signUp_module_default()).header,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: (signUp_module_default()).id,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* SignUpIcon */.DB, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (signUp_module_default()).content,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_SignUpForm, {
                            onAddUser: addUserHandler
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
/* harmony default export */ const signup = (SignUp);


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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [560,261,837], () => (__webpack_exec__(8572)));
module.exports = __webpack_exports__;

})();