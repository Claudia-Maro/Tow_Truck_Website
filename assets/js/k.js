 // Инициализация карты после загрузки DOM
 document.addEventListener('DOMContentLoaded', function() {
  // Инициализация карты с центром в Москве
  const map = L.map('map').setView([55.7558, 37.6176], 11);
  
  // Добавляем слой карты OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Районы, где работают эвакуаторы
  const workingAreas = [
      {
          name: "Центральный административный округ",
          coords: [55.7558, 37.6176],
          description: "Круглосуточная эвакуация<br>Время прибытия: 15-30 минут"
      },
      {
          name: "Северный административный округ",
          coords: [55.835, 37.511],
          description: "Работаем с 8:00 до 22:00<br>Время прибытия: 20-40 минут"
      },
      {
          name: "Южный административный округ",
          coords: [55.622, 37.604],
          description: "Круглосуточная эвакуация<br>Время прибытия: 20-45 минут"
      },
      {
          name: "Западный административный округ",
          coords: [55.727, 37.432],
          description: "Работаем с 8:00 до 22:00<br>Время прибытия: 15-35 минут"
      },
      {
          name: "Восточный административный округ",
          coords: [55.787, 37.766],
          description: "Круглосуточная эвакуация<br>Время прибытия: 25-50 минут"
      }
  ];
  
  // Создаем свою иконку для маркеров
  const truckIcon = L.icon({
      iconUrl: 'images/truck-icon.png', // Замените на свою иконку
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
  });
  
  // Добавляем маркеры для каждого района
  workingAreas.forEach(area => {
      const marker = L.marker(area.coords, {icon: truckIcon}).addTo(map);
      marker.bindPopup(`<b>${area.name}</b><br>${area.description}`);
      
      // Добавляем круги вокруг маркеров для визуализации зоны покрытия
      L.circle(area.coords, {
          color: '#3388ff',
          fillColor: '#3388ff',
          fillOpacity: 0.2,
          radius: 2500
      }).addTo(map);
  });
  
  // Добавляем кнопки для мобильного меню
  const navbarToggler = document.querySelector('.navbar-toggler');
  const mainNav = document.querySelector('.main-nav ul');
  
  navbarToggler.addEventListener('click', function() {
      mainNav.classList.toggle('show');
  });
});