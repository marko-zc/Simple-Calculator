(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),c=t(7),r=t.n(c),i=t(1),o=t(2),u=t(4),d=t(3),m=(t(13),function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=n.call.apply(n,[this].concat(l))).handleClick=function(){e.props.clickHandler(e.props.name)},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleClick},this.props.name))}}]),t}(l.a.Component)),s=(t(14),function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=n.call.apply(n,[this].concat(l))).handleClick=function(n){e.props.clickHandler(n)},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"clear"},l.a.createElement(m,{name:"Clear",clickHandler:this.handleClick})),l.a.createElement("div",{className:"panel"},l.a.createElement("div",null,l.a.createElement(m,{name:"7",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"8",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"9",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"\xf7",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"4",clickHandler:this.handleClick}),l.a.createElement("div",null),l.a.createElement(m,{name:"5",clickHandler:this.handleClick}),l.a.createElement("div",null),l.a.createElement(m,{name:"6",clickHandler:this.handleClick}),l.a.createElement("div",null),l.a.createElement(m,{name:"x",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"1",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"2",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"3",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"+",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"0",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:".",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"=",clickHandler:this.handleClick})),l.a.createElement("div",null,l.a.createElement(m,{name:"-",clickHandler:this.handleClick}))))}}]),t}(l.a.Component)),h=(t(15),function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"display"},l.a.createElement("div",null,this.props.value))}}]),t}(l.a.Component)),k=t(5),E=t.n(k);var v=function(e,n,t){var a=E()(e||"0"),l=E()(n||("\xf7"===t||"x"===t?"1":"0"));if("+"===t)return a.plus(l).toString();if("-"===t)return a.minus(l).toString();if("x"===t)return a.times(l).toString();if("\xf7"===t)return"0"===l?(alert("Divide by 0 error"),"0"):a.div(l).toString();throw Error("Unknown operation '".concat(t,"'"))};var p=function(e){return/[0-9]+/.test(e)};var f=function(e,n){return"Clear"===n?{total:null,next:null,operation:null}:p(n)?"0"===n&&"0"===e.next?{}:e.operation?e.next?{next:e.next+n}:{next:n}:e.next?{next:"0"===e.next?n:e.next+n,total:null}:{next:n,total:null}:"."===n?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===n?e.next&&e.operation?{total:v(e.total,e.next,e.operation),next:null,operation:null}:{}:e.operation?{total:v(e.total,e.next,e.operation),next:null,operation:n}:e.next?{total:e.next,next:null,operation:n}:{operation:n}},x=(t(16),function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=n.call.apply(n,[this].concat(l))).state={total:null,next:null,operation:null},e.handleClick=function(n){e.setState(f(e.state,n))},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,{value:this.state.next||this.state.total||"0"}),l.a.createElement(s,{clickHandler:this.handleClick}))}}]),t}(l.a.Component));t(17);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.10e5d29b.chunk.js.map