(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54e15860"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),a=n("da84"),o=n("c65b"),i=n("e330"),c=n("1626"),u=n("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),s=a.Error,f=i(/./.test);r({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!c(t))return f(this,e);var n=o(t,this,e);if(null!==n&&!u(n))throw new s("RegExp exec method returned something other than an Object or null");return!!n}})},"01d4":function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.r(t);n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function a(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(o.push(r.value),t&&o.length===t)break}catch(u){c=!0,a=u}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw a}}return o}}n("fb6a"),n("b0c0"),n("a630"),n("ac1f"),n("00b4");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}n("d9e2");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){return r(e)||a(e,t)||i(e,t)||c()}var l=n("f2bf"),s=n("bd3f"),f=n.n(s),d=n("d891"),b=n.n(d),p=n("c175"),v=n.n(p),g=n("40d1"),m=n.n(g),h=n("dd19"),y=n.n(h),x=n("f6f9"),j=n.n(x),O=n("90da"),E=n.n(O),k=n("2e80"),w=n.n(k),S=n("6923"),B=n.n(S),N=n("daae"),I=n.n(N),A=n("29d7"),C=n.n(A),R=n("9313"),V=n.n(R),P=n("7538"),T=n.n(P),_=n("de54"),F=n.n(_),M=n("d1b5"),$=n.n(M),D=n("6a9b"),J=n.n(D),K=n("9f60"),L=n.n(K),U=n("572d"),W=n.n(U),Y=n("ac29"),z=n.n(Y),Q=n("68f2"),q=n.n(Q),G=n("542f"),H=n.n(G),X=n("2739"),Z=n.n(X),ee=n("dc8c"),te=n("dcee"),ne=n("6c02");function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t,n){return t&&ae(e.prototype,t),n&&ae(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var ie=function(){function e(t,n,r){re(this,e),this.banners1=t,this.banners2=n,this.banners3=r,this.getBanners=this.getBanners.bind(this)}return oe(e,[{key:"getBanners",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2020";return"2020"===e?this.banners1:"2021"===e?this.banners2:"2022"!==e||this.banners3}}]),e}(),ce=ie,ue={class:"works"},le={class:"pc"},se=["src","alt"],fe=["src","alt"],de=["src","alt"],be={key:3,class:"thumbnails-container"},pe={class:"thumbnails-list"},ve=["onClick"],ge=["src","alt"],me={class:"mobile"},he={class:"works-list"},ye=["src","alt"],xe={setup:function(e){var t=[{id:1,url:f.a,name:"Parrot, 2020, 30x40 inches, oil on linen"},{id:2,url:b.a,name:"Eagle, 2020, 24x36 inches, oil on canvas"},{id:3,url:v.a,name:"Fish, 2020, 24x36 inches, oil on linen"},{id:4,url:y.a,name:"Polarbear, 2020, 24x36 inches, oil on canvas"},{id:5,url:j.a,name:"Red eye, 2020, 16x20 inches, oil on linen"},{id:6,url:E.a,name:"Reptile diptych, 2020, 30x40 inches, oil on linen"},{id:7,url:w.a,name:"Sea turtle, 2020, 24x36 inches, oil on linen"},{id:8,url:B.a,name:"Tiger profile, 2020, 30x40 inches, oil on linen"},{id:9,url:I.a,name:"Tiger, 2020, 24x36 inches, oil on canvas"},{id:10,url:m.a,name:"Alligator, 2020, 24x36 inches, oil on canvas"}],n=[{id:1,url:C.a,name:"Elements, 2021, each panel 8x8 inches, oil on panel"},{id:2,url:V.a,name:"Butterfly, 2021, 24x36 inches, oil on linen"},{id:3,url:T.a,name:"Clownfish, 2021, 24x36 inches, oil on linen"},{id:4,url:F.a,name:"Enigma, 2021, 48x48 inches, oil on canvas"},{id:5,url:$.a,name:"Kudu, 2021, 24x36 inches, oil on canvas"},{id:6,url:J.a,name:"Leafy Seadragon, 2021, 24x36 inches, oil on linen"},{id:7,url:L.a,name:"Self portrait, 2021, 24x36 inches, oil on linen"},{id:8,url:W.a,name:"Shark, 2021, 36x72 inches, oil on canvas"},{id:9,url:z.a,name:"Void, 2021, 60x72 inches, oil on canvas"},{id:10,url:q.a,name:"Whale, 2021, 36x72 inches, oil on canvas"}],r=[{id:1,url:H.a,name:"Shield, 2022, 36x60 inches, oil on canvas"},{id:2,url:Z.a,name:"Camouflage, 2022, 60x72 inches, oil on canvas"}],a=Object(ne["c"])(),o=new ce(t,n,r),i=o.getBanners,c=Object(l["ref"])(""),s=Object(l["ref"])([]),d=Object(l["ref"])(null),p=Object(l["ref"])(!1);c.value=a.params.year;var g=function(){console.log("previous"),1===d.value.id?d.value=s.value[s.value.length-1]:d.value=s.value[d.value.id-1-1]},h=function(){if(console.log("next"),d.value.id===s.value.length){var e=u(s.value,1);d.value=e[0]}else d.value=s.value[d.value.id]},x=function(){console.log("show thumbnails"),p.value=!0},O=function(e){p.value=!1,d.value=s.value[e-1]},k=function(){s.value=null,s.value=i(c.value);var e=u(s.value,1);d.value=e[0],p.value=!1};return Object(l["watch"])((function(){return a.params}),(function(e,t){e!==t&&(console.log(e.year),c.value=e.year,k())})),Object(l["onMounted"])((function(){k()})),function(e,t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",ue,[d.value?(Object(l["openBlock"])(),Object(l["createBlock"])(ee["a"],{key:0,"works-title":d.value.name,"thumbnails-seen":p.value,onOnClickPrev:g,onOnClickNext:h,onShowThumbnails:x},null,8,["works-title","thumbnails-seen"])):Object(l["createCommentVNode"])("",!0),Object(l["createVNode"])(te["a"]),Object(l["createElementVNode"])("main",null,[Object(l["createElementVNode"])("div",le,["2020"===c.value&&s.value.length?(Object(l["openBlock"])(),Object(l["createElementBlock"])("img",{key:0,src:d.value.url,alt:d.value.name},null,8,se)):Object(l["createCommentVNode"])("",!0),"2021"===c.value&&s.value.length?(Object(l["openBlock"])(),Object(l["createElementBlock"])("img",{key:1,src:d.value.url,alt:d.value.name},null,8,fe)):Object(l["createCommentVNode"])("",!0),"2022"===c.value&&s.value.length?(Object(l["openBlock"])(),Object(l["createElementBlock"])("img",{key:2,src:d.value.url,alt:d.value.name},null,8,de)):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",{class:"panel"},[Object(l["createElementVNode"])("div",{class:"prev",onClick:g}),Object(l["createElementVNode"])("div",{class:"thumbnails",onClick:x}),Object(l["createElementVNode"])("div",{class:"next",onClick:h})]),p.value?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",be,[Object(l["createElementVNode"])("ul",pe,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(s.value,(function(e){return Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{key:e.id,onClick:function(t){return O(e.id)}},[Object(l["createElementVNode"])("img",{src:e.url,alt:e.name},null,8,ge)],8,ve)})),128))])])):Object(l["createCommentVNode"])("",!0)]),Object(l["createElementVNode"])("div",me,[Object(l["createElementVNode"])("ul",he,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(s.value,(function(e){return Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{key:e.id},[Object(l["createElementVNode"])("img",{src:e.url,alt:e.name},null,8,ye),Object(l["createElementVNode"])("h3",null,Object(l["toDisplayString"])(e.name),1)])})),128))])])])])}}},je=(n("fc40"),n("d959")),Oe=n.n(je);const Ee=Oe()(xe,[["__scopeId","data-v-50cdc152"]]);t["default"]=Ee},"057f":function(e,t,n){var r=n("c6b6"),a=n("fc6a"),o=n("241c").f,i=n("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(e){try{return o(e)}catch(t){return i(c)}};e.exports.f=function(e){return c&&"Window"==r(e)?u(e):o(a(e))}},"0b42":function(e,t,n){var r=n("da84"),a=n("e8b5"),o=n("68ee"),i=n("861d"),c=n("b622"),u=c("species"),l=r.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,o(t)&&(t===l||a(t.prototype))?t=void 0:i(t)&&(t=t[u],null===t&&(t=void 0))),void 0===t?l:t}},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),o=n("2d00"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2739:function(e,t,n){e.exports=n.p+"static/img/2022Camouflage.4ca6911a.jpg"},"2e80":function(e,t,n){e.exports=n.p+"static/img/2020seaturtle.ae89a8d2.jpg"},"40d1":function(e,t,n){e.exports=n.p+"static/img/2020alligator.f9203080.jpg"},"428f":function(e,t,n){var r=n("da84");e.exports=r},4553:function(e,t,n){},"4dae":function(e,t,n){var r=n("da84"),a=n("23cb"),o=n("07fa"),i=n("8418"),c=r.Array,u=Math.max;e.exports=function(e,t,n){for(var r=o(e),l=a(t,r),s=a(void 0===n?r:n,r),f=c(u(s-l,0)),d=0;l<s;l++,d++)i(f,d,e[l]);return f.length=d,f}},"4df4":function(e,t,n){"use strict";var r=n("da84"),a=n("0366"),o=n("c65b"),i=n("7b0b"),c=n("9bdd"),u=n("e95a"),l=n("68ee"),s=n("07fa"),f=n("8418"),d=n("9a1f"),b=n("35a1"),p=r.Array;e.exports=function(e){var t=i(e),n=l(this),r=arguments.length,v=r>1?arguments[1]:void 0,g=void 0!==v;g&&(v=a(v,r>2?arguments[2]:void 0));var m,h,y,x,j,O,E=b(t),k=0;if(!E||this==p&&u(E))for(m=s(t),h=n?new this(m):p(m);m>k;k++)O=g?v(t[k],k):t[k],f(h,k,O);else for(x=d(t,E),j=x.next,h=n?new this:[];!(y=o(j,x)).done;k++)O=g?c(x,v,[y.value,k],!0):y.value,f(h,k,O);return h.length=k,h}},"572d":function(e,t,n){e.exports=n.p+"static/img/2021shark.5ebe96fe.jpg"},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68f2":function(e,t,n){e.exports=n.p+"static/img/2021whale.40c68a68.jpg"},6923:function(e,t,n){e.exports=n.p+"static/img/2020tiger profile.9fb5eb71.jpg"},"6a9b":function(e,t,n){e.exports=n.p+"static/img/2021leafyseadragon.46d4fbee.jpg"},7156:function(e,t,n){var r=n("1626"),a=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var i,c;return o&&r(i=t.constructor)&&i!==n&&a(c=i.prototype)&&c!==n.prototype&&o(e,c),e}},"746f":function(e,t,n){var r=n("428f"),a=n("1a2d"),o=n("e538"),i=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});a(t,e)||i(t,e,{value:o.f(e)})}},7538:function(e,t,n){e.exports=n.p+"static/img/2021clownfish.c26cd319.jpg"},8418:function(e,t,n){"use strict";var r=n("a04b"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},"90da":function(e,t,n){e.exports=n.p+"static/img/2020reptile.8ccbbf5e.jpg"},9263:function(e,t,n){"use strict";var r=n("c65b"),a=n("e330"),o=n("577e"),i=n("ad6d"),c=n("9f7f"),u=n("5692"),l=n("7c73"),s=n("69f3").get,f=n("fce3"),d=n("107c"),b=u("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,g=a("".charAt),m=a("".indexOf),h=a("".replace),y=a("".slice),x=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),j=c.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],E=x||O||j||f||d;E&&(v=function(e){var t,n,a,c,u,f,d,E=this,k=s(E),w=o(e),S=k.raw;if(S)return S.lastIndex=E.lastIndex,t=r(v,S,w),E.lastIndex=S.lastIndex,t;var B=k.groups,N=j&&E.sticky,I=r(i,E),A=E.source,C=0,R=w;if(N&&(I=h(I,"y",""),-1===m(I,"g")&&(I+="g"),R=y(w,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==g(w,E.lastIndex-1))&&(A="(?: "+A+")",R=" "+R,C++),n=new RegExp("^(?:"+A+")",I)),O&&(n=new RegExp("^"+A+"$(?!\\s)",I)),x&&(a=E.lastIndex),c=r(p,N?n:E,R),N?c?(c.input=y(c.input,C),c[0]=y(c[0],C),c.index=E.lastIndex,E.lastIndex+=c[0].length):E.lastIndex=0:x&&c&&(E.lastIndex=E.global?c.index+c[0].length:a),O&&c&&c.length>1&&r(b,c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c&&B)for(c.groups=f=l(null),u=0;u<B.length;u++)d=B[u],f[d[0]]=c[d[1]];return c}),e.exports=v},9313:function(e,t,n){e.exports=n.p+"static/img/2021butterfly.bc479cb4.jpg"},"9bdd":function(e,t,n){var r=n("825a"),a=n("2a62");e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(i){a(e,"throw",i)}}},"9f60":function(e,t,n){e.exports=n.p+"static/img/2021selfportrait.aa217ff6.jpg"},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp,i=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=i||r((function(){return!o("a","y").sticky})),u=i||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:u,MISSED_STICKY:c,UNSUPPORTED_Y:i}},a4d3:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("d066"),i=n("2ba4"),c=n("c65b"),u=n("e330"),l=n("c430"),s=n("83ab"),f=n("4930"),d=n("d039"),b=n("1a2d"),p=n("e8b5"),v=n("1626"),g=n("861d"),m=n("3a9b"),h=n("d9b5"),y=n("825a"),x=n("7b0b"),j=n("fc6a"),O=n("a04b"),E=n("577e"),k=n("5c6c"),w=n("7c73"),S=n("df75"),B=n("241c"),N=n("057f"),I=n("7418"),A=n("06cf"),C=n("9bf2"),R=n("37e8"),V=n("d1e7"),P=n("f36a"),T=n("6eeb"),_=n("5692"),F=n("f772"),M=n("d012"),$=n("90e3"),D=n("b622"),J=n("e538"),K=n("746f"),L=n("d44e"),U=n("69f3"),W=n("b727").forEach,Y=F("hidden"),z="Symbol",Q="prototype",q=D("toPrimitive"),G=U.set,H=U.getterFor(z),X=Object[Q],Z=a.Symbol,ee=Z&&Z[Q],te=a.TypeError,ne=a.QObject,re=o("JSON","stringify"),ae=A.f,oe=C.f,ie=N.f,ce=V.f,ue=u([].push),le=_("symbols"),se=_("op-symbols"),fe=_("string-to-symbol-registry"),de=_("symbol-to-string-registry"),be=_("wks"),pe=!ne||!ne[Q]||!ne[Q].findChild,ve=s&&d((function(){return 7!=w(oe({},"a",{get:function(){return oe(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=ae(X,t);r&&delete X[t],oe(e,t,n),r&&e!==X&&oe(X,t,r)}:oe,ge=function(e,t){var n=le[e]=w(ee);return G(n,{type:z,tag:e,description:t}),s||(n.description=t),n},me=function(e,t,n){e===X&&me(se,t,n),y(e);var r=O(t);return y(n),b(le,r)?(n.enumerable?(b(e,Y)&&e[Y][r]&&(e[Y][r]=!1),n=w(n,{enumerable:k(0,!1)})):(b(e,Y)||oe(e,Y,k(1,{})),e[Y][r]=!0),ve(e,r,n)):oe(e,r,n)},he=function(e,t){y(e);var n=j(t),r=S(n).concat(Ee(n));return W(r,(function(t){s&&!c(xe,n,t)||me(e,t,n[t])})),e},ye=function(e,t){return void 0===t?w(e):he(w(e),t)},xe=function(e){var t=O(e),n=c(ce,this,t);return!(this===X&&b(le,t)&&!b(se,t))&&(!(n||!b(this,t)||!b(le,t)||b(this,Y)&&this[Y][t])||n)},je=function(e,t){var n=j(e),r=O(t);if(n!==X||!b(le,r)||b(se,r)){var a=ae(n,r);return!a||!b(le,r)||b(n,Y)&&n[Y][r]||(a.enumerable=!0),a}},Oe=function(e){var t=ie(j(e)),n=[];return W(t,(function(e){b(le,e)||b(M,e)||ue(n,e)})),n},Ee=function(e){var t=e===X,n=ie(t?se:j(e)),r=[];return W(n,(function(e){!b(le,e)||t&&!b(X,e)||ue(r,le[e])})),r};if(f||(Z=function(){if(m(ee,this))throw te("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,t=$(e),n=function(e){this===X&&c(n,se,e),b(this,Y)&&b(this[Y],t)&&(this[Y][t]=!1),ve(this,t,k(1,e))};return s&&pe&&ve(X,t,{configurable:!0,set:n}),ge(t,e)},ee=Z[Q],T(ee,"toString",(function(){return H(this).tag})),T(Z,"withoutSetter",(function(e){return ge($(e),e)})),V.f=xe,C.f=me,R.f=he,A.f=je,B.f=N.f=Oe,I.f=Ee,J.f=function(e){return ge(D(e),e)},s&&(oe(ee,"description",{configurable:!0,get:function(){return H(this).description}}),l||T(X,"propertyIsEnumerable",xe,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Z}),W(S(be),(function(e){K(e)})),r({target:z,stat:!0,forced:!f},{for:function(e){var t=E(e);if(b(fe,t))return fe[t];var n=Z(t);return fe[t]=n,de[n]=t,n},keyFor:function(e){if(!h(e))throw te(e+" is not a symbol");if(b(de,e))return de[e]},useSetter:function(){pe=!0},useSimple:function(){pe=!1}}),r({target:"Object",stat:!0,forced:!f,sham:!s},{create:ye,defineProperty:me,defineProperties:he,getOwnPropertyDescriptor:je}),r({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:Oe,getOwnPropertySymbols:Ee}),r({target:"Object",stat:!0,forced:d((function(){I.f(1)}))},{getOwnPropertySymbols:function(e){return I.f(x(e))}}),re){var ke=!f||d((function(){var e=Z();return"[null]"!=re([e])||"{}"!=re({a:e})||"{}"!=re(Object(e))}));r({target:"JSON",stat:!0,forced:ke},{stringify:function(e,t,n){var r=P(arguments),a=t;if((g(t)||void 0!==e)&&!h(e))return p(t)||(t=function(e,t){if(v(a)&&(t=c(a,this,e,t)),!h(t))return t}),r[1]=t,i(re,null,r)}})}if(!ee[q]){var we=ee.valueOf;T(ee,q,(function(e){return c(we,this)}))}L(Z,z),M[Y]=!0},a630:function(e,t,n){var r=n("23e7"),a=n("4df4"),o=n("1c7e"),i=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:a})},ab36:function(e,t,n){var r=n("861d"),a=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&a(e,"cause",t.cause)}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ac29:function(e,t,n){e.exports=n.p+"static/img/2021void.14df8974.jpg"},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b727:function(e,t,n){var r=n("0366"),a=n("e330"),o=n("44ad"),i=n("7b0b"),c=n("07fa"),u=n("65f0"),l=a([].push),s=function(e){var t=1==e,n=2==e,a=3==e,s=4==e,f=6==e,d=7==e,b=5==e||f;return function(p,v,g,m){for(var h,y,x=i(p),j=o(x),O=r(v,g),E=c(j),k=0,w=m||u,S=t?w(p,E):n||d?w(p,0):void 0;E>k;k++)if((b||k in j)&&(h=j[k],y=O(h,k,x),e))if(t)S[k]=y;else if(y)switch(e){case 3:return!0;case 5:return h;case 6:return k;case 2:l(S,h)}else switch(e){case 4:return!1;case 7:l(S,h)}return f?-1:a||s?s:S}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},b980:function(e,t,n){var r=n("d039"),a=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",a(1,7)),7!==e.stack)}))},c175:function(e,t,n){e.exports=n.p+"static/img/2020fish.319deacb.jpg"},c770:function(e,t,n){var r=n("e330"),a=r("".replace),o=function(e){return String(Error(e).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,c=i.test(o);e.exports=function(e,t){if(c&&"string"==typeof e)while(t--)e=a(e,i,"");return e}},d1b5:function(e,t,n){e.exports=n.p+"static/img/2021kudu.bc344996.jpg"},d28b:function(e,t,n){var r=n("746f");r("iterator")},d891:function(e,t,n){e.exports=n.p+"static/img/2020eagle.1acad9ba.jpg"},d9e2:function(e,t,n){var r=n("23e7"),a=n("da84"),o=n("2ba4"),i=n("e5cb"),c="WebAssembly",u=a[c],l=7!==Error("e",{cause:7}).cause,s=function(e,t){var n={};n[e]=i(e,t,l),r({global:!0,forced:l},n)},f=function(e,t){if(u&&u[e]){var n={};n[e]=i(c+"."+e,t,l),r({target:c,stat:!0,forced:l},n)}};s("Error",(function(e){return function(t){return o(e,this,arguments)}})),s("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),s("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),s("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),s("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),s("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),s("URIError",(function(e){return function(t){return o(e,this,arguments)}})),f("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),f("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),f("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},daae:function(e,t,n){e.exports=n.p+"static/img/2020tiger.0b633c2d.jpg"},dd19:function(e,t,n){e.exports=n.p+"static/img/2020polarbear.6a323b7a.jpg"},de54:function(e,t,n){e.exports=n.p+"static/img/2021enigma.860052a2.jpg"},e01a:function(e,t,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("e330"),c=n("1a2d"),u=n("1626"),l=n("3a9b"),s=n("577e"),f=n("9bf2").f,d=n("e893"),b=o.Symbol,p=b&&b.prototype;if(a&&u(b)&&(!("description"in p)||void 0!==b().description)){var v={},g=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),t=l(p,this)?new b(e):void 0===e?b():b(e);return""===e&&(v[t]=!0),t};d(g,b),g.prototype=p,p.constructor=g;var m="Symbol(test)"==String(b("test")),h=i(p.toString),y=i(p.valueOf),x=/^Symbol\((.*)\)[^)]+$/,j=i("".replace),O=i("".slice);f(p,"description",{configurable:!0,get:function(){var e=y(this),t=h(e);if(c(v,e))return"";var n=m?O(t,7,-1):j(t,x,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:g})}},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e538:function(e,t,n){var r=n("b622");t.f=r},e5cb:function(e,t,n){"use strict";var r=n("d066"),a=n("1a2d"),o=n("9112"),i=n("3a9b"),c=n("d2bb"),u=n("e893"),l=n("7156"),s=n("e391"),f=n("ab36"),d=n("c770"),b=n("b980"),p=n("c430");e.exports=function(e,t,n,v){var g=v?2:1,m=e.split("."),h=m[m.length-1],y=r.apply(null,m);if(y){var x=y.prototype;if(!p&&a(x,"cause")&&delete x.cause,!n)return y;var j=r("Error"),O=t((function(e,t){var n=s(v?t:e,void 0),r=v?new y(e):new y;return void 0!==n&&o(r,"message",n),b&&o(r,"stack",d(r.stack,2)),this&&i(x,this)&&l(r,this,O),arguments.length>g&&f(r,arguments[g]),r}));if(O.prototype=x,"Error"!==h&&(c?c(O,j):u(O,j,{name:!0})),u(O,y),!p)try{x.name!==h&&o(x,"name",h),x.constructor=O}catch(E){}return O}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},f6f9:function(e,t,n){e.exports=n.p+"static/img/2020redeye.7c0edae9.jpg"},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("e8b5"),i=n("68ee"),c=n("861d"),u=n("23cb"),l=n("07fa"),s=n("fc6a"),f=n("8418"),d=n("b622"),b=n("1dde"),p=n("f36a"),v=b("slice"),g=d("species"),m=a.Array,h=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(e,t){var n,r,a,d=s(this),b=l(d),v=u(e,b),y=u(void 0===t?b:t,b);if(o(d)&&(n=d.constructor,i(n)&&(n===m||o(n.prototype))?n=void 0:c(n)&&(n=n[g],null===n&&(n=void 0)),n===m||void 0===n))return p(d,v,y);for(r=new(void 0===n?m:n)(h(y-v,0)),a=0;v<y;v++,a++)v in d&&f(r,a,d[v]);return r.length=a,r}})},fc40:function(e,t,n){"use strict";n("4553")},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-54e15860.972dce9d.js.map