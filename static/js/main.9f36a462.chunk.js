(this.webpackJsonpfbcomponent=this.webpackJsonpfbcomponent||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s.n(a),r=s(6),i=s.n(r),o=(s(13),s(3)),l=s(7);s(14),s(15);var m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1],r=Object(a.useRef)();return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userPosts"));c(e)}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=s.push({userpost:document.getElementById("userpost").value,username:document.getElementById("username").value,edit:!1});c(Object(o.a)(s),t),localStorage.setItem("userPosts",JSON.stringify(s)),document.getElementById("username").value=" ",document.getElementById("userpost").value=" "}(e)},children:[Object(n.jsxs)("div",{className:"inputFields",children:[Object(n.jsx)("input",{placeholder:"Enter your name",id:"username"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{id:"userpost",placeholder:"Enter post"}),Object(n.jsx)("br",{})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Post"})]})}),s.map((function(e,t){return Object(n.jsx)("div",{className:"mediaCard",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"cardContent",children:[Object(n.jsx)("small",{className:"timeStamp",children:"6h"}),Object(n.jsx)("img",{src:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",className:"avatar"}),Object(n.jsx)("h4",{className:"nameElement",children:e.username[0].toUpperCase()+e.username.slice(1)}),Object(n.jsx)("p",{className:"postText",children:e.userpost}),Object(n.jsx)("img",{className:"postImage",src:"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f1f37a40a5db2c8275972c0%2F0x0.jpg",alt:""}),Object(n.jsx)("img",{className:"postImage"}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(e){return function(e){var t=Object(o.a)(s);t.splice(e,1),c(t)}(t)},children:"Delete Post"}),!0===e.edit?Object(n.jsx)("input",{className:"mt-2",placeholder:"enter value to update",ref:r}):"",!0===e.edit?Object(n.jsx)("button",{className:"mt-2",onClick:function(e){return function(e){console.log("updated value is = > ",r);var t=Object(o.a)(s);t[e].userpost=r.current.value,t[e].edit=!1,c(t)}(t)},children:"Update value"}):"",!1===e.edit?Object(n.jsx)("button",{className:"mt-2",onClick:function(e){return function(e){var t=Object(o.a)(s);t[e].edit=!0,c(t)}(t)},children:"Edit value"}):""]})})},t)}))]})},u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m,{postSrc:"data:image/png;base64,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",name:"Azhar",src:"https://c.files.bbci.co.uk/13605/production/_111256397_060306797-1.jpg"})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.9f36a462.chunk.js.map