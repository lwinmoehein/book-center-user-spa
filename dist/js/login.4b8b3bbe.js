(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"max-w-sm p-5 m-auto"},[a("h2",{staticClass:"mb-4 text-xl font-bold text-center"},[e._v("Login")]),a("LoginForm",{staticClass:"p-5 bg-white border rounded shadow"}),a("p",{staticClass:"mt-2 text-center text-gray-500"},[a("router-link",{staticClass:"text-pink-500 transition hover:text-pink-600",attrs:{to:"/register"}},[e._v("Register for an account")])],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[a("BaseInput",{staticClass:"mb-2",attrs:{type:"email",label:"Email",name:"email",autocomplete:"email",placeholder:"luke@jedi.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("BaseInput",{staticClass:"mb-4",attrs:{type:"password",label:"Password",name:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("div",{staticClass:"flex justify-between"},[a("BaseBtn",{attrs:{type:"submit",text:"Login"}}),a("router-link",{staticClass:"text-sm base-link",attrs:{to:"/forgot-password"}},[e._v(" Forgot your password? ")])],1),a("FlashMessage",{attrs:{error:e.error,isLoggedIn:!1}})],1)},o=[],l=(a("b0c0"),a("96cf"),a("1da1")),i=a("2fa3"),u=a("68f7"),c=a("b3b3"),p=a("b012"),m=a("2f86"),d={name:"LoginView",components:{BaseBtn:u["a"],BaseInput:c["a"],FlashMessage:m["a"]},data:function(){return{email:null,password:null,error:null}},methods:{login:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={email:e.email,password:e.password},e.error=null,t.prev=2,t.next=5,p["a"].login(a);case 5:return t.next=7,e.$store.dispatch("auth/getAuthUser");case 7:if(s=t.sent,!s){t.next=13;break}e.$store.dispatch("auth/setGuest",{value:"isNotGuest"}),e.$router.push("/dashboard"),t.next=16;break;case 13:throw r=Error("Unable to fetch user after login, check your API settings."),r.name="Fetch User",r;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](2),e.error=Object(i["a"])(t.t0);case 21:case"end":return t.stop()}}),t,null,[[2,18]])})))()}}},b=d,f=a("2877"),w=Object(f["a"])(b,n,o,!1,null,null,null),h=w.exports,g={name:"LoginView",components:{LoginForm:h}},x=g,v=Object(f["a"])(x,s,r,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=login.4b8b3bbe.js.map