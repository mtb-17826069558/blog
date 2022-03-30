(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1218:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"koa2-快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa2-快速开始"}},[s._v("#")]),s._v(" koa2 快速开始")]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("ul",[a("li",[s._v("因为node.js v7.6.0开始完全支持async/await，不需要加flag，所以node.js环境都要7.6.0以上")]),s._v(" "),a("li",[s._v("node.js环境 版本v7.6以上\n"),a("ul",[a("li",[s._v("直接安装node.js 7.6：node.js官网地址"),a("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("nvm管理多版本node.js：可以用nvm 进行node版本进行管理\n"),a("ul",[a("li",[s._v("Mac系统安装nvm https://github.com/creationix/nvm#manual-install")]),s._v(" "),a("li",[s._v("windows系统安装nvm https://github.com/coreybutler/nvm-windows")]),s._v(" "),a("li",[s._v("Ubuntu系统安装nvm https://github.com/creationix/nvm")])])])])]),s._v(" "),a("li",[s._v("npm 版本3.x以上")])]),s._v(" "),a("h2",{attrs:{id:"快速开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[s._v("#")]),s._v(" 快速开始")]),s._v(" "),a("h3",{attrs:{id:"安装koa2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装koa2"}},[s._v("#")]),s._v(" 安装koa2")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化package.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装koa2 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" koa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"hello-world-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-代码"}},[s._v("#")]),s._v(" hello world 代码")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Koa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Koa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello koa2'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[demo] start-quick is starting at port 3000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"启动demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动demo"}},[s._v("#")]),s._v(" 启动demo")]),s._v(" "),a("p",[s._v("由于koa2是基于async/await操作中间件，目前node.js 7.x的harmony模式下才能使用，所以启动的时的脚本如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("node index.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("访问"),a("a",{attrs:{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http:localhost:3000"),a("OutboundLink")],1),s._v("，效果如下")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://chenshenhai.github.io/koa2-note/note/images/start-result-01.png",alt:"start-result-01"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);