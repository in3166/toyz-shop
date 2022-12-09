exports.id = 837;
exports.ids = [837];
exports.modules = {

/***/ 4869:
/***/ ((module) => {

// Exports
module.exports = {
	"inputForm": "inputText_inputForm__sq49X",
	"formTitle": "inputText_formTitle__mKBoA",
	"iconHidden": "inputText_iconHidden__3_vtu",
	"inputText": "inputText_inputText__oJzmB",
	"inputTextarea": "inputText_inputTextarea__0nq9O",
	"readOnlyInput": "inputText_readOnlyInput__baNB1",
	"errorMessage": "inputText_errorMessage__ddIYe"
};


/***/ }),

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6535);
/* harmony import */ var public_svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5845);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var _inputText_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4869);
/* harmony import */ var _inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const InputText = (props)=>{
    const { formTitle , value , onBlur , onChange , reset , hasError , type , errorMessage , inputFocusRef , read , rows  } = props;
    const handleResetOnclick = ()=>{
        if (reset) reset();
    };
    (0,hooks__WEBPACK_IMPORTED_MODULE_1__/* .useMount */ .b6)(()=>{
        inputFocusRef?.current?.focus();
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputForm),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: formTitle,
                className: (_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formTitle),
                children: formTitle
            }),
            type !== "textarea" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: type,
                id: formTitle,
                value: value,
                onBlur: onBlur,
                onChange: onChange,
                className: (0,styles__WEBPACK_IMPORTED_MODULE_3__.cx)((_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputText), {
                    [(_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default().readOnlyInput)]: read
                }),
                ref: inputFocusRef,
                readOnly: read,
                autoComplete: `current-${formTitle}`
            }) : // <input type="number" onChange={onChange}/>
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: formTitle,
                value: value,
                onBlur: onBlur,
                onChange: onChange,
                className: (0,styles__WEBPACK_IMPORTED_MODULE_3__.cx)((_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputTextarea), {
                    [(_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default().readOnlyInput)]: read
                }),
                ref: inputFocusRef,
                readOnly: read,
                autoComplete: `current-${formTitle}`,
                rows: rows
            }),
            !read && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(public_svgs__WEBPACK_IMPORTED_MODULE_2__/* .InputCancelIcon */ .oC, {
                className: (0,styles__WEBPACK_IMPORTED_MODULE_3__.cx)({
                    [(_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconHidden)]: value === ""
                }),
                onClick: handleResetOnclick
            }),
            hasError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_inputText_module_scss__WEBPACK_IMPORTED_MODULE_4___default().errorMessage),
                children: errorMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputText);


/***/ }),

/***/ 7896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFormInput = ({ validateFunction , initialValue =""  })=>{
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
    const [isTouched, setIsTouched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let valueIsValid = true;
    if (validateFunction) valueIsValid = validateFunction(value);
    const hasError = !valueIsValid && isTouched;
    const valueChangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        const { value: currentValue  } = e.currentTarget;
        setValue(currentValue);
    }, []);
    const valueClickHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        const { value: currentValue  } = e.currentTarget;
        setValue(currentValue);
    }, []);
    const inputBlurHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setIsTouched(true);
    }, []);
    const reset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setValue(initialValue);
        setIsTouched(false);
    }, [
        initialValue
    ]);
    return {
        value,
        setValue,
        hasError,
        valueIsValid,
        valueChangeHandler,
        valueClickHandler,
        inputBlurHandler,
        reset
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormInput);


/***/ }),

/***/ 4893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$Q": () => (/* binding */ validateProductPrice),
/* harmony export */   "Ol": () => (/* binding */ validateName),
/* harmony export */   "Y0": () => (/* binding */ validatePhoneNumber),
/* harmony export */   "eT": () => (/* binding */ validateProductTitle),
/* harmony export */   "ko": () => (/* binding */ validateProductDescription),
/* harmony export */   "oH": () => (/* binding */ validateEmail),
/* harmony export */   "un": () => (/* binding */ validateId),
/* harmony export */   "uo": () => (/* binding */ validatePassword)
/* harmony export */ });
function validateId(value) {
    const temp = value.toString();
    return temp.length > 3;
}
function validatePassword(value) {
    const temp = value.toString();
    return /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/.test(temp);
}
function validateName(value) {
    const temp = value.toString();
    return temp.length > 1;
}
function validatePhoneNumber(value) {
    const temp = value.toString();
    return /^\d{2,3}-\d{1,4}-\d{1,4}$/.test(temp);
}
function validateEmail(value) {
    const temp = value.toString();
    return /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.test(temp);
}
function validateProductTitle(value) {
    const temp = value.toString();
    return temp.length > 3;
}
function validateProductPrice(value) {
    return Number(value) > 0;
}
function validateProductDescription(value) {
    const temp = value.toString();
    return temp.length > 4;
}



/***/ })

};
;