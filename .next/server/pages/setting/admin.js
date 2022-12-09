(() => {
var exports = {};
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 1524:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "removeUserModal_header__8fjLD",
	"title": "removeUserModal_title__FqXOI",
	"content": "removeUserModal_content__mVWH8",
	"footer": "removeUserModal_footer__anivo",
	"confirmButton": "removeUserModal_confirmButton__VF4Hn",
	"cancelButton": "removeUserModal_cancelButton__UsRGZ",
	"rotation": "removeUserModal_rotation__SjO2A",
	"moveRight": "removeUserModal_moveRight__rm5lz",
	"openModal": "removeUserModal_openModal__CSoOw",
	"loadingScroll": "removeUserModal_loadingScroll__lxlkQ"
};


/***/ }),

/***/ 3226:
/***/ ((module) => {

// Exports
module.exports = {
	"tableWrapper": "userList_tableWrapper___NNbc",
	"userTable": "userList_userTable__ZXTcJ",
	"trashIcon": "userList_trashIcon__TbYJo",
	"loading": "userList_loading__H__Ug",
	"rotation": "userList_rotation__rog3X",
	"moveRight": "userList_moveRight__t4rq7",
	"openModal": "userList_openModal__DpmCL",
	"loadingScroll": "userList_loadingScroll__ZMpLO"
};


/***/ }),

/***/ 7380:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "adminSetting_wrapper__id_Vt",
	"slider": "adminSetting_slider__voO0R",
	"indicator": "adminSetting_indicator__THXSN",
	"contentConatainer": "adminSetting_contentConatainer__FvTvI",
	"tabMenu": "adminSetting_tabMenu___rtJx",
	"tabMenuActive": "adminSetting_tabMenuActive__Hc9aO",
	"tabContents": "adminSetting_tabContents__qvsZt",
	"tabContentsHidden": "adminSetting_tabContentsHidden__nHuRf"
};


/***/ }),

/***/ 6624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabMenu_TradeChart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "victory"
const external_victory_namespaceObject = require("victory");
;// CONCATENATED MODULE: ./components/TabMenu/TradeChart/index.tsx


const data = [
    {
        x: "22-06-06",
        y: 150
    },
    {
        x: "22-06-07",
        y: 100
    },
    {
        x: "22-06-08",
        y: 250
    },
    {
        x: "22-06-09",
        y: 390
    },
    {
        x: "22-06-10",
        y: 295
    },
    {
        x: "22-06-11",
        y: 450
    }
];
const TradeChart = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_victory_namespaceObject.VictoryChart, {
            theme: external_victory_namespaceObject.VictoryTheme.grayscale,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_victory_namespaceObject.VictoryLine, {
                    style: {
                        data: {
                            stroke: "#c43a31"
                        },
                        parent: {
                            border: "1px solid #ccc"
                        }
                    },
                    data: data
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_victory_namespaceObject.VictoryScatter, {
                    data: data,
                    size: 3,
                    labels: ({ datum  })=>datum.y,
                    labelComponent: /*#__PURE__*/ jsx_runtime_.jsx(external_victory_namespaceObject.VictoryTooltip, {}),
                    style: {
                        data: {
                            fill: "#c43a31"
                        }
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_victory_namespaceObject.VictoryLegend, {
                    orientation: "horizontal",
                    gutter: 10,
                    data: [
                        {
                            name: "x: (날짜)",
                            symbol: {
                                fill: "none"
                            }
                        },
                        {
                            name: "y: (만원)",
                            symbol: {
                                fill: "none"
                            }
                        }
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const TabMenu_TradeChart = (TradeChart);


/***/ }),

/***/ 1719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_shared_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5459);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6535);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(338);
/* harmony import */ var _removeUserModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1524);
/* harmony import */ var _removeUserModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_removeUserModal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_user__WEBPACK_IMPORTED_MODULE_4__]);
services_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const RemoveUserModal = ({ onClose , id , setMessage , setUsers  })=>{
    const t = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useI18n */ .QT)();
    const handleClickBuy = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        (0,services_user__WEBPACK_IMPORTED_MODULE_4__/* .removeUserDB */ ._q)(id).then(()=>{
            setUsers((prev)=>prev.filter((user)=>user.key !== id));
            setMessage("삭제 완료!");
        }).catch((err)=>{
            setMessage(`삭제 실패: ${err}`);
        }).finally(()=>{
            onClose();
        });
    }, [
        id,
        onClose,
        setMessage,
        setUsers
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_shared_Modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        onCancel: onClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: (_removeUserModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
                children: `${t("common:removeUserModal.header")}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_removeUserModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                children: `${t("common:removeUserModal.content")}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: (_removeUserModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: (_removeUserModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cancelButton),
                        onClick: onClose,
                        children: `${t("common:removeUserModal.closeButton")}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: (_removeUserModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().confirmButton),
                        onClick: handleClickBuy,
                        children: `${t("common:removeUserModal.confirmButton")}`
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveUserModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6619:
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6535);
/* harmony import */ var services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(338);
/* harmony import */ var _RemoveUserModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1719);
/* harmony import */ var components_shared_SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1018);
/* harmony import */ var components_shared_SnackBar_useSnackBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1025);
/* harmony import */ var public_svgs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5845);
/* harmony import */ var _userList_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3226);
/* harmony import */ var _userList_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_userList_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_user__WEBPACK_IMPORTED_MODULE_4__, _RemoveUserModal__WEBPACK_IMPORTED_MODULE_5__]);
([services_user__WEBPACK_IMPORTED_MODULE_4__, _RemoveUserModal__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const UserList = ()=>{
    const t = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useI18n */ .QT)();
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedID, setSelectedID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { message , setMessage  } = (0,components_shared_SnackBar_useSnackBar__WEBPACK_IMPORTED_MODULE_7__/* .useSnackbar */ .D)(3000);
    const { isLoading , data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "getAllUserDataDB",
        users.length
    ], ()=>(0,services_user__WEBPACK_IMPORTED_MODULE_4__/* .getAllUserDataDB */ .rl)().then((res)=>{
            return res;
        }), {
        enabled: true,
        staleTime: 6 * 50 * 1000,
        useErrorBoundary: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data && data.length > 0) setUsers(data);
    }, [
        data
    ]);
    const loading = isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_userList_module_scss__WEBPACK_IMPORTED_MODULE_9___default().loading),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(public_svgs__WEBPACK_IMPORTED_MODULE_8__/* .LoadingSpinner */ .TK, {})
    });
    const handleCloseModal = ()=>{
        setOpenModal(false);
    };
    const handleRemoveButton = (e)=>{
        const { id  } = e.currentTarget.dataset;
        setSelectedID(id ?? "");
        setOpenModal(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_userList_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tableWrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: (_userList_module_scss__WEBPACK_IMPORTED_MODULE_9___default().userTable),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: `${t("common:adminSetting.userList.id")}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: `${t("common:adminSetting.userList.name")}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: `${t("common:adminSetting.userList.phone")}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: `${t("common:adminSetting.userList.withdrawal")}`
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: users.length > 0 && users.map((value)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: value.data.id
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: value.data.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: value.data.phone
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            "data-id": value.key,
                                            onClick: handleRemoveButton,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(public_svgs__WEBPACK_IMPORTED_MODULE_8__/* .TrashIcon */ .XH, {
                                                className: (_userList_module_scss__WEBPACK_IMPORTED_MODULE_9___default().trashIcon)
                                            })
                                        })
                                    })
                                ]
                            }, value.key))
                    })
                ]
            }),
            loading,
            openModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RemoveUserModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onClose: handleCloseModal,
                id: selectedID,
                setMessage: setMessage,
                setUsers: setUsers
            }),
            message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_shared_SnackBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                message: message,
                setMessage: setMessage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _components_TabMenu_TradeChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6624);
/* harmony import */ var _components_TabMenu_UserList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6619);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9176);
/* harmony import */ var _adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7380);
/* harmony import */ var _adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TabMenu_UserList__WEBPACK_IMPORTED_MODULE_6__]);
_components_TabMenu_UserList__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const AdminSetting = ()=>{
    const t = (0,hooks__WEBPACK_IMPORTED_MODULE_8__/* .useI18n */ .QT)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (session?.user?.role !== 0) router.replace("/");
    }, [
        router,
        session?.user?.role
    ]);
    const MENU_LISTS = session?.user?.role === 0 ? [
        [
            t("adminSetting.userTab"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TabMenu_UserList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}, "userlist")
        ],
        [
            t("adminSetting.chartTab"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TabMenu_TradeChart__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}, "tradechart")
        ]
    ] : [];
    const width = 100 / MENU_LISTS.length;
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [SlideStyle, setSlideStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        width: `${width}%`
    });
    const changeTabHandler = (tabNumber)=>{
        setValue(tabNumber);
        setSlideStyle((prev)=>({
                ...prev,
                left: `${width * tabNumber}%`
            }));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: (_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tabMenu),
                            children: MENU_LISTS.map((menu, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (0,styles__WEBPACK_IMPORTED_MODULE_7__.cx)({
                                        [(_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tabMenuActive)]: value === index
                                    }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: ()=>changeTabHandler(index),
                                        children: menu[0]
                                    })
                                }, `menu-${index + 1}`))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default().slider),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default().indicator),
                                style: SlideStyle
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contentConatainer),
                children: MENU_LISTS.map((menu, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (0,styles__WEBPACK_IMPORTED_MODULE_7__.cx)((_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tabContents), {
                            [(_adminSetting_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tabContentsHidden)]: value !== index
                        }),
                        children: menu[1]
                    }, `content-${index + 1}`))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSetting);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyC3BWBguKL4j0fW6bmA3JY_3VlnYaL17W0",
    authDomain: "wob-assignment.firebaseapp.com",
    databaseURL: "https://wob-assignment-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wob-assignment",
    storageBucket: "wob-assignment.appspot.com",
    messagingSenderId: "1021846824455",
    appId: "1:1021846824455:web:35914d40938ae28f84eca2",
    measurementId: "G-6VZ0M4WCQE"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_q": () => (/* binding */ removeUserDB),
/* harmony export */   "rl": () => (/* binding */ getAllUserDataDB)
/* harmony export */ });
/* unused harmony exports getUserDataDB, addUserDB, updateUserDBInfo, updateUserDBLikes */
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1492);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, "user");
const getAllUserDataDB = async ()=>{
    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(userRef).then((res)=>{
        const users = res.docs.map((docs)=>({
                data: docs.data(),
                key: docs.id
            })).filter((user)=>user.data.role === 0);
        return users;
    }).catch((error)=>error);
};
const getUserDataDB = async (id)=>{
    return getDocs(userRef).then((res)=>{
        const users = res.docs.map((docs)=>({
                data: docs.data(),
                key: docs.id
            })).filter((user)=>user.data.id === id);
        return users;
    }).catch((error)=>error);
};
const addUserDB = async (newUser)=>{
    return getAllUserDataDB().then((res)=>{
        const index = res.findIndex((user)=>user.data.id === newUser.id);
        if (index !== -1) throw new Error("ID 중복");
        return addDoc(userRef, newUser);
    }).catch((err)=>{
        throw err;
    });
};
const removeUserDB = async (id)=>{
    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(userRef, id));
};
const updateUserDBInfo = async (id, key, pw, name, phone)=>{
    return getUserDataDB(id).then((res)=>{
        if (res?.length < 1) throw new Error("No user!");
        if (res[0]?.data?.pw !== pw) throw new Error("Password is not correct!");
        const docRef = doc(db, "user", key);
        return updateDoc(docRef, {
            name,
            phone
        });
    }).catch((err)=>{
        throw err;
    });
};
const updateUserDBLikes = async (key, likes)=>{
    const docRef = doc(db, "user", key);
    return updateDoc(docRef, {
        likes
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [560,261,459], () => (__webpack_exec__(9714)));
module.exports = __webpack_exports__;

})();