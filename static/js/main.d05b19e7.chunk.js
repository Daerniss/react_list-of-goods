(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var r=n(7),s=n.n(r),a=n(2),c=n(3),i=n(5),o=n(4),l=n(1),u=n.n(l),h=n(0),b=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={isReverse:!1,sortBy:null,selectedValue:1},t.reverseList=function(){t.setState((function(t){return{isReverse:!t.isReverse}}))},t.sortList=function(e){t.setState({sortBy:e})},t.resetList=function(){t.setState({isReverse:!1,sortBy:null,selectedValue:1})},t.filterList=function(e){t.setState({selectedValue:+e.target.value})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReverse,r=e.sortBy,s=e.selectedValue,a=this.props.goods.filter((function(t){return t.length>=s}));return r&&a.sort((function(t,e){switch(r){case"alphabetically":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),n&&a.reverse(),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"button",name:"reverse",onClick:this.reverseList,children:"Reverse"}),Object(h.jsx)("button",{type:"button",name:"alphabetically",onClick:function(e){return t.sortList(e.currentTarget.name)},children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",name:"length",onClick:function(e){return t.sortList(e.currentTarget.name)},children:"Sort by length"}),Object(h.jsx)("select",{value:s,onChange:this.filterList,children:Array.from({length:10},(function(t,e){return e+1})).map((function(t){return Object(h.jsx)("option",{value:t,children:t},t)}))}),Object(h.jsx)("button",{type:"button",name:"reset",onClick:this.resetList,children:"Reset"}),Object(h.jsx)("ul",{children:a.map((function(t){return Object(h.jsx)("li",{children:t},t)}))})]})}}]),n}(u.a.Component),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={isStarted:!1},t.handleStart=function(){t.setState({isStarted:!0})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isStarted;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),!t&&Object(h.jsx)("button",{onClick:this.handleStart,type:"button",children:"start"}),t&&Object(h.jsx)(b,{goods:j})]})}}]),n}(u.a.Component),p=d;s.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d05b19e7.chunk.js.map