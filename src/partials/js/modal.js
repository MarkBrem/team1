document.addEventListener("DOMContentLoaded", () => {
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
        },
        {
            id: 2,
            info: "Eurovision 2021 finals!",
            whenDate: "2021-05-13",
            whenTime: "18:00 (Kyiv/Ukraine)",
            whereCity: "Kyiv, Ukraine",
            whereLocation: "Palace of Ukraine",
            who: "All Eurovision participants",
            priceStandard: "Standard: 1999 UAH",
            priceVIP: "VIP: 2999 UAH"
        },
        {
            id: 3,
            info: "LP special close event, includes lot of her songs + personal speech.",
            whenDate: "2021-07-27",
            whenTime: "19:00 (Kyiv/Ukraine)",
            whereCity: "Kyiv, Ukraine",
            whereLocation: "Palace of Ukraine",
            who: "LP",
            priceStandard: "Standard: 999 UAH",
            priceVIP: "VIP: 1999 UAH"
        },
        {
            id: 4,
            info: "MONATIK LOVE IT RHYTHM",
            whenDate: "2021-07-17",
            whenTime: "18:00 (Kyiv/Ukraine)",
            whereCity: "Kyiv, Ukraine",
            whereLocation: "Palats Sportu",
            who: "Monatik",
            priceStandard: "Standard: 499 UAH",
            priceVIP: "VIP: 999 UAH"
        }
    ];

    const showEventData = (id) => {
        const eventData = eventsData.find(event => event.id === id);
        if (eventData) {
            infoText.textContent = eventData.info;
            whenDate.textContent = eventData.whenDate;
            whenTime.textContent = eventData.whenTime;
            whereCity.textContent = eventData.whereCity;
            whereLocation.textContent = eventData.whereLocation;
            whoText.textContent = eventData.who;
            priceStandard.textContent = eventData.priceStandard;
            priceVIP.textContent = eventData.priceVIP;

            const modalImg = document.getElementById("ModalImg");
            modalImg.src = `../img/${id}.png`;

            modalImg.style.width = "360px";
            modalImg.style.height = "641px";
            modalImg.style.marginLeft = "30px";
            modalImg.style.marginTop = "235px";
            modalImg.style.marginBottom = "147px";

            modal.style.display = "flex";
        } else {
            console.error("Помилка", id);
        }
    };

    const previewImages = document.querySelectorAll(".img__preview");
    previewImages.forEach(image => {
        image.addEventListener("click", () => {
            const id = parseInt(image.src.split('/').pop().split('.')[0], 10);
            if (id) {
                showEventData(id);
            } else {
                console.error(image.src);
            }
        });
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
});
