"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[4023],{4852:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,c=d["".concat(p,".").concat(m)]||d[m]||h[m]||i;return r?n.createElement(c,l(l({ref:t},u),{},{components:r})):n.createElement(c,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6083:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(9231);function a(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r||"#ffffff0d",borderRadius:"1.5rem",color:"#25c19f",padding:"0.2rem 0.5rem"}},t)}},9851:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return h},default:function(){return m}});var n=r(5086),a=r(9126),i=(r(9231),r(4852)),l=r(6083),o=["components"],p={title:"Garfish.router",slug:"/api/router",order:5},s=void 0,u={unversionedId:"api/router",id:"api/router",isDocsHomePage:!1,title:"Garfish.router",description:"\u7528\u4e8e\u5fae\u524d\u7aef\u4e0b\u7684\u5e94\u7528\u95f4\u7684\u8def\u7531\u8df3\u8f6c\uff0c\u63d0\u4f9b\u8def\u5b88\u536b\u80fd\u529b\uff0c\u5728\u8def\u7531\u53d8\u5316\u65f6\u89e6\u53d1\u76f8\u5e94hook\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u52a0\u7cbe\u786e\u7684\u63a7\u5236\u8def\u7531\u53d8\u5316\uff0c\u7075\u6d3b\u5730\u652f\u6301\u5404\u7c7b\u4e1a\u52a1\u573a\u666f\u3002",source:"@site/docs/api/router.md",sourceDirName:"api",slug:"/api/router",permalink:"/api/router",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/api/router.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1651928914,formattedLastUpdatedAt:"2022/5/7",frontMatter:{title:"Garfish.router",slug:"/api/router",order:5},sidebar:"api",previous:{title:"Garfish.channel",permalink:"/api/channel"},next:{title:"Garfish.setOptions",permalink:"/api/setOptions"}},h=[{value:"<code>Garfish.router</code>",id:"garfishrouter",children:[{value:"Type",id:"type",children:[],level:3},{value:"\u9ed8\u8ba4\u503c",id:"\u9ed8\u8ba4\u503c",children:[],level:3},{value:"Garfish.router.push",id:"garfishrouterpush",children:[{value:"Type",id:"type-1",children:[],level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:4},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[],level:4}],level:3},{value:"Garfish.router.replace",id:"garfishrouterreplace",children:[{value:"Type",id:"type-2",children:[],level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",children:[],level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",children:[],level:4},{value:"\u8bf4\u660e",id:"\u8bf4\u660e-1",children:[],level:4}],level:3},{value:"Garfish.router.beforeEach",id:"garfishrouterbeforeeach",children:[{value:"\u89e6\u53d1\u65f6\u673a",id:"\u89e6\u53d1\u65f6\u673a",children:[],level:4},{value:"Type",id:"type-3",children:[],level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",children:[],level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",children:[],level:4}],level:3},{value:"Garfish.router.afterEach",id:"garfishrouteraftereach",children:[{value:"\u89e6\u53d1\u65f6\u673a",id:"\u89e6\u53d1\u65f6\u673a-1",children:[],level:4},{value:"Type",id:"type-4",children:[],level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",children:[],level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",children:[],level:4}],level:3}],level:2}],d={toc:h};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u7528\u4e8e\u5fae\u524d\u7aef\u4e0b\u7684\u5e94\u7528\u95f4\u7684\u8def\u7531\u8df3\u8f6c\uff0c\u63d0\u4f9b\u8def\u5b88\u536b\u80fd\u529b\uff0c\u5728\u8def\u7531\u53d8\u5316\u65f6\u89e6\u53d1\u76f8\u5e94hook\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u52a0\u7cbe\u786e\u7684\u63a7\u5236\u8def\u7531\u53d8\u5316\uff0c\u7075\u6d3b\u5730\u652f\u6301\u5404\u7c7b\u4e1a\u52a1\u573a\u666f\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8def\u7531\u662f\u5fae\u524d\u7aef\u4e2d\u91cd\u8981\u4e14\u590d\u6742\u7684\u6a21\u5757\u3002\u5728\u5fae\u524d\u7aef\u5e94\u7528\u4e0b\uff0c\u5b50\u5e94\u7528\u65e2\u53ef\u4f5c\u4e3a\u72ec\u7acb\u5e94\u7528\u8fd0\u884c\u5728\u81ea\u5df1\u7684\u8def\u7531\u7cfb\u7edf\u4e0b\uff0c\u53c8\u53ef\u4f5c\u4e3a\u5b50\u5e94\u7528\u5d4c\u5165\u5728\u4e3b\u5e94\u7528\u4e0b\u52a0\u8f7d\uff0c\u4e3a\u4e86\u5b9e\u73b0\u4e24\u79cd\u6a21\u5f0f\u7684\u65e0\u7f1d\u5207\u6362\uff0cGarfish \u5b9e\u73b0\u4e86\u4e00\u5957\u8def\u7531\u673a\u5236\u4fdd\u8bc1\u7528\u6237\u5728\u8fd9\u4e24\u79cd\u6a21\u5f0f\u4e2d\u5e73\u6ed1\u8fc7\u6e21\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"/guide/router"},"Garfish \u8def\u7531\u673a\u5236")," \u4e2d\u4e86\u89e3\u8be6\u7ec6\u8bbe\u8ba1\u3002")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u9605\u8bfb\u4e0b\u9762 API \u4ecb\u7ecd\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4e86\u89e3\u548c\u4fdd\u8bc1\u4e00\u4e9b\u914d\u7f6e\u89c4\u8303\u3002"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f60\u9700\u8981\u4e86\u89e3\u7684\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524d Garfish \u8def\u7531\u7cfb\u7edf\u901a\u8fc7\u547d\u540d\u7a7a\u95f4\uff08\u5373\u5b50\u5e94\u7528 basename\uff09\u6765\u907f\u514d\u5e94\u7528\u95f4\u7684\u8def\u7531\u51b2\u7a81\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524d Garfish \u8def\u7531\u7cfb\u7edf\u4ec5\u652f\u6301\u4e3b\u5e94\u7528\u7684 history \u8def\u7531\u6a21\u5f0f\uff0c\u539f\u56e0\u662f hash \u8def\u7531\u65e0\u6cd5\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u57fa\u7840\u8def\u7531\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528\u6839\u8def\u7531\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff0c\u5426\u5219\u8be5\u5e94\u7528\u5728\u4efb\u4f55\u8def\u5f84\u4e0b\u90fd\u4f1a\u6fc0\u6d3b\uff0c\u4e14\u5e94\u7528\u95f4\u53ef\u80fd\u4f1a\u4ea7\u751f\u51b2\u7a81\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"provider")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"render")," \u51fd\u6570\u62ff\u5230\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e3b\u5e94\u7528\u7684 basename")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"activeWhen"),"\uff1b")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u4f60\u9700\u8981\u914d\u7f6e\u7684\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"provider")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"render")," \u51fd\u6570\u63a5\u6536\u5230\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," \u8bbe\u7f6e\u4e3a\u5b50\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"basename"),"\uff0c",(0,i.kt)("a",{parentName:"li",href:"/guide/demo/react#3-%E6%A0%B9%E7%BB%84%E4%BB%B6%E8%AE%BE%E7%BD%AE%E8%B7%AF%E7%94%B1%E7%9A%84-basename"},"\u5982\u4f55\u914d\u7f6e"),"\uff1b")),(0,i.kt)("h2",{id:"garfishrouter"},(0,i.kt)("inlineCode",{parentName:"h2"},"Garfish.router")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.router")," \u662f Garfish \u5b9e\u4f8b\u4e0a\u7684\u5c5e\u6027\uff0c\u7531 Garfish \u8def\u7531\u7cfb\u7edf\u63d0\u4f9b\u3002\u8be5\u5c5e\u6027\u4e0a\u63d0\u4f9b\u5e94\u7528\u95f4\u8def\u7531\u8df3\u8f6c\u7684\u65b9\u6cd5\u3001\u8def\u7531\u5bfc\u822a\u5b88\u536b\u94a9\u5b50\u51fd\u6570\u4ee5\u53ca\u8def\u7531\u76f8\u5173\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u7c7b\u578b\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Garfish {\n    router: RouterInterface;\n    apps: Record<string, interfaces.App>;\n}\n\ninterface RouterInterface {\n    push: ({ path, query, basename}: {\n        path: string;\n        basename?: string;\n        query?: {\n            [key: string]: string;\n        };\n    }) => void;\n    replace: ({ path, query, basename}: {\n        path: string;\n        basename?: string;\n        query?: {\n            [key: string]: string;\n        };\n    }) => void;\n    beforeEach: (hook: RouterHook) => void;\n    afterEach: (hook: RouterHook) => void;\n    registerRouter: (Apps: interfaces.AppInfo | Array<interfaces.AppInfo>) => void;\n    routerChange: (hook: RouterChange) => void;\n    setRouterConfig: typeof setRouterConfig;\n    listenRouterAndReDirect: ({ apps, basename, autoRefreshApp, active, deactive, notMatch}: Options$1) => void;\n    routerConfig: Options$1;\n}\n")),(0,i.kt)("h3",{id:"\u9ed8\u8ba4\u503c"},"\u9ed8\u8ba4\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e0")),(0,i.kt)("h3",{id:"garfishrouterpush"},"Garfish.router.push"),(0,i.kt)("p",null,"\u8def\u7531\u5bfc\u822a\u65b9\u6cd5\u3002"),(0,i.kt)("h4",{id:"type-1"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"push: ({ path, query, basename}: {\n      path: string;\n      basename?: string;\n      query?: {\n          [key: string]: string;\n      };\n  }) => void;\n")),(0,i.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"path"),(0,i.kt)("p",{parentName:"li"},"\u8981\u8df3\u8f6c\u7684\u8def\u7531\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c\u5fc5\u9009\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"basename"),(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u8df3\u8f6c\u7684\u57fa\u7840\u8def\u7531\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c\u975e\u5fc5\u9009\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"query"),(0,i.kt)("p",{parentName:"li"},"\u8def\u7531\u643a\u5e26\u7684\u67e5\u8be2\u53c2\u6570\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Record<string, string>"),"\uff0c\u975e\u5fc5\u9009\u3002"))),(0,i.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Garfish from 'garfish';\n\n// \u8df3\u8f6c vue-a \u5e94\u7528\uff1a\nGarfish.router.push({\n  path: '/vue-a'\n});\n\n// \u8df3\u8f6c react-b \u5e94\u7528\u8be6\u60c5\u9875\uff1a\nGarfish.router.push({\n  path: \"/react-b/detail\",\n  query: { id: \"002\" },\n});\n")),(0,i.kt)("h4",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router.push()")," \u65b9\u6cd5\u9ed8\u8ba4\u4f1a\u643a\u5e26\u4e0a\u5168\u5c40 basename \u4f5c\u4e3a\u8df3\u8f6c\u524d\u7f00\uff0c\u82e5\u4f7f\u7528\u6846\u67b6\u81ea\u8eab\u8def\u7531\u8fdb\u884c\u8df3\u8f6c\uff0c\u8bf7\u8bb0\u5f97\u4e3b\u52a8\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," \u8df3\u8f6c\u524d\u7f00\u3002\u4e0b\u9762\u4e24\u79cd\u8df3\u8f6c\u65b9\u5f0f\u7b49\u4ef7\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Garfish.router.push({ path: '/react-b' });\nnavigate('/examples/react-b'); // navigate \u4e3a react-router-dom v6 \u8df3\u8f6c\u65b9\u6cd5\n"))),(0,i.kt)("li",{parentName:"ol"},"\u6b64\u65b9\u6cd5\u4f1a\u5411 history \u6808\u6dfb\u52a0\u65b0\u7684\u8bb0\u5f55\uff0c\u70b9\u51fb\u6d4f\u89c8\u5668\u540e\u9000\u6309\u94ae\u540e\u80fd\u6b63\u5e38\u8fd4\u56de\u4e0a\u4e00\u4e2a\u9875\u9762\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u82e5\u8df3\u8f6c\u5b50\u5e94\u7528\u7684\u5b50\u8def\u7531\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router.push()")," \u65b9\u6cd5\u8df3\u8f6c\u5c06\u89e6\u53d1\u5b50\u5e94\u7528\u5b50\u8def\u7531\u89c6\u56fe\u66f4\u65b0\u3002\u53e6\u5916\u82e5\u5173\u95ed ",(0,i.kt)("a",{parentName:"li",href:"/api/run#autorefreshapp"},"autoRefreshApp")," \u9009\u9879\uff0c\u5219\u5c06",(0,i.kt)("strong",{parentName:"li"},"\u53ea\u80fd"),"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router")," \u8fdb\u884c\u8df3\u8f6c\u5b50\u5e94\u7528\u5b50\u8def\u7531\uff0c\u4f46\u5b50\u5e94\u7528\u4e00\u7ea7\u8def\u7531\u4ecd\u5c06\u53ef\u4f7f\u7528\u6846\u67b6\u8def\u7531\u8df3\u8f6c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u672c api \u53ef\u4ee5\u5728 react-router-prompt \u89e6\u53d1\u591a\u6b21\u65f6\uff0c\u914d\u5408 autoRefreshApp \u914d\u7f6e\u3002\u5173\u95ed\u5176\u4ed6\u8df3\u8f6c\u65b9\u6cd5\u89e6\u53d1\u5b50\u5e94\u7528\u5237\u65b0\u7ec4\u4ef6\uff0c\u53ef\u9650\u5236 prompt \u89e6\u53d1\u591a\u6b21\u6216\u5b50\u5e94\u7528\u989d\u5916\u5378\u8f7d\u591a\u6b21\u7684\u573a\u666f\u3002")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7531\u4e8e\u76ee\u524d\u4e3b\u6d41\u6846\u67b6\u5e76\u4e0d\u662f\u901a\u8fc7\u76d1\u542c\u8def\u7531\u53d8\u5316\u6765\u89e6\u53d1\u7ec4\u4ef6\u7684\u66f4\u65b0\u7684\u3002\u5728\u8df3\u8f6c\u5b50\u5e94\u7528\u5b50\u8def\u7531\u65f6\uff0c\u82e5\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"history.pushState")," \u5c06\u4e0d\u4f1a\u89e6\u53d1\u5bf9\u5e94\u8def\u7531\u7684\u7ec4\u4ef6\u66f4\u65b0\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.router")," \u63d0\u4f9b\u7684\u65b9\u6cd5\u8fdb\u884c\u8df3\u8f6c\u3002"))),(0,i.kt)("h3",{id:"garfishrouterreplace"},"Garfish.router.replace"),(0,i.kt)("p",null,"\u8def\u7531\u5bfc\u822a\u65b9\u6cd5\u3002"),(0,i.kt)("h4",{id:"type-2"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"replace: ({ path, query, basename}: {\n      path: string;\n      basename?: string;\n      query?: {\n          [key: string]: string;\n      };\n  }) => void;\n")),(0,i.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"path"),(0,i.kt)("p",{parentName:"li"},"\u8981\u8df3\u8f6c\u7684\u8def\u7531\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c\u5fc5\u9009\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"basename"),(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u8df3\u8f6c\u7684\u57fa\u7840\u8def\u7531\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c\u975e\u5fc5\u9009\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"query"),(0,i.kt)("p",{parentName:"li"},"\u8def\u7531\u643a\u5e26\u7684\u67e5\u8be2\u53c2\u6570\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Record<string, string>"),"\uff0c\u975e\u5fc5\u9009\u3002"))),(0,i.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Garfish from 'garfish';\n// \u8df3\u8f6c react-a \u5e94\u7528\uff1a\nGarfish.router.replace({\n  path: '/react-a'\n});\n")),(0,i.kt)("h4",{id:"\u8bf4\u660e-1"},"\u8bf4\u660e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router.replace()")," \u65b9\u6cd5\u4e0e ",(0,i.kt)("a",{parentName:"li",href:"/api/router#garfishrouterpush"},"Garfish.router.push()")," \u65b9\u6cd5\u7c7b\u4f3c\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a\u5b83\u4e0d\u4f1a\u5411 history \u6dfb\u52a0\u65b0\u8bb0\u5f55\uff0c\u800c\u662f\u8ddf\u66ff\u6362\u6389\u5f53\u524d\u7684 history \u8bb0\u5f55\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5176\u5b83\u53c2\u6570\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"/api/router#garfishrouterpush"},"Garfish.router.push()"))),(0,i.kt)("h3",{id:"garfishrouterbeforeeach"},"Garfish.router.beforeEach"),(0,i.kt)("h4",{id:"\u89e6\u53d1\u65f6\u673a"},"\u89e6\u53d1\u65f6\u673a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5168\u5c40\u8def\u7531\u5b88\u536b\uff0c\u5728",(0,i.kt)("strong",{parentName:"li"},"\u8def\u7531\u8df3\u8f6c\u540e"),"\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u5b50\u5e94\u7528\u6302\u8f7d\u524d"),"\u89e6\u53d1\u3002")),(0,i.kt)("h4",{id:"type-3"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"beforeEach: (hook: RouterHook) => void;\n\ntype RouterHook = (\n  to: CurrentRouterInfo,\n  from: CurrentRouterInfo,\n  next,\n) => void;\n\nexport interface CurrentRouterInfo {\n  fullPath: string;\n  path: string;\n  query: Object;\n  state: Object;\n  matched: Array<interfaces.AppInfo>;\n}\n")),(0,i.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"to"),"\uff1a\u5373\u5c06\u8981\u8fdb\u5165\u7684\u76ee\u6807\u8def\u7531\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"from"),"\uff1a\u5373\u5c06\u79bb\u5f00\u7684\u8def\u7531\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"next"),"\uff1a\u963b\u585e\u6267\u884c\u56de\u8c03\u3002")),(0,i.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Garfish from 'garfish';\nGarfish.router.beforeEach((to, from, next) => {\n  next();\n});\n\nGarfish.run({...})\n")),(0,i.kt)("h3",{id:"garfishrouteraftereach"},"Garfish.router.afterEach"),(0,i.kt)("h4",{id:"\u89e6\u53d1\u65f6\u673a-1"},"\u89e6\u53d1\u65f6\u673a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5168\u5c40\u8def\u7531\u5b88\u536b\uff0c\u5728",(0,i.kt)("strong",{parentName:"li"},"\u8def\u7531\u8df3\u8f6c\u540e"),"\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u5b50\u5e94\u7528\u6302\u8f7d\u540e"),"\u89e6\u53d1\u3002")),(0,i.kt)("h4",{id:"type-4"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"afterEach: (hook: RouterHook) => void;\n\ntype RouterHook = (\n  to: CurrentRouterInfo,\n  from: CurrentRouterInfo,\n  next,\n) => void;\n\nexport interface CurrentRouterInfo {\n  fullPath: string;\n  path: string;\n  query: Object;\n  state: Object;\n  matched: Array<interfaces.AppInfo>;\n}\n")),(0,i.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"to"),"\uff1a\u5373\u5c06\u8981\u8fdb\u5165\u7684\u76ee\u6807\u8def\u7531\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"from"),"\uff1a\u5373\u5c06\u79bb\u5f00\u7684\u8def\u7531\u4fe1\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.Z,{mdxType:"Highlight"},"next"),"\uff1a\u963b\u585e\u6267\u884c\u56de\u8c03\u3002")),(0,i.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import Garfish from 'garfish';\nGarfish.router.afterEach((to, from, next) => {\n  next();\n});\n\nGarfish.run({...})\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u6ce8\u610f\uff1a"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router.beforeEach")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router.afterEach")," \u5747\u5c5e\u4e8e Garfish \u63d0\u4f9b\u7684\u8def\u7531\u5b88\u536b\u94a9\u5b50\uff0c\u5c06\u5728\u6bcf\u6b21\u5728\u8def\u7531\u53d8\u5316\u540e\u89e6\u53d1\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8bf7\u5c06\u8def\u7531\u5b88\u536b\u6ce8\u518c\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.run")," \u524d\u6267\u884c\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u63a5\u6536\u5230\u9996\u6b21\u52a0\u8f7d\u65f6\u7684\u8def\u7531\u94a9\u5b50\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u82e5\u8df3\u8f6c\u65b0\u7684\u5b50\u5e94\u7528\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router.beforeEach")," \u5c06\u5728\u5b50\u5e94\u7528\u52a0\u8f7d\u524d\u89e6\u53d1\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.router.afterEach")," \u5c06\u5728\u5b50\u5e94\u7528\u52a0\u8f7d\u540e\u89e6\u53d1\u3002\u6b64\u65f6\u8def\u7531\u5747\u5df2\u53d1\u751f\u53d8\u5316\uff1b"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"next")," \u51fd\u6570\u53ef\u4e3a\u5f02\u6b65\u51fd\u6570\uff0c\u5fae\u524d\u7aef\u6e32\u67d3\u6d41\u7a0b\u5c06\u88ab\u963b\u585e\u76f4\u81f3 ",(0,i.kt)("inlineCode",{parentName:"li"},"next")," \u51fd\u6570\u88ab resolve\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5b50\u5e94\u7528\u95f4\u8df3\u8f6c\u65f6\uff0c\u82e5\u4f7f\u7528\u4e86\u8def\u7531\u5b88\u536b\u94a9\u5b50\uff0c\u8bf7\u786e\u4fdd ",(0,i.kt)("inlineCode",{parentName:"li"},"next")," \u51fd\u6570\u88ab\u6267\u884c\uff0c\u5426\u5219\u5c06\u5bfc\u81f4 Garfish \u5185\u90e8\u5b50\u5e94\u7528\u6e32\u67d3\u903b\u8f91\u88ab\u963b\u585e\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5b50\u5e94\u7528\u5185\u8def\u7531\u8df3\u8f6c\u4e0d\u53d7 ",(0,i.kt)("inlineCode",{parentName:"li"},"next")," \u51fd\u6570\u8c03\u7528\u7684\u5f71\u54cd\uff1b")))))}m.isMDXComponent=!0}}]);