import fetchEvents from './API'

const eventsContainer = document.getElementById('events');
function renderEvents(events) {
  eventsContainer.innerHTML = ''; 
  console.log(events);
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('col-md-4', 'col-sm-6', 'col-lg-3');
    eventCard.innerHTML = `
      <div class="card event-card h-100">
        <img src="${event.images[0]?.url}" class="card-img-top" alt="${event.name}">
        <div class="card card-body d-flex flex-column">
          <h1 class="card-title">${event.name}</h5>
          <p class="date card-text mb-2">${event.dates.start.localDate}</p>
          <p class="where card-text">${event._embedded.venues[0].name}</p>
        </div>
      </div>
    `;
    eventsContainer.appendChild(eventCard);
  });
}

export default renderEvents

