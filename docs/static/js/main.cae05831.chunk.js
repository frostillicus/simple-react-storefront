(this["webpackJsonpsimple-react-storefront"]=this["webpackJsonpsimple-react-storefront"]||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(9),l=n.a.createContext(),s=a(2),m=a(22),u=a.n(m),d=a(4),p=function(){var e=Object(r.useContext)(l),t=e.cart,a=e.setShowCart,c=t.reduce((function(e,t){return e+t.quantity}),0);return n.a.createElement("header",{className:"text-gray-100 bg-brand-blue"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"lg:w-4/5 mx-auto py-4 px-5 flex justify-between"},n.a.createElement("div",{className:"hover:text-gray-300"},n.a.createElement(d.a,{className:"text-lg",to:"/"},"StoreCo")),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return a((function(e){return!e}))},className:"focus:outline-none text-lg hover:text-gray-300"},"Cart (",c," items)")))))},h=function(e){var t=e.columnSize,a=void 0===t?200:t,c=e.numProducts,o=void 0===c?100:c,i=e.exclude,s=void 0===i?[]:i,m=e.headerText,u=e.quasiRandomSeed,p=void 0===u?0:u,h=Object(r.useContext)(l).productDB,f=h.filter((function(e){return!s.includes(e.id)})),g=h.sort((function(e,t){return parseInt(e.id)-parseInt(t.id)})),b=g.filter((function(e){return e.id>=p})).concat(g.filter((function(e){return e.id<p})));return f.length>0?n.a.createElement("div",null,m&&n.a.createElement("p",{className:"big-display-text"},m),n.a.createElement("div",{className:"grid-smart grid-auto grid-gap-15",style:{gridTemplateColumns:"repeat(auto-fill, minmax(".concat(a,"px, 1fr))")}},b.filter((function(e){return!s.includes(e.id)})).slice(0,o).map((function(e){return n.a.createElement(d.a,{key:e.id,to:"/product/".concat(e.id)},n.a.createElement("figure",{className:"aspect--square"},n.a.createElement("img",{className:"aspect__child rounded border border-gray-200",src:e.image,alt:e.name})))})))):null},f=function(){Object(r.useContext)(l).productDB;return Object(r.useEffect)((function(){document.title="StoreCo | Something for everyone"})),n.a.createElement("section",{className:"container px-5 py-12 md:py-20"},n.a.createElement("div",{className:"lg:w-4/5 mx-auto"},n.a.createElement("h1",{className:"big-display-text"},"Something for everyone."),n.a.createElement("div",{className:"product-grid--xl-enlarge"},n.a.createElement(h,{columnSize:160}))))},g=a(7),b=a.n(g),y=function(e){var t=e.match.params.id,a=Object(r.useContext)(l),c=a.setShowCart,o=a.cartDispatch,i=a.likes,s=a.likesDispatch,m=a.productDB.filter((function(e){return e.id===t}))[0];Object(r.useEffect)((function(){document.title="".concat(m.name," | StoreCo")}));return n.a.createElement("section",{className:"text-gray-700 body-font overflow-hidden bg-white"},n.a.createElement("div",{className:"container px-5 py-12 md:py-20 mx-auto"},n.a.createElement("div",{className:"lg:w-4/5 mx-auto flex flex-wrap"},n.a.createElement("h1",{className:"big-display-text w-full"},"Take a gander."),n.a.createElement("div",{className:"w-full sm:w-2/5"},n.a.createElement("figure",{className:"mt-1 mb-6 aspect--square flex-none"},n.a.createElement("img",{alt:m.name,className:"aspect__child rounded border border-gray-200",src:m.image}))),n.a.createElement("div",{className:"w-full sm:w-3/5 sm:pl-6 md:pl-10 md:pb-6 mt-6 sm:mt-0"},n.a.createElement("h2",{className:"text-sm title-font text-gray-500 tracking-widest uppercase"},m.brand),n.a.createElement("h1",{className:"text-gray-900 text-3xl title-font font-medium leading-9 mb-5"},m.name),n.a.createElement("div",{className:"flex mt-0 items-center pb-5 border-b-2 border-gray-200 mb-5"},n.a.createElement("p",{className:"leading-relaxed"},m.description)),n.a.createElement("div",{className:"flex flex-wrap"},n.a.createElement("span",{className:"title-font font-medium text-2xl text-gray-900"},b()(m.price/100).format("$0,0.00")),n.a.createElement("button",{onClick:function(){return e=t,c(!0),o({type:"ADD_TO_CART",id:e}),void window.scrollTo({top:0,behavior:"smooth"});var e},className:"btn btn--primary ml-auto"},"Add to cart"),n.a.createElement("button",{onClick:function(){s({type:"TOGGLE_LIKE",id:t})},className:"sm:mt-3 md:mt-0 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 focus:outline-none"},n.a.createElement("svg",{fill:i.includes(t)?"#f56565":"gray",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"}))))),n.a.createElement("div",{className:"my-10 w-full"},n.a.createElement(h,{columnSize:160,exclude:t,numProducts:10,headerText:"You might also like:",quasiRandomSeed:t})))))},E=a(6),x=function(e,t){return e.length>t?e.slice(0,t-1).trim()+"\u2026":e},v=function(e){var t=e.product,a=e.nameTrunc,c=void 0===a?100:a,o=Object(r.useContext)(l),i=o.setShowCart,s=o.cartDispatch;return Object(r.useEffect)((function(){0===t.quantity&&s({type:"DELETE_ITEM",id:t.id})}),[]),n.a.createElement("div",{className:"flex items-center my-4"},n.a.createElement("div",{className:"flex-none hidden xs:block"},n.a.createElement(d.a,{to:"/product/".concat(t.id)},n.a.createElement("figure",{className:"mr-4"},n.a.createElement("img",{onClick:function(){return i(!1)},className:"h-16 w-16 object-cover rounded border border-gray-200",src:t.image,alt:t.name})))),n.a.createElement("div",{className:"mr-4"},n.a.createElement("p",{className:"text-lg"},x(t.name,c)),n.a.createElement("div",{className:"text-sm flex flex-wrap items-center"},n.a.createElement("div",{className:"mt-1"},n.a.createElement("button",{className:"border px-2 mr-3",onClick:function(){return e=t.id,void s({type:"DELETE_ITEM",id:e});var e}},"Delete")),n.a.createElement("div",{className:"flex flex-no-wrap items-center mt-1"},n.a.createElement("span",{className:"mr-1"},"Quantity: "),n.a.createElement("button",{className:"border px-2",onClick:function(){return e=t.id,void s({type:"DECREMENT_ITEM",id:e});var e}},"-"),n.a.createElement("div",{className:"mx-1 font-mono mt-1"},t.quantity),n.a.createElement("button",{className:"border px-2",onClick:function(){return e=t.id,void s({type:"INCREMENT_ITEM",id:e});var e}},"+")))),n.a.createElement("div",{className:"ml-auto"},n.a.createElement("div",{className:"text-lg m-auto"},b()(t.price*t.quantity/100).format("$0,0.00"))))},w=function(e){var t=e.id,a=e.openCartMenu,c=e.scrollToTop,o=e.children,i=Object(r.useContext)(l),s=i.setShowCart,m=i.cartDispatch;return n.a.createElement("button",{onClick:function(){return function(e){a&&s(!0),m({type:"ADD_TO_CART",id:e}),c&&window.scrollTo({top:0,behavior:"smooth"})}(t)},className:"btn btn--primary"},o)},k=function(e){var t=e.product;return n.a.createElement("article",{className:"flex flex-col xs:flex-row"},n.a.createElement("div",{className:"flex-none w-32"},n.a.createElement(d.a,{to:"/product/".concat(t.id)},n.a.createElement("figure",{className:"aspect--square"},n.a.createElement("img",{className:"aspect__child rounded border border-gray-200",src:t.image,alt:t.name})))),n.a.createElement("div",{className:"flex flex-col justify-between mt-3 xs:mt-0 xs:ml-6"},n.a.createElement("div",null,n.a.createElement("p",{className:"text-gray-900 text-xl title-font font-medium -mt-1 mb-2"},x(t.name,60))),n.a.createElement("div",{className:"mr-auto"},n.a.createElement("p",{className:"title-font text-xl text-gray-900 mb-2"},b()(t.price/100).format("$0,0.00")),n.a.createElement(w,{id:t.id},"Add to Cart"))))},N=function(e){e.columnSize;var t=e.numProducts,a=void 0===t?100:t,c=e.exclude,o=void 0===c?[]:c,i=e.headerText,s=e.quasiRandomSeed,m=void 0===s?0:s,u=Object(r.useContext)(l).productDB,d=u.filter((function(e){return!o.includes(e.id)})),p=u.sort((function(e,t){return parseInt(e.id)-parseInt(t.id)})),h=p.filter((function(e){return e.id>=m})).concat(p.filter((function(e){return e.id<m})));return d.length>0?n.a.createElement("div",null,i&&n.a.createElement("p",{className:"big-display-text"},i),n.a.createElement("div",{className:""},h.filter((function(e){return!o.includes(e.id)})).slice(0,a).map((function(e){return n.a.createElement("div",{className:"mb-8",key:e.id},n.a.createElement(k,{product:e}))})))):null},C=function(){var e=Object(r.useContext)(l),t=e.cart,a=e.cartDispatch,c=e.setOldCart,o=e.productDB,i=t.map((function(e){var t=o.filter((function(t){return t.id===e.id}))[0];return Object(E.a)(Object(E.a)({},t),{},{quantity:e.quantity})})),s=i.reduce((function(e,t){return t.price*t.quantity+e}),0),m=t.length>0;Object(r.useEffect)((function(){document.title="Shopping cart | StoreCo"}));return n.a.createElement("section",{className:"container px-8 py-12 md:py-20"},n.a.createElement("div",{className:"lg:w-4/5 mx-auto"},n.a.createElement("h1",{className:"big-display-text"},"Shopping cart."),n.a.createElement("div",{className:"flex flex-wrap"},!m&&n.a.createElement("p",{className:"text-center text-gray-800"},"Cart is empty."),n.a.createElement("div",{className:"flex-none w-full md:w-3/5 mb-8"},i.map((function(e){return n.a.createElement("div",{key:e.id},n.a.createElement(v,{product:e}),n.a.createElement("hr",null))}))),m&&n.a.createElement("div",{className:"flex-none w-full md:w-2/5 md:pl-12 py-6"},n.a.createElement("div",{className:"flex flex-col items-center p-8 bg-gray-100"},n.a.createElement("p",{className:"text-lg"},"Subtotal: "),n.a.createElement("p",{className:"text-2xl mb-2"},b()(s/100).format("$0,0.00")),n.a.createElement("button",{onClick:function(){c(t),a({type:"EMPTY_CART"}),D.push("/thankyou")},className:"btn btn--primary my-4"},"Confirm Order")))),n.a.createElement("div",{className:"mt-8"},n.a.createElement(N,{columnSize:600,exclude:t.map((function(e){return e.id})),numProducts:4,headerText:"You might also like:"}))))},j=function(){var e=Object(r.useContext)(l),t=e.cart,a=e.setShowCart,c=e.productDB,o=t.map((function(e){var t=c.filter((function(t){return t.id===e.id}))[0];return Object(E.a)(Object(E.a)({},t),{},{quantity:e.quantity})})),i=t.length>0,s=o.reduce((function(e,t){return t.price*t.quantity+e}),0);return n.a.createElement("div",null,n.a.createElement("section",{onClick:function(){return a(!1)},className:"absolute top-0 right-0 w-full h-screen"}),n.a.createElement("section",{className:"cart-menu__wrapper absolute top-0 right-0 w-full p-8 lg:p-12 bg-gray-100 border-l border-b border-gray-200 z-50 rounded-bl"},n.a.createElement("div",{className:"flex flex-col"},!i&&n.a.createElement("p",{className:"text-center text-gray-800"},"Cart is empty."),n.a.createElement("div",{className:"flex-none mb-8"},o.map((function(e){return n.a.createElement("div",{key:e.id},n.a.createElement(v,{product:e,nameTrunc:48}),n.a.createElement("hr",null))}))),i&&n.a.createElement("div",{className:"flex-none pl-8 flex flex-col items-center"},n.a.createElement("p",{className:"text-lg"},"Subtotal: "),n.a.createElement("p",{className:"text-2xl"},b()(s/100).format("$0,0.00")),n.a.createElement(d.a,{onClick:function(){return a((function(e){return!e}))},to:"/cart",className:"btn btn--primary my-4"},"Go to cart")))))},O=function(){var e=Object(r.useContext)(l).oldCart;return n.a.createElement("section",{className:"container px-8 py-12 md:py-20"},n.a.createElement("div",{className:"lg:w-4/5 mx-auto"},n.a.createElement("h1",{className:"big-display-text"},"Thanks for your order!"),n.a.createElement("p",{className:"text-gray-700"},"We will charge your credit card when the order ships (just kidding)."),n.a.createElement("div",{className:"my-10 w-full"},n.a.createElement(h,{columnSize:160,exclude:e.map((function(e){return e.id})),numProducts:10,headerText:"You might also like:"}))))},S=function(e){var t=e.showCart,a=e.children,c=Object(r.useState)(t),o=Object(i.a)(c,2),l=o[0],s=o[1];Object(r.useEffect)((function(){t&&s(!0)}),[t]);return l&&n.a.createElement("div",{style:{zIndex:"1000",position:"relative",animation:"".concat(t?"slideIn":"slideOut"," 0.5s")},onAnimationEnd:function(){t||s(!1)}},a)};function T(){var e=Object(s.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var D=u()(),q=function(){var e=Object(r.useContext)(l).showCart;return n.a.createElement(s.b,{history:D},n.a.createElement(T,null),n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(S,{showCart:e},n.a.createElement(j,null)),n.a.createElement("div",null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/",component:f,exact:!0}),n.a.createElement(s.a,{path:"/cart",component:C}),n.a.createElement(s.a,{path:"/thankyou",component:O}),n.a.createElement(s.a,{path:"/product/:id",component:y})))))},I=a(14),_=function(e,t){switch(t.type){case"ADD_TO_CART":var a=e.map((function(e){return{id:e.id,quantity:e.quantity}}));return a.filter((function(e){return e.id===t.id})).length>0?a.forEach((function(e){e.id===t.id&&e.quantity++})):a=[].concat(Object(I.a)(e),[{id:t.id,quantity:1}]),a;case"INCREMENT_ITEM":return e.map((function(e){var a=e.id===t.id?e.quantity+1:e.quantity;return Object(E.a)(Object(E.a)({},e),{},{quantity:a})}));case"DECREMENT_ITEM":return e.map((function(e){var a=e.id===t.id?e.quantity-1:e.quantity;return Object(E.a)(Object(E.a)({},e),{},{quantity:a<0?0:a})}));case"DELETE_ITEM":return e.filter((function(e){return e.id!==t.id}));case"LOAD_CART":return t.newCart;case"EMPTY_CART":return[];default:return e}},R=function(e,t){switch(t.type){case"TOGGLE_LIKE":return e.includes(t.id)?e.filter((function(e){return e!==t.id})):[].concat(Object(I.a)(e),[t.id]);case"LOAD_LIKES":return t.newLikes;default:return e}},A=[{id:"1870298434",name:"Wooden spoon",brand:"Rustic housewares",description:"XOXO put a bird on it marfa hexagon helvetica, cold-pressed normcore af meggings portland hammock twee trust fund. Cred pork belly authentic tumeric slow-carb. Bushwick swag hot chicken banh mi chartreuse poutine. Franzen disrupt pork belly lumbersexual hot chicken readymade prism quinoa.",price:799,image:"https://images.pexels.com/photos/350417/pexels-photo-350417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{id:"2364928764",name:"Fork set",brand:"Table Inc",description:"Green juice single-origin coffee bitters keffiyeh marfa brooklyn letterpress viral, small batch squid church-key pok pok shoreditch organic everyday carry. Coloring book craft beer vice, paleo church-key bushwick waistcoat tbh mustache kombucha freegan neutra pop-up chicharrones. Jianbing flexitarian truffaut distillery cold-pressed lomo umami woke DIY.",price:2185,image:"https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},{id:"379587345",name:"TOWEL RACK ^^^ RUSTIC CHIC | Farmhouse chic",brand:"Rustic Trends",description:"Lyft schlitz hoodie shoreditch mustache slow-carb cred pok pok lomo shaman asymmetrical pitchfork. Chia man braid schlitz tousled narwhal. Portland jianbing narwhal bicycle rights photo booth farm-to-table, raclette yuccie heirloom cornhole hashtag copper mug shaman. Dreamcatcher subway tile quinoa hammock man bun heirloom chillwave live-edge twee next level sriracha cray paleo woke.",price:6598,image:"https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"479234872",name:"The most awesomest candy bowl this side of the Mississippi | Parties, Weddings, etc. | Microwaveable",brand:"Bowlco",description:"8-bit poutine put a bird on it fanny pack kitsch blue bottle, whatever four loko food truck tofu fashion axe. Ramps man braid pop-up gochujang schlitz iceland cardigan deep v butcher. VHS biodiesel pok pok schlitz kogi tbh vaporware. Green juice helvetica readymade, whatever hashtag crucifix literally kinfolk la croix poke vaporware cliche. Meh gastropub tbh try-hard, raw denim fixie normcore.",price:1990,image:"https://images.pexels.com/photos/1375807/pexels-photo-1375807.jpeg?cs=srgb&dl=bowl-of-candies-1375807.jpg&fm=jpg"},{id:"542987943",name:"Soup bowl",brand:"Bowlco",description:"Kogi DIY live-edge swag, photo booth meggings chicharrones brooklyn prism. Next level chicharrones tilde twee health goth letterpress slow-carb, vegan tousled farm-to-table man bun cliche mumblecore pinterest. Kitsch enamel pin lyft bicycle rights locavore, poke 3 wolf moon. Woke taiyaki shaman austin. Tumblr hexagon lomo gochujang. Vinyl shabby chic banh mi cray fam.",price:1455,image:"https://images.pexels.com/photos/724667/pexels-photo-724667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"697834533",name:"Skillet",brand:"Iron Kitchen",description:"Pok pok copper mug kitsch enamel pin post-ironic retro locavore fingerstache cold-pressed. Ethical four dollar toast hoodie bitters vegan wolf. Bespoke kale chips neutra williamsburg austin selfies pug put a bird on it twee portland forage irony. Af letterpress snackwave, fixie food truck kale chips raw denim helvetica PBR&B tumblr readymade chambray mustache. Scenester austin organic, typewriter disrupt jianbing tousled leggings mustache hell of.",price:2187,image:"https://images.pexels.com/photos/4409307/pexels-photo-4409307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"710239814",name:"Cutting board",brand:"Baker's Delite",description:"Ramps godard la croix, farm-to-table hammock twee authentic bicycle rights iceland church-key. Vinyl echo park flexitarian +1. Affogato ethical dreamcatcher small batch. Artisan meggings palo santo master cleanse godard. Skateboard occupy taxidermy, raclette kale chips tilde sartorial yr tote bag. Stumptown banjo freegan air plant skateboard hexagon health goth beard slow-carb cold-pressed keffiyeh. Butcher thundercats mlkshk scenester austin.",price:1199,image:"https://images.pexels.com/photos/3943205/pexels-photo-3943205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"892829422",name:"Rolling pin",brand:"Baker's Delite",description:"Cred selvage poke actually, tousled bushwick four dollar toast. Humblebrag copper mug meh cliche. Deep v roof party plaid leggings man braid, narwhal semiotics seitan truffaut four loko. Subway tile activated charcoal celiac aesthetic. Snackwave mustache quinoa hammock retro vegan. Ethical pitchfork 3 wolf moon humblebrag yuccie asymmetrical cold-pressed. Messenger bag street art typewriter, mustache crucifix irony VHS artisan williamsburg af distillery try-hard freegan.",price:1895,image:"https://images.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"953987241",name:"Corkscrew",brand:"Wine & Fine",description:"Tousled hot chicken cray fam. Twee meditation synth, echo park listicle fanny pack pop-up typewriter semiotics la croix. Godard lyft iPhone, subway tile umami vaporware crucifix raclette. Flannel dreamcatcher fingerstache tofu distillery pork belly kitsch freegan 90's photo booth. Food truck everyday carry edison bulb, lo-fi raw denim hammock squid trust fund. Iceland cardigan try-hard normcore hexagon franzen squid coloring book pabst austin fanny pack church-key schlitz. Gluten-free jianbing hot chicken paleo, affogato live-edge trust fund pour-over mumblecore iPhone you probably haven't heard of them.",price:2840,image:"https://images.pexels.com/photos/374854/pexels-photo-374854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"109872934",name:"Coffee mug",brand:"Fresh Gifts",description:"Subway tile DIY lyft direct trade, squid kogi put a bird on it kinfolk brunch scenester leggings cred. Occupy kinfolk glossier offal disrupt edison bulb marfa brooklyn jianbing fanny pack franzen. Offal pop-up four dollar toast wayfarers small batch literally readymade kombucha vegan organic celiac prism woke cliche. Health goth tumeric PBR&B four loko wolf. Thundercats tousled occupy semiotics next level portland williamsburg. Man bun church-key tote bag chicharrones.",price:999,image:"https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"117987453",name:"Glass pitcher",brand:"Summer Glassware",description:"Jianbing master cleanse ennui snackwave polaroid. Cliche fashion axe yuccie you probably haven't heard of them hexagon, gastropub banjo seitan. Craft beer godard williamsburg meggings, trust fund swag cronut photo booth echo park fingerstache. Skateboard lyft 3 wolf moon truffaut pug lumbersexual, flannel poutine narwhal edison bulb etsy. Gluten-free banjo skateboard cronut direct trade wolf edison bulb. Dreamcatcher venmo man bun you probably haven't heard of them irony drinking vinegar, tattooed chillwave pickled tacos tumblr biodiesel glossier la croix salvia. Craft beer swag artisan succulents live-edge yr.",price:3190,image:"https://images.pexels.com/photos/1320997/pexels-photo-1320997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:"127598379",name:"Spice jar set",brand:"The Spicy Chef",description:"Skateboard af keffiyeh, cloud bread wolf 90's organic intelligentsia. Salvia tattooed leggings messenger bag glossier roof party wayfarers pug tote bag fam hoodie four dollar toast. Freegan fixie palo santo cloud bread keytar VHS activated charcoal kitsch meh gluten-free succulents stumptown intelligentsia. Next level shaman 3 wolf moon DIY, photo booth affogato neutra lomo raclette.",price:2999,image:"https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}],B=[{id:"1870298434",quantity:2},{id:"2364928764",quantity:1},{id:"379587345",quantity:1}],L=function(){var e=Object(r.useReducer)(_,B),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(r.useReducer)(R,[]),s=Object(i.a)(o,2),m=s[0],u=s[1],d=Object(r.useState)(!1),p=Object(i.a)(d,2),h=p[0],f=p[1],g=Object(r.useState)([]),b=Object(i.a)(g,2),y=b[0],E=b[1];return Object(r.useEffect)((function(){try{var e=localStorage.getItem("cart"),t=JSON.parse(e);t&&c({type:"LOAD_CART",newCart:t})}catch(n){}try{var a=localStorage.getItem("likes"),r=JSON.parse(a);r&&u({type:"LOAD_LIKES",newLikes:r})}catch(n){}}),[]),Object(r.useEffect)((function(){var e=JSON.stringify(a);localStorage.setItem("cart",e)}),[a]),Object(r.useEffect)((function(){var e=JSON.stringify(m);localStorage.setItem("likes",e)}),[m]),n.a.createElement(n.a.Fragment,null,n.a.createElement(l.Provider,{value:{cart:a,cartDispatch:c,likes:m,likesDispatch:u,showCart:h,setShowCart:f,oldCart:y,setOldCart:E,productDB:A}},n.a.createElement(q,null)))};a(40);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.cae05831.chunk.js.map