function openModal(event) {
    const modal = document.getElementById('modal');
    const infoText = document.getElementById('modal-info-text');
    const whenDate = document.getElementById('modal-when-date');
    const whenTime = document.getElementById('modal-when-time');
    const whereCity = document.getElementById('modal-where-city');
    const whereLocation = document.getElementById('modal-where-location');
    const whoText = document.getElementById('modal-who');
    const priceStandard = document.getElementById('modal-price-standard');
    const priceVIP = document.getElementById('modal-price-vip');
    const modalImg = document.getElementById('ModalImg');
  
    infoText.textContent = event.info || event.name || '';
    whenDate.textContent = event.dates?.start?.localDate || '';
    whenTime.textContent = event.dates?.start?.localTime || '';
    whereCity.textContent = event._embedded?.venues[0]?.city?.name || '';
    whereLocation.textContent = event._embedded?.venues[0]?.name || '';
    whoText.textContent = event.promoter?.name || '';
    priceStandard.textContent = `Standard: ${event.priceRanges?.[0]?.min || 'N/A'} - ${event.priceRanges?.[0]?.max || 'N/A'}`;
    priceVIP.textContent = `VIP: ${event.priceRanges?.[1]?.min || 'N/A'} - ${event.priceRanges?.[1]?.max || 'N/A'}`;
  
    modalImg.src = event.images[0]?.url || '../img/default.png';
    modalImg.alt = event.name;
  
    modal.style.display = 'flex';
  
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  }
  
  export default openModal;
  