(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),a=n(16),l=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(j);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},d=n(5),u=n(22),h=[{index:!0,label:"Aidan Capaldi",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,onClick:function(){return a(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(d.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},x=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(d.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Aidan Capaldi"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:aidancapaldi@outlook.com",children:"aidancapaldi@outlook.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Aidan. I am an undergraduate at ",Object(c.jsx)("a",{href:"https://www.northeastern.edu/",children:"Northeastern University"})," seeking coop employment this upcoming term Summer into Fall 2022."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(d.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(d.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(x.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Aidan Capaldi ",Object(c.jsx)(d.b,{to:"/",children:"aidancapaldi.github.io/personal-site"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Aidan Capaldi",defaultTitle:"Aidan Capaldi",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Aidan Capaldi's personal website."};t.a=k},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),a=n(30),l=n(31),s=n(32),r=n(33),o=n(34),j=n(35),b=n(36),d=[{link:"https://github.com/mldangelo",label:"Github",icon:a.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:b.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),l=n(15),s=n(5),r=n(3),o=n(21),j=(n(49),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,169))}))),b=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,176))})),d=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,170))})),u=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,171))})),h=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,175))})),O=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,173))})),m=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,174))})),p=function(){return Object(c.jsx)(s.a,{basename:"/personal-site",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:u,status:404})]})})})},x=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(x,{}),f):Object(l.render)(Object(c.jsx)(x,{}),f)}},[[50,1,3]]]);
//# sourceMappingURL=main.31676a69.chunk.js.map