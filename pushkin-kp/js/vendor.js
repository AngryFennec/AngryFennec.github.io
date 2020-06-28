
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
    "use strict";
  
    window.console = window.console || {
      info: function (stuff) {}
    };
  
    // If there's no jQuery, fancyBox can't work
    // =========================================
  
    if (!$) {
      return;
    }
  
    // Check if fancyBox is already initialized
    // ========================================
  
    if ($.fn.fancybox) {
      console.info("fancyBox already initialized");
  
      return;
    }
  
    // Private default settings
    // ========================
  
    var defaults = {
      // Close existing modals
      // Set this to false if you do not need to stack multiple instances
      closeExisting: false,
  
      // Enable infinite gallery navigation
      loop: false,
  
      // Horizontal space between slides
      gutter: 50,
  
      // Enable keyboard navigation
      keyboard: true,
  
      // Should allow caption to overlap the content
      preventCaptionOverlap: true,
  
      // Should display navigation arrows at the screen edges
      arrows: true,
  
      // Should display counter at the top left corner
      infobar: true,
  
      // Should display close button (using `btnTpl.smallBtn` template) over the content
      // Can be true, false, "auto"
      // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
      smallBtn: "auto",
  
      // Should display toolbar (buttons at the top)
      // Can be true, false, "auto"
      // If "auto" - will be automatically hidden if "smallBtn" is enabled
      toolbar: "auto",
  
      // What buttons should appear in the top right corner.
      // Buttons will be created using templates from `btnTpl` option
      // and they will be placed into toolbar (class="fancybox-toolbar"` element)
      buttons: [
        "zoom",
        //"share",
        "slideShow",
        //"fullScreen",
        //"download",
        "thumbs",
        "close"
      ],
  
      // Detect "idle" time in seconds
      idleTime: 3,
  
      // Disable right-click and use simple image protection for images
      protect: false,
  
      // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
      modal: false,
  
      image: {
        // Wait for images to load before displaying
        //   true  - wait for image to load and then display;
        //   false - display thumbnail and load the full-sized image over top,
        //           requires predefined image dimensions (`data-width` and `data-height` attributes)
        preload: false
      },
  
      ajax: {
        // Object containing settings for ajax request
        settings: {
          // This helps to indicate that request comes from the modal
          // Feel free to change naming
          data: {
            fancybox: true
          }
        }
      },
  
      iframe: {
        // Iframe template
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
  
        // Preload iframe before displaying it
        // This allows to calculate iframe content width and height
        // (note: Due to "Same Origin Policy", you can't get cross domain data).
        preload: true,
  
        // Custom CSS styling for iframe wrapping element
        // You can use this to set custom iframe dimensions
        css: {},
  
        // Iframe tag attributes
        attr: {
          scrolling: "auto"
        }
      },
  
      // For HTML5 video only
      video: {
        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
          '<source src="{{src}}" type="{{format}}" />' +
          'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
          "</video>",
        format: "", // custom video format
        autoStart: true
      },
  
      // Default content type if cannot be detected automatically
      defaultType: "image",
  
      // Open/close animation type
      // Possible values:
      //   false            - disable
      //   "zoom"           - zoom images from/to thumbnail
      //   "fade"
      //   "zoom-in-out"
      //
      animationEffect: "zoom",
  
      // Duration in ms for open/close animation
      animationDuration: 366,
  
      // Should image change opacity while zooming
      // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
      zoomOpacity: "auto",
  
      // Transition effect between slides
      //
      // Possible values:
      //   false            - disable
      //   "fade'
      //   "slide'
      //   "circular'
      //   "tube'
      //   "zoom-in-out'
      //   "rotate'
      //
      transitionEffect: "fade",
  
      // Duration in ms for transition animation
      transitionDuration: 366,
  
      // Custom CSS class for slide element
      slideClass: "",
  
      // Custom CSS class for layout
      baseClass: "",
  
      // Base template for layout
      baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div class="fancybox-stage"></div>' +
        '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
        "</div>" +
        "</div>",
  
      // Loading indicator template
      spinnerTpl: '<div class="fancybox-loading"></div>',
  
      // Error message template
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
  
      btnTpl: {
        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
          "</a>",
  
        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
          "</button>",
  
        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
          "</button>",
  
        // Arrows
        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
          '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
          "</button>",
  
        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
          '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
          "</button>",
  
        // This small close button will be appended to your html/inline/ajax content by default,
        // if "smallBtn" option is not set to false
        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
          "</button>"
      },
  
      // Container is injected into this element
      parentEl: "body",
  
      // Hide browser vertical scrollbars; use at your own risk
      hideScrollbar: true,
  
      // Focus handling
      // ==============
  
      // Try to focus on the first focusable element after opening
      autoFocus: true,
  
      // Put focus back to active element after closing
      backFocus: true,
  
      // Do not let user to focus on element outside modal content
      trapFocus: true,
  
      // Module specific options
      // =======================
  
      fullScreen: {
        autoStart: false
      },
  
      // Set `touch: false` to disable panning/swiping
      touch: {
        vertical: true, // Allow to drag content vertically
        momentum: true // Continue movement after releasing mouse/touch when panning
      },
  
      // Hash value when initializing manually,
      // set `false` to disable hash change
      hash: null,
  
      // Customize or add new media types
      // Example:
      /*
        media : {
          youtube : {
            params : {
              autoplay : 0
            }
          }
        }
      */
      media: {},
  
      slideShow: {
        autoStart: false,
        speed: 3000
      },
  
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      },
  
      // Use mousewheel to navigate gallery
      // If 'auto' - enabled for images only
      wheel: "auto",
  
      // Callbacks
      //==========
  
      // See Documentation/API/Events for more information
      // Example:
      /*
        afterShow: function( instance, current ) {
          console.info( 'Clicked element:' );
          console.info( current.opts.$orig );
        }
      */
  
      onInit: $.noop, // When instance has been initialized
  
      beforeLoad: $.noop, // Before the content of a slide is being loaded
      afterLoad: $.noop, // When the content of a slide is done loading
  
      beforeShow: $.noop, // Before open animation starts
      afterShow: $.noop, // When content is done loading and animating
  
      beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
      afterClose: $.noop, // After instance has been closed
  
      onActivate: $.noop, // When instance is brought to front
      onDeactivate: $.noop, // When other instance has been activated
  
      // Interaction
      // ===========
  
      // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
      // each option can be string or method that returns value.
      //
      // Possible values:
      //   "close"           - close instance
      //   "next"            - move to next gallery item
      //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
      //   "toggleControls"  - show/hide controls
      //   "zoom"            - zoom image (if loaded)
      //   false             - do nothing
  
      // Clicked on the content
      clickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      },
  
      // Clicked on the slide
      clickSlide: "close",
  
      // Clicked on the background (backdrop) element;
      // if you have not changed the layout, then most likely you need to use `clickSlide` option
      clickOutside: "close",
  
      // Same as previous two, but for double click
      dblclickContent: false,
      dblclickSlide: false,
      dblclickOutside: false,
  
      // Custom options when mobile device is detected
      // =============================================
  
      mobile: {
        preventCaptionOverlap: false,
        idleTime: false,
        clickContent: function (current, event) {
          return current.type === "image" ? "toggleControls" : false;
        },
        clickSlide: function (current, event) {
          return current.type === "image" ? "toggleControls" : "close";
        },
        dblclickContent: function (current, event) {
          return current.type === "image" ? "zoom" : false;
        },
        dblclickSlide: function (current, event) {
          return current.type === "image" ? "zoom" : false;
        }
      },
  
      // Internationalization
      // ====================
  
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom"
        },
        de: {
          CLOSE: "Schlie&szlig;en",
          NEXT: "Weiter",
          PREV: "Zur&uuml;ck",
          ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "Vergr&ouml;&szlig;ern"
        }
      }
    };
  
    // Few useful variables and methods
    // ================================
  
    var $W = $(window);
    var $D = $(document);
  
    var called = 0;
  
    // Check if an object is a jQuery object and not a native JavaScript object
    // ========================================================================
    var isQuery = function (obj) {
      return obj && obj.hasOwnProperty && obj instanceof $;
    };
  
    // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
    // ===============================================================================
    var requestAFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
  
    var cancelAFrame = (function () {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function (id) {
          window.clearTimeout(id);
        }
      );
    })();
  
    // Detect the supported transition-end event property name
    // =======================================================
    var transitionEnd = (function () {
      var el = document.createElement("fakeelement"),
        t;
  
      var transitions = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };
  
      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
  
      return "transitionend";
    })();
  
    // Force redraw on an element.
    // This helps in cases where the browser doesn't redraw an updated element properly
    // ================================================================================
    var forceRedraw = function ($el) {
      return $el && $el.length && $el[0].offsetHeight;
    };
  
    // Exclude array (`buttons`) options from deep merging
    // ===================================================
    var mergeOpts = function (opts1, opts2) {
      var rez = $.extend(true, {}, opts1, opts2);
  
      $.each(opts2, function (key, value) {
        if ($.isArray(value)) {
          rez[key] = value;
        }
      });
  
      return rez;
    };
  
    // How much of an element is visible in viewport
    // =============================================
  
    var inViewport = function (elem) {
      var elemCenter, rez;
  
      if (!elem || elem.ownerDocument !== document) {
        return false;
      }
  
      $(".fancybox-container").css("pointer-events", "none");
  
      elemCenter = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
      };
  
      rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
  
      $(".fancybox-container").css("pointer-events", "");
  
      return rez;
    };
  
    // Class definition
    // ================
  
    var FancyBox = function (content, opts, index) {
      var self = this;
  
      self.opts = mergeOpts({
        index: index
      }, $.fancybox.defaults);
  
      if ($.isPlainObject(opts)) {
        self.opts = mergeOpts(self.opts, opts);
      }
  
      if ($.fancybox.isMobile) {
        self.opts = mergeOpts(self.opts, self.opts.mobile);
      }
  
      self.id = self.opts.id || ++called;
  
      self.currIndex = parseInt(self.opts.index, 10) || 0;
      self.prevIndex = null;
  
      self.prevPos = null;
      self.currPos = 0;
  
      self.firstRun = true;
  
      // All group items
      self.group = [];
  
      // Existing slides (for current, next and previous gallery items)
      self.slides = {};
  
      // Create group elements
      self.addContent(content);
  
      if (!self.group.length) {
        return;
      }
  
      self.init();
    };
  
    $.extend(FancyBox.prototype, {
      // Create DOM structure
      // ====================
  
      init: function () {
        var self = this,
          firstItem = self.group[self.currIndex],
          firstItemOpts = firstItem.opts,
          $container,
          buttonStr;
  
        if (firstItemOpts.closeExisting) {
          $.fancybox.close(true);
        }
  
        // Hide scrollbars
        // ===============
  
        $("body").addClass("fancybox-active");
  
        if (
          !$.fancybox.getInstance() &&
          firstItemOpts.hideScrollbar !== false &&
          !$.fancybox.isMobile &&
          document.body.scrollHeight > window.innerHeight
        ) {
          $("head").append(
            '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
            (window.innerWidth - document.documentElement.clientWidth) +
            "px;}</style>"
          );
  
          $("body").addClass("compensate-for-scrollbar");
        }
  
        // Build html markup and set references
        // ====================================
  
        // Build html code for buttons and insert into main template
        buttonStr = "";
  
        $.each(firstItemOpts.buttons, function (index, value) {
          buttonStr += firstItemOpts.btnTpl[value] || "";
        });
  
        // Create markup from base template, it will be initially hidden to
        // avoid unnecessary work like painting while initializing is not complete
        $container = $(
            self.translate(
              self,
              firstItemOpts.baseTpl
              .replace("{{buttons}}", buttonStr)
              .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
            )
          )
          .attr("id", "fancybox-container-" + self.id)
          .addClass(firstItemOpts.baseClass)
          .data("FancyBox", self)
          .appendTo(firstItemOpts.parentEl);
  
        // Create object holding references to jQuery wrapped nodes
        self.$refs = {
          container: $container
        };
  
        ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
          self.$refs[item] = $container.find(".fancybox-" + item);
        });
  
        self.trigger("onInit");
  
        // Enable events, deactive previous instances
        self.activate();
  
        // Build slides, load and reveal content
        self.jumpTo(self.currIndex);
      },
  
      // Simple i18n support - replaces object keys found in template
      // with corresponding values
      // ============================================================
  
      translate: function (obj, str) {
        var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
  
        return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
          return arr[n] === undefined ? match : arr[n];
        });
      },
  
      // Populate current group with fresh content
      // Check if each object has valid type and content
      // ===============================================
  
      addContent: function (content) {
        var self = this,
          items = $.makeArray(content),
          thumbs;
  
        $.each(items, function (i, item) {
          var obj = {},
            opts = {},
            $item,
            type,
            found,
            src,
            srcParts;
  
          // Step 1 - Make sure we have an object
          // ====================================
  
          if ($.isPlainObject(item)) {
            // We probably have manual usage here, something like
            // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )
  
            obj = item;
            opts = item.opts || item;
          } else if ($.type(item) === "object" && $(item).length) {
            // Here we probably have jQuery collection returned by some selector
            $item = $(item);
  
            // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
            opts = $item.data() || {};
            opts = $.extend(true, {}, opts, opts.options);
  
            // Here we store clicked element
            opts.$orig = $item;
  
            obj.src = self.opts.src || opts.src || $item.attr("href");
  
            // Assume that simple syntax is used, for example:
            //   `$.fancybox.open( $("#test"), {} );`
            if (!obj.type && !obj.src) {
              obj.type = "inline";
              obj.src = item;
            }
          } else {
            // Assume we have a simple html code, for example:
            //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
            obj = {
              type: "html",
              src: item + ""
            };
          }
  
          // Each gallery object has full collection of options
          obj.opts = $.extend(true, {}, self.opts, opts);
  
          // Do not merge buttons array
          if ($.isArray(opts.buttons)) {
            obj.opts.buttons = opts.buttons;
          }
  
          if ($.fancybox.isMobile && obj.opts.mobile) {
            obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
          }
  
          // Step 2 - Make sure we have content type, if not - try to guess
          // ==============================================================
  
          type = obj.type || obj.opts.type;
          src = obj.src || "";
  
          if (!type && src) {
            if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
              type = "video";
  
              if (!obj.opts.video.format) {
                obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
              }
            } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
              type = "image";
            } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
              type = "iframe";
              obj = $.extend(true, obj, {
                contentType: "pdf",
                opts: {
                  iframe: {
                    preload: false
                  }
                }
              });
            } else if (src.charAt(0) === "#") {
              type = "inline";
            }
          }
  
          if (type) {
            obj.type = type;
          } else {
            self.trigger("objectNeedsType", obj);
          }
  
          if (!obj.contentType) {
            obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
          }
  
          // Step 3 - Some adjustments
          // =========================
  
          obj.index = self.group.length;
  
          if (obj.opts.smallBtn == "auto") {
            obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
          }
  
          if (obj.opts.toolbar === "auto") {
            obj.opts.toolbar = !obj.opts.smallBtn;
          }
  
          // Find thumbnail image, check if exists and if is in the viewport
          obj.$thumb = obj.opts.$thumb || null;
  
          if (obj.opts.$trigger && obj.index === self.opts.index) {
            obj.$thumb = obj.opts.$trigger.find("img:first");
  
            if (obj.$thumb.length) {
              obj.opts.$orig = obj.opts.$trigger;
            }
          }
  
          if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
            obj.$thumb = obj.opts.$orig.find("img:first");
          }
  
          if (obj.$thumb && !obj.$thumb.length) {
            obj.$thumb = null;
          }
  
          obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);
  
          // "caption" is a "special" option, it can be used to customize caption per gallery item
          if ($.type(obj.opts.caption) === "function") {
            obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
          }
  
          if ($.type(self.opts.caption) === "function") {
            obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
          }
  
          // Make sure we have caption as a string or jQuery object
          if (!(obj.opts.caption instanceof $)) {
            obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
          }
  
          // Check if url contains "filter" used to filter the content
          // Example: "ajax.html #something"
          if (obj.type === "ajax") {
            srcParts = src.split(/\s+/, 2);
  
            if (srcParts.length > 1) {
              obj.src = srcParts.shift();
  
              obj.opts.filter = srcParts.shift();
            }
          }
  
          // Hide all buttons and disable interactivity for modal items
          if (obj.opts.modal) {
            obj.opts = $.extend(true, obj.opts, {
              trapFocus: true,
              // Remove buttons
              infobar: 0,
              toolbar: 0,
  
              smallBtn: 0,
  
              // Disable keyboard navigation
              keyboard: 0,
  
              // Disable some modules
              slideShow: 0,
              fullScreen: 0,
              thumbs: 0,
              touch: 0,
  
              // Disable click event handlers
              clickContent: false,
              clickSlide: false,
              clickOutside: false,
              dblclickContent: false,
              dblclickSlide: false,
              dblclickOutside: false
            });
          }
  
          // Step 4 - Add processed object to group
          // ======================================
  
          self.group.push(obj);
        });
  
        // Update controls if gallery is already opened
        if (Object.keys(self.slides).length) {
          self.updateControls();
  
          // Update thumbnails, if needed
          thumbs = self.Thumbs;
  
          if (thumbs && thumbs.isActive) {
            thumbs.create();
  
            thumbs.focus();
          }
        }
      },
  
      // Attach an event handler functions for:
      //   - navigation buttons
      //   - browser scrolling, resizing;
      //   - focusing
      //   - keyboard
      //   - detecting inactivity
      // ======================================
  
      addEvents: function () {
        var self = this;
  
        self.removeEvents();
  
        // Make navigation elements clickable
        // ==================================
  
        self.$refs.container
          .on("click.fb-close", "[data-fancybox-close]", function (e) {
            e.stopPropagation();
            e.preventDefault();
  
            self.close(e);
          })
          .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
            e.stopPropagation();
            e.preventDefault();
  
            self.previous();
          })
          .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
            e.stopPropagation();
            e.preventDefault();
  
            self.next();
          })
          .on("click.fb", "[data-fancybox-zoom]", function (e) {
            // Click handler for zoom button
            self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
          });
  
        // Handle page scrolling and browser resizing
        // ==========================================
  
        $W.on("orientationchange.fb resize.fb", function (e) {
          if (e && e.originalEvent && e.originalEvent.type === "resize") {
            if (self.requestId) {
              cancelAFrame(self.requestId);
            }
  
            self.requestId = requestAFrame(function () {
              self.update(e);
            });
          } else {
            if (self.current && self.current.type === "iframe") {
              self.$refs.stage.hide();
            }
  
            setTimeout(
              function () {
                self.$refs.stage.show();
  
                self.update(e);
              },
              $.fancybox.isMobile ? 600 : 250
            );
          }
        });
  
        $D.on("keydown.fb", function (e) {
          var instance = $.fancybox ? $.fancybox.getInstance() : null,
            current = instance.current,
            keycode = e.keyCode || e.which;
  
          // Trap keyboard focus inside of the modal
          // =======================================
  
          if (keycode == 9) {
            if (current.opts.trapFocus) {
              self.focus(e);
            }
  
            return;
          }
  
          // Enable keyboard navigation
          // ==========================
  
          if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
            return;
          }
  
          // Backspace and Esc keys
          if (keycode === 8 || keycode === 27) {
            e.preventDefault();
  
            self.close(e);
  
            return;
          }
  
          // Left arrow and Up arrow
          if (keycode === 37 || keycode === 38) {
            e.preventDefault();
  
            self.previous();
  
            return;
          }
  
          // Righ arrow and Down arrow
          if (keycode === 39 || keycode === 40) {
            e.preventDefault();
  
            self.next();
  
            return;
          }
  
          self.trigger("afterKeydown", e, keycode);
        });
  
        // Hide controls after some inactivity period
        if (self.group[self.currIndex].opts.idleTime) {
          self.idleSecondsCounter = 0;
  
          $D.on(
            "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
            function (e) {
              self.idleSecondsCounter = 0;
  
              if (self.isIdle) {
                self.showControls();
              }
  
              self.isIdle = false;
            }
          );
  
          self.idleInterval = window.setInterval(function () {
            self.idleSecondsCounter++;
  
            if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
              self.isIdle = true;
              self.idleSecondsCounter = 0;
  
              self.hideControls();
            }
          }, 1000);
        }
      },
  
      // Remove events added by the core
      // ===============================
  
      removeEvents: function () {
        var self = this;
  
        $W.off("orientationchange.fb resize.fb");
        $D.off("keydown.fb .fb-idle");
  
        this.$refs.container.off(".fb-close .fb-prev .fb-next");
  
        if (self.idleInterval) {
          window.clearInterval(self.idleInterval);
  
          self.idleInterval = null;
        }
      },
  
      // Change to previous gallery item
      // ===============================
  
      previous: function (duration) {
        return this.jumpTo(this.currPos - 1, duration);
      },
  
      // Change to next gallery item
      // ===========================
  
      next: function (duration) {
        return this.jumpTo(this.currPos + 1, duration);
      },
  
      // Switch to selected gallery item
      // ===============================
  
      jumpTo: function (pos, duration) {
        var self = this,
          groupLen = self.group.length,
          firstRun,
          isMoved,
          loop,
          current,
          previous,
          slidePos,
          stagePos,
          prop,
          diff;
  
        if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
          return;
        }
  
        // Should loop?
        pos = parseInt(pos, 10);
        loop = self.current ? self.current.opts.loop : self.opts.loop;
  
        if (!loop && (pos < 0 || pos >= groupLen)) {
          return false;
        }
  
        // Check if opening for the first time; this helps to speed things up
        firstRun = self.firstRun = !Object.keys(self.slides).length;
  
        // Create slides
        previous = self.current;
  
        self.prevIndex = self.currIndex;
        self.prevPos = self.currPos;
  
        current = self.createSlide(pos);
  
        if (groupLen > 1) {
          if (loop || current.index < groupLen - 1) {
            self.createSlide(pos + 1);
          }
  
          if (loop || current.index > 0) {
            self.createSlide(pos - 1);
          }
        }
  
        self.current = current;
        self.currIndex = current.index;
        self.currPos = current.pos;
  
        self.trigger("beforeShow", firstRun);
  
        self.updateControls();
  
        // Validate duration length
        current.forcedDuration = undefined;
  
        if ($.isNumeric(duration)) {
          current.forcedDuration = duration;
        } else {
          duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
        }
  
        duration = parseInt(duration, 10);
  
        // Check if user has swiped the slides or if still animating
        isMoved = self.isMoved(current);
  
        // Make sure current slide is visible
        current.$slide.addClass("fancybox-slide--current");
  
        // Fresh start - reveal container, current slide and start loading content
        if (firstRun) {
          if (current.opts.animationEffect && duration) {
            self.$refs.container.css("transition-duration", duration + "ms");
          }
  
          self.$refs.container.addClass("fancybox-is-open").trigger("focus");
  
          // Attempt to load content into slide
          // This will later call `afterLoad` -> `revealContent`
          self.loadSlide(current);
  
          self.preload("image");
  
          return;
        }
  
        // Get actual slide/stage positions (before cleaning up)
        slidePos = $.fancybox.getTranslate(previous.$slide);
        stagePos = $.fancybox.getTranslate(self.$refs.stage);
  
        // Clean up all slides
        $.each(self.slides, function (index, slide) {
          $.fancybox.stop(slide.$slide, true);
        });
  
        if (previous.pos !== current.pos) {
          previous.isComplete = false;
        }
  
        previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
  
        // If slides are out of place, then animate them to correct position
        if (isMoved) {
          // Calculate horizontal swipe distance
          diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
  
          $.each(self.slides, function (index, slide) {
            slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });
  
            // Make sure that each slide is in equal distance
            // This is mostly needed for freshly added slides, because they are not yet positioned
            var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
  
            $.fancybox.setTranslate(slide.$slide, {
              top: 0,
              left: leftPos - stagePos.left + diff
            });
  
            if (slide.pos !== current.pos) {
              slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
            }
  
            // Redraw to make sure that transition will start
            forceRedraw(slide.$slide);
  
            // Animate the slide
            $.fancybox.animate(
              slide.$slide, {
                top: 0,
                left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
              },
              duration,
              function () {
                slide.$slide
                  .css({
                    transform: "",
                    opacity: ""
                  })
                  .removeClass("fancybox-slide--next fancybox-slide--previous");
  
                if (slide.pos === self.currPos) {
                  self.complete();
                }
              }
            );
          });
        } else if (duration && current.opts.transitionEffect) {
          // Set transition effect for previously active slide
          prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
  
          previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));
  
          $.fancybox.animate(
            previous.$slide,
            prop,
            duration,
            function () {
              previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
            },
            false
          );
        }
  
        if (current.isLoaded) {
          self.revealContent(current);
        } else {
          self.loadSlide(current);
        }
  
        self.preload("image");
      },
  
      // Create new "slide" element
      // These are gallery items  that are actually added to DOM
      // =======================================================
  
      createSlide: function (pos) {
        var self = this,
          $slide,
          index;
  
        index = pos % self.group.length;
        index = index < 0 ? self.group.length + index : index;
  
        if (!self.slides[pos] && self.group[index]) {
          $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
  
          self.slides[pos] = $.extend(true, {}, self.group[index], {
            pos: pos,
            $slide: $slide,
            isLoaded: false
          });
  
          self.updateSlide(self.slides[pos]);
        }
  
        return self.slides[pos];
      },
  
      // Scale image to the actual size of the image;
      // x and y values should be relative to the slide
      // ==============================================
  
      scaleToActual: function (x, y, duration) {
        var self = this,
          current = self.current,
          $content = current.$content,
          canvasWidth = $.fancybox.getTranslate(current.$slide).width,
          canvasHeight = $.fancybox.getTranslate(current.$slide).height,
          newImgWidth = current.width,
          newImgHeight = current.height,
          imgPos,
          posX,
          posY,
          scaleX,
          scaleY;
  
        if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
          return;
        }
  
        self.isAnimating = true;
  
        $.fancybox.stop($content);
  
        x = x === undefined ? canvasWidth * 0.5 : x;
        y = y === undefined ? canvasHeight * 0.5 : y;
  
        imgPos = $.fancybox.getTranslate($content);
  
        imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
        imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
  
        scaleX = newImgWidth / imgPos.width;
        scaleY = newImgHeight / imgPos.height;
  
        // Get center position for original image
        posX = canvasWidth * 0.5 - newImgWidth * 0.5;
        posY = canvasHeight * 0.5 - newImgHeight * 0.5;
  
        // Make sure image does not move away from edges
        if (newImgWidth > canvasWidth) {
          posX = imgPos.left * scaleX - (x * scaleX - x);
  
          if (posX > 0) {
            posX = 0;
          }
  
          if (posX < canvasWidth - newImgWidth) {
            posX = canvasWidth - newImgWidth;
          }
        }
  
        if (newImgHeight > canvasHeight) {
          posY = imgPos.top * scaleY - (y * scaleY - y);
  
          if (posY > 0) {
            posY = 0;
          }
  
          if (posY < canvasHeight - newImgHeight) {
            posY = canvasHeight - newImgHeight;
          }
        }
  
        self.updateCursor(newImgWidth, newImgHeight);
  
        $.fancybox.animate(
          $content, {
            top: posY,
            left: posX,
            scaleX: scaleX,
            scaleY: scaleY
          },
          duration || 366,
          function () {
            self.isAnimating = false;
          }
        );
  
        // Stop slideshow
        if (self.SlideShow && self.SlideShow.isActive) {
          self.SlideShow.stop();
        }
      },
  
      // Scale image to fit inside parent element
      // ========================================
  
      scaleToFit: function (duration) {
        var self = this,
          current = self.current,
          $content = current.$content,
          end;
  
        if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
          return;
        }
  
        self.isAnimating = true;
  
        $.fancybox.stop($content);
  
        end = self.getFitPos(current);
  
        self.updateCursor(end.width, end.height);
  
        $.fancybox.animate(
          $content, {
            top: end.top,
            left: end.left,
            scaleX: end.width / $content.width(),
            scaleY: end.height / $content.height()
          },
          duration || 366,
          function () {
            self.isAnimating = false;
          }
        );
      },
  
      // Calculate image size to fit inside viewport
      // ===========================================
  
      getFitPos: function (slide) {
        var self = this,
          $content = slide.$content,
          $slide = slide.$slide,
          width = slide.width || slide.opts.width,
          height = slide.height || slide.opts.height,
          maxWidth,
          maxHeight,
          minRatio,
          aspectRatio,
          rez = {};
  
        if (!slide.isLoaded || !$content || !$content.length) {
          return false;
        }
  
        maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
        maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
  
        maxWidth -=
          parseFloat($slide.css("paddingLeft")) +
          parseFloat($slide.css("paddingRight")) +
          parseFloat($content.css("marginLeft")) +
          parseFloat($content.css("marginRight"));
  
        maxHeight -=
          parseFloat($slide.css("paddingTop")) +
          parseFloat($slide.css("paddingBottom")) +
          parseFloat($content.css("marginTop")) +
          parseFloat($content.css("marginBottom"));
  
        if (!width || !height) {
          width = maxWidth;
          height = maxHeight;
        }
  
        minRatio = Math.min(1, maxWidth / width, maxHeight / height);
  
        width = minRatio * width;
        height = minRatio * height;
  
        // Adjust width/height to precisely fit into container
        if (width > maxWidth - 0.5) {
          width = maxWidth;
        }
  
        if (height > maxHeight - 0.5) {
          height = maxHeight;
        }
  
        if (slide.type === "image") {
          rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
          rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
        } else if (slide.contentType === "video") {
          // Force aspect ratio for the video
          // "I say the whole world must learn of our peaceful ways… by force!"
          aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;
  
          if (height > width / aspectRatio) {
            height = width / aspectRatio;
          } else if (width > height * aspectRatio) {
            width = height * aspectRatio;
          }
        }
  
        rez.width = width;
        rez.height = height;
  
        return rez;
      },
  
      // Update content size and position for all slides
      // ==============================================
  
      update: function (e) {
        var self = this;
  
        $.each(self.slides, function (key, slide) {
          self.updateSlide(slide, e);
        });
      },
  
      // Update slide content position and size
      // ======================================
  
      updateSlide: function (slide, e) {
        var self = this,
          $content = slide && slide.$content,
          width = slide.width || slide.opts.width,
          height = slide.height || slide.opts.height,
          $slide = slide.$slide;
  
        // First, prevent caption overlap, if needed
        self.adjustCaption(slide);
  
        // Then resize content to fit inside the slide
        if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
          $.fancybox.stop($content);
  
          $.fancybox.setTranslate($content, self.getFitPos(slide));
  
          if (slide.pos === self.currPos) {
            self.isAnimating = false;
  
            self.updateCursor();
          }
        }
  
        // Then some adjustments
        self.adjustLayout(slide);
  
        if ($slide.length) {
          $slide.trigger("refresh");
  
          if (slide.pos === self.currPos) {
            self.$refs.toolbar
              .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
              .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
          }
        }
  
        self.trigger("onUpdate", slide, e);
      },
  
      // Horizontally center slide
      // =========================
  
      centerSlide: function (duration) {
        var self = this,
          current = self.current,
          $slide = current.$slide;
  
        if (self.isClosing || !current) {
          return;
        }
  
        $slide.siblings().css({
          transform: "",
          opacity: ""
        });
  
        $slide
          .parent()
          .children()
          .removeClass("fancybox-slide--previous fancybox-slide--next");
  
        $.fancybox.animate(
          $slide, {
            top: 0,
            left: 0,
            opacity: 1
          },
          duration === undefined ? 0 : duration,
          function () {
            // Clean up
            $slide.css({
              transform: "",
              opacity: ""
            });
  
            if (!current.isComplete) {
              self.complete();
            }
          },
          false
        );
      },
  
      // Check if current slide is moved (swiped)
      // ========================================
  
      isMoved: function (slide) {
        var current = slide || this.current,
          slidePos,
          stagePos;
  
        if (!current) {
          return false;
        }
  
        stagePos = $.fancybox.getTranslate(this.$refs.stage);
        slidePos = $.fancybox.getTranslate(current.$slide);
  
        return (
          !current.$slide.hasClass("fancybox-animated") &&
          (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
        );
      },
  
      // Update cursor style depending if content can be zoomed
      // ======================================================
  
      updateCursor: function (nextWidth, nextHeight) {
        var self = this,
          current = self.current,
          $container = self.$refs.container,
          canPan,
          isZoomable;
  
        if (!current || self.isClosing || !self.Guestures) {
          return;
        }
  
        $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
  
        canPan = self.canPan(nextWidth, nextHeight);
  
        isZoomable = canPan ? true : self.isZoomable();
  
        $container.toggleClass("fancybox-is-zoomable", isZoomable);
  
        $("[data-fancybox-zoom]").prop("disabled", !isZoomable);
  
        if (canPan) {
          $container.addClass("fancybox-can-pan");
        } else if (
          isZoomable &&
          (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
        ) {
          $container.addClass("fancybox-can-zoomIn");
        } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
          $container.addClass("fancybox-can-swipe");
        }
      },
  
      // Check if current slide is zoomable
      // ==================================
  
      isZoomable: function () {
        var self = this,
          current = self.current,
          fitPos;
  
        // Assume that slide is zoomable if:
        //   - image is still loading
        //   - actual size of the image is smaller than available area
        if (current && !self.isClosing && current.type === "image" && !current.hasError) {
          if (!current.isLoaded) {
            return true;
          }
  
          fitPos = self.getFitPos(current);
  
          if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
            return true;
          }
        }
  
        return false;
      },
  
      // Check if current image dimensions are smaller than actual
      // =========================================================
  
      isScaledDown: function (nextWidth, nextHeight) {
        var self = this,
          rez = false,
          current = self.current,
          $content = current.$content;
  
        if (nextWidth !== undefined && nextHeight !== undefined) {
          rez = nextWidth < current.width && nextHeight < current.height;
        } else if ($content) {
          rez = $.fancybox.getTranslate($content);
          rez = rez.width < current.width && rez.height < current.height;
        }
  
        return rez;
      },
  
      // Check if image dimensions exceed parent element
      // ===============================================
  
      canPan: function (nextWidth, nextHeight) {
        var self = this,
          current = self.current,
          pos = null,
          rez = false;
  
        if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
          rez = self.getFitPos(current);
  
          if (nextWidth !== undefined && nextHeight !== undefined) {
            pos = {
              width: nextWidth,
              height: nextHeight
            };
          } else if (current.isComplete) {
            pos = $.fancybox.getTranslate(current.$content);
          }
  
          if (pos && rez) {
            rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
          }
        }
  
        return rez;
      },
  
      // Load content into the slide
      // ===========================
  
      loadSlide: function (slide) {
        var self = this,
          type,
          $slide,
          ajaxLoad;
  
        if (slide.isLoading || slide.isLoaded) {
          return;
        }
  
        slide.isLoading = true;
  
        if (self.trigger("beforeLoad", slide) === false) {
          slide.isLoading = false;
  
          return false;
        }
  
        type = slide.type;
        $slide = slide.$slide;
  
        $slide
          .off("refresh")
          .trigger("onReset")
          .addClass(slide.opts.slideClass);
  
        // Create content depending on the type
        switch (type) {
          case "image":
            self.setImage(slide);
  
            break;
  
          case "iframe":
            self.setIframe(slide);
  
            break;
  
          case "html":
            self.setContent(slide, slide.src || slide.content);
  
            break;
  
          case "video":
            self.setContent(
              slide,
              slide.opts.video.tpl
              .replace(/\{\{src\}\}/gi, slide.src)
              .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
              .replace("{{poster}}", slide.thumb || "")
            );
  
            break;
  
          case "inline":
            if ($(slide.src).length) {
              self.setContent(slide, $(slide.src));
            } else {
              self.setError(slide);
            }
  
            break;
  
          case "ajax":
            self.showLoading(slide);
  
            ajaxLoad = $.ajax(
              $.extend({}, slide.opts.ajax.settings, {
                url: slide.src,
                success: function (data, textStatus) {
                  if (textStatus === "success") {
                    self.setContent(slide, data);
                  }
                },
                error: function (jqXHR, textStatus) {
                  if (jqXHR && textStatus !== "abort") {
                    self.setError(slide);
                  }
                }
              })
            );
  
            $slide.one("onReset", function () {
              ajaxLoad.abort();
            });
  
            break;
  
          default:
            self.setError(slide);
  
            break;
        }
  
        return true;
      },
  
      // Use thumbnail image, if possible
      // ================================
  
      setImage: function (slide) {
        var self = this,
          ghost;
  
        // Check if need to show loading icon
        setTimeout(function () {
          var $img = slide.$image;
  
          if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
            self.showLoading(slide);
          }
        }, 50);
  
        //Check if image has srcset
        self.checkSrcset(slide);
  
        // This will be wrapper containing both ghost and actual image
        slide.$content = $('<div class="fancybox-content"></div>')
          .addClass("fancybox-is-hidden")
          .appendTo(slide.$slide.addClass("fancybox-slide--image"));
  
        // If we have a thumbnail, we can display it while actual image is loading
        // Users will not stare at black screen and actual image will appear gradually
        if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
          slide.width = slide.opts.width;
          slide.height = slide.opts.height;
  
          ghost = document.createElement("img");
  
          ghost.onerror = function () {
            $(this).remove();
  
            slide.$ghost = null;
          };
  
          ghost.onload = function () {
            self.afterLoad(slide);
          };
  
          slide.$ghost = $(ghost)
            .addClass("fancybox-image")
            .appendTo(slide.$content)
            .attr("src", slide.thumb);
        }
  
        // Start loading actual image
        self.setBigImage(slide);
      },
  
      // Check if image has srcset and get the source
      // ============================================
      checkSrcset: function (slide) {
        var srcset = slide.opts.srcset || slide.opts.image.srcset,
          found,
          temp,
          pxRatio,
          windowWidth;
  
        // If we have "srcset", then we need to find first matching "src" value.
        // This is necessary, because when you set an src attribute, the browser will preload the image
        // before any javascript or even CSS is applied.
        if (srcset) {
          pxRatio = window.devicePixelRatio || 1;
          windowWidth = window.innerWidth * pxRatio;
  
          temp = srcset.split(",").map(function (el) {
            var ret = {};
  
            el.trim()
              .split(/\s+/)
              .forEach(function (el, i) {
                var value = parseInt(el.substring(0, el.length - 1), 10);
  
                if (i === 0) {
                  return (ret.url = el);
                }
  
                if (value) {
                  ret.value = value;
                  ret.postfix = el[el.length - 1];
                }
              });
  
            return ret;
          });
  
          // Sort by value
          temp.sort(function (a, b) {
            return a.value - b.value;
          });
  
          // Ok, now we have an array of all srcset values
          for (var j = 0; j < temp.length; j++) {
            var el = temp[j];
  
            if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
              found = el;
              break;
            }
          }
  
          // If not found, take the last one
          if (!found && temp.length) {
            found = temp[temp.length - 1];
          }
  
          if (found) {
            slide.src = found.url;
  
            // If we have default width/height values, we can calculate height for matching source
            if (slide.width && slide.height && found.postfix == "w") {
              slide.height = (slide.width / slide.height) * found.value;
              slide.width = found.value;
            }
  
            slide.opts.srcset = srcset;
          }
        }
      },
  
      // Create full-size image
      // ======================
  
      setBigImage: function (slide) {
        var self = this,
          img = document.createElement("img"),
          $img = $(img);
  
        slide.$image = $img
          .one("error", function () {
            self.setError(slide);
          })
          .one("load", function () {
            var sizes;
  
            if (!slide.$ghost) {
              self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
  
              self.afterLoad(slide);
            }
  
            if (self.isClosing) {
              return;
            }
  
            if (slide.opts.srcset) {
              sizes = slide.opts.sizes;
  
              if (!sizes || sizes === "auto") {
                sizes =
                  (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                  "vw";
              }
  
              $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
            }
  
            // Hide temporary image after some delay
            if (slide.$ghost) {
              setTimeout(function () {
                if (slide.$ghost && !self.isClosing) {
                  slide.$ghost.hide();
                }
              }, Math.min(300, Math.max(1000, slide.height / 1600)));
            }
  
            self.hideLoading(slide);
          })
          .addClass("fancybox-image")
          .attr("src", slide.src)
          .appendTo(slide.$content);
  
        if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
          $img.trigger("load");
        } else if (img.error) {
          $img.trigger("error");
        }
      },
  
      // Computes the slide size from image size and maxWidth/maxHeight
      // ==============================================================
  
      resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
        var maxWidth = parseInt(slide.opts.width, 10),
          maxHeight = parseInt(slide.opts.height, 10);
  
        // Sets the default values from the image
        slide.width = imgWidth;
        slide.height = imgHeight;
  
        if (maxWidth > 0) {
          slide.width = maxWidth;
          slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
        }
  
        if (maxHeight > 0) {
          slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
          slide.height = maxHeight;
        }
      },
  
      // Create iframe wrapper, iframe and bindings
      // ==========================================
  
      setIframe: function (slide) {
        var self = this,
          opts = slide.opts.iframe,
          $slide = slide.$slide,
          $iframe;
  
        slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
          .css(opts.css)
          .appendTo($slide);
  
        $slide.addClass("fancybox-slide--" + slide.contentType);
  
        slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
          .attr(opts.attr)
          .appendTo(slide.$content);
  
        if (opts.preload) {
          self.showLoading(slide);
  
          // Unfortunately, it is not always possible to determine if iframe is successfully loaded
          // (due to browser security policy)
  
          $iframe.on("load.fb error.fb", function (e) {
            this.isReady = 1;
  
            slide.$slide.trigger("refresh");
  
            self.afterLoad(slide);
          });
  
          // Recalculate iframe content size
          // ===============================
  
          $slide.on("refresh.fb", function () {
            var $content = slide.$content,
              frameWidth = opts.css.width,
              frameHeight = opts.css.height,
              $contents,
              $body;
  
            if ($iframe[0].isReady !== 1) {
              return;
            }
  
            try {
              $contents = $iframe.contents();
              $body = $contents.find("body");
            } catch (ignore) {}
  
            // Calculate content dimensions, if it is accessible
            if ($body && $body.length && $body.children().length) {
              // Avoid scrolling to top (if multiple instances)
              $slide.css("overflow", "visible");
  
              $content.css({
                width: "100%",
                "max-width": "100%",
                height: "9999px"
              });
  
              if (frameWidth === undefined) {
                frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
              }
  
              $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");
  
              if (frameHeight === undefined) {
                frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
              }
  
              $content.css("height", frameHeight ? frameHeight : "");
  
              $slide.css("overflow", "auto");
            }
  
            $content.removeClass("fancybox-is-hidden");
          });
        } else {
          self.afterLoad(slide);
        }
  
        $iframe.attr("src", slide.src);
  
        // Remove iframe if closing or changing gallery item
        $slide.one("onReset", function () {
          // This helps IE not to throw errors when closing
          try {
            $(this)
              .find("iframe")
              .hide()
              .unbind()
              .attr("src", "//about:blank");
          } catch (ignore) {}
  
          $(this)
            .off("refresh.fb")
            .empty();
  
          slide.isLoaded = false;
          slide.isRevealed = false;
        });
      },
  
      // Wrap and append content to the slide
      // ======================================
  
      setContent: function (slide, content) {
        var self = this;
  
        if (self.isClosing) {
          return;
        }
  
        self.hideLoading(slide);
  
        if (slide.$content) {
          $.fancybox.stop(slide.$content);
        }
  
        slide.$slide.empty();
  
        // If content is a jQuery object, then it will be moved to the slide.
        // The placeholder is created so we will know where to put it back.
        if (isQuery(content) && content.parent().length) {
          // Make sure content is not already moved to fancyBox
          if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
            content.parents(".fancybox-slide").trigger("onReset");
          }
  
          // Create temporary element marking original place of the content
          slide.$placeholder = $("<div>")
            .hide()
            .insertAfter(content);
  
          // Make sure content is visible
          content.css("display", "inline-block");
        } else if (!slide.hasError) {
          // If content is just a plain text, try to convert it to html
          if ($.type(content) === "string") {
            content = $("<div>")
              .append($.trim(content))
              .contents();
          }
  
          // If "filter" option is provided, then filter content
          if (slide.opts.filter) {
            content = $("<div>")
              .html(content)
              .find(slide.opts.filter);
          }
        }
  
        slide.$slide.one("onReset", function () {
          // Pause all html5 video/audio
          $(this)
            .find("video,audio")
            .trigger("pause");
  
          // Put content back
          if (slide.$placeholder) {
            slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
  
            slide.$placeholder = null;
          }
  
          // Remove custom close button
          if (slide.$smallBtn) {
            slide.$smallBtn.remove();
  
            slide.$smallBtn = null;
          }
  
          // Remove content and mark slide as not loaded
          if (!slide.hasError) {
            $(this).empty();
  
            slide.isLoaded = false;
            slide.isRevealed = false;
          }
        });
  
        $(content).appendTo(slide.$slide);
  
        if ($(content).is("video,audio")) {
          $(content).addClass("fancybox-video");
  
          $(content).wrap("<div></div>");
  
          slide.contentType = "video";
  
          slide.opts.width = slide.opts.width || $(content).attr("width");
          slide.opts.height = slide.opts.height || $(content).attr("height");
        }
  
        slide.$content = slide.$slide
          .children()
          .filter("div,form,main,video,audio,article,.fancybox-content")
          .first();
  
        slide.$content.siblings().hide();
  
        // Re-check if there is a valid content
        // (in some cases, ajax response can contain various elements or plain text)
        if (!slide.$content.length) {
          slide.$content = slide.$slide
            .wrapInner("<div></div>")
            .children()
            .first();
        }
  
        slide.$content.addClass("fancybox-content");
  
        slide.$slide.addClass("fancybox-slide--" + slide.contentType);
  
        self.afterLoad(slide);
      },
  
      // Display error message
      // =====================
  
      setError: function (slide) {
        slide.hasError = true;
  
        slide.$slide
          .trigger("onReset")
          .removeClass("fancybox-slide--" + slide.contentType)
          .addClass("fancybox-slide--error");
  
        slide.contentType = "html";
  
        this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
  
        if (slide.pos === this.currPos) {
          this.isAnimating = false;
        }
      },
  
      // Show loading icon inside the slide
      // ==================================
  
      showLoading: function (slide) {
        var self = this;
  
        slide = slide || self.current;
  
        if (slide && !slide.$spinner) {
          slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
            .appendTo(slide.$slide)
            .hide()
            .fadeIn("fast");
        }
      },
  
      // Remove loading icon from the slide
      // ==================================
  
      hideLoading: function (slide) {
        var self = this;
  
        slide = slide || self.current;
  
        if (slide && slide.$spinner) {
          slide.$spinner.stop().remove();
  
          delete slide.$spinner;
        }
      },
  
      // Adjustments after slide content has been loaded
      // ===============================================
  
      afterLoad: function (slide) {
        var self = this;
  
        if (self.isClosing) {
          return;
        }
  
        slide.isLoading = false;
        slide.isLoaded = true;
  
        self.trigger("afterLoad", slide);
  
        self.hideLoading(slide);
  
        // Add small close button
        if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
          slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
        }
  
        // Disable right click
        if (slide.opts.protect && slide.$content && !slide.hasError) {
          slide.$content.on("contextmenu.fb", function (e) {
            if (e.button == 2) {
              e.preventDefault();
            }
  
            return true;
          });
  
          // Add fake element on top of the image
          // This makes a bit harder for user to select image
          if (slide.type === "image") {
            $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
          }
        }
  
        self.adjustCaption(slide);
  
        self.adjustLayout(slide);
  
        if (slide.pos === self.currPos) {
          self.updateCursor();
        }
  
        self.revealContent(slide);
      },
  
      // Prevent caption overlap,
      // fix css inconsistency across browsers
      // =====================================
  
      adjustCaption: function (slide) {
        var self = this,
          current = slide || self.current,
          caption = current.opts.caption,
          preventOverlap = current.opts.preventCaptionOverlap,
          $caption = self.$refs.caption,
          $clone,
          captionH = false;
  
        $caption.toggleClass("fancybox-caption--separate", preventOverlap);
  
        if (preventOverlap && caption && caption.length) {
          if (current.pos !== self.currPos) {
            $clone = $caption.clone().appendTo($caption.parent());
  
            $clone
              .children()
              .eq(0)
              .empty()
              .html(caption);
  
            captionH = $clone.outerHeight(true);
  
            $clone.empty().remove();
          } else if (self.$caption) {
            captionH = self.$caption.outerHeight(true);
          }
  
          current.$slide.css("padding-bottom", captionH || "");
        }
      },
  
      // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
      // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
      // ====================================================================================
  
      adjustLayout: function (slide) {
        var self = this,
          current = slide || self.current,
          scrollHeight,
          marginBottom,
          inlinePadding,
          actualPadding;
  
        if (current.isLoaded && current.opts.disableLayoutFix !== true) {
          current.$content.css("margin-bottom", "");
  
          // If we would always set margin-bottom for the content,
          // then it would potentially break vertical align
          if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
            inlinePadding = current.$slide[0].style["padding-bottom"];
            actualPadding = current.$slide.css("padding-bottom");
  
            if (parseFloat(actualPadding) > 0) {
              scrollHeight = current.$slide[0].scrollHeight;
  
              current.$slide.css("padding-bottom", 0);
  
              if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
                marginBottom = actualPadding;
              }
  
              current.$slide.css("padding-bottom", inlinePadding);
            }
          }
  
          current.$content.css("margin-bottom", marginBottom);
        }
      },
  
      // Make content visible
      // This method is called right after content has been loaded or
      // user navigates gallery and transition should start
      // ============================================================
  
      revealContent: function (slide) {
        var self = this,
          $slide = slide.$slide,
          end = false,
          start = false,
          isMoved = self.isMoved(slide),
          isRevealed = slide.isRevealed,
          effect,
          effectClassName,
          duration,
          opacity;
  
        slide.isRevealed = true;
  
        effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
        duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
  
        duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);
  
        if (isMoved || slide.pos !== self.currPos || !duration) {
          effect = false;
        }
  
        // Check if can zoom
        if (effect === "zoom") {
          if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
            end = self.getFitPos(slide);
          } else {
            effect = "fade";
          }
        }
  
        // Zoom animation
        // ==============
        if (effect === "zoom") {
          self.isAnimating = true;
  
          end.scaleX = end.width / start.width;
          end.scaleY = end.height / start.height;
  
          // Check if we need to animate opacity
          opacity = slide.opts.zoomOpacity;
  
          if (opacity == "auto") {
            opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
          }
  
          if (opacity) {
            start.opacity = 0.1;
            end.opacity = 1;
          }
  
          // Draw image at start position
          $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
  
          forceRedraw(slide.$content);
  
          // Start animation
          $.fancybox.animate(slide.$content, end, duration, function () {
            self.isAnimating = false;
  
            self.complete();
          });
  
          return;
        }
  
        self.updateSlide(slide);
  
        // Simply show content if no effect
        // ================================
        if (!effect) {
          slide.$content.removeClass("fancybox-is-hidden");
  
          if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
            slide.$content.hide().fadeIn("fast");
          }
  
          if (slide.pos === self.currPos) {
            self.complete();
          }
  
          return;
        }
  
        // Prepare for CSS transiton
        // =========================
        $.fancybox.stop($slide);
  
        //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
        effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;
  
        $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);
  
        slide.$content.removeClass("fancybox-is-hidden");
  
        // Force reflow
        forceRedraw($slide);
  
        if (slide.type !== "image") {
          slide.$content.hide().show(0);
        }
  
        $.fancybox.animate(
          $slide,
          "fancybox-slide--current",
          duration,
          function () {
            $slide.removeClass(effectClassName).css({
              transform: "",
              opacity: ""
            });
  
            if (slide.pos === self.currPos) {
              self.complete();
            }
          },
          true
        );
      },
  
      // Check if we can and have to zoom from thumbnail
      //================================================
  
      getThumbPos: function (slide) {
        var rez = false,
          $thumb = slide.$thumb,
          thumbPos,
          btw,
          brw,
          bbw,
          blw;
  
        if (!$thumb || !inViewport($thumb[0])) {
          return false;
        }
  
        thumbPos = $.fancybox.getTranslate($thumb);
  
        btw = parseFloat($thumb.css("border-top-width") || 0);
        brw = parseFloat($thumb.css("border-right-width") || 0);
        bbw = parseFloat($thumb.css("border-bottom-width") || 0);
        blw = parseFloat($thumb.css("border-left-width") || 0);
  
        rez = {
          top: thumbPos.top + btw,
          left: thumbPos.left + blw,
          width: thumbPos.width - brw - blw,
          height: thumbPos.height - btw - bbw,
          scaleX: 1,
          scaleY: 1
        };
  
        return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
      },
  
      // Final adjustments after current gallery item is moved to position
      // and it`s content is loaded
      // ==================================================================
  
      complete: function () {
        var self = this,
          current = self.current,
          slides = {},
          $el;
  
        if (self.isMoved() || !current.isLoaded) {
          return;
        }
  
        if (!current.isComplete) {
          current.isComplete = true;
  
          current.$slide.siblings().trigger("onReset");
  
          self.preload("inline");
  
          // Trigger any CSS transiton inside the slide
          forceRedraw(current.$slide);
  
          current.$slide.addClass("fancybox-slide--complete");
  
          // Remove unnecessary slides
          $.each(self.slides, function (key, slide) {
            if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
              slides[slide.pos] = slide;
            } else if (slide) {
              $.fancybox.stop(slide.$slide);
  
              slide.$slide.off().remove();
            }
          });
  
          self.slides = slides;
        }
  
        self.isAnimating = false;
  
        self.updateCursor();
  
        self.trigger("afterShow");
  
        // Autoplay first html5 video/audio
        if (!!current.opts.video.autoStart) {
          current.$slide
            .find("video,audio")
            .filter(":visible:first")
            .trigger("play")
            .one("ended", function () {
              if (Document.exitFullscreen) {
                Document.exitFullscreen();
              } else if (this.webkitExitFullscreen) {
                this.webkitExitFullscreen();
              }
  
              self.next();
            });
        }
  
        // Try to focus on the first focusable element
        if (current.opts.autoFocus && current.contentType === "html") {
          // Look for the first input with autofocus attribute
          $el = current.$content.find("input[autofocus]:enabled:visible:first");
  
          if ($el.length) {
            $el.trigger("focus");
          } else {
            self.focus(null, true);
          }
        }
  
        // Avoid jumping
        current.$slide.scrollTop(0).scrollLeft(0);
      },
  
      // Preload next and previous slides
      // ================================
  
      preload: function (type) {
        var self = this,
          prev,
          next;
  
        if (self.group.length < 2) {
          return;
        }
  
        next = self.slides[self.currPos + 1];
        prev = self.slides[self.currPos - 1];
  
        if (prev && prev.type === type) {
          self.loadSlide(prev);
        }
  
        if (next && next.type === type) {
          self.loadSlide(next);
        }
      },
  
      // Try to find and focus on the first focusable element
      // ====================================================
  
      focus: function (e, firstRun) {
        var self = this,
          focusableStr = [
            "a[href]",
            "area[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "button:not([disabled]):not([aria-hidden])",
            "iframe",
            "object",
            "embed",
            "video",
            "audio",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])'
          ].join(","),
          focusableItems,
          focusedItemIndex;
  
        if (self.isClosing) {
          return;
        }
  
        if (e || !self.current || !self.current.isComplete) {
          // Focus on any element inside fancybox
          focusableItems = self.$refs.container.find("*:visible");
        } else {
          // Focus inside current slide
          focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
        }
  
        focusableItems = focusableItems.filter(focusableStr).filter(function () {
          return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
        });
  
        if (focusableItems.length) {
          focusedItemIndex = focusableItems.index(document.activeElement);
  
          if (e && e.shiftKey) {
            // Back tab
            if (focusedItemIndex < 0 || focusedItemIndex == 0) {
              e.preventDefault();
  
              focusableItems.eq(focusableItems.length - 1).trigger("focus");
            }
          } else {
            // Outside or Forward tab
            if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
              if (e) {
                e.preventDefault();
              }
  
              focusableItems.eq(0).trigger("focus");
            }
          }
        } else {
          self.$refs.container.trigger("focus");
        }
      },
  
      // Activates current instance - brings container to the front and enables keyboard,
      // notifies other instances about deactivating
      // =================================================================================
  
      activate: function () {
        var self = this;
  
        // Deactivate all instances
        $(".fancybox-container").each(function () {
          var instance = $(this).data("FancyBox");
  
          // Skip self and closing instances
          if (instance && instance.id !== self.id && !instance.isClosing) {
            instance.trigger("onDeactivate");
  
            instance.removeEvents();
  
            instance.isVisible = false;
          }
        });
  
        self.isVisible = true;
  
        if (self.current || self.isIdle) {
          self.update();
  
          self.updateControls();
        }
  
        self.trigger("onActivate");
  
        self.addEvents();
      },
  
      // Start closing procedure
      // This will start "zoom-out" animation if needed and clean everything up afterwards
      // =================================================================================
  
      close: function (e, d) {
        var self = this,
          current = self.current,
          effect,
          duration,
          $content,
          domRect,
          opacity,
          start,
          end;
  
        var done = function () {
          self.cleanUp(e);
        };
  
        if (self.isClosing) {
          return false;
        }
  
        self.isClosing = true;
  
        // If beforeClose callback prevents closing, make sure content is centered
        if (self.trigger("beforeClose", e) === false) {
          self.isClosing = false;
  
          requestAFrame(function () {
            self.update();
          });
  
          return false;
        }
  
        // Remove all events
        // If there are multiple instances, they will be set again by "activate" method
        self.removeEvents();
  
        $content = current.$content;
        effect = current.opts.animationEffect;
        duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
  
        current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
  
        if (e !== true) {
          $.fancybox.stop(current.$slide);
        } else {
          effect = false;
        }
  
        // Remove other slides
        current.$slide
          .siblings()
          .trigger("onReset")
          .remove();
  
        // Trigger animations
        if (duration) {
          self.$refs.container
            .removeClass("fancybox-is-open")
            .addClass("fancybox-is-closing")
            .css("transition-duration", duration + "ms");
        }
  
        // Clean up
        self.hideLoading(current);
  
        self.hideControls(true);
  
        self.updateCursor();
  
        // Check if possible to zoom-out
        if (
          effect === "zoom" &&
          !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
        ) {
          effect = "fade";
        }
  
        if (effect === "zoom") {
          $.fancybox.stop($content);
  
          domRect = $.fancybox.getTranslate($content);
  
          start = {
            top: domRect.top,
            left: domRect.left,
            scaleX: domRect.width / end.width,
            scaleY: domRect.height / end.height,
            width: end.width,
            height: end.height
          };
  
          // Check if we need to animate opacity
          opacity = current.opts.zoomOpacity;
  
          if (opacity == "auto") {
            opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
          }
  
          if (opacity) {
            end.opacity = 0;
          }
  
          $.fancybox.setTranslate($content, start);
  
          forceRedraw($content);
  
          $.fancybox.animate($content, end, duration, done);
  
          return true;
        }
  
        if (effect && duration) {
          $.fancybox.animate(
            current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
            "fancybox-animated fancybox-fx-" + effect,
            duration,
            done
          );
        } else {
          // If skip animation
          if (e === true) {
            setTimeout(done, duration);
          } else {
            done();
          }
        }
  
        return true;
      },
  
      // Final adjustments after removing the instance
      // =============================================
  
      cleanUp: function (e) {
        var self = this,
          instance,
          $focus = self.current.opts.$orig,
          x,
          y;
  
        self.current.$slide.trigger("onReset");
  
        self.$refs.container.empty().remove();
  
        self.trigger("afterClose", e);
  
        // Place back focus
        if (!!self.current.opts.backFocus) {
          if (!$focus || !$focus.length || !$focus.is(":visible")) {
            $focus = self.$trigger;
          }
  
          if ($focus && $focus.length) {
            x = window.scrollX;
            y = window.scrollY;
  
            $focus.trigger("focus");
  
            $("html, body")
              .scrollTop(y)
              .scrollLeft(x);
          }
        }
  
        self.current = null;
  
        // Check if there are other instances
        instance = $.fancybox.getInstance();
  
        if (instance) {
          instance.activate();
        } else {
          $("body").removeClass("fancybox-active compensate-for-scrollbar");
  
          $("#fancybox-style-noscroll").remove();
        }
      },
  
      // Call callback and trigger an event
      // ==================================
  
      trigger: function (name, slide) {
        var args = Array.prototype.slice.call(arguments, 1),
          self = this,
          obj = slide && slide.opts ? slide : self.current,
          rez;
  
        if (obj) {
          args.unshift(obj);
        } else {
          obj = self;
        }
  
        args.unshift(self);
  
        if ($.isFunction(obj.opts[name])) {
          rez = obj.opts[name].apply(obj, args);
        }
  
        if (rez === false) {
          return rez;
        }
  
        if (name === "afterClose" || !self.$refs) {
          $D.trigger(name + ".fb", args);
        } else {
          self.$refs.container.trigger(name + ".fb", args);
        }
      },
  
      // Update infobar values, navigation button states and reveal caption
      // ==================================================================
  
      updateControls: function () {
        var self = this,
          current = self.current,
          index = current.index,
          $container = self.$refs.container,
          $caption = self.$refs.caption,
          caption = current.opts.caption;
  
        // Recalculate content dimensions
        current.$slide.trigger("refresh");
  
        // Set caption
        if (caption && caption.length) {
          self.$caption = $caption;
  
          $caption
            .children()
            .eq(0)
            .html(caption);
        } else {
          self.$caption = null;
        }
  
        if (!self.hasHiddenControls && !self.isIdle) {
          self.showControls();
        }
  
        // Update info and navigation elements
        $container.find("[data-fancybox-count]").html(self.group.length);
        $container.find("[data-fancybox-index]").html(index + 1);
  
        $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
        $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);
  
        if (current.type === "image") {
          // Re-enable buttons; update download button source
          $container
            .find("[data-fancybox-zoom]")
            .show()
            .end()
            .find("[data-fancybox-download]")
            .attr("href", current.opts.image.src || current.src)
            .show();
        } else if (current.opts.toolbar) {
          $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
        }
  
        // Make sure focus is not on disabled button/element
        if ($(document.activeElement).is(":hidden,[disabled]")) {
          self.$refs.container.trigger("focus");
        }
      },
  
      // Hide toolbar and caption
      // ========================
  
      hideControls: function (andCaption) {
        var self = this,
          arr = ["infobar", "toolbar", "nav"];
  
        if (andCaption || !self.current.opts.preventCaptionOverlap) {
          arr.push("caption");
        }
  
        this.$refs.container.removeClass(
          arr
          .map(function (i) {
            return "fancybox-show-" + i;
          })
          .join(" ")
        );
  
        this.hasHiddenControls = true;
      },
  
      showControls: function () {
        var self = this,
          opts = self.current ? self.current.opts : self.opts,
          $container = self.$refs.container;
  
        self.hasHiddenControls = false;
        self.idleSecondsCounter = 0;
  
        $container
          .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
          .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
          .toggleClass("fancybox-show-caption", !!self.$caption)
          .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
          .toggleClass("fancybox-is-modal", !!opts.modal);
      },
  
      // Toggle toolbar and caption
      // ==========================
  
      toggleControls: function () {
        if (this.hasHiddenControls) {
          this.showControls();
        } else {
          this.hideControls();
        }
      }
    });
  
    $.fancybox = {
      version: "3.5.7",
      defaults: defaults,
  
      // Get current instance and execute a command.
      //
      // Examples of usage:
      //
      //   $instance = $.fancybox.getInstance();
      //   $.fancybox.getInstance().jumpTo( 1 );
      //   $.fancybox.getInstance( 'jumpTo', 1 );
      //   $.fancybox.getInstance( function() {
      //       console.info( this.currIndex );
      //   });
      // ======================================================
  
      getInstance: function (command) {
        var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
          args = Array.prototype.slice.call(arguments, 1);
  
        if (instance instanceof FancyBox) {
          if ($.type(command) === "string") {
            instance[command].apply(instance, args);
          } else if ($.type(command) === "function") {
            command.apply(instance, args);
          }
  
          return instance;
        }
  
        return false;
      },
  
      // Create new instance
      // ===================
  
      open: function (items, opts, index) {
        return new FancyBox(items, opts, index);
      },
  
      // Close current or all instances
      // ==============================
  
      close: function (all) {
        var instance = this.getInstance();
  
        if (instance) {
          instance.close();
  
          // Try to find and close next instance
          if (all === true) {
            this.close(all);
          }
        }
      },
  
      // Close all instances and unbind all events
      // =========================================
  
      destroy: function () {
        this.close(true);
  
        $D.add("body").off("click.fb-start", "**");
      },
  
      // Try to detect mobile devices
      // ============================
  
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  
      // Detect if 'translate3d' support is available
      // ============================================
  
      use3d: (function () {
        var div = document.createElement("div");
  
        return (
          window.getComputedStyle &&
          window.getComputedStyle(div) &&
          window.getComputedStyle(div).getPropertyValue("transform") &&
          !(document.documentMode && document.documentMode < 11)
        );
      })(),
  
      // Helper function to get current visual state of an element
      // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
      // =====================================================================
  
      getTranslate: function ($el) {
        var domRect;
  
        if (!$el || !$el.length) {
          return false;
        }
  
        domRect = $el[0].getBoundingClientRect();
  
        return {
          top: domRect.top || 0,
          left: domRect.left || 0,
          width: domRect.width,
          height: domRect.height,
          opacity: parseFloat($el.css("opacity"))
        };
      },
  
      // Shortcut for setting "translate3d" properties for element
      // Can set be used to set opacity, too
      // ========================================================
  
      setTranslate: function ($el, props) {
        var str = "",
          css = {};
  
        if (!$el || !props) {
          return;
        }
  
        if (props.left !== undefined || props.top !== undefined) {
          str =
            (props.left === undefined ? $el.position().left : props.left) +
            "px, " +
            (props.top === undefined ? $el.position().top : props.top) +
            "px";
  
          if (this.use3d) {
            str = "translate3d(" + str + ", 0px)";
          } else {
            str = "translate(" + str + ")";
          }
        }
  
        if (props.scaleX !== undefined && props.scaleY !== undefined) {
          str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
        } else if (props.scaleX !== undefined) {
          str += " scaleX(" + props.scaleX + ")";
        }
  
        if (str.length) {
          css.transform = str;
        }
  
        if (props.opacity !== undefined) {
          css.opacity = props.opacity;
        }
  
        if (props.width !== undefined) {
          css.width = props.width;
        }
  
        if (props.height !== undefined) {
          css.height = props.height;
        }
  
        return $el.css(css);
      },
  
      // Simple CSS transition handler
      // =============================
  
      animate: function ($el, to, duration, callback, leaveAnimationName) {
        var self = this,
          from;
  
        if ($.isFunction(duration)) {
          callback = duration;
          duration = null;
        }
  
        self.stop($el);
  
        from = self.getTranslate($el);
  
        $el.on(transitionEnd, function (e) {
          // Skip events from child elements and z-index change
          if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
            return;
          }
  
          self.stop($el);
  
          if ($.isNumeric(duration)) {
            $el.css("transition-duration", "");
          }
  
          if ($.isPlainObject(to)) {
            if (to.scaleX !== undefined && to.scaleY !== undefined) {
              self.setTranslate($el, {
                top: to.top,
                left: to.left,
                width: from.width * to.scaleX,
                height: from.height * to.scaleY,
                scaleX: 1,
                scaleY: 1
              });
            }
          } else if (leaveAnimationName !== true) {
            $el.removeClass(to);
          }
  
          if ($.isFunction(callback)) {
            callback(e);
          }
        });
  
        if ($.isNumeric(duration)) {
          $el.css("transition-duration", duration + "ms");
        }
  
        // Start animation by changing CSS properties or class name
        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            delete to.width;
            delete to.height;
  
            if ($el.parent().hasClass("fancybox-slide--image")) {
              $el.parent().addClass("fancybox-is-scaling");
            }
          }
  
          $.fancybox.setTranslate($el, to);
        } else {
          $el.addClass(to);
        }
  
        // Make sure that `transitionend` callback gets fired
        $el.data(
          "timer",
          setTimeout(function () {
            $el.trigger(transitionEnd);
          }, duration + 33)
        );
      },
  
      stop: function ($el, callCallback) {
        if ($el && $el.length) {
          clearTimeout($el.data("timer"));
  
          if (callCallback) {
            $el.trigger(transitionEnd);
          }
  
          $el.off(transitionEnd).css("transition-duration", "");
  
          $el.parent().removeClass("fancybox-is-scaling");
        }
      }
    };
  
    // Default click handler for "fancyboxed" links
    // ============================================
  
    function _run(e, opts) {
      var items = [],
        index = 0,
        $target,
        value,
        instance;
  
      // Avoid opening multiple times
      if (e && e.isDefaultPrevented()) {
        return;
      }
  
      e.preventDefault();
  
      opts = opts || {};
  
      if (e && e.data) {
        opts = mergeOpts(e.data.options, opts);
      }
  
      $target = opts.$target || $(e.currentTarget).trigger("blur");
      instance = $.fancybox.getInstance();
  
      if (instance && instance.$trigger && instance.$trigger.is($target)) {
        return;
      }
  
      if (opts.selector) {
        items = $(opts.selector);
      } else {
        // Get all related items and find index for clicked one
        value = $target.attr("data-fancybox") || "";
  
        if (value) {
          items = e.data ? e.data.items : [];
          items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
        } else {
          items = [$target];
        }
      }
  
      index = $(items).index($target);
  
      // Sometimes current item can not be found
      if (index < 0) {
        index = 0;
      }
  
      instance = $.fancybox.open(items, opts, index);
  
      // Save last active element
      instance.$trigger = $target;
    }
  
    // Create a jQuery plugin
    // ======================
  
    $.fn.fancybox = function (options) {
      var selector;
  
      options = options || {};
      selector = options.selector || false;
  
      if (selector) {
        // Use body element instead of document so it executes first
        $("body")
          .off("click.fb-start", selector)
          .on("click.fb-start", selector, {
            options: options
          }, _run);
      } else {
        this.off("click.fb-start").on(
          "click.fb-start", {
            items: this,
            options: options
          },
          _run
        );
      }
  
      return this;
    };
  
    // Self initializing plugin for all elements having `data-fancybox` attribute
    // ==========================================================================
  
    $D.on("click.fb-start", "[data-fancybox]", _run);
  
    // Enable "trigger elements"
    // =========================
  
    $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
      $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
        .eq($(this).attr("data-fancybox-index") || 0)
        .trigger("click.fb-start", {
          $trigger: $(this)
        });
    });
  
    // Track focus event for better accessibility styling
    // ==================================================
    (function () {
      var buttonStr = ".fancybox-button",
        focusStr = "fancybox-focus",
        $pressed = null;
  
      $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
        switch (e.type) {
          case "mousedown":
            $pressed = $(this);
            break;
          case "mouseup":
            $pressed = null;
            break;
          case "focusin":
            $(buttonStr).removeClass(focusStr);
  
            if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
              $(this).addClass(focusStr);
            }
            break;
          case "focusout":
            $(buttonStr).removeClass(focusStr);
            break;
        }
      });
    })();
  })(window, document, jQuery);
  // ==========================================================================
  //
  // Media
  // Adds additional media type support
  //
  // ==========================================================================
  (function ($) {
    "use strict";
  
    // Object containing properties for each media type
    var defaults = {
      youtube: {
        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "transparent",
          enablejsapi: 1,
          html5: 1
        },
        paramPlace: 8,
        type: "iframe",
        url: "https://www.youtube-nocookie.com/embed/$4",
        thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
      },
  
      vimeo: {
        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1
        },
        paramPlace: 3,
        type: "iframe",
        url: "//player.vimeo.com/video/$2"
      },
  
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l"
      },
  
      // Examples:
      // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
      // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
      // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
      // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
      gmap_place: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
        type: "iframe",
        url: function (rez) {
          return (
            "//maps.google." +
            rez[2] +
            "/?ll=" +
            (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
            "&output=" +
            (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
          );
        }
      },
  
      // Examples:
      // https://www.google.com/maps/search/Empire+State+Building/
      // https://www.google.com/maps/search/?api=1&query=centurylink+field
      // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
      gmap_search: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
        type: "iframe",
        url: function (rez) {
          return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
        }
      }
    };
  
    // Formats matching url to final form
    var format = function (url, rez, params) {
      if (!url) {
        return;
      }
  
      params = params || "";
  
      if ($.type(params) === "object") {
        params = $.param(params, true);
      }
  
      $.each(rez, function (key, value) {
        url = url.replace("$" + key, value || "");
      });
  
      if (params.length) {
        url += (url.indexOf("?") > 0 ? "&" : "?") + params;
      }
  
      return url;
    };
  
    $(document).on("objectNeedsType.fb", function (e, instance, item) {
      var url = item.src || "",
        type = false,
        media,
        thumb,
        rez,
        params,
        urlParams,
        paramObj,
        provider;
  
      media = $.extend(true, {}, defaults, item.opts.media);
  
      // Look for any matching media type
      $.each(media, function (providerName, providerOpts) {
        rez = url.match(providerOpts.matcher);
  
        if (!rez) {
          return;
        }
  
        type = providerOpts.type;
        provider = providerName;
        paramObj = {};
  
        if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
          urlParams = rez[providerOpts.paramPlace];
  
          if (urlParams[0] == "?") {
            urlParams = urlParams.substring(1);
          }
  
          urlParams = urlParams.split("&");
  
          for (var m = 0; m < urlParams.length; ++m) {
            var p = urlParams[m].split("=", 2);
  
            if (p.length == 2) {
              paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
          }
        }
  
        params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
  
        url =
          $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
  
        thumb =
          $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);
  
        if (providerName === "youtube") {
          url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
            return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
          });
        } else if (providerName === "vimeo") {
          url = url.replace("&%23", "#");
        }
  
        return false;
      });
  
      // If it is found, then change content type and update the url
  
      if (type) {
        if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
          item.opts.thumb = thumb;
        }
  
        if (type === "iframe") {
          item.opts = $.extend(true, item.opts, {
            iframe: {
              preload: false,
              attr: {
                scrolling: "no"
              }
            }
          });
        }
  
        $.extend(item, {
          type: type,
          src: url,
          origSrc: item.src,
          contentSource: provider,
          contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
        });
      } else if (url) {
        item.type = item.opts.defaultType;
      }
    });
  
    // Load YouTube/Video API on request to detect when video finished playing
    var VideoAPILoader = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: false,
        loaded: false
      },
  
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: false,
        loaded: false
      },
  
      load: function (vendor) {
        var _this = this,
          script;
  
        if (this[vendor].loaded) {
          setTimeout(function () {
            _this.done(vendor);
          });
          return;
        }
  
        if (this[vendor].loading) {
          return;
        }
  
        this[vendor].loading = true;
  
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = this[vendor].src;
  
        if (vendor === "youtube") {
          window.onYouTubeIframeAPIReady = function () {
            _this[vendor].loaded = true;
            _this.done(vendor);
          };
        } else {
          script.onload = function () {
            _this[vendor].loaded = true;
            _this.done(vendor);
          };
        }
  
        document.body.appendChild(script);
      },
      done: function (vendor) {
        var instance, $el, player;
  
        if (vendor === "youtube") {
          delete window.onYouTubeIframeAPIReady;
        }
  
        instance = $.fancybox.getInstance();
  
        if (instance) {
          $el = instance.current.$content.find("iframe");
  
          if (vendor === "youtube" && YT !== undefined && YT) {
            player = new YT.Player($el.attr("id"), {
              events: {
                onStateChange: function (e) {
                  if (e.data == 0) {
                    instance.next();
                  }
                }
              }
            });
          } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
            player = new Vimeo.Player($el);
  
            player.on("ended", function () {
              instance.next();
            });
          }
        }
      }
    };
  
    $(document).on({
      "afterShow.fb": function (e, instance, current) {
        if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
          VideoAPILoader.load(current.contentSource);
        }
      }
    });
  })(jQuery);
  // ==========================================================================
  //
  // Guestures
  // Adds touch guestures, handles click and tap events
  //
  // ==========================================================================
  (function (window, document, $) {
    "use strict";
  
    var requestAFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
  
    var cancelAFrame = (function () {
      return (
        window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function (id) {
          window.clearTimeout(id);
        }
      );
    })();
  
    var getPointerXY = function (e) {
      var result = [];
  
      e = e.originalEvent || e || window.e;
      e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
  
      for (var key in e) {
        if (e[key].pageX) {
          result.push({
            x: e[key].pageX,
            y: e[key].pageY
          });
        } else if (e[key].clientX) {
          result.push({
            x: e[key].clientX,
            y: e[key].clientY
          });
        }
      }
  
      return result;
    };
  
    var distance = function (point2, point1, what) {
      if (!point1 || !point2) {
        return 0;
      }
  
      if (what === "x") {
        return point2.x - point1.x;
      } else if (what === "y") {
        return point2.y - point1.y;
      }
  
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };
  
    var isClickable = function ($el) {
      if (
        $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
        $.isFunction($el.get(0).onclick) ||
        $el.data("selectable")
      ) {
        return true;
      }
  
      // Check for attributes like data-fancybox-next or data-fancybox-close
      for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
        if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
          return true;
        }
      }
  
      return false;
    };
  
    var hasScrollbars = function (el) {
      var overflowY = window.getComputedStyle(el)["overflow-y"],
        overflowX = window.getComputedStyle(el)["overflow-x"],
        vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
        horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
  
      return vertical || horizontal;
    };
  
    var isScrollable = function ($el) {
      var rez = false;
  
      while (true) {
        rez = hasScrollbars($el.get(0));
  
        if (rez) {
          break;
        }
  
        $el = $el.parent();
  
        if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
          break;
        }
      }
  
      return rez;
    };
  
    var Guestures = function (instance) {
      var self = this;
  
      self.instance = instance;
  
      self.$bg = instance.$refs.bg;
      self.$stage = instance.$refs.stage;
      self.$container = instance.$refs.container;
  
      self.destroy();
  
      self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
    };
  
    Guestures.prototype.destroy = function () {
      var self = this;
  
      self.$container.off(".fb.touch");
  
      $(document).off(".fb.touch");
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
        self.requestId = null;
      }
  
      if (self.tapped) {
        clearTimeout(self.tapped);
        self.tapped = null;
      }
    };
  
    Guestures.prototype.ontouchstart = function (e) {
      var self = this,
        $target = $(e.target),
        instance = self.instance,
        current = instance.current,
        $slide = current.$slide,
        $content = current.$content,
        isTouchDevice = e.type == "touchstart";
  
      // Do not respond to both (touch and mouse) events
      if (isTouchDevice) {
        self.$container.off("mousedown.fb.touch");
      }
  
      // Ignore right click
      if (e.originalEvent && e.originalEvent.button == 2) {
        return;
      }
  
      // Ignore taping on links, buttons, input elements
      if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
        return;
      }
      // Ignore clicks on the scrollbar
      if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
        return;
      }
  
      // Ignore clicks while zooming or closing
      if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
        e.stopPropagation();
        e.preventDefault();
  
        return;
      }
  
      self.realPoints = self.startPoints = getPointerXY(e);
  
      if (!self.startPoints.length) {
        return;
      }
  
      // Allow other scripts to catch touch event if "touch" is set to false
      if (current.touch) {
        e.stopPropagation();
      }
  
      self.startEvent = e;
  
      self.canTap = true;
      self.$target = $target;
      self.$content = $content;
      self.opts = current.opts.touch;
  
      self.isPanning = false;
      self.isSwiping = false;
      self.isZooming = false;
      self.isScrolling = false;
      self.canPan = instance.canPan();
  
      self.startTime = new Date().getTime();
      self.distanceX = self.distanceY = self.distance = 0;
  
      self.canvasWidth = Math.round($slide[0].clientWidth);
      self.canvasHeight = Math.round($slide[0].clientHeight);
  
      self.contentLastPos = null;
      self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
        top: 0,
        left: 0
      };
      self.sliderStartPos = $.fancybox.getTranslate($slide);
  
      // Since position will be absolute, but we need to make it relative to the stage
      self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
  
      self.sliderStartPos.top -= self.stagePos.top;
      self.sliderStartPos.left -= self.stagePos.left;
  
      self.contentStartPos.top -= self.stagePos.top;
      self.contentStartPos.left -= self.stagePos.left;
  
      $(document)
        .off(".fb.touch")
        .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
        .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));
  
      if ($.fancybox.isMobile) {
        document.addEventListener("scroll", self.onscroll, true);
      }
  
      // Skip if clicked outside the sliding area
      if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
        if ($target.is(".fancybox-image")) {
          e.preventDefault();
        }
  
        if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
          return;
        }
      }
  
      self.isScrollable = isScrollable($target) || isScrollable($target.parent());
  
      // Check if element is scrollable and try to prevent default behavior (scrolling)
      if (!($.fancybox.isMobile && self.isScrollable)) {
        e.preventDefault();
      }
  
      // One finger or mouse click - swipe or pan an image
      if (self.startPoints.length === 1 || current.hasError) {
        if (self.canPan) {
          $.fancybox.stop(self.$content);
  
          self.isPanning = true;
        } else {
          self.isSwiping = true;
        }
  
        self.$container.addClass("fancybox-is-grabbing");
      }
  
      // Two fingers - zoom image
      if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
        self.canTap = false;
        self.isSwiping = false;
        self.isPanning = false;
  
        self.isZooming = true;
  
        $.fancybox.stop(self.$content);
  
        self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
        self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
  
        self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
        self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
  
        self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
      }
    };
  
    Guestures.prototype.onscroll = function (e) {
      var self = this;
  
      self.isScrolling = true;
  
      document.removeEventListener("scroll", self.onscroll, true);
    };
  
    Guestures.prototype.ontouchmove = function (e) {
      var self = this;
  
      // Make sure user has not released over iframe or disabled element
      if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
        self.ontouchend(e);
        return;
      }
  
      if (self.isScrolling) {
        self.canTap = false;
        return;
      }
  
      self.newPoints = getPointerXY(e);
  
      if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
        return;
      }
  
      if (!(self.isSwiping && self.isSwiping === true)) {
        e.preventDefault();
      }
  
      self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
      self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
  
      self.distance = distance(self.newPoints[0], self.startPoints[0]);
  
      // Skip false ontouchmove events (Chrome)
      if (self.distance > 0) {
        if (self.isSwiping) {
          self.onSwipe(e);
        } else if (self.isPanning) {
          self.onPan();
        } else if (self.isZooming) {
          self.onZoom();
        }
      }
    };
  
    Guestures.prototype.onSwipe = function (e) {
      var self = this,
        instance = self.instance,
        swiping = self.isSwiping,
        left = self.sliderStartPos.left || 0,
        angle;
  
      // If direction is not yet determined
      if (swiping === true) {
        // We need at least 10px distance to correctly calculate an angle
        if (Math.abs(self.distance) > 10) {
          self.canTap = false;
  
          if (instance.group.length < 2 && self.opts.vertical) {
            self.isSwiping = "y";
          } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
            self.isSwiping = "x";
          } else {
            angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);
  
            self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
          }
  
          if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
            self.isScrolling = true;
  
            return;
          }
  
          instance.isDragging = self.isSwiping;
  
          // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
          self.startPoints = self.newPoints;
  
          $.each(instance.slides, function (index, slide) {
            var slidePos, stagePos;
  
            $.fancybox.stop(slide.$slide);
  
            slidePos = $.fancybox.getTranslate(slide.$slide);
            stagePos = $.fancybox.getTranslate(instance.$refs.stage);
  
            slide.$slide
              .css({
                transform: "",
                opacity: "",
                "transition-duration": ""
              })
              .removeClass("fancybox-animated")
              .removeClass(function (index, className) {
                return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
              });
  
            if (slide.pos === instance.current.pos) {
              self.sliderStartPos.top = slidePos.top - stagePos.top;
              self.sliderStartPos.left = slidePos.left - stagePos.left;
            }
  
            $.fancybox.setTranslate(slide.$slide, {
              top: slidePos.top - stagePos.top,
              left: slidePos.left - stagePos.left
            });
          });
  
          // Stop slideshow
          if (instance.SlideShow && instance.SlideShow.isActive) {
            instance.SlideShow.stop();
          }
        }
  
        return;
      }
  
      // Sticky edges
      if (swiping == "x") {
        if (
          self.distanceX > 0 &&
          (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
        ) {
          left = left + Math.pow(self.distanceX, 0.8);
        } else if (
          self.distanceX < 0 &&
          (self.instance.group.length < 2 ||
            (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
        ) {
          left = left - Math.pow(-self.distanceX, 0.8);
        } else {
          left = left + self.distanceX;
        }
      }
  
      self.sliderLastPos = {
        top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
        left: left
      };
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
  
        self.requestId = null;
      }
  
      self.requestId = requestAFrame(function () {
        if (self.sliderLastPos) {
          $.each(self.instance.slides, function (index, slide) {
            var pos = slide.pos - self.instance.currPos;
  
            $.fancybox.setTranslate(slide.$slide, {
              top: self.sliderLastPos.top,
              left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
            });
          });
  
          self.$container.addClass("fancybox-is-sliding");
        }
      });
    };
  
    Guestures.prototype.onPan = function () {
      var self = this;
  
      // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
      if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
        self.startPoints = self.newPoints;
        return;
      }
  
      self.canTap = false;
  
      self.contentLastPos = self.limitMovement();
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
      }
  
      self.requestId = requestAFrame(function () {
        $.fancybox.setTranslate(self.$content, self.contentLastPos);
      });
    };
  
    // Make panning sticky to the edges
    Guestures.prototype.limitMovement = function () {
      var self = this;
  
      var canvasWidth = self.canvasWidth;
      var canvasHeight = self.canvasHeight;
  
      var distanceX = self.distanceX;
      var distanceY = self.distanceY;
  
      var contentStartPos = self.contentStartPos;
  
      var currentOffsetX = contentStartPos.left;
      var currentOffsetY = contentStartPos.top;
  
      var currentWidth = contentStartPos.width;
      var currentHeight = contentStartPos.height;
  
      var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
  
      if (currentWidth > canvasWidth) {
        newOffsetX = currentOffsetX + distanceX;
      } else {
        newOffsetX = currentOffsetX;
      }
  
      newOffsetY = currentOffsetY + distanceY;
  
      // Slow down proportionally to traveled distance
      minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
      minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
  
      maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
      maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);
  
      //   ->
      if (distanceX > 0 && newOffsetX > minTranslateX) {
        newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
      }
  
      //    <-
      if (distanceX < 0 && newOffsetX < maxTranslateX) {
        newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
      }
  
      //   \/
      if (distanceY > 0 && newOffsetY > minTranslateY) {
        newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
      }
  
      //   /\
      if (distanceY < 0 && newOffsetY < maxTranslateY) {
        newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
      }
  
      return {
        top: newOffsetY,
        left: newOffsetX
      };
    };
  
    Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
      var self = this;
  
      var canvasWidth = self.canvasWidth;
      var canvasHeight = self.canvasHeight;
  
      if (newWidth > canvasWidth) {
        newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
        newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
      } else {
        // Center horizontally
        newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
      }
  
      if (newHeight > canvasHeight) {
        newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
        newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
      } else {
        // Center vertically
        newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
      }
  
      return {
        top: newOffsetY,
        left: newOffsetX
      };
    };
  
    Guestures.prototype.onZoom = function () {
      var self = this;
  
      // Calculate current distance between points to get pinch ratio and new width and height
      var contentStartPos = self.contentStartPos;
  
      var currentWidth = contentStartPos.width;
      var currentHeight = contentStartPos.height;
  
      var currentOffsetX = contentStartPos.left;
      var currentOffsetY = contentStartPos.top;
  
      var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
  
      var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
  
      var newWidth = Math.floor(currentWidth * pinchRatio);
      var newHeight = Math.floor(currentHeight * pinchRatio);
  
      // This is the translation due to pinch-zooming
      var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
      var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
  
      // Point between the two touches
      var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
      var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
  
      // And this is the translation due to translation of the centerpoint
      // between the two fingers
      var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
      var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;
  
      // The new offset is the old/current one plus the total translation
      var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
      var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
  
      var newPos = {
        top: newOffsetY,
        left: newOffsetX,
        scaleX: pinchRatio,
        scaleY: pinchRatio
      };
  
      self.canTap = false;
  
      self.newWidth = newWidth;
      self.newHeight = newHeight;
  
      self.contentLastPos = newPos;
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
      }
  
      self.requestId = requestAFrame(function () {
        $.fancybox.setTranslate(self.$content, self.contentLastPos);
      });
    };
  
    Guestures.prototype.ontouchend = function (e) {
      var self = this;
  
      var swiping = self.isSwiping;
      var panning = self.isPanning;
      var zooming = self.isZooming;
      var scrolling = self.isScrolling;
  
      self.endPoints = getPointerXY(e);
      self.dMs = Math.max(new Date().getTime() - self.startTime, 1);
  
      self.$container.removeClass("fancybox-is-grabbing");
  
      $(document).off(".fb.touch");
  
      document.removeEventListener("scroll", self.onscroll, true);
  
      if (self.requestId) {
        cancelAFrame(self.requestId);
  
        self.requestId = null;
      }
  
      self.isSwiping = false;
      self.isPanning = false;
      self.isZooming = false;
      self.isScrolling = false;
  
      self.instance.isDragging = false;
  
      if (self.canTap) {
        return self.onTap(e);
      }
  
      self.speed = 100;
  
      // Speed in px/ms
      self.velocityX = (self.distanceX / self.dMs) * 0.5;
      self.velocityY = (self.distanceY / self.dMs) * 0.5;
  
      if (panning) {
        self.endPanning();
      } else if (zooming) {
        self.endZooming();
      } else {
        self.endSwiping(swiping, scrolling);
      }
  
      return;
    };
  
    Guestures.prototype.endSwiping = function (swiping, scrolling) {
      var self = this,
        ret = false,
        len = self.instance.group.length,
        distanceX = Math.abs(self.distanceX),
        canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
        speedX = 300;
  
      self.sliderLastPos = null;
  
      // Close if swiped vertically / navigate if horizontally
      if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
        // Continue vertical movement
        $.fancybox.animate(
          self.instance.current.$slide, {
            top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
            opacity: 0
          },
          200
        );
        ret = self.instance.close(true, 250);
      } else if (canAdvance && self.distanceX > 0) {
        ret = self.instance.previous(speedX);
      } else if (canAdvance && self.distanceX < 0) {
        ret = self.instance.next(speedX);
      }
  
      if (ret === false && (swiping == "x" || swiping == "y")) {
        self.instance.centerSlide(200);
      }
  
      self.$container.removeClass("fancybox-is-sliding");
    };
  
    // Limit panning from edges
    // ========================
    Guestures.prototype.endPanning = function () {
      var self = this,
        newOffsetX,
        newOffsetY,
        newPos;
  
      if (!self.contentLastPos) {
        return;
      }
  
      if (self.opts.momentum === false || self.dMs > 350) {
        newOffsetX = self.contentLastPos.left;
        newOffsetY = self.contentLastPos.top;
      } else {
        // Continue movement
        newOffsetX = self.contentLastPos.left + self.velocityX * 500;
        newOffsetY = self.contentLastPos.top + self.velocityY * 500;
      }
  
      newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
  
      newPos.width = self.contentStartPos.width;
      newPos.height = self.contentStartPos.height;
  
      $.fancybox.animate(self.$content, newPos, 366);
    };
  
    Guestures.prototype.endZooming = function () {
      var self = this;
  
      var current = self.instance.current;
  
      var newOffsetX, newOffsetY, newPos, reset;
  
      var newWidth = self.newWidth;
      var newHeight = self.newHeight;
  
      if (!self.contentLastPos) {
        return;
      }
  
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
  
      reset = {
        top: newOffsetY,
        left: newOffsetX,
        width: newWidth,
        height: newHeight,
        scaleX: 1,
        scaleY: 1
      };
  
      // Reset scalex/scaleY values; this helps for perfomance and does not break animation
      $.fancybox.setTranslate(self.$content, reset);
  
      if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
        self.instance.scaleToFit(150);
      } else if (newWidth > current.width || newHeight > current.height) {
        self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
      } else {
        newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
  
        $.fancybox.animate(self.$content, newPos, 150);
      }
    };
  
    Guestures.prototype.onTap = function (e) {
      var self = this;
      var $target = $(e.target);
  
      var instance = self.instance;
      var current = instance.current;
  
      var endPoints = (e && getPointerXY(e)) || self.startPoints;
  
      var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
      var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;
  
      var where;
  
      var process = function (prefix) {
        var action = current.opts[prefix];
  
        if ($.isFunction(action)) {
          action = action.apply(instance, [current, e]);
        }
  
        if (!action) {
          return;
        }
  
        switch (action) {
          case "close":
            instance.close(self.startEvent);
  
            break;
  
          case "toggleControls":
            instance.toggleControls();
  
            break;
  
          case "next":
            instance.next();
  
            break;
  
          case "nextOrClose":
            if (instance.group.length > 1) {
              instance.next();
            } else {
              instance.close(self.startEvent);
            }
  
            break;
  
          case "zoom":
            if (current.type == "image" && (current.isLoaded || current.$ghost)) {
              if (instance.canPan()) {
                instance.scaleToFit();
              } else if (instance.isScaledDown()) {
                instance.scaleToActual(tapX, tapY);
              } else if (instance.group.length < 2) {
                instance.close(self.startEvent);
              }
            }
  
            break;
        }
      };
  
      // Ignore right click
      if (e.originalEvent && e.originalEvent.button == 2) {
        return;
      }
  
      // Skip if clicked on the scrollbar
      if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
        return;
      }
  
      // Check where is clicked
      if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
        where = "Outside";
      } else if ($target.is(".fancybox-slide")) {
        where = "Slide";
      } else if (
        instance.current.$content &&
        instance.current.$content
        .find($target)
        .addBack()
        .filter($target).length
      ) {
        where = "Content";
      } else {
        return;
      }
  
      // Check if this is a double tap
      if (self.tapped) {
        // Stop previously created single tap
        clearTimeout(self.tapped);
        self.tapped = null;
  
        // Skip if distance between taps is too big
        if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
          return this;
        }
  
        // OK, now we assume that this is a double-tap
        process("dblclick" + where);
      } else {
        // Single tap will be processed if user has not clicked second time within 300ms
        // or there is no need to wait for double-tap
        self.tapX = tapX;
        self.tapY = tapY;
  
        if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
          self.tapped = setTimeout(function () {
            self.tapped = null;
  
            if (!instance.isAnimating) {
              process("click" + where);
            }
          }, 500);
        } else {
          process("click" + where);
        }
      }
  
      return this;
    };
  
    $(document)
      .on("onActivate.fb", function (e, instance) {
        if (instance && !instance.Guestures) {
          instance.Guestures = new Guestures(instance);
        }
      })
      .on("beforeClose.fb", function (e, instance) {
        if (instance && instance.Guestures) {
          instance.Guestures.destroy();
        }
      });
  })(window, document, jQuery);
  // ==========================================================================
  //
  // SlideShow
  // Enables slideshow functionality
  //
  // Example of usage:
  // $.fancybox.getInstance().SlideShow.start()
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
          "</button>"
      },
      slideShow: {
        autoStart: false,
        speed: 3000,
        progress: true
      }
    });
  
    var SlideShow = function (instance) {
      this.instance = instance;
      this.init();
    };
  
    $.extend(SlideShow.prototype, {
      timer: null,
      isActive: false,
      $button: null,
  
      init: function () {
        var self = this,
          instance = self.instance,
          opts = instance.group[instance.currIndex].opts.slideShow;
  
        self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
          self.toggle();
        });
  
        if (instance.group.length < 2 || !opts) {
          self.$button.hide();
        } else if (opts.progress) {
          self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
        }
      },
  
      set: function (force) {
        var self = this,
          instance = self.instance,
          current = instance.current;
  
        // Check if reached last element
        if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
          if (self.isActive && current.contentType !== "video") {
            if (self.$progress) {
              $.fancybox.animate(self.$progress.show(), {
                scaleX: 1
              }, current.opts.slideShow.speed);
            }
  
            self.timer = setTimeout(function () {
              if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
                instance.jumpTo(0);
              } else {
                instance.next();
              }
            }, current.opts.slideShow.speed);
          }
        } else {
          self.stop();
          instance.idleSecondsCounter = 0;
          instance.showControls();
        }
      },
  
      clear: function () {
        var self = this;
  
        clearTimeout(self.timer);
  
        self.timer = null;
  
        if (self.$progress) {
          self.$progress.removeAttr("style").hide();
        }
      },
  
      start: function () {
        var self = this,
          current = self.instance.current;
  
        if (current) {
          self.$button
            .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause");
  
          self.isActive = true;
  
          if (current.isComplete) {
            self.set(true);
          }
  
          self.instance.trigger("onSlideShowChange", true);
        }
      },
  
      stop: function () {
        var self = this,
          current = self.instance.current;
  
        self.clear();
  
        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
          .removeClass("fancybox-button--pause")
          .addClass("fancybox-button--play");
  
        self.isActive = false;
  
        self.instance.trigger("onSlideShowChange", false);
  
        if (self.$progress) {
          self.$progress.removeAttr("style").hide();
        }
      },
  
      toggle: function () {
        var self = this;
  
        if (self.isActive) {
          self.stop();
        } else {
          self.start();
        }
      }
    });
  
    $(document).on({
      "onInit.fb": function (e, instance) {
        if (instance && !instance.SlideShow) {
          instance.SlideShow = new SlideShow(instance);
        }
      },
  
      "beforeShow.fb": function (e, instance, current, firstRun) {
        var SlideShow = instance && instance.SlideShow;
  
        if (firstRun) {
          if (SlideShow && current.opts.slideShow.autoStart) {
            SlideShow.start();
          }
        } else if (SlideShow && SlideShow.isActive) {
          SlideShow.clear();
        }
      },
  
      "afterShow.fb": function (e, instance, current) {
        var SlideShow = instance && instance.SlideShow;
  
        if (SlideShow && SlideShow.isActive) {
          SlideShow.set();
        }
      },
  
      "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
        var SlideShow = instance && instance.SlideShow;
  
        // "P" or Spacebar
        if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
          keypress.preventDefault();
  
          SlideShow.toggle();
        }
      },
  
      "beforeClose.fb onDeactivate.fb": function (e, instance) {
        var SlideShow = instance && instance.SlideShow;
  
        if (SlideShow) {
          SlideShow.stop();
        }
      }
    });
  
    // Page Visibility API to pause slideshow when window is not active
    $(document).on("visibilitychange", function () {
      var instance = $.fancybox.getInstance(),
        SlideShow = instance && instance.SlideShow;
  
      if (SlideShow && SlideShow.isActive) {
        if (document.hidden) {
          SlideShow.clear();
        } else {
          SlideShow.set();
        }
      }
    });
  })(document, jQuery);
  // ==========================================================================
  //
  // FullScreen
  // Adds fullscreen functionality
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    // Collection of methods supported by user browser
    var fn = (function () {
      var fnMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        // new WebKit
        [
          "webkitRequestFullscreen",
          "webkitExitFullscreen",
          "webkitFullscreenElement",
          "webkitFullscreenEnabled",
          "webkitfullscreenchange",
          "webkitfullscreenerror"
        ],
        // old WebKit (Safari 5.1)
        [
          "webkitRequestFullScreen",
          "webkitCancelFullScreen",
          "webkitCurrentFullScreenElement",
          "webkitCancelFullScreen",
          "webkitfullscreenchange",
          "webkitfullscreenerror"
        ],
        [
          "mozRequestFullScreen",
          "mozCancelFullScreen",
          "mozFullScreenElement",
          "mozFullScreenEnabled",
          "mozfullscreenchange",
          "mozfullscreenerror"
        ],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
      ];
  
      var ret = {};
  
      for (var i = 0; i < fnMap.length; i++) {
        var val = fnMap[i];
  
        if (val && val[1] in document) {
          for (var j = 0; j < val.length; j++) {
            ret[fnMap[0][j]] = val[j];
          }
  
          return ret;
        }
      }
  
      return false;
    })();
  
    if (fn) {
      var FullScreen = {
        request: function (elem) {
          elem = elem || document.documentElement;
  
          elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
        },
        exit: function () {
          document[fn.exitFullscreen]();
        },
        toggle: function (elem) {
          elem = elem || document.documentElement;
  
          if (this.isFullscreen()) {
            this.exit();
          } else {
            this.request(elem);
          }
        },
        isFullscreen: function () {
          return Boolean(document[fn.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(document[fn.fullscreenEnabled]);
        }
      };
  
      $.extend(true, $.fancybox.defaults, {
        btnTpl: {
          fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
            "</button>"
        },
        fullScreen: {
          autoStart: false
        }
      });
  
      $(document).on(fn.fullscreenchange, function () {
        var isFullscreen = FullScreen.isFullscreen(),
          instance = $.fancybox.getInstance();
  
        if (instance) {
          // If image is zooming, then force to stop and reposition properly
          if (instance.current && instance.current.type === "image" && instance.isAnimating) {
            instance.isAnimating = false;
  
            instance.update(true, true, 0);
  
            if (!instance.isComplete) {
              instance.complete();
            }
          }
  
          instance.trigger("onFullscreenChange", isFullscreen);
  
          instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
  
          instance.$refs.toolbar
            .find("[data-fancybox-fullscreen]")
            .toggleClass("fancybox-button--fsenter", !isFullscreen)
            .toggleClass("fancybox-button--fsexit", isFullscreen);
        }
      });
    }
  
    $(document).on({
      "onInit.fb": function (e, instance) {
        var $container;
  
        if (!fn) {
          instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
  
          return;
        }
  
        if (instance && instance.group[instance.currIndex].opts.fullScreen) {
          $container = instance.$refs.container;
  
          $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
            e.stopPropagation();
            e.preventDefault();
  
            FullScreen.toggle();
          });
  
          if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
            FullScreen.request();
          }
  
          // Expose API
          instance.FullScreen = FullScreen;
        } else if (instance) {
          instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        }
      },
  
      "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
        // "F"
        if (instance && instance.FullScreen && keycode === 70) {
          keypress.preventDefault();
  
          instance.FullScreen.toggle();
        }
      },
  
      "beforeClose.fb": function (e, instance) {
        if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
          FullScreen.exit();
        }
      }
    });
  })(document, jQuery);
  // ==========================================================================
  //
  // Thumbs
  // Displays thumbnails in a grid
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    var CLASS = "fancybox-thumbs",
      CLASS_ACTIVE = CLASS + "-active";
  
    // Make sure there are default values
    $.fancybox.defaults = $.extend(
      true, {
        btnTpl: {
          thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
            "</button>"
        },
        thumbs: {
          autoStart: false, // Display thumbnails on opening
          hideOnClose: true, // Hide thumbnail grid when closing animation starts
          parentEl: ".fancybox-container", // Container is injected into this element
          axis: "y" // Vertical (y) or horizontal (x) scrolling
        }
      },
      $.fancybox.defaults
    );
  
    var FancyThumbs = function (instance) {
      this.init(instance);
    };
  
    $.extend(FancyThumbs.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: false,
      isActive: false,
  
      init: function (instance) {
        var self = this,
          group = instance.group,
          enabled = 0;
  
        self.instance = instance;
        self.opts = group[instance.currIndex].opts.thumbs;
  
        instance.Thumbs = self;
  
        self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");
  
        // Enable thumbs if at least two group items have thumbnails
        for (var i = 0, len = group.length; i < len; i++) {
          if (group[i].thumb) {
            enabled++;
          }
  
          if (enabled > 1) {
            break;
          }
        }
  
        if (enabled > 1 && !!self.opts) {
          self.$button.removeAttr("style").on("click", function () {
            self.toggle();
          });
  
          self.isActive = true;
        } else {
          self.$button.hide();
        }
      },
  
      create: function () {
        var self = this,
          instance = self.instance,
          parentEl = self.opts.parentEl,
          list = [],
          src;
  
        if (!self.$grid) {
          // Create main element
          self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
            instance.$refs.container
            .find(parentEl)
            .addBack()
            .filter(parentEl)
          );
  
          // Add "click" event that performs gallery navigation
          self.$grid.on("click", "a", function () {
            instance.jumpTo($(this).attr("data-index"));
          });
        }
  
        // Build the list
        if (!self.$list) {
          self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
        }
  
        $.each(instance.group, function (i, item) {
          src = item.thumb;
  
          if (!src && item.type === "image") {
            src = item.src;
          }
  
          list.push(
            '<a href="javascript:;" tabindex="0" data-index="' +
            i +
            '"' +
            (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
            "></a>"
          );
        });
  
        self.$list[0].innerHTML = list.join("");
  
        if (self.opts.axis === "x") {
          // Set fixed width for list element to enable horizontal scrolling
          self.$list.width(
            parseInt(self.$grid.css("padding-right"), 10) +
            instance.group.length *
            self.$list
            .children()
            .eq(0)
            .outerWidth(true)
          );
        }
      },
  
      focus: function (duration) {
        var self = this,
          $list = self.$list,
          $grid = self.$grid,
          thumb,
          thumbPos;
  
        if (!self.instance.current) {
          return;
        }
  
        thumb = $list
          .children()
          .removeClass(CLASS_ACTIVE)
          .filter('[data-index="' + self.instance.current.index + '"]')
          .addClass(CLASS_ACTIVE);
  
        thumbPos = thumb.position();
  
        // Check if need to scroll to make current thumb visible
        if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
          $list.stop().animate({
              scrollTop: $list.scrollTop() + thumbPos.top
            },
            duration
          );
        } else if (
          self.opts.axis === "x" &&
          (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
        ) {
          $list
            .parent()
            .stop()
            .animate({
                scrollLeft: thumbPos.left
              },
              duration
            );
        }
      },
  
      update: function () {
        var that = this;
        that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
  
        if (that.isVisible) {
          if (!that.$grid) {
            that.create();
          }
  
          that.instance.trigger("onThumbsShow");
  
          that.focus(0);
        } else if (that.$grid) {
          that.instance.trigger("onThumbsHide");
        }
  
        // Update content position
        that.instance.update();
      },
  
      hide: function () {
        this.isVisible = false;
        this.update();
      },
  
      show: function () {
        this.isVisible = true;
        this.update();
      },
  
      toggle: function () {
        this.isVisible = !this.isVisible;
        this.update();
      }
    });
  
    $(document).on({
      "onInit.fb": function (e, instance) {
        var Thumbs;
  
        if (instance && !instance.Thumbs) {
          Thumbs = new FancyThumbs(instance);
  
          if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
            Thumbs.show();
          }
        }
      },
  
      "beforeShow.fb": function (e, instance, item, firstRun) {
        var Thumbs = instance && instance.Thumbs;
  
        if (Thumbs && Thumbs.isVisible) {
          Thumbs.focus(firstRun ? 0 : 250);
        }
      },
  
      "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
        var Thumbs = instance && instance.Thumbs;
  
        // "G"
        if (Thumbs && Thumbs.isActive && keycode === 71) {
          keypress.preventDefault();
  
          Thumbs.toggle();
        }
      },
  
      "beforeClose.fb": function (e, instance) {
        var Thumbs = instance && instance.Thumbs;
  
        if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
          Thumbs.$grid.hide();
        }
      }
    });
  })(document, jQuery);
  //// ==========================================================================
  //
  // Share
  // Displays simple form for sharing current url
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
          "</button>"
      },
      share: {
        url: function (instance, item) {
          return (
            (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
          );
        },
        tpl: '<div class="fancybox-share">' +
          "<h1>{{SHARE}}</h1>" +
          "<p>" +
          '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
          "<span>Facebook</span>" +
          "</a>" +
          '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
          "<span>Twitter</span>" +
          "</a>" +
          '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
          "<span>Pinterest</span>" +
          "</a>" +
          "</p>" +
          '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
          "</div>"
      }
    });
  
    function escapeHtml(string) {
      var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
  
      return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
      });
    }
  
    $(document).on("click", "[data-fancybox-share]", function () {
      var instance = $.fancybox.getInstance(),
        current = instance.current || null,
        url,
        tpl;
  
      if (!current) {
        return;
      }
  
      if ($.type(current.opts.share.url) === "function") {
        url = current.opts.share.url.apply(current, [instance, current]);
      }
  
      tpl = current.opts.share.tpl
        .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
        .replace(/\{\{url\}\}/g, encodeURIComponent(url))
        .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
        .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");
  
      $.fancybox.open({
        src: instance.translate(instance, tpl),
        type: "html",
        opts: {
          touch: false,
          animationEffect: false,
          afterLoad: function (shareInstance, shareCurrent) {
            // Close self if parent instance is closing
            instance.$refs.container.one("beforeClose.fb", function () {
              shareInstance.close(null, 0);
            });
  
            // Opening links in a popup window
            shareCurrent.$content.find(".fancybox-share__button").click(function () {
              window.open(this.href, "Share", "width=550, height=450");
              return false;
            });
          },
          mobile: {
            autoFocus: false
          }
        }
      });
    });
  })(document, jQuery);
  // ==========================================================================
  //
  // Hash
  // Enables linking to each modal
  //
  // ==========================================================================
  (function (window, document, $) {
    "use strict";
  
    // Simple $.escapeSelector polyfill (for jQuery prior v3)
    if (!$.escapeSelector) {
      $.escapeSelector = function (sel) {
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        var fcssescape = function (ch, asCodePoint) {
          if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\0") {
              return "\uFFFD";
            }
  
            // Control characters and (dependent upon position) numbers get escaped as code points
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
  
          // Other potentially-special ASCII characters get backslash-escaped
          return "\\" + ch;
        };
  
        return (sel + "").replace(rcssescape, fcssescape);
      };
    }
  
    // Get info about gallery name and current index from url
    function parseUrl() {
      var hash = window.location.hash.substr(1),
        rez = hash.split("-"),
        index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
        gallery = rez.join("-");
  
      return {
        hash: hash,
        /* Index is starting from 1 */
        index: index < 1 ? 1 : index,
        gallery: gallery
      };
    }
  
    // Trigger click evnt on links to open new fancyBox instance
    function triggerFromUrl(url) {
      if (url.gallery !== "") {
        // If we can find element matching 'data-fancybox' atribute,
        // then triggering click event should start fancyBox
        $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
          .eq(url.index - 1)
          .focus()
          .trigger("click.fb-start");
      }
    }
  
    // Get gallery name from current instance
    function getGalleryID(instance) {
      var opts, ret;
  
      if (!instance) {
        return false;
      }
  
      opts = instance.current ? instance.current.opts : instance.opts;
      ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");
  
      return ret === "" ? false : ret;
    }
  
    // Start when DOM becomes ready
    $(function () {
      // Check if user has disabled this module
      if ($.fancybox.defaults.hash === false) {
        return;
      }
  
      // Update hash when opening/closing fancyBox
      $(document).on({
        "onInit.fb": function (e, instance) {
          var url, gallery;
  
          if (instance.group[instance.currIndex].opts.hash === false) {
            return;
          }
  
          url = parseUrl();
          gallery = getGalleryID(instance);
  
          // Make sure gallery start index matches index from hash
          if (gallery && url.gallery && gallery == url.gallery) {
            instance.currIndex = url.index - 1;
          }
        },
  
        "beforeShow.fb": function (e, instance, current, firstRun) {
          var gallery;
  
          if (!current || current.opts.hash === false) {
            return;
          }
  
          // Check if need to update window hash
          gallery = getGalleryID(instance);
  
          if (!gallery) {
            return;
          }
  
          // Variable containing last hash value set by fancyBox
          // It will be used to determine if fancyBox needs to close after hash change is detected
          instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");
  
          // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
          if (window.location.hash === "#" + instance.currentHash) {
            return;
          }
  
          if (firstRun && !instance.origHash) {
            instance.origHash = window.location.hash;
          }
  
          if (instance.hashTimer) {
            clearTimeout(instance.hashTimer);
          }
  
          // Update hash
          instance.hashTimer = setTimeout(function () {
            if ("replaceState" in window.history) {
              window.history[firstRun ? "pushState" : "replaceState"]({},
                document.title,
                window.location.pathname + window.location.search + "#" + instance.currentHash
              );
  
              if (firstRun) {
                instance.hasCreatedHistory = true;
              }
            } else {
              window.location.hash = instance.currentHash;
            }
  
            instance.hashTimer = null;
          }, 300);
        },
  
        "beforeClose.fb": function (e, instance, current) {
          if (!current || current.opts.hash === false) {
            return;
          }
  
          clearTimeout(instance.hashTimer);
  
          // Goto previous history entry
          if (instance.currentHash && instance.hasCreatedHistory) {
            window.history.back();
          } else if (instance.currentHash) {
            if ("replaceState" in window.history) {
              window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
            } else {
              window.location.hash = instance.origHash;
            }
          }
  
          instance.currentHash = null;
        }
      });
  
      // Check if need to start/close after url has changed
      $(window).on("hashchange.fb", function () {
        var url = parseUrl(),
          fb = null;
  
        // Find last fancyBox instance that has "hash"
        $.each(
          $(".fancybox-container")
          .get()
          .reverse(),
          function (index, value) {
            var tmp = $(value).data("FancyBox");
  
            if (tmp && tmp.currentHash) {
              fb = tmp;
              return false;
            }
          }
        );
  
        if (fb) {
          // Now, compare hash values
          if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
            fb.currentHash = null;
  
            fb.close();
          }
        } else if (url.gallery !== "") {
          triggerFromUrl(url);
        }
      });
  
      // Check current hash and trigger click event on matching element to start fancyBox, if needed
      setTimeout(function () {
        if (!$.fancybox.getInstance()) {
          triggerFromUrl(parseUrl());
        }
      }, 50);
    });
  })(window, document, jQuery);
  // ==========================================================================
  //
  // Wheel
  // Basic mouse weheel support for gallery navigation
  //
  // ==========================================================================
  (function (document, $) {
    "use strict";
  
    var prevTime = new Date().getTime();
  
    $(document).on({
      "onInit.fb": function (e, instance, current) {
        instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
          var current = instance.current,
            currTime = new Date().getTime();
  
          if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
            return;
          }
  
          e.preventDefault();
          e.stopPropagation();
  
          if (current.$slide.hasClass("fancybox-animated")) {
            return;
          }
  
          e = e.originalEvent || e;
  
          if (currTime - prevTime < 250) {
            return;
          }
  
          prevTime = currTime;
  
          instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
        });
      }
    });
  })(document, jQuery);
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Scrollbar=n():t.Scrollbar=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=58)}([function(t,n,e){var r=e(25)("wks"),o=e(16),i=e(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(13)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),o=e(3),i=e(11),u=e(6),c=e(10),s=function(t,n,e){var a,f,l,p,h=t&s.F,d=t&s.G,v=t&s.S,y=t&s.P,m=t&s.B,g=d?r:v?r[n]||(r[n]={}):(r[n]||{}).prototype,b=d?o:o[n]||(o[n]={}),x=b.prototype||(b.prototype={});for(a in d&&(e=n),e)l=((f=!h&&g&&void 0!==g[a])?g:e)[a],p=m&&f?c(l,r):y&&"function"==typeof l?c(Function.call,l):l,g&&u(g,a,l,t&s.U),b[a]!=l&&i(b,a,p),y&&x[a]!=l&&(x[a]=l)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var r=e(2),o=e(11),i=e(9),u=e(16)("src"),c=e(60),s=(""+c).split("toString");e(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:s.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n,e){var r=e(8),o=e(41),i=e(43),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(44);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(7),o=e(17);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n,e){var r=e(10),o=e(49),i=e(50),u=e(8),c=e(19),s=e(51),a={},f={};(n=t.exports=function(t,n,e,l,p){var h,d,v,y,m=p?function(){return t}:s(t),g=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=c(t.length);h>b;b++)if((y=n?g(u(d=t[b])[0],d[1]):g(t[b]))===a||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=o(v,g,d.value,n))===a||y===f)return y}).BREAK=a,n.RETURN=f},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(31),o=e(28);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(28);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(16)("meta"),o=e(1),i=e(9),u=e(7).f,c=0,s=Object.isExtensible||function(){return!0},a=!e(13)((function(){return s(Object.preventExtensions({}))})),f=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!s(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&s(t)&&!i(t,r)&&f(t),t}}},function(t,n,e){"use strict";var r=e(23),o={};o[e(0)("toStringTag")]="z",o+""!="[object z]"&&e(6)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,n,e){var r=e(24),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(3),o=e(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(40)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){"use strict";var r=e(61)(!0);e(29)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var r=e(40),o=e(5),i=e(6),u=e(11),c=e(14),s=e(62),a=e(33),f=e(68),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,d,v,y,m){s(e,n,d);var g,b,x,_=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",S="values"==v,E=!1,O=t.prototype,T=O[l]||O["@@iterator"]||v&&O[v],A=T||_(v),M=v?S?_("entries"):A:void 0,P="Array"==n&&O.entries||T;if(P&&(x=f(P.call(new t)))!==Object.prototype&&x.next&&(a(x,w,!0),r||"function"==typeof x[l]||u(x,l,h)),S&&T&&"values"!==T.name&&(E=!0,A=function(){return T.call(this)}),r&&!m||!p&&!E&&O[l]||u(O,l,A),c[n]=A,c[w]=h,v)if(g={values:S?A:_("values"),keys:y?A:_("keys"),entries:M},m)for(b in g)b in O||i(O,b,g[b]);else o(o.P+o.F*(p||E),n,g);return g}},function(t,n,e){var r=e(64),o=e(46);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(25)("keys"),o=e(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(7).f,o=e(9),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){for(var r=e(69),o=e(30),i=e(6),u=e(2),c=e(11),s=e(14),a=e(0),f=a("iterator"),l=a("toStringTag"),p=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(h),v=0;v<d.length;v++){var y,m=d[v],g=h[m],b=u[m],x=b&&b.prototype;if(x&&(x[f]||c(x,f,p),x[l]||c(x,l,m),s[m]=p,g))for(y in r)x[y]||i(x,y,r[y],!0)}},function(t,n,e){var r=e(6);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){"use strict";var r=e(2),o=e(5),i=e(6),u=e(35),c=e(21),s=e(15),a=e(36),f=e(1),l=e(13),p=e(52),h=e(33),d=e(73);t.exports=function(t,n,e,v,y,m){var g=r[t],b=g,x=y?"set":"add",_=b&&b.prototype,w={},S=function(t){var n=_[t];i(_,t,"delete"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(m||_.forEach&&!l((function(){(new b).entries().next()})))){var E=new b,O=E[x](m?{}:-0,1)!=E,T=l((function(){E.has(1)})),A=p((function(t){new b(t)})),M=!m&&l((function(){for(var t=new b,n=5;n--;)t[x](n,n);return!t.has(-0)}));A||((b=n((function(n,e){a(n,b,t);var r=d(new g,n,b);return null!=e&&s(e,y,r[x],r),r}))).prototype=_,_.constructor=b),(T||M)&&(S("delete"),S("has"),y&&S("get")),(M||O)&&S(x),m&&_.clear&&delete _.clear}else b=v.getConstructor(n,t,y,x),u(b.prototype,e),c.NEED=!0;return h(b,t),w[t]=b,o(o.G+o.W+o.F*(b!=g),w),m||v.setStrong(b,t,y),b}},function(t,n,e){"use strict";var r=e(5);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,e){"use strict";var r=e(5),o=e(44),i=e(10),u=e(15);t.exports=function(t){r(r.S,t,{from:function(t){var n,e,r,c,s=arguments[1];return o(this),(n=void 0!==s)&&o(s),null==t?new this:(e=[],n?(r=0,c=i(s,arguments[2],2),u(t,!1,(function(t){e.push(c(t,r++))}))):u(t,!1,e.push,e),new this(e))}})}},function(t,n){t.exports=!1},function(t,n,e){t.exports=!e(4)&&!e(13)((function(){return 7!=Object.defineProperty(e(42)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(1),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(8),o=e(63),i=e(46),u=e(32)("IE_PROTO"),c=function(){},s=function(){var t,n=e(42)("iframe"),r=i.length;for(n.style.display="none",e(67).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(7).f,o=e(45),i=e(35),u=e(10),c=e(36),s=e(15),a=e(29),f=e(47),l=e(72),p=e(4),h=e(21).fastKey,d=e(12),v=p?"_s":"size",y=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,a){var f=t((function(t,r){c(t,f,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[v]=0,null!=r&&s(r,e,t[a],t)}));return i(f.prototype,{clear:function(){for(var t=d(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=d(this,n),r=y(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[v]--}return!!r},forEach:function(t){d(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(d(this,n),t)}}),p&&r(f.prototype,"size",{get:function(){return d(this,n)[v]}}),f},def:function(t,n,e){var r,o,i=y(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[v]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,e){a(t,n,(function(t,e){this._t=d(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))}),e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){var r=e(8);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(14),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(23),o=e(0)("iterator"),i=e(14);t.exports=e(3).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(23),o=e(77);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},function(t,n,e){var r=e(10),o=e(31),i=e(20),u=e(19),c=e(87);t.exports=function(t,n){var e=1==t,s=2==t,a=3==t,f=4==t,l=6==t,p=5==t||l,h=n||c;return function(n,c,d){for(var v,y,m=i(n),g=o(m),b=r(c,d,3),x=u(g.length),_=0,w=e?h(n,x):s?h(n,0):void 0;x>_;_++)if((p||_ in g)&&(y=b(v=g[_],_,m),t))if(e)w[_]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return _;case 2:w.push(v)}else if(f)return!1;return l?-1:a||f?f:w}}},function(t,n,e){"use strict";var r=e(4),o=e(30),i=e(90),u=e(53),c=e(20),s=e(31),a=Object.assign;t.exports=!a||e(13)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r}))?function(t,n){for(var e=c(t),a=arguments.length,f=1,l=i.f,p=u.f;a>f;)for(var h,d=s(arguments[f++]),v=l?o(d).concat(l(d)):o(d),y=v.length,m=0;y>m;)h=v[m++],r&&!p.call(d,h)||(e[h]=d[h]);return e}:a},function(t,n,e){"use strict";(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.a=e}).call(this,e(99))},function(t,n,e){t.exports=e(100)},function(t,n,e){e(22),e(26),e(34),e(71),e(76),e(78),e(79),t.exports=e(3).Map},function(t,n,e){t.exports=e(25)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(27),o=e(28);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(45),o=e(17),i=e(33),u={};e(11)(u,e(0)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(7),o=e(8),i=e(30);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(18),i=e(65)(!1),u=e(32)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(18),o=e(19),i=e(66);t.exports=function(t){return function(n,e,u){var c,s=r(n),a=o(s.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(27),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(9),o=e(20),i=e(32)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(70),o=e(47),i=e(14),u=e(18);t.exports=e(29)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(0)("unscopables"),o=Array.prototype;null==o[r]&&e(11)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){"use strict";var r=e(48),o=e(12);t.exports=e(37)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},function(t,n,e){"use strict";var r=e(2),o=e(7),i=e(4),u=e(0)("species");t.exports=function(t){var n=r[t];i&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1),o=e(74).set;t.exports=function(t,n,e){var i,u=n.constructor;return u!==e&&"function"==typeof u&&(i=u.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},function(t,n,e){var r=e(1),o=e(8),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(10)(Function.call,e(75).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n,e){var r=e(53),o=e(17),i=e(18),u=e(43),c=e(9),s=e(41),a=Object.getOwnPropertyDescriptor;n.f=e(4)?a:function(t,n){if(t=i(t),n=u(n,!0),s)try{return a(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5);r(r.P+r.R,"Map",{toJSON:e(54)("Map")})},function(t,n,e){var r=e(15);t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},function(t,n,e){e(38)("Map")},function(t,n,e){e(39)("Map")},function(t,n,e){e(22),e(26),e(34),e(81),e(82),e(83),e(84),t.exports=e(3).Set},function(t,n,e){"use strict";var r=e(48),o=e(12);t.exports=e(37)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},function(t,n,e){var r=e(5);r(r.P+r.R,"Set",{toJSON:e(54)("Set")})},function(t,n,e){e(38)("Set")},function(t,n,e){e(39)("Set")},function(t,n,e){e(22),e(34),e(86),e(92),e(93),t.exports=e(3).WeakMap},function(t,n,e){"use strict";var r,o=e(2),i=e(55)(0),u=e(6),c=e(21),s=e(56),a=e(91),f=e(1),l=e(12),p=e(12),h=!o.ActiveXObject&&"ActiveXObject"in o,d=c.getWeak,v=Object.isExtensible,y=a.ufstore,m=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(f(t)){var n=d(t);return!0===n?y(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return a.def(l(this,"WeakMap"),t,n)}},b=t.exports=e(37)("WeakMap",m,g,a,!0,!0);p&&h&&(s((r=a.getConstructor(m,"WeakMap")).prototype,g),c.NEED=!0,i(["delete","has","get","set"],(function(t){var n=b.prototype,e=n[t];u(n,t,(function(n,o){if(f(n)&&!v(n)){this._f||(this._f=new r);var i=this._f[t](n,o);return"set"==t?this:i}return e.call(this,n,o)}))})))},function(t,n,e){var r=e(88);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(1),o=e(89),i=e(0)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var r=e(24);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){"use strict";var r=e(35),o=e(21).getWeak,i=e(8),u=e(1),c=e(36),s=e(15),a=e(55),f=e(9),l=e(12),p=a(5),h=a(6),d=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},m=function(t,n){return p(t.a,(function(t){return t[0]===n}))};y.prototype={get:function(t){var n=m(this,t);if(n)return n[1]},has:function(t){return!!m(this,t)},set:function(t,n){var e=m(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=h(this.a,(function(n){return n[0]===t}));return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,i){var a=t((function(t,r){c(t,a,n,"_i"),t._t=n,t._i=d++,t._l=void 0,null!=r&&s(r,e,t[i],t)}));return r(a.prototype,{delete:function(t){if(!u(t))return!1;var e=o(t);return!0===e?v(l(this,n)).delete(t):e&&f(e,this._i)&&delete e[this._i]},has:function(t){if(!u(t))return!1;var e=o(t);return!0===e?v(l(this,n)).has(t):e&&f(e,this._i)}}),a},def:function(t,n,e){var r=o(i(n),!0);return!0===r?v(t).set(n,e):r[t._i]=e,t},ufstore:v}},function(t,n,e){e(38)("WeakMap")},function(t,n,e){e(39)("WeakMap")},function(t,n,e){e(26),e(95),t.exports=e(3).Array.from},function(t,n,e){"use strict";var r=e(10),o=e(5),i=e(20),u=e(49),c=e(50),s=e(19),a=e(96),f=e(51);o(o.S+o.F*!e(52)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),h="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,y=void 0!==v,m=0,g=f(p);if(y&&(v=r(v,d>2?arguments[2]:void 0,2)),null==g||h==Array&&c(g))for(e=new h(n=s(p.length));n>m;m++)a(e,m,y?v(p[m],m):p[m]);else for(l=g.call(p),e=new h;!(o=l.next()).done;m++)a(e,m,y?u(l,v,[o.value,m],!0):o.value);return e.length=m,e}})},function(t,n,e){"use strict";var r=e(7),o=e(17);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){e(98),t.exports=e(3).Object.assign},function(t,n,e){var r=e(5);r(r.S+r.F,"Object",{assign:e(56)})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"keyboardHandler",(function(){return et})),e.d(r,"mouseHandler",(function(){return rt})),e.d(r,"resizeHandler",(function(){return ot})),e.d(r,"selectHandler",(function(){return it})),e.d(r,"touchHandler",(function(){return ut})),e.d(r,"wheelHandler",(function(){return ct}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},i=function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function u(t,n,e,r){var o,i=arguments.length,u=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,n,e,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(n,e,u):o(n,e))||u);return i>3&&u&&Object.defineProperty(n,e,u),u}e(59),e(80),e(85),e(94),e(97);var c=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},s=e(57),a="object"==typeof self&&self&&self.Object===Object&&self,f=s.a||a||Function("return this")(),l=f.Symbol,p=Object.prototype,h=p.hasOwnProperty,d=p.toString,v=l?l.toStringTag:void 0,y=Object.prototype.toString,m=l?l.toStringTag:void 0,g=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?function(t){var n=h.call(t,v),e=t[v];try{t[v]=void 0;var r=!0}catch(t){}var o=d.call(t);return r&&(n?t[v]=e:delete t[v]),o}(t):function(t){return y.call(t)}(t)},b=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,w=/^0o[0-7]+$/i,S=parseInt,E=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==g(t)}(t))return NaN;if(c(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=c(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(b,"");var e=_.test(t);return e||w.test(t)?S(t.slice(2),e?2:8):x.test(t)?NaN:+t},O=function(t,n,e){return void 0===e&&(e=n,n=void 0),void 0!==e&&(e=(e=E(e))==e?e:0),void 0!==n&&(n=(n=E(n))==n?n:0),function(t,n,e){return t==t&&(void 0!==e&&(t=t<=e?t:e),void 0!==n&&(t=t>=n?t:n)),t}(E(t),n,e)};function T(t,n){return void 0===t&&(t=-1/0),void 0===n&&(n=1/0),function(e,r){var o="_"+r;Object.defineProperty(e,r,{get:function(){return this[o]},set:function(e){Object.defineProperty(this,o,{value:O(e,t,n),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function A(t,n){var e="_"+n;Object.defineProperty(t,n,{get:function(){return this[e]},set:function(t){Object.defineProperty(this,e,{value:!!t,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}var M=function(){return f.Date.now()},P=Math.max,j=Math.min,k=function(t,n,e){var r,o,i,u,s,a,f=0,l=!1,p=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(n){var e=r,i=o;return r=o=void 0,f=n,u=t.apply(i,e)}function v(t){var e=t-a;return void 0===a||e>=n||e<0||p&&t-f>=i}function y(){var t=M();if(v(t))return m(t);s=setTimeout(y,function(t){var e=n-(t-a);return p?j(e,i-(t-f)):e}(t))}function m(t){return s=void 0,h&&r?d(t):(r=o=void 0,u)}function g(){var t=M(),e=v(t);if(r=arguments,o=this,a=t,e){if(void 0===s)return function(t){return f=t,s=setTimeout(y,n),l?d(t):u}(a);if(p)return clearTimeout(s),s=setTimeout(y,n),d(a)}return void 0===s&&(s=setTimeout(y,n)),u}return n=E(n)||0,c(e)&&(l=!!e.leading,i=(p="maxWait"in e)?P(E(e.maxWait)||0,n):i,h="trailing"in e?!!e.trailing:h),g.cancel=function(){void 0!==s&&clearTimeout(s),f=0,r=a=o=s=void 0},g.flush=function(){return void 0===s?u:m(M())},g};function D(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n,e,r){var o=r.value;return{get:function(){return this.hasOwnProperty(e)||Object.defineProperty(this,e,{value:k.apply(void 0,function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r}([o],t))}),this[e]}}}}var L,N=function(){function t(t){var n=this;void 0===t&&(t={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(t).forEach((function(e){n[e]=t[e]}))}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(t){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=t},enumerable:!0,configurable:!0}),u([T(0,1)],t.prototype,"damping",void 0),u([T(0,1/0)],t.prototype,"thumbMinSize",void 0),u([A],t.prototype,"renderByPixels",void 0),u([A],t.prototype,"alwaysShowTracks",void 0),u([A],t.prototype,"continuousScrolling",void 0),t}(),z=new WeakMap;function C(){if(void 0!==L)return L;var t=!1;try{var n=function(){},e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",n,e),window.removeEventListener("testPassive",n,e)}catch(t){}return L=!!t&&{passive:!1}}function R(t){var n=z.get(t)||[];return z.set(t,n),function(t,e,r){function o(t){t.defaultPrevented||r(t)}e.split(/\s+/g).forEach((function(e){n.push({elem:t,eventName:e,handler:o}),t.addEventListener(e,o,C())}))}}function F(t){var n=function(t){return t.touches?t.touches[t.touches.length-1]:t}(t);return{x:n.clientX,y:n.clientY}}function I(t,n){return void 0===n&&(n=[]),n.some((function(n){return t===n}))}var W=["webkit","moz","ms","o"],H=new RegExp("^-(?!(?:"+W.join("|")+")-)");function B(t,n){n=function(t){var n={};return Object.keys(t).forEach((function(e){if(H.test(e)){var r=t[e];e=e.replace(/^-/,""),n[e]=r,W.forEach((function(t){n["-"+t+"-"+e]=r}))}else n[e]=t[e]})),n}(n),Object.keys(n).forEach((function(e){var r=e.replace(/^-/,"").replace(/-([a-z])/g,(function(t,n){return n.toUpperCase()}));t.style[r]=n[e]}))}var G,X=function(){function t(t){this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=F(t)}return t.prototype.update=function(t){var n=this.velocity,e=this.updateTime,r=this.lastPosition,o=Date.now(),i=F(t),u={x:-(i.x-r.x),y:-(i.y-r.y)},c=o-e||16,s=u.x/c*16,a=u.y/c*16;n.x=.9*s+.1*n.x,n.y=.9*a+.1*n.y,this.delta=u,this.updateTime=o,this.lastPosition=i},t}(),V=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?i({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?i({},t.velocity):this._primitiveValue},t.prototype.track=function(t){var n=this,e=t.targetTouches;return Array.from(e).forEach((function(t){n._add(t)})),this._touchList},t.prototype.update=function(t){var n=this,e=t.touches,r=t.changedTouches;return Array.from(e).forEach((function(t){n._renew(t)})),this._setActiveID(r),this._touchList},t.prototype.release=function(t){var n=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach((function(t){n._delete(t)}))},t.prototype._add=function(t){if(!this._has(t)){var n=new X(t);this._touchList[t.identifier]=n}},t.prototype._renew=function(t){this._has(t)&&this._touchList[t.identifier].update(t)},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){return this._touchList[this._activeTouchID]},t}();!function(t){t.X="x",t.Y="y"}(G||(G={}));var U=function(){function t(t,n){void 0===n&&(n=0),this._direction=t,this._minSize=n,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+t}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.update=function(t,n,e){this.realSize=Math.min(n/e,1)*n,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=t/e*(n+(this.realSize-this.displaySize)),B(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case G.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case G.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),Y=function(){function t(t,n){void 0===n&&(n=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+t,this.thumb=new U(t,n),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(t,n,e){B(this.element,{display:e<=n?"none":"block"}),this.thumb.update(t,n,e)},t}(),q=function(){function t(t){this._scrollbar=t;var n=t.options.thumbMinSize;this.xAxis=new Y(G.X,n),this.yAxis=new Y(G.Y,n),this.xAxis.attachTo(t.containerEl),this.yAxis.attachTo(t.containerEl),t.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var t=this._scrollbar,n=t.size,e=t.offset;this.xAxis.update(e.x,n.container.width,n.content.width),this.yAxis.update(e.y,n.container.height,n.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},u([D(300)],t.prototype,"autoHideOnIdle",null),t}(),K=new WeakMap;function $(t){return Math.pow(t-1,3)+1}var J,Q,Z,tt=function(){function t(t,n){var e=this.constructor;this.scrollbar=t,this.name=e.pluginName,this.options=i(i({},e.defaultOptions),n)}return t.prototype.onInit=function(){},t.prototype.onDestory=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(t){},t.prototype.transformDelta=function(t,n){return i({},t)},t.pluginName="",t.defaultOptions={},t}(),nt={order:new Set,constructors:{}};function et(t){var n=R(t),e=t.containerEl;n(e,"keydown",(function(n){var r=document.activeElement;if((r===e||e.contains(r))&&!function(t){return!("INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName&&!t.isContentEditable)&&!t.disabled}(r)){var o=function(t,n){var e=t.size,r=t.limit,o=t.offset;switch(n){case J.TAB:return function(t){requestAnimationFrame((function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,onlyScrollIfNeeded:!0})}))}(t);case J.SPACE:return[0,200];case J.PAGE_UP:return[0,40-e.container.height];case J.PAGE_DOWN:return[0,e.container.height-40];case J.END:return[0,r.y-o.y];case J.HOME:return[0,-o.y];case J.LEFT:return[-40,0];case J.UP:return[0,-40];case J.RIGHT:return[40,0];case J.DOWN:return[0,40];default:return null}}(t,n.keyCode||n.which);if(o){var i=o[0],u=o[1];t.addTransformableMomentum(i,u,n,(function(e){e?n.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())}))}}}))}function rt(t){var n,e,r,o,i,u=R(t),c=t.containerEl,s=t.track,a=s.xAxis,f=s.yAxis;function l(n,e){var r=t.size;return n===Q.X?e/(r.container.width+(a.thumb.realSize-a.thumb.displaySize))*r.content.width:n===Q.Y?e/(r.container.height+(f.thumb.realSize-f.thumb.displaySize))*r.content.height:0}function p(t){return I(t,[a.element,a.thumb.element])?Q.X:I(t,[f.element,f.thumb.element])?Q.Y:void 0}u(c,"click",(function(n){if(!e&&I(n.target,[a.element,f.element])){var r=n.target,o=p(r),i=r.getBoundingClientRect(),u=F(n),c=t.offset,s=t.limit;if(o===Q.X){var h=u.x-i.left-a.thumb.displaySize/2;t.setMomentum(O(l(o,h)-c.x,-c.x,s.x-c.x),0)}o===Q.Y&&(h=u.y-i.top-f.thumb.displaySize/2,t.setMomentum(0,O(l(o,h)-c.y,-c.y,s.y-c.y)))}})),u(c,"mousedown",(function(e){if(I(e.target,[a.thumb.element,f.thumb.element])){n=!0;var u=e.target,s=F(e),l=u.getBoundingClientRect();o=p(u),r={x:s.x-l.left,y:s.y-l.top},i=c.getBoundingClientRect(),B(t.containerEl,{"-user-select":"none"})}})),u(window,"mousemove",(function(u){if(n){e=!0;var c=t.offset,s=F(u);if(o===Q.X){var a=s.x-r.x-i.left;t.setPosition(l(o,a),c.y)}o===Q.Y&&(a=s.y-r.y-i.top,t.setPosition(c.x,l(o,a)))}})),u(window,"mouseup blur",(function(){n=e=!1,B(t.containerEl,{"-user-select":""})}))}function ot(t){R(t)(window,"resize",k(t.update.bind(t),300))}function it(t){var n,e=R(t),r=t.containerEl,o=t.contentEl,i=t.offset,u=t.limit,c=!1;e(window,"mousemove",(function(e){c&&(cancelAnimationFrame(n),function e(r){var o=r.x,c=r.y;(o||c)&&(t.setMomentum(O(i.x+o,0,u.x)-i.x,O(i.y+c,0,u.y)-i.y),n=requestAnimationFrame((function(){e({x:o,y:c})})))}(function(t,n){var e=t.bounding,r=e.top,o=e.right,i=e.bottom,u=e.left,c=F(n),s=c.x,a=c.y,f={x:0,y:0};return 0===s&&0===a?f:(s>o-20?f.x=s-o+20:s<u+20&&(f.x=s-u-20),a>i-20?f.y=a-i+20:a<r+20&&(f.y=a-r-20),f.x*=2,f.y*=2,f)}(t,e)))})),e(o,"selectstart",(function(t){t.stopPropagation(),cancelAnimationFrame(n),c=!0})),e(window,"mouseup blur",(function(){cancelAnimationFrame(n),c=!1})),e(r,"scroll",(function(t){t.preventDefault(),r.scrollTop=r.scrollLeft=0}))}function ut(t){var n,e=/Android/.test(navigator.userAgent)?3:2,r=t.options.delegateTo||t.containerEl,o=new V,i=R(t),u=0;i(r,"touchstart",(function(e){o.track(e),t.setMomentum(0,0),0===u&&(n=t.options.damping,t.options.damping=Math.max(n,.5)),u++})),i(r,"touchmove",(function(n){if(!Z||Z===t){o.update(n);var e=o.getDelta(),r=e.x,i=e.y;t.addTransformableMomentum(r,i,n,(function(e){e&&(n.preventDefault(),Z=t)}))}})),i(r,"touchcancel touchend",(function(r){var i=o.getVelocity(),c={x:0,y:0};Object.keys(i).forEach((function(t){var r=i[t]/n;c[t]=Math.abs(r)<50?0:r*e})),t.addTransformableMomentum(c.x,c.y,r),0==--u&&(t.options.damping=n),o.release(r),Z=null}))}function ct(t){R(t)(t.options.delegateTo||t.containerEl,"onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel",(function(n){var e=function(t){if("deltaX"in t){var n=ft(t.deltaMode);return{x:t.deltaX/st.STANDARD*n,y:t.deltaY/st.STANDARD*n}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/st.OTHERS,y:t.wheelDeltaY/st.OTHERS}:{x:0,y:t.wheelDelta/st.OTHERS}}(n),r=e.x,o=e.y;t.addTransformableMomentum(r,o,n,(function(t){t&&n.preventDefault()}))}))}!function(t){t[t.TAB=9]="TAB",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN"}(J||(J={})),function(t){t[t.X=0]="X",t[t.Y=1]="Y"}(Q||(Q={}));var st={STANDARD:1,OTHERS:-3},at=[1,28,500],ft=function(t){return at[t]||at[0]},lt=new Map,pt=function(){function t(t,n){var e=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=t;var r=this.contentEl=document.createElement("div");this.options=new N(n),t.setAttribute("data-scrollbar","true"),t.setAttribute("tabindex","-1"),B(t,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(t.style.msTouchAction="none"),r.className="scroll-content",Array.from(t.childNodes).forEach((function(t){r.appendChild(t)})),t.appendChild(r),this.track=new q(this),this.size=this.getSize(),this._plugins=function(t,n){return Array.from(nt.order).filter((function(t){return!1!==n[t]})).map((function(e){var r=new(0,nt.constructors[e])(t,n[e]);return n[e]=r.options,r}))}(this,this.options.plugins);var o=t.scrollLeft,i=t.scrollTop;t.scrollLeft=t.scrollTop=0,this.setPosition(o,i,{withoutCallbacks:!0});var u=window,c=u.MutationObserver||u.WebKitMutationObserver||u.MozMutationObserver;"function"==typeof c&&(this._observer=new c((function(){e.update()})),this._observer.observe(r,{subtree:!0,childList:!0})),lt.set(t,this),requestAnimationFrame((function(){e._init()}))}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var t=this.containerEl.parentElement;t;){var n=lt.get(t);if(n)return n;t=t.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(t){this.setPosition(this.scrollLeft,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(t){this.setPosition(t,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){return function(t){var n=t.containerEl,e=t.contentEl;return{container:{width:n.clientWidth,height:n.clientHeight},content:{width:e.offsetWidth-e.clientWidth+e.scrollWidth,height:e.offsetHeight-e.clientHeight+e.scrollHeight}}}(this)},t.prototype.update=function(){!function(t){var n=t.getSize(),e={x:Math.max(n.content.width-n.container.width,0),y:Math.max(n.content.height-n.container.height,0)},r=t.containerEl.getBoundingClientRect(),o={top:Math.max(r.top,0),right:Math.min(r.right,window.innerWidth),bottom:Math.min(r.bottom,window.innerHeight),left:Math.max(r.left,0)};t.size=n,t.limit=e,t.bounding=o,t.track.update(),t.setPosition()}(this),this._plugins.forEach((function(t){t.onUpdate()}))},t.prototype.isVisible=function(t){return function(t,n){var e=t.bounding,r=n.getBoundingClientRect(),o=Math.max(e.top,r.top),i=Math.max(e.left,r.left),u=Math.min(e.right,r.right);return o<Math.min(e.bottom,r.bottom)&&i<u}(this,t)},t.prototype.setPosition=function(t,n,e){var r=this;void 0===t&&(t=this.offset.x),void 0===n&&(n=this.offset.y),void 0===e&&(e={});var o=function(t,n,e){var r=t.options,o=t.offset,u=t.limit,c=t.track,s=t.contentEl;return r.renderByPixels&&(n=Math.round(n),e=Math.round(e)),n=O(n,0,u.x),e=O(e,0,u.y),n!==o.x&&c.xAxis.show(),e!==o.y&&c.yAxis.show(),r.alwaysShowTracks||c.autoHideOnIdle(),n===o.x&&e===o.y?null:(o.x=n,o.y=e,B(s,{"-transform":"translate3d("+-n+"px, "+-e+"px, 0)"}),c.update(),{offset:i({},o),limit:i({},u)})}(this,t,n);o&&!e.withoutCallbacks&&this._listeners.forEach((function(t){t.call(r,o)}))},t.prototype.scrollTo=function(t,n,e,r){void 0===t&&(t=this.offset.x),void 0===n&&(n=this.offset.y),void 0===e&&(e=0),void 0===r&&(r={}),function(t,n,e,r,o){void 0===r&&(r=0);var i=void 0===o?{}:o,u=i.easing,c=void 0===u?$:u,s=i.callback,a=t.options,f=t.offset,l=t.limit;a.renderByPixels&&(n=Math.round(n),e=Math.round(e));var p=f.x,h=f.y,d=O(n,0,l.x)-p,v=O(e,0,l.y)-h,y=Date.now();cancelAnimationFrame(K.get(t)),function n(){var e=Date.now()-y,o=r?c(Math.min(e/r,1)):1;if(t.setPosition(p+d*o,h+v*o),e>=r)"function"==typeof s&&s.call(t);else{var i=requestAnimationFrame(n);K.set(t,i)}}()}(this,t,n,e,r)},t.prototype.scrollIntoView=function(t,n){void 0===n&&(n={}),function(t,n,e){var r=void 0===e?{}:e,o=r.alignToTop,i=void 0===o||o,u=r.onlyScrollIfNeeded,c=void 0!==u&&u,s=r.offsetTop,a=void 0===s?0:s,f=r.offsetLeft,l=void 0===f?0:f,p=r.offsetBottom,h=void 0===p?0:p,d=t.containerEl,v=t.bounding,y=t.offset,m=t.limit;if(n&&d.contains(n)){var g=n.getBoundingClientRect();if(!c||!t.isVisible(n)){var b=i?g.top-v.top-a:g.bottom-v.bottom+h;t.setMomentum(g.left-v.left-l,O(b,-y.y,m.y-y.y))}}}(this,t,n)},t.prototype.addListener=function(t){if("function"!=typeof t)throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(t)},t.prototype.removeListener=function(t){this._listeners.delete(t)},t.prototype.addTransformableMomentum=function(t,n,e,r){this._updateDebounced();var o=this._plugins.reduce((function(t,n){return n.transformDelta(t,e)||t}),{x:t,y:n}),i=!this._shouldPropagateMomentum(o.x,o.y);i&&this.addMomentum(o.x,o.y),r&&r.call(this,i)},t.prototype.addMomentum=function(t,n){this.setMomentum(this._momentum.x+t,this._momentum.y+n)},t.prototype.setMomentum=function(t,n){0===this.limit.x&&(t=0),0===this.limit.y&&(n=0),this.options.renderByPixels&&(t=Math.round(t),n=Math.round(n)),this._momentum.x=t,this._momentum.y=n},t.prototype.updatePluginOptions=function(t,n){this._plugins.forEach((function(e){e.name===t&&Object.assign(e.options,n)}))},t.prototype.destroy=function(){var t=this.containerEl,n=this.contentEl;!function(t){var n=z.get(t);n&&(n.forEach((function(t){var n=t.elem,e=t.eventName,r=t.handler;n.removeEventListener(e,r,C())})),z.delete(t))}(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),lt.delete(this.containerEl);for(var e=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);e.forEach((function(n){t.appendChild(n)})),B(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach((function(t){t.onDestory()})),this._plugins.length=0},t.prototype._init=function(){var t=this;this.update(),Object.keys(r).forEach((function(n){r[n](t)})),this._plugins.forEach((function(t){t.onInit()})),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(t,n){void 0===t&&(t=0),void 0===n&&(n=0);var e=this.options,r=this.offset,o=this.limit;if(!e.continuousScrolling)return!1;0===o.x&&0===o.y&&this._updateDebounced();var i=O(t+r.x,0,o.x),u=O(n+r.y,0,o.y),c=!0;return(c=(c=c&&i===r.x)&&u===r.y)&&(r.x===o.x||0===r.x||r.y===o.y||0===r.y)},t.prototype._render=function(){var t=this._momentum;if(t.x||t.y){var n=this._nextTick("x"),e=this._nextTick("y");t.x=n.momentum,t.y=e.momentum,this.setPosition(n.position,e.position)}var r=i({},this._momentum);this._plugins.forEach((function(t){t.onRender(r)})),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(t){var n=this.options,e=this.offset,r=this._momentum,o=e[t],i=r[t];if(Math.abs(i)<=.1)return{momentum:0,position:o+i};var u=i*(1-n.damping);return n.renderByPixels&&(u|=0),{momentum:u,position:o+i-u}},u([D(100,{leading:!0})],t.prototype,"_updateDebounced",null),t}(),ht="\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",dt="smooth-scrollbar-style",vt=!1;function yt(){if(!vt&&"undefined"!=typeof window){var t=document.createElement("style");t.id=dt,t.textContent=ht,document.head&&document.head.appendChild(t),vt=!0}}e.d(n,"ScrollbarPlugin",(function(){return tt}));
/*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
var mt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}(n,t),n.init=function(t,n){if(!t||1!==t.nodeType)throw new TypeError("expect element to be DOM Element, but got "+t);return yt(),lt.has(t)?lt.get(t):new pt(t,n)},n.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),(function(e){return n.init(e,t)}))},n.has=function(t){return lt.has(t)},n.get=function(t){return lt.get(t)},n.getAll=function(){return Array.from(lt.values())},n.destroy=function(t){var n=lt.get(t);n&&n.destroy()},n.destroyAll=function(){lt.forEach((function(t){t.destroy()}))},n.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];t.forEach((function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");nt.order.add(n),nt.constructors[n]=t}))}.apply(void 0,t)},n.attachStyle=function(){return yt()},n.detachStyle=function(){return function(){if(vt&&"undefined"!=typeof window){var t=document.getElementById(dt);t&&t.parentNode&&(t.parentNode.removeChild(t),vt=!1)}}()},n.version="8.4.1",n.ScrollbarPlugin=tt,n}(pt);n.default=mt}]).default}));
