(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{173:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("To "),n("a",{attrs:{href:"https://github.com/tendermint/go-amino#registering-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("register your types with Amino"),n("OutboundLink")],1),t._v(" so that they can be encoded/decoded, there is a bit of code that needs to be placed in "),n("code",[t._v("./x/nameservice/types/codec.go")]),t._v(". Any interface you create and any struct that implements an interface needs to be declared in the "),n("code",[t._v("RegisterCodec")]),t._v(" function. In this module the two "),n("code",[t._v("Msg")]),t._v(" implementations ("),n("code",[t._v("SetName")]),t._v(" and "),n("code",[t._v("BuyName")]),t._v(") need to be registered, but your "),n("code",[t._v("Whois")]),t._v(" query return type does not. In addition, we define a module specific codec for use later.")]),t._v(" "),t._m(1),n("h3",{attrs:{id:"next-you-need-to-define-cli-interactions-with-your-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-you-need-to-define-cli-interactions-with-your-module","aria-hidden":"true"}},[t._v("#")]),t._v(" Next you need to define "),n("router-link",{attrs:{to:"./cli.html"}},[t._v("CLI interactions")]),t._v(" with your module.")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"codec-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#codec-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Codec File")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" types\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/cosmos-sdk/codec"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ModuleCdc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" codec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterCodec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ModuleCdc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RegisterCodec registers concrete types on the Amino codec")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterCodec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cdc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("codec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Codec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcdc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterConcrete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MsgSetName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nameservice/SetName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tcdc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RegisterConcrete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MsgBuyName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nameservice/BuyName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);