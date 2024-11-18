(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=document.getElementById("events");function i(n){d.innerHTML="",n.forEach(t=>{var s;const o=document.createElement("div");o.classList.add("col-md-4","col-sm-6","col-lg-3"),o.innerHTML=`
      <div class="card event-card h-100">
        <img src="${(s=t.images[0])==null?void 0:s.url}" class="card-img-top" alt="${t.name}">
        <div class="card-body d-flex flex-column">
          <h1 class="card-title">${t.name}</h5>
          <p class="date card-text mb-2">${t.dates.start.localDate}</p>
          <p class="where card-text">${t._embedded.venues[0].name}</p>
        </div>
      </div>
    `,d.appendChild(o)})}const a=document.getElementById("events"),l="https://app.ticketmaster.com/discovery/v2/events?",u="apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93";async function f(n){try{const t=`${l}${u}&countryCode=${n}`;return await(await fetch(t)).json()}catch{console.log("error")}}f("").then(n=>{n._embedded?i(n._embedded.events):a.innerHTML=`<p>No events found for country: ${countryCode}</p>`});
