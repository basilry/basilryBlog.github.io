(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4548:function(e){var t,r,n,i,s,a,c,u,o,d,l,h,f,_,m,x,p,b,v,$,y,j;e.exports=(t="millisecond",r="second",n="minute",i="hour",s="week",a="month",c="quarter",u="year",o="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},(m={})[_="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},x="$isDayjsObject",p=function(e){return e instanceof y||!(!e||!e[x])},b=function e(t,r,n){var i;if(!t)return _;if("string"==typeof t){var s=t.toLowerCase();m[s]&&(i=s),r&&(m[s]=r,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var c=t.name;m[c]=t,i=c}return!n&&i&&(_=i),i||!n&&_},v=function(e,t){if(p(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new y(r)},($={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,a),s=r-i<0,c=t.clone().add(n+(s?-1:1),a);return+(-(n+(r-i)/(s?i-c:c-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:u,w:s,d:"day",D:o,h:i,m:n,s:r,ms:t,Q:c})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=b,$.i=p,$.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},j=(y=function(){function e(e){this.$L=b(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(l);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return $},f.isValid=function(){return this.$d.toString()!==d},f.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return v(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<v(e)},f.$g=function(e,t,r){return $.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var c=this,d=!!$.u(t)||t,l=$.p(e),h=function(e,t){var r=$.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return d?r:r.endOf("day")},f=function(e,t){return $.w(c.toDate()[e].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},_=this.$W,m=this.$M,x=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case u:return d?h(1,0):h(31,11);case a:return d?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,v=(_<b?_+7:_)-b;return h(d?x-v:x+(6-v),m);case"day":case o:return f(p+"Hours",0);case i:return f(p+"Minutes",1);case n:return f(p+"Seconds",2);case r:return f(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,s){var c,d=$.p(e),l="set"+(this.$u?"UTC":""),h=((c={}).day=l+"Date",c[o]=l+"Date",c[a]=l+"Month",c[u]=l+"FullYear",c[i]=l+"Hours",c[n]=l+"Minutes",c[r]=l+"Seconds",c[t]=l+"Milliseconds",c)[d],f="day"===d?this.$D+(s-this.$W):s;if(d===a||d===u){var _=this.clone().set(o,1);_.$d[h](f),_.init(),this.$d=_.set(o,Math.min(this.$D,_.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[$.p(e)]()},f.add=function(e,t){var c,o=this;e=Number(e);var d=$.p(t),l=function(t){var r=v(o);return $.w(r.date(r.date()+Math.round(t*e)),o)};if(d===a)return this.set(a,this.$M+e);if(d===u)return this.set(u,this.$y+e);if("day"===d)return l(1);if(d===s)return l(7);var h=((c={})[n]=6e4,c[i]=36e5,c[r]=1e3,c)[d]||1,f=this.$d.getTime()+e*h;return $.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),s=this.$H,a=this.$m,c=this.$M,u=r.weekdays,o=r.months,l=r.meridiem,f=function(e,r,i,s){return e&&(e[r]||e(t,n))||i[r].slice(0,s)},_=function(e){return $.s(s%12||12,e,"0")},m=l||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(h,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return $.s(t.$y,4,"0");case"M":return c+1;case"MM":return $.s(c+1,2,"0");case"MMM":return f(r.monthsShort,c,o,3);case"MMMM":return f(o,c);case"D":return t.$D;case"DD":return $.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,u,2);case"ddd":return f(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(s);case"HH":return $.s(s,2,"0");case"h":return _(1);case"hh":return _(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return $.s(a,2,"0");case"s":return String(t.$s);case"ss":return $.s(t.$s,2,"0");case"SSS":return $.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,o){var d,l=this,h=$.p(t),f=v(e),_=(f.utcOffset()-this.utcOffset())*6e4,m=this-f,x=function(){return $.m(l,f)};switch(h){case u:d=x()/12;break;case a:d=x();break;case c:d=x()/3;break;case s:d=(m-_)/6048e5;break;case"day":d=(m-_)/864e5;break;case i:d=m/36e5;break;case n:d=m/6e4;break;case r:d=m/1e3;break;default:d=m}return o?d:$.a(d)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return m[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=b(e,t,!0);return n&&(r.$L=n),r},f.clone=function(){return $.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,v.prototype=j,[["$ms",t],["$s",r],["$m",n],["$H",i],["$W","day"],["$M",a],["$y",u],["$D",o]].forEach(function(e){j[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,y,v),e.$i=!0),v},v.locale=b,v.isDayjs=p,v.unix=function(e){return v(1e3*e)},v.en=m[_],v.Ls=m,v.p={},v)},9837:function(e,t,r){Promise.resolve().then(r.bind(r,3694))},2706:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return s}});let n=r(1024),i=n._(r(2265)),s=i.default.createContext(null)},3694:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n,i,s=r(7437),a=r(1396),c=r.n(a),u=r(9384),o=r(3978),d=r(7213),l=JSON.parse('[{"id":1,"title":"홍익대학교 법과대학 법학 학사 졸업 |","startDate":"201203","endDate":"201702"},{"id":2,"title":"대한민국 공군 학사장교 제138기 단기복무 중위 제대 |","startDate":"201702","endDate":"202005"},{"id":3,"title":"강화도 퓨전한식 요식업 창업 |","startDate":"202008","endDate":"202102"},{"id":4,"title":"사설 소프트웨어 엔지니어링 부트캠프 수료 |","startDate":"202103","endDate":"202107"},{"id":5,"title":"헬코더스 면접/알고리즘 스터디 모집 및 진행 |","startDate":"202107","endDate":"202109"},{"id":6,"title":"GC케어 자회사 헥톤프로젝트 웹 개발자 재직 중 |","startDate":"202109","endDate":""},{"id":7,"title":"한국방송통신대학교 컴퓨터과학과 학사편입 후 재학 중 |","startDate":"202209","endDate":""}]'),h=JSON.parse('[{"id":1,"title":"또하나의가족 솔루션 UI 라이브러리 비교 분석 보고","date":"20211013"},{"id":22,"title":"헥톤프로젝트 | Code Convention 정리 및 공유","date":"20220208","url":"https://basilry-kim-frontend.notion.site/Code-Convention-e76562094ab4476487d6365e3d9a475d"},{"id":2,"title":"AWS 아키텍트 어소시에이트 Ch 1. 분석 발표 - 개요","date":"20220513"},{"id":3,"title":"AWS 아키텍트 어소시에이트 Ch 2. 분석 발표 - S3","date":"20220520"},{"id":4,"title":"AWS 아키텍트 어소시에이트 Ch 3. 분석 발표 - VPC","date":"20220512"},{"id":5,"title":"AWS 아키텍트 어소시에이트 Ch 4. 분석 발표 - EC2","date":"20220708"},{"id":55,"title":"ESLint 분석 및 적용 방법 공유","date":"20220805","url":"https://basilry-kim-frontend.notion.site/ESLint-a77baa9a263f4976977fa783df784b8c"},{"id":56,"title":"Redux 기술 정리 및 공유","date":"20221028","url":"https://basilry-kim-frontend.notion.site/Redux-8b4723cdb09748d3ae6daf47b10ded7a?pvs=74"},{"id":6,"title":"LINE 오픈챗 서버가 100배 급증하는 트래픽을 다루는 방법 - 세미나 참여 분석 공유 및 발표","date":"20221212"},{"id":7,"title":"Scouter 모니터링 시스템 연구 공유","date":"20230229"},{"id":8,"title":"또하나의가족 솔루션 공통모듈 설계 관련 보고","date":"20230405"},{"id":9,"title":"OpenAI GPT발 LLM모델 AI 본격화 시대에 대한 찍먹 - 세미나 발표","date":"20230526"},{"id":10,"title":"AWS Korea Office Hour 외부교육 참여 및 보고","date":"20230907"},{"id":11,"title":"헥톤프로젝트 제품군 클라우드 관련 조사 후 보고","date":"20231111"},{"id":12,"title":"2023 대한민국 소프트웨어대전 참석 후 공유 및 보고","date":"20231130"},{"id":13,"title":"헥톤 테크블로그 | Spring Boot 기술 도입 분석 후 공유 및 발표","date":"20240226"},{"id":14,"title":"헥톤 테크블로그 | 백엔드 프로젝트 디자인패턴 도입 분석 후 공유 및 발표","date":"20240315"},{"id":15,"title":"헥톤 테크블로그 | ERD 설계 건 공유","date":"20240403"},{"id":16,"title":"헥톤 테크블로그 | JWT 기반작업 건 공유","date":"20240424"},{"id":17,"title":"헥톤 테크블로그 | Spring Security 및 JWT 연계 작업 건 공유","date":"20240513"},{"id":18,"title":"2024 AWS Summit 참가 보고서","date":"20240520"}]'),f=r(4548),_=r.n(f);(n=i||(i={})).DEFAULT_DATE="YYYYMMDD",n.DEFAULT_DATE_TIME="YYYY.MM.DD HH:mm",n.VIEW_DATE="YYYY. MM. DD.",n.MONTH_DATE="YYYY. MM.";let m=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return _()(...t)},x=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.VIEW_DATE;return e?m(e).format(t):"현 재"};var p=r(2875),b=r.n(p),v=()=>{var e;return(0,s.jsxs)(d.Z,{children:[(0,s.jsxs)("div",{className:b().wholeWrapper,children:[(0,s.jsxs)("div",{className:b().introduceBlock,children:[(0,s.jsxs)("div",{className:b().pargraphs,children:[(0,s.jsxs)("div",{className:b().block,children:[(0,s.jsx)(o.Z,{size:"xx-large",bold:"bold",children:"About Me | 소개"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"large",bold:"bold",children:"저는 꿈이 한 가지 있습니다."}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"언젠가 대한민국의 IT유니콘 중 당당하게 한 자리를 차지한 기업을 만들고 싶은 '김바실리'입니다."}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"저는 제가 만든 유니콘 기업을 통해서 세상을 보다 편리하고 즐거운 세상으로 만들고 싶습니다."})]}),(0,s.jsxs)("div",{className:b().block,children:[(0,s.jsx)(o.Z,{size:"large",bold:"bold",children:"처음에는"}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"동적인 화면이 좋아 프론트엔드 개발자를 지향하였고,"}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"커리어 시작 이후에는 React.js를 기반으로 Next.js, Sass(Scss), Redux, Zustand 등의 스택을 지속적으로 사용해 왔습니다."}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"개발을 지속하다보니 백엔드에 관해서도 관심이 생겨서 Node.js, Java, AWS, CS 관련 학습도 꾸준히 진행 중입니다."}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"최근에는 회사 실무 프로젝트를 통해 백엔드 포지션에 관련된 과업도 수행하고 있습니다."})]}),(0,s.jsxs)("div",{className:b().block,children:[(0,s.jsx)(o.Z,{size:"large",bold:"bold",children:"진정한 개발자란,"}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"프론트엔드의 틀에만 갇혀 있지 않고 백엔드와 인프라도 모두 알 수 있어야 진정한 개발자라고 생각합니다."}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"처음 '풀스택'이라는 말을 들었을 때는 '말도 안된다'거나 '허상이다'라고 생각했었습니다만,"}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"필드에서 2년 넘게 개발을 하다보니 개발과 관련된 전 분야를 망라해야 개발자로서의 가치를 증명할 수 있다고 봅니다."})]}),(0,s.jsxs)("div",{className:b().block,children:[(0,s.jsx)(o.Z,{size:"large",bold:"bold",children:"그리고 언젠가는,"}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Z,{size:"medium",children:"언젠가는 오롯이 혼자서 프로젝트 구조설계, 화면 개발, 에러핸들링, 서버 구축, 보안, 인프라 구축까지 할 수 있게끔 실력을 키우고 싶습니다! ;)"})]})]}),(0,s.jsx)("div",{className:b().myPics,children:(0,s.jsx)("img",{src:"/kbslBlog/myPics.jpg",alt:"myFace",sizes:"100vw",width:0,height:0,className:b().pics})})]}),(0,s.jsx)(u.Z,{}),(0,s.jsx)("div",{className:b().careerBlock,children:(0,s.jsxs)("div",{className:b().careerParagraphs,children:[(0,s.jsx)(o.Z,{size:"xx-large",bold:"bold",children:"Career Now | 경력"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),l.map(e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:b().cbParagraph,children:[(0,s.jsx)(o.Z,{size:"small",bold:"bold",children:e.title}),(0,s.jsx)(o.Z,{size:"small",className:"careerYear",children:x(e.startDate,i.MONTH_DATE)+" ~ "+x(e.endDate,i.MONTH_DATE)})]},e.id),(0,s.jsx)("br",{})]}))]})}),(0,s.jsx)(u.Z,{}),(0,s.jsxs)("div",{className:b().seminarAndRND,children:[(0,s.jsx)(o.Z,{size:"xx-large",bold:"bold",children:"Seminar | 연구개발 & 교육 & 보고"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),h.map(t=>(0,s.jsx)(c(),{href:null!==(e=t.url)&&void 0!==e?e:"",children:(0,s.jsxs)("div",{className:b().seminarBlock,style:{cursor:t.url?"pointer":"auto"},children:[(0,s.jsx)(o.Z,{size:"small",bold:"bold",children:t.title}),(0,s.jsx)(o.Z,{size:"small",children:x(t.date)}),(0,s.jsx)("br",{})]})},t.id))]})]}),(0,s.jsx)(u.Z,{})]})}},9384:function(e,t,r){"use strict";var n=r(7437),i=r(1241),s=r.n(i);t.Z=()=>(0,n.jsx)("div",{className:s().lineBasic})},3978:function(e,t,r){"use strict";var n=r(7437),i=r(2744),s=r.n(i),a=r(635),c=r.n(a);t.Z=e=>{let{children:t,bold:r,className:i,size:a,...u}=e;return(0,n.jsx)("div",{className:s()(c().text,i&&c()[i],a&&c()[a],r&&c()[r]),...u,children:t})}},7213:function(e,t,r){"use strict";var n=r(7437),i=r(2181),s=r.n(i);t.Z=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:s().wrapper,children:t})}},1241:function(e){e.exports={lineBasic:"lineBasic_lineBasic__S0e_k"}},635:function(e){e.exports={text:"textBasic_text__po6Ic","xx-small":"textBasic_xx-small__Adhma","x-small":"textBasic_x-small__hPM9M",small:"textBasic_small__PtwBZ",medium:"textBasic_medium__1ISnW",large:"textBasic_large__z61dO","x-large":"textBasic_x-large__Gemxl","xx-large":"textBasic_xx-large__VNzxr",bold:"textBasic_bold__R19ZP",normal:"textBasic_normal__ipvSk",bar:"textBasic_bar__hB_uF",careerYear:"textBasic_careerYear__mk9UE"}},2181:function(e){e.exports={wrapper:"wrapper_wrapper__Xe5R6"}},2875:function(e){e.exports={wholeWrapper:"introduce_wholeWrapper__DAEfp",block:"introduce_block__8xVZ0",introduceBlock:"introduce_introduceBlock__0ioxZ",pargraphs:"introduce_pargraphs__lfW0O",firstBlock:"introduce_firstBlock__IbtvV",myPics:"introduce_myPics__X_PPT",pics:"introduce_pics__uo7Xl",careerBlock:"introduce_careerBlock___hRTY",careerParagraphs:"introduce_careerParagraphs__G72h7",cbParagraph:"introduce_cbParagraph__9H6dS",seminarAndRND:"introduce_seminarAndRND__3rqBD",seminarBlock:"introduce_seminarBlock__7C6Q4"}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,s={},o=null,d=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:o,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(6685)},2744:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}(r)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[685,971,596,744],function(){return e(e.s=9837)}),_N_E=e.O()}]);