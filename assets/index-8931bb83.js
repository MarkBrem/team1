(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a=document.getElementById("events");function l(n){a.innerHTML="",n.forEach(t=>{var o;const s=document.createElement("div");s.classList.add("col-md-4","col-sm-6","col-lg-3"),s.innerHTML=`
      <div class="card event-card h-100">
        <img src="${(o=t.images[0])==null?void 0:o.url}" class="card-img-top" alt="${t.name}">
        <div class="card-body d-flex flex-column">
          <h1 class="card-title">${t.name}</h5>
          <p class="date card-text mb-2">${t.dates.start.localDate}</p>
          <p class="where card-text">${t._embedded.venues[0].name}</p>
        </div>
      </div>
    `,a.appendChild(s)})}document.getElementById("events");const d="https://app.ticketmaster.com/discovery/v2/events?",i="apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93";async function u(){var n;try{const o=((n=(await(await fetch(`${d}${i}&locale=*`)).json())._embedded)==null?void 0:n.events)||[];l(o)}catch(t){console.error("Error fetching events:",t)}}async function m(n){var t;try{const s=`${d}${i}&countryCode=${n}`;return((t=(await(await fetch(s)).json())._embedded)==null?void 0:t.events)||[]}catch{console.log("error")}}u();document.getElementById("searchInput");const f=document.getElementById("countrySelect");f.addEventListener("change",n=>{m(n.target.value)});
