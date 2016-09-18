webpackJsonp([42,135],{580:function(n,a,s){n.exports={"arrow-point-at-center":s(1502),basic:s(1503),placement:s(1504)}},1502:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(159),s(129)),e=t(p),o=(s(6),s(4)),c=t(o),l=s(1),u=t(l),k=s(2);t(k);n.exports={content:[["p","\u8bbe\u7f6e\u4e86 ",["code","arrowPointAtCenter"]," \u540e\uff0c\u7bad\u5934\u5c06\u6307\u5411\u76ee\u6807\u5143\u7d20\u7684\u4e2d\u5fc3\u3002"]],meta:{order:2,title:"\u7bad\u5934\u6307\u5411",filename:"components/tooltip/demo/arrow-point-at-center.md",id:"components-tooltip-demo-arrow-point-at-center"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tooltip<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>topLeft<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u63d0\u793a\u6587\u5b57</span> <span class="token attr-name" >\u63d0\u793a\u6587\u5b57"</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u9ed8\u8ba4\u5bf9\u9f50\u5143\u7d20\u8fb9\u7f18<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>topLeft<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u63d0\u793a\u6587\u5b57</span> <span class="token attr-name" >\u63d0\u793a\u6587\u5b57"</span> <span class="token attr-name" >arrowPointAtCenter</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u7bad\u5934\u6307\u5411\u76ee\u6807\u5143\u7d20\u7684\u4e2d\u5fc3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",null,u["default"].createElement(e["default"],{placement:"topLeft",title:"\u63d0\u793a\u6587\u5b57 \u63d0\u793a\u6587\u5b57"},u["default"].createElement(c["default"],null,"\u9ed8\u8ba4\u5bf9\u9f50\u5143\u7d20\u8fb9\u7f18")),u["default"].createElement(e["default"],{placement:"topLeft",title:"\u63d0\u793a\u6587\u5b57 \u63d0\u793a\u6587\u5b57",arrowPointAtCenter:!0},u["default"].createElement(c["default"],null,"\u7bad\u5934\u6307\u5411\u76ee\u6807\u5143\u7d20\u7684\u4e2d\u5fc3")))},style:"\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n  margin-bottom: 1em;\n}\n"}},1503:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(159),s(129)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/tooltip/demo/basic.md",id:"components-tooltip-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tooltip <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u63d0\u793a\u6587\u5b57<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u9f20\u6807\u79fb\u4e0a\u6765\u5c31\u4f1a\u51fa\u73b0\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{title:"\u63d0\u793a\u6587\u5b57"},c["default"].createElement("span",null,"\u9f20\u6807\u79fb\u4e0a\u6765\u5c31\u4f1a\u51fa\u73b0\u63d0\u793a"))}}},1504:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(159),s(129)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u4f4d\u7f6e\u6709 12 \u4e2a\u65b9\u5411\u3002"]],meta:{order:1,title:"\u4f4d\u7f6e",filename:"components/tooltip/demo/placement.md",id:"components-tooltip-demo-placement"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tooltip <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> text <span class="token operator" >=</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u63d0\u793a\u6587\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >60</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>topLeft<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u5de6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>top<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>topRight<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u53f3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> float<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leftTop<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5de6\u4e0a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>left<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5de6\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leftBottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5de6\u4e0b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >270</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>rightTop<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53f3\u4e0a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53f3\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>rightBottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53f3\u4e0b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> clear<span class="token punctuation" >:</span> <span class="token string" >\'both\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottomLeft<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u53f3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0b\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tooltip</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottomRight<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0b\u53f3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tooltip</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].createElement("span",null,"\u63d0\u793a\u6587\u5b57");return c["default"].createElement("div",null,c["default"].createElement("div",{style:{marginLeft:60}},c["default"].createElement(e["default"],{placement:"topLeft",title:n},c["default"].createElement("a",{href:"#"},"\u4e0a\u5de6")),c["default"].createElement(e["default"],{placement:"top",title:n},c["default"].createElement("a",{href:"#"},"\u4e0a\u8fb9")),c["default"].createElement(e["default"],{placement:"topRight",title:n},c["default"].createElement("a",{href:"#"},"\u4e0a\u53f3"))),c["default"].createElement("div",{style:{width:60,"float":"left"}},c["default"].createElement(e["default"],{placement:"leftTop",title:n},c["default"].createElement("a",{href:"#"},"\u5de6\u4e0a")),c["default"].createElement(e["default"],{placement:"left",title:n},c["default"].createElement("a",{href:"#"},"\u5de6\u8fb9")),c["default"].createElement(e["default"],{placement:"leftBottom",title:n},c["default"].createElement("a",{href:"#"},"\u5de6\u4e0b"))),c["default"].createElement("div",{style:{width:60,marginLeft:270}},c["default"].createElement(e["default"],{placement:"rightTop",title:n},c["default"].createElement("a",{href:"#"},"\u53f3\u4e0a")),c["default"].createElement(e["default"],{placement:"right",title:n},c["default"].createElement("a",{href:"#"},"\u53f3\u8fb9")),c["default"].createElement(e["default"],{placement:"rightBottom",title:n},c["default"].createElement("a",{href:"#"},"\u53f3\u4e0b"))),c["default"].createElement("div",{style:{marginLeft:60,clear:"both"}},c["default"].createElement(e["default"],{placement:"bottomLeft",title:n},c["default"].createElement("a",{href:"#"},"\u4e0a\u53f3")),c["default"].createElement(e["default"],{placement:"bottom",title:n},c["default"].createElement("a",{href:"#"},"\u4e0b\u8fb9")),c["default"].createElement(e["default"],{placement:"bottomRight",title:n},c["default"].createElement("a",{href:"#"},"\u4e0b\u53f3"))))},style:"\n#components-tooltip-demo-placement a {\n  display: inline-block;\n  line-height: 32px;\n  height: 32px;\n  width: 60px;\n  font-size: 14px;\n  text-align: center;\n  background: #f5f5f5;\n  margin-right: 1em;\n  margin-bottom: 1em;\n  border-radius: 6px;\n}\n"}}});