const countries = ["USA", "Canada", "Ukraine", "Poland", "Germany", "France"]; 


const events = [
    {
        title: "Eurovision 2021 Finals!",
        date: "2021-05-13",
        location: "Palace of Ukraine",
        country: "Ukraine",
        imageUrl: "path_to_image1.jpg"
    },
    {
        title: "Atlas Weekend - Black Eyed Peas",
        date: "2021-06-09",
        location: "VDNH",
        country: "Ukraine",
        imageUrl: "path_to_image2.jpg"
    },
    {
        title: "LP Concert",
        date: "2021-07-27",
        location: "Palace of Ukraine",
        country: "Ukraine",
        imageUrl: "path_to_image3.jpg"
    },
    {
        title: "Monatik Love It Rhythm",
        date: "2021-07-17",
        location: "VDNH",
        country: "Ukraine",
        imageUrl: "path_to_image4.jpg"
    },    

];


function searchByCountry() {
    const country = document.getElementById("countrySelect").value;
    const eventsContainer = document.getElementById("eventsContainer");
    eventsContainer.innerHTML = "";
    const filteredEvents = events.filter(event => event.country === country || country === "");

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