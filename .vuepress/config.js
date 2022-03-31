module.exports = {
  "title": " ",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
   
    nav: [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "前端",
        "icon": "reco-category",
        "items": [
          {
            "text": "前端基础",
            "link": "/docs/accumulate/javascript/basicsGrammar"
          },{
            "text": "前端进阶",
            "link": "/docs/advanced/guide/scss"
          }
        ]
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Koa",
        "link": "/docs/koa/koarapid/rapid",
        "icon": "reco-date"
      },
 
      {
        "text": "我的",
        "icon": "reco-account",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      '/docs/accumulate/': [
        {
            title: "JavaScript",
            collapsable: true,
            sidebarDepth: 3,
            children: [{
                title: "一、JavaScript基础语法",
                collapsable: true,
                path: "javascript/basicsGrammar"
            },
            {
                title: "二、分支结构（if/switch）",
                collapsable: true,
                path: "javascript/ifSWitch"
            },
            {
                title: "三、循环结构（for/while）",
                collapsable: true,
                path: "javascript/forWhile"
            },
            {
                title: "四、函数基础",
                collapsable: true,
                path: "javascript/function"
            },
            {
                title: "五、函数进阶（作用域）",
                collapsable: true,
                path: "javascript/actionScope"
            },
            {
                title: "六、递归函数",
                collapsable: true,
                path: "javascript/recursion"
            },
            {
                title: "七、数组",
                collapsable: true,
                path: "javascript/array"
            },
            {
                title: "八、数组的排序",
                collapsable: true,
                path: "javascript/arraySort"

            },
            {
                title: "九、ES5中常见的数组方法",
                collapsable: true,
                path: "javascript/arrayFunction"
            },
            {
                title: "十、字符串",
                collapsable: true,
                path: "javascript/string"
            },

            {
                title: "十一、Math 和 Date",
                collapsable: true,
                path: "javascript/math"
            },
            {
                title: "十二、BOM",
                collapsable: true,
                path: "javascript/bom"
            },
            {
                title: "十三、DOM （上，操作属性）",
                collapsable: true,
                path: "javascript/domOne"
            }, {
                title: "十四、DOM（下，节点）",
                collapsable: true,
                path: "javascript/domTwo"
            },
            {
                title: "十五、Event事件（上）",
                collapsable: true,
                path: "javascript/eventOne"
            },
            {
                title: "十六、Event事件（下）",
                collapsable: true,
                path: "javascript/eventTwo"
            },

            {
                title: "十七、正则",
                collapsable: true,
                path: "javascript/regular"
            },
            {
                title: "十八、ES5",
                collapsable: true,
                path: "javascript/es5"
            },
            {
                title: "十九、ES6",
                collapsable: true,
                path: "javascript/es6"
            },
            {
                title: "二十、DOM动画效果",
                collapsable: true,
                path: "javascript/domAnimation"
            },
            {
                title: "二十一、构造函数",
                collapsable: true,
                path: "javascript/constructor"
            },
            {
                title: "二十二、原型及原型链",
                collapsable: true,
                path: "javascript/prototype"
            },
            {
                title: "二十三、服务器PHP",
                collapsable: true,
                path: "javascript/php"
            },

            {
                title: "二十四、MYSQL基础操作",
                collapsable: true,
                path: "javascript/mysql"
            },
            {
                title: "二十五、HTTP",
                collapsable: true,
                path: "javascript/http"
            },
            {
                title: "二十六、cookie",
                collapsable: true,
                path: "javascript/cookie"
            },
            {
                title: "二十七、ajax及ajax封装",
                collapsable: true,
                path: "javascript/ajax"
            },
            {
                title: "二十八、Promise（回调函数）",
                collapsable: true,
                path: "javascript/promise"
            },
            {
                title: "二十九、闭包和继承",
                collapsable: true,
                path: "javascript/closure"
            },
            {
                title: "三十、设计模式",
                collapsable: true,
                path: "javascript/design"
            },
            {
                title: "三十一、Jquery（上）",
                collapsable: true,
                path: "javascript/jqueryOne"
            },
            {
                title: "三十二、Jquery（中）",
                collapsable: true,
                path: "javascript/jqueryTwo"
            },
            {
                title: "三十三、jquery（下/ajax）",
                collapsable: true,
                path: "javascript/jqueryTherr"
            },
            {
                title: "三十四、Node",
                collapsable: true,
                path: "javascript/node"
            },
            {
                title: "三十五、SASS",
                collapsable: true,
                path: "javascript/sass"
            },
            {
                title: "三十六、GULP",
                collapsable: true,
                path: "javascript/gulp"
            },
            {
                title: "三十七、GIT和GITHUB",
                collapsable: true,
                path: "javascript/git"
            },
            {
                title: "三十八、node（一）",
                collapsable: true,
                path: "javascript/nodeOne"
            },
            {
                title: "三十九、node（二）",
                collapsable: true,
                path: "javascript/nodeTwo"
            },
            {
                title: "四十、node（三）",
                collapsable: true,
                path: "javascript/nodeThree"
            },
            {
                title: "四十一、node（四）",
                collapsable: true,
                path: "javascript/nodeFour"
            },
            {
                title: "四十二、node（五）",
                collapsable: true,
                path: "javascript/nodeFive"
            }



            ]

        }
    ],

    '/docs/advanced/': [
      {
          title: "HTML+CSS",
          children: [
              {
                  title: "SCSS",
                  collapsable: true,
                  path: 'guide/scss'
              }, {
                  title: "Flex布局",
                  collapsable: true,
                  path: 'guide/flex'
              }, {
                  title: "Grid布局",
                  collapsable: true,
                  path: 'guide/grid'
              },
              {
                  title: "响应式布局",
                  collapsable: true,
                  path: 'guide/reactive'
              }, {
                  title: "HTML知识进阶",
                  collapsable: true,
                  path: 'guide/htmlMove'
              }

          ]
      },
      {
          title: "JavaScript",
          children: [
              {
                  title: '正则表达式', collapsable: true,
                  path: 'javaScript/regular'
              }, {
                  title: '深入理解this', collapsable: true,
                  path: 'javaScript/this'
              },
              {
                  title: '深入理解闭包', collapsable: true,
                  path: 'javaScript/closure'
              },
              {
                  title: '重学JavaScript', collapsable: true,
                  path: 'javaScript/severe'
              },
              {
                  title: '深入理解数据类型', collapsable: true,
                  path: 'javaScript/dataType'
              },
              {
                  title: '深入理解面向对象', collapsable: true,
                  path: 'javaScript/objectOriented'
              },
              {
                  title: '深入理解DOM操作', collapsable: true,
                  path: 'javaScript/dom'
              },
              {
                  title: '深入理解BOM操作', collapsable: true,
                  path: 'javaScript/bom'
              },
              {
                  title: '如何实现一个深浅拷贝', collapsable: true,
                  path: 'javaScript/depthCopy'
              },
              {
                  title: '深入理解Javascript数组', collapsable: true,
                  path: 'javaScript/array'
              },
              {
                  title: '深入理解JavaScript面向对象', collapsable: true,
                  path: 'javaScript/object'
              },
              {
                  title: '细数JavaScript中的遍历方法', collapsable: true,
                  path: 'javaScript/traverse'
              },
              {
                  title: 'JavaScript变量提升', collapsable: true,
                  path: 'javaScript/promote'
              },
              {
                  title: 'JavaScript编译原理', collapsable: true,
                  path: 'javaScript/compile'
              },
              {
                  title: 'JavaScript异步编程', collapsable: true,
                  path: 'javaScript/practise'
              },
              {
                  title: 'JavaScript异步编程之Promise', collapsable: true,
                  path: 'javaScript/promise'
              },
              {
                  title: 'JavaScript异步编程Async/Await', collapsable: true,
                  path: 'javaScript/async'
              },
              {
                  title: 'JavaScript中“函数式第一等公民”', collapsable: true,
                  path: 'javaScript/function'
              },
              {
                  title: '如何实现new、apply、call、bind的底层逻辑', collapsable: true,
                  path: 'javaScript/ground'
              }
          ]
      },
      {
          title: "Vue",
          children: [
              {
                  title: '生命周期', collapsable: true,
                  path: 'vue/period'
              },
              {
                  title: '组件通信', collapsable: true,
                  path: 'vue/communication'
              },
              {
                  title: '虚拟DOM', collapsable: true,
                  path: 'vue/dom'
              },
              {
                  title: 'MVC、MVP、MVVM', collapsable: true,
                  path: 'vue/mvc'
              },
          ]
      },
      {
          title: "React",
          children: [
              {
                  title: 'React基本入门', collapsable: true,
                  path: 'react/introduction'
              },
              {
                  title: 'React组件实践', collapsable: true,
                  path: 'react/practice'
              },
              {
                  title: 'React组件化开发', collapsable: true,
                  path: 'react/combination'
              },
              {
                  title: 'React生命周期', collapsable: true,
                  path: 'react/period'
              },
              {
                  title: 'React组件通信', collapsable: true,
                  path: 'react/communication'
              },
              {
                  title: 'React路由', collapsable: true,
                  path: 'react/route'
              },
              {
                  title: 'React服务端渲染', collapsable: true,
                  path: 'react/apply'
              },
              {
                  title: 'React SEO 优化', collapsable: true,
                  path: 'react/seo'
              },
              {
                  title: 'Redux', collapsable: true,
                  path: 'react/redux'
              },
              {
                  title: 'React高阶HOC', collapsable: true,
                  path: 'react/hoc'
              },
              {
                  title: 'React setState 数据更新机制', collapsable: true,
                  path: 'react/setState'
              },
              {
                  title: 'React Virtual DOM', collapsable: true,
                  path: 'react/Vittual'
              },
              {
                  title: 'React diff 算法', collapsable: true,
                  path: 'react/diff'
              },

              {
                  title: 'React Fiber架构', collapsable: true,
                  path: 'react/fiber'
              },
              {
                  title: 'React 纯函数组件', collapsable: true,
                  path: 'react/pureFunction'
              },
              {
                  title: 'React Hooks', collapsable: true,
                  path: 'react/hooks'
              },
              {
                  title: 'React Portals', collapsable: true,
                  path: 'react/portals'
              },
              {
                  title: 'React Suspense', collapsable: true,
                  path: 'react/suspense'
              },
              {
                  title: 'React 国际化', collapsable: true,
                  path: 'react/internationalization'
              },
              {
                  title: 'React 组件设计模式', collapsable: true,
                  path: 'react/design'
              },
              {
                  title: 'React 生态', collapsable: true,
                  path: 'react/zoology'
              },
              {
                  title: 'React 渲染流程', collapsable: true,
                  path: 'react/flow'
              },
              {
                  title: 'React 性能优化', collapsable: true,
                  path: 'react/performance'
              },
          ]
      },
      {
          title: "TypeScript",
          children: [
              {
                  title: 'TypeScript基本入门', collapsable: true,
                  path: 'typeScript/introduction'
              },
              {
                  title: 'TypeScript数据类型', collapsable: true,
                  path: 'typeScript/type'
              },
              {
                  title: 'TypeScript接口使用', collapsable: true,
                  path: 'typeScript/port'
              },
              {
                  title: 'TypeScript函数类型', collapsable: true,
                  path: 'typeScript/functionType'
              },
              {
                  title: 'TypeScript泛型使用', collapsable: true,
                  path: 'typeScript/genericity'
              },
              {
                  title: 'TypeScript中的类', collapsable: true,
                  path: 'typeScript/class'
              },
              {
                  title: 'TypeScript类型断言、类型保护、类型判断', collapsable: true,
                  path: 'typeScript/assert'
              },
              {
                  title: 'TypeScript类型兼容性', collapsable: true,
                  path: 'typeScript/compatibility'
              },
              {
                  title: 'TypeScript高级类型', collapsable: true,
                  path: 'typeScript/advancedType'
              },
              {
                  title: 'TypeScript装饰器', collapsable: true,
                  path: 'typeScript/decorator'
              },
              {
                  title: 'TypeScript模块化', collapsable: true,
                  path: 'typeScript/modularization'
              },
              {
                  title: 'TypeScript声明合并和混入', collapsable: true,
                  path: 'typeScript/statement'
              },
              {
                  title: 'TypeScript书写声明文件', collapsable: true,
                  path: 'typeScript/write'
              },
              {
                  title: 'TypeScript封装Axios', collapsable: true,
                  path: 'typeScript/axios'
              },
              {
                  title: 'Promise及语法糖async和await', collapsable: true,
                  path: 'typeScript/promise'
              },
              {
                  title: 'TypeScript与React实战', collapsable: true,
                  path: 'typeScript/react'
              },

              {
                  title: 'TSLint 配置', collapsable: true,
                  path: 'typeScript/tslint'
              },
              {
                  title: 'ESlint配置', collapsable: true,
                  path: 'typeScript/eslint'
              },

          ]
      },
      {
          title: "Node.js",
          path: '',
          children: [{
              title: "Node.js事件循环原理", collapsable: true,
              path: 'node/node'
          }]
      },
      {
          title: "前端业务",
          path: '',
          children: [{
              title: "前端登录详解", collapsable: true,
              path: 'business/explain'
          }, {
              title: "在Vue项目中使用React组件，在React项目中使用Vue组件", collapsable: true,
              path: 'business/vueReact'
          }]
      },
      {
          title: "前端工程化",
          children: [
              {
                  title: "常见的编程方式", collapsable: true,
                  path: "through/programmeWay"
              },
              {
                  title: "前端模块化规范",collapsable: true,
                  path: "through/normalize"
              },
              {
                  title: "前端发展和演进史",collapsable: true,
                  path: "through/develop"
              },
              {
                  title: "npm和yarn的包管理机制",collapsable: true,
                  path: "through/npmYarn"
              },
              {
                  title: "Webpack",collapsable: true,
                  path: "through/webpack"
              },
              {
                  title: "Git",collapsable: true,
                  path: "through/git"
              }
          ]
      },
      {
          title: "前端可视化",
          children: [
              {
                  title: "Echarts基础配置",
                  collapsable: true,
                  path: 'visual/basics'
              }
          ]
      },
      {
          title: "计算机网络",
          children: [
              {
                  title: "DNS",
                  collapsable: true,
                  path: 'network/dns'
              },
              {
                  title: "网络模型",
                  collapsable: true,
                  path: 'network/model'
              }, {
                  title: "TCP与UDP",
                  collapsable: true,
                  path: 'network/tcp'
              },
              {
                  title: "Websocket",
                  collapsable: true,
                  path: 'network/websocket'
              },
              {
                  title: "HTTP概述",
                  collapsable: true,
                  path: 'network/hpHit'
              }, {
                  title: "HTTPS概述",
                  collapsable: true,
                  path: 'network/hpsHit'
              },
              {
                  title: "HTTP状态码",
                  collapsable: true,
                  path: 'network/status'
              },
          ]
      },
      {
          title: "前端设计模式",
          path: '',
          children: [
              {
                  title: "前端设计模式",
                  collapsable: true,
                  path: 'design/design'
              },
              {
                  title: "单列模式",
                  collapsable: true,
                  path: 'design/singleRow'
              },
              {
                  title: "工厂模式",
                  collapsable: true,
                  path: 'design/plant'
              },
              {
                  title: "状态模式",
                  collapsable: true,
                  path: 'design/status'
              },
              {
                  title: "策略模式",
                  collapsable: true,
                  path: 'design/strategy'
              },
              {
                  title: "代理模式",
                  collapsable: true,
                  path: 'design/agency'
              },
              {
                  title: "装饰器模式",
                  collapsable: true,
                  path: 'design/decorator'
              },
              {
                  title: "适配器模式",
                  collapsable: true,
                  path: 'design/adapter'
              },
              {
                  title: "迭代器模式",
                  collapsable: true,
                  path: 'design/iterator'
              },
              {
                  title: "观察者模式/发布-订阅模式",
                  collapsable: true,
                  path: 'design/observer'
              }
          ]
      }, {
          title: "浏览器工作原理",
          children: [
              {
                  title: "前端安全",
                  collapsable: true,
                  path: "browserWork/safe"
              },
              {
                  title: "进程与线程",
                  collapsable: true,
                  path: "browserWork/course"
              },
              {
                  title: "浏览器事件机制",
                  collapsable: true,
                  path: "browserWork/mechanism"
              },
              {
                  title: "同源策略与跨域",
                  collapsable: true,
                  path: "browserWork/crossDomain"
              },
              {
                  title: "浏览器渲染原理",
                  collapsable: true,
                  path: "browserWork/apply"
              },
              {
                  title: "浏览器垃圾回收机制",
                  collapsable: true,
                  path: "browserWork/rubbish"
              },
              {
                  title: "Chrome DevTools调试指南",
                  collapsable: true,
                  path: "browserWork/devTools"
              }
          ]
      }, {
          title: "前端性能优化",
          path: '',
          children: [
              {
                  title: "前端性能优化|什么是性能优化",
                  collapsable: true,
                  path: "property/property"
              }, {
                  title: "前端性能优化|图像优化",
                  collapsable: true,
                  path: "property/picture"
              }, {
                title: "前端性能优化|加载优化",
                collapsable: true,
                path: "property/loadmore"
            }, 
            {
                title: "前端性能优化|渲染优化",
                collapsable: true,
                path: "property/apply"
            } , {
                title: "前端性能优化|数据储存",
                collapsable: true,
                path: "property/database"
            }
          ,{
                title: "前端性能优化|缓存优化",
                collapsable: true,
                path: "property/cache"
            }, {
                title: "前端性能优化|构建优化",
                collapsable: true,
                path: "property/structure"
            }, {
                title: "前端性能优化|书写代码",
                collapsable: true,
                path: "property/makeout"
            }, {
                title: "前端性能优化|雅虎35条军规",
                collapsable: true,
                path: "property/military"
            }
          ]
      }
  ],
  '/docs/koa/': [
    {
        title: "1. Koa快速开始",
        children: [
            {
                title: "1.1 快速开始",
                collapsable: true,
                path: "koarapid/rapid"
            },
            {
                title: "1.2 async/await",
                collapsable: true,
                path: "koarapid/async"
            },
            {
                title: "1.3 koa2简析结构",
                collapsable: true,
                path: "koarapid/structure"
            },
            {
                title: "1.4 koa中间件开发与使用",
                collapsable: true,
                path: "koarapid/exploit"
            }
        ]
    },
    {
        title: "2. 路由",
        children: [
            {
                title: "2.1 原生koa2实现路由",
                collapsable: true,
                path: "router/protogenesis"
            },
            {
                title: "2.2 koa-router中间件",
                collapsable: true,
                path: "router/koarouter"
            },
        ]
    },
    {
        title: "3. 请求数据获取",
        children: [
            {
                title: "3.1 GET请求数据获取",
                collapsable: true,
                path: "database/get"
            },
            {
                title: "3.2 POST请求数据获取",
                collapsable: true,
                path: "database/post"
            },
            {
                title: "3.3 koa-bodyparse中间件",
                collapsable: true,
                path: "database/bodyparse"
            },
        ]
    },
    {
        title: "4. 静态资源加载",
        children: [
            {
                title: "4.1 原生koa2实现静态资源服务器",
                collapsable: true,
                path: "static/koaserver"
            },
            {
                title: "4.2 koa-static中间件",
                collapsable: true,
                path: "static/koastatic"
            }
        ]
    },
    {
        title: "5. cookie/session",
        children: [
            {
                title: "5.1 koa2使用cookie",
                collapsable: true,
                path: "cookie/koacookie"
            },
            {
                title: "5.2 koa2使用session",
                collapsable: true,
                path: "cookie/koasession"
            }
        ]
    },
    {
        title: "6. 模板引擎",
        children: [
            {
                title: "6.1 koa2加载模板引擎",
                collapsable: true,
                path: "engine/koaengine"
            },
            {
                title: "6.2 ejs模板引擎",
                collapsable: true,
                path: "engine/ejsengine"
            }
        ]
    },
    {
        title: "7. 文件上传",
        children: [
            {
                title: "7.1 busboy模块",
                collapsable: true,
                path: "file/busboy"
            },
            {
                title: "7.2 上传文件简单实现",
                collapsable: true,
                path: "file/uploading"
            },
            {
                title: "7.3 异步上传图片实现",
                collapsable: true,
                path: "file/asyncuploading"
            }
        ]
    },
    {
        title: "8. 数据库mysql",
        children: [
            {
                title: "8.1 mysql模块",
                collapsable: true,
                path: "mysql/mysqlmodule"
            },
            {
                title: "8.2 async/await封装使用mysql",
                collapsable: true,
                path: "mysql/asyncmysql"
            },
            {
                title: "8.3 项目建表初始化",
                collapsable: true,
                path: "mysql/mysqlinit"
            }
        ]
    },
    {
        title: "9. JSONP实现",
        children: [
            {
                title: "9.1 原生koa2实现JSONP",
                collapsable: true,
                path: "jsonp/koajsonp"
            },
            {
                title: "9.2 koa-jsonp中间件",
                collapsable: true,
                path: "jsonp/middleware"
            }
        ]
    },
    {
        title: "10. 测试",
        children: [
            {
                title: "10.1 单元测试",
                collapsable: true,
                path: "test/unit"
            }
        ]
    },
    {
        title: "11. debug",
        children: [
            {
                title: "11.1 开发debug",
                collapsable: true,
                path: "debug/debug"
            }
        ]
    },
    {
        title: "12. 项目框架搭建",
        children: [
            {
                title: "12.1 快速启动",
                collapsable: true,
                path: "frame/start"
            },
            {
                title: "12.2 框架设计",
                collapsable: true,
                path: "frame/design"
            },
            {
                title: "12.3 分层操作",
                collapsable: true,
                path: "frame/hierarchy"
            },
            {
                title: "12.4 数据库设计",
                collapsable: true,
                path: "frame/database"
            },
            {
                title: "12.5 路由设计",
                collapsable: true,
                path: "frame/router"
            },
            {
                title: "12.6 webpack4环境搭建",
                collapsable: true,
                path: "frame/webpack"
            },
            {
                title: "12.7 使用react.js",
                collapsable: true,
                path: "frame/react"
            },
            {
                title: "12.8 登陆注册功能实现",
                collapsable: true,
                path: "frame/login"
            },
            {
                title: "12.9 session登录状态判断处理",
                collapsable: true,
                path: "frame/session"
            }
        ]
    },
    {
        title: "13. 其他进阶",
        children: [
            {
                title: "import/export使用",
                collapsable: true,
                path: "import/import"
            }
        ]
    }
],
      "/docs/donate/": [
        "",
        
      ],
      "/docs/everyDay/": [
        {
                title: "使用Github Action发布项目到阿里云1",
                collapsable: true,
                path: "gitAction"
        }
        
      ]
    },
  
    "type": "blog",
    "friendLink": [
      {
        "title": "玖梦",
        "desc": "假如生活欺骗了你，那你就从容面对",
        "email": "1633626316@qq.com",
        "link": "http://121.40.166.6"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017",
    sidebarDepth: 3,
    vssueConfig: {
        platform: 'github',
        owner: 'mtb-17826069558', //github账户名
        repo: '-target', //github一个项目的名称
        clientId: '53c20c3db215ae1d73e3',//注册的Client ID
        clientSecret: '6af53f30c28e61f123c5f1b431b2d7d8a8520c49',//注册的Client Secret
      }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
},

  plugins: [
     // 小人的插件
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: { 
          welcome: '欢迎欢迎', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    //公告
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '公告',
      body: [
        {
          type: 'title',
          content: '欢迎加我的QQ/vx 🎉🎉🎉',
          style: 'text-aligin: center;',
        },
        {
          type: 'text',
          content: 'QQ/VX：1633626316',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '喜欢的主题特效可以去个人信息',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '友链或疑问均可在留言板给我留言',
          style: 'text-align: center;'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/docs/donate/'
        },
      ]
    }],
    // 音乐播放器
    [
      "music-bar",
      {
        //手动添加歌曲,支持 URLs 或 base64 data URIs ,默认为空
        playList: [],
 
        platform: [
          //目前仅支持网易云 TODO:多平台支持,默认为空数组
        
          {
            name: "music.163.com",
            songIDs:[],//支持多个歌曲 ID  
            playListIDs: ["19723756"] //支持多个歌单 ID  
          }
        ],
        timeOut: 2000, //加载超时,单位毫秒,默认2000  //Load timeout in milliseconds, default 2000
        firstClickPlay: true //首次点击自动播放,对移动端友好  //The first click autoplay, mobile friendly
      }
    ],
    // 鼠标点击特效
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: 'circle',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    // 彩带背景
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.2,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 500,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 4,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]



  ],

}