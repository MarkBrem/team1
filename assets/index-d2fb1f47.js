(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=document.getElementById("events");function i(n){d.innerHTML="",n.forEach(t=>{var c;const o=document.createElement("div");o.classList.add("col-md-4","col-sm-6","col-lg-3"),o.innerHTML=`
      <div class="card event-card h-100">
        <img src="${(c=t.images[0])==null?void 0:c.url}" class="card-img-top" alt="${t.name}">
        <div class="card-body d-flex flex-column">
          <h1 class="card-title">${t.name}</h5>
          <p class="date card-text mb-2">${t.dates.start.localDate}</p>
          <p class="where card-text">${t._embedded.venues[0].name}</p>
        </div>
      </div>
    `,d.appendChild(o)})}const l=document.getElementById("events"),u="https://app.ticketmaster.com/discovery/v2/events?",m="apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93";async function a(n){try{const t=`${u}${m}&countryCode=${n}`;return await(await fetch(t)).json()}catch{console.log("error")}}a("").then(n=>{n._embedded?i(n._embedded.events):l.innerHTML=`<p>No events found for country: ${countryCode}</p>`});document.getElementById("searchInput");const f=document.getElementById("countrySelect");f.addEventListener("change",n=>{a(n.target.value)});
