import renderEvents from "./main";

export const BASEURL = 'https://app.ticketmaster.com/discovery/v2/events?';
export const API = 'apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93';
const eventsContainer = document.getElementById('events');

async function fetchEvents() {
  try {
    const response = await fetch(`${BASEURL}${API}&locale=*`);
    const data = await response.json();
console.log(response);

    const events = data._embedded?.events || [];
    renderEvents(events);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

async function getEventByCountry(countryCode){
  try {
    const url = `${BASEURL}${API}&countryCode=${countryCode}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error');
  }
}



// fetchEvents();
getEventByCountry('UK').then((data)=>{
  if (data._embedded) {
    renderEvents(data._embedded.events)
  } else {
    eventsContainer.innerHTML = `<p>No events found for country: ${countryCode}</p>`
  }
})
export default fetchEvents