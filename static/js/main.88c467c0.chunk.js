(this.webpackJsonppelis=this.webpackJsonppelis||[]).push([[0],{15:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(28),i=c.n(r),s=c(5),o=c(4),l=c(13),j=c(9),d=(c(15),c(1)),b=function(e){var t=e.product;return Object(d.jsx)("div",{className:"Item",children:Object(d.jsxs)("article",{className:"ItemArticle",children:[Object(d.jsx)(s.b,{to:"/item/".concat(t.id),children:Object(d.jsx)("h5",{className:"ItemNombre",children:t.nombre})}),Object(d.jsx)("img",{src:t.img,alt:t.nombre})]})})},u=c(22);c(46),u.a.initializeApp({apiKey:"AIzaSyCK1MPS7gCsh4vTA34OQeAq9EON9GEMf4k",authDomain:"peliculas-98264.firebaseapp.com",projectId:"peliculas-98264",storageBucket:"peliculas-98264.appspot.com",messagingSenderId:"257217129518",appId:"1:257217129518:web:4d07797fed60d1664d43bf"});var O=u.a.firestore(),h=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(o.f)().id;return Object(a.useEffect)((function(){n([]);var e=O.collection("peliculas");r?e.where("categoria","==",r).get().then((function(e){return n(e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})})))})):e.get().then((function(e){return n(e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})})))}))}),[r]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"LinkCategoria",children:[Object(d.jsx)(s.b,{to:"/categoria/Accion",children:"Accion"}),Object(d.jsx)(s.b,{to:"/categoria/Aventura",children:"Aventura"}),Object(d.jsx)(s.b,{to:"/categoria/Animacion",children:"Animacion"})]}),Object(d.jsx)("div",{children:c.length?c.map((function(e){return Object(d.jsx)(b,{product:e},e.id)})):Object(d.jsx)("h3",{children:"Cargando..."})})]})},m=c(30),x=c(31),p=Object(a.createContext)(),f=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(j.a)(c,2),r=n[0],i=n[1];console.log(r);var s=Object(a.useState)(0),o=Object(j.a)(s,2),l=o[0],b=o[1];Object(a.useEffect)((function(){b(r.reduce((function(e,t){var c=t.cantidad;return e+t.precio*c}),0))}),[r]);var u=Object(a.useState)(0),O=Object(j.a)(u,2),h=O[0],f=O[1];Object(a.useEffect)((function(){var e,t=0,c=Object(m.a)(r);try{for(c.s();!(e=c.n()).done;){t+=e.value.cantidad}}catch(a){c.e(a)}finally{c.f()}return f(t)}),[r]);var g={cart:r,setCart:i,addItem:function(e){i([].concat(Object(x.a)(r),[e]))},isInCart:function(e){return r.filter((function(t){return t.id===e})).length>0},editCart:function(e){var t=r.map((function(t){return t.id===e.id?e:t}));i(t)},clear:function(){i([])},deleteItem:function(e){var t=r.filter((function(t){return t.id!==e}));i(t)},total:l,cartLength:h};return Object(d.jsx)(p.Provider,{value:g,children:t})},g=function(e){var t=e.initial,c=e.stock,a=e.contador,n=e.setContador;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){a>t&&n(a-1)},children:"-"}),Object(d.jsx)("p",{children:a}),Object(d.jsx)("button",{onClick:function(){a<c&&n(a+1)},children:"+"})]})},v=function(e){var t=e.producto,c=Object(a.useContext)(p),n=c.cart,r=c.addItem,i=c.editCart,o=c.isInCart,b=Object(a.useState)(1),u=Object(j.a)(b,2),O=u[0],h=u[1],m=Object(a.useState)(!1),x=Object(j.a)(m,2),f=x[0],v=x[1];console.log(n);return Object(d.jsxs)("div",{className:"ItemDetail",children:[Object(d.jsx)("img",{src:t.img,alt:t.nombre}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:t.nombre}),Object(d.jsx)("p",{children:t.detalle}),Object(d.jsxs)("p",{className:"StockDisponible",children:["Stock Disponible: ",t.stock?t.stock:"No hay stock"]}),Object(d.jsxs)("p",{children:["$",t.precio]}),f?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"EditarCompra",onClick:function(){return v(!1)},children:"Editar compra"}),Object(d.jsx)("div",{className:"IrAlCarrito",children:Object(d.jsx)(s.b,{to:"/cart",children:"Ir al carrito"})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{initial:1,stock:t.stock,contador:O,setContador:h}),Object(d.jsx)("button",{className:"AgregarAlCarrito",onClick:function(){v(!0),o(t.id)?i(Object(l.a)(Object(l.a)({},t),{},{cantidad:O})):r(Object(l.a)(Object(l.a)({},t),{},{cantidad:O}))},disabled:0===t.stock,children:"Agregar al carrito"})]})]}),Object(d.jsx)("div",{className:"SeguirComprando",children:Object(d.jsx)(s.b,{to:"/",children:"Seguir comprando"})})]})},C=function(){var e=Object(o.f)().id,t=Object(a.useState)({}),c=Object(j.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){r({}),O.collection("peliculas").doc(e).get().then((function(e){r(Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id}))}))}),[e]),Object(d.jsx)(d.Fragment,{children:0!==Object.entries(n).length?Object(d.jsx)(v,{producto:n}):Object(d.jsx)("h2",{children:"Cargando..."})})},N=function(e){var t=e.item,c=Object(a.useContext)(p),n=c.cart,r=c.total,i=c.cartLength,o=Object(a.useContext)(p).clear,l=Object(a.useContext)(p).deleteItem;return i>0?Object(d.jsxs)("div",{className:"Carrito",children:[Object(d.jsx)("div",{className:"Carrito-Volver",children:Object(d.jsx)(s.b,{to:"/",children:"Volver"})}),Object(d.jsx)("div",{className:"Carrito-Item",children:n.length?n.map((function(e){return Object(d.jsxs)("div",{className:"Carrito-Item-Div",children:[e.nombre," - $",e.precio,Object(d.jsx)("button",{onClick:function(){return l(e.id)},children:"Borrar Producto"})]},e.id)})):null}),Object(d.jsxs)("h3",{children:["Total: $",r]}),Object(d.jsxs)("div",{className:"Carrito-FinalizarCompra",children:[Object(d.jsx)(s.b,{className:"Carrito-FinalizarCompraA",to:"/compra",children:"Finalizar compra"}),Object(d.jsx)("button",{disabled:null===t,className:"Carrito-VaciarCarrito",onClick:o,children:"Vaciar Carrito"})]})]}):Object(d.jsx)("h3",{children:"No hay productos en el Carrito"})};function I(){var e=Object(a.useContext)(p).cart;console.log(e);var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),l=o[0],b=o[1],h=Object(a.useState)(""),m=Object(j.a)(h,2),x=m[0],f=m[1],g=Object(a.useContext)(p).clear;return Object(d.jsxs)("div",{className:"FormularioFinalizarCompra",children:[Object(d.jsx)("h2",{children:"Finalizar compra"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=O.collection("ventas"),a=O.collection("peliculas");c.add({productos:e,user:n,apellido:l,email:x}).then((function(t){e.map((function(e){var t=e.cantidad;a.doc(e.id).update({stock:u.a.firestore.FieldValue.increment(-t)})})),console.log(t.id),e.length>0?alert("GRACIAS POR SU COMPRA: ".concat(n)):alert("CARRITO VACIO"),g()}))},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{onChange:function(e){r(e.target.value)},value:n,name:"user",placeholder:"Ingrese su Nombre",type:"nombre"}),Object(d.jsx)("input",{onChange:function(e){b(e.target.value)},value:l,lastName:"apellido",placeholder:"Ingrese su Apellido",type:"apellido"}),Object(d.jsx)("input",{onChange:function(e){f(e.target.value)},value:x,email:"email",placeholder:"Ingrese su Correo",type:"email"})]}),Object(d.jsx)("button",{disabled:0===n.length||0===l.length||0===x.length,type:"submit",children:"Comprar"}),Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("button",{children:"Volver"})})]})]})}var A=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.b,{to:"/cart",children:Object(d.jsx)("img",{className:"ImagenCarrito",src:"https://image.flaticon.com/icons/png/512/3144/3144456.png",alt:"ImagenCarrito"})})})},S=function(){return Object(d.jsxs)("div",{className:"NavBar",children:[Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("h1",{className:"TodoPelis",children:"TODO PELIS"})}),Object(d.jsx)(s.b,{to:"/Cart",children:Object(d.jsx)(A,{})})]})},k=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"ContenedorFooter",children:[Object(d.jsx)("div",{className:"titulofooter",children:Object(d.jsx)("span",{href:"#subir",children:"TodoPelis"})}),Object(d.jsxs)("div",{className:"Redes__Sociales",children:[Object(d.jsxs)("li",{className:"Redes__Sociales--whats",children:[Object(d.jsx)("img",{src:"https://image.flaticon.com/icons/png/128/1383/1383336.png",alt:"Wp"}),Object(d.jsx)("span",{children:"3412136741"})]}),Object(d.jsxs)("li",{class:"Redes__Sociales--instagram",children:[Object(d.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/725/725339.png",alt:"instagram contactanos"}),Object(d.jsx)("span",{children:"@TodoPelis"})]})]}),Object(d.jsx)("div",{className:"ContactosFooter",children:"Alvear 126 - Rosario - Argentina - Tel (341) 2136741"}),Object(d.jsx)("div",{className:"DerechosFooter",children:Object(d.jsx)("p",{children:"@TodoPelis - Todos los derechos reservados"})})]})})})};function F(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(f,{children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(S,{exact:!0,path:"/"}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(d.jsx)(o.a,{path:"/categoria/:id",component:h}),Object(d.jsx)(o.a,{path:"/item/:id",component:C}),Object(d.jsx)(o.a,{path:"/cart",component:N}),Object(d.jsx)(o.a,{path:"/compra",component:I})]}),Object(d.jsx)(k,{})]})})})}i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.88c467c0.chunk.js.map