(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],d=0,g=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&g.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(g.length)g.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function s(e){return i.p+"js/"+({dashboard:"dashboard","forgot-password":"forgot-password",home:"home",login:"login","not-found":"not-found",register:"register","reset-password":"reset-password",user:"user",users:"users"}[e]||e)+"."+{dashboard:"7f00bc91","forgot-password":"c0217766",home:"ea271cac",login:"5d4e55e7","not-found":"eaab7328",register:"ee91e0ca","reset-password":"30970532",user:"61eae524",users:"a62f65d9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,a[1](u)}n[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2fa3":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r=e=>{const t="Error, please try again.";return"Fetch User"===e.name?e.message:e.response?e.response.data&&e.response.data.errors?e.response.data.errors:t:(console.error(`API ${e.config.url} not found`),t)}},3678:function(e,t,a){"use strict";var r=a("fce9");t["a"]={getAllCategories(e){return r["a"].get("/categories?page="+e)},getCategory(e){return r["a"].get("/categories/"+e)},getUserCategories(){return r["a"].get("/user-categories")},updateCategories(e){return r["a"].post("/users/category",e)},getCategoryBooks(e){return r["a"].get(`/categorie-detail/${e.category_id}?page=${e.page}`)}}},4360:function(e,t,a){"use strict";var r={};a.r(r),a.d(r,"namespaced",(function(){return S})),a.d(r,"state",(function(){return p})),a.d(r,"mutations",(function(){return f})),a.d(r,"actions",(function(){return h})),a.d(r,"getters",(function(){return R}));var n={};a.r(n),a.d(n,"namespaced",(function(){return b})),a.d(n,"state",(function(){return N})),a.d(n,"mutations",(function(){return k})),a.d(n,"actions",(function(){return G})),a.d(n,"getters",(function(){return D}));var o={};a.r(o),a.d(o,"namespaced",(function(){return I})),a.d(o,"state",(function(){return y})),a.d(o,"mutations",(function(){return C})),a.d(o,"actions",(function(){return M})),a.d(o,"getters",(function(){return U}));var s={};a.r(s),a.d(s,"namespaced",(function(){return x})),a.d(s,"state",(function(){return $})),a.d(s,"mutations",(function(){return F})),a.d(s,"actions",(function(){return H})),a.d(s,"getters",(function(){return V}));var i={};a.r(i),a.d(i,"namespaced",(function(){return q})),a.d(i,"state",(function(){return X})),a.d(i,"mutations",(function(){return Z})),a.d(i,"actions",(function(){return ee})),a.d(i,"getters",(function(){return te}));var c={};a.r(c),a.d(c,"namespaced",(function(){return re})),a.d(c,"state",(function(){return oe})),a.d(c,"mutations",(function(){return se})),a.d(c,"actions",(function(){return ie})),a.d(c,"getters",(function(){return ce}));var u={};a.r(u),a.d(u,"namespaced",(function(){return ue})),a.d(u,"state",(function(){return le})),a.d(u,"mutations",(function(){return ge})),a.d(u,"actions",(function(){return _e})),a.d(u,"getters",(function(){return me}));var d={};a.r(d),a.d(d,"namespaced",(function(){return Te})),a.d(d,"state",(function(){return fe})),a.d(d,"mutations",(function(){return he})),a.d(d,"actions",(function(){return Re})),a.d(d,"getters",(function(){return Oe}));var l={};a.r(l),a.d(l,"namespaced",(function(){return Ae})),a.d(l,"state",(function(){return Ne})),a.d(l,"mutations",(function(){return ke})),a.d(l,"actions",(function(){return Ge})),a.d(l,"getters",(function(){return De}));var g=a("2b0e"),_=a("2f62"),m=(a("14d9"),a("a18c")),E=a("2fa3"),T=a("b012");const S=!0,p={user:null,loading:!1,error:null},f={SET_USER(e,t){e.user=t},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t}},h={logout({commit:e,dispatch:t}){return T["a"].logout().then(()=>{e("SET_USER",null),t("setGuest",{value:"isGuest"}),"login"!==m["a"].currentRoute.name&&m["a"].push({path:"/login"})}).catch(t=>{e("SET_ERROR",Object(E["a"])(t))})},async getAuthUser({commit:e}){e("SET_LOADING",!0);try{const t=await T["a"].getAuthUser();return e("SET_USER",t.data.data),e("SET_LOADING",!1),t.data.data}catch(t){e("SET_LOADING",!1),e("SET_USER",null),e("SET_ERROR",Object(E["a"])(t))}},setGuest(e,{value:t}){window.localStorage.setItem("guest",t)}},R={authUser:e=>e.user,isAdmin:e=>!!e.user&&e.user.isAdmin,error:e=>e.error,loading:e=>e.loading,loggedIn:e=>!!e.user,guest:()=>{const e=window.localStorage.getItem("guest");return!!e&&("isGuest"===e||"isNotGuest"!==e&&void 0)}};var O=a("fce9"),A={getUser(e){return O["a"].get("/users/"+e)},getUsers(e){return O["a"].get("/users?page="+e)},paginateUsers(e){return O["a"].get(e)}};const b=!0;function w(e,t){e("SET_USERS",t.data.data),e("SET_META",t.data.meta),e("SET_LINKS",t.data.links),e("SET_LOADING",!1)}const N={users:[],meta:null,links:null,loading:!1,error:null},k={SET_USERS(e,t){e.users=t},SET_META(e,t){e.meta=t},SET_LINKS(e,t){e.links=t},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t}},G={getUsers({commit:e},t){e("SET_LOADING",!0),A.getUsers(t).then(t=>{w(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},paginateUsers({commit:e},t){e("SET_LOADING",!0),A.paginateUsers(t).then(t=>{w(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})}},D={users:e=>e.users,meta:e=>e.meta,links:e=>e.links,loading:e=>e.loading,error:e=>e.error};var L={getMessages(e){return O["a"].get("/messages?page="+e)},postMessage(e){return O["a"].post("/messages",e)},paginateMessages(e){return O["a"].get(e)}};const I=!0;function v(e,t){e("SET_MESSAGES",t.data.data),e("SET_META",t.data.meta),e("SET_LINKS",t.data.links),e("SET_LOADING",!1)}const y={messages:[],meta:null,links:null,loading:!1,error:null},C={SET_MESSAGES(e,t){e.messages=t},SET_META(e,t){e.meta=t},SET_LINKS(e,t){e.links=t},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t}},M={getMessages({commit:e},t){e("SET_LOADING",!0),L.getMessages(t).then(t=>{v(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},postMessage({commit:e},t){return L.postMessage(t).then(t=>{v(e,t)})},paginateMessages({commit:e},t){e("SET_LOADING",!0),L.paginateMessages(t).then(t=>{v(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})}},U={messages:e=>e.messages,meta:e=>e.meta,links:e=>e.links,loading:e=>e.loading,error:e=>e.error};var j={getBooks(e){return O["a"].get(`/books?page=${e.page}&languages=${e.languages}`)},getRecommendedBooks(e){return O["a"].get(`/recommended-books?page=${e.page}&languages=${e.languages}`)},postBook(e){return O["a"].post("/books",e)},paginateBooks(e){return O["a"].get(e)},getBook(e){return O["a"].get("/books/"+e.id)},postReview(e){return O["a"].post("/reviews",e)},updateReview(e){return O["a"].patch("/reviews/"+e.review_id,e)},deleteReview(e){return O["a"].delete("/reviews/"+e.id)}};const x=!0;function P(e,t){e("SET_BOOKS",t.data.data),e("SET_META",t.data.meta),e("SET_LINKS",t.data.links),e("SET_LOADING",!1)}function B(e,t){e("SET_PAGINATED_BOOKS",t.data.data),e("SET_META",t.data.meta),e("SET_LINKS",t.data.links),e("SET_LOADING",!1)}function K(e,t){e("SET_RECOMMENDED_BOOKS",t.data.data),e("SET_META",t.data.meta),e("SET_LINKS",t.data.links),e("SET_LOADING",!1)}function W(e,t){e("SET_PAGINATED_RECOMMENDED_BOOKS",t.data.data),e("SET_RECOMMENDED_META",t.data.meta),e("SET_RECOMMENDED_LINKS",t.data.links),e("SET_LOADING",!1)}const $={books:[],meta:null,links:null,recommended_books:[],recommended_meta:null,recommended_links:null,loading:!1,error:null,current_top_page:1,current_recommended_page:1,current_tab:1},F={SET_BOOKS(e,t){e.books=t},SET_PAGINATED_BOOKS(e,t){e.books=e.books.concat(t)},SET_RECOMMENDED_BOOKS(e,t){e.recommended_books=t},SET_PAGINATED_RECOMMENDED_BOOKS(e,t){e.recommended_books=e.recommended_books.concat(t)},SET_RECOMMENDED_META(e,t){e.recommended_meta=t},SET_RECOMMENDED_LINKS(e,t){e.recommended_links=t},SET_CURRENT_TOP_PAGE(e,t){e.current_top_page=t},SET_CURRENT_RECOMMENDED_PAGE(e,t){e.current_recommended_page=t},SET_CURRENT_TAB(e,t){e.current_tab=t},SET_META(e,t){e.meta=t},SET_LINKS(e,t){e.links=t},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t}},H={getBooks({commit:e},t){e("SET_LOADING",!0),j.getBooks(t).then(a=>{t.isPaginated?B(e,a):P(e,a)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},getRecommendedBooks({commit:e},t){e("SET_LOADING",!0),j.getRecommendedBooks(t).then(a=>{t.isPaginated?W(e,a):K(e,a)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},postBook({commit:e},t){return j.postBook(t).then(t=>{B(e,t)})},paginateBooks({commit:e},t){e("SET_LOADING",!0),j.paginateBooks(t).then(t=>{B(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},paginateRecommendedBooks({commit:e},t){e("SET_LOADING",!0),j.paginateBooks(t).then(t=>{W(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},setCurrentTopPage({commit:e},t){e("SET_CURRENT_TOP_PAGE",t)},setCurrentRecommendedPage({commit:e},t){e("SET_CURRENT_RECOMMENDED_PAGE",t)},setCurrentTab({commit:e},t){e("SET_CURRENT_TAB",t)}},V={books:e=>e.books,meta:e=>e.meta,current_top_page:e=>e.current_top_page,current_recommended_page:e=>e.current_recommended_page,current_tab:e=>e.current_tab,links:e=>e.links,recommended_books:e=>e.recommended_books,recommended_meta:e=>e.recommended_meta,recommended_links:e=>e.recommended_links,loading:e=>e.loading,error:e=>e.error};var Y=a("3678");const q=!0;function J(e,t){e("SET_USER_CATEGORIES",t.data.data),e("SET_LOADING",!1)}function z(e,t){e("SET_ALL_CATEGORIES",t.data.data),e("SET_LOADING",!1)}function Q(e,t){e("SET_SELECTED_CATEGORY",t.data.data),e("SET_LOADING",!1)}const X={user_categories:[],initial_selected_categories:[],all_categories:[],selected_category:null,loading:!1,error:null},Z={SET_USER_CATEGORIES(e,t){e.user_categories=t},SET_ALL_CATEGORIES(e,t){e.all_categories=t},SET_SELECTED_CATEGORY(e,t){e.selected_category=t},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t}},ee={getUserCategories({commit:e}){e("SET_LOADING",!0),Y["a"].getUserCategories().then(t=>{J(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},getAllCategories({commit:e}){e("SET_LOADING",!0),Y["a"].getAllCategories().then(t=>{z(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},getCategory({commit:e},t){e("SET_LOADING",!0),Y["a"].getCategory(t).then(t=>{Q(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},setError({commit:e},t){e("SET_ERROR",t)}},te={user_categories:e=>e.user_categories,all_categories:e=>e.all_categories,selected_category:e=>e.selected_category,loading:e=>e.loading,error:e=>e.error};var ae={getAllLanguages(){return O["a"].get("/languages")}};const re=!0;function ne(e,t){e("SET_LANGUAGES",t.data.data),e("SET_LOADING",!1)}const oe={all_languages:["myanmar","english"],loading:!1,error:null},se={SET_LANGUAGES(e,t){e.all_languages=t},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t}},ie={getLanguages({commit:e}){e("SET_LOADING",!0),ae.getAllLanguages().then(t=>{ne(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},setError({commit:e},t){e("SET_ERROR",t)}},ce={all_languages:e=>e.all_languages,loading:e=>e.loading,error:e=>e.error},ue=!0;function de(e,t){e("SET_BOOK",t.data.data),e("SET_LOADING",!1)}const le={book:null,loading:!1,error:null,message:null},ge={SET_BOOK(e,t){e.book=t},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t},SET_MESSAGE(e,t){e.message=t}},_e={getBook({commit:e},t){e("SET_LOADING",!0),j.getBook({id:t}).then(t=>{de(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},setBookValue({commit:e},t){e("SET_LOADING",!0);try{de(e,t)}catch{}},postReview({commit:e},t){e("SET_LOADING",!0),j.postReview(t).then(t=>{de(e,t),e("SET_MESSAGE","Posted your review.")}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},updateReview({commit:e},t){e("SET_LOADING",!0),j.updateReview(t).then(t=>{de(e,t),e("SET_MESSAGE","Updated your review.")}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},deleteReview({commit:e},t){e("SET_LOADING",!0),j.deleteReview(t).then(t=>{de(e,t),e("SET_MESSAGE","Deleted your review.")}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},setError({commit:e},t){e("SET_ERROR",t)},setMessage({commit:e},t){e("SET_MESSAGE",t)}},me={book:e=>e.book,loading:e=>e.loading,error:e=>e.error,message:e=>e.message};var Ee=a("a440");const Te=!0;function Se(e,t){e("SET_WANT_TO_READS",t.data.data),e("SET_LOADING",!1),e("SET_META",t.data.meta),e("SET_LINKS",t.data.links)}function pe(e,t){e("SET_WANT_TO_READ",t.data.data),e("SET_LOADING",!1)}const fe={user_want_to_reads:[],want_to_reads:[],want_to_read_loading:!1,want_to_read_error:null,meta:null,links:null,error:null,message:null,current_page:1},he={SET_META(e,t){e.meta=t},SET_LINKS(e,t){e.links=t},SET_PAGE(e,t){e.current_page=t},SET_WANT_TO_READS(e,t){e.want_to_reads=e.want_to_reads.concat(t)},SET_WANT_TO_READ(e,t){e.user_want_to_reads=t},REMOVE_WANT_TO_READS(e,t){e.want_to_reads=e.want_to_reads.filter(e=>e.id!=t)},SET_LOADING(e,t){e.want_to_read_loading=t},SET_ERROR(e,t){e.want_to_read_error=t},SET_MESSAGE(e,t){e.message=t},CLEAR_WANT_TO_READS(e){e.want_to_reads=[]}},Re={getWantToReads({commit:e},t){e("SET_LOADING",!0),Ee["a"].getWantToReads(t).then(t=>{Se(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},getWantToRead({commit:e},t){e("SET_LOADING",!0),Ee["a"].getWantToRead(t).then(t=>{pe(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},updateWantToRead({commit:e},t){return Ee["a"].updateWantToRead(t).then(t=>{Se(e,t)})},storeWantToRead({commit:e},t){return Ee["a"].storeWantToRead(t).then(t=>{Se(e,t)})},deleteWantToRead({commit:e},t){return Ee["a"].deleteWantToRead(t).then(t=>{Se(e,t)})},removeWantToRead({commit:e},t){e("REMOVE_WANT_TO_READS",t.book_id)},setError({commit:e},t){e("SET_ERROR",t)},setMessage({commit:e},t){e("SET_MESSAGE",t)},setLoading({commit:e},t){e("SET_LOADING",t)},setCurrentPage({commit:e},t){e("SET_PAGE",t)},clearWantToReads({commit:e}){e("CLEAR_WANT_TO_READS"),e("SET_META",null),e("SET_LINKS",null)}},Oe={want_to_reads:e=>e.want_to_reads,user_want_to_reads:e=>e.user_want_to_reads,want_to_read_loading:e=>e.want_to_read_loading,want_to_read_error:e=>e.want_to_read_error,meta:e=>e.meta,links:e=>e.links,current_page:e=>e.current_page,error:e=>e.error,message:e=>e.message},Ae=!0;function be(e,t){e("PAGINATE_BOOKS",t.data.data),e("SET_LOADING",!1),e("SET_META",t.data.meta),e("SET_LINKS",t.data.links)}function we(e,t){e("SET_CATEGORY",t.data.data),e("SET_LOADING",!1)}const Ne={category:null,books:[],books_meta:null,books_links:null,loading:!1,error:null,message:null,current_page:1},ke={SET_CATEGORY(e,t){e.category=t},SET_LOADING(e,t){e.loading=t},SET_ERROR(e,t){e.error=t},PAGINATE_BOOKS(e,t){e.books=e.books.concat(t)},SET_META(e,t){e.books_meta=t},SET_LINKS(e,t){e.books_links=t},SET_PAGE(e,t){e.current_page=t}},Ge={getCategory({commit:e},t){e("SET_LOADING",!0),Y["a"].getCategory(t).then(t=>{we(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},getCategoryBooks({commit:e},t){e("SET_LOADING",!0),Y["a"].getCategoryBooks(t).then(t=>{be(e,t)}).catch(t=>{e("SET_LOADING",!1),e("SET_ERROR",Object(E["a"])(t))})},setError({commit:e},t){e("SET_ERROR",t)},setLoading({commit:e},t){e("SET_LOADING",t)},setCurrentPage({commit:e},t){e("SET_PAGE",t)}},De={category:e=>e.category,books:e=>e.books,loading:e=>e.loading,error:e=>e.error,message:e=>e.message,books_links:e=>e.links,books_meta:e=>e.books_meta,current_page:e=>e.current_page};g["a"].use(_["a"]);t["a"]=new _["a"].Store({strict:!0,modules:{auth:r,user:n,message:o,book:s,category:i,language:c,bookDetail:u,wantToRead:d,categoryDetail:l}})},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("main",{staticClass:"container md:ml-52 md:w-auto md:h-full"},[t("router-view")],1),e.isLoggedIn?t("Menu",{staticClass:"md:w-52",attrs:{authUser:e.authUser}}):e._e()],1)},o=[],s=(a("14d9"),a("d9e2"),function(){var e=this,t=e._self._c;return e.authUser?t("header",{staticClass:"p-2 md:p-10 text-white bg-blue-400 flex bottom-0 fixed left-0 right-0 md:top-0 md:h-full h-12 items-center"},[t("nav",{staticClass:"container flex items-center md:items-start mx-auto md:gap-6 md:flex-col"},[t("div",{staticClass:"flex-1 flex justify-center"},[t("router-link",{staticClass:"flex justify-center items-center",class:{"text-green-700":e.isHome},attrs:{to:"/dashboard"}},[t("font-awesome-icon",{staticClass:"text-lg self-center",attrs:{icon:"fa-solid fa-house"}}),t("p",{staticClass:"ml-1"},[e._v("Home")])],1)],1),t("div",{staticClass:"flex-1 flex justify-center"},[t("router-link",{staticClass:"flex justify-center items-center",class:{"text-green-700":e.isCategories},attrs:{to:"/category"}},[t("font-awesome-icon",{staticClass:"text-lg",attrs:{icon:"fa-solid fa-book"}}),t("p",{staticClass:"ml-1"},[e._v("Categories")])],1)],1),t("div",{staticClass:"flex-1 flex justify-center"},[t("router-link",{staticClass:"flex justify-center items-center",class:{"text-green-700":e.isWantToRead},attrs:{to:"/want-to-read"}},[t("font-awesome-icon",{staticClass:"text-lg",attrs:{icon:"fa-solid fa-book"}}),t("p",{staticClass:"ml-1"},[e._v("Saved")])],1)],1),t("div",{staticClass:"flex-1 flex justify-center"},[t("router-link",{staticClass:"flex justify-center items-center",class:{"text-green-700":"user"==e.currentRoute},attrs:{to:"/user"}},[t("font-awesome-icon",{staticClass:"text-lg",attrs:{icon:"fa-solid fa-gears"}}),t("p",{staticClass:"ml-1"},[e._v("Settings")])],1)],1)])]):e._e()}),i=[],c=a("2f62"),u={name:"Header",computed:{...Object(c["b"])("auth",["authUser","isAdmin"]),currentRoute(){return this.$route.name},isCategories(){let e=this.$route.name;return/^categor.*/.test(e)},isHome(){let e=this.$route.name;return/^book.*|dashboard/.test(e)},isWantToRead(){let e=this.$route.name;return/^want.*/.test(e)}}},d=u,l=a("2877"),g=Object(l["a"])(d,s,i,!1,null,null,null),_=g.exports,m={name:"app",components:{Menu:_},computed:{isLoggedIn(){return"login"!=this.$route.name&&"register"!=this.$route.name},...Object(c["b"])("auth",["authUser"])},methods:{async getAuthInfoAndReroute(){const e=await this.$store.dispatch("auth/getAuthUser");if(!e){const e=Error("Unable to fetch user after login, check your API settings.");throw e.name="Fetch User",e}0==e.categories_count&&(console.log("updating"),this.$router.push("/update-category"))}},mounted(){this.getAuthInfoAndReroute()}},E=m,T=(a("adeb"),Object(l["a"])(E,n,o,!1,null,null,null)),S=T.exports,p=a("a18c"),f=a("4360"),h=(a("def6"),a("be33")),R=a("ad3d"),O=a("11ca"),A=a("2753");h["c"].add(O["f"],O["b"],O["e"],O["h"],O["g"],O["c"],O["a"],O["j"],A["a"],O["k"],O["i"],O["d"],O["l"]),r["a"].component("font-awesome-icon",R["a"]),r["a"].config.productionTip=!1,new r["a"]({router:p["a"],store:f["a"],render:e=>e(S)}).$mount("#app")},a18c:function(e,t,a){"use strict";var r=a("2b0e"),n=a("4360"),o=a("8c4f");function s({to:e,next:t,store:a}){const r={path:"/login",query:{redirect:e.fullPath}};a.getters["auth/authUser"]?t():a.dispatch("auth/getAuthUser").then(()=>{a.getters["auth/authUser"]?t():t(r)})}function i({next:e,store:t}){t.getters["auth/isAdmin"]?e():e({name:"notFound"})}function c({next:e,store:t}){const a=window.localStorage.getItem("guest");"isNotGuest"!==a||t.getters["auth/authUser"]?e():t.dispatch("auth/getAuthUser").then(()=>{t.getters["auth/authUser"]?e({name:"dashboard"}):(t.dispatch("auth/setGuest",{value:"isGuest"}),e())})}function u(e,t,a){const r=t[a];return r?()=>{r({...e,next:u(e,t,a+1)})}:e.next}r["a"].use(o["a"]);const d=[{path:"/",name:"home",meta:{middleware:[c]},component:()=>a.e("home").then(a.bind(null,"bb51"))},{path:"/dashboard",name:"dashboard",meta:{middleware:[s]},component:()=>a.e("dashboard").then(a.bind(null,"7277"))},{path:"/category",name:"category",meta:{middleware:[s]},component:()=>a.e("dashboard").then(a.bind(null,"4886"))},{path:"/want-to-read",name:"want-to-read",meta:{middleware:[s]},component:()=>a.e("dashboard").then(a.bind(null,"38c0"))},{path:"/category-detail/:id",name:"category-detail",meta:{middleware:[s]},component:()=>a.e("dashboard").then(a.bind(null,"f7dd"))},{path:"/book-detail/:id",name:"book-detail",meta:{middleware:[s]},component:()=>a.e("dashboard").then(a.bind(null,"1253"))},{path:"/category-book-detail/:id",name:"category-book-detail",meta:{middleware:[s]},component:()=>a.e("dashboard").then(a.bind(null,"1253"))},{path:"/want-to-read-book-detail/:id",name:"want-to-read-book-detail",meta:{middleware:[s]},component:()=>a.e("dashboard").then(a.bind(null,"1253"))},{path:"/update-category",name:"updateCategory",meta:{middleware:[s]},component:()=>a.e("not-found").then(a.bind(null,"957d"))},{path:"/user",name:"user",meta:{middleware:[s]},component:()=>a.e("user").then(a.bind(null,"1511"))},{path:"/users",name:"users",meta:{middleware:[s,i]},component:()=>a.e("users").then(a.bind(null,"ed81"))},{path:"/login",name:"login",meta:{middleware:[c]},component:()=>a.e("login").then(a.bind(null,"a55b"))},{path:"/register",name:"register",meta:{middleware:[c]},component:()=>a.e("register").then(a.bind(null,"73cf"))},{path:"/reset-password",name:"resetPassword",meta:{middleware:[c]},component:()=>a.e("reset-password").then(a.bind(null,"0813"))},{path:"/forgot-password",name:"forgotPassword",meta:{middleware:[c]},component:()=>a.e("forgot-password").then(a.bind(null,"f243"))},{path:"/verification-notice",name:"verificationNotice",meta:{middleware:[c]},component:()=>a.e("forgot-password").then(a.bind(null,"f6cd"))},{path:"/:catchAll(.*)",name:"notFound",component:()=>a.e("not-found").then(a.bind(null,"9703"))}],l=new o["a"]({mode:"history",routes:d,scrollBehavior(e,t,a){return a||{x:0,y:0}}});l.beforeEach((e,t,a)=>{const r=e.meta.middleware,o={to:e,from:t,next:a,store:n["a"]};if(!r)return a();r[0]({...o,next:u(o,r,1)})});t["a"]=l},a440:function(e,t,a){"use strict";var r=a("fce9");t["a"]={getAllCategories(e){return r["a"].get("/categories?page="+e)},getCategory(e){return r["a"].get("/categories/"+e)},getWantToReads(e){return r["a"].get("/want-to-reads?page="+e.page)},getWantToRead(e){return r["a"].get("/want-to-reads/"+e.book_id)},updateWantToRead(e){return r["a"].post("/want-to-reads/sync",e)},storeWantToRead(e){return r["a"].post("/want-to-reads",e)},deleteWantToRead(e){return r["a"].delete("/want-to-reads/"+e.book_id)}}},ac0b:function(e,t,a){},adeb:function(e,t,a){"use strict";a("ac0b")},b012:function(e,t,a){"use strict";var r=a("bc3a"),n=a.n(r),o=a("4360");const s=n.a.create({baseURL:"https://api.mmoverflow.site",withCredentials:!0});s.interceptors.response.use(e=>e,(function(e){return e.response&&[401,419].includes(e.response.status)&&o["a"].getters["auth/authUser"]&&!o["a"].getters["auth/guest"]&&o["a"].dispatch("auth/logout"),Promise.reject(e)})),t["a"]={async login(e){return await s.get("/sanctum/csrf-cookie"),s.post("/login",e)},logout(){return s.post("/logout")},async forgotPassword(e){return await s.get("/sanctum/csrf-cookie"),s.post("/forgot-password",e)},getAuthUser(){return s.get("/api/users/auth")},async resetPassword(e){return await s.get("/sanctum/csrf-cookie"),s.post("/reset-password",e)},updatePassword(e){return s.put("/user/password",e)},async registerUser(e){return await s.get("/sanctum/csrf-cookie"),s.post("/register",e)},sendVerification(e){return s.post("/email/verification-notification",e)},updateUser(e){return s.put("/user/profile-information",e)}}},def6:function(e,t,a){},fce9:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("bc3a"),n=a.n(r),o=a("4360");const s=n.a.create({baseURL:"https://api.mmoverflow.site/api",withCredentials:!0});s.interceptors.response.use(e=>e,(function(e){return e.response&&[401,419].includes(e.response.status)&&o["a"].getters["auth/authUser"]&&!o["a"].getters["auth/guest"]&&o["a"].dispatch("auth/logout"),Promise.reject(e)}))}});
//# sourceMappingURL=app.53082006.js.map