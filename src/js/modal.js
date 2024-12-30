const BASEURL = 'https://app.ticketmaster.com/discovery/v2/events?';
const API = 'apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93';

const eventsContainer = document.getElementById('events');

async function fetchEvents() {
  try {
    const response = await fetch(`${BASEURL}${API}&locale=*`);
    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    alert('Failed to load events. Please try again later.');
    return [];
  }
}

function openModal(event) {
  const modal = document.getElementById('modal');
  const infoText = document.getElementById('modal-info-text');
  const whenDate = document.getElementById('modal-when-date');
  const whenTime = document.getElementById('modal-when-time');
  const whereCity = document.getElementById('modal-where-city');
  const whereLocation = document.getElementById('modal-where-location');
  const whoText = document.getElementById('modal-who');
  const priceStandard = document.getElementById('modal-price-standard');
  const priceVIP = document.getElementById('modal-price-vip');
  const modalImg = document.getElementById('ModalImg');

  infoText.textContent = event.info || event.name || '';
  whenDate.textContent = event.dates?.start?.localDate || '';
  whenTime.textContent = event.dates?.start?.localTime || '';
  whereCity.textContent = event._embedded?.venues[0]?.city?.name || '';
  whereLocation.textContent = event._embedded?.venues[0]?.name || '';
  whoText.textContent = event.promoter?.name || '';
  priceStandard.textContent = `Standard: ${event.priceRanges?.[0]?.min || ''} - ${event.priceRanges?.[0]?.max || ''}`;
  priceVIP.textContent = `VIP: ${event.priceRanges?.[1]?.min || ''} - ${event.priceRanges?.[1]?.max || ''}`;

  modalImg.src = event.images?.[0]?.url || '../img/default.png';
  modalImg.alt = event.name || 'Event Image';

  modal.style.display = 'flex';

  const closeBtn = document.getElementById('close-btn');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
}

function renderEvents(events) {
  events.forEach(event => {
    const imageUrl = event.images?.[0]?.url || '../img/default.png';

    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.innerHTML = `
      <img src="${imageUrl}" alt="${event.name || 'Event Image'}" class="event-image">
      <h3>${event.name || 'No Name'}</h3>
      <p>${event.dates?.start?.localDate || 'No Date'}</p>
    `;

    eventCard.addEventListener('click', () => openModal(event));

    eventsContainer.appendChild(eventCard);
  });
}

window.addEventListener('load', async () => {
  const events = await fetchEvents();
  renderEvents(events);
});
