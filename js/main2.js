// LEAFLET MAP EX2

let leafletMap = L.map('map').setView([41.387152, 2.170079], 18);
let tiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(leafletMap);
let markerMap = null;

leafletMap.on('click', function (e) {

    if (markerMap) leafletMap.removeLayer(markerMap)
    let center = e.latlng;

    markerMap = L.marker(center).bindPopup("Las coordenadas son:<br/><b>Lat: " + e.latlng.lat + " Lng: " + e.latlng.lng + "</b>").addTo(leafletMap);
    leafletMap.setView(center, 18);

});