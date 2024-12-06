// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.getElementById("modal");
//   const closeBtn = document.getElementById("close-btn");
//   const openModalImg = document.getElementById("openModalImg");

//   const infoText = document.getElementById("modal-info-text");
//   const whenDate = document.getElementById("modal-when-date");
//   const whenTime = document.getElementById("modal-when-time");
//   const whereCity = document.getElementById("modal-where-city");
//   const whereLocation = document.getElementById("modal-where-location");
//   const whoText = document.getElementById("modal-who");
//   const priceStandard = document.getElementById("modal-price-standard");
//   const priceVIP = document.getElementById("modal-price-vip");

  const eventsData = [
      {
          id: 1,
          info: "Atlas Weekend is the largest music festival in Ukraine. More than 200 artists will create a proper music festival atmosphere on 10 stages.",
          whenDate: "2021-06-09",
          whenTime: "20:00 (Kyiv/Ukraine)",
          whereCity: "Kyiv, Ukraine",
          whereLocation: "VDNH",
          who: "The Black Eyed Peas",
          priceStandard: "Standard: 300-500 UAH",
          priceVIP: "VIP: 1000-1500 UAH"
      }
  ];

  openModalImg.addEventListener("click", () => {
      const eventData = eventsData[0];
      infoText.textContent = eventData.info;
      whenDate.textContent = eventData.whenDate;
      whenTime.textContent = eventData.whenTime;
      whereCity.textContent = eventData.whereCity;
      whereLocation.textContent = eventData.whereLocation;
      whoText.textContent = eventData.who;
      priceStandard.textContent = eventData.priceStandard;
      priceVIP.textContent = eventData.priceVIP;
      modal.style.display = "flex";
  });


  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
          modal.style.display = "none";
      }
  });

modal.querySelectorAll('.info__section, .when__section, .where__section, .who__section, .prices__section')
     .forEach(section => section.style.display = 'block');