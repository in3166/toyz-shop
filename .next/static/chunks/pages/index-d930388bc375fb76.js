(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(98117)}])},84272:function(n,t,e){"use strict";var o=e(85893),r=e(99176),i=e(77843),c=e.n(i);t.Z=function(n){var t=n.children,e=n.color,i=n.width;return(0,o.jsx)("div",{className:(0,r.cx)(c().container,c()["".concat(void 0===e?"white":e)],c()["".concat(void 0===i?"sm":i)]),children:t})}},98117:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSP:function(){return z},default:function(){return D}});var o=e(85893),r=e(9008),i=e.n(r),c=e(26042),s=e(69396),d=e(828),a=e(46066),l=e(27484),u=e.n(l);e(41548),e(73873);var _=e(12571),h=e(11163),m=e(72306),p=e.n(m),x={dots:!0,infinite:!0,speed:700,slidesToShow:1,autoplay:!1,slidesToScroll:1,arrows:!1,dotsClass:"slick-dots ".concat(p().dots)},j=function(n){var t=n.products,e=(0,_.QT)(),r=(0,d.Z)((0,_.eJ)(!1),2),i=r[0],l=r[1],m=(0,h.useRouter)(),j=function(n){var t=n.currentTarget.value;i||m.push(t)};return(0,o.jsx)(a.Z,(0,s.Z)((0,c.Z)({},x),{className:p().slider,children:(null==t?void 0:t.length)>0&&t.map(function(n){return(0,o.jsxs)("button",{type:"button",onMouseMove:function(){return l(!0)},onMouseDown:function(){return l(!1)},onClick:function(n){return j(n)},className:(p().link,p().slideContent),value:"/product/".concat(n._id),children:[(0,o.jsx)("img",{src:n.image,loading:"lazy",alt:"products",placeholder:""}),(0,o.jsx)("div",{className:p().description,children:(0,o.jsxs)("dl",{children:[(0,o.jsxs)("div",{className:p().dlContent,children:[(0,o.jsxs)("dt",{children:["".concat(e("common:title")),": "]}),(0,o.jsx)("dd",{children:n.title})]}),(0,o.jsxs)("div",{className:p().dlContent,children:[(0,o.jsxs)("dt",{children:["".concat(e("common:price")),": "]}),(0,o.jsxs)("dd",{children:[n.price," 만원"]})]}),(0,o.jsxs)("div",{className:p().dlContent,children:[(0,o.jsxs)("dt",{children:["".concat(e("common:owner")),": "]}),(0,o.jsx)("dd",{children:n.owner.name})]}),(0,o.jsxs)("div",{className:p().dlContent,children:[(0,o.jsxs)("dt",{children:["".concat(e("common:date")),": "]}),(0,o.jsx)("dd",{children:u()(n.createdAt).format("YYYY-MM-DD")})]})]})})]},n._id)})}))},f=e(47568),v=e(70655),g=e(67294),N=e(4480),w=e(45007),C=(0,N.cn)({key:"currentUser/".concat((0,w.Z)()),default:void 0}),b=e(84272),M=e(41664),T=e.n(M),Z=e(58971),k=e.n(Z),y=e(12108),S=e.n(y),E=e(15845),I=function(n){var t=n.item,e=n.user,r=n.setUser,i=(0,_.QT)(),c=(0,d.Z)((0,g.useState)(!1),1)[0];return(0,o.jsx)(T(),{href:"/product/".concat(t._id),children:(0,o.jsxs)("li",{className:S().card,title:t.title,children:[(0,o.jsxs)("h3",{className:S().header,children:[(0,o.jsx)("div",{className:S().title,children:t.title}),(0,o.jsx)("button",{type:"button",className:S().likeButton,onClick:function(n){n.preventDefault(),e&&r&&""!==e.id&&"admin"!==e.id&&k().remove("currentUser")},children:c?(0,o.jsx)(E.qC,{}):(0,o.jsx)(E.Pz,{})})]}),(0,o.jsx)("img",{src:t.image,alt:t.title,className:S().itemImage}),(0,o.jsxs)("dl",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("dt",{children:"".concat(i("common:owner"))}),(0,o.jsx)("dd",{children:t.owner.name})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("dt",{children:"".concat(i("common:price"))}),(0,o.jsxs)("dd",{children:[t.price," 만원"]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("dt",{children:"".concat(i("common:date"))}),(0,o.jsx)("dd",{children:u()(t.createdAt).format("YY-MM-DD")})]})]})]})})},P=e(23243),R=e.n(P),B=e(56251),J=e.n(B),L=function(){return(0,o.jsx)("div",{className:J().loading,children:(0,o.jsx)(E.TK,{})})},Y=function(n){var t,e=n.products,r=(0,d.Z)((0,g.useState)(e),2),i=r[0],c=r[1],s=(0,d.Z)((0,g.useState)(!1),2),a=s[0],l=s[1],u=(0,d.Z)([(t=(0,d.Z)((0,N.FV)(C),2))[0],t[1],(0,N.rb)(C)],2)[1],_=(0,h.useRouter)();return(0,g.useEffect)(function(){l(!0);var n,t=_.query;(null==t?void 0:t.text)?fetch("".concat("http://127.0.0.1:3000","/api/products/search?text=").concat(null==t?void 0:t.text),{method:"GET",headers:{"Content-Type":"application/json"}}).then((n=(0,f.Z)(function(n){var t;return(0,v.__generator)(this,function(e){switch(e.label){case 0:return[4,n.json()];case 1:return(t=e.sent()).success&&(c(t.product),l(!1)),[2]}})}),function(t){return n.apply(this,arguments)})):l(!1)},[_]),(0,o.jsxs)(b.Z,{width:"lg",children:[(null==i?void 0:i.length)<1&&(0,o.jsx)("div",{children:"No Items."}),!a&&(0,o.jsx)("ul",{className:R().cardContainer,children:null==i?void 0:i.map(function(n){return(0,o.jsx)(I,{item:n,user:n.owner,setUser:u},n._id)})}),a&&(0,o.jsx)(L,{})]})},z=!0,D=function(n){var t=n.pageProps.products;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"Toyz"}),(0,o.jsx)("meta",{name:"description",content:"You can buy a wide variety of amazing toys!."})]}),(0,o.jsx)(j,{products:t}),(0,o.jsx)(Y,{products:t})]})}},72306:function(n){n.exports={slider:"banner_slider__zZHPm",dots:"banner_dots__252bw",dlContent:"banner_dlContent__NAwHE",slideContent:"banner_slideContent__gp2my",description:"banner_description__HFC1M"}},23243:function(n){n.exports={cardContainer:"productList_cardContainer___fd5l",rotation:"productList_rotation__F9uUG",moveRight:"productList_moveRight__RJrIe",openModal:"productList_openModal__Iekpa",loadingScroll:"productList_loadingScroll__9bJ6E"}},12108:function(n){n.exports={card:"card_card__l_7sh",itemImage:"card_itemImage__bksTG",header:"card_header__fBLN6",title:"card_title__MMfJO",likeButton:"card_likeButton__JIJRM",updateButton:"card_updateButton__uJP6l"}},77843:function(n){n.exports={container:"container_container__fTbCc",sm:"container_sm__1KMlQ",md:"container_md__WSIpK",lg:"container_lg__xgT23",white:"container_white__rL3_Z"}},56251:function(n){n.exports={loading:"loading_loading__14I2q",rotation:"loading_rotation__Q9H9O",moveRight:"loading_moveRight__tBdtX",openModal:"loading_openModal__psoPl",loadingScroll:"loading_loadingScroll__T6zEo"}}},function(n){n.O(0,[650,774,888,179],function(){return n(n.s=48312)}),_N_E=n.O()}]);