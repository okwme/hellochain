(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{175:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),a("p",[t._v("然后，你可以构造并运行以下查询：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),a("h3",{attrs:{id:"回到教程起开头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回到教程起开头","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("router-link",{attrs:{to:"./"}},[t._v("回到教程起开头")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"运行-rest-路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行-rest-路由","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行 REST 路由")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在不已经测试了CLI的查询操作和交易操作，是时候在REST服务器中进行相同测试了。保留先前运行的"),s("code",[this._v("nsd")]),this._v("，然后先收集地址：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ nscli keys show jack --address\n$ nscli keys show alice --address\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在另一个终端窗口运行"),s("code",[this._v("rest-server")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ nscli rest-server --chain-id namechain --trust-node\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("注意：请务必将你的密码和 buyer/owner 地址替换为下面列出的地址！")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get the sequence and account numbers for jack to construct the below requests")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s http://localhost:1317/auth/accounts/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("nscli keys show jack -a"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# > {"type":"auth/Account","value":{"address":"cosmos127qa40nmq56hu27ae263zvfk3ey0tkapwk0gq6","coins":[{"denom":"jackCoin","amount":"1000"},{"denom":"nametoken","amount":"1010"}],"public_key":{"type":"tendermint/PubKeySecp256k1","value":"A9YxyEbSWzLr+IdK/PuMUYmYToKYQ3P/pM8SI1Bxx3wu"},"account_number":"0","sequence":"1"}}')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get the sequence and account numbers for alice to construct the below requests")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s http://localhost:1317/auth/accounts/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("nscli keys show alice -a"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# > {"type":"auth/Account","value":{"address":"cosmos1h7ztnf2zkf4558hdxv5kpemdrg3tf94hnpvgsl","coins":[{"denom":"aliceCoin","amount":"1000"},{"denom":"nametoken","amount":"980"}],"public_key":{"type":"tendermint/PubKeySecp256k1","value":"Avc7qwecLHz5qb1EKDuSTLJfVOjBQezk0KSPDNybLONJ"},"account_number":"1","sequence":"1"}}')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Buy another name for jack")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# NOTE: Be sure to specialize this request for your specific environment, also the "buyer" and "from" should be the same address')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -XPOST -s http://localhost:1317/nameservice/names --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"base_req":{"from":"jack","password":"foobarbaz","chain_id":"namechain","sequence":"2","account_number":"0"},"name":"jack1.id","amount":"5nametoken","buyer":"cosmos127qa40nmq56hu27ae263zvfk3ey0tkapwk0gq6"}\'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# > {"check_tx":{"gasWanted":"200000","gasUsed":"1242"},"deliver_tx":{"log":"Msg 0: ","gasWanted":"200000","gasUsed":"2986","tags":[{"key":"YWN0aW9u","value":"YnV5X25hbWU="}]},"hash":"098996CD7ED4323561AC9011DEA24C70C8FAED2A4A10BC8DE2CE35C1977C3B7A","height":"23"}')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set the data for that name that jack just bought")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# NOTE: Be sure to specialize this request for your specific environment, also the "owner" and "from" should be the same address')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -XPUT -s http://localhost:1317/nameservice/names --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"base_req":{"from":"jack","password":"foobarbaz","chain_id":"namechain","sequence":"3","account_number":"0"},"name":"jack1.id","value":"8.8.4.4","owner":"cosmos127qa40nmq56hu27ae263zvfk3ey0tkapwk0gq6"}\'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# > {"check_tx":{"gasWanted":"200000","gasUsed":"1242"},"deliver_tx":{"log":"Msg 0: ","gasWanted":"200000","gasUsed":"1352","tags":[{"key":"YWN0aW9u","value":"c2V0X25hbWU="}]},"hash":"B4DF0105D57380D60524664A2E818428321A0DCA1B6B2F091FB3BEC54D68FAD7","height":"26"}')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Query the value for the name jack just set")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s http://localhost:1317/nameservice/names/jack1.id\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8.8.4.4")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Query whois for the name jack just bought")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s http://localhost:1317/nameservice/names/jack1.id/whois\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# > {"value":"8.8.8.8","owner":"cosmos127qa40nmq56hu27ae263zvfk3ey0tkapwk0gq6","price":[{"denom":"STAKE","amount":"10"}]}')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Alice buys name from jack")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -XPOST -s http://localhost:1317/nameservice/names --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"base_req":{"from":"alice","password":"foobarbaz","chain_id":"namechain","sequence":"1","account_number":"1"},"name":"jack1.id","amount":"10nametoken","buyer":"cosmos1h7ztnf2zkf4558hdxv5kpemdrg3tf94hnpvgsl"}\'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# > {"check_tx":{"gasWanted":"200000","gasUsed":"1264"},"deliver_tx":{"log":"Msg 0: ","gasWanted":"200000","gasUsed":"4509","tags":[{"key":"YWN0aW9u","value":"YnV5X25hbWU="}]},"hash":"81A371392B52F703266257D524538085F8C749EE3CBC1C579873632EFBAFA40C","height":"70"}')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"请求概要："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求概要：","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求概要：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("POST /nameservice/names")]),this._v(" BuyName请求体：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base_req"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chain_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sequence"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"account_number"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gas"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string,not_req"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gas_adjustment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string,not_req"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"buyer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("PUT /nameservice/names")]),this._v(" SetName请求体：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base_req"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"chain_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sequence"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"account_number"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gas"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string,not_req"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gas_adjustment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strin,not_reqg"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"owner"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);