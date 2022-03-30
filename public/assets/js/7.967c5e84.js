(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1136:function(t,s,v){"use strict";v.r(s);var _=v(3),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-性能优化概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-性能优化概述"}},[t._v("#")]),t._v(" 1. 性能优化概述")]),t._v(" "),_("h3",{attrs:{id:"_1-性能优化的影响"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-性能优化的影响"}},[t._v("#")]),t._v(" （1）性能优化的影响")]),t._v(" "),_("p",[t._v("为何会出现性能优化呢？实际上产品的性能优化是市场中类似产品的激烈竞争所导致的，这种竞争是不可避免的。归根结底比的就是“人无我有，人有我优，人有我廉，人廉我专”。最终竞品之间的比较都会趋向于性能的竞争，产品的性能可以直接影响其转化率、用户留存率等指标。")]),t._v(" "),_("p",[t._v("网站性能会对以下指标产生影响：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("用户的留存")]),t._v("：产品的留存情况一般是自用户登录注册之日起，经过一段时间后，仍然在使用该产品的用户数。用户留存数在用户注册数中的比例就是用户留存率。页面加载时间越长，应用就会被多数用户所抛弃。一般情况下，加载越快，用户的留存率越高。")])]),t._v(" "),_("li",[_("p",[t._v("**网站的转化率：**网站转化率指的是用户进行某项目标行为的访问次数与总访问次数的比率，比如在电商网站上浏览某个商品的用户中有多少用户最终购买了这件商品，其所占的比例就是访客到消费者的转化率。页面的加载越快，提升了用户体验，用户的转化率也会随之提高。")])]),t._v(" "),_("li",[_("p",[t._v("**体验与传播：**性能问题导致的用户体验差，造成的不仅使用户放弃该应用，还会导致用户拒绝想自己周边网络推荐该应用，更坏的情况就是用户会对应用的低性能进行差评。产品的口碑对于其发展的重要性是不言而喻的。")])])]),t._v(" "),_("h3",{attrs:{id:"_2-性能的评估模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-性能的评估模型"}},[t._v("#")]),t._v(" （2）性能的评估模型")]),t._v(" "),_("p",[t._v("对于软件产品的性能优化，根据RAIL性能模型（该模型以用户为原则），可以分为四部分：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("响应（Response）")])]),t._v(" "),_("li",[_("p",[t._v("动画（Animation）")])]),t._v(" "),_("li",[_("p",[t._v("加载（Load）")])]),t._v(" "),_("li",[_("p",[t._v("空闲（Idle）")])])]),t._v(" "),_("p",[t._v("这四部分代表了应用生命周期的四个方面，它们会以不同的方式影响应用的性能。")]),t._v(" "),_("p",[_("strong",[t._v("1）响应")])]),t._v(" "),_("p",[t._v("网站对于响应发面的要求是：**在用户感知延迟之前接收到操作的反馈。**比如，用户进行页面的操作，必须在100ms之内收到反馈，如果超过100ms，用户就会感知到延迟，具体的用户感知的时间窗口如下表所示：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("延迟时间")])]),t._v(" "),_("th",[_("strong",[t._v("用户响应")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0~100ms")]),t._v(" "),_("td",[t._v("在该时间窗口内响应的用户操作，才会是流畅的体验")])]),t._v(" "),_("tr",[_("td",[t._v("100~300ms")]),t._v(" "),_("td",[t._v("用户能感知到轻微的延迟")])]),t._v(" "),_("tr",[_("td",[t._v("300~1000ms")]),t._v(" "),_("td",[t._v("所感知的延迟会被用户当做网站页面加载或更改视图过程的一部分")])]),t._v(" "),_("tr",[_("td",[t._v(">1s")]),t._v(" "),_("td",[t._v("用户的注意力将离开之前正在执行的任务")])]),t._v(" "),_("tr",[_("td",[t._v(">10s")]),t._v(" "),_("td",[t._v("用户感到失望，可能会放弃任务")])])])]),t._v(" "),_("p",[t._v("其实，用户的操作背后可能存在着复杂的业务逻辑处理及网络请求与数据计算。所以，尽量将较大开销的工作放在后台异步执行，而即便后台的处理要数百毫秒才能完成，也应当给用户通过及时的阶段性反馈，比如在用户下载内容时，在页面提供下载进度。")]),t._v(" "),_("p",[_("strong",[t._v("2）动画")])]),t._v(" "),_("p",[t._v("前端所涉及到的动画不仅有炫酷的特效，还包括滚动和触摸拖动等交互效果（说到这里，不得不提一句，Apple官网的动画做的是真的🐂🍺）。对于动画，其性能要求就是流畅。")]),t._v(" "),_("p",[t._v("研究表明，对于动画来说，无论动画帧率多高，人眼仅能分辨其中的30帧，但是高帧率会带来更好的流畅体验，因此动画尽力要达到60fps的帧率。根据60fps的帧率计算，一帧图像的生成预算为10ms（1000ms / 60 ≈ 16.66ms），出去浏览器绘制新帧的时间，留给执行代码的时间仅10ms左右，所以尽量要控制每帧动画的执行时间在10ms以内。")]),t._v(" "),_("p",[_("strong",[t._v("3）空闲")])]),t._v(" "),_("p",[t._v("以用户的角度来看待性能问题时，可以利用空闲时间来处理可延迟的任务，只要让用户感知不到延迟即可，这样可以减少预加载的数据大小，以保证网站或应用快速完成加载。")]),t._v(" "),_("p",[_("strong",[t._v("4）加载")])]),t._v(" "),_("p",[t._v("用户感知要求我们尽量在1s内完成页面的加载，如果没有完成，用户的注意力就会转移到其他事情上，并对当前处理的任务产生断感。当然，这里所指的加载并渲染出页面并非是要完成所有页面资源的加载，从用户感知体验的角度来说，只要关键渲染路径完成，用户就会认为全部加载已完成。对于非关键资源的加载，延迟到浏览器的空闲时间再进行，是比较常见的渐进式优化策略。")]),t._v(" "),_("h3",{attrs:{id:"_3-性能优化的指标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-性能优化的指标"}},[t._v("#")]),t._v(" （3）性能优化的指标")]),t._v(" "),_("p",[t._v("对于性能的优化，我们首先要明确衡量性能的指标。常见的性能衡量指标有两种，分别是"),_("strong",[t._v("感官指标")]),t._v("和"),_("strong",[t._v("Performance API")]),t._v("。")]),t._v(" "),_("p",[_("strong",[t._v("1）感官指标")])]),t._v(" "),_("p",[t._v("一般来说，业界认可的常用感官上的指标有：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("首次绘制（FP）时间")]),t._v("：对于应用页面，用户在视觉上首次出现不同于跳转之前的内容时间点，或者说是页面发生第一次绘制的时间点。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("首次有内容绘制（FCP）时间")]),t._v("：指浏览器完成渲染 DOM 中第一个内容的时间点，可能是文本、图像或者其他任何元素，此时用户应该在视觉上有直观的感受。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("首次有意义绘制（FMP）时间")]),t._v("：指页面关键元素渲染时间。这个概念并没有标准化定义，因为关键元素可以由开发者自行定义——究竟什么是“有意义”的内容，只有开发者或者产品经理自己了解。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("首屏时间")]),t._v("：对于所有网页应用，这是一个非常重要的指标。用大白话来说，就是进入页面之后，应用渲染完整个手机屏幕（未滚动之前）内容的时间。需要注意的是，业界对于这个指标其实同样并没有确切的定论，比如这个时间是否包含手机屏幕内图片的渲染完成时间。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("用户可交互时间")]),t._v("：顾名思义，也就是用户可以与应用进行交互的时间。一般来讲，我们认为是 domready 的时间，因为通常会在这时候绑定事件操作。如果页面中涉及交互的脚本没有下载完成，那么当然没有到达所谓的用户可交互时间。")])])]),t._v(" "),_("p",[_("strong",[t._v("2）Performance API")])]),t._v(" "),_("p",[t._v("提到性能优化指标就不得不说 Performance API，这个 API 是 HTML5 新增的特性。过去要统计脚本的运行时间，可能会使用 Date.getTime() 去获取对应的时间；如果要获取白屏时间是在 head 末尾插入一段获取时间戳的代码，然后用这个时间戳减去开始接收数据的那个时间戳，得出的结果为白屏时间。这样的方法无疑是笨重的，而且获取的时间无法更精确(只能到ms级别)，而且一些后台比较关注的时间根本无法获取。W3C 为了解决这个问题，在 HTML5 推出的时候，新增了这个 API 。")]),t._v(" "),_("p",[t._v("MDN 上对 Performance API 的解释：")]),t._v(" "),_("p",[t._v("Performance 接口可以获取到当前页面中与性能相关的信息。它是 High Resolution Time API 的一部分，同时也融合了 Performance Timeline API、Navigation Timing API、 User Timing API 和 Resource Timing API。该类型的对象可以通过调用只读属性 Window.performance 来获得。")]),t._v(" "),_("p",[t._v("可以在控制台的console面板中通过window.performance来获取网站的各项指标信息，结果如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(811),alt:"img"}})]),t._v(" "),_("p",[t._v("如图所以，performance包括了五个属性，其中"),_("strong",[t._v("timing")]),t._v("是需要重点关注的，timing是一个map数据结构，其中key值是性能优化指标，value值是对应的时间戳。其中这些时间戳与页面整个加载过程中的关键节点是有着一一对应的关系，这里通过谷歌开发者网站的一张图来说明：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(812),alt:"img"}})]),t._v(" "),_("p",[t._v("从图中可以看到很多指标都是成对出现，直接作差就可以求出对应页面加载过程中关键节点的时间，这里介绍几个比较常用的，比如：")]),t._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timingInfo "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TCP连接耗时")]),t._v("\ntimingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectEnd "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectStart\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DNS查询耗时")]),t._v("\ntimingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupEnd "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupStart"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获得首字节耗费时间，也叫TTFB")]),t._v("\ntimingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseStart "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationStart\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// domReady时间(与前面提到的DomContentLoad事件对应)")]),t._v("\ntimingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domContentLoadedEventStart "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigationStart\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM资源下载")]),t._v("\ntimingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseEnd "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timingInfo"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseStart\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br")])]),_("p",[t._v("上述就是比较常用的指标，这些指标也可以在Chrome浏览器的network面板中的Timing下获取：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(813),alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"_4-性能优化的步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-性能优化的步骤"}},[t._v("#")]),t._v(" （4）性能优化的步骤")]),t._v(" "),_("p",[t._v("RAIL性能模型指出了用户对不同延迟时间的感知度，以用户为中心的原则，就是要让用户满意应用的性能体验。")]),t._v(" "),_("p",[t._v("对于不同类型的操作，需要的规定的时间窗口内完成，所进行的性能优化的步骤如下：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("量化的评估出网站的性能表现；")])]),t._v(" "),_("li",[_("p",[t._v("立足于网站页面响应的生命周期，分析出造成较差性能表现的原因；")])]),t._v(" "),_("li",[_("p",[t._v("进行技术改造，可行性分析等具体的优化实施。")])])]),t._v(" "),_("p",[t._v("对于页面的生命周期以及页面性能测量会分别在第2和3部分进行详细介绍。")]),t._v(" "),_("p",[t._v("对于性能优化，具体的思路如下：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("传输资源的优化：比如图像资源，不同的格式类型会有不同的使用场景，在使用过程中判断是否恰当；")])]),t._v(" "),_("li",[_("p",[t._v("加载过程的优化：比如加载延迟，是否有不需要在首屏展示的非关键信息，占用了页面的加载时间；")])]),t._v(" "),_("li",[_("p",[t._v("JavaScript的优化：JavaScript代码是否进行了压缩，书写是否规范，有无考虑内存泄漏等；")])]),t._v(" "),_("li",[_("p",[t._v("关键渲染路径优化：比如是否存在不必要的回流与重绘等；")])]),t._v(" "),_("li",[_("p",[t._v("本地存储和浏览器缓存。")])])]),t._v(" "),_("h2",{attrs:{id:"_2-前端页面的性能检测"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-前端页面的性能检测"}},[t._v("#")]),t._v(" 2. 前端页面的性能检测")]),t._v(" "),_("h3",{attrs:{id:"_1-常见的性能检测工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-常见的性能检测工具"}},[t._v("#")]),t._v(" （1）常见的性能检测工具")]),t._v(" "),_("p",[t._v("常见的性能检测工具有很多，比如Chrome开发者工具中有与性能检测相关的工具面板，页面加载性能分析工具PageSpeed Insights，专业的性能检测工具WEBPAGETEST等。")]),t._v(" "),_("p",[_("strong",[t._v("1）Chrome 任务管理器")])]),t._v(" "),_("p",[t._v("在Chrome浏览器中，可以使用任务管理器查看当前所有进程关于GPU、网络、和内存的使用情况，这些进程包括当前打开的标签页、安装的各种插件以及GPU、网络、渲染等浏览器的默认进程。通过监控这些数据，可以在有异于其他进程的大幅度开销出现时，去定位存在内存泄漏或者网络资源加载异常的问题进程。Chrome任务管理器如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(814),alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("2）Network 面板")])]),t._v(" "),_("p",[t._v("Network面板是Chrome浏览器开发者工具中经常用到的面板，通过它可以查看网站资源的请求情况，包括加载时间、尺寸大小、优先级设置、HTTP缓存触发情况等信息，从而发现网站资源请求中存在的问题。Network面板如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(815),alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("3）Coverage 面板")])]),t._v(" "),_("p",[t._v("Coverage面板可以用来监控并统计出网站应用运行过程中代码执行的覆盖率情况。该面板统计的对象时JavaScript脚本文件与CSS样式表文件。统计结果主要包括：每个文件的字节大小、执行过程中已覆盖的代码字节数，以及可视化的覆盖率条形图。代码覆盖率低就意味着该代码文件存在着较多没有用到的代码，开发者可以根据这个结果对代码进行拆分，在需要的时候在进行加载。Coverage面板如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(816),alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("4）Memory 面板")])]),t._v(" "),_("p",[t._v("Memory面板可以快速生成当前文件的堆内存快照，或者查看内存随时间的变化情况，据此可以查看并发现可能出现的内存泄漏等情况。Memory面板如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(817),alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("5）PageSpeed Insights")])]),t._v(" "),_("p",[t._v("这是Google官方推出的用于性能检测网页加载性能的自动化工具，在该工具中，可以直接输入页面的URL来分析页面的性能，需要注意的是该结果是根据Lighthouse分析的实验数据得出的。官网链接："),_("a",{attrs:{href:"https://developers.google.cn/speed/pagespeed/insights/",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("PageSpeed Insights")]),_("OutboundLink")],1),t._v("。以语雀的文章为例进行测试：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(818),alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("6）WEBPAGETEST")])]),t._v(" "),_("p",[t._v("WEBPAGETEST是一个专业的Web页面性能分析工具，它可以对检测分析的环境配置进行自定义化，内容包括测试节点的物理位置、设备型号、浏览器版本、网络条件和检测次数等。除此之外，它还提供了网站应用与竞品之间的性能比较，以及查看网络路由情况等多种情况下的测试工具。官网链接："),_("a",{attrs:{href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[t._v("WEBPAGETEST")]),_("OutboundLink")],1),t._v("**。**以语雀主页为例进行测试：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(819),alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"_2-performance"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-performance"}},[t._v("#")]),t._v(" （2）Performance")]),t._v(" "),_("p",[t._v("Performance面板主要是对网站应用的运行时性能表现进行检测与分析，其可以检测的内容包括：页面的每秒帧数（FPS）、CPU的使用情况、各种请求的时间花费、网络任务的执行情况。")]),t._v(" "),_("p",[t._v("Performance面板可以在Chrome开发中工具中打开，"),_("strong",[t._v("建议在无痕模式下使用该工具")]),t._v("，因为该模式下网页不会受到缓存或其他插件程序等因素的影响：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(820),alt:"img"}})]),t._v(" "),_("p",[t._v("可以看到，上图Performance面板中间提示了如何开始使用这个面板，点击左上角最左侧的黑色圆就可以开始一个新的监测记录，点击刷新按钮可以记录整个刷新过程中的监测记录，还可以点击右侧按钮来删除检测记录。")]),t._v(" "),_("p",[t._v("点击刷新按钮，网站首页的性能结果如下，其包含的信息可以分为四大类：控制面板、概览面板、线程面板、统计面板：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(821),alt:"img"}})]),t._v(" "),_("p",[_("strong",[t._v("1）控制面板")])]),t._v(" "),_("p",[t._v("控制面板中有五个选择项和两个下拉框，它们的含义如下：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Screenshots：表示是否截取每一帧的屏幕截图，默认会勾选，并且在概览面板中展示随时间变化的截屏动画，如果取消勾选，则不会这哪是这部分内容；")])]),t._v(" "),_("li",[_("p",[t._v("Memory：表示是否记录内存消耗，默认不会候选，如果勾选则会在线层面板与统计面板之间展示出各种类型资源的内存消耗曲线；")])]),t._v(" "),_("li",[_("p",[t._v("Web Vitals：是谷歌针对网页加载速度和体验所提出的一套指标，这套指标用于测试网页的加载速度及用户体验等，这里不做详细说明；")])]),t._v(" "),_("li",[_("p",[t._v("Disable javaScript samples：如果需要模拟手机端的运行环境时则需要勾选，它表示关闭JavaScript样本，减少在手机端运行时的开销；")])]),t._v(" "),_("li",[_("p",[t._v("Enable advanced paint instrucmentation（slow）：表示是否开启加速渲染工具，用来记录渲染事件的相关细节，该功能比较消耗性能，开启后重新生成检测报告的速度会变慢。")])]),t._v(" "),_("li",[_("p",[t._v("Network：在性能检测时，用以切换模拟网络环境，可以模拟弱网(2g/3g)条件下网站的一些表现情况，然后根据弱网的具体表现进行相关优化。；")])]),t._v(" "),_("li",[_("p",[t._v("CPU：限制CPU的处理速度，主要用于模拟低俗CPU运行时的性能。")])])]),t._v(" "),_("p",[_("strong",[t._v("2）概览面板")])]),t._v(" "),_("p",[t._v("在概览面板中，可以选择一个起始时间点，然后拖动鼠标左键来滑动选择面板中国的局部范围，来进行更小范围的性能观察。这部分的性能信息主要包括以下三个指标：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("FPS：衡量动画是否流畅的重要指标。当绿色柱状图较高时，就代表FPS帧率很高，体验也就越流畅，如果FPS帧率较低，就会是红色的横条，表明帧率较低，影响用户体验，这里图中并没有出现红色，说明网页的整个体验还是非常流畅的。这里特别说明一下不管是游戏还是网页，都是帧率越高，体验越好。")])]),t._v(" "),_("li",[_("p",[t._v("CPU：展示CPU的使用情况。这个指标和下面的Sumarry指标是一一对应，而且这里它们的颜色所代表含义也是相同的，每个颜色代表各个过程所耗费的时间。从图中可以看到，整个加载过程中，白色部分(ldle)占比是最大的，这里代表的是空闲性能，第二大占比的橙色对应的是脚本加载时间，所以要想更快可以试着从加快脚本加载速度方面去优化。")])]),t._v(" "),_("li",[_("p",[t._v("NET：展示各个请求所花费的具体时间，这里看不太清，可以直接去 Network 面板当中去具体观察各个请求所花费的时间，然后针对具体的请求具体分析。")])])]),t._v(" "),_("p",[_("strong",[t._v("3）线程面板")])]),t._v(" "),_("p",[t._v("线程面板就是主线程执行过程中的火焰图，主线程在解析HTML和CSS、页面绘制及执行JavaScript的过程中，每个事件调用栈和耗时情况都会反应在这个图中。其中每一个长条都代表一个事件，将鼠标悬浮至其上面时，就可以查看到相应的时间的执行耗时与事件名。")]),t._v(" "),_("p",[t._v("在面板下方，可以看到非常重要的一个指标："),_("strong",[t._v("Main")]),t._v("，它代表主线程，如下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(822),alt:"img"}})]),t._v(" "),_("p",[t._v("图中不同颜色表示不同的事件类型。横轴代表时间，纵轴代表具体的调用堆栈。调用堆栈就像是浏览器当中的解释器，可以利用它追踪函数的执行流。当浏览器中调用了多个函数，通过这种机制可以追踪到哪个函数正在执行，具体函数体中又调用了哪个函数。")]),t._v(" "),_("p",[t._v("常见的事件类型有：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("HTML解析；")])]),t._v(" "),_("li",[_("p",[t._v("JavaScript事件；")])]),t._v(" "),_("li",[_("p",[t._v("页面布局更改；")])]),t._v(" "),_("li",[_("p",[t._v("元素样式重新计算；")])]),t._v(" "),_("li",[_("p",[t._v("页面涂层的绘制。")])])]),t._v(" "),_("p",[_("strong",[t._v("4）统计面板")])]),t._v(" "),_("p",[t._v("统计面板会根据在概念面板中选择时间区域的不同，绘制出不同类型任务执行耗时的可视化图标，这里点击线程面板中的一个矩形，如下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(823),alt:"img"}})]),t._v(" "),_("p",[t._v("点击之后看到这个事件下对应的一些具体信息，这里还可以点击Range右侧链接，点击之后会直接跳到sources面板对应的代码位置，这个功能方便了定位代码：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(824),alt:"img"}})]),t._v(" "),_("p",[t._v("统计面板中包含四个Tab，其含义如下：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Summary：展示各类任务事件耗时环形图；")])]),t._v(" "),_("li",[_("p",[t._v("Bottom-Up：查看各个事件耗时的排序列表，列表包含两个维度：去除子事件后该事件本身的耗时和包含子事件从开始到结束的总耗时；")])]),t._v(" "),_("li",[_("p",[t._v("Call Tree：查看全部或指定火焰图中某个事件的调用栈；")])]),t._v(" "),_("li",[_("p",[t._v("Event Log：查看关于每个事件详细的日志。")])])]),t._v(" "),_("h3",{attrs:{id:"_3-lighthouse"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-lighthouse"}},[t._v("#")]),t._v(" （3）LightHouse")]),t._v(" "),_("p",[t._v("Lighthouse是一款用于改进网站应用质量的开源自动化检测工具。只要为 Lighthouse 提供一个需要审查的网址，它将针对此页面运行一连串的测试，然后生成一个有关页面性能的报告，其内容包括：性能检测、可访问性检测、SEO检测、是否符合PWA的检测、其他是否符合最佳实践的检测。 检测报告不仅涉及上面这些方面的现状分析，同时还提供了一些优化指导建议，方便开发者快速发现潜在的性能瓶颈并实施优化改进。")]),t._v(" "),_("p",[_("strong",[t._v("LightHouse的优点：")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("评分报告全面且具有一定的权威性;")])]),t._v(" "),_("li",[_("p",[t._v("提供解决方案;")])]),t._v(" "),_("li",[_("p",[t._v("发现大的性能问题。")])])]),t._v(" "),_("p",[_("strong",[t._v("LightHouse的****缺点：")])]),t._v(" "),_("ul",[_("li",[t._v("测试环境较单一，用户群体的环境各有不同；")]),t._v(" "),_("li",[t._v("存在波动，不同时刻的访客群体存在差异，数据只能反应当前时刻的效果。")])]),t._v(" "),_("p",[t._v("Lighthouse的使用方式有三种：Chrome扩展程序、Chrome开发者工具面板、Node.js命令行。")]),t._v(" "),_("p",[t._v("这里主要介绍其在Chrome控制面板中的使用。在新版的Chrome浏览器中，将LightHouse集成在了开发者工具中，打开控制台，切换到LightHouse面板，如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(825),alt:"img"}})]),t._v(" "),_("p",[t._v("**1）**"),_("strong",[t._v("检测得分")])]),t._v(" "),_("p",[t._v("点击中间的Generate report按钮就可以开始自动分析，LightHouse就会自动帮我们生成性能优化报告，如下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(826),alt:"img"}})]),t._v(" "),_("p",[t._v("可以看到报告详细给出了各种情况下的分数情况，从左到右分别是Performance(页面性能)、Accessibility(可访性)、Best Practise(最佳实践)、SEO(搜索引擎优化)、Progressive Web App(渐进式应用)。点击其中的每一项都可以看到给出的具体优化建议。")]),t._v(" "),_("p",[_("strong",[t._v("2）页面性能")])]),t._v(" "),_("p",[t._v("对于这个测试结果，有六个性能指标，如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(827),alt:"img"}})]),t._v(" "),_("p",[t._v("性能评估主要包含6个指标：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("首次有内容绘制时间（"),_("strong",[t._v("FCP")]),t._v("，First Contentful Paint）：用于记录页面首次绘制文本、图片、非空白 Canvas 或 SVG 的时间。")])]),t._v(" "),_("li",[_("p",[t._v("最大内容绘制时间（"),_("strong",[t._v("LCP")]),t._v("，Largest Contentful Paint）：用于记录视窗内最大的元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变，另外该指标会在用户第一次交互后停止记录。")])]),t._v(" "),_("li",[_("p",[t._v("速度指数（Speed Index）: 指的是网页以多快的速度展示内容，标准时间是"),_("strong",[t._v("4s")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("阻塞交互时间（"),_("strong",[t._v("TBT")]),t._v(", Total Blocking Time）：用户体验指标，代表着页面何时真正进入可用的状态。毕竟光内容渲染的快也不够，还要能迅速响应用户的交互。")])]),t._v(" "),_("li",[_("p",[t._v("用户可交互时间（"),_("strong",[t._v("TTI")]),t._v(", Time to Interactive）：这个指标并不是指的最早的可交互时间，而是可流畅交互的时间，具体的值为FMP之后，5秒后没有long task执行（50ms以上的任务）的时间")])]),t._v(" "),_("li",[_("p",[t._v("累计布局偏移（"),_("strong",[t._v("CLS")]),t._v(", Cumulative Layout Shift）：记录了页面上非预期的位移波动。")])])]),t._v(" "),_("p",[t._v("评估之后，LightHouse会给出一些优化建议，如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(828),alt:"img"}})]),t._v(" "),_("p",[t._v("可以看到共给出了四条优化建议，分别是移除未使用的js文件、消除阻塞渲染的资源、移除未使用用的CSS文件、预连接到所要请求的源。点开每一条建议，就可以看到详细的操作说明。")]),t._v(" "),_("p",[_("strong",[t._v("3）可访问性")])]),t._v(" "),_("p",[t._v("这部分关于网站可访问性的审核项，在网站优化中可参考进行改善，但并非一定要遵从，如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(829),alt:"img"}})]),t._v(" "),_("p",[t._v("在上面的结果中，提出了一些可访问性方面的问题，我们可以根据这些问题进行修改，比如：")]),t._v(" "),_("ul",[_("li",[t._v("按钮没有可访问的名称，依赖屏幕阅读器的用户就无法使用它；")]),t._v(" "),_("li",[t._v("图片中没有使用alt属性，当图片资源请求失败时，如果有alt属性，就可以让用户知道该图片的信息。")])]),t._v(" "),_("p",[_("strong",[t._v("4）最佳实践")])]),t._v(" "),_("p",[t._v("这部分内容的审核属于网站开发的最佳实践，建议开发者尽量遵从，最佳实践的审核项如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(830),alt:"img"}})]),t._v(" "),_("p",[t._v("从上图中，可以看到对最佳实践的建议：")]),t._v(" "),_("ul",[_("li",[t._v('跨域链接是不安全的，在外部链接中增加rel="noopener" 或者 rel="noreferrer"来改善性能和防范安全漏洞；')]),t._v(" "),_("li",[t._v("图片纵横比不正确的图像，它告诉我们图像显示尺寸应符合自然纵横比；")])]),t._v(" "),_("p",[_("strong",[t._v("5）搜索引擎优化")])]),t._v(" "),_("p",[t._v("对于这部分内容，如果符合审核项的要求，将会大大提高网站被搜索引擎搜索到的概率。优化建议如图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:v(831),alt:"img"}})]),t._v(" "),_("p",[t._v("从上图中，可以看到两个问题：")]),t._v(" "),_("ul",[_("li",[t._v("如果搜索引擎没有对页面进行爬网的权限，则无法将您的页面包含在搜索结果中，这里设置了反爬；")]),t._v(" "),_("li",[t._v("图片标签没有设置alt属性，希望能够添加，增加图片被索引的概率。")])]),t._v(" "),_("p",[t._v("根据每部分给出的评测结果以及优化建议，开发者就可以针对性的对网站页面进行优化。")]),t._v(" "),_("h3",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=a.exports},811:function(t,s,v){t.exports=v.p+"assets/img/1612689830448-39224d75-60ea-48fc-b30a-5e2a5920b925.30f4f91e.png"},812:function(t,s,v){t.exports=v.p+"assets/img/1612689872880-afa18100-2b20-4098-9027-784daa86b6e4.1e921370.jpeg"},813:function(t,s,v){t.exports=v.p+"assets/img/1612690140669-cdd92157-7df8-4b6f-9cfc-0058954ec3ec.f86cbd94.png"},814:function(t,s,v){t.exports=v.p+"assets/img/1623336501145-a734c51f-286b-4ef9-aefa-b8fdb4ca37f7.4c42bb83.png"},815:function(t,s,v){t.exports=v.p+"assets/img/1623336452665-7b76a397-2f16-4dfa-9611-667572fd9e8c.713a0047.png"},816:function(t,s,v){t.exports=v.p+"assets/img/1623336935760-2a79f80a-c7c6-4dd6-b48e-03b6b3d6af0c.d949edfd.png"},817:function(t,s,v){t.exports=v.p+"assets/img/1623337573805-dae849a4-1540-45d8-9946-e16a896c290c.13bef672.png"},818:function(t,s,v){t.exports=v.p+"assets/img/1623338538518-46a4d638-b3a0-42d7-96aa-2dfe1a5ce431.84a23b1e.png"},819:function(t,s,v){t.exports=v.p+"assets/img/1623338932305-0c4fd1aa-3f84-4d2f-afa2-6b685a543710.84925013.png"},820:function(t,s,v){t.exports=v.p+"assets/img/1612692405659-26c2f107-4056-4f55-b355-8ca7321f4995.bc4147b4.png"},821:function(t,s,v){t.exports=v.p+"assets/img/1623340289404-c389e4fb-596c-4822-8a58-f75749a81d2c.ee08d917.png"},822:function(t,s,v){t.exports=v.p+"assets/img/1612693037957-2caf5f6e-fc9a-41d2-9e9f-518067d76727.6c04c2a2.png"},823:function(t,s,v){t.exports=v.p+"assets/img/1612693096819-c3fdd2e5-3490-4661-bffb-bb7d285bfb87.43b310c2.png"},824:function(t,s,v){t.exports=v.p+"assets/img/1612693150275-bbf7b356-0537-4a85-8630-96eba868dbfa.8e23f517.png"},825:function(t,s,v){t.exports=v.p+"assets/img/1612693590790-e97b2c82-f5f0-4c5d-8b7d-ead494f5ef71.a4f70370.png"},826:function(t,s,v){t.exports=v.p+"assets/img/1623411008468-78d1ca34-90d3-4708-9c77-4db99fd61fa6.aa091cdd.png"},827:function(t,s,v){t.exports=v.p+"assets/img/1623411180958-a7a9c251-50c8-4831-aeb7-1e42170ec26b.8344c80c.png"},828:function(t,s,v){t.exports=v.p+"assets/img/1623412023325-0aba79f6-3b3d-4228-8341-6041f84ebd21.9d42d6ce.png"},829:function(t,s,v){t.exports=v.p+"assets/img/1623412768641-90aa49e6-2f7d-4c17-b127-61961b4ecfe6.0e61439a.png"},830:function(t,s,v){t.exports=v.p+"assets/img/1623413279272-aa84cb50-9bfd-4ece-8e7f-63e688be4d1f.03ef85ac.png"},831:function(t,s,v){t.exports=v.p+"assets/img/1623413884518-95ead400-24ff-4ce5-af04-2b9f54e3a547.c948cd38.png"}}]);