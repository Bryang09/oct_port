(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(33)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),l=a.n(o),s=(a(20),a(22),function(){return n.a.createElement("div",{className:"Hero"},n.a.createElement("h1",null,"Bryan ",n.a.createElement("span",null,"Gonzalez")),n.a.createElement("h2",null,"Front End Developer"),n.a.createElement("h3",null,"My name is Bryan Gonzalez and I am a Front End Developer. Based in Houston, TX , I am currently searching for a Front End or Junior position."))}),c=a(8),i=a(9),m=a(12),u=a(10),h=a(13),d=(a(24),function(e){return e.list.map(function(e){return n.a.createElement("div",{className:"Project",key:e.id,style:{backgroundImage:"url(".concat(e.src,")"),backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},n.a.createElement("div",{className:"Text"},n.a.createElement("h2",null,e.title),n.a.createElement("h3",null,e.desc),n.a.createElement("div",{className:"options"},n.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Demo"},"Demo")),n.a.createElement("a",{href:e.code,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Code"},"Code")))))})}),p=function(e){return e.list.filter(function(e){return e.react}).map(function(e){return n.a.createElement("div",{className:"Project",key:e.id,style:{backgroundImage:"url(".concat(e.src,")"),backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},n.a.createElement("div",{className:"Text"},n.a.createElement("h2",null,e.title),n.a.createElement("h3",null,e.desc),n.a.createElement("div",{className:"options"},n.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Demo"},"Demo")),n.a.createElement("a",{href:e.code,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Code"},"Code")))))})},f=function(e){return e.list.filter(function(e){return e.reactrouter}).map(function(e){return n.a.createElement("div",{className:"Project",key:e.id,style:{backgroundImage:"url(".concat(e.src,")"),backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},n.a.createElement("div",{className:"Text"},n.a.createElement("h2",null,e.title),n.a.createElement("h3",null,e.desc),n.a.createElement("div",{className:"options"},n.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Demo"},"Demo")),n.a.createElement("a",{href:e.code,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Code"},"Code")))))})},g=function(e){return e.list.filter(function(e){return e.sass}).map(function(e){return n.a.createElement("div",{className:"Project",key:e.id,style:{backgroundImage:"url(".concat(e.src,")"),backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},n.a.createElement("div",{className:"Text"},n.a.createElement("h2",null,e.title),n.a.createElement("h3",null,e.desc),n.a.createElement("div",{className:"options"},n.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Demo"},"Demo")),n.a.createElement("a",{href:e.code,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Code"},"Code")))))})},E=function(e){return e.list.filter(function(e){return e.axios}).map(function(e){return n.a.createElement("div",{className:"Project",key:e.id,style:{backgroundImage:"url(".concat(e.src,")"),backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},n.a.createElement("div",{className:"Text"},n.a.createElement("h2",null,e.title),n.a.createElement("h3",null,e.desc),n.a.createElement("div",{className:"options"},n.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Demo"},"Demo")),n.a.createElement("a",{href:e.code,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Code"},"Code")))))})},b=function(e){return e.list.filter(function(e){return e.flexbox}).map(function(e){return n.a.createElement("div",{className:"Project",key:e.id,style:{backgroundImage:"url(".concat(e.src,")"),backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}},n.a.createElement("div",{className:"Text"},n.a.createElement("h2",null,e.title),n.a.createElement("h3",null,e.desc),n.a.createElement("div",{className:"options"},n.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Demo"},"Demo")),n.a.createElement("a",{href:e.code,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h5",{className:"Code"},"Code")))))})},x=function(e){return n.a.createElement("div",{className:"Categories"},n.a.createElement("h5",{onClick:e.onAll,className:e.all?"Fill":null},"All"),n.a.createElement("h5",{onClick:e.onReact,className:e.react?"Fill":null},"React"),n.a.createElement("h5",{onClick:e.onRouter,className:e.reactr?"Fill":null},"React-Router"),n.a.createElement("h5",{onClick:e.onAxios,className:e.axios?"Fill":null},"Axios"),n.a.createElement("h5",{onClick:e.onFlexBox,className:e.flexbox?"Fill":null},"Flexbox"),n.a.createElement("h5",{onClick:e.onSass,className:e.sass?"Fill":null},"Sass"))},k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={projects:[{id:0,src:"trainer.png",title:"Trainer App",desc:"This is a landing page for a personal trainer.",react:!0,reactrouter:!1,axios:!1,flexbox:!0,sass:!0,code:"https://github.com/Bryang09/trainer",demo:"https://bryang09.github.io/trainer/#/"},{id:1,src:"restaurant.jpg",title:"Restaurant App",desc:"A restaurant application for a fictional restaurant",react:!0,reactrouter:!0,axios:!1,flexbox:!0,sass:!1,code:"https://github.com/Bryang09/restaurant",demo:"https://bryang09.github.io/restaurant/#/"},{id:2,src:"glasses.png",title:"The Glasses App",desc:"A landing page for an online glasses retailer",react:!0,reactrouter:!1,axios:!1,flexbox:!0,sass:!1,code:"https://github.com/Bryang09/glasses",demo:"https://bryang09.github.io/glasses/#/"},{id:3,src:"movies.jpg",title:"The Movies App",desc:"An application that makes use of the MovieDB api, this app gives a description for any movie.",react:!0,reactrouter:!1,axios:!0,flexbox:!0,sass:!1,code:"https://github.com/Bryang09/movies",demo:"https://bryang09.github.io/movies/#/"},{id:4,src:"recipes.png",title:"The Recipes App",desc:"An application that makes use of the Food2Fork api, this app will search for any recipe.",react:!0,reactrouter:!0,axios:!0,flexbox:!0,sass:!1,code:"https://github.com/Bryang09/recipes",demo:"https://bryang09.github.io/recipes/#/"},{id:5,src:"shelter.png",title:"The Shelter App",desc:"An application that makes use of the PetFinder api, this app will search for any shelter/pet near you.",react:!0,reactrouter:!0,axios:!0,flexbox:!0,sass:!1,code:"https://github.com/Bryang09/shelter",demo:"https://bryang09.github.io/shelter/#/"}],all:!0,react:!1,reactr:!1,axios:!1,flexbox:!1,sass:!1},a.onAll=function(){a.setState({all:!a.state.all,react:!1,reactr:!1,axios:!1,flexbox:!1,sass:!1})},a.onReact=function(){a.setState({all:!1,react:!a.state.react,reactr:!1,axios:!1,flexbox:!1,sass:!1})},a.onRouter=function(){a.setState({all:!1,react:!1,reactr:!0,axios:!1,flexbox:!1,sass:!1})},a.onSass=function(){a.setState({all:!1,react:!1,reactr:!1,axios:!1,flexbox:!1,sass:!a.state.sass})},a.onAxios=function(){a.setState({all:!1,react:!1,reactr:!1,axios:!a.state.axios,flexbox:!1,sass:!1})},a.onFlexBox=function(){a.setState({all:!1,react:!1,reactr:!1,axios:!1,flexbox:!a.state.flexbox,sass:!1})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Projects"},n.a.createElement("h1",null,"My ",n.a.createElement("span",null,"Projects")),n.a.createElement("div",{className:"Categories"},n.a.createElement(x,{onAll:this.onAll,all:this.state.all,onReact:this.onReact,react:this.state.react,onRouter:this.onRouter,onAxios:this.onAxios,axios:this.state.axios,onFlexBox:this.onFlexBox,flexbox:this.state.flexbox,onSass:this.onSass,sass:this.state.sass})),n.a.createElement("div",{className:"ProjectsDiv"},this.state.all?n.a.createElement(d,{list:this.state.projects}):this.state.react?n.a.createElement(p,{list:this.state.projects}):this.state.reactr?n.a.createElement(f,{list:this.state.projects}):this.state.sass?n.a.createElement(g,{list:this.state.projects}):this.state.axios?n.a.createElement(E,{list:this.state.projects}):this.state.flexbox?n.a.createElement(b,{list:this.state.projects}):null))}}]),t}(r.Component),v=(a(26),function(){return n.a.createElement("div",{className:"About"},n.a.createElement("h1",null,"About Me"),n.a.createElement("h3",null,"My name is Bryan Gonzalez and I am a 22 year old Front End Developer. I am based in Houston,TX and am actively looking for a Front End or Junior Developer position. I am well versed in HTML5, CSS3, Vanilla Js, ES6, and React. I learned most of my skills from Udemy, Team Treehouse, YouTube, and most importantly, through Trial and Error. I have spent the last 9 months developing my skills full time, and I know I now posses the skills to be a valuable asset. If you're willing to give me an opportunity, I guarantee you won't regret it."),n.a.createElement("h5",null,"Feel Free To Contact Me"),n.a.createElement("div",{className:"Icons"},n.a.createElement("a",{href:"https://github.com/Bryang09",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-github fa-3x"})),n.a.createElement("a",{href:"https://github.com/Bryang09",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-linkedin fa-3x"})),n.a.createElement("a",{href:"https://github.com/Bryang09",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fas fa-envelope fa-3x"}))))}),y=(a(28),function(){return n.a.createElement("div",{className:"Home"},n.a.createElement(s,null),n.a.createElement(v,null),n.a.createElement(k,null))}),N=a(36),A=a(35),j=function(){return n.a.createElement(N.a,null,n.a.createElement(A.a,{exact:!0,path:"/",component:y}))},C=a(34);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(C.a,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.7270a2ba.chunk.js.map