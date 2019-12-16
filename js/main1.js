// LEAFLET MAP EX1

let leafletMap = L.map('map').setView([41.387152, 2.170079], 18);

let markerMap = L.marker([41.387071, 2.166044]).addTo(leafletMap).bindPopup("<b>Restaurant Centfocs</b><br/><br/>Restaurante Mediterráneo<br/>Carrer de Balmes, 16, 08007 Barcelona");

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(leafletMap);