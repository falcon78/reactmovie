(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(49)},25:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),l=(a(25),a(9)),s=a.n(l),o=a(17),u=a(1),h=a(3),m=a(4),d=a(7),p=a(5),b=a(6),f=a(18),v=a.n(f),E=(a(47),a(48),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(j,null),r.a.createElement("h1",{id:"popular"}," Popular "),r.a.createElement(y,{url:"https://api.themoviedb.org/3/trending/movie/week?api_key=5f07da1ac6e04f73964142e3b1c32a76"}),r.a.createElement(w,null))}}]),t}(r.a.Component)),y=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={movies:[],previous:""},a.runThis=a.runThis.bind(Object(u.a)(Object(u.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"runThis",value:function(){var e=Object(o.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.url===this.state.previous){e.next=5;break}return e.next=3,v.a.get(this.props.url);case 3:t=e.sent,this.setState({movies:t.data.results,previous:this.props.url});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.runThis(),console.log(this.state.movies);return r.a.createElement("div",{className:"container"},this.state.movies.map(function(e){return r.a.createElement("div",{key:e.id,className:"content"},r.a.createElement("a",{target:"_blank",href:"https://www.themoviedb.org/movie/"+e.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185"+e.poster_path,alt:e.title})))}))}}]),t}(r.a.Component),k=function(e){return""!==e.search?(console.log(e.search+"Search Result"),r.a.createElement(y,{url:"".concat("https://api.themoviedb.org/3/search/movie?api_key=","5f07da1ac6e04f73964142e3b1c32a76","&query=",e.search)})):null},j=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={ready:"",input:""},a.handleType=a.handleType.bind(Object(u.a)(Object(u.a)(a))),a.handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a.handleClear=a.handleClear.bind(Object(u.a)(Object(u.a)(a))),a.handleEnter=a.handleEnter.bind(Object(u.a)(Object(u.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(u.a)(Object(u.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleType",value:function(e){this.setState({input:e.target.value})}},{key:"handleClick",value:function(){this.setState({ready:this.state.input})}},{key:"handleClear",value:function(){""!==this.state.ready&&this.setState({ready:"",input:""})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleEnter",value:function(){this.setState({ready:this.state.input})}},{key:"handleKeyPress",value:function(e){13===e.keyCode&&this.handleEnter()}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"input",className:"input",id:"text",placeholder:"Search Movies",value:this.state.input,onChange:this.handleType}),r.a.createElement("div",{className:"buttondiv"},r.a.createElement("button",{className:"btn",onClick:this.handleClick},r.a.createElement("i",{className:"fa fa-search "}),"Search"),r.a.createElement("button",{className:"btn",onClick:this.handleClear},r.a.createElement("i",{className:"fa fa-trash"}),"Clear"))),""!==this.state.ready&&r.a.createElement("div",null,r.a.createElement("h1",{id:"search"}," Search Result"),r.a.createElement(k,{search:this.state.ready})))}}]),t}(r.a.Component),O=function(){return r.a.createElement("nav",{className:"nav-bar",id:"nav-bar"},r.a.createElement("ul",{className:"header-ul-list"},r.a.createElement("li",{className:"nav-link"},r.a.createElement("a",{href:"#search"},r.a.createElement("i",{className:"fa fa-search"}),"Results")),r.a.createElement("li",{className:"nav-link"},r.a.createElement("a",{href:"#popular"},r.a.createElement("i",{className:"fa fa-film"}),"Popular"))))},w=function(){return r.a.createElement("footer",null,r.a.createElement("a",{className:"aclass footer",target:"_blank",href:"https://github.com/falcon78/reactmovie"},r.a.createElement("i",{className:"fa fa-github"})," Github"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.cf1b9ba7.chunk.js.map