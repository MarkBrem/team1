const BASEURL = 'https://app.ticketmaster.com/discovery/v2/events?';
const API = 'apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93';
const eventsContainer = document.getElementById('events');

const modalBackdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalContentContainer = document.querySelector('.modal-body');
const closeModalBtn = document.querySelector('.close-modal-btn');
const loader = document.querySelector('.loader');

eventsContainer.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', onCloseModal);
modalBackdrop.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onEscapeModal);

function createModalMarkup(event) {
  return `
    <img class="big-img" src="${event.images[4]?.url || ''}" alt="${event.name}">
    <div class="info-container">
      <h3 class="title-info">INFO</h3>
      <p class="promoter-desc">${event.promoter?.description || 'No Description'}</p>
      <h3 class="title-when">WHEN</h3>
      <p class="date">${event.dates.start.localDate || 'No Date'}</p>
      <p class="time">${event.dates.start.localTime || 'No Time'}</p>
      <h3 class="title-where">WHERE</h3>
      <p class="location">${event._embedded?.venues[0]?.city?.name || 'Unknown City'}, 
         ${event._embedded?.venues[0]?.country?.name || 'Unknown Country'}</p>
      <p class="venue-name">${event._embedded?.venues[0]?.name || 'Unknown Venue'}</p>
      <h3 class="title-who">WHO</h3>
      <p class="event-name">${event.name || 'No Event Name'}</p>
      <h3 class="title-price">PRICES</h3>
      <p class="price-range">${event.priceRanges?.[0]?.type || 'No Price Info'} 
         ${event.priceRanges?.[0]?.min || 'N/A'} - ${event.priceRanges?.[0]?.max || 'N/A'} 
         ${event.priceRanges?.[0]?.currency || 'N/A'}</p>
    </div>
  `;
}

function openModal(eventId) {
  modalBackdrop.style.pointerEvents = 'auto'; 
  modal.classList.add('is-show'); 
  loader.style.display = 'block';  

  getEventDetails(eventId)
    .then(event => {
      const modalMarkup = createModalMarkup(event); 
      modalContentContainer.innerHTML = modalMarkup;  
    })
    .catch(err => {
      console.error('Error:', err);
      modalContentContainer.innerHTML = '<h1></h1>';
    })
    .finally(() => {
      loader.style.display = 'none';  
    });
}

async function getEventDetails(eventId) {
  try {
    const response = await fetch(`${BASEURL}${API}&id=${eventId}`);
    const data = await response.json();
    return data._embedded?.events[0] || {};
  } catch (error) {
    throw new Error('Error fetching event details');
  }
}

function renderEvents(events) {
  eventsContainer.innerHTML = ''; 
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('col-md-4', 'col-sm-6', 'col-lg-3');
    eventCard.innerHTML = `
      <div class="card event-card h-100" data-event-id="${event.id}">
        <img src="${event.images[0]?.url}" class="card-img-top" alt="${event.name}">
        <div class="card card-body d-flex flex-column">
          <h1 class="card-title">${event.name}</h1>
          <p class="date card-text mb-2">${event.dates.start.localDate}</p>
          <p class="where card-text">${event._embedded.venues[0]?.name}</p>
        </div>
      </div>
    `;
    eventCard.addEventListener('click', () => openModal(event.id));
    eventsContainer.appendChild(eventCard);
  });
}


window.addEventListener('load', () => {
  const loaderContainer = document.getElementById("loader-container");
  loaderContainer.style.display = "flex";

  fetchEvents().then(res => loaderContainer.style.display = "none");
});

async function fetchEvents() {
  try {
    const response = await fetch(`${BASEURL}${API}&locale=*`);
    const data = await response.json();
    const events = data._embedded?.events || [];
    renderEvents(events);
  } catch (error) {
    alert('');
  }
}

function onCloseModal() {
  modal.classList.remove('is-show');
}

function onBackdropClick(e) {
  if (e.target === modalBackdrop) {
    modal.classList.remove('is-show');
    modalBackdrop.style.pointerEvents = 'none';
  }
}

function onEscapeModal(e) {
  if (e.key === 'Escape') {
    modal.classList.remove('is-show');
  }
}
