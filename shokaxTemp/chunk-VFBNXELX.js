import{a as P}from"./chunk-QAWHJ5B3.js";import{a as x}from"./chunk-ITIPDZF5.js";var he=()=>m("main > .inner").offsetHeight,m=(e,o=document)=>e[0]==="#"?o.getElementById(e.substring(1)):o.querySelector(e);m.all=(e,o=document)=>o.querySelectorAll(e);m.each=(e,o,s)=>{m.all(e,s).forEach(o)};var Z=function(e,o){let s=e.parentNode;s.lastChild===e?s.appendChild(o):s.insertBefore(o,e.nextSibling)},g=function(e,o,s,p){let i=document.createElement(o);switch(Object.assign(i,s),p){case"after":Z(e,i);break;case"replace":e.innerHTML="",e.appendChild(i);break;default:e.appendChild(i)}return i},ye=function(e,o){let s=document.createElement("div");Object.assign(s,o),e.parentNode.insertBefore(s,e),e.parentNode.removeChild(e),s.appendChild(e)},be=function(e){return e.getBoundingClientRect().height},_=function(e,o){e.style.width=typeof o=="number"?o+"rem":o},I=function(e){return e.getBoundingClientRect().width},$=function(e){return e.getBoundingClientRect().top},j=function(e){return e.getBoundingClientRect().left},xe=function(e){return e.style.display},C=function(e,o){return e.style.display=o,e},Te=function(e,o){return m(o,e)};function B(){Object.assign(HTMLElement.prototype,{child(e){return m(e,this)},find(e){return m.all(e,this)},_class(e,o,s){(o.indexOf(" ")?o.split(" "):[o]).forEach(i=>{e==="toggle"?this.classList.toggle(i,s):this.classList[e](i)})},addClass(e){return this._class("add",e),this},removeClass(e){return this._class("remove",e),this},toggleClass(e,o){return this._class("toggle",e,o),this},hasClass(e){return this.classList.contains(e)}})}var L=x;B();var Ce=L.statics.indexOf("//")>0?L.statics:L.root,R={x:0,y:0},ee=0,N,te,D=document.getElementsByTagName("body")[0],He=document.documentElement,Ne=m("#container"),ke=m("#loading"),ne=m("#nav"),Oe=m("#header"),Se=ne.child(".toggle"),Ae=m("#quick"),Pe=m("#sidebar"),_e=m("#brand"),re=m("#tool"),oe,ie,se,ae,Ie=m("#search"),q,le,ce,de=window.innerHeight,pe=window.innerWidth,O=0,k=window.location.href,ue;function je(e){q=e}function Be(e){le=e}function De(e){ce=e}function qe(e){de=e}function Fe(e){pe=e}function We(e){ee=e}function $e(e){te=e}function F(e){O=e}function Re(e){k=e}function Ue(e){ue=e}function Ge(e){N=e}function Ye(e){oe=e}function Je(e){ie=e}function Xe(e){se=e}function Ve(e){ae=e}function Qe(e){re=e}var nt=(e,o,s,p)=>{let i,h="none";switch(o){case 0:i={opacity:[1,0]};break;case 1:i={opacity:[0,1]},h="block";break;case"bounceUpIn":i={begin(l){C(e,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},h="block";break;case"shrinkIn":i={begin(l){C(e,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},h="block";break;case"slideRightIn":i={begin(l){C(e,"block")},translateX:["100%","0%"],opacity:[0,1]},h="block";break;case"slideRightOut":i={translateX:["0%","100%"],opacity:[1,0]};break;default:i=o,h=o.display;break}P(Object.assign({targets:e,duration:200,easing:"linear",begin(){p&&p()},complete(){C(e,h),s&&s()}},i)).play()},H=(e,o,s)=>{P({targets:typeof o=="number"&&typeof e!="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:o||(typeof e=="number"?e:e?$(e)+document.documentElement.scrollTop-q:0),complete(){s&&s()}}).play()};var v={set(e,o){localStorage.setItem(e,o)},get(e){return localStorage.getItem(e)},del(e){localStorage.removeItem(e)}};var U=e=>{if(!e)return;let o=g(D,"div",{innerHTML:e,className:"tip"});setTimeout(()=>{o.addClass("hide"),setTimeout(()=>{D.removeChild(o)},300)},3e3)},ut=()=>{L.auto_scroll&&v.set(k,String(R.y))},mt=e=>{let o=window.location.hash,s=null;if(O){v.del(k);return}o?s=m(decodeURI(o)):s=L.auto_scroll?parseInt(v.get(k)):0,s&&(H(s),F(1)),e&&o&&!O&&(H(s),F(1))},ht=(e,o)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e).then(()=>{o&&o(!0)},()=>{o&&o(!1)}):(console.error("Too old browser, clipborad API not supported."),o&&o(!1))};var G=()=>{let e;m.each("div.tab",o=>{if(o.getAttribute("data-ready"))return;let s=o.getAttribute("data-id"),p=o.getAttribute("data-title"),i=m("#"+s);i?e=!1:(i=document.createElement("div"),i.className="tabs",i.id=s,i.innerHTML='<div class="show-btn"></div>',i.child(".show-btn").addEventListener("click",()=>{H(i)}),o.parentNode.insertBefore(i,o),e=!0);let h=i.child(".nav ul");h||(h=g(i,"div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul"));let l=g(h,"li",{innerHTML:p});e&&(l.addClass("active"),o.addClass("active")),l.addEventListener("click",c=>{let T=c.currentTarget;i.find(".active").forEach(b=>{b.removeClass("active")}),o.addClass("active"),T.addClass("active")}),i.appendChild(o),o.setAttribute("data-ready",String(!0))})};var S=null,W=/mobile/i.test(window.navigator.userAgent),kt=(e,o)=>{let s={el:{},create(){e.player.options.btns&&e.player.options.btns.forEach(t=>{s.el[t]||(s.el[t]=g(e,"div",{className:t+" btn",onclick(r){e.player.fetch().then(()=>{e.player.options.events[t](r)})}}))})}},p={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!e.player.options.controls)return;let t=p;e.player.options.controls.forEach(r=>{if(t.btns[r])return;let n={onclick(u){t.events[r]?t.events[r](u):e.player.options.events[r](u)}};switch(r){case"volume":n.className=" "+(l.muted?"off":"on"),n.innerHTML='<div class="bar"></div>',n["on"+f.nameMap.dragStart]=t.events.volume,n.onclick=null;break;case"mode":n.className=" "+e.player.options.mode;break;default:n.className="";break}n.className=r+n.className+" btn",t.btns[r]=g(t.el,"div",n)}),t.btns.volume.bar=t.btns.volume.child(".bar")},events:{mode(t){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}p.btns.mode.className="mode "+e.player.options.mode+" btn",v.set("_PlayerMode",e.player.options.mode)},volume(t){t.preventDefault();let r=t.currentTarget,n=!1,u=d=>{d.preventDefault(),e.player.volume(p.percent(d,r)),n=!0},a=d=>{d.preventDefault(),r.removeEventListener(f.nameMap.dragEnd,a),r.removeEventListener(f.nameMap.dragMove,u),n?(e.player.muted(),e.player.volume(p.percent(d,r))):l.muted?(e.player.muted(),e.player.volume(l.volume)):(e.player.muted("muted"),p.update(0))};r.addEventListener(f.nameMap.dragMove,u),r.addEventListener(f.nameMap.dragEnd,a)},backward(t){p.step="prev",e.player.mode()},forward(t){p.step="next",e.player.mode()}},update(t){p.btns.volume.className="volume "+(!l.muted&&t>0?"on":"off")+" btn",_(p.btns.volume.bar,Math.floor(t*100)+"%")},percent(t,r){let n=((t.clientX||t.changedTouches[0].clientX)-j(r))/I(r);return n=Math.max(n,0),Math.min(n,1)}},i={el:null,bar:null,create(){let t=c.current().el;t&&(i.el&&(i.el.parentNode.removeClass("current").removeEventListener(f.nameMap.dragStart,i.drag),i.el.remove()),i.el=g(t,"div",{className:"progress"}),i.el.setAttribute("data-dtime",f.secondToTime(0)),i.bar=g(i.el,"div",{className:"bar"}),t.addClass("current"),t.addEventListener(f.nameMap.dragStart,i.drag),c.scroll())},update(t){_(i.bar,Math.floor(t*100)+"%"),i.el.setAttribute("data-ptime",f.secondToTime(t*l.duration))},seeking(t){t?i.el.addClass("seeking"):i.el.removeClass("seeking")},percent(t,r){let n=((t.clientX||t.changedTouches[0].clientX)-j(r))/I(r);return n=Math.max(n,0),Math.min(n,1)},drag(t){t.preventDefault();let r=c.current().el,n=a=>{a.preventDefault();let d=i.percent(a,r);i.update(d),A.update(d*l.duration)},u=a=>{a.preventDefault(),r.removeEventListener(f.nameMap.dragEnd,u),r.removeEventListener(f.nameMap.dragMove,n);let d=i.percent(a,r);i.update(d),e.player.seek(d*l.duration),l.disableTimeupdate=!1,i.seeking(!1)};l.disableTimeupdate=!0,i.seeking(!0),r.addEventListener(f.nameMap.dragMove,n),r.addEventListener(f.nameMap.dragEnd,u)}},h={el:null,create(){let t=c.current();h.el.innerHTML='<div class="cover"><div class="disc"><img src="'+t.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+t.name+"</h4><span>"+t.artist+'</span><div class="lrc"></div></div>',h.el.child(".cover").addEventListener("click",e.player.options.events["play-pause"]),A.create(h.el.child(".lrc"))}},l,c={el:null,data:[],index:-1,errnum:0,add:(t,r)=>{r.forEach(n=>{n.group=t,n.name=n.name||n.title||"Meida name",n.artist=n.artist||n.author||"Anonymous",n.cover=n.cover||n.pic,n.type=n.type||"normal",c.data.push(n)})},clear(){c.data=[],c.el.innerHTML="",c.index!==-1&&(c.index=-1,e.player.fetch())},create(){let t=c.el;c.data.map((r,n)=>{if(r.el)return null;let u="list-"+e.player._id+"-"+r.group,a=m("#"+u);return a||(a=g(t,"div",{id:u,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"}),e.player.group&&(a.setAttribute("data-title",e.player.options.rawList[r.group].title),a.setAttribute("data-id",e.player._id))),r.el=g(a.child("ol"),"li",{title:r.name+" - "+r.artist,innerHTML:'<span class="info"><span>'+r.name+"</span><span>"+r.artist+"</span></span>",onclick(d){let M=d.currentTarget;if(c.index===n&&i.el){l.paused?e.player.play():e.player.seek(l.duration*i.percent(d,M));return}e.player.switch(n),e.player.play()}}),r}),G()},current(){return this.data[this.index]},scroll(){let t=this.current(),r=this.el.child("li.active");r&&r.removeClass("active");let n=this.el.child(".tab.active");return n&&n.removeClass("active"),r=this.el.find(".nav li")[t.group],r&&r.addClass("active"),n=this.el.find(".tab")[t.group],n&&n.addClass("active"),H(t.el,t.el.offsetTop),this},title(){if(l.paused)return;let t=this.current();document.title="Now Playing..."+t.name+" - "+t.artist+" | "+N},error(){let t=this.current();t.el.removeClass("current").addClass("error"),t.error=!0,this.errnum++}},T={el:null,create(){this.el||(this.el=g(e,"div",{className:"player-info",innerHTML:(e.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),h.el=this.el.child(".preview"),c.el=this.el.child(".playlist"),p.el=this.el.child(".controller"))},hide(){let t=this.el;t.addClass("hide"),window.setTimeout(()=>{t.removeClass("show hide")},300)}},b={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(t){l.paused?e.player.play():e.player.pause()},music(t){T.el.hasClass("show")?T.hide():(T.el.addClass("show"),c.scroll().title())}}},f={random(t){return Math.floor(Math.random()*t)},parse(t){let r=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(n=>{let a=new RegExp(n[0]).exec(t);a!==null&&(r=[n[1],n[2],a[1]])}),r},fetch(t){let r=[];return new Promise((n,u)=>{t.forEach(a=>{let d=f.parse(a);if(d[0]){let M=JSON.stringify(d),E=v.get(M);E?(r.push(...JSON.parse(E)),n(r)):fetch(`${L.playerAPI}/meting/?server=`+d[0]+"&type="+d[1]+"&id="+d[2]+"&r="+Math.random()).then(y=>y.json()).then(y=>{v.set(M,JSON.stringify(y)),r.push(...y),n(r)}).catch(y=>{})}else r.push(a),n(r)})})},secondToTime(t){let r=d=>isNaN(d)?"00":d<10?"0"+d:""+d,n=Math.floor(t/3600),u=Math.floor((t-n*3600)/60),a=Math.floor(t-n*3600-u*60);return(n>0?[n,u,a]:[u,a]).map(r).join(":")},nameMap:{dragStart:W?"touchstart":"mousedown",dragMove:W?"touchmove":"mousemove",dragEnd:W?"touchend":"mouseup"}};l=null,e.player={_id:f.random(999999),group:!0,load(t){let r="";t&&t.length>0?this.options.rawList!==t&&(this.options.rawList=t,c.clear(),this.fetch()):(r="none",this.pause());for(let n in s.el)C(s.el[n],r);return this},fetch(){return new Promise((t,r)=>{if(c.data.length>0)t(!0);else if(this.options.rawList){let n=[];this.options.rawList.forEach((u,a)=>{n.push(new Promise((d,M)=>{let E=a,y;u.list?(this.group=!0,y=u.list):(E=0,this.group=!1,y=[u]),f.fetch(y).then(w=>{c.add(E,w),d(0)})}))}),Promise.all(n).then(()=>{t(!0)})}}).then(t=>{t&&(c.create(),p.create(),this.mode())})},mode(){let t=c.data.length;if(!t||c.errnum===t)return;let r=p.step==="next"?1:-1,n=()=>{let a=c.index+r;(a>t||a<0)&&(a=p.step==="next"?0:t-1),c.index=a},u=()=>{let a=f.random(t);c.index!==a?c.index=a:n()};switch(this.options.mode){case"random":u();break;case"order":n();break;case"loop":p.step&&n(),c.index===-1&&u();break}this.init()},switch(t){typeof t=="number"&&t!==c.index&&c.current()&&!c.current().error&&(c.index=t,this.init())},init(){let t=c.current();if(!t||t.error){this.mode();return}let r=!1;l.paused||(r=!0,this.stop()),l.setAttribute("src",t.url),l.setAttribute("title",t.name+" - "+t.artist),this.volume(v.get("_PlayerVolume")||"0.7"),this.muted(v.get("_PlayerMuted")),i.create(),this.options.type==="audio"&&h.create(),r===!0&&this.play()},play(){if(S&&S.player.pause(),c.current().error){this.mode();return}l.play().then(()=>{c.scroll()}).catch(t=>{})},pause(){l.pause(),document.title=N},stop(){l.pause(),l.currentTime=0,document.title=N},seek(t){t=Math.max(t,0),t=Math.min(t,l.duration),l.currentTime=t,i.update(t/l.duration)},muted(t){t==="muted"?(l.muted=t,v.set("_PlayerMuted",t),p.update(0)):(v.del("_PlayerMuted"),l.muted=!1,p.update(l.volume))},volume(t){isNaN(t)||(p.update(t),v.set("_PlayerVolume",t),l.volume=t)},mini(){T.hide()}};let A={el:null,data:null,index:0,create(t){let r=c.index,n=c.current().lrc,u=a=>{if(r!==c.index)return;this.data=this.parse(a);let d="";this.data.forEach((M,E)=>{d+="<p"+(E===0?' class="current"':"")+">"+M[1]+"</p>"}),this.el=g(t,"div",{className:"inner",innerHTML:d},"replace"),this.index=0};n.startsWith("http")?this.fetch(n,u):u(n)},update(t){if(this.data&&(this.index>this.data.length-1||t<this.data[this.index][0]||!this.data[this.index+1]||t>=this.data[this.index+1][0])){for(let r=0;r<this.data.length;r++)if(t>=this.data[r][0]&&(!this.data[r+1]||t<this.data[r+1][0])){this.index=r;let n=-(this.index-1);this.el.style.transform="translateY("+n+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[r].addClass("current")}}},parse(t){if(t){t=t.replace(/([^\]^\n])\[/g,(a,d)=>d+`
[`);let r=t.split(`
`),n=[],u=r.length;for(let a=0;a<u;a++){let d=r[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),M=r[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(d){let E=d.length;for(let y=0;y<E;y++){let w=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(d[y]),V=w[1]*60,Q=parseInt(w[2]),z=w[4]?parseInt(w[4])/((w[4]+"").length===2?100:1e3):0,K=V+Q+z;n.push([K,M])}}}return n=n.filter(a=>a[1]),n.sort((a,d)=>a[0]-d[0]),n}else return[]},fetch(t,r){fetch(t).then(n=>n.text()).then(n=>{r(n)}).catch(n=>{})}},X={onerror(){c.error(),e.player.mode()},ondurationchange(){l.duration!==1&&i.el.setAttribute("data-dtime",f.secondToTime(l.duration))},onloadedmetadata(){e.player.seek(0),i.el.setAttribute("data-dtime",f.secondToTime(l.duration))},onplay(){e.parentNode.addClass("playing"),U(this.getAttribute("title")),S=e},onpause(){e.parentNode.removeClass("playing"),S=null},ontimeupdate(){this.disableTimeupdate||(i.update(this.currentTime/this.duration),A.update(this.currentTime))},onended(t){e.player.mode(),e.player.play()}};return(t=>{e.player.created||(e.player.options=Object.assign(b,t),e.player.options.mode=v.get("_PlayerMode")||e.player.options.mode,s.create(),l=g(e,e.player.options.type,X),T.create(),e.parentNode.addClass(e.player.options.type),e.player.created=!0)})(o),e};function At(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running(rocket & minify)","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}var Y=(e,o,s)=>{if(s)o();else{let p=document.createElement("script");p.onload=function(i,h){(h||!p.readyState)&&(console.log("abort!"),p.onload=null,p=void 0,!h&&o&&setTimeout(o,0))},p.src=e,document.head.appendChild(p)}},Pt=e=>{let{text:o,parentNode:s,id:p,className:i,type:h,src:l,dataset:c}=e,T=o||e.textContent||e.innerHTML||"";s.removeChild(e);let b=document.createElement("script");p&&(b.id=p),i&&(b.className=i),h&&(b.type=h),l&&(b.src=l,b.async=!1),c.pjax!==void 0&&(b.dataset.pjax=""),T!==""&&b.appendChild(document.createTextNode(T)),s.appendChild(b)};var J=(e,o)=>{let s=L[e][o];return s.includes("http")?s:s.includes("gh")||s.includes("combine")?`https://cdn.jsdelivr.net/${s}`:s.includes("npm")?`https://cdn.jsdelivr.net/${s}`:`/${s}`},qt=(e,o,s)=>{LOCAL[e]&&Y(J("js",e),o||function(){window[e]=!0},s||window[e])},Ft=(e,o)=>{window["css"+e]||LOCAL[e]&&(g(document.head,"link",{rel:"stylesheet",href:J("css",e)}),window["css"+e]=!0)};export{he as a,m as b,Z as c,g as d,ye as e,be as f,_ as g,xe as h,C as i,Te as j,B as k,L as l,Ce as m,R as n,ee as o,N as p,te as q,D as r,He as s,Ne as t,ke as u,ne as v,Oe as w,Se as x,Ae as y,Pe as z,_e as A,re as B,oe as C,ie as D,se as E,ae as F,le as G,ce as H,pe as I,je as J,Be as K,De as L,qe as M,Fe as N,We as O,$e as P,F as Q,Re as R,Ue as S,Ge as T,Ye as U,Je as V,Xe as W,Ve as X,Qe as Y,nt as Z,H as _,v as $,U as aa,ut as ba,mt as ca,ht as da,G as ea,kt as fa,At as ga,Pt as ha,qt as ia,Ft as ja};
/*! For license information please see chunk-VFBNXELX.js.LEGAL.txt */
