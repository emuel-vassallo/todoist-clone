(()=>{"use strict";const e=()=>document.querySelectorAll(".tooltip"),t=()=>document.querySelectorAll(".sidebar-button"),s=()=>{const e=t();for(const t of e)t.classList.remove("selected")},o=e=>{return document.title=`${t=e,t.charAt(0).toUpperCase()+t.slice(1)}: Todoist`;var t},n=(()=>{const e=()=>document.querySelector(".editor"),s=()=>{const t=e();for(;t.firstChild;)t.removeChild(t.lastChild)},n=t=>{const s=e(),o=(e=>{const t=document.createElement("h2");return t.innerText=e,t.classList.add("tab-title"),t})(t);s.append(o)},c=()=>{e(),console.log("Inbox loaded")},i=()=>{e(),console.log("Today loaded")},l=()=>{e(),console.log("Upcoming loaded")},r=t=>{const s=e();s.classList.contains(`.${t}`)||s.classList.add(t)},d=()=>{const t=e(),s=["inbox","today","upcoming"];for(const e of s)t.classList.remove(e)},a=e=>{({inbox:c,today:i,upcoming:l})[e]?.()};return{changeEditorContent:()=>{const e=t();for(const t of e)t.addEventListener("click",(()=>{const e=t.dataset.tabName;o(e),s(),d(),r(e),a(e),n(e)}))}}})();(()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".sidebar"),s=document.querySelector(".menu-button > span"),o=document.querySelector(".editor");e.addEventListener("click",(()=>{t.classList.toggle("is-visible"),o.classList.toggle("is-sidebar-visible"),t.classList.contains("is-visible")?s.textContent="Close menu":s.textContent="Open menu"}))})(),(()=>{const t=(()=>{const t=e(),s=(()=>{const t=e();let s=[];for(const e of t){const t=e.parentElement;s=[...s,t]}return s})(),o={};for(let e=0;e<t.length;e++){const n=t[e],c=s[e];o[e]={tooltip:n,parentButton:c}}return o})(),s=Object.keys(t).length;for(let e=0;e<s;e++){const s=t[e].tooltip,o=t[e].parentButton;o.addEventListener("mousedown",(()=>{s.classList.remove("visible"),s.classList.contains("clicked")||s.classList.add("clicked")})),o.addEventListener("mouseover",(()=>{if(s.classList.contains("clicked")&&s.classList.containes("visible"))return s.classList.remove("visible"),void console.log("hide!");s.classList.add("visible")})),o.addEventListener("mouseout",(()=>{s.classList.contains("clicked")&&s.classList.remove("clicked"),s.classList.remove("visible")}))}})(),(()=>{const e=document.querySelector(".sidebar-projects-button"),t=document.querySelector(".sidebar-projects-arrow-icon");e.addEventListener("click",(()=>{t.classList.toggle("expanded")}))})(),(()=>{const e=t();for(const t of e)t.addEventListener("click",(()=>{s(),t.classList.add("selected")}))})(),n.changeEditorContent()})();