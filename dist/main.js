(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){return e(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function n(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(r){if(e(1,arguments),!t(r)&&"number"!=typeof r)return!1;var a=n(r);return!isNaN(Number(a))}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var o,s={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;r=e.values[u]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function d(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,s=i[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(u)?m(u,(function(e){return e.test(s)})):l(u,(function(e){return e.test(s)}));o=e.valueCallback?e.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=t.slice(s.length);return{value:o,rest:d}}}function l(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function m(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const h={code:"en-US",formatDistance:function(e,t,n){var r,i=a[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:s,formatRelative:function(e,t,n,r){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(o.matchPattern);if(!n)return null;var r=n[0],a=e.match(o.parsePattern);if(!a)return null;var i=o.valueCallback?o.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;var s=e.slice(r.length);return{value:i,rest:s}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(t,r){e(2,arguments);var a=n(t).getTime(),i=f(r);return new Date(a+i)}function w(t,n){e(2,arguments);var r=f(n);return g(t,-r)}var v=864e5;function b(t){e(1,arguments);var r=1,a=n(t),i=a.getUTCDay(),o=(i<r?7:0)+i-r;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function y(t){e(1,arguments);var r=n(t),a=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=b(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var u=b(s);return r.getTime()>=o.getTime()?a+1:r.getTime()>=u.getTime()?a:a-1}function p(t){e(1,arguments);var n=y(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=b(r);return a}var T=6048e5;function C(t,r){e(1,arguments);var a=r||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:f(o),u=null==a.weekStartsOn?s:f(a.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=n(t),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function M(t,r){e(1,arguments);var a=n(t),i=a.getUTCFullYear(),o=r||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:f(u),d=null==o.firstWeekContainsDate?c:f(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var m=C(l,r),h=new Date(0);h.setUTCFullYear(i,0,d),h.setUTCHours(0,0,0,0);var g=C(h,r);return a.getTime()>=m.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function S(t,n){e(1,arguments);var r=n||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:f(i),s=null==r.firstWeekContainsDate?o:f(r.firstWeekContainsDate),u=M(t,n),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=C(c,n);return d}var k=6048e5;function x(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const L=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return x("yy"===t?r%100:r,t.length)},D=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):x(n+1,2)},E=function(e,t){return x(e.getUTCDate(),t.length)},q=function(e,t){return x(e.getUTCHours()%12||12,t.length)},U=function(e,t){return x(e.getUTCHours(),t.length)},P=function(e,t){return x(e.getUTCMinutes(),t.length)},W=function(e,t){return x(e.getUTCSeconds(),t.length)},Y=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return x(Math.floor(r*Math.pow(10,n-3)),t.length)};function N(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+x(i,2)}function O(e,t){return e%60==0?(e>0?"-":"+")+x(Math.abs(e)/60,2):j(e,t)}function j(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+x(Math.floor(a/60),2)+n+x(a%60,2)}const A={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return L(e,t)},Y:function(e,t,n,r){var a=M(e,r),i=a>0?a:1-a;return"YY"===t?x(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):x(i,t.length)},R:function(e,t){return x(y(e),t.length)},u:function(e,t){return x(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return x(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return D(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,r,a,i){var o=function(t,r){e(1,arguments);var a=n(t),i=C(a,r).getTime()-S(a,r).getTime();return Math.round(i/k)+1}(t,i);return"wo"===r?a.ordinalNumber(o,{unit:"week"}):x(o,r.length)},I:function(t,r,a){var i=function(t){e(1,arguments);var r=n(t),a=b(r).getTime()-p(r).getTime();return Math.round(a/T)+1}(t);return"Io"===r?a.ordinalNumber(i,{unit:"week"}):x(i,r.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):E(e,t)},D:function(t,r,a){var i=function(t){e(1,arguments);var r=n(t),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var i=r.getTime(),o=a-i;return Math.floor(o/v)+1}(t);return"Do"===r?a.ordinalNumber(i,{unit:"dayOfYear"}):x(i,r.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return x(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return x(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return x(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return q(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):U(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):P(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):W(e,t)},S:function(e,t){return Y(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return O(a);case"XXXX":case"XX":return j(a);default:return j(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return O(a);case"xxxx":case"xx":return j(a);default:return j(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+N(a,":");default:return"GMT"+j(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+N(a,":");default:return"GMT"+j(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return x(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return x((r._originalDate||e).getTime(),t.length)}};function F(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function H(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var z={p:H,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return F(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",F(a,t)).replace("{{time}}",H(i,t))}};const B=z;function Q(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var G=["D","DD"],X=["YY","YYYY"];function R(e){return-1!==G.indexOf(e)}function J(e){return-1!==X.indexOf(e)}function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$=/^'([^]*?)'?$/,K=/''/g,Z=/[a-zA-Z]/;function ee(t,a,i){e(2,arguments);var o=String(a),s=i||{},u=s.locale||h,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:f(c),l=null==s.firstWeekContainsDate?d:f(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=u.options&&u.options.weekStartsOn,g=null==m?0:f(m),v=null==s.weekStartsOn?g:f(s.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var b=n(t);if(!r(b))throw new RangeError("Invalid time value");var y=Q(b),p=w(b,y),T={firstWeekContainsDate:l,weekStartsOn:v,locale:u,_originalDate:b},C=o.match(I).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,B[t])(e,u.formatLong,T):e})).join("").match(V).map((function(e){if("''"===e)return"'";var n=e[0];if("'"===n)return te(e);var r=A[n];if(r)return!s.useAdditionalWeekYearTokens&&J(e)&&_(e,a,t),!s.useAdditionalDayOfYearTokens&&R(e)&&_(e,a,t),r(p,e,u.localize,T);if(n.match(Z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return e})).join("");return C}function te(e){return e.match($)[1].replace(K,"'")}const ne=(()=>{const e=document.querySelector(".editor"),t=document.querySelectorAll(".tab-link"),n=()=>{for(;e.firstChild;)e.removeChild(e.lastChild)},r=()=>{const t=(()=>{const e=document.createElement("div");return e.classList.add("tab-heading"),e})();e.append(t)},a=e=>{const t=document.querySelector(".tab-heading"),n=(e=>{const t=document.createElement("h2");return t.innerText=e,t.classList.add("tab-title"),t})(e);t.append(n)},i=()=>new Date,o=e=>ee(e,"E d MMM"),s=()=>{const e=document.querySelector(".current-date-title"),t=i(),n=o(t);e.textContent=n},u=()=>{},c=()=>{(()=>{const e=document.querySelector(".tab-heading"),t=(()=>{const e=document.createElement("p"),t=i();return e.innerText=o(t),e.classList.add("current-date-title"),e})();e.append(t)})(),s()},d=()=>{},l=()=>{const t=document.createElement("button"),n=document.createElement("span"),r=document.createElement("p");t.classList.add("editor-add-task-button"),n.classList.add("editor-add-task-plus-icon","material-symbols-rounded"),r.classList.add("editor-add-task-text"),n.textContent="add",r.textContent="Add task",t.append(n,r),e.append(t)},m=t=>{e.classList.contains(`.${t}`)||e.classList.add(t)},h=()=>{const t=["inbox","today","upcoming"];for(const n of t)e.classList.remove(n)},f=e=>{({inbox:u,today:c,upcoming:d})[e]?.()};return(()=>{for(const e of t)e.addEventListener("click",(()=>{const t=e.dataset.tabName;ae.changeTabTitle(t),n(),h(),ae.removeSelectedButtonClass(),ae.addSelectedClassToButton(t),m(t),r(),a(t),f(t),l()}))})(),s(),l(),(()=>{const e=document.querySelector(".editor-add-task-button"),t=document.querySelector(".editor-add-task-plus-icon");e.addEventListener("mouseover",(()=>t.textContent="add_circle")),e.addEventListener("mouseout",(()=>t.textContent="add"))})(),{addSidebarVisibleClass:()=>e.classList.add("is-sidebar-visible"),removeSidebarVisibleClass:()=>e.classList.remove("is-sidebar-visible"),updateCurrentDateTitle:s}})(),re=(()=>{const e=document.querySelector(".menu-button > span"),t=()=>document.querySelectorAll(".tooltip");return(()=>{const e=(()=>{const e=t(),n=(()=>{const e=t();let n=[];for(const t of e){const e=t.parentElement;n=[...n,e]}return n})(),r={};for(let t=0;t<e.length;t++){const a=e[t],i=n[t];r[t]={tooltip:a,parentButton:i}}return r})(),n=Object.keys(e).length;for(let t=0;t<n;t++){const n=e[t].tooltip,r=e[t].parentButton;r.addEventListener("mousedown",(()=>{n.classList.remove("visible"),n.classList.contains("clicked")||n.classList.add("clicked")})),r.addEventListener("mouseover",(()=>{if(n.classList.contains("clicked")&&n.classList.containes("visible"))return n.classList.remove("visible"),void console.log("hide!");n.classList.add("visible")})),r.addEventListener("mouseout",(()=>{n.classList.contains("clicked")&&n.classList.remove("clicked"),n.classList.remove("visible")}))}})(),{changeMenuTooltipTextOpen:()=>e.textContent="Open menu",changeMenuTooltipTextClose:()=>e.textContent="Close menu"}})(),ae=(()=>{const e=document.querySelector(".sidebar"),t=document.querySelector(".sidebar-overlay"),n=document.querySelectorAll(".sidebar-button"),r=document.querySelector(".editor"),a=()=>{e.classList.add("is-visible"),ne.addSidebarVisibleClass(),re.changeMenuTooltipTextClose()};return(()=>{const t=document.querySelectorAll(".menu-button");for(const n of t)n.addEventListener("click",(()=>{e.classList.toggle("is-visible"),r.classList.toggle("is-sidebar-visible"),document.querySelector(".sidebar-overlay").classList.toggle("is-visible"),e.classList.contains("is-visible")?re.changeMenuTooltipTextClose():re.changeMenuTooltipTextOpen()}))})(),(()=>{const e=document.querySelector(".sidebar-projects-button"),t=document.querySelector(".sidebar-projects-arrow-icon");e.addEventListener("click",(()=>{t.classList.toggle("expanded")}))})(),document.querySelector(".sidebar-today-icon tspan").textContent=("0"+(new Date).getDate()).slice(-2),window.innerWidth>750&&a(),window.addEventListener("resize",(()=>{const n=e.classList.contains("is-visible"),r=t.classList.contains("is-visible"),i=window.innerWidth;r||(n&&i<=750?(e.classList.remove("is-visible"),ne.removeSidebarVisibleClass(),re.changeMenuTooltipTextOpen()):!n&&i>750&&a())})),{changeTabTitle:e=>{return document.title=`${t=e,t.charAt(0).toUpperCase()+t.slice(1)}: Todoist`;var t},removeSelectedButtonClass:()=>{for(const e of n)e.classList.remove("selected")},addSelectedClassToButton:e=>{for(const t of n)t.dataset.tabName===e&&t.classList.add("selected")}}})();(()=>{const e=document.querySelector(".add-task-button"),t=document.querySelector(".add-task-modal"),n=document.querySelector(".add-task-form"),r=document.querySelector(".form-inputs > input[name='task_name']"),a=document.querySelector(".cancel-button"),i=document.querySelector(".due-date-picker"),o=document.querySelector(".priority-selector"),s=document.querySelector(".selected-priority > svg"),u=document.querySelector(".priority-dropdown-menu"),c=document.querySelectorAll(".priority-dropdown-menu > li"),d=document.querySelector(".add-task-submit-button"),l=document.querySelector(".add-task-modal-overlay "),m=()=>t.classList.contains("visible"),h=()=>{u.classList.toggle("visible"),o.classList.toggle("selected")},f=()=>{for(const e of c)e.classList.remove("active-priority")},g=e=>{const t=document.querySelector(".selected-priority > svg");t.parentNode.replaceChild(e,t)},w=()=>d.disabled=!0,v=()=>{t.classList.toggle("visible"),l.classList.toggle("visible"),n.reset(),i.valueAsDate=new Date,r.focus(),w(),u.classList.remove("visible"),o.classList.remove("selected"),t.addEventListener("transitionend",(()=>{m()||(g(s),(()=>{const e=c[3];f(),e.classList.add("active-priority")})())}))};i.min=ee(new Date,"yyyy-MM-dd"),e.addEventListener("click",(()=>v())),a.addEventListener("click",(()=>v())),window.addEventListener("keydown",(e=>{"Escape"===e.key&&m()&&v()})),o.addEventListener("click",(()=>h())),l.addEventListener("click",(e=>{const n=e.target.offsetParent;!n||n===t||n===l||n===u||v()})),r.addEventListener("input",(()=>{r.value.length>0?d.disabled=!1:w()}));for(const e of c)e.addEventListener("click",(()=>{f(),e.classList.add("active-priority");const t=e.firstElementChild.cloneNode(!0);g(t),h()}))})()})();