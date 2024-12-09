import renderEvents from "./main";

const eventsContainer = document.getElementById('events');


const BASEURL = 'https://app.ticketmaster.com/discovery/v2/events?';
const API = 'apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93';

async function fetchEvents() {
  try {
    const response = await fetch(`${BASEURL}${API}&locale=*`);
    const data = await response.json();


    const events = data._embedded?.events || [];
    renderEvents(events);
  } catch (error) {
    alert('Виникла помилка');
  }
}


export async function getEventByCountry(countryCode){
  try {
   const url = `${BASEURL}${API}&countryCode=${countryCode}`
    const response = await fetch(url)
    const data = await response.json()
    const events = data._embedded?.events || [];
    return events
  } catch (error) {
    console.log('error');
  }
}




export async function getEventBySearchKey(keyword){
  try {
   const url = `${BASEURL}${API}&keyword=${keyword}`
    const response = await fetch(url)
    const data = await response.json()
    const events = data._embedded?.events || [];
    return events
  } catch (error) {
    console.log('error');
  }
}

fetchEvents();
export default fetchEvents


document.addEventListener("DOMContentLoaded", () => {
  const loaderContainer = document.getElementById("loader-container");

  function updateConnectionStatus() {
    if (!navigator.onLine) {
      loaderContainer.style.display = "flex";
    } else {
      loaderContainer.style.display = "none";
    }
  }
  updateConnectionStatus();

  window.addEventListener("online", updateConnectionStatus);
  window.addEventListener("offline", updateConnectionStatus);
});