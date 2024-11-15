import renderEvents from "./main";

const BASEURL = 'https://app.ticketmaster.com/discovery/v2/events?';
const API = 'apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93';

async function fetchEvents() {
  try {
    const response = await fetch(`${BASEURL}${API}&locale=*`);
    const data = await response.json();


    const events = data._embedded?.events || [];
    renderEvents(events);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

fetchEvents();
export default fetchEvents