(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1121:function(_,v,t){"use strict";t.r(v);var a=t(3),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[_._v("#")]),_._v(" DNS")]),_._v(" "),t("h2",{attrs:{id:"_1-dns-协议的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-dns-协议的概念"}},[_._v("#")]),_._v(" 1. DNS 协议的概念")]),_._v(" "),t("p",[t("strong",[_._v("概念")]),_._v("： DNS 是域名系统 (Domain Name System) 的缩写，提供的是一种主机名到 IP 地址的转换服务，就是我们常说的域名系统。它是一个由分层的 DNS 服务器组成的分布式数据库，是定义了主机如何查询这个分布式数据库的方式的应用层协议。能够使人更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串。")]),_._v(" "),t("p",[t("strong",[_._v("作用")]),_._v("： 将域名解析为IP地址，客户端向DNS服务器（DNS服务器有自己的IP地址）发送域名查询请求，DNS服务器告知客户机Web服务器的IP 地址。")]),_._v(" "),t("h2",{attrs:{id:"_2-dns同时使用tcp和udp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns同时使用tcp和udp协议"}},[_._v("#")]),_._v(" 2. DNS同时使用TCP和UDP协议")]),_._v(" "),t("p",[t("strong",[_._v("DNS占用53号端口，同时使用TCP和UDP协议。")])]),_._v(" "),t("p",[_._v("（1）在区域传输的时候使用TCP协议")]),_._v(" "),t("ul",[t("li",[_._v("辅域名服务器会定时（一般3小时）向主域名服务器进行查询以便了解数据是否有变动。如有变动，会执行一次区域传送，进行数据同步。区域传送使用TCP而不是UDP，因为数据同步传送的数据量比一个请求应答的数据量要多得多。")]),_._v(" "),t("li",[_._v("TCP是一种可靠连接，保证了数据的准确性。")])]),_._v(" "),t("p",[_._v("（2）在域名解析的时候使用UDP协议")]),_._v(" "),t("ul",[t("li",[_._v("客户端向DNS服务器查询域名，一般返回的内容都不超过512字节，用UDP传输即可。不用经过三次握手，这样DNS服务器负载更低，响应更快。理论上说，客户端也可以指定向DNS服务器查询时用TCP，但事实上，很多DNS服务器进行配置的时候，仅支持UDP查询包。")])]),_._v(" "),t("h2",{attrs:{id:"_3-dns完整的查询过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns完整的查询过程"}},[_._v("#")]),_._v(" 3. DNS完整的查询过程")]),_._v(" "),t("p",[_._v("DNS服务器解析域名的过程：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("首先会在"),t("strong",[_._v("浏览器的缓存")]),_._v("中查找对应的IP地址，如果查找到直接返回，若找不到继续下一步")])]),_._v(" "),t("li",[t("p",[_._v("将请求发送给"),t("strong",[_._v("本地DNS服务器")]),_._v("，在本地域名服务器缓存中查询，如果查找到，就直接将查找结果返回，若找不到继续下一步")])]),_._v(" "),t("li",[t("p",[_._v("本地DNS服务器向"),t("strong",[_._v("根域名服务器")]),_._v("发送请求，根域名服务器会返回一个所查询域的顶级域名服务器地址")])]),_._v(" "),t("li",[t("p",[_._v("本地DNS服务器向"),t("strong",[_._v("顶级域名服务器")]),_._v("发送请求，接受请求的服务器查询自己的缓存，如果有记录，就返回查询结果，如果没有就返回相关的下一级的权威域名服务器的地址")])]),_._v(" "),t("li",[t("p",[_._v("本地DNS服务器向"),t("strong",[_._v("权威域名服务器")]),_._v("发送请求，域名服务器返回对应的结果")])]),_._v(" "),t("li",[t("p",[_._v("本地DNS服务器将返回结果保存在缓存中，便于下次使用")])]),_._v(" "),t("li",[t("p",[_._v("本地DNS服务器将返回结果返回给浏览器")])])]),_._v(" "),t("p",[_._v("比如我们如果想要查询 "),t("a",{attrs:{href:"http://www.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("www.baidu.com"),t("OutboundLink")],1),_._v(" 的 IP 地址，我们首先会在浏览器的缓存中查找是否有该域名的缓存，如果不存在就将请求发送到本地的 DNS 服务器中，本地DNS服务器会判断是否存在该域名的缓存，如果不存在，则向根域名服务器发送一个请求，根域名服务器返回负责 .com 的顶级域名服务器的 IP 地址的列表。然后本地 DNS 服务器再向其中一个负责 .com 的顶级域名服务器发送一个请求，负责 .com 的顶级域名服务器返回负责 .baidu 的权威域名服务器的 IP 地址列表。然后本地 DNS 服务器再向其中一个权威域名服务器发送一个请求，最后权威域名服务器返回一个对应的主机名的 IP 地址列表。")]),_._v(" "),t("h2",{attrs:{id:"_4-迭代查询与递归查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-迭代查询与递归查询"}},[_._v("#")]),_._v(" 4.迭代查询与递归查询")]),_._v(" "),t("p",[_._v("实际上，DNS解析是一个包含迭代查询和递归查询的过程。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("递归查询")]),_._v("指的是查询请求发出后，域名服务器代为向下一级域名服务器发出请求，最后向用户返回查询的最终结果。使用递归 查询，用户只需要发出一次查询请求。")]),_._v(" "),t("li",[t("strong",[_._v("迭代查询")]),_._v("指的是查询请求后，域名服务器返回单次查询的结果。下一级的查询由用户自己请求。使用迭代查询，用户需要发出 多次的查询请求。")])]),_._v(" "),t("p",[_._v("一般我们向本地 DNS 服务器发送请求的方式就是递归查询，因为我们只需要发出一次请求，然后本地 DNS 服务器返回给我 们最终的请求结果。而本地 DNS 服务器向其他域名服务器请求的过程是迭代查询的过程，因为每一次域名服务器只返回单次 查询的结果，下一级的查询由本地 DNS 服务器自己进行。")]),_._v(" "),t("h2",{attrs:{id:"_5-dns-记录和报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-dns-记录和报文"}},[_._v("#")]),_._v(" 5. DNS 记录和报文")]),_._v(" "),t("p",[_._v("DNS 服务器中以资源记录的形式存储信息，每一个 DNS 响应报文一般包含多条资源记录。一条资源记录的具体的格式为")]),_._v(" "),t("p",[_._v("（Name，Value，Type，TTL）")]),_._v(" "),t("p",[_._v("其中 TTL 是资源记录的生存时间，它定义了资源记录能够被其他的 DNS 服务器缓存多长时间。")]),_._v(" "),t("p",[_._v("常用的一共有四种 Type 的值，分别是 A、NS、CNAME 和 MX ，不同 Type 的值，对应资源记录代表的意义不同。")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("如果 Type = A，则 Name 是主机名，Value 是主机名对应的 IP 地址。因此一条记录为 A 的资源记录，提供了标 准的主机名到 IP 地址的映射。")])]),_._v(" "),t("li",[t("p",[_._v("如果 Type = NS，则 Name 是个域名，Value 是负责该域名的 DNS 服务器的主机名。这个记录主要用于 DNS 链式 查询时，返回下一级需要查询的 DNS 服务器的信息。")])]),_._v(" "),t("li",[t("p",[_._v("如果 Type = CNAME，则 Name 为别名，Value 为该主机的规范主机名。该条记录用于向查询的主机返回一个主机名 对应的规范主机名，从而告诉查询主机去查询这个主机名的 IP 地址。主机别名主要是为了通过给一些复杂的主机名提供 一个便于记忆的简单的别名。")])]),_._v(" "),t("li",[t("p",[_._v("如果 Type = MX，则 Name 为一个邮件服务器的别名，Value 为邮件服务器的规范主机名。它的作用和 CNAME 是一 样的，都是为了解决规范主机名不利于记忆的缺点。")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);