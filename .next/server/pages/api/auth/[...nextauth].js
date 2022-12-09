"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 3569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/kakao"
const kakao_namespaceObject = require("next-auth/providers/kakao");
var kakao_default = /*#__PURE__*/__webpack_require__.n(kakao_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/naver"
const naver_namespaceObject = require("next-auth/providers/naver");
var naver_default = /*#__PURE__*/__webpack_require__.n(naver_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts






const confirmPasswordHash = (plainPassword, hashedPassword)=>{
    return new Promise((resolve)=>{
        external_bcrypt_default().compare(plainPassword, hashedPassword, (err, res)=>{
            resolve(res);
        });
    });
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        credentials_default()({
            name: "Credentials",
            credentials: {},
            async authorize (credentials) {
                const { id , password  } = credentials;
                try {
                    const response = await fetch(`${"http://127.0.0.1:3000"}/api/users/${id}`, {
                        method: "POST",
                        body: JSON.stringify({
                            id,
                            password
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    const data = await response.json();
                    if (!data.success) {
                        throw new Error(data?.error?.code);
                    }
                    const compare = await confirmPasswordHash(password, data.user.password);
                    if (!compare) throw new Error("10003");
                    delete data.user.password;
                    return data.user;
                } catch (error) {
                    if (typeof error === "string") {
                        throw new Error(error);
                    } else if (error instanceof Error) {
                        throw error;
                    }
                    return null;
                }
            }
        }),
        kakao_default()({
            clientId: process.env.KAKAO_CLIENT_ID || "",
            clientSecret: process.env.KAKAO_CLIENT_SECRET || ""
        }),
        naver_default()({
            clientId: process.env.NAVER_CLIENT_ID || "",
            clientSecret: process.env.NAVER_CLIENT_SECRET || ""
        }),
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET_KEY,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    jwt: {
        secret: "secret_toyz_669"
    },
    callbacks: {
        async signIn ({ user , account  }) {
            try {
                if (account?.type === "credentials") {
                    return true;
                }
                const response = await fetch(`${"http://127.0.0.1:3000"}/api/users/${user.email}`);
                const isUserExisted = await response.json();
                if (!isUserExisted.success) {
                    return `/signup?email=${user.email}`;
                }
                return true;
            } catch (err) {
                return false;
            }
        },
        session: async ({ session , token  })=>{
            session.user = token;
            return session;
        },
        jwt: async ({ token , user , account  })=>{
            if (user && account?.type === "oauth") {
                const response = await fetch(`${"http://127.0.0.1:3000"}/api/users/${user?.email}`);
                const data = await response.json();
                if (data.success) return {
                    ...token,
                    ...data.user
                };
            }
            if (user) {
                return {
                    ...token,
                    ...user
                };
            }
            return token;
        }
    },
    pages: {
        signIn: "/signin"
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3569));
module.exports = __webpack_exports__;

})();