(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{89088:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting/user",function(){return t(524)}])},54608:function(n,e,t){"use strict";var r=t(14924),u=t(85893),a=t(12571),o=t(15845),i=t(99176),s=t(39372),c=t.n(s);e.Z=function(n){var e=n.formTitle,t=n.value,s=n.onBlur,l=n.onChange,f=n.reset,d=n.hasError,v=n.type,p=n.errorMessage,g=n.inputFocusRef,m=n.read,_=n.rows;return(0,a.b6)(function(){var n;null==g||null===(n=g.current)||void 0===n||n.focus()}),(0,u.jsxs)("div",{className:c().inputForm,children:[(0,u.jsx)("label",{htmlFor:e,className:c().formTitle,children:e}),"textarea"!==v?(0,u.jsx)("input",{type:v,id:e,value:t,onBlur:s,onChange:l,className:(0,i.cx)(c().inputText,(0,r.Z)({},c().readOnlyInput,m)),ref:g,readOnly:m,autoComplete:"current-".concat(e)}):(0,u.jsx)("textarea",{id:e,value:t,onBlur:s,onChange:l,className:(0,i.cx)(c().inputTextarea,(0,r.Z)({},c().readOnlyInput,m)),ref:g,readOnly:m,autoComplete:"current-".concat(e),rows:_}),!m&&(0,u.jsx)(o.oC,{className:(0,i.cx)((0,r.Z)({},c().iconHidden,""===t)),onClick:function(){f&&f()}}),d&&(0,u.jsx)("p",{className:c().errorMessage,children:p})]})}},11018:function(n,e,t){"use strict";var r=t(14924),u=t(85893),a=t(99176),o=t(93578),i=t.n(o),s=t(15845),c=t(67294);e.Z=c.memo(function(n){var e=n.message,t=n.setMessage,o=n.status;return(0,u.jsxs)("div",{role:"alert",className:(0,a.cx)(i().snackBar,(0,r.Z)({},i().visible,""!==e),(0,r.Z)({},i().warning,"warning"===o),(0,r.Z)({},i().error,"error"===o)),children:[e,(0,u.jsx)("button",{type:"button",onClick:function(){return t("")},children:(0,u.jsx)(s.Tw,{})})]})})},21025:function(n,e,t){"use strict";t.d(e,{D:function(){return o}});var r=t(828),u=t(67294),a=t(54021),o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3,e=(0,r.Z)((0,u.useState)(""),2),t=e[0],o=e[1],i=(0,u.useRef)(null),s=(0,u.useCallback)(function(n){o(n)},[]),c=function(){i.current&&clearTimeout(i.current)};return(0,a.Z)(function(){i.current&&c(),""!==t&&(i.current=setTimeout(function(){o(""),c()},n+100))},[t]),(0,u.useEffect)(function(){return function(){i.current&&c(),o("")}},[]),{message:t,setMessage:s,clearTimer:c}}},57896:function(n,e,t){"use strict";var r=t(828),u=t(67294);e.Z=function(n){var e=n.validateFunction,t=n.initialValue,a=void 0===t?"":t,o=(0,r.Z)((0,u.useState)(a),2),i=o[0],s=o[1],c=(0,r.Z)((0,u.useState)(!1),2),l=c[0],f=c[1],d=!0;e&&(d=e(i));var v=!d&&l,p=(0,u.useCallback)(function(n){s(n.currentTarget.value)},[]),g=(0,u.useCallback)(function(n){s(n.currentTarget.value)},[]),m=(0,u.useCallback)(function(){f(!0)},[]),_=(0,u.useCallback)(function(){s(a),f(!1)},[a]);return{value:i,setValue:s,hasError:v,valueIsValid:d,valueChangeHandler:p,valueClickHandler:g,inputBlurHandler:m,reset:_}}},524:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return h}});var r=t(47568),u=t(828),a=t(70655),o=t(85893),i=t(67294),s=t(33299),c=t(11163),l=t(12571),f=t(57896),d=t(94893),v=t(54608),p=t(11018),g=t(21025),m=t(96697),_=t.n(m),h=!0;e.default=function(){var n,e,t,m,h=(0,l.QT)(),x=(0,c.useRouter)(),T=(0,s.useSession)().data;(0,i.useEffect)(function(){T||x.push("/")},[x,T]);var Z=(0,i.useRef)(null),C=(0,u.Z)((0,i.useState)(""),2),k=C[0],B=C[1],j=(0,g.D)(5e3),w=j.message,y=j.setMessage,N=(0,f.Z)({validateFunction:d.Ol,initialValue:(null==T?void 0:null===(e=T.user)||void 0===e?void 0:e.name)||""}),b=N.value,S=N.reset,E=N.valueIsValid,M=N.hasError,H=N.valueChangeHandler,O=N.inputBlurHandler,F=(0,f.Z)({validateFunction:d.Y0,initialValue:null==T?void 0:null===(t=T.user)||void 0===t?void 0:t.phone}),I=F.value,V=F.reset,P=F.valueIsValid,z=F.hasError,R=F.valueChangeHandler,U=F.inputBlurHandler,A=(0,f.Z)({validateFunction:d.uo,initialValue:""}),D=A.value,Y=A.reset,$=A.valueIsValid,J=A.hasError,Q=A.valueChangeHandler,W=A.inputBlurHandler,X=(n=(0,r.Z)(function(n){var e,t,r,u;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(n.preventDefault(),!E||!P||!$)return W(),U(),O(),B("warning"),y("입력 정보가 올바르지 않습니다."),[2];return[4,fetch("/api/users/".concat(null==T?void 0:null===(e=T.user)||void 0===e?void 0:e.id),{method:"PUT",body:JSON.stringify({name:b,phone:I,password:D}),headers:{"Content-Type":"application/json"}})];case 1:return[4,a.sent().json()];case 2:if((r=a.sent()).success)return B(""),y("[".concat(null===(u=r.user)||void 0===u?void 0:u.id,"]: 회원 정보 수정 완료")),[2];return B("error"),y("[".concat(null===(t=r.error)||void 0===t?void 0:t.code,"]: ").concat(r.message)),[2]}})}),function(e){return n.apply(this,arguments)});return(0,o.jsxs)("article",{className:_().wrapper,children:[(0,o.jsx)("h2",{children:"".concat(h("common:userInfo.title"))}),(0,o.jsxs)("form",{onSubmit:X,children:[(0,o.jsx)(v.Z,{type:"text",formTitle:"".concat(h("common:signUp.titleID")),value:(null==T?void 0:null===(m=T.user)||void 0===m?void 0:m.id)||"",read:!0}),(0,o.jsx)(v.Z,{type:"text",formTitle:"".concat(h("common:signUp.titleName")),value:b,onChange:H,reset:S,onBlur:O,hasError:M,errorMessage:"".concat(h("common:signUp.errorMessageName")),inputFocusRef:Z}),(0,o.jsx)(v.Z,{type:"text",formTitle:"".concat(h("common:signUp.titlePhone")),value:I,onChange:R,reset:V,onBlur:U,hasError:z,errorMessage:"".concat(h("common:signUp.errorMessagePhone"))}),(0,o.jsx)(v.Z,{type:"password",formTitle:"".concat(h("common:signUp.titlePW")),value:D,onChange:Q,reset:Y,onBlur:W,hasError:J,errorMessage:"".concat(h("common:signUp.errorMessagePW"))}),(0,o.jsx)("footer",{children:(0,o.jsx)("button",{type:"submit",children:"수정"})})]}),w&&(0,o.jsx)(p.Z,{message:w,status:k,setMessage:y})]})}},94893:function(n,e,t){"use strict";function r(n){return n.toString().length>3}function u(n){var e=n.toString();return/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/.test(e)}function a(n){return n.toString().length>1}function o(n){var e=n.toString();return/^\d{2,3}-\d{1,4}-\d{1,4}$/.test(e)}function i(n){var e=n.toString();return/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.test(e)}function s(n){return n.toString().length>3}function c(n){return Number(n)>0}function l(n){return n.toString().length>4}t.d(e,{$Q:function(){return c},Ol:function(){return a},Y0:function(){return o},eT:function(){return s},ko:function(){return l},oH:function(){return i},un:function(){return r},uo:function(){return u}})},39372:function(n){n.exports={inputForm:"inputText_inputForm__sq49X",formTitle:"inputText_formTitle__mKBoA",iconHidden:"inputText_iconHidden__3_vtu",inputText:"inputText_inputText__oJzmB",inputTextarea:"inputText_inputTextarea__0nq9O",readOnlyInput:"inputText_readOnlyInput__baNB1",errorMessage:"inputText_errorMessage__ddIYe"}},93578:function(n){n.exports={snackBar:"snackBar_snackBar__Jfgy5",moveRight:"snackBar_moveRight__VOTmc",warning:"snackBar_warning__rjYfH",error:"snackBar_error__bNCLK",rotation:"snackBar_rotation__uNEnZ",openModal:"snackBar_openModal__uFaxz",loadingScroll:"snackBar_loadingScroll__pW3gr"}},96697:function(n){n.exports={wrapper:"userSetting_wrapper__TQmrG"}},54021:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(67294),u=function(n,e){var t,u=(t=(0,r.useRef)(!0)).current?(t.current=!1,!0):t.current;(0,r.useEffect)(function(){if(!u)return n()},e)}},47568:function(n,e,t){"use strict";function r(n,e,t,r,u,a,o){try{var i=n[a](o),s=i.value}catch(c){t(c);return}i.done?e(s):Promise.resolve(s).then(r,u)}function u(n){return function(){var e=this,t=arguments;return new Promise(function(u,a){var o=n.apply(e,t);function i(n){r(o,u,a,i,s,"next",n)}function s(n){r(o,u,a,i,s,"throw",n)}i(void 0)})}}t.d(e,{Z:function(){return u}})}},function(n){n.O(0,[774,888,179],function(){return n(n.s=89088)}),_N_E=n.O()}]);