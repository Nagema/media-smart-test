(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(35)},30:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),m=(t(30),t(18)),i=t(5),s=t(6),o=t(8),d=t(7),u=t(12),b=t(9),h=t(11),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header header-app"},r.a.createElement("div",{className:"header-container"},r.a.createElement("img",{src:"https://www.mediasmart.io/assets/images/logo-mediasmart.png",alt:"Logo of mediasmart",className:"mediasmart-logo"}),r.a.createElement("h1",{className:"main-title header-title"},"Members")))}}]),a}(r.a.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"loading-wrapper"},r.a.createElement("div",{className:"loading"},r.a.createElement("h1",{className:"logo-icon"},"#"))))}}]),a}(r.a.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.members,t=e.handleLoadMore,n=e.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("main",null,r.a.createElement("ul",{className:"member-list"},a.map(function(e,a){return r.a.createElement("li",{className:"list-container",key:a},r.a.createElement(h.b,{to:"/".concat(e.name,"/").concat(e.id),style:{textDecoration:"none"}},r.a.createElement("div",{className:" list-info"},r.a.createElement("div",{className:" list-info-wrapper"},r.a.createElement("img",{src:e.image,alt:"".concat(e.name," pic"),className:"member-list-photo"}),r.a.createElement("h2",{className:" member-list-name"},e.name)),r.a.createElement("h3",{className:" member-list-age"},"Age: ",e.age," years old"))))})),r.a.createElement("div",{className:"load-btn-wrapper"},n?r.a.createElement(E,null):r.a.createElement("button",{className:"load-more-btn",onClick:t},"Load more"))))}}]),a}(r.a.Component),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).state={showMore:!1},t.handleShowMore=t.handleShowMore.bind(Object(u.a)(t)),t}return Object(b.a)(a,e),Object(s.a)(a,[{key:"handleShowMore",value:function(){this.setState({showMore:!0})}},{key:"render",value:function(){var e=this.props,a=e.members,t=e.memberId;if(e.isLoading)return r.a.createElement("div",{className:"loading-member-detail"},r.a.createElement(E,null));var n=a.find(function(e){return e.id===t}),l=n.bio.length>200&&!1===this.state.showMore?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n.bio.slice(0,200)+"..."),r.a.createElement("button",{className:"show-more-btn",onClick:this.handleShowMore},"Show more")):n.bio;return n?r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("main",{className:"member-detail-container"},r.a.createElement("div",{className:"member-detail-wrapper"},r.a.createElement("div",{className:"member-detail-info",key:n.id},r.a.createElement("div",{className:"member-detail-main-info "},r.a.createElement("img",{src:n.image,alt:"img",className:"member-detail-photo"}),r.a.createElement("div",{className:"member-detail-data"},r.a.createElement("h2",{className:"member-detail-name"},"Name: ",n.name),r.a.createElement("h3",{className:"member-detail-age"},"Age: ",n.age))),r.a.createElement("div",null,r.a.createElement("div",{className:"member-bio"},"Bio:",r.a.createElement("div",null,l))),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement(h.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("button",{className:"go-back-btn"},"Back"))))))):r.a.createElement(E,null)}}]),a}(r.a.Component),v=t(10),N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).state={members:[],isLoading:!0,page:1},t.handleLoadMore=t.handleLoadMore.bind(Object(u.a)(t)),t}return Object(b.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.FetchAllData()}},{key:"FetchAllData",value:function(){var e=this;this.setState({isLoading:!0}),function(e){var a=e.page,t=e.pageSize;return fetch("".concat("/members","?page=").concat(a,"&page_size=").concat(t),{headers:{authorization:"mediasmart2019"}}).then(function(e){return e.json()})}({page:this.state.page,pageSize:20}).then(function(a){e.setState({members:[].concat(Object(m.a)(e.state.members),Object(m.a)(a)),isLoading:!1})})}},{key:"handleLoadMore",value:function(){this.setState({page:this.state.page+1}),this.FetchAllData()}},{key:"render",value:function(){var e=this,a=this.state,t=a.members,n=a.isLoading;return r.a.createElement("div",{className:"App"},r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{members:t,handleLoadMore:e.handleLoadMore,isLoading:n})}}),r.a.createElement(v.a,{path:"/:memberDetail/:id",render:function(e){return r.a.createElement(f,{memberId:e.match.params.id,members:t,isLoading:n})}})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(h.a,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d5c91546.chunk.js.map