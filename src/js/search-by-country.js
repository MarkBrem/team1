import {getEventByCountry} from './API'
import renderEvents from './main'


const searchInput = document.getElementById("searchInput")
const  countrySelect = document.getElementById("countrySelect")


function searchByCountry() {
    const country = document.getElementById("countryInput").value;
    const eventsContainer = document.getElementById("eventsContainer");
    eventsContainer.innerHTML = "";


    filteredEvents.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");

        eventCard.innerHTML = `
            <img src="${event.imageUrl}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <p>${event.location}</p>
        `;

        eventsContainer.appendChild(eventCard);
    });
    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = "<p>No events found for the selected country.</p>";
    }
}



    
function autocomplete(input, arr){
    let currentFocus;
    
    input.addEventListener("input", function() {
        const value = this.value;

        closeAllLists();
        if (value) return false;

        currentFocus = -1;
        
        const list = document.createElement("div");

        list.setAttribute("id", this.id + "autocomplete-list");

        list.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(list);

        arr.forEach(country => {
            if (country.substr(0, value.length).toUpperCase() === value.toUpperCase()) {
                const item = document.createElement("div");
                item.innerHTML = country.substr(0, value.length);
                item.innerHTML += country.substr(value.length);
              
                item.addEventListener("click", function() {
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                list.appendChild(item);
            }
        });
    });}




    countrySelect.addEventListener("change", (event)=>{
        getEventByCountry(event.target.value)
    
    })   