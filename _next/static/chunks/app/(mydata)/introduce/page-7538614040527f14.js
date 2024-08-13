(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4548:function(e){var t,r,i,s,n,a,o,l,u,c,d,h,f,m,p,_,b,g,x,v,j,D;e.exports=(t="millisecond",r="second",i="minute",s="hour",n="week",a="month",o="quarter",l="year",u="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},_="$isDayjsObject",b=function(e){return e instanceof j||!(!e||!e[_])},g=function e(t,r,i){var s;if(!t)return m;if("string"==typeof t){var n=t.toLowerCase();p[n]&&(s=n),r&&(p[n]=r,s=n);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;p[o]=t,s=o}return!i&&s&&(m=s),s||!i&&m},x=function(e,t){if(b(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new j(r)},(v={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),s=t.clone().add(i,a),n=r-s<0,o=t.clone().add(i+(n?-1:1),a);return+(-(i+(r-s)/(n?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:l,w:n,d:"day",D:u,h:s,m:i,s:r,ms:t,Q:o})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=g,v.i=b,v.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},D=(j=function(){function e(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[_]=!0}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(d);if(i){var s=i[2]-1||0,n=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return x(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<x(e)},f.$g=function(e,t,r){return v.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var o=this,c=!!v.u(t)||t,d=v.p(e),h=function(e,t){var r=v.w(o.$u?Date.UTC(o.$y,t,e):new Date(o.$y,t,e),o);return c?r:r.endOf("day")},f=function(e,t){return v.w(o.toDate()[e].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),o)},m=this.$W,p=this.$M,_=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case l:return c?h(1,0):h(31,11);case a:return c?h(1,p):h(0,p+1);case n:var g=this.$locale().weekStart||0,x=(m<g?m+7:m)-g;return h(c?_-x:_+(6-x),p);case"day":case u:return f(b+"Hours",0);case s:return f(b+"Minutes",1);case i:return f(b+"Seconds",2);case r:return f(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,n){var o,c=v.p(e),d="set"+(this.$u?"UTC":""),h=((o={}).day=d+"Date",o[u]=d+"Date",o[a]=d+"Month",o[l]=d+"FullYear",o[s]=d+"Hours",o[i]=d+"Minutes",o[r]=d+"Seconds",o[t]=d+"Milliseconds",o)[c],f="day"===c?this.$D+(n-this.$W):n;if(c===a||c===l){var m=this.clone().set(u,1);m.$d[h](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[v.p(e)]()},f.add=function(e,t){var o,u=this;e=Number(e);var c=v.p(t),d=function(t){var r=x(u);return v.w(r.date(r.date()+Math.round(t*e)),u)};if(c===a)return this.set(a,this.$M+e);if(c===l)return this.set(l,this.$y+e);if("day"===c)return d(1);if(c===n)return d(7);var h=((o={})[i]=6e4,o[s]=36e5,o[r]=1e3,o)[c]||1,f=this.$d.getTime()+e*h;return v.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=v.z(this),n=this.$H,a=this.$m,o=this.$M,l=r.weekdays,u=r.months,d=r.meridiem,f=function(e,r,s,n){return e&&(e[r]||e(t,i))||s[r].slice(0,n)},m=function(e){return v.s(n%12||12,e,"0")},p=d||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(h,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return v.s(t.$y,4,"0");case"M":return o+1;case"MM":return v.s(o+1,2,"0");case"MMM":return f(r.monthsShort,o,u,3);case"MMMM":return f(u,o);case"D":return t.$D;case"DD":return v.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,l,2);case"ddd":return f(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(n);case"HH":return v.s(n,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(n,a,!0);case"A":return p(n,a,!1);case"m":return String(a);case"mm":return v.s(a,2,"0");case"s":return String(t.$s);case"ss":return v.s(t.$s,2,"0");case"SSS":return v.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,u){var c,d=this,h=v.p(t),f=x(e),m=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,_=function(){return v.m(d,f)};switch(h){case l:c=_()/12;break;case a:c=_();break;case o:c=_()/3;break;case n:c=(p-m)/6048e5;break;case"day":c=(p-m)/864e5;break;case s:c=p/36e5;break;case i:c=p/6e4;break;case r:c=p/1e3;break;default:c=p}return u?c:v.a(c)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=g(e,t,!0);return i&&(r.$L=i),r},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,x.prototype=D,[["$ms",t],["$s",r],["$m",i],["$H",s],["$W","day"],["$M",a],["$y",l],["$D",u]].forEach(function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,j,x),e.$i=!0),x},x.locale=g,x.isDayjs=b,x.unix=function(e){return x(1e3*e)},x.en=p[m],x.Ls=p,x.p={},x)},9837:function(e,t,r){Promise.resolve().then(r.bind(r,3694))},2706:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let i=r(1024),s=i._(r(2265)),n=s.default.createContext(null)},3694:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var i,s,n=r(7437),a=r(2265),o=r(1396),l=r.n(o),u=r(2744),c=r.n(u),d=r(9384),h=r(3978),f=r(7213),m=JSON.parse('[{"id":1,"title":"홍익대학교 법과대학 법학 학사 졸업 |","startDate":"201203","endDate":"201702"},{"id":2,"title":"대한민국 공군 학사장교 제138기 단기복무 중위 제대 |","startDate":"201702","endDate":"202005"},{"id":3,"title":"강화도 퓨전한식 요식업 창업 |","startDate":"202008","endDate":"202102"},{"id":4,"title":"사설 소프트웨어 엔지니어링 부트캠프 수료 |","startDate":"202103","endDate":"202107"},{"id":5,"title":"헬코더스 면접/알고리즘 스터디 모집 및 진행 |","startDate":"202107","endDate":"202109"},{"id":6,"title":"GC케어 자회사 헥톤프로젝트 웹 개발자 재직 중 |","startDate":"202109","endDate":""},{"id":7,"title":"한국방송통신대학교 컴퓨터과학과 학사편입 후 재학 중 |","startDate":"202209","endDate":""},{"id":8,"title":"Google Korea ML Bootcamp 2024 5기생 발탁 |","startDate":"20240701","endDate":""}]'),p=JSON.parse('[{"id":1,"title":"UI 라이브러리 비교 분석 보고","subTitle":"또하나의가족 솔루션","date":"20211013"},{"id":22,"title":"Code Convention 정리 및 공유","subTitle":"헥톤프로젝트","date":"20220208"},{"id":2,"title":"AWS 아키텍트 어소시에이트","subTitle":"Ch 1. 분석 발표 - 개요","date":"20220513","url":"https://drive.google.com/file/d/1Rk-Cpy7VyqOY-cX9GgjqaMJ5NdUgF18z/view?usp=sharing"},{"id":3,"title":"AWS 아키텍트 어소시에이트","subTitle":"Ch 2. 분석 발표 - S3","date":"20220520","url":"https://drive.google.com/file/d/1vDovoOfw7aSzIg7KqIx9904F24a42gYQ/view?usp=sharing"},{"id":4,"title":"AWS 아키텍트 어소시에이트","subTitle":"Ch 3. 분석 발표 - VPC","date":"20220512","url":"https://basilry-kim-frontend.notion.site/AWS-VPC-f4c8f948ae2c47fc947b5fefb218cf8e"},{"id":5,"title":"AWS 아키텍트 어소시에이트","subTitle":"Ch 4. 분석 발표 - EC2","date":"20220708","url":"https://basilry-kim-frontend.notion.site/AWS-EC2-Instance-a9a4ae8805174609a05607ef50402464?pvs=74"},{"id":55,"title":"ESLint 분석 및 적용 방법 공유","subTitle":"헥톤프로젝트","date":"20220805","url":"https://basilry-kim-frontend.notion.site/ESLint-a77baa9a263f4976977fa783df784b8c"},{"id":56,"title":"Redux 기술 정리 및 공유","subTitle":"헥톤프로젝트","date":"20221028","url":"https://basilry-kim-frontend.notion.site/Redux-8b4723cdb09748d3ae6daf47b10ded7a?pvs=74"},{"id":6,"title":"LINE 오픈챗 서버가 100배 급증하는 트래픽을 다루는 방법","subTitle":"헥톤프로젝트 세미나 참여 분석 공유 및 발표","date":"20221212","url":"https://drive.google.com/file/d/1MrMPCbxBWzw5BtWyAI1-YNXv6cTr6qqE/view?usp=sharing"},{"id":7,"title":"Scouter 모니터링 시스템 연구 공유","subTitle":"헥톤프로젝트","date":"20230229","url":"https://www.notion.so/basilry-kim-frontend/Scouter-119dc0b445b8450eaf64ecc825db729d?pvs=4"},{"id":8,"title":"공통모듈 설계 관련 보고","subTitle":"또하나의가족 솔루션 리뉴얼","date":"20230405"},{"id":9,"title":"OpenAI GPT발 LLM모델 AI 본격화 시대에 대한 찍먹","subTitle":"헥톤프로젝트 세미나 참여 분석 공유 및 발표","date":"20230526","url":"https://drive.google.com/file/d/1q3T11q7wPFe00CZWZ_aoC9Fx0ZB54Eqt/view?usp=sharing"},{"id":10,"title":"AWS Korea Office Hour 외부교육 참여 및 보고","subTitle":"AWS Korea","date":"20230907"},{"id":11,"title":"헥톤프로젝트 제품군 클라우드 관련 조사 후 보고","subTitle":"헥톤프로젝트","date":"20231111"},{"id":12,"title":"2023 대한민국 소프트웨어대전 참석 후 공유 및 보고","subTitle":"삼성 코엑스 외부 행사 참석","date":"20231130"},{"id":13,"title":"Spring Boot 기술 도입 분석 후 공유 및 발표","subTitle":"헥톤 테크블로그","date":"20240226","url":"https://drive.google.com/file/d/1T9-2JBD2NX_rRwtp4derkPhUXPZrVWED/view?usp=sharing"},{"id":14,"title":"백엔드 프로젝트 디자인패턴 도입 분석 후 공유 및 발표","subTitle":"헥톤 테크블로그","date":"20240315","url":"https://drive.google.com/file/d/14dA3qgBFnVYSID2W1YDEUk8OAror0cMd/view?usp=sharing"},{"id":15,"title":"ERD 설계 건 공유","subTitle":"헥톤 테크블로그","date":"20240403"},{"id":16,"title":"JWT 기반작업 건 공유","subTitle":"헥톤 테크블로그","date":"20240424","url":"https://drive.google.com/file/d/1yxDnO5n8YaPmFDis7Y0cVmZSZ2AlaPuz/view?usp=sharing"},{"id":17,"title":"Spring Security 및 JWT 연계 작업 건 공유","subTitle":"헥톤 테크블로그","date":"20240513","url":"https://drive.google.com/file/d/1xTjIBnTF3CVjPv-cOJ51vjo7m1IVtE5j/view?usp=sharing"},{"id":18,"title":"2024 AWS Summit 참가 보고서","subTitle":"삼성 코엑스 2024 AWS Summit","date":"20240520"},{"id":19,"title":"WireFrame 및 기획문서 작업 건 공유","subTitle":"헥톤 테크블로그","date":"20240612"},{"id":20,"title":"메뉴 인터페이스 작업 건 공유","subTitle":"헥톤 테크블로그","date":"20240626"},{"id":21,"title":"Neural Networks and Deep Learning 수료증","subTitle":"Google ML Bootcamp 2024 | Coursera","date":"20240709","url":"https://coursera.org/share/3fb512e87e679bbb8a6e342ca4a043f8"},{"id":22,"title":"Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization 수료증","subTitle":"Google ML Bootcamp 2024 | Coursera","date":"20240718","url":"https://coursera.org/share/2910e176169879f25b5500943881c254"},{"id":23,"title":"Structuring Machine Learning Projects 수료증","subTitle":"Google ML Bootcamp 2024 | Coursera","date":"20240721","url":"https://coursera.org/share/dddfaf276e5bfad97177e6e98a481fe0"},{"id":24,"title":"Convolutional Neural Networks 수료증","subTitle":"Google ML Bootcamp 2024 | Coursera","date":"20240810","url":"https://coursera.org/share/e5e9ebe64a8f37fd2cdcbc0302d4abe6"}]'),_=r(4880),b=r(4548),g=r.n(b);(i=s||(s={})).DEFAULT_DATE="YYYYMMDD",i.DEFAULT_DATE_TIME="YYYY.MM.DD HH:mm",i.VIEW_DATE="YYYY. MM. DD.",i.MONTH_DATE="YYYY. MM.";let x=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return g()(...t)},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.VIEW_DATE;return e?x(e).format(t):"현 재"};var j=r(2875),D=r.n(j),y=()=>{var e;let{darkMode:t}=(0,_.A)();return(0,n.jsxs)(f.Z,{children:[(0,n.jsxs)("div",{className:D().wholeWrapper,children:[(0,n.jsxs)("div",{className:D().introduceBlock,children:[(0,n.jsxs)("div",{className:D().pargraphs,children:[(0,n.jsxs)("div",{className:D().block,children:[(0,n.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"About Me | 소개"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"large",bold:"bold",children:"저는 꿈이 한 가지 있습니다."}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"언젠가 대한민국의 IT유니콘 중 당당하게 한 자리를 차지한 기업을 만들고 싶은 '김바실리'입니다."}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"저는 제가 만든 유니콘 기업을 통해서 세상을 보다 편리하고 즐거운 세상으로 만들고 싶습니다."})]}),(0,n.jsxs)("div",{className:D().block,children:[(0,n.jsx)(h.Z,{size:"large",bold:"bold",children:"처음에는"}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"동적인 화면이 좋아 프론트엔드 개발자를 지향하였고,"}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"커리어 시작 이후에는 React.js를 기반으로 Next.js, Sass(Scss), Redux, Zustand 등의 스택을 지속적으로 사용해 왔습니다."}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"개발을 지속하다보니 백엔드에 관해서도 관심이 생겨서 Node.js, Java, AWS, CS 관련 학습도 꾸준히 진행 중입니다."}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"최근에는 회사 실무 프로젝트를 통해 백엔드 포지션에 관련된 과업도 수행하고 있습니다."})]}),(0,n.jsxs)("div",{className:D().block,children:[(0,n.jsx)(h.Z,{size:"large",bold:"bold",children:"진정한 개발자란,"}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"프론트엔드의 틀에만 갇혀 있지 않고 백엔드와 인프라도 모두 알 수 있어야 진정한 개발자라고 생각합니다."}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"처음 '풀스택'이라는 말을 들었을 때는 '말도 안된다'거나 '허상이다'라고 생각했었습니다만,"}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"필드에서 2년 넘게 개발을 하다보니 개발과 관련된 전 분야를 망라해야 개발자로서의 가치를 증명할 수 있다고 봅니다."})]}),(0,n.jsxs)("div",{className:D().block,children:[(0,n.jsx)(h.Z,{size:"large",bold:"bold",children:"그리고 언젠가는,"}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{size:"medium",children:"언젠가는 오롯이 혼자서 프로젝트 구조설계, 화면 개발, 에러핸들링, 서버 구축, 보안, 인프라 구축까지 할 수 있게끔 실력을 키우고 싶습니다! ;)"})]})]}),(0,n.jsx)("div",{className:D().myPics,children:(0,n.jsx)("img",{src:"/kbslBlog/myPics.jpg",alt:"myFace",sizes:"100vw",width:0,height:0,className:D().pics})})]}),(0,n.jsx)(d.Z,{}),(0,n.jsx)("div",{className:D().careerBlock,children:(0,n.jsxs)("div",{className:D().careerParagraphs,children:[(0,n.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"Career Now | 경력"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),m.map(e=>(0,n.jsxs)(a.Fragment,{children:[(0,n.jsxs)("div",{className:D().cbParagraph,children:[(0,n.jsx)(h.Z,{size:"small",bold:"bold",children:e.title}),(0,n.jsx)(h.Z,{size:"small",className:"careerYear",children:v(e.startDate,s.MONTH_DATE)+" ~ "+v(e.endDate,s.MONTH_DATE)})]}),(0,n.jsx)("br",{})]},e.title))]})}),(0,n.jsx)(d.Z,{}),(0,n.jsxs)("div",{className:D().seminarAndRND,children:[(0,n.jsx)(h.Z,{size:"xx-large",bold:"bold",children:"Activity | 연구개발 & 교육 & 보고 & 수료"}),(0,n.jsxs)("div",{className:D().dotWrapper,children:[(0,n.jsx)("span",{className:D().red,children:"*"}),(0,n.jsx)(h.Z,{size:"x-small",bold:"normal",children:": 외부 링크로 연결됩니다."})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),p.map(r=>(0,n.jsx)(l(),{href:null!==(e=r.url)&&void 0!==e?e:"#",target:r.url?"_blank":"",scroll:!1,children:(0,n.jsxs)("div",{className:c()(D().seminarBlock,r.url&&D().active,t&&D().dark),style:{cursor:r.url?"pointer":"default"},children:[(0,n.jsxs)(h.Z,{className:D().wrapper,size:"medium",bold:"bold",children:[r.url&&(0,n.jsx)("span",{className:D().red,children:"*"}),r.title]}),r.subTitle&&(0,n.jsx)("div",{className:D().subTitle,children:(0,n.jsx)(h.Z,{className:D().subTitle,size:"x-small",bold:"bold",children:"/ "+r.subTitle})}),(0,n.jsx)(h.Z,{size:"x-small",children:v(r.date)})]})},r.id+r.date))]})]}),(0,n.jsx)(d.Z,{})]})}},9384:function(e,t,r){"use strict";var i=r(7437),s=r(1241),n=r.n(s);t.Z=()=>(0,i.jsx)("div",{className:n().lineBasic})},3978:function(e,t,r){"use strict";var i=r(7437),s=r(2744),n=r.n(s),a=r(635),o=r.n(a);t.Z=e=>{let{children:t,bold:r,className:s,size:a,...l}=e;return(0,i.jsx)("div",{className:n()(o().text,s&&o()[s],a&&o()[a],r&&o()[r]),...l,children:t})}},7213:function(e,t,r){"use strict";var i=r(7437),s=r(2181),n=r.n(s);t.Z=e=>{let{children:t}=e;return(0,i.jsx)("div",{className:n().wrapper,children:t})}},4880:function(e,t,r){"use strict";r.d(t,{A:function(){return p}});var i=r(4660),s=r(4810);let n=e=>({darkMode:!1,sideBarFold:!1,nowMenuName:"",changeDarkMode:()=>e(e=>({darkMode:!e.darkMode})),changeSideBarFold:t=>e(()=>({sideBarFold:t})),changeNowMenuName:t=>e(()=>({nowMenuName:t}))}),a={userId:"",password:"",accessToken:"",refreshToken:""};var o=r(4829),l=r(2601);let u=o.Z.create({baseURL:"".concat(l.env.NEXT_PUBLIC_IP,":").concat(l.env.NEXT_PUBLIC_PORT),headers:{"Content-Type":"application/json; charset=utf-8"},responseType:"json",withCredentials:!0,timeout:5e3}),c=e=>e,d=e=>Promise.reject({...e}),h=e=>e,f=e=>(e.response||(e={...e,response:{data:{message:"error",code:"9999"}}}),Promise.reject({...e}));u.interceptors.request.use(),u.interceptors.request.use(e=>c(e),e=>d(e)),u.interceptors.request.use(e=>e),u.interceptors.response.use(e=>h(e),e=>f(e));let m=e=>({loginState:!1,loginUser:{...a},doLogin:async t=>{console.log(t);let r=await function(e){let t={userId:e.userId,password:e.password};return u.post("/login/req",{serviceId:"LOGIN001",params:{json:{...t}}})}(t),{data:i}=r;"100"===i.returnCode?e({loginState:!0,loginUser:t}):(e({loginState:!1,loginUser:{...a}}),alert("login failed"))}}),p=(0,i.Ue)()((0,s.tJ)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return{...n(...t)}},{name:"core"}));(0,i.Ue)()((0,s.tJ)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return{...m(...t)}},{name:"login"}))},1241:function(e){e.exports={lineBasic:"lineBasic_lineBasic__S0e_k"}},635:function(e){e.exports={text:"textBasic_text__po6Ic","xx-small":"textBasic_xx-small__Adhma","x-small":"textBasic_x-small__hPM9M",small:"textBasic_small__PtwBZ",medium:"textBasic_medium__1ISnW",large:"textBasic_large__z61dO","x-large":"textBasic_x-large__Gemxl","xx-large":"textBasic_xx-large__VNzxr",bold:"textBasic_bold__R19ZP",normal:"textBasic_normal__ipvSk",bar:"textBasic_bar__hB_uF",careerYear:"textBasic_careerYear__mk9UE"}},2181:function(e){e.exports={wrapper:"wrapper_wrapper__Xe5R6"}},2875:function(e){e.exports={wholeWrapper:"introduce_wholeWrapper__DAEfp",block:"introduce_block__8xVZ0",introduceBlock:"introduce_introduceBlock__0ioxZ",pargraphs:"introduce_pargraphs__lfW0O",firstBlock:"introduce_firstBlock__IbtvV",myPics:"introduce_myPics__X_PPT",pics:"introduce_pics__uo7Xl",careerBlock:"introduce_careerBlock___hRTY",careerParagraphs:"introduce_careerParagraphs__G72h7",cbParagraph:"introduce_cbParagraph__9H6dS",seminarAndRND:"introduce_seminarAndRND__3rqBD",red:"introduce_red__sbEH8",dotWrapper:"introduce_dotWrapper__07rv_",seminarBlock:"introduce_seminarBlock__7C6Q4",wrapper:"introduce_wrapper__oTJzH",subTitle:"introduce_subTitle__4MobG",conf:"introduce_conf__hmYkq",active:"introduce_active__lGWBB",dark:"introduce_dark__3hiqT"}},1396:function(e,t,r){e.exports=r(6685)},2744:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=n(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)i.call(e,r)&&e[r]&&(t=n(t,r));return t}(r)))}return e}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0!==(r=(function(){return s}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[441,685,971,596,744],function(){return e(e.s=9837)}),_N_E=e.O()}]);