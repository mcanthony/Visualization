(function(e,t){typeof define=="function"&&define.amd?define([],t):e.common_Utility=t()})(this,function(){function e(e,t,n,r,i){var s=/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,o=/(^[ ]*|[ ]*$)/g,u=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,a=/^0x[0-9a-f]+$/i,f=/^0/,l=function(e){return!i&&(""+e).toLowerCase()||""+e},c=l(r?e[r]:e).replace(o,"")||"",h=l(r?t[r]:t).replace(o,"")||"",p=c.replace(s,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),d=h.replace(s,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),v=parseInt(c.match(a),16)||p.length!==1&&c.match(u)&&Date.parse(c),m=parseInt(h.match(a),16)||v&&h.match(u)&&Date.parse(h)||null,g,y;if(m){if(v<m)return n==="ascending"?-1:1;if(v>m)return n==="ascending"?1:-1}for(var b=0,w=Math.max(p.length,d.length);b<w;b++){g=!(p[b]||"").match(f)&&parseFloat(p[b])||p[b]||0,y=!(d[b]||"").match(f)&&parseFloat(d[b])||d[b]||0;if(isNaN(g)!==isNaN(y))return isNaN(g)?1:-1;typeof g!=typeof y&&(g+="",y+="");if(g<y)return n==="ascending"?-1:1;if(g>y)return n==="ascending"?1:-1}return 0}return{naturalSort:function(t,n,r,i){return t.slice(0).sort(function(t,s){return e(t,s,n,r,i)})},urlParams:function(){var e=window.location.search.split("?")[1],t={};return e&&e.split("&").forEach(function(e,n){var r=e.split("=");switch(r.length){case 1:t[decodeURIComponent(r[0])]=undefined;break;case 2:t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]);break;default:throw"Invalid URL Param:  "+e}}),t}}});