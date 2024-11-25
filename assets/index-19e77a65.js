(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const a=document.getElementById("events");function i(n){a.innerHTML="",n.forEach(t=>{var s;const c=document.createElement("div");c.classList.add("col-md-4","col-sm-6","col-lg-3"),c.innerHTML=`
      <div class="card event-card h-100">
        <img src="${(s=t.images[0])==null?void 0:s.url}" class="card-img-top" alt="${t.name}">
        <div class="card-body d-flex flex-column">
          <h1 class="card-title">${t.name}</h5>
          <p class="date card-text mb-2">${t.dates.start.localDate}</p>
          <p class="where card-text">${t._embedded.venues[0].name}</p>
        </div>
      </div>
    `,a.appendChild(c)})}const l="https://app.ticketmaster.com/discovery/v2/events?",u="apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93";document.getElementById("events");async function d(){var n;try{const t=await fetch(`${l}${u}&locale=*`),c=await t.json();console.log(t);const s=((n=c._embedded)==null?void 0:n.events)||[];i(s)}catch(t){console.error("Error fetching events:",t)}}d();document.getElementById("searchInput");const m=document.getElementById("countrySelect");m.addEventListener("change",n=>{d(n.target.value)});
