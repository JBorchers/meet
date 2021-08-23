(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(27),o=n.n(s),c=(n(35),n(5)),i=n(8),u=n(7),l=n(6),h=(n(36),n(60)),d=n(61),p=n(62),f=n(0),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1},e.toggleShowMore=function(){e.setState({showMore:!e.state.showMore})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(f.jsx)(h.a,{children:Object(f.jsx)(d.a,{children:Object(f.jsxs)(p.a,{className:"event-wrapper",children:[Object(f.jsx)("h2",{className:"event-title",children:e.summary}),Object(f.jsxs)("div",{className:"event-time",children:[Object(f.jsx)("span",{children:e.start.dateTime}),Object(f.jsx)("span",{children:" (".concat(e.start.timeZone,") ")})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[e.summary," | "]}),Object(f.jsx)("span",{children:e.location})]}),this.state.showMore?Object(f.jsxs)("div",{className:"show-more",children:[Object(f.jsx)("h4",{children:"About event:"}),Object(f.jsx)("a",{href:e.htmlLink,children:"See details"}),Object(f.jsx)("p",{className:"event-description",children:e.description})]}):"",Object(f.jsx)("div",{className:"btn-wrapper",children:Object(f.jsx)("button",{onClick:this.toggleShowMore,children:this.state.showMore?"Show less":"Show more"})})]})})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"event-list",children:e.map((function(e){return Object(f.jsx)("li",{className:"event-list-item",children:Object(f.jsx)(m,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component)),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(e.setState({query:n,suggestions:a}),0===n.length?e.setState({showSuggestions:void 0}):e.setState({showSuggestions:!0}),0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can't find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(b,{text:this.state.infoText}),Object(f.jsx)("label",{children:"Search Events in a Specific City"}),Object(f.jsx)("input",{placeholder:"Search for a City",type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;if(n<1)return e.setState({numberOfEvents:""});n>32?e.setState({numberOfEvents:""}):(e.setState({numberOfEvents:n}),e.props.updateEventsLength(n))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"numberOfEvents",children:[Object(f.jsx)("label",{className:"events-input",children:"See a Number of Events"}),Object(f.jsx)("input",{type:"number",placeholder:"Enter a number of events",className:"numberInput",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})}}]),n}(a.Component),w=n(11),O=n.n(w),y=n(13),x=n(30),S=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),k=n(17),E=n.n(k),T=n(14),C=n.n(T),Z=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))},N=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},I=function(){var e=Object(y.a)(O.a.mark((function e(t){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://u9uttyc113.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(y.a)(O.a.mark((function e(){var t,n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",S);case 4:return e.next=6,A();case 6:if(!(t=e.sent)){e.next=16;break}return M(),n="https://u9uttyc113.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,E.a.get(n);case 12:return(a=e.sent).data&&(r=Z(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),C.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(O.a.mark((function e(){var t,n,a,r,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://u9uttyc113.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&I(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=(n(56),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],NumberOfEvents:32,defaultEvents:"all"},e.updateEvents=function(t,n){q().then((function(a){var r="all"===t?a.slice(0,e.state.numberOfEvents):a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),defaultEvents:t})}))},e}return Object(i.a)(n,[{key:"updateEventsLength",value:function(e){this.setState({numberOfEvents:e});var t=this.state.defaultEvents;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=this,t=this.state.numberOfEvents;this.mounted=!0,q().then((function(n){e.mounted&&e.setState({events:n.slice(0,t),locations:Z(n)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(g,{numberOfEvents:this.state.numberOfEvents,updateEventsLength:function(t){return e.updateEventsLength(t)}}),Object(f.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};n(29).config("54c892738c364e39a951dc281937d5ac").install(),o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),W()}},[[58,1,2]]]);
//# sourceMappingURL=main.49d0ec5d.chunk.js.map