(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7955:
/***/ ((module) => {

// Exports
module.exports = {
	"slider": "banner_slider__zZHPm",
	"dots": "banner_dots__252bw",
	"dlContent": "banner_dlContent__NAwHE",
	"slideContent": "banner_slideContent__gp2my",
	"description": "banner_description__HFC1M"
};


/***/ }),

/***/ 9878:
/***/ ((module) => {

// Exports
module.exports = {
	"cardContainer": "productList_cardContainer___fd5l",
	"rotation": "productList_rotation__F9uUG",
	"moveRight": "productList_moveRight__RJrIe",
	"openModal": "productList_openModal__Iekpa",
	"loadingScroll": "productList_loadingScroll__9bJ6E"
};


/***/ }),

/***/ 4345:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "card_card__l_7sh",
	"itemImage": "card_itemImage__bksTG",
	"header": "card_header__fBLN6",
	"title": "card_title__MMfJO",
	"likeButton": "card_likeButton__JIJRM",
	"updateButton": "card_updateButton__uJP6l"
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

/***/ 8170:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "loading_loading__14I2q",
	"rotation": "loading_rotation__Q9H9O",
	"moveRight": "loading_moveRight__tBdtX",
	"openModal": "loading_openModal__psoPl",
	"loadingScroll": "loading_loadingScroll__T6zEo"
};


/***/ }),

/***/ 2545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Banner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(782);
// EXTERNAL MODULE: ./hooks/index.tsx + 4 modules
var hooks = __webpack_require__(6535);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Banner/banner.module.scss
var banner_module = __webpack_require__(7955);
var banner_module_default = /*#__PURE__*/__webpack_require__.n(banner_module);
;// CONCATENATED MODULE: ./components/Banner/index.tsx








const slideSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: `slick-dots ${(banner_module_default()).dots}`
};
const Banner = ({ products  })=>{
    const t = (0,hooks/* useI18n */.QT)();
    const [mouseMoved, setMouseMoved] = (0,hooks/* useState */.eJ)(false);
    // console.log(r)
    const router = (0,router_.useRouter)();
    const handleClick = (e)=>{
        const path = e.currentTarget.value;
        if (!mouseMoved) {
            router.push(path);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
        ...slideSettings,
        className: (banner_module_default()).slider,
        children: products?.length > 0 && products.map((value)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                onMouseMove: ()=>setMouseMoved(true),
                onMouseDown: ()=>setMouseMoved(false),
                onClick: (e)=>handleClick(e),
                className: ((banner_module_default()).link, (banner_module_default()).slideContent),
                value: `/product/${value._id}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: value.image,
                        loading: "lazy",
                        alt: "products",
                        placeholder: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (banner_module_default()).description,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (banner_module_default()).dlContent,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dt", {
                                            children: [
                                                `${t("common:title")}`,
                                                ": "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                            children: value.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (banner_module_default()).dlContent,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dt", {
                                            children: [
                                                `${t("common:price")}`,
                                                ": "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                            children: [
                                                value.price,
                                                " 만원"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (banner_module_default()).dlContent,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dt", {
                                            children: [
                                                `${t("common:owner")}`,
                                                ": "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                            children: value.owner.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (banner_module_default()).dlContent,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dt", {
                                            children: [
                                                `${t("common:date")}`,
                                                ": "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                            children: external_dayjs_default()(value.createdAt).format("YYYY-MM-DD")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }, value._id);
        })
    });
};
/* harmony default export */ const components_Banner = (Banner);


/***/ }),

/***/ 6537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1061);
/* harmony import */ var stores_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7074);
/* harmony import */ var components_shared_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4272);
/* harmony import */ var components_shared_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5244);
/* harmony import */ var _productList_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9878);
/* harmony import */ var _productList_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_productList_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_shared_Loding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stores_user__WEBPACK_IMPORTED_MODULE_4__]);
stores_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// import { useIntersectionObserver } from 'hooks/useIntersectionObserver'





const ProductList = ({ products  })=>{
    // const ref = useRef<HTMLDivElement | null>(null)
    const [productsList, setproductsList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(products);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [, setUser] = (0,hooks_state__WEBPACK_IMPORTED_MODULE_3__/* .useRecoil */ .EO)(stores_user__WEBPACK_IMPORTED_MODULE_4__/* .currentUserState */ .y);
    // const setTarget = useIntersectionObserver(ref, { rootMargin: '10px', threshold: 0 }, setIsLoading, setproductsList)
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsLoading(true);
        const { query: searchText  } = router;
        if (searchText?.text) {
            fetch(`${"http://127.0.0.1:3000"}/api/products/search?text=${searchText?.text}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async (response)=>{
                const data = await response.json();
                if (data.success) {
                    setproductsList(data.product);
                    setIsLoading(false);
                }
            });
        } else {
            setIsLoading(false);
        }
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_shared_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        width: "lg",
        children: [
            productsList?.length < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "No Items."
            }),
            !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_productList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardContainer),
                children: productsList?.map((value)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_Card__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        item: value,
                        user: value.owner,
                        setUser: setUser
                    }, value._id);
                })
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_Loding__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5291);
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6535);
/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4345);
/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_card_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var public_svgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5845);





// import HeartFillIcon from 'public/svgs/heartFill.svg'



const Card = ({ item , user , setUser  })=>{
    const t = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useI18n */ .QT)();
    const isLiked = false;
    // user && user.role === 1 ? user.likes.filter((value) => value.id === item.id).length > 0 : false
    const [like] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isLiked);
    const handleClickLike = (e)=>{
        e.preventDefault();
        if (!user || !setUser) return;
        if (user.id === "" || user.id === "admin") return;
        store__WEBPACK_IMPORTED_MODULE_4___default().remove("currentUser");
    // setLike((prev) => !prev)
    // setUser((prev) => {
    //   const tempLikes = getTempLikes(prev.likes ?? [], like, item)
    //   updateUserDBLikes(user.id, tempLikes).then(() => {
    //     const newUser = { data: { ...user, likes: tempLikes }, key: user.id }
    //     store.set('currentUser', newUser)
    //   })
    //   return { ...prev, likes: tempLikes }
    // })
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/product/${item._id}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().card),
            title: item.title,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                            children: item.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().likeButton),
                            onClick: handleClickLike,
                            children: like ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(public_svgs__WEBPACK_IMPORTED_MODULE_6__/* .HeartFillIcon */ .qC, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(public_svgs__WEBPACK_IMPORTED_MODULE_6__/* .HeartOutlineIcon */ .Pz, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: item.image,
                    alt: item.title,
                    className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_7___default().itemImage)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                    children: `${t("common:owner")}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                    children: item.owner.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                    children: `${t("common:price")}`
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dd", {
                                    children: [
                                        item.price,
                                        " 만원"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                    children: `${t("common:date")}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                    children: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(item.createdAt).format("YY-MM-DD")
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


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

/***/ 7654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5845);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8170);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loading_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Loading = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_2___default().loading),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(public_svgs__WEBPACK_IMPORTED_MODULE_1__/* .LoadingSpinner */ .TK, {})
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EO": () => (/* binding */ useRecoil),
/* harmony export */   "cn": () => (/* reexport safe */ recoil__WEBPACK_IMPORTED_MODULE_0__.atom)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);


function useRecoil(recoilState) {
    const [value, setter] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(recoilState);
    const resetter = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useResetRecoilState)(recoilState);
    return [
        value,
        setter,
        resetter
    ];
}


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1463);
/* harmony import */ var next_i18next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2545);
/* harmony import */ var components_ProductList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ProductList__WEBPACK_IMPORTED_MODULE_5__]);
components_ProductList__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const HomePage = ({ pageProps  })=>{
    const { products  } = pageProps;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Toyz"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "You can buy a wide variety of amazing toys!."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Banner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                products: products
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ProductList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                products: products
            })
        ]
    });
};
const getServerSideProps = async ({ locale , locales  })=>{
    const response = await fetch(`${"http://127.0.0.1:3000"}/api/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    const { products  } = data;
    // if (data.success)
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__.serverSideTranslations)(locale, [
                "app",
                "common"
            ], (next_i18next_config__WEBPACK_IMPORTED_MODULE_2___default())),
            locales,
            products
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ currentUserState)
/* harmony export */ });
/* unused harmony export initialSettingUser */
/* harmony import */ var hooks_state_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1061);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialSettingUser = {
    id: "",
    name: "",
    password: "",
    email: "",
    phone: "",
    likes: [],
    role: 0
};
const currentUserState = (0,hooks_state_index__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
    key: `currentUser/${(0,uuid__WEBPACK_IMPORTED_MODULE_1__.v1)()}`,
    default: undefined
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 782:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 5291:
/***/ ((module) => {

"use strict";
module.exports = require("store");

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,676,664,560,463], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();