(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r,s=n(3),c=n.n(s),o=n(4),i=n(5),a=n(8),l=n(6),u=n(7),h=n(1),b=n.n(h),j=(n(13),n(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(r||(r={}));var p=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isStarted:!1,isReversed:!1,sortType:0,minLength:1},t.keys=new Array(10).fill(0).map((function(t){return Math.random()})),t.getStart=function(){t.setState({isStarted:!0})},t.alphabetSort=function(){t.setState({sortType:r.ALPABET})},t.lengthSort=function(){t.setState({sortType:r.LENGTH})},t.reset=function(){t.setState({sortType:r.NONE,isReversed:!1})},t.reversArr=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,r=e.isReversed,s=e.sortType,c=e.minLength,o=function(t,e,n,r){var s=Object(u.a)(t).filter((function(t){return t.length>=r}));return s.sort((function(t,n){switch(e){case 1:return t.localeCompare(n);case 2:return t.length-n.length;default:return 0}})),n?s.reverse():s}(d,s,r,c);return Object(j.jsxs)("div",{children:[!n&&Object(j.jsx)("button",{type:"button",onClick:this.getStart,children:"Start"}),n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("label",{children:["Choose a length",Object(j.jsx)("select",{onChange:function(e){t.setState({minLength:+e.target.value})},children:new Array(10).fill(0).map((function(e,n){return Object(j.jsx)("option",{value:n+1,children:n+1},t.keys[n])}))})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"button",onClick:this.alphabetSort,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",onClick:this.lengthSort,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",onClick:this.reversArr,children:"Reverse"}),Object(j.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(j.jsx)("ul",{className:"Goods",children:o.map((function(t){return Object(j.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})}}]),n}(b.a.Component);c.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e320c010.chunk.js.map