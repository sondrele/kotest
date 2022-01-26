"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3699],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=s,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9628:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),i=["components"],a={id:"extension_examples",title:"Extension Examples",slug:"extension-examples.html",sidebar_label:"Examples"},l=void 0,c={unversionedId:"framework/extensions/extension_examples",id:"framework/extensions/extension_examples",isDocsHomePage:!1,title:"Extension Examples",description:"System Out Listener",source:"@site/docs/framework/extensions/examples.md",sourceDirName:"framework/extensions",slug:"/framework/extensions/extension-examples.html",permalink:"/docs/framework/extensions/extension-examples.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/extensions/examples.md",tags:[],version:"current",frontMatter:{id:"extension_examples",title:"Extension Examples",slug:"extension-examples.html",sidebar_label:"Examples"},sidebar:"framework",previous:{title:"Advanced Extensions",permalink:"/docs/framework/extensions/advanced-extensions.html"},next:{title:"Test Coroutine Dispatcher",permalink:"/docs/framework/coroutines/test-coroutine-dispatcher.html"}},u=[{value:"System Out Listener",id:"system-out-listener",children:[],level:3},{value:"Timer Listener",id:"timer-listener",children:[],level:3}],p={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"system-out-listener"},"System Out Listener"),(0,o.kt)("p",null,"A real example of an extension, is the ",(0,o.kt)("inlineCode",{parentName:"p"},"NoSystemOutListener")," which comes with Kotest.\nThis extension throws an error if any output is written to standard out."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTestSpec : DescribeSpec({\n\n    listener(NoSystemOutListener)\n\n    describe("All these tests should not write to standard out") {\n        it("silence in the court") {\n          println("boom") // failure\n        }\n    }\n})\n')),(0,o.kt)("h3",{id:"timer-listener"},"Timer Listener"),(0,o.kt)("p",null,"Another example would be if we wanted to log the time taken for each test case.\nWe can do this by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeTest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterTest")," functions as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'object TimerListener : BeforeTestListener, AfterTestListener {\n\n  var started = 0L\n\n  override fun beforeTest(testCase: TestCase): Unit {\n    started = System.currentTimeMillis()\n  }\n\n  override fun afterTest(testCase: TestCase, result: TestResult): Unit {\n    println("Duration of ${testCase.description} = " + (System.currentTimeMillis() - started))\n  }\n}\n')),(0,o.kt)("p",null,"Then we can register like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyTestClass : FunSpec({\n  extensions(TimerListener)\n  // tests here\n})\n")),(0,o.kt)("p",null,"Or we could register it project wide:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"object MyConfig : AbstractProjectConfig() {\n    override fun extensions(): List<Extension> = listOf(TimerListener)\n}\n")))}m.isMDXComponent=!0}}]);