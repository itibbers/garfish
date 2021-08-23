"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[16],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),p=["components"],o={title:"\u8def\u7531\u95ee\u9898",slug:"/issues/router",order:4},l=void 0,s={unversionedId:"issues/router",id:"issues/router",isDocsHomePage:!1,title:"\u8def\u7531\u95ee\u9898",description:"\u4e3b\u5e94\u7528\u8def\u7531\u76ee\u524d\u4ec5\u652f\u6301\u4e3a history \u6a21\u5f0f\uff0c\u5b50\u5e94\u7528\u8def\u7531\u7684 basename \u57fa\u4e8e\u4e3b\u5e94\u7528\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u5b50\u5e94\u7528 basename \u914d\u7f6e\u3002",source:"@site/docs/issues/router.md",sourceDirName:"issues",slug:"/issues/router",permalink:"/issues/router",editUrl:"https://github.com/bytedance/garfish/docs/issues/router.md",version:"current",lastUpdatedBy:"zhouxiao.shaw",lastUpdatedAt:1629715147,formattedLastUpdatedAt:"2021/8/23",frontMatter:{title:"\u8def\u7531\u95ee\u9898",slug:"/issues/router",order:4},sidebar:"issues",previous:{title:"\u65e7\u5e94\u7528\u6539\u9020",permalink:"/issues/oldApp"},next:{title:"\u6837\u5f0f\u95ee\u9898",permalink:"/issues/style"}},m=[{value:"\u4e3a\u4ec0\u4e48\u4e3b\u5e94\u7528\u4ec5\u652f\u6301 history \u6a21\u5f0f\uff1f",id:"\u4e3a\u4ec0\u4e48\u4e3b\u5e94\u7528\u4ec5\u652f\u6301-history-\u6a21\u5f0f\uff1f",children:[]},{value:"\u6839\u8def\u7531\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff1f",id:"\u6839\u8def\u7531\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff1f",children:[]},{value:"\u5b50\u5e94\u7528 render \u51fd\u6570\u62ff\u5230\u7684 basename \u662f\u4ec0\u4e48\uff0c\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f",id:"\u5b50\u5e94\u7528-render-\u51fd\u6570\u62ff\u5230\u7684-basename-\u662f\u4ec0\u4e48\uff0c\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f",children:[]}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e3b\u5e94\u7528\u8def\u7531\u76ee\u524d\u4ec5\u652f\u6301\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6a21\u5f0f\uff0c\u5b50\u5e94\u7528\u8def\u7531\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u57fa\u4e8e\u4e3b\u5e94\u7528\uff0c\u5177\u4f53\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/api/#basename"},"\u5b50\u5e94\u7528 basename \u914d\u7f6e"),"\u3002"),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4e3b\u5e94\u7528\u4ec5\u652f\u6301-history-\u6a21\u5f0f\uff1f"},"\u4e3a\u4ec0\u4e48\u4e3b\u5e94\u7528\u4ec5\u652f\u6301 history \u6a21\u5f0f\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u76ee\u524d Garfish \u662f\u901a\u8fc7\u547d\u540d\u7a7a\u95f4\u53bb\u907f\u514d\u5e94\u7528\u95f4\u7684\u8def\u7531\u53d1\u751f\u51b2\u7a81\u7684\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e3b\u5e94\u7528\u4ec5\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6a21\u5f0f\u7684\u539f\u56e0\u5728\u4e8e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," \u8def\u7531\u65e0\u6cd5\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u57fa\u7840\u8def\u7531\uff0c\u4ece\u800c\u53ef\u80fd\u5bfc\u81f4\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\u53d1\u751f\u8def\u7531\u51b2\u7a81\u3002"))),(0,i.kt)("h2",{id:"\u6839\u8def\u7531\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff1f"},"\u6839\u8def\u7531\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6709\u90e8\u5206\u4e1a\u52a1\u60f3\u5c06\u6839\u8def\u5f84\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net")," \u5c31\u89e6\u53d1\u5b50\u5e94\u7528\u7684\u6e32\u67d3\uff0c\u7531\u4e8e\u76ee\u524d\u5b50\u5e94\u7528 ",(0,i.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32\u7684\u6fc0\u6d3b\u6761\u4ef6\u4e3a\u6700\u77ed\u5339\u914d\u539f\u5219"),"\uff0c\u82e5\u5b50\u5e94\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"activeWhen: '/'")," \u8868\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"'/xxx'")," \u90fd\u4f1a\u6fc0\u6d3b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e4b\u6240\u4ee5\u4e3a\u6700\u77ed\u5339\u914d\u539f\u5219\u7684\u539f\u56e0\u5728\u4e8e\uff0c\u6211\u4eec\u9700\u8981\u5224\u65ad\u662f\u5426\u67d0\u4e2a\u5b50\u5e94\u7528\u7684\u5b50\u8def\u7531\u88ab\u6fc0\u6d3b\uff0c\u5982\u679c\u53ef\u80fd\u662f\u67d0\u4e2a\u5b50\u5e94\u7528\u7684\u5b50\u8def\u7531\uff0c\u6211\u4eec\u5219\u53ef\u80fd\u6fc0\u6d3b\u8be5\u5e94\u7528\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e4b\u6240\u4ee5\u6709\u8be5\u9650\u5236\u662f\u7531\u4e8e\u82e5\u67d0\u4e2a\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"\uff0c\u5219\u8be5\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/xx")," \u90fd\u53ef\u80fd\u4e3a\u6539\u5b50\u5e94\u7528\u7684\u5b50\u8def\u7531\uff0c\u5219\u53ef\u80fd\u4e0e\u5176\u4ed6\u5e94\u7528\u4ea7\u751f\u51b2\u7a81\uff0c\u9020\u6210\u6df7\u4e71\u3002"))),(0,i.kt)("h2",{id:"\u5b50\u5e94\u7528-render-\u51fd\u6570\u62ff\u5230\u7684-basename-\u662f\u4ec0\u4e48\uff0c\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f"},"\u5b50\u5e94\u7528 render \u51fd\u6570\u62ff\u5230\u7684 basename \u662f\u4ec0\u4e48\uff0c\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f"),(0,i.kt)("p",null,"\u4e3a\u4ec0\u4e48\u63a8\u8350\u5b50\u5e94\u7528\u62ff\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," \u4f20\u9012\u8fc7\u6765\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u4f5c\u4e3a\u5b50\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename"),"\uff0c\u6709\u4e9b\u4e1a\u52a1\u65b9\u5728\u5b9e\u9645\u8fc7\u7a0b\u4e2d\u76f4\u63a5\u901a\u8fc7\u7ea6\u5b9a\u5f62\u5f0f\u76f4\u63a5\u5728\u5b50\u5e94\u7528\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u5df2\u5230\u8fbe\u9694\u79bb\u7684\u6548\u679c\uff0c\u4f46\u8be5\u4f7f\u7528\u65b9\u5f0f\u53ef\u80fd\u5bfc\u81f4\u4e3b\u5e94\u7528\u5982\u679c\u53d8\u66f4 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u53ef\u80fd\u5bfc\u81f4\u5b50\u5e94\u7528\u65e0\u6cd5\u4e00\u8d77\u53d8\u66f4\u751f\u6548\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f53\u524d\u4e3b\u5e94\u7528\u8bbf\u95ee\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net")," \u5373\u53ef\u8bbf\u95ee\u5230\u8be5\u7ad9\u70b9\u7684\u4e3b\u9875\uff0c\u5f53\u524d ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"\uff0c\u5b50\u5e94\u7528 vue\uff0c\u8bbf\u95ee\u8def\u5f84\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net/vue"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4e3b\u5e94\u7528\u60f3\u66f4\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"/site"),"\uff0c\u5219\u4e3b\u5e94\u7528\u7684\u8bbf\u95ee\u8def\u5f84\u53d8\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net/site"),"\uff0c\u5b50\u5e94\u7528 vue \u7684\u8bbf\u95ee\u8def\u5f84\u53d8\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"garfish.bytedance.net/site/vue"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6240\u4ee5\u63a8\u8350\u5b50\u5e94\u7528\u76f4\u63a5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," \u4e2d\u4f20\u9012\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," \u4f5c\u4e3a\u81ea\u8eab\u5e94\u7528\u7684\u57fa\u7840\u8def\u7531\uff0c\u4ee5\u4fdd\u8bc1\u4e3b\u5e94\u7528\u5728\u53d8\u66f4\u8def\u7531\u4e4b\u540e\uff0c\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8def\u5f84\u8fd8\u662f\u7b26\u5408\u6574\u4f53\u53d8\u5316"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5fae\u524d\u7aef\u573a\u666f\u4e0b\uff0c\u6bcf\u4e2a\u5b50\u5e94\u7528\u53ef\u80fd\u90fd\u6709\u81ea\u5df1\u7684\u8def\u7531\u573a\u666f\uff0c\u4e3a\u4fdd\u8bc1\u5b50\u5e94\u7528\u95f4\u8def\u7531\u4e0d\u51b2\u7a81\uff0cGarfish \u6846\u67b6\u5c06\u914d\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5b50\u5e94\u7528\u7684 activeWhen")," \u5339\u914d\u7684\u8def\u5f84\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u57fa\u8def\u5f84\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u82e5\u5728 Garfish \u4e0a\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"basename: /demo"),"\uff0c\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u8def\u5f84\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"/vue2"),"\uff0c\u5219\u5b50\u5e94\u7528\u5f97\u5230\u7684\u6fc0\u6d3b\u8def\u5f84\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"/demo/vue2"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u82e5\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\u4e3a\u51fd\u6570\uff0c\u5728\u6bcf\u6b21\u53d1\u751f\u8def\u7531\u53d8\u5316\u65f6\u4f1a\u901a\u8fc7\u6821\u9a8c\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u51fd\u6570\u82e5\u51fd\u6570\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u8868\u660e\u7b26\u5408\u5f53\u524d\u6fc0\u6d3b\u6761\u4ef6\u5c06\u89e6\u53d1\u8def\u7531\u6fc0\u6d3b\uff0c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Garfish \u4f1a\u5c06\u5f53\u524d\u7684\u8def\u5f84\u4f20\u5165\u6fc0\u6d3b\u51fd\u6570\u5206\u5272\u4ee5\u5f97\u5230\u5b50\u5e94\u7528\u7684\u6700\u957f\u6fc0\u6d3b\u8def\u5f84\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"basename")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5b50\u5e94\u7528\u6700\u957f\u6fc0\u6d3b\u8def\u5f84\u4f20")," \u7ed9\u5b50\u5e94\u7528\u53c2\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5b50\u5e94\u7528\u5982\u679c\u672c\u8eab\u5177\u5907\u8def\u7531\uff0c\u5728\u5fae\u524d\u7aef\u7684\u573a\u666f\u4e0b\uff0c\u5fc5\u987b\u628a basename \u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u57fa\u7840\u8def\u5f84\uff0c\u6ca1\u6709\u57fa\u7840\u8def\u7531\uff0c\u5b50\u5e94\u7528\u7684\u8def\u7531\u53ef\u80fd\u4e0e\u4e3b\u5e94\u7528\u548c\u5176\u4ed6\u5e94\u7528\u53d1\u751f\u51b2\u7a81"),"\n:::"))))))}d.isMDXComponent=!0}}]);