"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[3585],{4852:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(9231);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),c=i,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1235:function(e,t,a){var n=a(9231);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},3475:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(5086),i=a(9231),r=a(1213),l=a(181);var p=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(883),m=a(1506),s="tabItem_3CfY";function u(e){var t,a,n,r=e.lazy,l=e.block,u=e.defaultValue,d=e.values,c=e.groupId,k=e.className,N=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:N.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=N[0])?void 0:n.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=p(),y=g.tabGroupChoices,b=g.setTabGroupChoices,C=(0,i.useState)(v),w=C[0],A=C[1],x=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=y[c];null!=O&&O!==w&&h.some((function(e){return e.value===O}))&&A(O)}var E=function(e){var t=e.currentTarget,a=x.indexOf(t),n=h[a].value;n!==w&&(T(t),A(n),null!=c&&b(c,n))},G=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;a=x[i]||x[x.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":l},k)},h.map((function(e){var t=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,m.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:G,onFocus:E,onClick:E},null!=a?a:t)}))),r?(0,i.cloneElement)(N.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,r.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}},181:function(e,t,a){var n=(0,a(9231).createContext)(void 0);t.Z=n},6083:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(9231);function i(e){var t=e.children,a=e.color;return n.createElement("span",{style:{backgroundColor:a||"#ffffff0d",borderRadius:"1.5rem",color:"#25c19f",padding:"0.2rem 0.5rem"}},t)}},3140:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=a(5086),i=a(9126),r=(a(9231),a(4852)),l=a(6083),p=(a(3475),a(1235),["components"]),o={title:"Garfish.loadApp",slug:"/api/loadApp",order:4},m=void 0,s={unversionedId:"api/loadApp",id:"api/loadApp",isDocsHomePage:!1,title:"Garfish.loadApp",description:"\u7528\u4e8e\u624b\u52a8\u6302\u8f7d\u5b50\u5e94\u7528\uff0c\u53ef\u52a8\u6001\u63a7\u5236\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u548c\u9500\u6bc1\u3002",source:"@site/docs/api/loadApp.md",sourceDirName:"api",slug:"/api/loadApp",permalink:"/api/loadApp",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/api/loadApp.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1651928914,formattedLastUpdatedAt:"2022/5/7",frontMatter:{title:"Garfish.loadApp",slug:"/api/loadApp",order:4},sidebar:"api",previous:{title:"Garfish.registerApp",permalink:"/api/registerApp"},next:{title:"Garfish.channel",permalink:"/api/channel"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u9ed8\u8ba4\u503c",id:"\u9ed8\u8ba4\u503c",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"name",id:"name",children:[],level:3},{value:"options?",id:"options",children:[],level:3}],level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",children:[],level:3},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7528\u4e8e\u624b\u52a8\u6302\u8f7d\u5b50\u5e94\u7528\uff0c\u53ef\u52a8\u6001\u63a7\u5236\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u548c\u9500\u6bc1\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.run()")," API \u6ce8\u518c\u7684\u5b50\u5e94\u7528\u4f1a\u81ea\u52a8\u6839\u636e\u8def\u7531\u8fdb\u884c\u5e94\u6fc0\u6d3b\u5b50\u5e94\u7528\u7684\u5339\u914d\u903b\u8f91\uff0c\u5c5e\u4e8e\u8def\u7531\u9a71\u52a8\u5f0f\u7684\u5e94\u7528\u6302\u8f7d\u548c\u9500\u6bc1\u6a21\u5f0f\u3002\u5982\u679c\u4f60\u7684\u573a\u666f\u4e0b\u5e0c\u671b\u624b\u52a8\u63a7\u5236\u5e94\u7528\u7684\u52a0\u8f7d\u548c\u9500\u6bc1\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp()")," \u7684\u65b9\u5f0f\u52a0\u8f7d\u5e94\u7528\uff0c\u5b83\u662f\u4e00\u79cd\u66f4\u52a0\u7075\u6d3b\u7684\u5fae\u524d\u7aef\u5e94\u7528\u52a0\u8f7d\u6a21\u5f0f\u3002")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u8def\u7531\u5339\u914d\u7684\u5e94\u7528\u52a0\u8f7d\u6a21\u5f0f\u4f1a\u901a\u8fc7\u5b50\u5e94\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"activeWhen")," \u53c2\u6570\u5728\u5728\u8def\u7531\u53d8\u5316\u540e\u81ea\u52a8\u5224\u65ad\u5f53\u524d\u5e94\u52a0\u8f7d\u7684\u5b50\u5e94\u7528\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u624b\u52a8\u52a0\u8f7d\u6a21\u5f0f\u4e0b\uff08Garfish.loadApp\uff09\uff0cGarfish \u4e0d\u4f1a\u6839\u636e\u8def\u5f84\u5339\u914d\u800c\u662f\u5b8c\u5168\u7531\u5f00\u53d1\u8005\u63a7\u5236\u5e94\u7528\u52a0\u8f7d\u548c\u9500\u6bc1\uff0c\u6b64\u65f6\u5e94\u7528\u52a0\u8f7d\u4e0d\u4f1a\u53d7\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"activeWhen")," \u53c2\u6570\u7684\u5f71\u54cd\uff1b")))),(0,r.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"loadApp(appName: string, options?: Omit<interfaces.AppInfo, 'name'>): Promise<interfaces.App | null>;\n")),(0,r.kt)("h2",{id:"\u9ed8\u8ba4\u503c"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65e0")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)(l.Z,{mdxType:"Highlight"}," string ")),(0,r.kt)("li",{parentName:"ul"},"\u8981\u52a0\u8f7d\u7684\u5b50\u5e94\u7528\u540d\u79f0\uff0c\u5fc5\u9009\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5404\u5b50\u5e94\u7528\u7684\u540d\u79f0\u5e94\u4fdd\u6301\u552f\u4e00\uff0c\u8fd9\u662f\u5b50\u5e94\u7528\u7684\u552f\u4e00\u6807\u8bc6\uff1b")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u8bf7\u786e\u4fdd\u5f53\u524d\u8981\u52a0\u8f7d\u7684\u5b50\u5e94\u7528\u4fe1\u606f\u5df2\u6ce8\u518c\u3002Garfish \u4f1a\u4ece\u5df2\u6ce8\u518c\u7684 app \u4fe1\u606f\u4e2d\u67e5\u627e\u540c\u540d app\uff0c\u82e5\u5e94\u7528\u4fe1\u606f\u672a\u6ce8\u518c\u5c06\u5bfc\u81f4\u5e94\u7528\u52a0\u8f7d\u5931\u8d25\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5e94\u7528\u4fe1\u606f\u6ce8\u518c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"Garfish.run()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Garfish.registerApp()"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Garfish.setOptions()")," \u4e09\u79cd\u65b9\u5f0f\u6ce8\u518c\uff1b")))),(0,r.kt)("h3",{id:"options"},"options?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: ",(0,r.kt)(l.Z,{mdxType:"Highlight"}," Omit <interfaces.AppInfo, 'name'> "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u542b\u4e49\u672c\u8d28\u4e0a\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"/api/registerApp#%E5%8F%82%E6%95%B0"},"registerApp")," \u4e2d\u540c\u540d\u53c2\u6570\u4fdd\u6301\u4e00\u81f4\uff0c\u53ef\u9009\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u79fb\u6b65 ",(0,r.kt)("a",{parentName:"p",href:"/api/registerApp#%E5%8F%82%E6%95%B0"},"registerApp")," \u67e5\u770b\u5177\u4f53\u53c2\u6570\u8bf4\u660e\uff1b\u8fd9\u91cc\u4ec5\u9488\u5bf9\u6ce8\u610f\u4e8b\u9879\u8fdb\u884c\u8bf4\u660e\u3002"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u7684\u4f5c\u7528\uff1f")),(0,r.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u662f\u5141\u8bb8\u7528\u6237\u5728\u624b\u52a8\u52a0\u8f7d App \u65f6\u81ea\u5b9a\u4e49\u5f53\u524d\u5e94\u7528\u7684\u4fe1\u606f\u53c2\u6570\uff0c\u82e5\u4e4b\u524d\u5df2\u6ce8\u518c\u8fc7\u5b50\u5e94\u7528\uff0c\u5219\u4f1a\u5c06\u5df2\u914d\u7f6e\u4fe1\u606f\u548c\u8fd9\u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u8fdb\u884c deepMerge\uff0c\u63d0\u4f9b\u7528\u6237\u8fd0\u884c\u65f6\u66f4\u65b0 App \u5e94\u7528\u4fe1\u606f\u53c2\u6570\u7684\u80fd\u529b\uff1b"),(0,r.kt)("p",{parentName:"div"},"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u82e5\u5df2\u7f13\u5b58\u8fc7 App \u5b9e\u4f8b\uff0c\u5219\u518d\u6b21\u52a0\u8f7d\u4f1a\u76f4\u63a5\u8fd4\u56de\u5f53\u524d\u7f13\u5b58\u7684\u5b9e\u4f8b\uff0c\u540c\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\u4ecd\u4f1a\u8fdb\u884c merge\u3002\u82e5\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"cahce: false")," \u5173\u95ed\u7f13\u5b58\uff0c\u5219\u4f1a\u4f7f\u7528\u5f53\u524d merge \u540e\u7684\u914d\u7f6e\u91cd\u65b0\u751f\u6210 App \u5b9e\u4f8b\u4fe1\u606f\u5e76\u8fd4\u56de\uff1b"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"}," \u6ce8\u610f\u4e8b\u9879 "),"\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," \u4e2d\u4e0d\u5141\u8bb8\u4f20\u9012 ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u5c5e\u6027\uff0c\u53ea\u5141\u8bb8\u66f4\u65b0\u5f53\u524d App \u7684\u5e94\u7528\u4fe1\u606f\u53c2\u6570\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," \u82e5\u4e0d\u4f20\uff0c\u5219\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u5df2\u6ce8\u518c\u7684\u5e94\u7528\u4fe1\u606f\u53c2\u6570\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," \u82e5\u4f20\u9012\uff0c\u5219\u4f1a\u8986\u76d6\u5df2\u6ce8\u518c\u5e94\u7528\u4fe1\u606f\u4e2d\u7684\u540c\u540d\u5c5e\u6027(\u4e8c\u8005\u8fdb\u884c deepMerge)\uff0c\u8bf7\u786e\u4fdd\u5728\u5e94\u7528\u4fe1\u606f merge \u540e ",(0,r.kt)("inlineCode",{parentName:"li"},"entry")," \u5165\u53e3\u4fe1\u606f\u53c2\u6570\u5b58\u5728\uff0c\u5426\u5219\u5c06\u4f1a\u629b\u51fa\u9519\u8bef\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u4fe1\u606f\u7684\u66f4\u65b0\u4e0d\u5f71\u54cd\u5168\u5c40\u914d\u7f6e\uff1b")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Garfish from \"garfish\";\nimport type { interfaces } from \"garfish\";\n\nlet app: interfaces.App;\napp = await Garfish.loadApp('vue-app', {\n    cache: true,\n    basename,\n    domGetter: '#container',\n    entry: 'http://localhost:8092',\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"loadApp \u7684\u8fd4\u56de\u503c\u4e3a\u5b50\u5e94\u7528\u7684 App \u5b9e\u4f8b\u5bf9\u8c61\uff0c\u5b9e\u4f8b\u5bf9\u8c61\u4e0a\u5b58\u5728\u4e00\u4e9b\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u63d0\u4f9b\u7ed9\u5f00\u53d1\u8005\u7528\u4e8e\u624b\u52a8\u8fdb\u884c App \u7684\u6302\u8f7d\u3001\u9500\u6bc1\u53ca\u5224\u65ad App \u5f53\u524d\u5e94\u7528\u72b6\u6001\u7b49\u4fe1\u606f\uff1b")),(0,r.kt)("h3",{id:"\u5b9e\u4f8b\u5c5e\u6027"},"\u5b9e\u4f8b\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Highlight"},"  name: string "),(0,r.kt)("p",{parentName:"li"},"\u5e94\u7528\u540d\u79f0\uff0cstring\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Highlight"},"  mounted: boolean "),(0,r.kt)("p",{parentName:"li"},"\u5e94\u7528\u662f\u5426\u5df2\u6302\u8f7d\uff0cboolean\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u8868\u793a\u5df2\u6302\u8f7d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u8868\u793a\u672a\u6302\u8f7d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Highlight"},"  display: boolean "),(0,r.kt)("p",{parentName:"li"},"\u5e94\u7528\u662f\u5426\u88ab\u9690\u85cf\uff0cboolean\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u8868\u793a\u663e\u793a\u72b6\u6001\uff0c\u672a\u9690\u85cf\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u8868\u793a\u9690\u85cf\u6001\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Highlight"},"  strictIsolation: boolean "),(0,r.kt)("p",{parentName:"li"},"\u662f\u5426\u5f00\u542f\u4e25\u683c\u9694\u79bb\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u8868\u793a\u5df2\u5f00\u542f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u8868\u793a\u672a\u5f00\u542f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Highlight"},"  isHtmlMode: boolean "),(0,r.kt)("p",{parentName:"li"},"\u662f\u5426\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," \u5165\u53e3\u6a21\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Highlight"},"  appContainer: HTMLElement "),(0,r.kt)("p",{parentName:"li"},"\u5e94\u7528\u5bb9\u5668")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Highlight"},"  appInfo: AppInfo "),(0,r.kt)("p",{parentName:"li"},"\u5e94\u7528\u914d\u7f6e\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(l.Z,{mdxType:"Highlight"},"  hooks: interfaces.AppHooks "),"\u5e94\u7528\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570")),(0,r.kt)("h3",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"app.mount()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mount(): Promise<boolean>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u793a\u4f8b")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Garfish from \"garfish\";\nimport type { interfaces } from \"garfish\";\n\nconst app = await Garfish.loadApp('vue-app', {\n  cache: true,\n  basename,\n  domGetter: '#container',\n  entry: 'http://localhost:3000',\n});\nawait app.mount();\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u5b50\u5e94\u7528\u7684 ",(0,r.kt)(l.Z,{mdxType:"Highlight"}," \u6e32\u67d3")," \u6d41\u7a0b\u3002\u82e5\u5e94\u7528",(0,r.kt)("span",{style:{color:"#9b67f6"}}," \u5df2\u6302\u8f7d "),"\u3001\u6216",(0,r.kt)("span",{style:{color:"#9b67f6"}}," \u6b63\u5728\u6302\u8f7d\u4e2d "),"\u3001\u6216",(0,r.kt)("span",{style:{color:"#9b67f6"}}," \u6b63\u5728\u5378\u8f7d\u4e2d "),"\u5c06\u4e0d\u4f1a\u89e6\u53d1\u6e32\u67d3\u6d41\u7a0b\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5b50\u5e94\u7528\u6e32\u67d3\u524d\u5c06\u4f1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"beforeMount")," \u94a9\u5b50\u51fd\u6570\uff0c\u6e32\u67d3\u5b8c\u6210\u5c06\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"afterMount")," \u94a9\u5b50\u51fd\u6570\u5e76\u5c06\u5f53\u524d\u6302\u8f7d\u7684\u5e94\u7528 push \u8fdb ",(0,r.kt)("inlineCode",{parentName:"li"},"Garfish.activeApps"),"\u3002\u82e5\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u5f02\u5e38\u5c06\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"errorMountApp"),"\u94a9\u5b50\u51fd\u6570\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6b64\u8fc7\u7a0b\u4e2d\u5c06\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"provider")," \u63d0\u4f9b\u7684\u5b50\u5e94\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"render")," \u51fd\u6570\uff0c\u82e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider")," \u51fd\u6570\u672a\u627e\u5230\u5c06\u4f1a\u629b\u51fa\u9519\u8bef\u3002",(0,r.kt)("a",{parentName:"li",href:"/issues/#provider-is-null"},"\u5c1d\u8bd5\u89e3\u51b3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/guide/lifecycle#mount"},"mount \u8fc7\u7a0b\u4e2d\u90fd\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5"))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8bf7\u6ce8\u610f\uff1a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5bf9\u4e8e es module \u5b50\u5e94\u7528(\u5982 Vite \u5e94\u7528)\uff0c\u8def\u7531\u9a71\u52a8\u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u8d70\u7f13\u5b58\u6a21\u5f0f\u3002\u5b50\u5e94\u7528\u4e0d\u53ef\u91cd\u590d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.mount"),"\uff0c\u5e94\u7528\u4e8c\u6b21\u6e32\u67d3\u53ea\u80fd\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.show()"),"\uff1b"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"app.unmount()"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"unmount(): boolean;\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u5b50\u5e94\u7528\u7684 ",(0,r.kt)(l.Z,{mdxType:"Highlight"}," \u9500\u6bc1")," \u6d41\u7a0b\u3002\u82e5\u5e94\u7528",(0,r.kt)("span",{style:{color:"#9b67f6"}}," \u6b63\u5728\u5378\u8f7d\u4e2d "),"\uff0c\u5c06\u4e0d\u4f1a\u91cd\u590d\u5378\u8f7d\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5b50\u5e94\u7528\u6e32\u67d3\u524d\u5c06\u4f1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"beforeUnmount")," \u94a9\u5b50\u51fd\u6570\uff0c\u6e32\u67d3\u5b8c\u6210\u5c06\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"afterUnmount")," \uff0c\u82e5\u9500\u6bc1\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u5f02\u5e38\u5c06\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"errorUnmountApp")," \u94a9\u5b50\u51fd\u6570\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5378\u8f7d\u8fc7\u7a0b\u4e2d\u4f1a\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"provider")," \u5185\u90e8\u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"destroy")," \u51fd\u6570\u3002\u5378\u8f7d\u5b8c\u6210\u540e\uff0c\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u5bb9\u5668\u5c06\u88ab\u79fb\u9664\u3001\u5b50\u5e94\u7528\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4e5f\u5c06\u88ab\u9500\u6bc1\uff0c\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u526f\u4f5c\u7528\u4e5f\u90fd\u5c06\u4f1a\u88ab\u6e05\u9664\uff0c\u540c\u65f6\u5c06\u5b50\u5e94\u7528\u4ece\n",(0,r.kt)("inlineCode",{parentName:"li"},"Garfish.activeApps")," \u91cc\u79fb\u9664\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"mounted")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"display")," \u72b6\u6001\u7f6e\u4e3a false\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/guide/lifecycle#unmount"},"unmount \u8fc7\u7a0b\u4e2d\u90fd\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"app.show()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"show(): Promise<boolean>\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e6\u53d1\u5b50\u5e94\u7528\u7684 ",(0,r.kt)(l.Z,{mdxType:"Highlight"}," \u663e\u793a")," \u6d41\u7a0b\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Garfish from \"garfish\";\nimport type { interfaces } from \"garfish\";\n\nconst app = await Garfish.loadApp('vue-app', {\n  cache: true,\n  basename,\n  domGetter: '#container',\n  entry: 'http://localhost:3000',\n});\n// \u82e5\u5df2\u7ecf\u6e32\u67d3\u89e6\u53d1 show\uff0c\u53ea\u6709\u9996\u6b21\u6e32\u67d3\u89e6\u53d1 mount\uff0c\u540e\u9762\u6e32\u67d3\u90fd\u53ef\u4ee5\u89e6\u53d1 show \u63d0\u4f9b\u6027\u80fd\napp.mounted ? app.show() : await app.mount();\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e6\u53d1\u5b50\u5e94\u7528\u7684 ",(0,r.kt)(l.Z,{mdxType:"Highlight"}," \u663e\u793a")," \u6d41\u7a0b\u3002\u82e5\u5e94\u7528",(0,r.kt)("span",{style:{color:"#9b67f6"}}," \u5df2\u663e\u793a "),"\u3001\u6216",(0,r.kt)("span",{style:{color:"#9b67f6"}}," \u672a\u6302\u8f7d ")," \u5c06\u4e0d\u4f1a\u89e6\u53d1\u5e94\u7528\u6e32\u67d3\u6d41\u7a0b\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5b50\u5e94\u7528\u663e\u793a\u524d\u5c06\u4f1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeMount")," \u94a9\u5b50\u51fd\u6570\uff0c\u663e\u793a\u5b8c\u6210\u5c06\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"afterMount")," \u94a9\u5b50\u51fd\u6570\u5e76\u5c06\u5f53\u524d\u6302\u8f7d\u7684\u5e94\u7528 push \u8fdb ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.activeApps"),"\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6b64\u8fc7\u7a0b\u4e2d\u5c06\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," \u63d0\u4f9b\u7684\u5b50\u5e94\u7528 render \u51fd\u6570\uff0c\u82e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," \u51fd\u6570\u672a\u627e\u5230\u5c06\u4f1a\u629b\u51fa\u9519\u8bef\u3002",(0,r.kt)("a",{parentName:"p",href:"/issues/#provider-is-null"},"\u5c1d\u8bd5\u89e3\u51b3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/guide/lifecycle#show"},"show \u8fc7\u7a0b\u4e2d\u90fd\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5")))))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8bf7\u6ce8\u610f\uff1a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"app.show()")," \u7528\u4e8e\u89e6\u53d1\u5b50\u5e94\u7528\u7684\u663e\u793a\u6d41\u7a0b\uff0c\u6b64\u8fc7\u7a0b\u5e76\u4e0d\u662f css \u4e2d\u6837\u5f0f\u7684\u663e\u793a\u6216\u9690\u85cf\uff0cshow() \u65b9\u6cd5\u4f1a\u89e6\u53d1\u5b50\u5e94\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"render")," \u51fd\u6570\uff0c\u82e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"render")," \u51fd\u6570\u4e2d\u5b58\u5728\u526f\u4f5c\u7528\u4e5f\u4f1a\u518d\u6b21\u6267\u884c\uff1b"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"app.show()")," \u5728\u5e94\u7528\u6e32\u67d3\u7684\u8fc7\u7a0b\u4e2d\u5c06\u4f1a\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"provider")," \u4e2d\u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"render")," \u51fd\u6570\uff0c\u4f46\u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"app.mount()")," \u4e0d\u540c\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"app.show()")," \u4e0d\u4f1a\u521b\u5efa\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u57fa\u4e8e\u8def\u7531\u9a71\u52a8\u5b50\u5e94\u7528\u52a0\u8f7d\u6a21\u5f0f\u4e0b\uff0c\u82e5\u5df2\u542f\u7528\u7f13\u5b58(",(0,r.kt)("inlineCode",{parentName:"li"},"cache: true"),")\uff0c\u5219\u4f1a\u9ed8\u8ba4\u4f7f\u7528 show() \u89e6\u53d1\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u3002\u82e5\u672a\u5f00\u542f\u7f13\u5b58\u6a21\u5f0f\uff0c\u5219\u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.mount()")," \u6e32\u67d3\u5b50\u5e94\u7528\u3002\u975e\u8def\u7531\u9a71\u52a8\u6a21\u5f0f\u4e0b\uff0c\u7531\u5f00\u53d1\u8005\u63a7\u5236\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u548c\u9500\u6bc1\uff1b")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"app.hide()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"hide(): boolean;\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e6\u53d1\u5b50\u5e94\u7528\u7684 ",(0,r.kt)(l.Z,{mdxType:"Highlight"}," \u9690\u85cf")," \u6d41\u7a0b\u3002\u82e5\u5e94\u7528",(0,r.kt)("span",{style:{color:"#9b67f6"}}," \u672a\u663e\u793a "),"\u3001\u6216",(0,r.kt)("span",{style:{color:"#9b67f6"}}," \u672a\u6302\u8f7d ")," \u5c06\u4e0d\u4f1a\u89e6\u53d1\u5e94\u7528\u9690\u85cf\u6d41\u7a0b\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5b50\u5e94\u7528\u9690\u85cf\u524d\u5c06\u4f1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeUnmount")," \u94a9\u5b50\u51fd\u6570\uff0c\u9690\u85cf\u5b8c\u6210\u5c06\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"afterUnmount")," \u94a9\u5b50\u51fd\u6570\u5e76\u5c06\u5f53\u524d\u9690\u85cf\u7684\u5e94\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.activeApps")," \u4e2d\u79fb\u9664\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6b64\u8fc7\u7a0b\u4e2d\u5c06\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," \u63d0\u4f9b\u7684\u5b50\u5e94\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"destory")," \u51fd\u6570\u3002\u5f53\u79fb\u9664\u5b8c\u6210\uff0c\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u5bb9\u5668\u4e5f\u5c06\u88ab\u79fb\u9664\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/guide/lifecycle#hide"},"hide \u8fc7\u7a0b\u4e2d\u90fd\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5")))))))}c.isMDXComponent=!0}}]);