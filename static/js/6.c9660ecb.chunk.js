(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{171:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n(5),s=n(21),i=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(i,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var b=d;function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f(this,n)}}var g=n(55),O=n(54),v=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},x=function(e){var t=e.data,n=e.categories,a=t.category,c=t.competency,s=t.title,i={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(O.a)(Object(O.a)({},i),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:i,children:Object(r.jsx)("span",{children:s})}),Object(r.jsx)("div",{className:"skillbar-bar",style:o}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[c," / 5"]})]})};x.defaultProps={categories:[]};var k=x,N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,a,c=y(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=s,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&h(t.prototype,n),a&&h(t,a),s}(a.Component);N.defaultProps={skills:[],categories:[]};var S=N,w=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};w.defaultProps={last:!1};var C=w,E=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};E.defaultProps={data:[]};var D=E,P=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(c.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},A=[{title:"Algorithms and Data",number:"CS 3000",link:"https://catalog.northeastern.edu/search/?P=CS%203000",university:"Northeastern"},{title:"Discrete Structures",number:"CS 1800",link:"https://catalog.northeastern.edu/search/?P=CS%201800",university:"Northeastern"},{title:"Programming in C++",number:"CS 3520",link:"https://catalog.northeastern.edu/search/?search=cs+3520",university:"Northeastern"},{title:"Fundamentals of Computer Science 2",number:"CS 2510",link:"https://catalog.northeastern.edu/search/?search=CS+2510",university:"Northeastern"},{title:"Database Design",number:"CS 3200",link:"https://catalog.northeastern.edu/search/?search=CS+3200",university:"Northeastern"},{title:"Fundamentals of Networks",number:"EECE 2540",link:"https://catalog.northeastern.edu/search/?search=EECE+2540",university:"Northeastern"},{title:"Cornerstone of Engineering 2",number:"GE 1502",link:"https://catalog.northeastern.edu/search/?search=GE+1502",university:"Northeastern"},{title:"Embedded Design: Enabling Robotics",number:"EECE 2160",link:"https://catalog.northeastern.edu/search/?search=EECE+2160",university:"Northeastern"},{title:"Fundamentals of Digital Design and Computer Organization",number:"EECE 2322",link:"https://catalog.northeastern.edu/search/?search=EECE+2322",university:"Northeastern"},{title:"Calculus 3 for Engineering",number:"MATH 2321",link:"https://catalog.northeastern.edu/search/?search=MATH+2321",university:"Northeastern"},{title:"Differential Equations and Linear Algebra for Engineering",number:"MATH 2341",link:"https://catalog.northeastern.edu/search/?search=MATH+2341",university:"Northeastern"}],L=[{school:"Northeastern University",degree:"B.S. Computer Engineering and Computer Science",link:"https://www.northeastern.edu/",year:2024},{school:"Narragansett High School",degree:"Diploma",link:"http://nhs.nssk12.org/",year:2019}],R=[{company:"Delta Dental of RI",position:"Software Engineering Co-op",link:"https://www.deltadentalri.com/",daterange:"July 2022 - December 2022",points:["Designed and implemented a company-wide intranet site. Used XML, PowerApps, SharePoint.","Reworked existing C# codebases. Refactored company API\u2019s to facilitate interactions between lines of business","Administrated Oracle databases in, writing queries, solving employee tickets, and unlocking users.","Assisted in the writing and design of interactions between an AI third-party to automate claims."]},{company:"ProEarth Tech",position:"Computer Technician",link:"https://www.ebay.com/str/proearthtech",daterange:"Summers 2020-2022",points:["Repaired all models of laptops by hand, including HP, Dell, Lenovo, Acer, Asus and more.","Refurbished desktops including PC\u2019s and iMacs.","Partitioned and wiped drives using software such as Parted Magic and DBAN."]},{company:"Narragansett School Systems",position:"IT Intern",link:"http://nhs.nssk12.org/",daterange:"September 2018 - May 2019",points:["Repaired all models of laptops by hand, mainly Dell models.","Imaged multiple machines across networks."]}],T=n(17);var M=n(24);var J,I=[{title:"Javascript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:4,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"MongoDB",competency:4,category:["Web Development","Databases"]},{title:"Oracle",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"Azure DevOps",competency:3,category:["Tools"]},{title:"Vivado Suite",competency:4,category:["Tools"]},{title:"Typescript",competency:1,category:["Web Development","Languages","Javascript"]},{title:"HTML/CSS",competency:1,category:["Web Development","Languages"]},{title:"Python",competency:3,category:["Languages","Python"]},{title:"C++",competency:5,category:["Languages"]},{title:"C",competency:5,category:["Languages"]},{title:"C#",competency:4,category:["Languages"]},{title:"ASM",competency:2,category:["Languages"]},{title:"Java",competency:4,category:["Languages"]},{title:"Verilog",competency:3,category:["Languages"]},{title:"SystemVerilog",competency:3,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]}].map((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:e.category.sort()})})),W=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],H=(J=new Set(I.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(T.a)(e)}(J)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(J)||Object(M.a)(J)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:W[t]}})),_=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(r.jsx)(s.a,{title:"Resume",description:"Aidan Capaldi's Resume.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(c.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:_.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:L}),Object(r.jsx)(b,{data:R}),Object(r.jsx)(S,{skills:I,categories:H}),Object(r.jsx)(D,{data:A}),Object(r.jsx)(P,{})]})})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(55);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},55:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.c9660ecb.chunk.js.map