(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a=document.getElementById("events");function i(n){a.innerHTML="",n.forEach(t=>{var s;const o=document.createElement("div");o.classList.add("col-md-4","col-sm-6","col-lg-3"),o.innerHTML=`
      <div class="card event-card h-100">
        <img src="${(s=t.images[0])==null?void 0:s.url}" class="card-img-top" alt="${t.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${t.name}</h5>
          <p class="card-text mb-2"><strong>Date:</strong> ${t.dates.start.localDate}</p>
          <p class="card-text"><strong>Venue:</strong> ${t._embedded.venues[0].name}</p>
        </div>
      </div>
    `,a.appendChild(o)})}const d="https://app.ticketmaster.com/discovery/v2/events?",l="apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93";async function f(){var n;try{const s=((n=(await(await fetch(`${d}${l}&locale=*`)).json())._embedded)==null?void 0:n.events)||[];i(s)}catch(t){console.error("Error fetching events:",t)}}f();
