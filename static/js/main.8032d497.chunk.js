(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(27),s=n.n(o),i=(n(35),n(11)),c=n.n(i),u=n(12),l=n(3),h=n(8),d=n(5),f=n(4),p=(n(37),n(61)),v=n(62),m=n(63),b=n(0),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showMore:!1},e.toggleShowMore=function(){e.setState({showMore:!e.state.showMore})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(b.jsx)(p.a,{children:Object(b.jsx)(v.a,{children:Object(b.jsxs)(m.a,{className:"event-wrapper",children:[Object(b.jsx)("h2",{className:"event-title",children:e.summary}),Object(b.jsxs)("div",{className:"event-time",children:[Object(b.jsx)("span",{children:e.start.dateTime}),Object(b.jsx)("span",{children:" (".concat(e.start.timeZone,") ")})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[e.summary," | "]}),Object(b.jsx)("span",{children:e.location})]}),this.state.showMore?Object(b.jsxs)("div",{className:"show-more",children:[Object(b.jsx)("h4",{children:"About event:"}),Object(b.jsx)("a",{href:e.htmlLink,children:"See details"}),Object(b.jsx)("p",{className:"event-description",children:e.description})]}):"",Object(b.jsx)("div",{className:"btn-wrapper",children:Object(b.jsx)("button",{onClick:this.toggleShowMore,children:this.state.showMore?"Show less":"Show more"})})]})})})}}]),n}(r.Component),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("ul",{className:"event-list",children:e.map((function(e){return Object(b.jsx)("li",{className:"event-list-item",children:Object(b.jsx)(g,{event:e})},e.id)}))})}}]),n}(r.Component),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,width:"100vw",display:"block",lineHeight:"25px",position:"fixed",top:"0",left:"0"}},r.color=null,r}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).color="blue",r}return n}(w),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).color="red",r}return n}(w),y=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).color="orangered",r}return n}(w),S=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(e.setState({query:n,suggestions:r}),0===n.length?e.setState({showSuggestions:void 0}):e.setState({showSuggestions:!0}),0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We can't find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)(O,{text:this.state.infoText}),Object(b.jsx)("label",{children:"Search Events in a Specific City"}),Object(b.jsx)("input",{placeholder:"Search for a City",type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(r.Component),k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;if(n<1)return e.setState({numberOfEvents:"",errorText:"Enter a number between 1 and 32"});n>32?e.setState({numberOfEvents:"",errorText:"Enter a number between 1 and 32"}):(e.setState({numberOfEvents:n,errorText:""}),e.props.updateEventsLength(n))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"numberOfEvents",children:[Object(b.jsx)("label",{className:"events-input",children:"See a Number of Events"}),Object(b.jsx)("input",{type:"number",placeholder:"Enter a number of events",className:"numberInput",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(b.jsx)(x,{text:this.state.errorText})]})}}]),n}(r.Component),T=n(30),E=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),C=n(17),N=n.n(C),W=n(14),Z=n.n(W),L=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},M=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},A=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://u9uttyc113.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",E);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,q();case 10:if(!(n=e.sent)){e.next=20;break}return I(),r="https://u9uttyc113.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,N.a.get(r);case 16:return(a=e.sent).data&&(o=L(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,r,a,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,N.a.get("https://u9uttyc113.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",a&&A(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(56),n(57);var J=function(e){return e.showWelcomeScreen?Object(b.jsxs)("div",{className:"WelcomeScreen",children:[Object(b.jsx)("h1",{children:"Welcome to the Meet app"}),Object(b.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(b.jsx)("div",{className:"button_cont",align:"center",children:Object(b.jsxs)("div",{class:"google-btn",children:[Object(b.jsx)("div",{class:"google-icon-wrapper",children:Object(b.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r o.svg",alt:"Google sign-in"})}),Object(b.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(b.jsx)("b",{children:"Sign in with google"})})]})}),Object(b.jsx)("a",{href:"https://YOUR_GITHUB_USERNAME.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},R=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],NumberOfEvents:32,defaultEvents:"all",warningText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){U().then((function(r){var a="all"===t?r.slice(0,e.state.numberOfEvents):r.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:a.slice(0,n),defaultEvents:t})}))},e}return Object(h.a)(n,[{key:"updateEventsLength",value:function(e){this.setState({numberOfEvents:e});var t=this.state.defaultEvents;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,r,a,o,s=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.numberOfEvents,this.mounted=!0,n=localStorage.getItem("access_token"),e.next=5,M(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:r=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||r)}),navigator.onLine||this.setState({warningText:"You are currently offline. Some features of the app might be limited"}),window.addEventListener("offline",(function(){s.setState({warningText:"You are currently offline. Some features of the app might be limited!"})})),window.addEventListener("online",(function(){s.setState({warningText:"You are back online!"}),setTimeout((function(){s.setState({warningText:""})}),3e3)})),(o||r)&&this.mounted&&U().then((function(e){s.mounted&&s.setState({events:e.slice(0,t),locations:L(e)})}));case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=this;this.mounted=!1,window.removeEventListener("offline",(function(){e.setState({warningText:"You are currently offline. Some features of the app might be limited!"})})),window.removeEventListener("online",(function(){e.setState({warningText:"You are back online!"}),setTimeout((function(){e.setState({warningText:""})}),3e3)}))}},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?Object(b.jsx)("div",{className:"App"}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(y,{text:this.state.warningText}),Object(b.jsx)(S,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(b.jsx)(k,{numberOfEvents:this.state.numberOfEvents,updateEventsLength:function(t){return e.updateEventsLength(t)}}),Object(b.jsx)(j,{events:this.state.events}),Object(b.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){q()}})]})}}]),n}(r.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))};n(29).config("54c892738c364e39a951dc281937d5ac").install(),s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(t,e)}))}}(),Y()}},[[59,1,2]]]);
//# sourceMappingURL=main.8032d497.chunk.js.map