(function(e){function t(t){for(var a,r,c=t[0],l=t[1],u=t[2],s=0,h=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-5cc86dba":"cc8f20de","chunk-2d0cf8c7":"4066271c","chunk-2d0dd84b":"d9b3f834","chunk-2d0e5060":"fa822f1d","chunk-2d0e57ae":"696a0c56","chunk-2d20f30b":"c9ef5162","chunk-2d20fac7":"a9dc93be","chunk-2d217aa5":"057b9fec","chunk-4c17e280":"e23856df"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-5cc86dba":1,"chunk-4c17e280":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-5cc86dba":"85e964b6","chunk-2d0cf8c7":"31d6cfe0","chunk-2d0dd84b":"31d6cfe0","chunk-2d0e5060":"31d6cfe0","chunk-2d0e57ae":"31d6cfe0","chunk-2d20f30b":"31d6cfe0","chunk-2d20fac7":"31d6cfe0","chunk-2d217aa5":"31d6cfe0","chunk-4c17e280":"e2c24d2a"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===o))return t()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],s=u.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var h=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2dc5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{class:e.getTheme,attrs:{id:"app"}},[n("TopNavBar"),n("v-main",[n("router-view")],1),n("Footer")],1)},o=[],i=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{class:e.getTheme,attrs:{app:"",dark:"",color:"#292929",height:"50"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",to:"/"},on:{click:function(t){return e.$vuetify.goTo("#about-me")}}},[n("v-icon",[e._v("mdi-home")])],1),"/"===e.$route.path&&e.showNavContent?n("div",[n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#about-me")}}},[e._v(" "+e._s(e.navigation.about)+" ")]),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#career")}}},[e._v(" "+e._s(e.navigation.career)+" ")]),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#skills")}}},[e._v(" "+e._s(e.navigation.skills)+" ")]),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#projects")}}},[e._v(" "+e._s(e.navigation.projects)+" ")]),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$vuetify.goTo("#contact")}}},[e._v(" "+e._s(e.navigation.contact)+" ")])],1):e._e(),n("FlagDropDown"),n("ThemeChanger"),n("v-spacer")],1)},l=[],u=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{dark:"darkTheme"===e.getTheme,auto:"","offset-y":"",bottom:"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-app-bar-nav-icon",e._g({attrs:{icon:""}},a),[n("flag",{attrs:{iso:e.Flag,squared:!1}})],1)]}}])},e._l(e.languages,(function(t){return n("v-btn",{key:t.title,on:{click:function(n){return e.changeLocale(t.language)}}},[n("flag",{attrs:{iso:t.flag,squared:!1}})],1)})),1)}),s=[],h=n("2f62"),d=n("a925");a["a"].use(d["a"]);var g={de:{labels:{Flag:"de"},navigation:{footer:"Erstellt von Dominik Ratzel",about:"Über mich",skills:"IT-Kenntnisse",projects:"Projekte",contact:"Kontakt",career:"Karriere"},content:{welcome1:"Hey, ich bin Dominik.",welcome2:"Ich studiere Informatik an der Hochschule der Medien in Stuttgart."},career:{realschule:"Realschulabschluss CHR Nagold",imtech:"Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Imtech Deutschland GmbH & Co. KG Niederlassung Stuttgart",brenner1:"Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen",brenner2:"Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen",fhs:"1-jährige Fachhochschulreife an der Rolf-Benz-Schule in Nagold",damiler:"Ferienbeschäftigung bei Daimler AG",bachelor:"Bachelor Studium im Fachbereich Medieninformatik an der Hochschule der Medien in Stuttgart",fraunhofer1:"Werkstudent im Bereich Entwicklung von Diensten für Cloud-Plattformen bei Fraunhofer-Institut für Produktionstechnik und Automatisierung IPA in Stuttgart",novatec:"Praktikant im Praxissemester im Bereich Digital Innovation bei Novatec Consulting GmbH in Leinfelden-Echterdingen",startup:"Gründung des Startups Hyphen Technologies mit 3 Partnern"},careerHeadlines:{realschule:"Realschulabschluss",imtech:"Ausbildung bei Imtech",brenner1:"Ausbildung bei Elektrohaus Brenner",brenner2:"Elektroniker bei Elektrohaus Brenner",fhs:"Fachhochschulreife",damiler:"Ferienbeschäftigung bei Daimler AG",bachelor:"Bachelor Studium",fraunhofer1:"Werkstudent bei Fraunhofer-Institut",novatec:"Praktikant bei Novatec Consulting GmbH",startup:"Gründung Startups"},buttons:{reading:"Weiterlesen",submit:"Senden"},projectHeadlines:{gameHall:"Online Spielehalle",startup:"Hyphen Technologies",webShop:"Online Shop",deviceManagement:"Geräte- und Serviceverwaltung",parkingSystem:"Parkleitsystem",hinH:"Hand in Hand Spendenlauf Stuttgart",beGuided:"BeGuided Design"},projectsText:{gameHall:"Casino WebApp mit Benutzerverwaltung",startup:"Startup Hyphen Technologies",webShop:"Webshop WebApp mit Benutzerverwaltung",deviceManagement:"Geräte- und Serviceverwaltungsanwendung WebApp erstellt bei Fraunhofer",parkingSystem:"IoT and Cloud Service Projekt für ein Parkleitsyystem",hinH:"Middleware Server für den Hand in Hand Spendenlauf Stuttgart erstellt bei Novatec",beGuided:"BeGuided Design erstellt bei Novatec"},fields:{name:"Name*",subject:"Betreff*",message:"Nachricht*"}},en:{labels:{Flag:"us"},navigation:{footer:"Created by Dominik Ratzel",about:"About",skills:"IT-Skills",projects:"Projects",contact:"Contact",career:"Career"},content:{welcome1:"Hey, I'm Dominik.",welcome2:"I study computer science at the Stuttgart Media University."},career:{realschule:"High school diploma CHR Nagold",imtech:"Training as electronics technician for energy and building technology at Imtech Deutschland GmbH & Co. KG ",brenner1:"Training as electronics technician for energy and building technology at Elektrohaus Brenner in Kuppingen",brenner2:"Electronics technician for energy and building technology at Elektrohaus Brenner in Kuppingen",fhs:"1-year technical college entrance qualification at the Rolf Benz School in Nagold",damiler:"Holiday employment at Daimler AG",bachelor:"Bachelor's degree in media informatics at the Stuttgart Media University",fraunhofer1:"Working student in the area of developing services for cloud platforms at the Fraunhofer Institute for Manufacturing Engineering and Automation IPA in Stuttgart",novatec:"Internship in the practical semester in the field of digital innovation at Novatec Consulting GmbH in Leinfelden-Echterdingen",startup:"Founding of the startup Hyphen Technologies with 3 partners"},careerHeadlines:{realschule:"High school diploma",imtech:"Training at Imtech",brenner1:"Training at Elektrohaus Brenner",brenner2:"Electronics technician at Elektrohaus Brenner",fhs:"Advanced technical college",damiler:"Vacation employment at Daimler AG",bachelor:"Bachelor study",fraunhofer1:"Working student at Fraunhofer Institute\n",novatec:"Trainee at Novatec Consulting GmbH\n",startup:"Founding of the startup"},buttons:{reading:"Continue Reading",submit:"Submit"},projectHeadlines:{gameHall:"Online game hall",startup:"Hyphen Technologies",webShop:"WebShop",deviceManagement:"Device and service management",parkingSystem:"Parking control system",hinH:"Hand in hand charity run Stuttgart",beGuided:"BeGuided Design"},projectsText:{gameHall:"Casino WebApp with user management",startup:"Startup Hyphen Technologies",webShop:"Webshop WebApp with user management",deviceManagement:"Device and service management application WebApp created at Fraunhofer",parkingSystem:"IoT and Cloud Service project for a parking guidance system",hinH:"Middleware Server for the Hand in Hand Spendenlauf Stuttgart created at Novatec",beGuided:"BeGuided Design created at Novatec"},fields:{name:"Name*",subject:"Subject*",message:"Message*"}}},m=new d["a"]({locale:localStorage.getItem("Language")|Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"de",fallbackLocale:localStorage.getItem("Language")|Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"de",messages:g}),f={name:"FlagDropDown",computed:Object(i["a"])(Object(i["a"])({},Object(h["b"])(["languages","getTheme"])),{},{Flag:function(){return this.$t("labels.Flag")}}),beforeCreate:function(){console.log("Before Create"),this.$locale.currentLanguage()},methods:{changeLocale:function(e){console.log("Changing Locale"),m.locale=e,this.$locale.change(e)}}},p=f,b=n("2877"),v=n("6544"),k=n.n(v),y=n("5bc1"),T=n("8336"),S=n("e449"),E=Object(b["a"])(p,u,s,!1,null,"09069218",null),_=E.exports;k()(E,{VAppBarNavIcon:y["a"],VBtn:T["a"],VMenu:S["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar-nav-icon",{staticClass:"navHover",on:{click:function(t){return e.$store.commit("UPDATE_THEME")}}},["lightTheme"===e.getTheme?n("v-icon",[e._v(" mdi-white-balance-sunny ")]):"darkTheme"===e.getTheme?n("v-icon",[e._v(" mdi-brightness-2 ")]):e._e()],1)},w=[],j={name:"ThemeChanger",computed:Object(i["a"])({},Object(h["b"])(["getTheme"]))},A=j,P=n("132d"),C=Object(b["a"])(A,H,w,!1,null,"007dd583",null),I=C.exports;k()(C,{VAppBarNavIcon:y["a"],VIcon:P["a"]});var B={name:"TopNavBar",components:{ThemeChanger:I,FlagDropDown:_},computed:Object(i["a"])(Object(i["a"])({},Object(h["b"])(["getTheme"])),{},{showNavContent:function(){if("lg"===this.$vuetify.breakpoint.name||"xl"===this.$vuetify.breakpoint.name)return!0},navigation:function(){return this.$t("navigation")}})},F=B,O=(n("ef92"),n("40dc")),N=n("2fa4"),D=Object(b["a"])(F,c,l,!1,null,"0b2a4652",null),L=D.exports;k()(D,{VAppBar:O["a"],VBtn:T["a"],VIcon:P["a"],VSpacer:N["a"]});var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"justify-center",attrs:{color:"#292929",height:"50"}},[n("div",{staticClass:"title font-weight-light grey--text text--lighten-1 text-center"},[e._v(" © "+e._s((new Date).getFullYear())+" "+e._s(e.navigation.footer)+" ")])])},M=[],x={name:"Footer",computed:{navigation:function(){return this.$t("navigation")}}},$=x,V=n("553a"),W=Object(b["a"])($,G,M,!1,null,"2f84c551",null),R=W.exports;k()(W,{VFooter:V["a"]});var K={name:"App",components:{Footer:R,TopNavBar:L},data:function(){return{}},computed:Object(i["a"])({},Object(h["b"])(["getTheme"]))},U=K,z=(n("fb9f"),n("7496")),q=n("f6c4"),J=Object(b["a"])(U,r,o,!1,null,null,null),Y=J.exports;k()(J,{VApp:z["a"],VMain:q["a"]});n("d3b7");var Q=n("8c4f");a["a"].use(Q["a"]);var X=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-4c17e280")]).then(n.bind(null,"bb51"))}},{path:"/MiniSpielehalle",name:"MiniSpielehalle",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d217aa5")]).then(n.bind(null,"c860"))}},{path:"/HyphenTechnologies",name:"Hyphen Technologies",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d0dd84b")]).then(n.bind(null,"8272"))}},{path:"/ParkingControlSystem",name:"Parking Control System",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d0cf8c7")]).then(n.bind(null,"63d8"))}},{path:"/WebShop",name:"WebShop",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d0e5060")]).then(n.bind(null,"935e"))}},{path:"/DeviceManagement",name:"DeviceManagement",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d20f30b")]).then(n.bind(null,"b326"))}},{path:"/HandInHand",name:"HandInHand",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d20fac7")]).then(n.bind(null,"b542"))}},{path:"/BeGuided",name:"BeGuided",component:function(){return Promise.all([n.e("chunk-5cc86dba"),n.e("chunk-2d0e57ae")]).then(n.bind(null,"9551"))}}],Z=new Q["a"]({routes:X}),ee=Z,te={state:{theme:"darkTheme"},getters:{getTheme:function(e){return e.theme}},actions:{},mutations:{UPDATE_THEME:function(e){"lightTheme"===e.theme?e.theme="darkTheme":"darkTheme"===e.theme&&(e.theme="lightTheme")}}},ne={state:{languages:[{flag:"de",language:"de",title:"de"},{flag:"us",language:"en",title:"en"}],currents:m.t("labels.Flag")},getters:{languages:function(e){return e.languages},currents:function(e){return null!==localStorage.getItem("Language")?localStorage.getItem("Language"):e.currents}},actions:{},mutations:{}},ae={state:{theme:null!==localStorage.getItem("Theme")?localStorage.getItem("Theme"):"lightTheme"},getters:{getTheme:function(e){return e.theme}},actions:{},mutations:{UPDATE_THEME:function(e){"lightTheme"===e.theme?(e.theme="darkTheme",localStorage.setItem("Theme","darkTheme")):"darkTheme"===e.theme&&(e.theme="lightTheme",localStorage.setItem("Theme","lightTheme"))}}};a["a"].use(h["a"]);var re=new h["a"].Store({state:{},mutations:{},actions:{},modules:{projects:te,language:ne,style:ae}}),oe=n("f309"),ie=(n("15f5"),n("d1e78"),n("5363"),n("1f54"),n("5607"));a["a"].use(oe["a"]),a["a"].use(d["a"]);var ce=new d["a"]({locale:localStorage.getItem("Language")||"en",fallbackLocale:localStorage.getItem("Language")||"en",silentTranslationWarn:!0,silentFallbackWarn:!0});a["a"].config.disableNoTranslationWarning=!0,a["a"].prototype.$locale={change:function(e){ce.locale=e,localStorage.setItem("Language",e)},currentLanguage:function(){return null!==localStorage.getItem("Language")?localStorage.getItem("Language"):ce.locale}};var le=new oe["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa"},lang:{t:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return ce.t(e,n)}},directives:{Ripple:ie["a"]}}),ue=(n("d5e8"),n("6f19")),se=n("7bb1"),he=n("d61f");a["a"].component("ValidationProvider",ue["a"]),a["a"].component("ValidationObserver",se["a"]),a["a"].use(he["a"]),a["a"].config.productionTip=!1,new a["a"]({router:ee,store:re,vuetify:le,i18n:m,render:function(e){return e(Y)}}).$mount("#app")},6630:function(e,t,n){},ef92:function(e,t,n){"use strict";n("2dc5")},fb9f:function(e,t,n){"use strict";n("6630")}});
//# sourceMappingURL=app.5c7b1a73.js.map