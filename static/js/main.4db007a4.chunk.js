(this["webpackJsonppowells-poultry-react"]=this["webpackJsonppowells-poultry-react"]||[]).push([[0],{30:function(e,t,a){e.exports=a(43)},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(26),i=a.n(c),l=(a(35),a(27)),s=a(9),o=a(11),m=a(12),u=a(8),d=a(14),h=a(13),p=a(19),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={cartIsOpen:!1},r.cartContainer=n.a.createRef(),r.openCart=r.openCart.bind(Object(u.a)(r)),r.onClickOutsideCart=r.onClickOutsideCart.bind(Object(u.a)(r)),r}return Object(m.a)(a,[{key:"openCart",value:function(e){var t=this;e.currentTarget.parentNode.classList.toggle("main-shopping-cart-open"),this.setState((function(e){return{cartIsOpen:!t.state.cartIsOpen}}))}},{key:"onClickOutsideCart",value:function(e){this.state.cartIsOpen&&!this.cartContainer.current.contains(e.target)&&(this.cartContainer.current.classList.remove("main-shopping-cart-open"),this.setState({cartIsOpen:!1}))}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.onClickOutsideCart)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onClickOutsideCart)}},{key:"render",value:function(){return n.a.createElement("div",{ref:this.cartContainer,className:"main-shopping-cart"},n.a.createElement("span",{title:"View Shopping Cart",onClick:this.openCart},n.a.createElement(p.a,{icon:"shopping-cart"})),this.state.cartIsOpen&&n.a.createElement("ul",{id:"shopping-cart-ul"},this.props.cartItems.map((function(e){return n.a.createElement("li",null,e)}))))}}]),a}(n.a.Component),f=a(4),v=function(e){return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("h1",null,"Powell's ",n.a.createElement("br",null)," Produce")),n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(f.b,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(f.b,{to:"recipes"},"Recipes")),n.a.createElement("li",null,n.a.createElement(f.b,{to:"order"},"Order"))),n.a.createElement(E,{cartItems:e.cartItems})))},b=function(){return n.a.createElement("div",null,n.a.createElement("footer",null,n.a.createElement("div",{className:"footer-box"},"\xa9 Cary Tanner 2020"),n.a.createElement("div",{className:"footer-box"},n.a.createElement("a",{href:"https://en.wikipedia.org/wiki/produce",title:"Wikipedia about produce"},"Learn more about produce!")),n.a.createElement("div",{className:"footer-box"},n.a.createElement("a",{href:"https://resources.workable.com/stories-and-insights/eeo-equal-opportunity-employer"},"An Equal Opportunity Employer"))))},y=function(e){return n.a.createElement(f.b,{to:"/recipes/"+e.id},n.a.createElement("div",{className:"recipe-card","data-recipeid":e.id},n.a.createElement("img",{src:e.image,alt:""}),n.a.createElement("h3",null,"  ",e.title)))},g=function(e){return""!==e.recipeSearchQuery&&e.recipes.results.length<=0?n.a.createElement("div",null,n.a.createElement("h2",null,"Recipes"),n.a.createElement("div",null,"Sorry, no recipes match your search. Please try again.")):""!==e.recipeSearchQuery?n.a.createElement("div",null,n.a.createElement("h2",null,"Recipes"),n.a.createElement("div",{className:"display-recipe"},e.recipes.results.map(y))):n.a.createElement("div",null,n.a.createElement("h2",null,"Recipes"),n.a.createElement("div",{className:"display-recipe"},e.randomRecipes&&e.randomRecipes.recipes.map(y)))},C="d12055cf570a4b3eb69984ff9f4310a2;";var I=function(e){return n.a.createElement("div",{id:"home-page"},n.a.createElement("div",{className:"home-section",id:"home-section-one"},n.a.createElement("h1",null,"Fresh Produce."),n.a.createElement("h1",null," Home to your door."),n.a.createElement("h2",null,"3 Easy Steps"),n.a.createElement("h4",null,"1. Search for your favorite recipe"),n.a.createElement("h4",null,"2. Place ingredients in your cart"),n.a.createElement("h4",null,"3. Order for next day shipping!")),n.a.createElement("div",{className:"home-section",id:"home-section-two"},n.a.createElement("h1",null,"Let one of our 1000's of recipes inspire you"),n.a.createElement("div",{className:"display-recipe"},e.randomRecipes&&e.randomRecipes.recipes.map(y)),n.a.createElement(f.b,{to:"/recipes"},n.a.createElement("button",{className:"clickable",title:"To Recipe Search"},"Get Inspired!"))),n.a.createElement("div",{className:"home-section",id:"home-section-three"},n.a.createElement("div",{id:"delivery-card"}),n.a.createElement("div",{id:"home-section-three-h1-wrapper"},n.a.createElement("h1",null,"Fast Delivery"),n.a.createElement("h1",null,"7 Days a Week"))),n.a.createElement("div",{className:"home-section",id:"home-section-four"},n.a.createElement("div",null,n.a.createElement("h1",{className:"border-bottom"},"Location"),n.a.createElement("p",null,"47 Poplar Lane"),n.a.createElement("p",null,"Pellington, Vermont"),n.a.createElement("p",null,"765 54")),n.a.createElement("div",null,n.a.createElement("h1",{className:"border-bottom"},"Contact"),n.a.createElement("p",null,n.a.createElement("a",{href:"tel:555-7654"}," \ud83d\udcde 555-7654")),n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:"}," \ud83d\udce9 info@powellsproduce.com")))))},O=function(e){var t=(new Date).toISOString().split("T")[0];return n.a.createElement("div",{id:"order-form-container"},n.a.createElement("div",{id:"order-form-cart-list-container"},n.a.createElement("h3",{className:"border-bottom"},"Shopping Cart"),n.a.createElement("h4",null,"There"," ",1===e.cartItems.length?n.a.createElement("span",null,"is ",e.cartItems.length," item"):n.a.createElement("span",null,"are ",e.cartItems.length," items")," ","in your cart"),n.a.createElement("h4",null,0===e.cartItems.length?n.a.createElement("span",null,n.a.createElement("h2",{id:"order-form-explain"}," Just 3 Easy Steps"),n.a.createElement("h4",null,"1. Search for your favorite recipe"),n.a.createElement("h4",null,"2. Place ingredients in your cart"),n.a.createElement("h4",null,"3. Order for next day shipping!")):""),n.a.createElement("ul",null,e.cartItems.map((function(t){return n.a.createElement("li",{cartItem:t},t,n.a.createElement("span",{className:"clickable",title:"Remove Item",onClick:e.removeItemFromCart}," ","x"," "))})))),n.a.createElement("div",{id:"order-form"},n.a.createElement("h3",{className:"border-bottom"},"Place your order below"),n.a.createElement("input",{type:"text",onChange:e.orderFormChange,placeholder:"First Name",name:"firstName"}),n.a.createElement("input",{type:"text",onChange:e.orderFormChange,placeholder:"Last Name",name:"lastName"}),n.a.createElement("input",{type:"text",onChange:e.orderFormChange,placeholder:"Address",name:"address"}),n.a.createElement("h4",null,"Delivery Time(24h):"),n.a.createElement("div",{id:"delivery-times"},n.a.createElement("label",{htmlFor:"7-10"},"7-12"),n.a.createElement("input",{name:"deliveryTime",onChange:e.orderFormChange,type:"radio",value:"7-12"}),n.a.createElement("label",{htmlFor:"10-14"},"12-16"),n.a.createElement("input",{name:"deliveryTime",onChange:e.orderFormChange,type:"radio",value:"12-16"}),n.a.createElement("label",{htmlFor:"14-19"},"16-20"),n.a.createElement("input",{name:"deliveryTime",onChange:e.orderFormChange,type:"radio",value:"16-20"})),n.a.createElement("h4",null,n.a.createElement("label",{htmlFor:"deliveryDate"},"Delivery date:")),n.a.createElement("input",{className:"clickable",name:"deliveryDate",onChange:e.orderFormChange,type:"date",min:t}),n.a.createElement(f.b,{to:"/orderconfirmation"},n.a.createElement("button",{className:"clickable",onClick:e.submitOrder,id:"order-form-submit-btn"},"Order"))))},k=a(23),N=function(e){var t=Object(r.useState)(""),a=Object(k.a)(t,2),c=a[0],i=a[1],l=Object(r.useState)(""),s=Object(k.a)(l,2),o=s[0],m=s[1];Object(r.useEffect)((function(){var e;(e=c,fetch("https://api.spoonacular.com/recipes/autocomplete?apiKey="+C+"&number=5&query="+e).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))}),[c]);var u=n.a.createRef(),d=function(e){o&&null!==u.current&&!u.current.contains(e.target)&&m("")};return Object(r.useEffect)((function(){return window.addEventListener("click",d),function(){return window.removeEventListener("click",d)}})),n.a.createElement("div",{id:"search-bar-container"},n.a.createElement("div",null,n.a.createElement("input",{ref:u,id:"search-bar-input","data-searchquery":c,onKeyDown:function(t){return 13===t.keyCode?e.searchQuery(t):""},onChange:function(){i(document.querySelector("#search-bar-input").value)},type:"text",placeholder:" \ud83d\udd0d Get inspired by 1000's of recipes..."}),o&&c&&n.a.createElement("ul",{id:"autoComplete-ul"},o.map((function(e){return n.a.createElement(f.b,{to:"/recipes/"+e.id},n.a.createElement("li",null,e.title))})))),n.a.createElement(f.b,{to:"/recipes"},n.a.createElement("button",{className:"clickable",id:"search-button","data-searchquery":c,onClick:e.searchQuery},"Search")))},j=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={ingredients:"Loading...",instructions:"Loading..."},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.id,fetch("https://api.spoonacular.com/recipes/"+e+"/information?&apiKey="+C).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){return t.setState((function(a,r){return{title:e.title,ingredients:Object(s.a)(e.extendedIngredients.map((function(e){return function(e,t){return n.a.createElement("li",{"data-ingredient-id":e.id,cartItem:e.name.charAt(0).toUpperCase()+e.name.slice(1),key:e.name},e.name.charAt(0).toUpperCase()+e.name.slice(1),Math.ceil(e.measures.metric.amount)," ",e.measures.metric.unitShort,n.a.createElement("span",{title:"Add to Cart",class:"shopping-cart-icon",onClick:t},n.a.createElement(p.a,{icon:"shopping-cart"})))}(e,t.props.addItemToCart)}))),instructions:Object(s.a)(e.instructions),image:e.image}}))}))}},{key:"render",value:function(){return console.log(this.state.instructions),n.a.createElement("div",{class:"individual-recipe"},n.a.createElement("img",{src:this.state.image,alt:""}),n.a.createElement("h2",null,this.state.title),n.a.createElement("h3",null,"Ingredients"),n.a.createElement("ul",{className:"ingredient-list"},this.state.ingredients),n.a.createElement("h3",null,"Instructions"),n.a.createElement("p",null,this.state.instructions?this.state.instructions:"Sorry, instructions are unavailable for this recipe."))}}]),a}(n.a.Component),S=function(e){return n.a.createElement("div",null,n.a.createElement("h2",{id:"thanks-order"},"Thanks for ordering!"),n.a.createElement("div",{id:"order-confirmation"},n.a.createElement("div",null,n.a.createElement("h3",{className:"border-bottom"},"Order Details"),n.a.createElement("h4",null,"First Name: ",e.firstName),n.a.createElement("h4",null,"Last Name: ",e.lastName),n.a.createElement("h4",null,"Address: ",e.address),n.a.createElement("h4",null,"Delivery Time: ",e.deliveryTime),n.a.createElement("h4",null,"Delivery Date: ",e.deliveryDate)),n.a.createElement("div",null,n.a.createElement("h3",{className:"border-bottom"}," Items Ordered "),n.a.createElement("ul",null,e.orderedItems&&e.orderedItems.map((function(e){return n.a.createElement("li",null,e)}))))))},F=a(2),T=a(16),w=a(29);T.b.add(w.a);var x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={recipeSearchQuery:"",recipes:"",cartItems:[],cartItemsIds:[]},r.searchQuery=r.searchQuery.bind(Object(u.a)(r)),r.orderFormChange=r.orderFormChange.bind(Object(u.a)(r)),r.submitOrder=r.submitOrder.bind(Object(u.a)(r)),r.addItemToCart=r.addItemToCart.bind(Object(u.a)(r)),r.removeItemFromCart=r.removeItemFromCart.bind(Object(u.a)(r)),r}return Object(m.a)(a,[{key:"searchQuery",value:function(e){var t,a=this,r=e.target.attributes["data-searchquery"].value;(t=r,fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+C+"&number=8&sort=random&query="+t).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){return a.setState((function(t){return{recipeSearchQuery:r,recipes:e}}))}))}},{key:"addItemToCart",value:function(e){var t=this,a=e.currentTarget.parentNode.attributes.cartItem.value,r=e.currentTarget.parentNode.attributes["data-ingredient-id"].value;void 0!==e.currentTarget.parentNode.attributes["data-ingredient-id"]?this.state.cartItemsIds.includes(r)?alert("This item is already in your shopping cart"):(e.currentTarget.style.color="red",this.setState((function(e){return{cartItems:[].concat(Object(s.a)(t.state.cartItems),[a]),cartItemsIds:[].concat(Object(s.a)(t.state.cartItemsIds),[r])}}))):alert("Sorry, but this item is unavailable")}},{key:"removeItemFromCart",value:function(e){var t=e.currentTarget.parentNode.attributes.cartItem.value,a=this.state.cartItems.indexOf(t),r=Object(s.a)(this.state.cartItems),n=Object(s.a)(this.state.cartItems);r.splice(a,1),n.splice(a,1),this.setState((function(e){return{cartItems:r,cartItemsIds:n}}))}},{key:"orderFormChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"submitOrder",value:function(){var e=Object(s.a)(this.state.cartItems);this.setState((function(){return{cartItems:[],orderedItems:e}}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.spoonacular.com/recipes/random?number=4&apiKey=d12055cf570a4b3eb69984ff9f4310a2;").then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(t){return e.setState((function(e){return{randomRecipes:t}}))}))}},{key:"render",value:function(){var e=this;return n.a.createElement(F.c,null,n.a.createElement("div",{className:"App"},n.a.createElement(v,{cartItems:this.state.cartItems}),n.a.createElement(F.a,{exact:!0,path:"/recipes"},n.a.createElement(N,{searchQuery:this.searchQuery}),n.a.createElement(g,{recipes:this.state.recipes,recipeSearchQuery:this.state.recipeSearchQuery,randomRecipes:this.state.randomRecipes})),n.a.createElement(F.a,{path:"/recipes/:id",render:function(t){return n.a.createElement("div",null,n.a.createElement(N,{searchQuery:e.searchQuery}),n.a.createElement(j,Object.assign({},t,{addItemToCart:e.addItemToCart})))}}),n.a.createElement(F.a,{exact:!0,path:"/order"},n.a.createElement(O,{submitOrder:this.submitOrder,removeItemFromCart:this.removeItemFromCart,orderFormChange:this.orderFormChange,cartItems:this.state.cartItems})),n.a.createElement(F.a,{exact:!0,path:"/orderconfirmation"},n.a.createElement(S,{orderedItems:this.state.orderedItems,firstName:this.state.firstName,lastName:this.state.lastName,address:this.state.address,deliveryTime:this.state.deliveryTime,deliveryDate:this.state.deliveryDate})),n.a.createElement(F.a,{exact:!0,path:"/"},n.a.createElement(N,{searchQuery:this.searchQuery}),n.a.createElement(I,{randomRecipes:this.state.randomRecipes})),n.a.createElement(b,null)))}}]),a}(n.a.Component);i.a.render(n.a.createElement(f.a,{basename:"/powells-produce"},n.a.createElement(x,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4db007a4.chunk.js.map