(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 827:
/***/ ((module) => {

// Exports
module.exports = {
	"select": "dropDown_select__J37Z2",
	"categoryIndicator": "dropDown_categoryIndicator__FUK8h",
	"selected": "dropDown_selected__o0_WI",
	"downArrowIcon": "dropDown_downArrowIcon__ECePZ",
	"selectMenuOpen": "dropDown_selectMenuOpen__TMxA_",
	"selectIsOpen": "dropDown_selectIsOpen__pxU78",
	"large": "dropDown_large__H3FZT",
	"medium": "dropDown_medium__stQKI",
	"small": "dropDown_small__GyldP",
	"selectBox": "dropDown_selectBox__QJjwW"
};


/***/ }),

/***/ 8493:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "errorFallback_wrapper__DXMXD",
	"errorBox": "errorFallback_errorBox__YLhSt",
	"reloadButton": "errorFallback_reloadButton__xrdbi"
};


/***/ }),

/***/ 8947:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__SyJ2Z"
};


/***/ }),

/***/ 4600:
/***/ ((module) => {

// Exports
module.exports = {
	"switch": "darkMode_switch__924uM",
	"slider": "darkMode_slider__6nfwY",
	"textActive": "darkMode_textActive__TFWUD",
	"textLeft": "darkMode_textLeft__5Wlu2",
	"textRight": "darkMode_textRight__mdt_Z",
	"text": "darkMode_text__jsH42"
};


/***/ }),

/***/ 2760:
/***/ ((module) => {

// Exports
module.exports = {
	"searchBox": "searchBar_searchBox__dCAgO",
	"searchInput": "searchBar_searchInput__OvBYa",
	"searchForm": "searchBar_searchForm__f408B",
	"searchFormOpen": "searchBar_searchFormOpen__dg6tr",
	"title": "searchBar_title__YgENn",
	"searchToggleButton": "searchBar_searchToggleButton__xxuXw",
	"hideToggleButton": "searchBar_hideToggleButton__c36Nt",
	"submitButton": "searchBar_submitButton__tvjLU",
	"hideSearchSubmitButton": "searchBar_hideSearchSubmitButton__neiy9"
};


/***/ }),

/***/ 1960:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__Wg_td",
	"leftMenu": "header_leftMenu__7E9qn",
	"lang": "header_lang__66LG1",
	"task": "header_task__3EZmf",
	"title": "header_title__xEvX5",
	"rightMenu": "header_rightMenu__n4nph",
	"logout": "header_logout__hmdtZ",
	"isActive": "header_isActive__qKzNF",
	"settingIcon": "header_settingIcon__dvgzJ"
};


/***/ }),

/***/ 3411:
/***/ ((module) => {

// Exports
module.exports = {
	"hideSidebar": "sidebar_hideSidebar__g0loh",
	"menuToggle": "sidebar_menuToggle__6T6Qs",
	"aside": "sidebar_aside__87BQS",
	"logo": "sidebar_logo__iMDp0",
	"nav": "sidebar_nav__uMvc7",
	"isActive": "sidebar_isActive__DV_UM",
	"task": "sidebar_task__Mdg5v",
	"title": "sidebar_title__S5x7u",
	"openSidebar": "sidebar_openSidebar__CpeKo"
};


/***/ }),

/***/ 3315:
/***/ ((module) => {

// Exports
module.exports = {
	"appWrapper": "layout_appWrapper__NO4ow",
	"app": "layout_app__eVGth",
	"task": "layout_task__BSvK_",
	"title": "layout_title__oAaAc",
	"main": "layout_main__p9sau",
	"cardContainer": "layout_cardContainer__ezVim",
	"loading": "layout_loading___aFdO",
	"rotation": "layout_rotation__V3Rq0",
	"scrollTargetLi": "layout_scrollTargetLi__KxBkc"
};


/***/ }),

/***/ 5285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./next-i18next.config.js
var next_i18next_config = __webpack_require__(1463);
var next_i18next_config_default = /*#__PURE__*/__webpack_require__.n(next_i18next_config);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: external "react-error-boundary"
const external_react_error_boundary_namespaceObject = require("react-error-boundary");
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: external "react-query/devtools"
const devtools_namespaceObject = require("react-query/devtools");
// EXTERNAL MODULE: external "store"
var external_store_ = __webpack_require__(5291);
var external_store_default = /*#__PURE__*/__webpack_require__.n(external_store_);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./stores/reducer/banner.ts

const INIT_PRODUCT = [];
const INITIAL_STATE = {
    bannerList: INIT_PRODUCT
};
const bannerSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "banner",
    initialState: INITIAL_STATE,
    reducers: {
        setBannerList: (state, action)=>{
            state.bannerList = action.payload;
        },
        resetBannerList: ()=>INITIAL_STATE
    }
});
const { setBannerList , resetBannerList  } = bannerSlice.actions;
/* harmony default export */ const banner = (bannerSlice.reducer);
const getBannerList = (state)=>state.banner.bannerList;

;// CONCATENATED MODULE: ./stores/reducer/product.ts

const product_INIT_PRODUCT = [];
const product_INITIAL_STATE = {
    productList: product_INIT_PRODUCT,
    searchList: product_INIT_PRODUCT,
    currentPage: 1,
    likesList: product_INIT_PRODUCT
};
const productSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "product",
    initialState: product_INITIAL_STATE,
    reducers: {
        setProductList: (state, action)=>{
            state.productList = [
                ...state.productList,
                ...action.payload
            ];
        },
        setLikesList: (state, action)=>{
            state.likesList = [
                ...state.productList,
                ...action.payload
            ];
        },
        resetProductList: ()=>product_INITIAL_STATE,
        searchProduct: (state, action)=>{
            state.searchList = state.productList.filter((value)=>value?.title?.includes(action.payload));
        }
    }
});
const { setProductList , resetProductList , setLikesList , searchProduct  } = productSlice.actions;
/* harmony default export */ const product = (productSlice.reducer);
const getProductList = (state)=>state.product.productList;
const getLikesList = (state)=>state.product.likesList;
const getSearchList = (state)=>state.product.searchList;

;// CONCATENATED MODULE: ./stores/reducer/system.ts


const system_INITIAL_STATE = {
    theme: external_store_default().get("toyz.theme") || "light"
};
const systemSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "system",
    initialState: system_INITIAL_STATE,
    reducers: {
        setTheme: (state, action)=>{
            const newColorSet = action.payload;
            external_store_default().set("toyz.theme", newColorSet);
            document.documentElement.setAttribute("color-theme", newColorSet);
            state.theme = newColorSet;
        },
        toggleTheme: (state)=>{
            const newColorSet = state.theme === "light" ? "dark" : "light";
            external_store_default().set("toyz.theme", newColorSet);
            document.documentElement.setAttribute("color-theme", newColorSet);
            state.theme = newColorSet;
        }
    }
});
const { setTheme , toggleTheme  } = systemSlice.actions;
/* harmony default export */ const system = (systemSlice.reducer);
const getTheme = (state)=>state.system.theme;

;// CONCATENATED MODULE: ./stores/reducer/index.ts





const combinedReducer = (0,toolkit_namespaceObject.combineReducers)({
    banner: banner,
    product: product,
    system: system
});
const rootReducer = (state, action)=>{
    if (action.type === external_next_redux_wrapper_namespaceObject.HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        };
        return nextState;
    }
    return (0,toolkit_namespaceObject.combineReducers)({
        banner: banner,
        product: product,
        system: system
    })(state, action);
};
/* harmony default export */ const reducer = (rootReducer);

;// CONCATENATED MODULE: ./stores/index.ts




const makeStore = ()=>{
    const store = (0,toolkit_namespaceObject.configureStore)({
        reducer: reducer,
        devTools: "production" !== "production",
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
                serializableCheck: false
            })
    });
    return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);
const useAppDispatch = ()=>useDispatch();
/* harmony default export */ const stores = (wrapper);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
// EXTERNAL MODULE: ./hooks/index.tsx + 4 modules
var hooks = __webpack_require__(6535);
// EXTERNAL MODULE: ./public/svgs/index.js + 19 modules
var svgs = __webpack_require__(5845);
// EXTERNAL MODULE: ./styles/index.js
var styles = __webpack_require__(9176);
// EXTERNAL MODULE: ./components/layout/Sidebar/sidebar.module.scss
var sidebar_module = __webpack_require__(3411);
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);
;// CONCATENATED MODULE: ./components/layout/Sidebar/index.tsx









const Sidebar = ()=>{
    const router = (0,router_.useRouter)();
    const [visibleSideBar, setVisibleSideBar] = (0,hooks/* useState */.eJ)(true);
    const handleResize = (0,external_lodash_namespaceObject.debounce)(()=>{
        setVisibleSideBar(window.innerWidth > 768);
    }, 150);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, [
        handleResize
    ]);
    const handleOpenMenu = ()=>{
        setVisibleSideBar((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: (0,styles.cx)((sidebar_module_default()).aside, {
            [(sidebar_module_default()).hideSidebar]: !visibleSideBar
        }, {
            [(sidebar_module_default()).openSidebar]: visibleSideBar
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (sidebar_module_default()).logo,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: (sidebar_module_default()).logo,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(svgs/* LogoImage */.yA, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Toyz"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (sidebar_module_default()).nav,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: router.pathname === "/" ? (sidebar_module_default()).isActive : "",
                                children: "MarketPlace"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/likes",
                                className: router.pathname === "/likes" ? (sidebar_module_default()).isActive : "",
                                children: "Likes"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: handleOpenMenu,
                className: (sidebar_module_default()).menuToggle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* MenuBar */.j_, {})
            })
        ]
    });
};
/* harmony default export */ const layout_Sidebar = (Sidebar);

// EXTERNAL MODULE: ./components/layout/Footer/footer.module.scss
var footer_module = __webpack_require__(8947);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/layout/Footer/index.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (footer_module_default()).footer,
        children: "in3166@naver.com (유인종)"
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./components/layout/layout.module.scss
var layout_module = __webpack_require__(3315);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./components/_shared/DropDown/dropDown.module.scss
var dropDown_module = __webpack_require__(827);
var dropDown_module_default = /*#__PURE__*/__webpack_require__.n(dropDown_module);
;// CONCATENATED MODULE: ./components/_shared/DropDown/index.tsx






const DropDown = ({ currentValue , selectList , setCurrentValue , size , handleChangedValue  })=>{
    const [selectIsOpen, setSelectIsOpen] = (0,external_react_.useState)(false);
    const handleVisibleOptions = ()=>{
        setSelectIsOpen((prev)=>!prev);
    };
    const handleListClick = (e)=>{
        const selectedValue = e.currentTarget.value;
        setCurrentValue(selectedValue);
        setSelectIsOpen(false);
        if (currentValue !== selectedValue && handleChangedValue) handleChangedValue(selectedValue || "korean");
    };
    const handleOnClose = ()=>{
        setSelectIsOpen(false);
    };
    const dropDownRef = (0,hooks/* useOnClickOutside */.t$)(handleOnClose);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,styles.cx)((dropDown_module_default()).select, (dropDown_module_default())[size], {
            [(dropDown_module_default()).selectIsOpen]: selectIsOpen
        }),
        ref: dropDownRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: (0,styles.cx)((dropDown_module_default()).selected, (dropDown_module_default())[size]),
                onClick: handleVisibleOptions,
                children: [
                    currentValue,
                    /*#__PURE__*/ jsx_runtime_.jsx(svgs/* DownArrow */.pL, {
                        className: (0,styles.cx)((dropDown_module_default()).downArrowIcon, {
                            [(dropDown_module_default()).selectMenuOpen]: selectIsOpen
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (dropDown_module_default()).selectBox,
                children: selectIsOpen && selectList.map((value)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (dropDown_module_default()).option,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            value: value,
                            "data-value": value,
                            onClick: handleListClick,
                            children: value
                        })
                    }, value);
                })
            })
        ]
    });
};
/* harmony default export */ const _shared_DropDown = (DropDown);

// EXTERNAL MODULE: ./components/layout/Header/SearchBar/searchBar.module.scss
var searchBar_module = __webpack_require__(2760);
var searchBar_module_default = /*#__PURE__*/__webpack_require__.n(searchBar_module);
;// CONCATENATED MODULE: ./components/layout/Header/SearchBar/index.tsx







const SearchBar = ()=>{
    const router = (0,router_.useRouter)();
    const [searchText, setSearchText] = (0,external_react_.useState)("");
    const [toggleSearchBar, setToggleSearchBar] = (0,external_react_.useState)(false);
    const focusRef = (0,external_react_.useRef)(null);
    const handleChangeSearchText = (e)=>{
        setSearchText(e.currentTarget.value);
    };
    const handleOpenSearchBar = ()=>{
        setToggleSearchBar(true);
        focusRef.current?.focus();
    };
    const handleCloseSearchBar = ()=>{
        setToggleSearchBar(false);
        setSearchText("");
    };
    const formRef = (0,hooks/* useOnClickOutside */.t$)(handleCloseSearchBar);
    const handleSubmitSearch = (e)=>{
        e.preventDefault();
        if (!searchText || searchText.trim() === "") {
            return;
        }
        // dispatch(searchProduct(searchText))
        router.push(`${"http://127.0.0.1:3000"}/?text=${searchText}`);
        handleCloseSearchBar();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (searchBar_module_default()).searchBox,
        ref: formRef,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: handleOpenSearchBar,
                className: (0,styles.cx)((searchBar_module_default()).searchToggleButton, {
                    [(searchBar_module_default()).hideToggleButton]: toggleSearchBar
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* SearchIcon */.W1, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmitSearch,
                className: (0,styles.cx)((searchBar_module_default()).searchForm, {
                    [(searchBar_module_default()).searchFormOpen]: toggleSearchBar
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        title: "Search Bar",
                        ref: focusRef,
                        name: "searchInputText",
                        value: searchText,
                        onChange: handleChangeSearchText,
                        className: (0,styles.cx)((searchBar_module_default()).searchInput)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: (0,styles.cx)((searchBar_module_default()).submitButton, {
                            [(searchBar_module_default()).hideSearchSubmitButton]: !toggleSearchBar
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* SearchIcon */.W1, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_SearchBar = (SearchBar);

// EXTERNAL MODULE: ./components/layout/Header/header.module.scss
var header_module = __webpack_require__(1960);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./components/layout/Header/UserMenu/index.tsx








const UserMenu = ()=>{
    const t = (0,hooks/* useI18n */.QT)();
    const router = (0,router_.useRouter)();
    const { data: session  } = (0,react_.useSession)();
    const loggedOutMenu = !session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/signin",
                    className: router.pathname === "/signin" ? (header_module_default()).isActive : "",
                    children: `${t("common:gnb.signin")}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/signup",
                    className: router.pathname === "/signup" ? (header_module_default()).isActive : "",
                    children: `${t("common:gnb.signup")}`
                })
            })
        ]
    });
    const loggedInMenu = session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/product",
                    children: `${t("gnb.addItem")}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    onClick: ()=>(0,react_.signOut)({
                            callbackUrl: "http://127.0.0.1:3000"
                        }),
                    className: (header_module_default()).logout,
                    children: `${t("common:gnb.logout")}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: (header_module_default()).settingIcon,
                    children: session?.user?.name !== "admin" ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/setting/user",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* ProfileIcon */.m2, {})
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/setting/admin",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* SettingIcon */.qY, {})
                    })
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            loggedOutMenu,
            loggedInMenu
        ]
    });
};
/* harmony default export */ const Header_UserMenu = (UserMenu);

// EXTERNAL MODULE: ./components/layout/Header/DarkMode/darkMode.module.scss
var darkMode_module = __webpack_require__(4600);
var darkMode_module_default = /*#__PURE__*/__webpack_require__.n(darkMode_module);
;// CONCATENATED MODULE: ./components/layout/Header/DarkMode/index.tsx






const DarkMode = ({ darkMode  })=>{
    const [value, setValue] = (0,external_react_.useState)(darkMode);
    const clickToggleHandler = ()=>{
        setValue((prev)=>!prev);
        const newColorSet = !value ? "dark" : "light";
        external_store_default().set("toyz.theme", newColorSet);
        document.documentElement.setAttribute("color-theme", newColorSet);
    };
    (0,external_react_.useEffect)(()=>{
        setValue(darkMode);
        document.documentElement.setAttribute("color-theme", darkMode ? "dark" : "light");
    }, [
        darkMode
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: (darkMode_module_default())["switch"],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                checked: value,
                id: "toggleSwitch",
                onChange: clickToggleHandler
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (darkMode_module_default()).slider
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: (0,styles.cx)((darkMode_module_default()).textLeft, (darkMode_module_default()).text, {
                    [(darkMode_module_default()).textActive]: !value
                }),
                htmlFor: "toggleSwitch",
                children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* SunIcon */.NW, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: (0,styles.cx)((darkMode_module_default()).textRight, (darkMode_module_default()).text, {
                    [(darkMode_module_default()).textActive]: value
                }),
                htmlFor: "toggleSwitch",
                children: /*#__PURE__*/ jsx_runtime_.jsx(svgs/* MoonIcon */.kL, {})
            })
        ]
    });
};
/* harmony default export */ const Header_DarkMode = (DarkMode);

;// CONCATENATED MODULE: ./components/layout/Header/index.tsx








const Header = ({ languageList , isDark  })=>{
    const router = (0,router_.useRouter)();
    const [currentLanguage, setCurrentLanguage] = (0,external_react_.useState)(languageList[0]);
    const handleChangeLanguage = (0,external_react_.useCallback)((language)=>{
        const selectedLanguage = language === "English" || language === "영어" ? "en" : "ko";
        const path = router.query.email ? `${router.pathname}?email=${router.query.email}` : router.pathname;
        router.replace(path, path, {
            locale: selectedLanguage
        });
    }, [
        router
    ]);
    (0,external_react_.useEffect)(()=>{
        setCurrentLanguage(languageList[0]);
    }, [
        languageList
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (header_module_default()).leftMenu,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Header_SearchBar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (header_module_default()).rightMenu,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header_UserMenu, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Header_DarkMode, {
                                darkMode: isDark
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (header_module_default()).lang,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(_shared_DropDown, {
                                currentValue: currentLanguage,
                                selectList: languageList,
                                setCurrentValue: setCurrentLanguage,
                                size: "small",
                                handleChangedValue: handleChangeLanguage
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/index.tsx






const Layout = ({ children , languageList , isDark  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default()).appWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Sidebar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (0,styles.cx)((layout_module_default()).app),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                        languageList: languageList,
                        isDark: isDark
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: (layout_module_default()).main,
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./components/layout/ErrorFallback/errorFallback.module.scss
var errorFallback_module = __webpack_require__(8493);
var errorFallback_module_default = /*#__PURE__*/__webpack_require__.n(errorFallback_module);
;// CONCATENATED MODULE: ./components/layout/ErrorFallback/index.tsx


const ErrorFallback = ({ error  })=>{
    const myErrorHandler = ()=>{
        window.location.reload();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        role: "alert",
        className: (errorFallback_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                className: (errorFallback_module_default()).errorBox,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                        children: "Error Message "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                        children: error.message
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: myErrorHandler,
                className: (errorFallback_module_default()).reloadButton,
                children: "새로고침"
            })
        ]
    });
};
/* harmony default export */ const layout_ErrorFallback = (ErrorFallback);

// EXTERNAL MODULE: ./styles/index.scss
var styles_0 = __webpack_require__(1663);
;// CONCATENATED MODULE: ./pages/_app.tsx
















const queryClient = new external_react_query_.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false
        }
    }
});
const MyApp = ({ Component , ...rest })=>{
    const { store , props  } = stores.useWrappedStore(rest);
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const router = (0,router_.useRouter)();
    const LANGUAGE_LIST = [
        t("language.first"),
        t("language.second")
    ];
    const [darkMode, setDarkMode] = (0,external_react_.useState)(false);
    const themeCheck = (0,external_react_.useCallback)(()=>{
        if (external_store_default().get("toyz.theme") === "dark" || !("toyz.theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            external_store_default().set("toyz.theme", "dark");
            setDarkMode(true);
        } else {
            external_store_default().set("toyz.theme", "light");
            setDarkMode(false);
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        themeCheck();
    }, [
        darkMode,
        router.locale,
        themeCheck
    ]);
    (0,external_react_.useEffect)(()=>{
        themeCheck();
    }, [
        themeCheck
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_query_.QueryClientProvider, {
        client: queryClient,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(devtools_namespaceObject.ReactQueryDevtools, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: store,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
                        session: props.session,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
                            languageList: LANGUAGE_LIST,
                            isDark: darkMode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_error_boundary_namespaceObject.ErrorBoundary, {
                                FallbackComponent: layout_ErrorFallback,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...props
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp, (next_i18next_config_default())));


/***/ }),

/***/ 1663:
/***/ (() => {



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

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

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
var __webpack_exports__ = __webpack_require__.X(0, [398,676,664,560,463], () => (__webpack_exec__(5285)));
module.exports = __webpack_exports__;

})();