(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(2),c=e.n(o),i=e(3),u=e(4),p=e(6),s=e(5),l=e(7),h=function(t){function n(){var t,e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(p.a)(this,(t=Object(s.a)(n)).call.apply(t,[this].concat(r)))).state={data:[]},e}return Object(l.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then(function(t){return t.json()}).then(function(n){t.setState({data:n})})}},{key:"render",value:function(){var t=this.state.data.map(function(t,n){return r.a.createElement("li",{key:n},t)});return r.a.createElement("ul",null,t)}}]),n}(a.Component);e(13);c.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(t,n,e){t.exports=e(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0c2f52f3.chunk.js.map