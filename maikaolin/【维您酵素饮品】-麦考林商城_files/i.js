!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/da",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){var r=window;window.parent!==window&&window.inDapIF&&(r=window.parent),function(){var t="__qq_qidian_da",e=r[t]||"qidianDA";if(e){var o=r[e]=r[e]||function(){o[t].push(arguments)};o.loaded||(o.loaded=!0,n(2)(r,function(e){var r=n(9),i=n(7),a=n(10),s={version:"0.3.2",trackers:{},trackingIds:{},ready:function(t){t.call(this)},create:function(t,n,r){if(!this.trackingIds[t]){this.trackingIds[t]=!0;var o,s;if("string"==typeof n?(s=n,o=r||{}):(o=n||{},s=null==r?"_"+i():r),this.trackers[s])throw new Error('Tracker name: "'+s+'" exist.');o.win=e,o.doc=e.document,o.ver=this.version,this.trackers[s]=new a(t,s,o)}},getTracker:function(t){return this.trackers[t]},removeTracker:function(t){var e=this.trackers[t];e&&(e.remove(),this.trackers[t]=null)},eachTracker:function(t){for(var e in this.trackers)this.trackers.hasOwnProperty(e)&&t(e)}},c="set";r(t,s,o,function(t,e,n){if("create eachTracker".indexOf(e)>=0)return void t[e].apply(t,n);var r=e.split("."),o=r[1]||r[0],i=2===r.length?r[0]:null,a=function(e){var r=t.getTracker(e);!r||c.indexOf(o)<0||"function"!=typeof r[o]||r[o].apply(r,n)};null==i?t.eachTracker(a):a(i)})}))}}()},function(t,e,n){var r=n(3),o=n(4),i=n(5),a=n(8),s=function(t,e){if(t=t||window,!r(t)){var n=t.document,s=!1,c=function(){s||o(t)||(s=!0,e(t),a(n,"visibilitychange",c))};return o(t)?void i(n,"visibilitychange",c):void e(t)}};t.exports=s},function(t,e){var n=function(t){t=t||window;var e="navigator";return t[e]&&"preview"===t[e].loadPurpose};t.exports=n},function(t,e){var n=function(t){var e=t||window,n="document";return e[n]&&(e=e[n]),"prerender"===e.visibilityState};t.exports=n},function(t,e,n){var r=n(6),o=function(t,e,n){e=e.replace(/^on/i,"");var o=function(e){n.call(t,e)},i=e;e=e.toLowerCase(),t.addEventListener?t.addEventListener(i,o,!1):t.attachEvent&&t.attachEvent("on"+i,o);var a=t[r]=t[r]=[];return a[a.length]=[e,n,o,i],t};t.exports=o},function(t,e,n){var r=n(7);t.exports="S3EVENT_LISTENERS"+r()},function(t,e){var n=function(){var t;try{var e=new Uint32Array(1);window.crypto.getRandomValues(e),t=2147483647&e[0]}catch(n){t=Math.floor(2147483648*Math.random())}return t.toString(36)};t.exports=n},function(t,e,n){var r=n(6),o=function(t,e,n){var o=n;e=e.replace(/^on/i,"").toLowerCase();for(var i,a,s,c=t[r],u=!o,f=c.length;f--;)i=c[f],i[0]!==e||!u&&i[1]!==o||(a=i[3],s=i[2],t.removeEventListener?t.removeEventListener(a,s,!1):t.detachEvent&&t.detachEvent("on"+a,s),c.splice(f,1));return t};t.exports=o},function(t,e){var n=function(t,e,n,r,o){n=n||window,n[t]=n[t]||[],o=o||"ready";for(var i=n[t],a=function(t){t.shift||(t=Array.prototype.slice.call(t));var n=t.shift();"string"==typeof n?r?r(e,n,t):e[n].apply(e,t):e[o](n)};i.length;)a(i.shift());i.push=a};t.exports=n},function(t,e,n){var r=n(7),o=n(11);n(12),n(28),n(31),n(38),n(39),n(43);var i=n(27),a=n(47),s=n(48),c=n(51),u=n(50),f=n(52),d=n(53),h=n(42),p=n(54),l="//da.qidian.qq.com",v=function(t,e,n){var r=this;s.apply(r,arguments),r.name=e,n&&r.set(n),r.set("tid",t),r.createPid(),r.createSid(),r.init()};v.prototype={init:function(){var t=this,e=t.get("win"),n=e.location,r=n.protocol;t.set("ptc",r);var o=t.get("ts");o||t.set("ts",r+l);var i=t.get("ss");i||t.set("ss",r+"//combo.b.qq.com"),t.set("hbt",5e3),t.tasks={},t.task("pq"),t.on("pv-done",function(){t.task("mta"),t.task("id"),t.tasks.pq.start()}),t.task("pv"),t.task("clc"),t.task("pc")},_setGlobal:function(t,e){this.set(t,e),c.set(t,e)},createPid:function(){var t=c.get("pid");if(t)return void this.set("pid",t);var e=h(a(location.href))+"."+this.random();this._setGlobal("pid",e)},getCommonData:function(t){var e=new d;e.prefix("v",this.get("ver")),e.prefix("tid",this.get("tid")),e.prefix("pid",this.get("pid"));var n=this.get("cid"),r=this.get("src");return r&&e.prefix("src",r),n&&e.prefix("cid",n),e.prefix("sid",this.getSid(t)),e.suffix("t",h(+new Date)),e},getFullApi:function(t){return this.get("ts")+t},ping:function(t,e,n){"pc"===t&&this.setClosedSid();var r=this.tasks.pq;r.push(t,e,n||0)},task:function(t){var e=this.tasks[t];if(!e){var n=i.get(t);if(!n)return;e=this.tasks[t]=new n}var r=o(arguments,1);e.run(this,r)},remove:function(){for(var t in this.tasks)this.tasks.hasOwnProperty(t)&&this.tasks[t].remove(this)},random:function(){return r()+"."+h(+new Date)}},f(v.prototype,p),u(v,s),t.exports=v},function(t,e){var n=function(t,e,n){var r=t.length;if(r>0){n=n||r,e=e||0;for(var o=new Array(n-e),i=e;n>i;i++)o[i]=t[i];return o}return[]};t.exports=n},function(t,e,n){var r=n(13),o=n(14),i=n(15),a=n(16),s=n(18),c=n(19),u=n(20),f=n(21),d=n(22),h={tz:(new Date).getTimezoneOffset()/60,hasf:i(),hasadb:a()?1:0,hasc:s()?1:0,hastc:c()?1:0,hasls:u()?1:0,hasss:f()?1:0},p=n(27),l=function(){};l.prototype.run=function(t){var e=t.get("win"),n=t.get("doc"),i=t.getFullApi("/ping/pv"),a=e.screen,s=a.orientation||a.mozOrientation||a.msOrientation;s&&s.type&&(s=s.type);var c=t.getCommonData(!0);c.add("r",n.referrer),c.add("sw",a.width),c.add("sh",a.height),c.add("saw",a.availWidth),c.add("sah",a.availHeight),c.add("scd",a.colorDepth),c.add("so",s),c.add("bw",o(e)),c.add("bh",r(e)),c.extend(h),d(i,c.toJSON(),{callback:function(){t.trigger("pv-done")}})},l.prototype.remove=function(t){},p.set("pv",l),t.exports=l},function(t,e){var n=function(t){t=t||window;var e=t.document,n="BackCompat"===e.compatMode?e.body:e.documentElement;return n.clientHeight};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document,n="BackCompat"===e.compatMode?e.body:e.documentElement;return n.clientWidth};t.exports=n},function(t,e){var n=function(){function t(t){return t=t.match(/[\d]+/g),t.length=3,t.join(".")}var e=!1,n="";if(navigator.plugins&&navigator.plugins.length){var r=navigator.plugins["Shockwave Flash"];r&&(e=!0,r.description&&(n=t(r.description))),navigator.plugins["Shockwave Flash 2.0"]&&(e=!0,n="2.0.0.11")}else if(navigator.mimeTypes&&navigator.mimeTypes.length){var o=navigator.mimeTypes["application/x-shockwave-flash"];e=!!o&&o.enabledPlugin,e&&(n=t(o.enabledPlugin.description))}else try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");e=!0,n=t(i.GetVariable("$version"))}catch(a){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e=!0,n="6.0.21"}catch(a){try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");e=!0,n=t(i.GetVariable("$version"))}catch(a){}}}return e?n:""};t.exports=n},function(t,e,n){var r=n(17),o=function(){var t=window,e=t.document,n=e.createElement("div");n.setAttribute("id","ads");var o=!1;try{r(n,t),o=!!e.getElementById("ads")}catch(i){}return o&&n.parentNode&&n.parentNode.removeChild(n),o};t.exports=o},function(t,e){var n=function(t,e){var n=(e||window).document,r=n.body||n.documentElement;r.insertBefore(t,r.firstChild)};t.exports=n},function(t,e,n){var r=n(7),o="S3COOKIENAME"+r(),i=function(){var t="cookie",e=window.document;if(window.navigator.cookieEnabled)return!0;e[t]=o+"=1";var n=-1!==e[t].indexOf(o+"=");return e[t]=o+"=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",n};t.exports=i},function(t,e){var n=function(){var t="DocumentTouch";return!!("ontouchstart"in window||window[t]&&document instanceof window[t])};t.exports=n},function(t,e,n){var r=n(7),o=function(){var t="S3LOCALSTORAGE"+r(),e="localStorage";try{return window[e].setItem(t,1),window[e].removeItem(t),!0}catch(n){return!1}};t.exports=o},function(t,e,n){var r=n(7),o=function(){var t="S3SESSIONSTORAGE"+r(),e="sessionStorage";try{return window[e].setItem(t,1),window[e].removeItem(t),!0}catch(n){return!1}};t.exports=o},function(t,e,n){var r=n(7),o=n(23),i=n(25),a=n(26),s=function(t,e){"string"!=typeof t&&(t=o(t));var n=e&&e.randomKey;if(n=null==n?"z":n){var i=n+"="+r();t+=(t?"&":"")+i}return t},c=function(t,e,n){var o=[t,e].join(t.indexOf("?")>=0?"&":"?"),i="S3PING_IMG"+r(),a=new Image;return window[i]=a,a.onload=a.onerror=a.onabort=function(){a.onload=a.onerror=a.onabort=null,window[i]=null,a=null,n&&n()},a.src=o,!0},u=function(t,e){return i()&&window.navigator.sendBeacon(t,e)},f=function(t,e,n){if("xhr"!==a())return!1;var r=new window.XMLHttpRequest;return r.open("POST",t,!0),r.withCredentials=!0,r.setRequestHeader("Content-Type","text/plain"),n&&(r.onreadystatechange=function(){4===r.readyState&&200===r.status&&n()}),r.send(e),!0},d=function(t,e,n){var r=t.length+n.length+1;return r>2083&&r-e.length>2048},h=function(t,e,n){e=s(e,n);var r=t.match(/(?:https?|ftp):\/\/[^\/]+/);if(!r)throw new Error('URL: "'+t+'" not absolute url.');var o=r[0],i=n&&n.transport,a=n&&n.callback;return"img"===i?c(t,e,a):"xhr"===i?f(t,e,a):"beacon"===i?u(t,e):d(t,o,e)?!a&&u(t,e)?!0:f(t,e,a)?!0:c(t,e,a):c(t,e,a)};t.exports=h},function(t,e,n){var r=n(24),o=function(t){if(!t)return"";var e=[],n=/\[\]$/,o="encodeURIComponent",i=function(t,n){n="function"==typeof n?n():null==n?"":n,e[e.length]=window[o](t)+"="+window[o](n)},a=function(t,o){var s,c,u;switch(r(o)){case"array":if(t)for(s=0,u=o.length;u>s;s++)if(n.test(t))i(t,o[s]);else{var f="object"===r(o[s])?s:"";a(t+"["+f+"]",o[s])}else for(s=0,u=o.length;u>s;s++)a(o[s].key,o[s].value);break;case"object":for(c in o)o.hasOwnProperty(c)&&a(t?t+"["+c+"]":c,o[c]);break;default:t?i(t,o):e[e.length]=o}return e};return a("",t).join("&").replace(/%20/g,"+")};t.exports=o},function(t,e){var n={Boolean:1,Number:1,String:1,Function:1,Array:1,Date:1,RegExp:1,Object:1,Error:1},r=Object.prototype.toString,o=function(t){if(null==t)return String(t);var e=typeof t,o="object";return e===o||"function"===e?(e=r.call(t).slice(8,-1),n[e]?e.toLowerCase():o):typeof t};t.exports=o},function(t,e){var n=function(){return"sendBeacon"in window.navigator};t.exports=n},function(t,e){var n=function(){return"XMLHttpRequest"in window&&"withCredentials"in new window.XMLHttpRequest?"xhr":"XDomainRequest"in window?"xdr":""};t.exports=n},function(t,e){var n=function(){this.tasks={}};n.prototype.set=function(t,e){this.tasks[t]=e},n.prototype.get=function(t){return this.tasks[t]},t.exports=new n},function(t,e,n){var r=n(29),o=n(23),i=n(30),a=n(27),s=function(){this.removed=!1};s.prototype.run=function(t){var e=t.get("win");i(function(){if(!this.removed){var n=t.get("ss")+"/da/id.html",i=o({p:t.get("pid"),t:t.get("tid"),c:t.get("cid"),s:t.getSid(),src:t.get("src"),v:t.get("ver"),ts:t.getFullApi("/ping/id")});n+="?"+i,r(n,e)}},e)},s.prototype.remove=function(t){this.removed=!0},a.set("id",s),t.exports=s},function(t,e,n){var r=n(17),o=function(t,e){var n=(e||window).document,o=n.createElement("iframe");return o.src=t,o.title="",o.role="presentation",o.frameBorder="0",o.tabIndex="-1",(o.frameElement||o).style.cssText="position:absolute;width:0;height:0;border:0;",r(o,e),o};t.exports=o},function(t,e,n){var r=n(6),o=!1,i=function(t,e){function n(){for(var t=0;t<f.length;t++){var n=f[t];if(n&&n[0]===u){var r=n[1];r(e),f.splice(t,1)}}d=!0}function i(){s.addEventListener?(s.removeEventListener("DOMContentLoaded",a),e.removeEventListener("load",a)):(s.detachEvent("onreadystatechange",a),e.detachEvent("onload",a))}function a(){(s.addEventListener||"load"===e.event.type||"complete"===s.readyState)&&(i(),n())}e=e||window;var s=e.document,c="DOMContentLoaded",u=c+42,f=s[r]=s[r]=[];if(f[f.length]=[u,t,t,c],!o){o=!0;var d=!1;if("complete"===s.readyState||"loading"!==s.readyState&&!s.documentElement.doScroll)e.setTimeout(n);else if(s.addEventListener)s.addEventListener("DOMContentLoaded",a),e.addEventListener("load",a);else{s.attachEvent("onreadystatechange",a),e.attachEvent("onload",a);var h=!1;try{h=null==e.frameElement&&s.documentElement}catch(p){}h&&h.doScroll&&!function l(){if(!d){try{h.doScroll("left")}catch(t){return e.setTimeout(l,50)}i(),n()}}()}}};t.exports=i},function(t,e,n){var r=n(27),o=n(5),i=n(8),a=n(32),s=n(33),c=n(34),u=n(14),f=n(13),d=n(35),h=n(36),p=n(37),l=n(19),v=function(){};v.prototype.run=function(t){var e=t.get("win"),n=t.get("doc"),r=n.documentElement;this.cb=function(n){var r=a(n),o=t.getCommonData(),i=r.nodeName.toLowerCase();if(o.add("pw",d(e)),o.add("ph",h(e)),o.add("bw",u(e)),o.add("bh",f(e)),o.add("bx",c(e)),o.add("by",s(e)),o.add("tag",i),r.href){var l=r.getAttribute("target");l&&o.add("target",l),o.add("href",r.href)}o.add("x",n.clientX||0),o.add("y",n.clientY||0);var v,g=0;"a"!==i&&"button"!==i||(v=p(r),g=2),"input"!==i||"button"!==r.type&&"submit"!==r.type||(v=r.value||"",g=2),v&&o.add("word",v.slice(0,20)),t.ping("clc",o,g)},o(r,l()?"touchstart":"click",this.cb)},v.prototype.remove=function(t){var e=t.get("doc"),n=e.documentElement;i(n,"click",this.cb),l()&&i(n,"touchstart",this.cb)},r.set("clc",v),t.exports=v},function(t,e){var n=function(t){return t.target||t.srcElement};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document;return t.pageYOffset||e.documentElement.scrollTop||e.body.scrollTop};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document;return t.pageXOffset||e.documentElement.scrollLeft||e.body.scrollLeft};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document,n=e.body,r=e.documentElement,o="BackCompat"===e.compatMode?n:e.documentElement;return Math.max(r.scrollWidth,n.scrollWidth,o.clientWidth)};t.exports=n},function(t,e){var n=function(t){t=t||window;var e=t.document,n=e.body,r=e.documentElement,o="BackCompat"===e.compatMode?n:e.documentElement;return Math.max(r.scrollHeight,n.scrollHeight,o.clientHeight)};t.exports=n},function(t,e){var n=function(t){var e="",r=t.nodeType;if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)e+=n(t)}else if(3===r||4===r)return t.nodeValue;return e};t.exports=n},function(t,e,n){var r=n(27),o=n(5),i=n(8),a="unload",s=function(){};s.prototype.run=function(t){var e=t.get("win");this.cb=function(){var e=t.getCommonData();t.ping("pc",e,3)},o(e,a,this.cb)},s.prototype.remove=function(t){var e=t.get("win");i(e,a,this.cb)},r.set("pc",s),t.exports=s},function(t,e,n){var r=n(40),o=n(42),i=n(27),a=n(26),s=n(22),c=n(41),u=n(25),f=u(),d=a()&&f?8192:2047,h=function(){this.queue=[]};h.prototype.run=function(t){this.stopping=!0,this.tracker=t,this.heartBeatInterval=t.get("hbt"),this.batchApi=t.getFullApi("/ping/b")},h.prototype.start=function(){this.stopping=!1,this.batchSend()},h.prototype.stop=function(){this.stopping=!0},h.prototype.push=function(t,e,n){var o=new r(this.tracker.getFullApi("/ping/"+t),t,e);if(this.stopping)return void this._push(o,n);var i=3===n;if(n&&(0===this.queue.length||o.size()>=d))return void o.ping(i);this._push(o,n);var a=n&&n>1;a?this.batchSend(i):this.waitForSend()},h.prototype._push=function(t,e){e?this.queue.unshift(t):this.queue.push(t)},h.prototype.waitForSend=function(){var t=this;t.heartBeat||(t.heartBeat=setTimeout(function(){t.heartBeat=null,t.batchSend()},t.heartBeatInterval))},h.prototype.batchSend=function(t){var e,n,r=[];for(e=0,n=this.queue.length;n>e;e++)r.push(this.queue[e].encode());e=n;var o=this.calQuery(r);if(o){for(;o.length>d&&e>=2;)e--,o=this.calQuery(r,e);this.queue.splice(0,e),t?c(this.batchApi,o):s(this.batchApi,o),this.queue.length&&this.waitForSend()}},h.prototype.calQuery=function(t,e){function n(){for(var e=[],n=0,r=t.length;r>n;n++)e.push(t[n].slice(s));var o=i?"c="+i+"&":"";return o+"l[]="+e.join("&l[]=")+a}null!=e&&(t=t.slice(0,e));var r=t[0];if(!r)return"";var i="",a="&t="+o(+new Date);if(1===t.length)return"l[]="+r+a;for(var s=0,c=r.length;c>s;s++){for(var u,f=null,d=0,h=t.length;h>d;d++){var p=t[d];if(u=p.charAt(s),null!=f&&f!==u)return n();f=u}i+=u}return n()},h.prototype.remove=function(t){this.heartBeat&&(clearTimeout(this.heartBeat),this.heartBeat=null)},i.set("pq",h),t.exports=h},function(t,e,n){var r=n(22),o=n(41),i=function(t,e,n){this.api=t,this.pingName=e,this.params=n,n.hasKey("a")||this.params.prefix("a",e);var r=this;this.params.on("change",function(){r._changed=!0})};i.prototype.getQueryData=function(){return this.params},i.prototype.size=function(){var t={a:1};return this.encode(t).length},i.prototype.ping=function(t){var e=this.params.filter({a:1});return t?void o(this.api,e):void r(this.api,e)},i.prototype.encode=function(t){if(!t&&null!=this._encodeValue&&!this._changed)return this._encodeValue;var e=this.params.encode(t);return this._changed=!1,t||(this._encodeValue=e),e},t.exports=i},function(t,e,n){var r=n(22),o=n(25)(),i=function(t,e,n){if(n=n||{},n.transport=o?"beacon":"img",r(t,e,n),!o){var i,a=200,s=+new Date;for(i=s+a;i>s;)s=+new Date}};t.exports=i},function(t,e){var n=function(t){return t.toString(36)};t.exports=n},function(t,e,n){var r=n(44),o=n(23),i=n(27),a=function(){this.removed=!1};a.prototype.run=function(t){var e=t.get("noMTA");if(!e){var n=t.get("doc"),i=t.getCommonData(),a=t.getFullApi("/jsonp/mta")+"?"+o(i.toJSON());r(a,function(e,r){if(r&&r.sid){var o,i=n.createElement("script"),a=n.getElementsByTagName("script"),s=a[a.length-1];i.setAttribute("sid",r.sid),i.setAttribute("name","MTAH5"),i.src=t.get("ptc")+"//pingjs.qq.com/h5/stats.js",s&&s.parentNode?s.parentNode.insertBefore(i,s):(o=n.getElementsByTagName("head")[0])&&o.appendChild(i)}})}},a.prototype.remove=function(t){this.removed=!0},i.set("mta",a),t.exports=a},function(t,e,n){var r=n(7),o=n(45),i=n(11),a=n(46),s=function(t,e,n,r,o){if(t.setAttribute("type","text/javascript"),r&&t.setAttribute("charset",r),t.setAttribute("src",e),o)return void o.insertBefore(t,o.firstChild);var i=n.getElementsByTagName("script"),a=i[i.length-1];if(a)a.parentNode.insertBefore(t,a);else{var s=n.getElementsByTagName("head")[0];s.insertBefore(t,s.firstChild)}},c=function(t,e,n,c,u,f){var d=u?u.ownerDocument:document,h=d.defaultView||d.parentWindow,p=d.createElement("SCRIPT"),l="S3JSONPPREFIX";f=f||"callback",n=n||1e4;var v,g,m=new RegExp("(?:\\?|&)"+f+"=([^&]*)"),w=function(t){return function(){try{if(t)e.call(h,o());else{var n=i(arguments);n.unshift(null),e.apply(h,n),clearTimeout(v)}h[g]=null,delete h[g]}catch(r){a(r)}finally{p&&p.parentNode&&p.parentNode.removeChild(p)}}},y=t.match(m);g=y?y[1]:l+r(),h[g]=w(!1),n&&(v=setTimeout(w(!0),n)),y||(t+=(t.indexOf("?")<0?"?":"&")+f+"="+g),s(p,t,d,c,u)};t.exports=c},function(t,e){var n=function(t){return new Error(t||"")};t.exports=n},function(t,e){var n=function(t){"undefined"!=typeof window.console&&"function"==typeof window.console.log&&window.console.log(t)};t.exports=n},function(t,e){var n=function(t){var e=1;if(t){var n=0;e=0;for(var r=t.length-1;r>=0;r--)n=t.charCodeAt(r),e=(e<<6&268435455)+n+(n<<14),n=266338304&e,e=0!=n?e^n>>21:e}return e};t.exports=n},function(t,e,n){var r=n(49),o=n(50),i=function(){this.vals={},r.apply(this,arguments)};o(i,r),i.prototype.set=function(t,e){if("string"==typeof t){var n=this.vals[t];n!==e&&(this.vals[t]=e,this.trigger("change",t,e,n))}else{var r=t;for(var o in r)r.hasOwnProperty(o)&&this.set(o,r[o])}},i.prototype.get=function(t){return this.vals[t]||""},i.prototype.map=function(t){for(var e in this.vals)if(this.vals.hasOwnProperty(e)){var n=this.vals[e];n&&t(e,n)}},t.exports=i},function(t,e){var n="_EVENTS",r=function(){};r.prototype.on=function(t,e){var r=this[n];r||(r=this[n]={});var o=r[t]=r[t]||[];o.push(e)},r.prototype.off=function(t,e){if(!t)return void(this[n]={});var r=this[n];if(r&&r[t]){if(!e)return void(r[t].length=0);for(var o=r[t],i=0;i<o.length;i++)o[i]===e&&(o[i]=null)}},r.prototype.trigger=function(t){var e=Array.prototype.slice.call(arguments,0),r=this[n];if(t=e.shift(),r&&r[t])for(var o=r[t],i=0;i<o.length;i++)o[i]&&o[i].apply(this,e)},t.exports=r},function(t,e){var n=function(t,e){var n=t.prototype,r=function(){};r.prototype=e.prototype;var o=t.prototype=new r;for(var i in n)n.hasOwnProperty(i)&&(o[i]=n[i]);t.prototype.constructor=t,t.superClass=e.prototype};t.exports=n},function(t,e,n){var r=n(48);t.exports=new r},function(t,e){var n=Object.prototype.toString,r=function(t){return t&&"[object object]"===n.call(t)&&t.nodetype&&t!==t.window},o=function(t,e,n){function o(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function i(t,e){for(var n in e)e.hasOwnProperty(n)&&(r(e[n])?(t[n]=t[n]||{},i(t[n],e[n])):t[n]=e[n])}var a=o;return"boolean"!=typeof t&&(n=e,e=t,a=i),a(e,n),e};t.exports=o},function(t,e,n){var r=n(24),o=n(49),i=n(50),a=function(){this.json=[],this.suffixJSON=[],this._prefixLength=0};i(a,o),a.prototype.prefix=function(t,e){this._add(t,e,this._prefixLength),this._prefixLength++},a.prototype.add=function(t,e){this._add(t,e)},a.prototype._add=function(t,e,n){var r={key:t,value:e};null!=n?this.json.splice(n,0,r):this.json.push(r),this.trigger("change")},a.prototype.suffix=function(t,e){var n={key:t,value:e};this.suffixJSON.push(n),this.trigger("change")},a.prototype.hasKey=function(t){for(var e=0,n=this.json.length;n>e;e++)if(this.json[e].key===t)return!0;return!1},a.prototype.extend=function(t){for(var e in t)t.hasOwnProperty(e)&&null!=t[e]&&this.json.push({key:e,value:t[e]});this.trigger("change")},a.prototype.toJSON=function(){return this.json.concat(this.suffixJSON)},a.prototype.filter=function(t){var e,n,r,o=this.json,i=[];for(e=0,n=o.length;n>e;e++)r=o[e],t[r.key]||i.push(r);var a=this.suffixJSON;for(e=0,n=a.length;n>e;e++)r=a[e],t[r.key]||i.push(r);return i},a.prototype.size=function(t){return this.encode(t).length},a.prototype.encode=function(t){var e=this.toJSON();return a.encode(e,t)},a.encode=function(t,e){if(!t||!t.length)return"";var n=[],o=/\[\]$/,i=function(t,e){e="function"==typeof e?e():null==e?"":e,n[n.length]=a.encodeValue(t)+"("+a.encodeValue(e)+")"},s=function(t,a){var c,u,f;switch(r(a)){case"array":if(t)for(c=0,u=a.length;u>c;c++)if(o.test(t))i(t,a[c]);else{var d="object"===r(a[c])?c:"";s(t+"["+d+"]",a[c])}else for(c=0,u=a.length;u>c;c++)f=a[c].key,e&&e[f]||s(f,a[c].value);break;case"object":for(f in a)a.hasOwnProperty(f)&&s(t?t+"["+f+"]":f,a[f]);break;default:t?i(t,a):n[n.length]=a}return n};return s("",t).join("").replace(/%20/g,"+")},a.encodeValue=function(t){return window.encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")},t.exports=a},function(t,e,n){var r=n(55),o=n(61),i=n(63),a=n(64),s=n(18),c=n(47),u=n(51),f=n(42),d={createSid:function(){this._hasCookie=s(),this._sidExpiredTime=0;var t=u.get("sid");if(t)return void this.set("sid",t);var e=this.get("win"),n=i(e.location.search,"ADTAG"),o=f(c(n)),d=this.get("doc").referrer,h=f(c(d));if(!this._hasCookie)return void this.recreateSid(o,h);var p=this.getCookieSid(),l=p[0],v=p[1];if(!l||!v)return void this.recreateSid(o,h);var g;if(l&&v){var m=l.split("."),w=m[0],y=m[1];g=n&&w!==o||d&&y!==h&&!a(d,e.location.href)}if(!g)return void this._saveSid(l,v);var x=r("_qddac",e,null,null),k=x.split(".");return k[0]===o&&k[1]===h?void this._saveSid(k[0]+"."+k[1],k[2]+"."+k[3]):void this.recreateSid(o,h)},recreateSid:function(t,e){t=t||f(c(i(this.get("win").location.search,"ADTAG"))),e=e||f(c(this.get("doc").referrer));var n=t+"."+e,r=this.random();this._saveSid(n,r)},refreshCookie:function(){if(!this._hasCookie){var t=+new Date,e=this._sidExpiredTime;return void(t>=e&&this.recreateSid())}var n=this.getCookieSid(),r=n[0],o=n[1];if(r&&o){var i=this.get("sid");if(i[0]!==r||i[1]!==o)return;this._setSidCookie()}else this.recreateSid()},_setSidCookie:function(){var t=18e5,e=+new Date,n=new Date;if(n.setHours(23),n.setMinutes(59),n.setSeconds(59),n.setMilliseconds(999),n=+n,this._hasCookie){var r=this.get("win"),i=this.get("sid"),a=o("_qdda",i[0],r,Math.min(t,n-e),null,"/");a&=o("_qddab",i[1],r,null,null,"/"),this._hasCookie=a}this._hasCookie||(this._sidExpiredTime=Math.min(e+t,n))},_saveSid:function(t,e){this._setGlobal("sid",[t,e]),this._setSidCookie()},_getSid:function(){var t=this.get("sid");return t?t.join("."):""},getSid:function(t){return t||this.refreshCookie(),this._getSid()},getCookieSid:function(){var t=this.get("win"),e=r("_qdda",t,null,"/"),n=r("_qddab",t,null,"/");return[e,n]},setClosedSid:function(){if(this._hasCookie){var t=this.getCookieSid(),e=t[0],n=t[1];if(e&&n){var r=this.get("win"),i=this._getSid();o("_qddac",i,r,Math.max(this._getLoadedTime()+5e3,1e4),null,null)}}},_getLoadedTime:function(){var t=this.get("win"),e=t.performance||t.webkitPerformance,n=e&&e.timing;if(!n)return 0;var r=n.navigationStart;return 0===r?0:n.loadEventStart-r}};t.exports=d},function(t,e,n){var r=n(56),o=n(59),i=function(t,e,n,i){for(var a=o(t,e),s=r(e,n,i),c=0;c<a.length;c++){var u=a[c];if(0===u.indexOf(s))return u.slice(s.length)}return""};t.exports=i},function(t,e,n){var r=n(57),o=n(58),i=function(t,e,n){t=t||window;var i=t.location,a=o(null!=n?n:i.pathname),s=r(null!=e?e:i.hostname);return s+(a>1?"-"+a:"")+"-"};t.exports=i},function(t,e){var n=function(t){return 0===t.indexOf(".")?t.substr(1):t},r=function(t){return n(t).split(".").length};t.exports=r},function(t,e){var n=function(t){return t?(t.length>1&&t.lastIndexOf("/")===t.length-1&&(t=t.substr(0,t.length-1)),0!==t.indexOf("/")&&(t="/"+t),t):"/"},r=function(t){return t=n(t),"/"===t?1:t.split("/").length};t.exports=r},function(t,e,n){var r=n(60),o=function(t,e){e=e||window;for(var n=[],o=e.document.cookie.split(";"),i=new RegExp("^\\s*"+r(t)+"=\\s*(.*?)\\s*$"),a=0;a<o.length;a++){var s=o[a].match(i);s&&(n[n.length]=e.decodeURIComponent(s[1]))}return n};t.exports=o},function(t,e){var n=function(t){return String(t).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\-])","g"),"\\$1")};t.exports=n},function(t,e,n){var r=n(56),o=n(62),i=function(t,e,n,i,a,s){var c=r(n,a,s);return o(t,c+e,n,i,a,s)};t.exports=i},function(t,e,n){var r=n(59),o=function(t,e,n,o,i,a){n=n||window,e=n.encodeURIComponent(e);var s=t+"="+e+"; ";if(null!=a&&(s+="path="+a+"; "),null!=o){var c=new Date;c.setTime(c.getTime()+o),s+="expires="+c.toGMTString()+"; "}null!=i&&(s+="domain="+i+";");var u=n.document,f=u.cookie;if(u.cookie=s,f===u.cookie){for(var d=r(t),h=0;h<d.length;h++)if(e===d[h])return!0;return!1}return!0};t.exports=o},function(t,e,n){var r=n(60),o=function(t,e){var n=new RegExp("(^|&|\\?|#)"+r(e)+"=([^&#]*)(&|$|#)",""),o=t.match(n);return o&&o[2]?window.decodeURIComponent(o[2]):""};t.exports=o},function(t,e,n){var r=n(65),o=function(t,e){return r(t)===r(e)};t.exports=o},function(t,e){var n=/[^:]+:\/\/([^:\/]+)/,r=function(t){var e=t.match(n);return e?e[1]:""};t.exports=r}]);