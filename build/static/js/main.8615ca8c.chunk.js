(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(6),a=s.n(n),r=s(3),o=(s(18),s(51)),l=s(52),j=s(10),d=s.n(j),m=s(0);function b(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"#intro",className:"logo",children:"genius."}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(o.a,{className:"icon"}),Object(m.jsx)("span",{children:"+254727095691"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(l.a,{className:"icon"}),Object(m.jsx)("span",{children:"duncanodhiamboabonyo@gmail.com"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(d.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://github.com/duncanodhis/",children:"Github"})})]})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(m.jsx)("span",{className:"line1"}),Object(m.jsx)("span",{className:"line2"}),Object(m.jsx)("span",{className:"line3"})]})})]})})}s(28);var h=s(11);function p(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(h.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Software Developer","2D game Developer","Data scientist"]})}),[]),Object(m.jsxs)("div",{className:"intro",id:"intro",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:"assets/im4.png",alt:""})})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:"Hi There, I'm"}),Object(m.jsx)("h1",{children:"Duncan Abonyo"}),Object(m.jsxs)("h3",{children:["Freelance ",Object(m.jsx)("span",{ref:e})]})]}),Object(m.jsx)("a",{href:"#portfolio",children:Object(m.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(29);function u(e){var t=e.id,s=e.title,c=e.active,i=e.setSelected;return Object(m.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return i(t)},children:s})}s(30);var O=[{id:1,title:"Software Developer",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"}],x=[{id:1,title:"Data Scientist",img:"https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"}],f=[{id:1,title:"Game Development",img:"https://store-images.s-microsoft.com/image/apps.11406.13946816594797231.c39021a5-70df-48af-b09e-a64ae56a3f1d.69e1c4a4-7891-40b6-9a3f-ce49c237fe7c?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg"}],g=[{id:1,title:"Design Social Media App",img:"https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900"}];function v(){var e=Object(c.useState)("featured"),t=Object(r.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)([]),a=Object(r.a)(n,2),o=a[0],l=a[1];return Object(c.useEffect)((function(){switch(s){case"web":l(x);break;case"Game Developer":l(f);break;case"Data Scientist":l(g);break;default:l(O)}}),[s]),Object(m.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(m.jsx)("h1",{children:"Portfolio"}),Object(m.jsx)("ul",{children:[{id:"Software Developer",title:"Web App"},{id:"Game Developer",title:"Mobile App"},{id:"Data Scientist",title:"Design"}].map((function(e){return Object(m.jsx)(u,{title:e.title,active:s===e.id,setSelected:i,id:e.id})}))}),Object(m.jsx)("div",{className:"container",children:o.map((function(e){return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("img",{src:e.img,alt:""}),Object(m.jsx)("h3",{children:e.title})]})}))})]})}s(31);s(32);function N(){return Object(m.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(m.jsx)("h1",{children:"Testimonials"}),Object(m.jsx)("div",{className:"container",children:[{id:1,name:"Benjamin Manyanky",title:"Real Estate Investor",img:"https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&h=750&w=1260",icon:"assets/twitter.png",desc:"Better Call Dun!He is the best I've ever seen"},{id:2,name:"Tony Wasonga",title:"Education Consultant",img:"https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",icon:"assets/youtube.png",desc:"I needed a website that simply addresses the need of my clients and Dun,  made my communication easier simpler and  friendlier. ",featured:!0},{id:2,name:"Khadiza Bohra",title:"Business woman",img:"https://images.pexels.com/photos/1162890/pexels-photo-1162890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",icon:"assets/twitter.png",desc:"My website had problems loading ,images sometimes the user cannot login ,Dun came through and everything works fine!Am so Excited!",featured:!0}].map((function(e){return Object(m.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("img",{src:"assets/right-arrow.png",className:"left",alt:""}),Object(m.jsx)("img",{className:"user",src:e.img,alt:""}),Object(m.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(m.jsx)("div",{className:"center",children:e.desc}),Object(m.jsxs)("div",{className:"bottom",children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("h4",{children:e.title})]})]})}))})]})}s(33);s(34),s(35);function w(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:"menu "+(t&&"active"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#intro",children:"Home"})}),Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#testimonials",children:"Testimonials"})})]})})}var y=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(b,{menuOpen:s,setMenuOpen:i}),Object(m.jsx)(w,{menuOpen:s,setMenuOpen:i}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(p,{}),Object(m.jsx)(v,{}),"       ",Object(m.jsx)(N,{})]})]})};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8615ca8c.chunk.js.map