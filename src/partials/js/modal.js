const baseURL = "";

const eventsData = [
    {
      id: 1,
      info: "Atlas Weekend is the largest music festival in Ukraine. More than 200 artists will create a proper music festival atmosphere on 10 stages.",
      whenDate: "2021-06-09",
      whenTime: "20:00 (Kyiv/Ukraine)",
      whereCity: "Kyiv, Ukraine",
      whereLocation: "VDNH",
      who: "The Black Eyed Peas",
      priceStandard: "Standart 300-500 UAH",
      priceVIP: "VIP 1000-1500 UAH"
    },
    {
      id: 2,
      info: "Eurovision 2021 finals!",
      whenDate: "2021-05-13",
      whenTime: "18:00 (Kyiv/Ukraine)",
      whereCity: "Kyiv, Ukraine",
      whereLocation: "Palace of Ukraine",
        who: "All Eurovision participants",
        priceStandard: "Standart 1999 UAH",
        priceVIP: "VIP 2999 UAH"
    },
    {
      id: 3,
      info: "LP special close event, includes lot of her songs + personal speach",
      whenDate: "2021-07-27",
      whenTime: "19:00 (Kyiv/Ukraine)",
      whereCity: "Kyiv, Ukraine",
      whereLocation: "Palace of Ukraine",
      who: "LP",
      priceStandard: "Standart 999 UAH",
      priceVIP: "VIP 1999 UAH"
    },
    {
      id: 4,
      info: "MONATIK LOVE IT RYTHM",
      whenDate: "2021-07-17",
      whenTime: "18:00 (Kyiv/Ukraine)",
      whereCity: "Kyiv, Ukraine",
      whereLocation: "Palats Sportu",
      who: "Monatik",
      priceStandard: "Standart 499 UAH",
      priceVIP: "VIP 999 UAH"
    },]

    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");
    
    const infoText = document.getElementById("modal-info-text");
    const whenDate = document.getElementById("modal-when-date");
    const whenTime = document.getElementById("modal-when-time");
    const whereCity = document.getElementById("modal-where-city");
    const whereLocation = document.getElementById("modal-where-location");
    const whoText = document.getElementById("modal-who");
    const priceStandard = document.getElementById("modal-price-standard");
    const priceVIP = document.getElementById("modal-price-vip");
    
    
    
    function openModal(eventId) {
        const eventData = eventsData.find(event => event.id === eventId);
    if (eventData) {
        infoText.textContent = eventData.info;
        whenDate.textContent = eventData.whenDate;
        whenTime.textContent = eventData.whenTime;
        whereCity.textContent = eventData.whereCity;
        whereLocation.textContent = eventData.whereLocation;
        whoText.textContent = eventData.who;
        priceStandard.textContent = eventData.priceStandard;
        priceVIP.textContent = eventData.priceVIP;
        
        modal.style.display = "block";
      }
    }
    function closeModal(event) {
      if (!event || event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
        document.removeEventListener('keydown', handleEscape);
      }
      if (event.key === 'Escape') {
        closeModal();
      }
    }
    

