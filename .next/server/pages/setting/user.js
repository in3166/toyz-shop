(() => {
var exports = {};
exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 5947:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "userSetting_wrapper__TQmrG"
};


/***/ }),

/***/ 524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6535);
/* harmony import */ var hooks_useFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7896);
/* harmony import */ var utils_validates_validateInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4893);
/* harmony import */ var components_shared_InputText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4608);
/* harmony import */ var components_shared_SnackBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1018);
/* harmony import */ var components_shared_SnackBar_useSnackBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1025);
/* harmony import */ var _userSetting_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5947);
/* harmony import */ var _userSetting_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_userSetting_module_scss__WEBPACK_IMPORTED_MODULE_11__);












const UserSetting = ()=>{
    const t = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useI18n */ .QT)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!session) router.push("/");
    }, [
        router,
        session
    ]);
    const inputFocusRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [snackBarStatus, setSnackBarStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { message , setMessage  } = (0,components_shared_SnackBar_useSnackBar__WEBPACK_IMPORTED_MODULE_9__/* .useSnackbar */ .D)(5000);
    const { value: name , reset: resetName , valueIsValid: nameIsValid , hasError: nameHasError , valueChangeHandler: handleNameChange , inputBlurHandler: handleNameBlur  } = (0,hooks_useFormInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        validateFunction: utils_validates_validateInput__WEBPACK_IMPORTED_MODULE_10__/* .validateName */ .Ol,
        initialValue: session?.user?.name || ""
    });
    const { value: phone , reset: resetPhone , valueIsValid: phoneIsValid , hasError: phoneHasError , valueChangeHandler: handlePhoneChange , inputBlurHandler: handlePhoneBlur  } = (0,hooks_useFormInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        validateFunction: utils_validates_validateInput__WEBPACK_IMPORTED_MODULE_10__/* .validatePhoneNumber */ .Y0,
        initialValue: session?.user?.phone
    });
    const { value: password , reset: resetPassword , valueIsValid: passwordIsValid , hasError: passwordHasError , valueChangeHandler: handlePasswordChange , inputBlurHandler: handlePasswordBlur  } = (0,hooks_useFormInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        validateFunction: utils_validates_validateInput__WEBPACK_IMPORTED_MODULE_10__/* .validatePassword */ .uo,
        initialValue: ""
    });
    const handleOnSubmit = async (e)=>{
        e.preventDefault();
        if (!nameIsValid || !phoneIsValid || !passwordIsValid) {
            handlePasswordBlur();
            handlePhoneBlur();
            handleNameBlur();
            setSnackBarStatus("warning");
            setMessage("입력 정보가 올바르지 않습니다.");
            return;
        }
        const response = await fetch(`/api/users/${session?.user?.id}`, {
            method: "PUT",
            body: JSON.stringify({
                name,
                phone,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if (data.success) {
            setSnackBarStatus("");
            setMessage(`[${data.user?.id}]: 회원 정보 수정 완료`);
            return;
        }
        setSnackBarStatus("error");
        setMessage(`[${data.error?.code}]: ${data.message}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_userSetting_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: `${t("common:userInfo.title")}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleOnSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_InputText__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "text",
                        formTitle: `${t("common:signUp.titleID")}`,
                        value: session?.user?.id || "",
                        read: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_InputText__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "text",
                        formTitle: `${t("common:signUp.titleName")}`,
                        value: name,
                        onChange: handleNameChange,
                        reset: resetName,
                        onBlur: handleNameBlur,
                        hasError: nameHasError,
                        errorMessage: `${t("common:signUp.errorMessageName")}`,
                        inputFocusRef: inputFocusRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_InputText__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "text",
                        formTitle: `${t("common:signUp.titlePhone")}`,
                        value: phone,
                        onChange: handlePhoneChange,
                        reset: resetPhone,
                        onBlur: handlePhoneBlur,
                        hasError: phoneHasError,
                        errorMessage: `${t("common:signUp.errorMessagePhone")}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_InputText__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "password",
                        formTitle: `${t("common:signUp.titlePW")}`,
                        value: password,
                        onChange: handlePasswordChange,
                        reset: resetPassword,
                        onBlur: handlePasswordBlur,
                        hasError: passwordHasError,
                        errorMessage: `${t("common:signUp.errorMessagePW")}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            children: "수정"
                        })
                    })
                ]
            }),
            message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_SnackBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                message: message,
                status: snackBarStatus,
                setMessage: setMessage
            })
        ]
    });
};
const getStaticProps = async ({ locale , locales  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__.serverSideTranslations)(locale, [
                "common"
            ]),
            locales
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSetting);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [560,261,837], () => (__webpack_exec__(524)));
module.exports = __webpack_exports__;

})();