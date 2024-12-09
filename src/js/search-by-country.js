import {getEventByCountry, getEventBySearchKey} from './API';
import renderEvents from './main';
import debounce from 'lodash.debounce';

const searchInput = document.getElementById("searchInputSel")
const  countrySelect = document.getElementById("countrySelect")


    countrySelect.addEventListener("change", (event)=>{
        const country = event.currentTarget.value.toLowerCase();
        getEventByCountry(country)
        .then((events)=>{
            console.log(events);
            renderEvents(events)
        })
    
    })   


    document.getElementById("searchInputSel").addEventListener("input",
       throttle( function (event) {
            console.log('Madonna');
            const keyword = event.target.value.toLowerCase();
            getEventBySearchKey(keyword)
            .then(events=>{
                renderEvents(events);
            })
        }, 1000)
    );



