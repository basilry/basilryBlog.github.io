(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{4548:function(e){var t,s,r,n,i,a,o,c,l,d,u,h,m,x,f,g,_,p,j,v,$,b;e.exports=(t="millisecond",s="second",r="minute",n="hour",i="week",a="month",o="quarter",c="year",l="date",d="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(e,t,s){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(s)+e},(f={})[x="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],s=e%100;return"["+e+(t[(s-20)%10]||t[s]||"th")+"]"}},g="$isDayjsObject",_=function(e){return e instanceof $||!(!e||!e[g])},p=function e(t,s,r){var n;if(!t)return x;if("string"==typeof t){var i=t.toLowerCase();f[i]&&(n=i),s&&(f[i]=s,n=i);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var o=t.name;f[o]=t,n=o}return!r&&n&&(x=n),n||!r&&x},j=function(e,t){if(_(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new $(s)},(v={s:m,z:function(e){var t=-e.utcOffset(),s=Math.abs(t);return(t<=0?"+":"-")+m(Math.floor(s/60),2,"0")+":"+m(s%60,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var r=12*(s.year()-t.year())+(s.month()-t.month()),n=t.clone().add(r,a),i=s-n<0,o=t.clone().add(r+(i?-1:1),a);return+(-(r+(s-n)/(i?n-o:o-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:c,w:i,d:"day",D:l,h:n,m:r,s:s,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=p,v.i=_,v.w=function(e,t){return j(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},b=($=function(){function e(e){this.$L=p(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var m=e.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(u);if(r){var n=r[2]-1||0,i=(r[7]||"0").substring(0,3);return s?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return v},m.isValid=function(){return this.$d.toString()!==d},m.isSame=function(e,t){var s=j(e);return this.startOf(t)<=s&&s<=this.endOf(t)},m.isAfter=function(e,t){return j(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<j(e)},m.$g=function(e,t,s){return v.u(e)?this[t]:this.set(s,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var o=this,d=!!v.u(t)||t,u=v.p(e),h=function(e,t){var s=v.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return d?s:s.endOf("day")},m=function(e,t){return v.w(o.toDate()[e].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},x=this.$W,f=this.$M,g=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case c:return d?h(1,0):h(31,11);case a:return d?h(1,f):h(0,f+1);case i:var p=this.$locale().weekStart||0,j=(x<p?x+7:x)-p;return h(d?g-j:g+(6-j),f);case"day":case l:return m(_+"Hours",0);case n:return m(_+"Minutes",1);case r:return m(_+"Seconds",2);case s:return m(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,i){var o,d=v.p(e),u="set"+(this.$u?"UTC":""),h=((o={}).day=u+"Date",o[l]=u+"Date",o[a]=u+"Month",o[c]=u+"FullYear",o[n]=u+"Hours",o[r]=u+"Minutes",o[s]=u+"Seconds",o[t]=u+"Milliseconds",o)[d],m="day"===d?this.$D+(i-this.$W):i;if(d===a||d===c){var x=this.clone().set(l,1);x.$d[h](m),x.init(),this.$d=x.set(l,Math.min(this.$D,x.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[v.p(e)]()},m.add=function(e,t){var o,l=this;e=Number(e);var d=v.p(t),u=function(t){var s=j(l);return v.w(s.date(s.date()+Math.round(t*e)),l)};if(d===a)return this.set(a,this.$M+e);if(d===c)return this.set(c,this.$y+e);if("day"===d)return u(1);if(d===i)return u(7);var h=((o={})[r]=6e4,o[n]=36e5,o[s]=1e3,o)[d]||1,m=this.$d.getTime()+e*h;return v.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||d;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=v.z(this),i=this.$H,a=this.$m,o=this.$M,c=s.weekdays,l=s.months,u=s.meridiem,m=function(e,s,n,i){return e&&(e[s]||e(t,r))||n[s].slice(0,i)},x=function(e){return v.s(i%12||12,e,"0")},f=u||function(e,t,s){var r=e<12?"AM":"PM";return s?r.toLowerCase():r};return r.replace(h,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return v.s(t.$y,4,"0");case"M":return o+1;case"MM":return v.s(o+1,2,"0");case"MMM":return m(s.monthsShort,o,l,3);case"MMMM":return m(l,o);case"D":return t.$D;case"DD":return v.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(s.weekdaysMin,t.$W,c,2);case"ddd":return m(s.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(i);case"HH":return v.s(i,2,"0");case"h":return x(1);case"hh":return x(2);case"a":return f(i,a,!0);case"A":return f(i,a,!1);case"m":return String(a);case"mm":return v.s(a,2,"0");case"s":return String(t.$s);case"ss":return v.s(t.$s,2,"0");case"SSS":return v.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,t,l){var d,u=this,h=v.p(t),m=j(e),x=(m.utcOffset()-this.utcOffset())*6e4,f=this-m,g=function(){return v.m(u,m)};switch(h){case c:d=g()/12;break;case a:d=g();break;case o:d=g()/3;break;case i:d=(f-x)/6048e5;break;case"day":d=(f-x)/864e5;break;case n:d=f/36e5;break;case r:d=f/6e4;break;case s:d=f/1e3;break;default:d=f}return l?d:v.a(d)},m.daysInMonth=function(){return this.endOf(a).$D},m.$locale=function(){return f[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),r=p(e,t,!0);return r&&(s.$L=r),s},m.clone=function(){return v.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},e}()).prototype,j.prototype=b,[["$ms",t],["$s",s],["$m",r],["$H",n],["$W","day"],["$M",a],["$y",c],["$D",l]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),j.extend=function(e,t){return e.$i||(e(t,$,j),e.$i=!0),j},j.locale=p,j.isDayjs=_,j.unix=function(e){return j(1e3*e)},j.en=f[x],j.Ls=f,j.p={},j)},5407:function(e,t,s){Promise.resolve().then(s.bind(s,4886))},4886:function(e,t,s){"use strict";s.r(t);var r=s(7437),n=s(2265),i=s(4548),a=s.n(i),o=s(6691),c=s.n(o),l=s(4440),d=s.n(l),u=s(9384),h=s(3978),m=s(7213),x=s(4880),f=s(3003),g=s.n(f);let _=a()().format("YYYYMMDD"),p=a()(_).diff("20210913","year"),j=a()(_).diff("20211201","month"),v=a()(_).diff("20220101","month");t.default=()=>{let{darkMode:e}=(0,x.A)(),[t,s]=(0,n.useState)(0),[i,a]=(0,n.useState)(0),[o,l]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{p!==t&&s(t+1),p===t&&j!==i&&a(i+1),p===t&&j===i&&v!==o&&l(o+1)},50);return()=>{clearInterval(e)}},[t,i,o]),(0,r.jsxs)(m.Z,{children:[(0,r.jsxs)("div",{className:g().mainTop,children:[(0,r.jsx)("div",{className:g().imageWrapper,children:(0,r.jsx)(c(),{src:"/my_face_hand.png",alt:"myFace",width:250,height:250})}),(0,r.jsxs)("div",{className:g().paragraphWrapper,children:[(0,r.jsx)("p",{children:"안녕하세요! :)"}),(0,r.jsx)("p",{children:"Fullstack + DevSecOps를 지향하고,"}),(0,r.jsx)("p",{children:"진정한 개발자를 꿈꾸는 법학도."}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Web FrontEnd 개발자,"}),(0,r.jsx)("p",{children:"'김바실리'입니다."})]})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:d()(g().mainMid,e&&g().dark),children:[(0,r.jsxs)("div",{className:g().midBlock,children:[(0,r.jsx)("p",{children:"Total"}),(0,r.jsx)("p",{children:"Career"}),(0,r.jsx)("div",{className:g().yearNumWrapper,children:(0,r.jsxs)("div",{className:g().yearNum,children:[t,"+"]})}),(0,r.jsx)("p",{className:g().yearChar,children:"Years"})]}),(0,r.jsxs)("div",{className:d()(g().midBlock),children:[(0,r.jsx)("p",{children:"F/E"}),(0,r.jsx)("p",{children:"Position"}),(0,r.jsx)("div",{className:g().yearNumWrapper,children:(0,r.jsxs)("div",{className:g().yearNum,children:[i,"+"]})}),(0,r.jsx)("p",{className:g().yearChar,children:"Months"})]}),(0,r.jsxs)("div",{className:d()(g().midBlock),children:[(0,r.jsx)("p",{children:"B/E"}),(0,r.jsx)("p",{children:"Exp"}),(0,r.jsx)("div",{className:g().yearNumWrapper,children:(0,r.jsxs)("div",{className:g().yearNum,children:[o,"+"]})}),(0,r.jsx)("p",{className:g().yearChar,children:"Months"})]})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:d()(g().mainBot,e&&g().dark),children:[(0,r.jsxs)("div",{className:g().botImage,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"아래의 프로젝트들도 진행했어요!"}),(0,r.jsx)(h.Z,{size:"large",children:"I also worked on the projects below!"}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(h.Z,{size:"small",children:"자세한 내용은 Projects 페이지에서 확인해주세요! :)"}),(0,r.jsx)(h.Z,{size:"x-small",children:"Find out more on the Projects page! :)"})]}),(0,r.jsx)(c(),{src:"/macbook_Face.png",alt:"macbook",width:200,height:200})]}),(0,r.jsxs)("div",{className:g().botBlock,children:[(0,r.jsxs)("div",{className:g().workContents,children:[(0,r.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"또하나의가족, Solution"}),(0,r.jsx)(h.Z,{size:"large",bold:"bold",children:"2021.12 ~ 2023.06 | 1년 6개월"}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:g().contents,children:[(0,r.jsxs)("div",{className:g().ciLogo,children:[(0,r.jsx)(c(),{src:"/hecton.png",alt:"logo",width:30,height:18}),(0,r.jsx)(c(),{src:"/ddogaLogo.svg",alt:"logo",width:120,height:30})]}),(0,r.jsx)(h.Z,{size:"small",bold:"bold",children:"장기요양기관 내 어르신 대상 장기요양 행위를 기록하고 시설을 관리하는 백오피스 솔루션 웹 프로젝트입니다."})]})]}),(0,r.jsxs)("div",{className:g().workContents,children:[(0,r.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"또하나의가족, Solution | Renewal"}),(0,r.jsx)(h.Z,{size:"large",bold:"bold",children:"2023.07 ~ 2023.09 | 3개월"}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:g().contents,children:[(0,r.jsxs)("div",{className:g().ciLogo,children:[(0,r.jsx)(c(),{src:"/hecton.png",alt:"logo",width:30,height:18}),(0,r.jsx)(c(),{src:"/ddogaLogo.svg",alt:"logo",width:120,height:30})]}),(0,r.jsx)(h.Z,{size:"small",bold:"bold",children:"공단의 고시변경으로 비즈니스 로직 등 다수 기능 변경 필요로 인해 리뉴얼 작업이 진행되었습니다."})]})]})]}),(0,r.jsxs)("div",{className:g().botBlock,children:[(0,r.jsxs)("div",{className:g().workContents,children:[(0,r.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"또하나의가족, 돌봄노트"}),(0,r.jsx)(h.Z,{size:"large",bold:"bold",children:"2023.09 ~ 2024.01 | 4개월"}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:g().contents,children:[(0,r.jsxs)("div",{className:g().ciLogo,children:[(0,r.jsx)(c(),{src:"/hecton.png",alt:"logo",width:30,height:18}),(0,r.jsx)(c(),{src:"/ddoga_logo.svg",alt:"logo",width:115,height:20})]}),(0,r.jsx)(h.Z,{size:"small",bold:"bold",children:"타사 솔루션과 연동되는 요양기관 가정통신문 및 어르신 요양기록을 확인하는 모바일 웹 앱 프로젝트입니다."})]})]}),(0,r.jsxs)("div",{className:g().workContents,children:[(0,r.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"또하나의가족, 통합관리시스템 Part 1."}),(0,r.jsx)(h.Z,{size:"large",bold:"bold",children:"2024.02 ~ 2024.03 | 2개월"}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:g().contents,children:[(0,r.jsxs)("div",{className:g().ciLogo,children:[(0,r.jsx)(c(),{src:"/hecton.png",alt:"logo",width:30,height:18}),(0,r.jsx)(c(),{src:"/ddoga_logo.svg",alt:"logo",width:115,height:20})]}),(0,r.jsx)(h.Z,{size:"small",bold:"bold",children:"자사에서 인수한 복지용구 사업소 내부 물류 관리 및 외부 영업사원 관리 백오피스 모바일 웹 프로젝트입니다."})]})]})]}),(0,r.jsxs)("div",{className:g().botBlock,children:[(0,r.jsxs)("div",{className:g().workContents,children:[(0,r.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"헥톤프로젝트, 테크 블로그"}),(0,r.jsx)(h.Z,{size:"large",bold:"bold",children:"2024.02 ~ 진행 중 | 미정"}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:g().contents,children:[(0,r.jsx)("div",{className:g().ciLogo,children:(0,r.jsx)(c(),{src:"/hecton.png",alt:"logo",width:30,height:18})}),(0,r.jsx)(h.Z,{size:"small",bold:"bold",children:"헥톤프로젝트 테크 블로그 사이드 프로젝트입니다."})]})]}),(0,r.jsxs)("div",{className:g().workContents,children:[(0,r.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"또하나의가족, 통합관리시스템 Part 2."}),(0,r.jsx)(h.Z,{size:"large",bold:"bold",children:"24년 상반기 예정"}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("div",{className:g().contents,children:[(0,r.jsxs)("div",{className:g().ciLogo,children:[(0,r.jsx)(c(),{src:"/hecton.png",alt:"logo",width:30,height:18}),(0,r.jsx)(c(),{src:"/ddoga_logo.svg",alt:"logo",width:115,height:20})]}),(0,r.jsx)(h.Z,{size:"small",bold:"bold",children:"미정"})]})]})]})]}),(0,r.jsx)(u.Z,{})]})}},9384:function(e,t,s){"use strict";var r=s(7437),n=s(1241),i=s.n(n);t.Z=()=>(0,r.jsx)("div",{className:i().lineBasic})},3978:function(e,t,s){"use strict";var r=s(7437),n=s(4440),i=s.n(n),a=s(635),o=s.n(a);t.Z=e=>{let{children:t,bold:s,className:n,size:a}=e;return(0,r.jsx)("div",{className:i()(o().text,n&&o()[n],a&&o()[a],s&&o()[s]),children:t})}},7213:function(e,t,s){"use strict";var r=s(7437),n=s(2181),i=s.n(n);t.Z=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:i().wrapper,children:t})}},4880:function(e,t,s){"use strict";s.d(t,{A:function(){return f}});var r=s(4660),n=s(4810);let i=e=>({darkMode:!1,sideBarFold:!1,nowMenuName:"",changeDarkMode:()=>e(e=>({darkMode:!e.darkMode})),changeSideBarFold:t=>e(()=>({sideBarFold:t})),changeNowMenuName:t=>e(()=>({nowMenuName:t}))}),a={userId:"",password:"",accessToken:"",refreshToken:""};var o=s(9222),c=s(2601);let l=o.Z.create({baseURL:"".concat(c.env.NEXT_PUBLIC_IP,":").concat(c.env.NEXT_PUBLIC_PORT),headers:{"Content-Type":"application/json; charset=utf-8"},responseType:"json",withCredentials:!0,timeout:5e3}),d=e=>e,u=e=>Promise.reject({...e}),h=e=>e,m=e=>(e.response||(e={...e,response:{data:{message:"error",code:"9999"}}}),Promise.reject({...e}));l.interceptors.request.use(),l.interceptors.request.use(e=>d(e),e=>u(e)),l.interceptors.request.use(e=>e),l.interceptors.response.use(e=>h(e),e=>m(e));let x=e=>({loginState:!1,loginUser:{...a},doLogin:async t=>{console.log(t);let s=await function(e){let t={userId:e.userId,password:e.password};return l.post("/login/req",{serviceId:"LOGIN001",params:{json:{...t}}})}(t),{data:r}=s;"100"===r.returnCode?e({loginState:!0,loginUser:t}):(e({loginState:!1,loginUser:{...a}}),alert("login failed"))}}),f=(0,r.Ue)()((0,n.tJ)(function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return{...i(...t)}},{name:"core"}));(0,r.Ue)()((0,n.tJ)(function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return{...x(...t)}},{name:"login"}))},1241:function(e){e.exports={lineBasic:"lineBasic_lineBasic__S0e_k"}},635:function(e){e.exports={text:"textBasic_text__po6Ic","x-small":"textBasic_x-small__hPM9M",small:"textBasic_small__PtwBZ",medium:"textBasic_medium__1ISnW",large:"textBasic_large__z61dO","x-large":"textBasic_x-large__Gemxl","xx-large":"textBasic_xx-large__VNzxr",bold:"textBasic_bold__R19ZP",normal:"textBasic_normal__ipvSk",bar:"textBasic_bar__hB_uF",careerYear:"textBasic_careerYear__mk9UE"}},2181:function(e){e.exports={wrapper:"wrapper_wrapper__Xe5R6"}},3003:function(e){e.exports={mainTop:"main_mainTop__KHHkq",paragraphWrapper:"main_paragraphWrapper__zwjST",english:"main_english__eaX51",mainMid:"main_mainMid__u_vSK",midBlock:"main_midBlock__WVD7R",yearChar:"main_yearChar__Z_QB4",dark:"main_dark__yk_2E",yearNumWrapper:"main_yearNumWrapper__sqpzV",yearNum:"main_yearNum__cLgWz",mainBot:"main_mainBot__WR5Wd",botImage:"main_botImage__8x7JS",botBlock:"main_botBlock__uHROe",workContents:"main_workContents__MhfN_",contents:"main_contents__ubf6h",ciLogo:"main_ciLogo__WBuRx"}}},function(e){e.O(0,[287,939,971,596,744],function(){return e(e.s=5407)}),_N_E=e.O()}]);