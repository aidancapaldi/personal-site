(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[12],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a(5),r=a(21),i=function(e){var t=e.label,a=e.link,s=e.value,c=e.format;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"70%",children:t}),Object(n.jsx)("td",{children:a?Object(n.jsx)("a",{href:a,children:c(s)}):c(s)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,u=function(e){var t=e.data;return Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},o=a(23),j=function(){var e=Object(s.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("2001-03-16T16:02:00");c(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(n.jsx)(n.Fragment,{children:a})},b=[{key:"age",label:"Current age",value:Object(n.jsx)(j,{})},{key:"countries",label:"Countries visited",value:5,link:"https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2"},{key:"location",label:"Current city",value:"Boston, MA"}],d=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Some stats about me"}),Object(n.jsx)(u,{data:b})]})},h=a(158),f=a.n(h),O=a(54),p=a(160),x=a(70),m=a.n(x),v=[{label:"Last updated at",key:"pushed_at",link:"https://github.com/aidancapaldi/personal-site/commits",format:function(e){return m()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:""}],k=function(){var e=Object(s.useState)(v),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(s.useCallback)(Object(p.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(v.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(s.useEffect)((function(){r()}),[r]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Some stats about this site"}),Object(n.jsx)(u,{data:a})]})};t.default=function(){return Object(n.jsx)(r.a,{title:"Stats",description:"Some statistics about Aidan Capaldi and his site",children:Object(n.jsxs)("article",{className:"post",id:"stats",children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(c.b,{to:"/stats",children:"Stats"})})})}),Object(n.jsx)(d,{}),Object(n.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=12.06e56bc0.chunk.js.map