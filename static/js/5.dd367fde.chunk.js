(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{168:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),a=n(5),i=n(21),c=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},p=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};p.defaultProps={data:[]};var d=p;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}var g=n(58),v=n(56),O=function(e){var t=e.handleClick,n=e.active,o=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[o]?"skillbutton-active":""),type:"button",onClick:function(){return t(o)},children:o})},x=function(e){var t=e.data,n=e.categories,o=t.category,a=t.competency,i=t.title,c={background:n.filter((function(e){return o.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:c,children:Object(r.jsx)("span",{children:i})}),Object(r.jsx)("div",{className:"skillbar-bar",style:s}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};x.defaultProps={categories:[]};var k=x,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,o,a=h(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),o&&b(t,o),i}(o.Component);S.defaultProps={skills:[],categories:[]};var w=S,D=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(a.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},C=[{school:"Mumbai University",degree:"Bachelors in Computer Engineering",link:"https://mu.ac.in/",year:2011}],N=[{company:"Dassault Systemes",position:"Research and Development Manager",link:"https://www.3ds.com/",daterange:"August 2020 - Present",points:["Led the team of 4 Engineers and 3 Testers.","Coach and mentor junior Engineers.","Working effectively with other developers, Test Engineers and Business Analysts.","Development and Enhancement of Data Migration tool.","Design and Development of Import Feature for our customers.","Plan future releases and scope of work.","Leading and participating in design discussions within and outside the team.","Participate effectively in release activities (Release Tech Coordinator).","Ensured best practices like Code Reviews, Clean Code and TDD are followed properly by team.","Ensured timely delivery of development projects through effectively leading, motivating and managing team.","Led Scrum Master responsibilities."]},{company:"Technogise",position:"Application Developer",link:"https://technogise.com/",daterange:"February 2020 - August 2020",points:["Development of web applications using Clean Code practices and Agile methodologies."]},{company:"Volkswagen IT Services",position:"Senior Software Engineer",link:"https://vwits.in/",daterange:"September 2017 - February 2020",points:["Development of microservices as per 12 Factor App methodology.","Experience in development of complex concourse pipelines which creates pipelines at runtime for newly added applications.","Experience in development of network application using Java Sockets and Multithreading.","Coach and mentor Junior Engineers","Bootstrapped an in house Devops team","Development of backend services for VR App","Project methodology - Agile (XP), TDD, Pair programming, Continuous Integration, Continuous Delivery."]},{company:"Dassault Systemes",position:"Senior Software Engineer",link:"https://www.3ds.com/",daterange:"April 2013 - September 2017",points:["Development of monolithic web applications using Java, Struts","Experience in building cross platform applications using C++","Experience in development of Distributed systems using Java sockets and RPC","Developed an in house testing tool using C++ for performance/efficiency/memory testing","Developed an application for Impact Analysis using C#, Perl and MySQL"]},{company:"Liveweaver India Pvt Ltd",position:"Software Engineer",daterange:"November 2011 - April 2013",points:["Analyzing audio to identify phonemes","Converting time domain data into frequency domain data using FFT","Built a parser to identify phonemes from syllables"]}],P=n(17);var E=n(23);var A,L=[{title:"Javascript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:2,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:4,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:2,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:1,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"Git/Mercurial/SVN",competency:3,category:["Tools"]},{title:"HTML + SASS/SCSS/CSS",competency:2,category:["Web Development","Languages"]},{title:"Python",competency:2,category:["Languages","Python"]},{title:"C++",competency:4,category:["Languages"]},{title:"Rust",competency:2,category:["Languages"]},{title:"Java",competency:4,category:["Languages"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Docker",competency:3,category:["CI/CD"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),R=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2"],T=(A=new Set(L.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(P.a)(e)}(A)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(A)||Object(E.a)(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:R[t]}})),J=["Education","Experience","Skills","References"];t.default=function(){return Object(r.jsx)(i.a,{title:"Resume",description:"Shoyeb Inamdar's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:J.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:C}),Object(r.jsx)(d,{data:N}),Object(r.jsx)(w,{skills:L,categories:T}),Object(r.jsx)(D,{})]})})}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(58);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},58:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.dd367fde.chunk.js.map