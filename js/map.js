/* ============================================
   Sacred Blueprint - Interactive Map
   ============================================ */

var mapInstance = null;
var mapMarkers = {};
var mapLayers = { temple: [], ghat: [], dharmshala: [], well: [] };
var activeFilters = { temple: true, ghat: true, dharmshala: true, well: true };
var popupsViewed = 0;

var markerIcons = {
  temple: { emoji: '🛕', color: '#D4722A' },
  ghat: { emoji: '🌊', color: '#2A8B8B' },
  dharmshala: { emoji: '🏠', color: '#4A7B3A' },
  well: { emoji: '💧', color: '#5A9BBA' }
};

var typeLabels = {
  temple: 'Temple',
  ghat: 'Ghat',
  dharmshala: 'Dharmshala',
  well: 'Well'
};

function initMap() {
  if (mapInstance) return;

  mapInstance = L.map('india-map', {
    center: [22.5, 78.5],
    zoom: 5,
    minZoom: 4,
    maxZoom: 12,
    maxBounds: [[4, 60], [38, 100]],
    maxBoundsViscosity: 0.8
  });

  // CartoDB Positron tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(mapInstance);

  // Add all pins
  mapPins.forEach(function (pin) {
    var icon = createMarkerIcon(pin.type);
    var marker = L.marker([pin.lat, pin.lng], { icon: icon });

    var popupHtml =
      '<div class="map-popup">' +
        '<span class="map-popup__type map-popup__type--' + pin.type + '">' + typeLabels[pin.type] + '</span>' +
        '<h3 class="map-popup__name">' + pin.name + '</h3>' +
        '<p class="map-popup__city">' + pin.city + ', ' + pin.state + '</p>' +
        '<p class="map-popup__desc">' + pin.description + '</p>' +
        (pin.year ? '<span class="map-popup__year">c. ' + pin.year + '</span>' : '') +
      '</div>';

    marker.bindPopup(popupHtml, { maxWidth: 300, className: 'heritage-popup' });

    marker.on('popupopen', function () {
      popupsViewed++;
      EventBus.emit('badge:increment', { badge: 'kashiExplorer' });
    });

    marker.addTo(mapInstance);
    mapLayers[pin.type].push(marker);
  });

  updateMapCount();

  // Filter buttons
  document.getElementById('map-filters').addEventListener('click', function (e) {
    var btn = e.target.closest('.map-filter');
    if (!btn) return;
    var type = btn.dataset.type;
    btn.classList.toggle('active');
    activeFilters[type] = btn.classList.contains('active');
    applyFilters();
  });
}

function createMarkerIcon(type) {
  var info = markerIcons[type];
  return L.divIcon({
    className: '',
    html: '<div class="map-marker map-marker--' + type + '"><span class="map-marker__inner">' + info.emoji + '</span></div>',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
}

function applyFilters() {
  var showing = 0;
  var total = mapPins.length;

  Object.keys(mapLayers).forEach(function (type) {
    mapLayers[type].forEach(function (marker) {
      if (activeFilters[type]) {
        marker.addTo(mapInstance);
        showing++;
      } else {
        mapInstance.removeLayer(marker);
      }
    });
  });

  updateMapCount(showing, total);
}

function updateMapCount(showing, total) {
  var el = document.getElementById('map-count');
  if (!el) return;
  if (showing === undefined) {
    el.textContent = 'Showing all ' + mapPins.length + ' sites';
  } else {
    el.textContent = 'Showing ' + showing + ' of ' + total + ' sites';
  }
}
