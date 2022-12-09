(() => {
var exports = {};
exports.id = 519;
exports.ids = [519];
exports.modules = {

/***/ 316:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "buyItemModal_header__0qJDE",
	"title": "buyItemModal_title__O6mpW",
	"content": "buyItemModal_content__PAK1C",
	"footer": "buyItemModal_footer__kj5ni",
	"confirmButton": "buyItemModal_confirmButton___yizs",
	"cancelButton": "buyItemModal_cancelButton__a81Pm",
	"rotation": "buyItemModal_rotation__6hYJX",
	"moveRight": "buyItemModal_moveRight__42Mow",
	"openModal": "buyItemModal_openModal__ImWoc",
	"loadingScroll": "buyItemModal_loadingScroll__3exn9"
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

/***/ 8714:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "itemDetailPage_header__O_3RT",
	"main": "itemDetailPage_main__jf5DX",
	"image": "itemDetailPage_image__4tFyr",
	"content": "itemDetailPage_content__NSLVQ",
	"buyButton": "itemDetailPage_buyButton__H9u2_"
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

/***/ 6943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _itemId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./hooks/index.tsx + 4 modules
var hooks = __webpack_require__(6535);
// EXTERNAL MODULE: ./components/_shared/SnackBar/index.tsx
var SnackBar = __webpack_require__(1018);
// EXTERNAL MODULE: ./components/_shared/Container/index.tsx
var Container = __webpack_require__(4272);
// EXTERNAL MODULE: ./components/_shared/SnackBar/useSnackBar.ts
var useSnackBar = __webpack_require__(1025);
// EXTERNAL MODULE: ./components/_shared/Modal/index.tsx
var Modal = __webpack_require__(5459);
// EXTERNAL MODULE: ./components/BuyItemModal/buyItemModal.module.scss
var buyItemModal_module = __webpack_require__(316);
var buyItemModal_module_default = /*#__PURE__*/__webpack_require__.n(buyItemModal_module);
;// CONCATENATED MODULE: ./components/BuyItemModal/indedx.tsx





const BuyItemModal = ({ onClose , title , price , setMessage  })=>{
    const t = (0,hooks/* useI18n */.QT)();
    const handleClickBuy = (0,external_react_.useCallback)(()=>{
        setMessage("구매 완료!");
        onClose();
    }, [
        onClose,
        setMessage
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Modal/* default */.Z, {
        onCancel: onClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (buyItemModal_module_default()).header,
                children: `${t("common:buyModal.header")}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                className: (buyItemModal_module_default()).content,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                    children: `${t("common:buyModal.title")}`
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                    children: title
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                    children: `${t("common:buyModal.price")}`
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                    children: [
                                        price,
                                        " 만원"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: (buyItemModal_module_default()).footer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: (buyItemModal_module_default()).cancelButton,
                        onClick: onClose,
                        children: `${t("common:buyModal.closeButton")}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: (buyItemModal_module_default()).confirmButton,
                        onClick: handleClickBuy,
                        children: `${t("common:buyModal.buyButton")}`
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const indedx = (BuyItemModal);

// EXTERNAL MODULE: ./pages/product/[itemId]/itemDetailPage.module.scss
var itemDetailPage_module = __webpack_require__(8714);
var itemDetailPage_module_default = /*#__PURE__*/__webpack_require__.n(itemDetailPage_module);
;// CONCATENATED MODULE: ./pages/product/[itemId]/index.tsx










const ItemDetailPage = ({ pageProps  })=>{
    const t = (0,hooks/* useI18n */.QT)();
    const [openModal, setOpenModal] = (0,external_react_.useState)(false);
    const { message , setMessage  } = (0,useSnackBar/* useSnackbar */.D)(3000);
    const { product  } = pageProps;
    const handleOpenModal = ()=>{
        setOpenModal(true);
    };
    const handleCloseModal = ()=>{
        setOpenModal(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
        color: "white",
        width: "md",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (itemDetailPage_module_default()).header,
                children: product.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (itemDetailPage_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (itemDetailPage_module_default()).image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: product.image,
                            alt: "items"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                className: (itemDetailPage_module_default()).content,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: product.description
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                children: `${t("common:price")}`
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                                children: [
                                                    product.price,
                                                    " 만원"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                children: `${t("common:owner")}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                children: product.owner.name
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dt", {
                                                children: [
                                                    " ",
                                                    `${t("common:date")}`
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                children: external_dayjs_default()(product.createdAt).format("YYYY-MM-DD")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: (itemDetailPage_module_default()).buyButton,
                                onClick: handleOpenModal,
                                children: "구매"
                            })
                        ]
                    })
                ]
            }),
            openModal && /*#__PURE__*/ jsx_runtime_.jsx(indedx, {
                onClose: handleCloseModal,
                title: product.name,
                price: product.price,
                setMessage: setMessage
            }),
            message && /*#__PURE__*/ jsx_runtime_.jsx(SnackBar/* default */.Z, {
                message: message,
                setMessage: setMessage
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const { locale , locales , params  } = context;
    const response = await fetch(`${"http://127.0.0.1:3000"}/api/products/${params.itemId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    const { product  } = data;
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ]),
            locales,
            product
        }
    };
};
/* harmony default export */ const _itemId_ = (ItemDetailPage);


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [560,261,459], () => (__webpack_exec__(6943)));
module.exports = __webpack_exports__;

})();