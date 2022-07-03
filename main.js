(()=>{"use strict";const e=(()=>{const e=document.querySelector(".editor"),t=document.querySelectorAll(".tab-link"),o=()=>{for(;e.firstChild;)e.removeChild(e.lastChild)},i=t=>{const s=(e=>{const t=document.createElement("h2");return t.innerText=e,t.classList.add("tab-title"),t})(t);e.append(s)},n=()=>{},c=()=>{},l=()=>{},a=t=>{e.classList.contains(`.${t}`)||e.classList.add(t)},d=()=>{const t=["inbox","today","upcoming"];for(const s of t)e.classList.remove(s)},r=e=>{({inbox:n,today:c,upcoming:l})[e]?.()};return(()=>{for(const e of t)e.addEventListener("click",(()=>{const t=e.dataset.tabName;s.changeTabTitle(t),o(),d(),s.removeSelectedButtonClass(),s.addSelectedClassToButton(t),a(t),r(t),i(t)}))})(),{addSidebarVisibleClass:()=>e.classList.add("is-sidebar-visible"),removeSidebarVisibleClass:()=>e.classList.remove("is-sidebar-visible")}})(),t=(()=>{const e=document.querySelector(".menu-button > span"),t=()=>document.querySelectorAll(".tooltip");return(()=>{const e=(()=>{const e=t(),s=(()=>{const e=t();let s=[];for(const t of e){const e=t.parentElement;s=[...s,e]}return s})(),o={};for(let t=0;t<e.length;t++){const i=e[t],n=s[t];o[t]={tooltip:i,parentButton:n}}return o})(),s=Object.keys(e).length;for(let t=0;t<s;t++){const s=e[t].tooltip,o=e[t].parentButton;o.addEventListener("mousedown",(()=>{s.classList.remove("visible"),s.classList.contains("clicked")||s.classList.add("clicked")})),o.addEventListener("mouseover",(()=>{if(s.classList.contains("clicked")&&s.classList.containes("visible"))return s.classList.remove("visible"),void console.log("hide!");s.classList.add("visible")})),o.addEventListener("mouseout",(()=>{s.classList.contains("clicked")&&s.classList.remove("clicked"),s.classList.remove("visible")}))}})(),{changeMenuTooltipTextOpen:()=>e.textContent="Open menu",changeMenuTooltipTextClose:()=>e.textContent="Close menu"}})(),s=(()=>{const s=document.querySelector(".sidebar"),o=document.querySelector(".sidebar-overlay"),i=document.querySelectorAll(".sidebar-button"),n=document.querySelector(".editor"),c=()=>{s.classList.add("is-visible"),e.addSidebarVisibleClass(),t.changeMenuTooltipTextClose()};return(()=>{const e=document.querySelectorAll(".menu-button");for(const o of e)o.addEventListener("click",(()=>{s.classList.toggle("is-visible"),n.classList.toggle("is-sidebar-visible"),document.querySelector(".sidebar-overlay").classList.toggle("is-visible"),s.classList.contains("is-visible")?t.changeMenuTooltipTextClose():t.changeMenuTooltipTextOpen()}))})(),(()=>{const e=document.querySelector(".sidebar-projects-button"),t=document.querySelector(".sidebar-projects-arrow-icon");e.addEventListener("click",(()=>{t.classList.toggle("expanded")}))})(),document.querySelector(".sidebar-today-icon tspan").textContent=("0"+(new Date).getDate()).slice(-2),window.innerWidth>750&&c(),window.addEventListener("resize",(()=>{const i=s.classList.contains("is-visible"),n=o.classList.contains("is-visible"),l=window.innerWidth;n||(i&&l<=750?(s.classList.remove("is-visible"),e.removeSidebarVisibleClass(),t.changeMenuTooltipTextOpen()):!i&&l>750&&c())})),{changeTabTitle:e=>{return document.title=`${t=e,t.charAt(0).toUpperCase()+t.slice(1)}: Todoist`;var t},removeSelectedButtonClass:()=>{for(const e of i)e.classList.remove("selected")},addSelectedClassToButton:e=>{for(const t of i)t.dataset.tabName===e&&t.classList.add("selected")}}})();(()=>{const e=document.querySelector(".add-task-button"),t=document.querySelector(".add-task-modal"),s=document.querySelector(".add-task-form"),o=document.querySelector(".form-inputs > input:first-child"),i=document.querySelector(".cancel-button"),n=document.querySelector(".due-date-picker"),c=document.querySelector(".add-task-submit-button"),l=document.querySelector(".add-task-modal-overlay "),a=()=>c.disabled=!0,d=()=>{t.classList.toggle("visible"),l.classList.toggle("visible"),s.reset(),n.valueAsDate=new Date,o.focus(),a()};e.addEventListener("click",(()=>d())),i.addEventListener("click",(()=>d())),window.addEventListener("keydown",(e=>{"Escape"===e.key&&t.classList.contains("visible")&&d()})),l.addEventListener("click",(e=>{const s=e.target.offsetParent;!s||s===t||s===l||d()})),o.addEventListener("input",(()=>{o.value.length>0?c.disabled=!1:a()}))})()})();