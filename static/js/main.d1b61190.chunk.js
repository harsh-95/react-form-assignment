(this["webpackJsonpform-assignment"]=this["webpackJsonpform-assignment"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=(a(15),a(1)),i=a(7),u=a(3),s=a(4),d=a(6),m=a(5),p=(a(16),a(2)),E=(a(17),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state=e.getInitState(),e.handleChange=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(p.a)({},n,c))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.productName,c=a.category,r=a.price;n&&c&&r&&(Object.keys(e.props.productToEdit).length?e.props.handleEditProduct(e.state):e.props.addNewProduct(e.state),e.setState({productName:"",category:"",description:"",price:""}))},e}return Object(s.a)(a,[{key:"getInitState",value:function(){var e=this.props.productToEdit;return Object.keys(e).length?e:{productName:"",category:"",description:"",price:""}}},{key:"componentWillReceiveProps",value:function(e){var t=e.productToEdit;this.setState(Object(o.a)({},t))}},{key:"render",value:function(){return c.a.createElement("div",{className:"formContainer"},c.a.createElement("form",{className:"form"},c.a.createElement("div",{className:"formInput"},c.a.createElement("div",{className:"label"},c.a.createElement("label",null,"Product Name*")),c.a.createElement("div",{className:"input"},c.a.createElement("input",{type:"text",name:"productName",value:this.state.productName,onChange:this.handleChange}))),c.a.createElement("div",{className:"formInput"},c.a.createElement("div",{className:"label"},c.a.createElement("label",null,"Category*")),c.a.createElement("div",{className:"input"},c.a.createElement("select",{name:"category",value:this.state.category,onChange:this.handleChange},c.a.createElement("option",{value:""},"Select an Option"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3")))),c.a.createElement("div",{className:"formInput"},c.a.createElement("div",{className:"label"},c.a.createElement("label",null,"Description")),c.a.createElement("div",{className:"input"},c.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange}))),c.a.createElement("div",{className:"formInput"},c.a.createElement("div",{className:"label"},c.a.createElement("label",null,"Price*")),c.a.createElement("div",{className:"input"},c.a.createElement("input",{type:"number",name:"price",value:this.state.price,onChange:this.handleChange}))),c.a.createElement("div",{className:"btnDiv"},c.a.createElement("button",{className:"btn",onClick:this.handleSubmit},"Save"))))}}]),a}(n.Component)),h=(a(18),function(e){var t=e.products,a=e.getEditProduct;console.log("dd"),console.log(t);var n=c.a.createElement("table",{cellSpacing:"5px"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Product"),c.a.createElement("th",null,"Category"),c.a.createElement("th",null,"Description"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",{className:"center"},t.map((function(e,t){var n=e.productName,r=e.category,l=e.description,o=e.price;return c.a.createElement("tr",{key:t},c.a.createElement("td",null,n),c.a.createElement("td",null,c.a.createElement("span",null,r)),c.a.createElement("td",null,c.a.createElement("span",null,l)),c.a.createElement("td",null,c.a.createElement("span",null,o)),c.a.createElement("td",null,c.a.createElement("button",{className:"btnEdit",onClick:function(){return a(t)}},"Edit")))}))));return c.a.createElement("div",null,n)}),v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={products:[],productToEdit:{}},e.addNewProduct=function(t){e.setState({products:[].concat(Object(i.a)(e.state.products),[Object(o.a)({},t)])})},e.handleEditProduct=function(t){console.log("aa");var a=e.state.products.findIndex((function(t){return t.productName===e.state.productToEdit.productName})),n=Object(i.a)(e.state.products);n[a]=t,e.setState({products:n,productToEdit:{}})},e.getEditProduct=function(t){e.setState({productToEdit:e.state.products[t]})},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,{addNewProduct:this.addNewProduct,productToEdit:this.state.productToEdit,handleEditProduct:this.handleEditProduct}),c.a.createElement(h,{products:this.state.products,getEditProduct:this.getEditProduct}))}}]),a}(n.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d1b61190.chunk.js.map