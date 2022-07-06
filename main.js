(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){return t(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function n(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(r){if(t(1,arguments),!e(r)&&"number"!=typeof r)return!1;var a=n(r);return!isNaN(Number(a))}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var i,s={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function d(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?m(u,(function(t){return t.test(s)})):l(u,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(s.length);return{value:i,rest:d}}}function l(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function m(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const h={code:"en-US",formatDistance:function(t,e,n){var r,o=a[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:s,formatRelative:function(t,e,n,r){return u[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(i.matchPattern);if(!n)return null;var r=n[0],a=t.match(i.parsePattern);if(!a)return null;var o=i.valueCallback?i.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(r.length);return{value:o,rest:s}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(e,r){t(2,arguments);var a=n(e).getTime(),o=f(r);return new Date(a+o)}function v(e,n){t(2,arguments);var r=f(n);return g(e,-r)}var w=864e5;function b(e){t(1,arguments);var r=1,a=n(e),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function y(e){t(1,arguments);var r=n(e),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=b(o),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var u=b(s);return r.getTime()>=i.getTime()?a+1:r.getTime()>=u.getTime()?a:a-1}function p(e){t(1,arguments);var n=y(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=b(r);return a}var T=6048e5;function C(e,r){t(1,arguments);var a=r||{},o=a.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:f(i),u=null==a.weekStartsOn?s:f(a.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=n(e),d=c.getUTCDay(),l=(d<u?7:0)+d-u;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function S(e,r){t(1,arguments);var a=n(e),o=a.getUTCFullYear(),i=r||{},s=i.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:f(u),d=null==i.firstWeekContainsDate?c:f(i.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(o+1,0,d),l.setUTCHours(0,0,0,0);var m=C(l,r),h=new Date(0);h.setUTCFullYear(o,0,d),h.setUTCHours(0,0,0,0);var g=C(h,r);return a.getTime()>=m.getTime()?o+1:a.getTime()>=g.getTime()?o:o-1}function M(e,n){t(1,arguments);var r=n||{},a=r.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:f(o),s=null==r.firstWeekContainsDate?i:f(r.firstWeekContainsDate),u=S(e,n),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var d=C(c,n);return d}var k=6048e5;function L(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const x=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return L("yy"===e?r%100:r,e.length)},E=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):L(n+1,2)},D=function(t,e){return L(t.getUTCDate(),e.length)},q=function(t,e){return L(t.getUTCHours()%12||12,e.length)},P=function(t,e){return L(t.getUTCHours(),e.length)},U=function(t,e){return L(t.getUTCMinutes(),e.length)},W=function(t,e){return L(t.getUTCSeconds(),e.length)},j=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return L(Math.floor(r*Math.pow(10,n-3)),e.length)};function N(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+L(o,2)}function Y(t,e){return t%60==0?(t>0?"-":"+")+L(Math.abs(t)/60,2):O(t,e)}function O(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+L(Math.floor(a/60),2)+n+L(a%60,2)}const A={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return x(t,e)},Y:function(t,e,n,r){var a=S(t,r),o=a>0?a:1-a;return"YY"===e?L(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):L(o,e.length)},R:function(t,e){return L(y(t),e.length)},u:function(t,e){return L(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return L(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return L(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return E(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return L(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,r,a,o){var i=function(e,r){t(1,arguments);var a=n(e),o=C(a,r).getTime()-M(a,r).getTime();return Math.round(o/k)+1}(e,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):L(i,r.length)},I:function(e,r,a){var o=function(e){t(1,arguments);var r=n(e),a=b(r).getTime()-p(r).getTime();return Math.round(a/T)+1}(e);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):L(o,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):D(t,e)},D:function(e,r,a){var o=function(e){t(1,arguments);var r=n(e),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/w)+1}(e);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):L(o,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return L(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return L(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return L(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return q(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):P(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):L(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):L(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):U(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):W(t,e)},S:function(t,e){return j(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return Y(a);case"XXXX":case"XX":return O(a);default:return O(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return Y(a);case"xxxx":case"xx":return O(a);default:return O(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+N(a,":");default:return"GMT"+O(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+N(a,":");default:return"GMT"+O(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return L(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return L((r._originalDate||t).getTime(),e.length)}};function B(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function F(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var H={p:F,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return B(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",B(a,e)).replace("{{time}}",F(o,e))}};const z=H;function Q(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var G=["D","DD"],X=["YY","YYYY"];function R(t){return-1!==G.indexOf(t)}function J(t){return-1!==X.indexOf(t)}function I(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$=/^'([^]*?)'?$/,K=/''/g,Z=/[a-zA-Z]/;function tt(e,a,o){t(2,arguments);var i=String(a),s=o||{},u=s.locale||h,c=u.options&&u.options.firstWeekContainsDate,d=null==c?1:f(c),l=null==s.firstWeekContainsDate?d:f(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=u.options&&u.options.weekStartsOn,g=null==m?0:f(m),w=null==s.weekStartsOn?g:f(s.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var b=n(e);if(!r(b))throw new RangeError("Invalid time value");var y=Q(b),p=v(b,y),T={firstWeekContainsDate:l,weekStartsOn:w,locale:u,_originalDate:b},C=i.match(V).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,z[e])(t,u.formatLong,T):t})).join("").match(_).map((function(t){if("''"===t)return"'";var n=t[0];if("'"===n)return et(t);var r=A[n];if(r)return!s.useAdditionalWeekYearTokens&&J(t)&&I(t,a,e),!s.useAdditionalDayOfYearTokens&&R(t)&&I(t,a,e),r(p,t,u.localize,T);if(n.match(Z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return t})).join("");return C}function et(t){return t.match($)[1].replace(K,"'")}const nt=(()=>{const t=document.querySelector(".add-task-button"),e=document.querySelector(".add-task-modal"),n=document.querySelector(".add-task-form"),r=document.querySelector(".form-inputs > input[name='task_name']"),a=document.querySelector(".add-task-modal .cancel-button"),o=document.querySelector(".due-date-picker"),i=document.querySelector(".priority-selector"),s=document.querySelector(".selected-priority > svg"),u=document.querySelector(".priority-dropdown-menu"),c=document.querySelectorAll(".priority-dropdown-menu > li"),d=document.querySelector(".add-task-submit-button"),l=document.querySelector(".add-task-modal-overlay "),m=()=>e.classList.contains("visible"),h=()=>{u.classList.toggle("visible"),i.classList.toggle("selected")},f=()=>{for(const t of c)t.classList.remove("active-priority")},g=t=>{const e=document.querySelector(".selected-priority > svg");e.parentNode.replaceChild(t,e)},v=()=>d.disabled=!0,w=()=>{e.classList.toggle("visible"),l.classList.toggle("visible"),n.reset(),o.valueAsDate=new Date,r.focus(),v(),u.classList.remove("visible"),i.classList.remove("selected"),e.addEventListener("transitionend",(()=>{m()||(g(s),(()=>{const t=c[3];f(),t.classList.add("active-priority")})())}))},b=()=>{o.value&&r.value?d.disabled=!1:v()};o.min=tt(new Date,"yyyy-MM-dd"),t.addEventListener("click",(()=>w())),a.addEventListener("click",(()=>w())),window.addEventListener("keydown",(t=>{"Escape"===t.key&&m()&&w()})),i.addEventListener("click",(()=>h())),l.addEventListener("click",(t=>{const n=t.target.offsetParent;!n||n===e||n===l||n===u||w()})),r.addEventListener("input",(()=>b())),o.addEventListener("input",(()=>b()));for(const t of c)t.addEventListener("click",(()=>{f(),t.classList.add("active-priority");const e=t.firstElementChild.cloneNode(!0);g(e),h()}));return{toggleModal:w}})(),rt=(()=>{const t=document.querySelector(".editor"),e=()=>new Date,n=t=>tt(t,"E d MMM"),r=()=>{const t=document.querySelector(".current-date-title"),r=e(),a=n(r);t.textContent=a},a=()=>{},o=()=>{(()=>{const t=document.querySelector(".tab-heading"),r=(()=>{const t=document.createElement("p"),r=e();return t.innerText=n(r),t.classList.add("current-date-title"),t})();t.append(r)})(),r()},i=()=>{},s=()=>{const e=document.createElement("button"),n=document.createElement("span"),r=document.createElement("p");e.classList.add("editor-add-task-button"),n.classList.add("editor-add-task-plus-icon","material-symbols-rounded"),r.classList.add("editor-add-task-text"),n.textContent="add",r.textContent="Add task",e.append(n,r),t.append(e)},u=()=>{const t=document.querySelector(".editor-add-task-button"),e=document.querySelector(".editor-add-task-plus-icon");t.addEventListener("mouseover",(()=>e.textContent="add_circle")),t.addEventListener("mouseout",(()=>e.textContent="add"))},c=()=>{document.querySelector(".editor-add-task-button").addEventListener("click",(()=>nt.toggleModal()))},d=e=>{ot.changeTabTitle(e),(()=>{for(;t.firstChild;)t.removeChild(t.lastChild)})(),(()=>{const e=["inbox","today","upcoming"];for(const n of e)t.classList.remove(n)})(),ot.removeSelectedButtonClass(),ot.addSelectedClassToButton(e),(e=>{t.classList.contains(`.${e}`)||t.classList.add(e)})(e),(()=>{const e=(()=>{const t=document.createElement("div");return t.classList.add("tab-heading"),t})();t.append(e)})(),(t=>{const e=document.querySelector(".tab-heading"),n=(t=>{const e=document.createElement("h2");return e.innerText=t,e.classList.add("tab-title"),e})(t);e.append(n)})(e),(t=>{({inbox:a,today:o,upcoming:i})[t]?.()})(e),s(),u(),c()};return(()=>{const t=document.querySelectorAll(".tab-link");for(const e of t)e.addEventListener("click",(()=>{const t=e.dataset.tabName;d(t)}))})(),r(),s(),u(),c(),{addSidebarVisibleClass:()=>t.classList.add("is-sidebar-visible"),removeSidebarVisibleClass:()=>t.classList.remove("is-sidebar-visible"),updateCurrentDateTitle:r,changeContent:d}})(),at=(()=>{const t=document.querySelector(".menu-button > span"),e=()=>document.querySelectorAll(".tooltip");return(()=>{const t=(()=>{const t=e(),n=(()=>{const t=e();let n=[];for(const e of t){const t=e.parentElement;n=[...n,t]}return n})(),r={};for(let e=0;e<t.length;e++){const a=t[e],o=n[e];r[e]={tooltip:a,parentButton:o}}return r})(),n=Object.keys(t).length;for(let e=0;e<n;e++){const n=t[e].tooltip,r=t[e].parentButton;r.addEventListener("mousedown",(()=>{n.classList.remove("visible"),n.classList.contains("clicked")||n.classList.add("clicked")})),r.addEventListener("mouseover",(()=>{n.classList.contains("clicked")&&n.classList.containes("visible")?n.classList.remove("visible"):n.classList.add("visible")})),r.addEventListener("mouseout",(()=>{n.classList.contains("clicked")&&n.classList.remove("clicked"),n.classList.remove("visible")}))}})(),{changeMenuTooltipTextOpen:()=>t.textContent="Open menu",changeMenuTooltipTextClose:()=>t.textContent="Close menu"}})(),ot=(()=>{const t=document.querySelector(".sidebar"),e=document.querySelector(".sidebar-overlay"),n=document.querySelectorAll(".sidebar-button"),r=document.querySelector(".editor"),a=()=>{t.classList.add("is-visible"),rt.addSidebarVisibleClass(),at.changeMenuTooltipTextClose()};return(()=>{const e=document.querySelectorAll(".menu-button");for(const n of e)n.addEventListener("click",(()=>{t.classList.toggle("is-visible"),r.classList.toggle("is-sidebar-visible"),document.querySelector(".sidebar-overlay").classList.toggle("is-visible"),t.classList.contains("is-visible")?at.changeMenuTooltipTextClose():at.changeMenuTooltipTextOpen()}))})(),(()=>{const t=document.querySelector(".sidebar-projects-button"),e=document.querySelector(".sidebar-projects-arrow-icon");t.addEventListener("click",(()=>{e.classList.toggle("expanded")}))})(),document.querySelector(".sidebar-today-icon tspan").textContent=("0"+(new Date).getDate()).slice(-2),window.innerWidth>750&&a(),window.addEventListener("resize",(()=>{const n=t.classList.contains("is-visible"),r=e.classList.contains("is-visible"),o=window.innerWidth;r||(n&&o<=750?(t.classList.remove("is-visible"),rt.removeSidebarVisibleClass(),at.changeMenuTooltipTextOpen()):!n&&o>750&&a())})),{changeTabTitle:t=>document.title=`${t}: Todoist`,removeSelectedButtonClass:()=>{for(const t of n)t.classList.remove("selected")},addSelectedClassToButton:t=>{for(const e of n)e.dataset.tabName===t&&e.classList.add("selected")}}})(),it=(()=>{const t=()=>JSON.parse(localStorage.getItem("projects"));return localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify({})),{getProjectsList:t,addProjectNameToList:e=>{const n=t();n[Object.keys(n).length]=e,localStorage.setItem("projects",JSON.stringify(n))}}})(),st=(()=>{const t=t=>{const e=((t,e)=>{const n=document.createElement("button"),r=document.createElement("span");return n.classList.add("project-button","sidebar-button","tab-link"),r.classList.add("project-name"),n.dataset.tabName=e,r.textContent=e,n.append(t,r),n})((()=>{const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("project-icon"),t.setAttribute("viewBox","0 0 24 24");const e=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("d","M12 7a5 5 0 110 10 5 5 0 010-10z"),e.setAttribute("fill","currentColor"),t.appendChild(e),t})(),t);(t=>{const e=document.querySelector("#projects-list"),n=(t=>{const e=document.createElement("li");return e.appendChild(t),e})(t);e.appendChild(n)})(e),(t=>{const e=t.dataset.tabName;t.addEventListener("click",(()=>rt.changeContent(e)))})(e)};return(()=>{const e=it.getProjectsList();for(const n in e)t(e[n])})(),{addProjectButton:t}})();(()=>{const t=document.querySelector(".add-project-button"),e=document.querySelector(".add-project-modal"),n=document.querySelector("#project_name"),r=document.querySelector(".add-project-modal .cancel-button"),a=document.querySelector(".add-project-submit-button"),o=document.querySelector(".add-project-modal-overlay "),i=()=>a.disabled=!0,s=()=>{e.classList.toggle("visible"),o.classList.toggle("visible"),n.value="",i()},u=()=>n.value;t.addEventListener("click",(()=>s())),r.addEventListener("click",(()=>s())),n.addEventListener("input",(()=>{n.value?a.disabled=!1:i()})),a.addEventListener("click",(()=>{const t=u();st.addProjectButton(t),it.addProjectNameToList(t),s()})),document.addEventListener("keyup",(t=>{if("Enter"!==t.code)return;const e=u();st.addProjectButton(e),it.addProjectNameToList(e),s()}))})()})();