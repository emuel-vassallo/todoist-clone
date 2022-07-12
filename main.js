(()=>{"use strict";function e(e,t,n){this.id=e,this.name=t,this.tasks=n}const t=(()=>{const t=()=>null===localStorage.getItem("projects")?[]:JSON.parse(localStorage.getItem("projects")),n=()=>JSON.parse(localStorage.getItem("defaultProjects")),r=e=>localStorage.setItem("projects",JSON.stringify(e));return localStorage.getItem("defaultProjects")||(localStorage.setItem("defaultProjects",JSON.stringify([])),localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([]))),(()=>{let t=n();if(t.length>0)return;const r=["Inbox","Today","Upcoming"];for(let n=0;n<r.length;n++){const a=new e(n,r[n],[]);t=[...t,a]}var a;a=t,localStorage.setItem("defaultProjects",JSON.stringify(a))})(),{addProject:e=>{let n=t();const a=JSON.parse(JSON.stringify(e));n=[...n,a],r(n)},getNewProjectId:()=>Object.keys(t()).length,getProjects:t,getDefaultProjects:n,removeProject:e=>{let n=t();n.splice(e,1),r(n)},updateProjectIds:()=>{const e=t();for(let t=0;t<e.length;t++)e[t].id=t;r(e)}}})();function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){return n(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function a(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e){if(n(1,arguments),!r(e)&&"number"!=typeof e)return!1;var t=a(e);return!isNaN(Number(t))}var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var c,u={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,c=a.width?String(a.width):e.defaultWidth;r=e.values[c]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function m(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,s=o[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(c)?g(c,(function(e){return e.test(s)})):h(c,(function(e){return e.test(s)}));i=e.valueCallback?e.valueCallback(u):u,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(s.length);return{value:i,rest:d}}}function h(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function g(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const f={code:"en-US",formatDistance:function(e,t,n){var r,a=i[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(e,t,n,r){return d[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(c={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(c.matchPattern);if(!n)return null;var r=n[0],a=e.match(c.parsePattern);if(!a)return null;var o=c.valueCallback?c.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:m({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:m({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:m({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){n(2,arguments);var r=a(e).getTime(),o=p(t);return new Date(r+o)}function b(e,t){n(2,arguments);var r=p(t);return w(e,-r)}var v=864e5;function y(e){n(1,arguments);var t=1,r=a(e),o=r.getUTCDay(),i=(o<t?7:0)+o-t;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function S(e){n(1,arguments);var t=a(e),r=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=y(o),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var c=y(s);return t.getTime()>=i.getTime()?r+1:t.getTime()>=c.getTime()?r:r-1}function T(e){n(1,arguments);var t=S(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var a=y(r);return a}var C=6048e5;function k(e,t){n(1,arguments);var r=t||{},o=r.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:p(i),c=null==r.weekStartsOn?s:p(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=a(e),d=u.getUTCDay(),l=(d<c?7:0)+d-c;return u.setUTCDate(u.getUTCDate()-l),u.setUTCHours(0,0,0,0),u}function M(e,t){n(1,arguments);var r=a(e),o=r.getUTCFullYear(),i=t||{},s=i.locale,c=s&&s.options&&s.options.firstWeekContainsDate,u=null==c?1:p(c),d=null==i.firstWeekContainsDate?u:p(i.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(o+1,0,d),l.setUTCHours(0,0,0,0);var m=k(l,t),h=new Date(0);h.setUTCFullYear(o,0,d),h.setUTCHours(0,0,0,0);var g=k(h,t);return r.getTime()>=m.getTime()?o+1:r.getTime()>=g.getTime()?o:o-1}function L(e,t){n(1,arguments);var r=t||{},a=r.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:p(o),s=null==r.firstWeekContainsDate?i:p(r.firstWeekContainsDate),c=M(e,t),u=new Date(0);u.setUTCFullYear(c,0,s),u.setUTCHours(0,0,0,0);var d=k(u,t);return d}var x=6048e5;function j(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const E=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return j("yy"===t?r%100:r,t.length)},P=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):j(n+1,2)},q=function(e,t){return j(e.getUTCDate(),t.length)},D=function(e,t){return j(e.getUTCHours()%12||12,t.length)},N=function(e,t){return j(e.getUTCHours(),t.length)},U=function(e,t){return j(e.getUTCMinutes(),t.length)},O=function(e,t){return j(e.getUTCSeconds(),t.length)},W=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return j(Math.floor(r*Math.pow(10,n-3)),t.length)};function A(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+j(o,2)}function Y(e,t){return e%60==0?(e>0?"-":"+")+j(Math.abs(e)/60,2):z(e,t)}function z(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+j(Math.floor(a/60),2)+n+j(a%60,2)}const I={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return E(e,t)},Y:function(e,t,n,r){var a=M(e,r),o=a>0?a:1-a;return"YY"===t?j(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):j(o,t.length)},R:function(e,t){return j(S(e),t.length)},u:function(e,t){return j(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return j(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return j(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return P(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return j(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,r,o){var i=function(e,t){n(1,arguments);var r=a(e),o=k(r,t).getTime()-L(r,t).getTime();return Math.round(o/x)+1}(e,o);return"wo"===t?r.ordinalNumber(i,{unit:"week"}):j(i,t.length)},I:function(e,t,r){var o=function(e){n(1,arguments);var t=a(e),r=y(t).getTime()-T(t).getTime();return Math.round(r/C)+1}(e);return"Io"===t?r.ordinalNumber(o,{unit:"week"}):j(o,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):q(e,t)},D:function(e,t,r){var o=function(e){n(1,arguments);var t=a(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var o=t.getTime(),i=r-o;return Math.floor(i/v)+1}(e);return"Do"===t?r.ordinalNumber(o,{unit:"dayOfYear"}):j(o,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return j(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return j(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return j(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return D(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):N(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):U(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):O(e,t)},S:function(e,t){return W(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Y(a);case"XXXX":case"XX":return z(a);default:return z(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Y(a);case"xxxx":case"xx":return z(a);default:return z(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+A(a,":");default:return"GMT"+z(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+A(a,":");default:return"GMT"+z(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return j(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return j((r._originalDate||e).getTime(),t.length)}};function H(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function B(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var F={p:B,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return H(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",H(a,t)).replace("{{time}}",B(o,t))}};const G=F;function Q(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var J=["D","DD"],V=["YY","YYYY"];function X(e){return-1!==J.indexOf(e)}function R(e){return-1!==V.indexOf(e)}function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,ee=/''/g,te=/[a-zA-Z]/;function ne(e,t,r){n(2,arguments);var i=String(t),s=r||{},c=s.locale||f,u=c.options&&c.options.firstWeekContainsDate,d=null==u?1:p(u),l=null==s.firstWeekContainsDate?d:p(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=c.options&&c.options.weekStartsOn,h=null==m?0:p(m),g=null==s.weekStartsOn?h:p(s.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var w=a(e);if(!o(w))throw new RangeError("Invalid time value");var v=Q(w),y=b(w,v),S={firstWeekContainsDate:l,weekStartsOn:g,locale:c,_originalDate:w},T=i.match(K).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,G[t])(e,c.formatLong,S):e})).join("").match($).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return re(n);var a=I[r];if(a)return!s.useAdditionalWeekYearTokens&&R(n)&&_(n,t,e),!s.useAdditionalDayOfYearTokens&&X(n)&&_(n,t,e),a(y,n,c.localize,S);if(r.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}function re(e){return e.match(Z)[1].replace(ee,"'")}const ae=(()=>{const e=document.querySelector(".add-task-button"),n=document.querySelector(".add-task-modal"),r=document.querySelector(".add-task-modal-overlay "),a=document.querySelector(".add-task-form"),o=document.querySelector(".form-inputs > input[name='task_name']"),i=document.querySelector(".due-date-picker"),s=document.querySelector(".project-selector"),c=document.querySelector(".priority-selector"),u=document.querySelector(".selected-priority > svg"),d=document.querySelector(".priority-dropdown-menu"),l=document.querySelectorAll(".priority-dropdown-menu > li"),m=document.querySelector(".add-task-modal .cancel-button"),h=document.querySelector(".add-task-submit-button"),g=()=>n.classList.contains("visible"),f=(e,t)=>{const n=document.createElement("option");return n.value=e,n.text=e,n.dataset.id=t,n.classList.add("project-selection-option"),n},p=()=>{d.classList.toggle("visible"),c.classList.toggle("selected")},w=()=>{for(const e of l)e.classList.remove("active-priority")},b=e=>{const t=document.querySelector(".selected-priority > svg");t.parentNode.replaceChild(e,t)},v=()=>h.disabled=!0,y=()=>{n.classList.toggle("visible"),r.classList.toggle("visible"),a.reset(),i.valueAsDate=new Date,o.focus(),v(),d.classList.remove("visible"),c.classList.remove("selected"),(()=>{const e=se.getSelectedButton().dataset.projectId,t=document.querySelectorAll(".project-selection-option"),n=document.querySelector(".project-selector option[value='inbox']");(t[e]||n).selected="selected"})()},S=()=>{i.value&&o.value?h.disabled=!1:v()};i.min=ne(new Date,"yyyy-MM-dd"),n.addEventListener("transitionend",(()=>{g()||(b(u),(()=>{const e=l[3];w(),e.classList.add("active-priority")})())})),e.addEventListener("click",(()=>y())),m.addEventListener("click",(()=>y())),window.addEventListener("keydown",(e=>{"Escape"===e.key&&g()&&y()})),c.addEventListener("click",(()=>p())),r.addEventListener("click",(e=>{const t=e.target.offsetParent;t&&t!==n&&t!==r&&t!==d&&y()})),o.addEventListener("input",(()=>S())),i.addEventListener("input",(()=>S()));for(const e of l)e.addEventListener("click",(()=>{w(),e.classList.add("active-priority");const t=e.firstElementChild.cloneNode(!0);b(t),p()}));return(()=>{const e=t.getProjects();for(const t of e){const e=f(t.name,t.id);s.appendChild(e)}})(),{toggleModal:y,addProjectSelectorOption:e=>{const n=t.getProjects(),r=Object.keys(n).length,a=f(e,r);s.appendChild(a)},removeProjectSelectorOption:e=>{const t=document.querySelector(`.project-selection-option[data-id="${e}"]`);document.body.contains(t)&&t.remove()},updateProjectSelectorIds:()=>{const e=document.querySelectorAll(".project-selection-option");for(let t=0;t<e.length;t++)e[t].dataset.id=t}}})(),oe=(()=>{const e=document.querySelector(".editor"),t=document.querySelector(".home-button"),n=document.querySelector(".sidebar-button-today"),r=()=>new Date,a=e=>ne(e,"E d MMM"),o=()=>{const e=document.querySelector(".current-date-title"),t=r(),n=a(t);e.textContent=n},i=()=>{const t=document.createElement("button"),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=document.createElement("p");r.setAttribute("d","M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"),r.setAttribute("fill","currentColor"),r.setAttribute("fill-rule","evenodd"),t.classList.add("editor-add-task-button"),n.classList.add("editor-add-task-plus-icon"),a.classList.add("editor-add-task-text"),a.textContent="Add task",n.appendChild(r),t.append(n,a),e.append(t)},s=()=>{document.querySelector(".editor-add-task-button").addEventListener("click",(()=>ae.toggleModal()))},c=(t,n)=>{se.changeTabTitle(n),(()=>{for(;e.firstChild;)e.removeChild(e.lastChild)})(),(()=>{const t=["inbox","today","upcoming"];for(const n of t)e.classList.remove(n)})(),se.removeSelectedButtonClass(),se.addSelectedClassToButton(t),(()=>{const t=(()=>{const e=document.createElement("div");return e.classList.add("tab-heading"),e})();e.append(t)})(),(e=>{const t=document.querySelector(".tab-heading"),n=(e=>{const t=document.createElement("h2");return t.innerText=e,t.classList.add("tab-title"),t})(e);t.append(n)})(n);const c=t.dataset.projectId;"Today"===n&&!c&&((()=>{const e=document.querySelector(".tab-heading"),t=(()=>{const e=document.createElement("p"),t=r();return e.innerText=a(t),e.classList.add("current-date-title"),e})();e.append(t)})(),o()),i(),s(),(t=>{const n=(e=>{let t;t=e.dataset.projectId?"Project":e.dataset.tabName;const n=document.createElement("div"),r=document.createElement("img"),a=document.createElement("div"),o=document.createElement("h4"),i=document.createElement("p");n.classList.add("empty-state-container"),r.classList.add("empty-state-image"),a.classList.add("empty-state-text"),o.classList.add("empty-state-heading"),i.classList.add("empty-state-body"),r.src={Inbox:"components/images/inbox-empty-state.png",Today:"components/images/today-empty-state.png",Upcoming:"components/images/upcoming-empty-state.png",Project:"components/images/project-empty-state.png"}[t];const s={Inbox:"All clear",Today:"You're all done for the week! #TodoistZero",Upcoming:"Get a clear view of upcoming tasks",Project:"Keep your tasks organized in projects"}[t],c={Inbox:"Looks like everything's organized in the right place.",Today:"Enjoy the rest of your day.",Upcoming:"All upcoming tasks will show up here.",Project:"Group your tasks by goal or area of your life. Drag and drop to rearrange tasks or create sub-tasks."}[t];return o.textContent=s,i.textContent=c,a.append(o,i),n.append(r,a),n})(t);e.append(n)})(t)};return t.addEventListener("click",(()=>c(n,n.dataset.tabName))),(()=>{const e=document.querySelectorAll(".sidebar-button");for(const t of e)t.addEventListener("click",(()=>c(t,t.dataset.tabName)))})(),o(),i(),s(),{addSidebarVisibleClass:()=>e.classList.add("is-sidebar-visible"),removeSidebarVisibleClass:()=>e.classList.remove("is-sidebar-visible"),updateCurrentDateTitle:o,changeContent:c}})(),ie=(()=>{const e=document.querySelector(".menu-button > span"),t=()=>document.querySelectorAll(".tooltip");return(()=>{const e=(()=>{const e=t(),n=(()=>{const e=t();let n=[];for(const t of e){const e=t.parentElement;n=[...n,e]}return n})(),r={};for(let t=0;t<e.length;t++){const a=e[t],o=n[t];r[t]={tooltip:a,parentButton:o}}return r})(),n=Object.keys(e).length;for(let t=0;t<n;t++){const n=e[t].tooltip,r=e[t].parentButton;r.addEventListener("mousedown",(()=>{n.classList.remove("visible"),n.classList.contains("clicked")&&n.classList.add("clicked")})),r.addEventListener("mouseover",(()=>{n.classList.contains("clicked")&&n.classList.containes("visible")?n.classList.remove("visible"):n.classList.add("visible")})),r.addEventListener("mouseout",(()=>{n.classList.contains("clicked")&&n.classList.remove("clicked"),n.classList.remove("visible")}))}})(),{changeMenuTooltipTextOpen:()=>e.textContent="Open menu",changeMenuTooltipTextClose:()=>e.textContent="Close menu"}})(),se=(()=>{const e=document.querySelector(".sidebar"),t=document.querySelector(".sidebar-overlay"),n=document.querySelector(".editor"),r=document.querySelector(".projects-list-container"),a=()=>{e.classList.add("is-visible"),oe.addSidebarVisibleClass(),ie.changeMenuTooltipTextClose()};return(()=>{const t=document.querySelectorAll(".menu-button");for(const r of t)r.addEventListener("click",(()=>{e.classList.toggle("is-visible"),n.classList.toggle("is-sidebar-visible"),document.querySelector(".sidebar-overlay").classList.toggle("is-visible"),e.classList.contains("is-visible")?ie.changeMenuTooltipTextClose():ie.changeMenuTooltipTextOpen()}))})(),(()=>{const e=document.querySelector(".sidebar-projects-button"),t=document.querySelector(".sidebar-projects-arrow-icon");e.addEventListener("click",(()=>{t.classList.toggle("expanded"),r.classList.toggle("expanded")}))})(),document.querySelector(".sidebar-today-icon tspan").textContent=("0"+(new Date).getDate()).slice(-2),window.innerWidth>750&&a(),window.addEventListener("resize",(()=>{const n=e.classList.contains("is-visible"),r=t.classList.contains("is-visible"),o=window.innerWidth;r||(n&&o<=750?(e.classList.remove("is-visible"),oe.removeSidebarVisibleClass(),ie.changeMenuTooltipTextOpen()):!n&&o>750&&a())})),{changeTabTitle:e=>document.title=`${e}: Todoist`,addSelectedClassToButton:e=>e.classList.add("selected"),removeSelectedButtonClass:()=>{const e=document.querySelectorAll(".sidebar-button");for(const t of e)t.classList.contains("selected")&&t.classList.remove("selected")},getSelectedButton:()=>document.querySelector(".sidebar-button.selected"),selectDefaultTab:()=>{const e=document.querySelector(".sidebar-button-inbox"),t=e.dataset.tabName;oe.changeContent(e,t)}}})(),ce=(()=>{const e=document.querySelector(".sidebar-button-today"),n=e=>{const n=((e,t)=>{const n=document.createElement("button"),r=document.createElement("span"),a=(()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","svg"),t=document.createElementNS("http://www.w3.org/2000/svg","path"),n=document.createElementNS("http://www.w3.org/2000/svg","path"),r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=document.createElementNS("http://www.w3.org/2000/svg","g"),o=document.createElementNS("http://www.w3.org/2000/svg","rect");return e.classList.add("delete-project-icon"),a.setAttribute("fill","none"),a.setAttribute("fill-rule","evenodd"),t.setAttribute("d","M0 0h24v24H0z"),o.setAttribute("x","5"),o.setAttribute("y","6"),o.setAttribute("fill","currentColor"),o.setAttribute("rx",".5"),n.setAttribute("fill","currentColor"),n.setAttribute("d","M10 9h1v8h-1V9zm3 0h1v8h-1V9z"),r.setAttribute("stroke","currentColor"),r.setAttribute("d","M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"),a.append(t,o,n,r),e.append(a),e})();return n.classList.add("project-button","sidebar-button","tab-link"),r.classList.add("project-name"),n.dataset.tabName=t,r.textContent=t,n.append(e,r,a),n})((()=>{const e=document.createElementNS("http://www.w3.org/2000/svg","svg"),t=document.createElementNS("http://www.w3.org/2000/svg","path");return e.classList.add("project-icon"),e.setAttribute("viewBox","0 0 24 24"),t.setAttribute("d","M12 7a5 5 0 110 10 5 5 0 010-10z"),t.setAttribute("fill","currentColor"),e.appendChild(t),e})(),e);(e=>{const t=document.querySelector("#projects-list"),n=(e=>{const t=document.createElement("li");return t.appendChild(e),t})(e);t.appendChild(n)})(n),(e=>{const n=e.dataset.tabName,r=e.childNodes[2];e.addEventListener("click",(t=>t.target===e&&oe.changeContent(t.target,n))),r.addEventListener("click",(()=>{(e=>{e.parentNode.remove()})(e);const n=e.dataset.projectId;ae.updateProjectSelectorIds(),(()=>{const e=document.querySelectorAll(".project-button");for(let t=0;t<e.length;t++)e[t].dataset.projectId=t})(),t.removeProject(n),t.updateProjectIds(),ae.removeProjectSelectorOption(n),se.selectDefaultTab()}))})(n),(e=>{const t=document.querySelectorAll(".project-button").length-1;e.dataset.projectId=t})(n),oe.changeContent(n,e)};return(()=>{const e=t.getProjects();for(let t=0;t<e.length;t++){const r=e[t].name;n(r)}})(),oe.changeContent(e,e.dataset.tabName),{addProjectButton:n}})();(()=>{const n=document.querySelector(".add-project-button"),r=document.querySelector(".add-project-modal"),a=document.querySelector("#add-project-form"),o=document.querySelector("#project_name"),i=document.querySelector(".add-project-modal .cancel-button"),s=document.querySelector(".add-project-submit-button"),c=document.querySelector(".add-project-modal-overlay "),u=()=>s.disabled=!0,d=()=>{c.classList.toggle("visible"),r.classList.toggle("visible"),a.reset(),u(),o.focus()},l=()=>{const n=o.value,r=new e(t.getNewProjectId(),n,[]);t.addProject(r),ce.addProjectButton(n),ae.addProjectSelectorOption(n),d()};n.addEventListener("mouseup",(()=>d())),i.addEventListener("click",(()=>d())),o.addEventListener("input",(()=>{o.value?s.disabled=!1:u()})),s.addEventListener("click",(()=>l())),a.addEventListener("submit",(e=>{e.preventDefault(),l()}))})()})();