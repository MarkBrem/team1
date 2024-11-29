import renderEvents from "./main";
import fetchEvents, { getEventByCountry } from "./API";

const eventsContainer = document.getElementById("events");
const paginationContainer = document.getElementById("pagination");

async function loadPage(page = 1) {
    const ITEMS_PER_PAGE = 10;
    const BASEURL = "https://app.ticketmaster.com/discovery/v2/events?";
    const API = "apikey=frHax5AbrwLC1IuSbtMAkrrAQfOByT93";
  
    try {
      const response = await fetch(
        `${BASEURL}${API}&locale=*&size=${ITEMS_PER_PAGE}&page=${page - 1}`
      );
      const data = await response.json();
      const events = data._embedded?.events || [];
  
      renderEvents(events);
  
      if (page === 1 && data.page.totalElements) {
        initializePagination(data.page.totalElements);
      }
    } catch (error) {
      console.error("Error loading page:", error);
    }
  }
  
  function initializePagination(totalItems) {
    const paginationContainer = document.getElementById("pagination");
    const ITEMS_PER_PAGE = 10;
  
    const pagination = new tui.Pagination(paginationContainer, {
      totalItems,
      itemsPerPage: ITEMS_PER_PAGE,
      visiblePages: 5,
      centerAlign: true,
      usageStatistics: false,
      template: {
        first: "Перша",
        prev: "Попередня",
        next: "Наступна",
        last: "Остання",
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      },
    });
  
    pagination.on("afterMove", async (event) => {
      const currentPage = event.page;
      await loadPage(currentPage);
    });
  }
  
  loadPage();