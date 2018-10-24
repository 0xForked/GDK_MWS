var mymap = L.map('map').setView([1.4572787,124.8297592], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXN1bWl0cm8iLCJhIjoiY2oxaHM2bW9jMDBlazMycGpkYXExNDB2NSJ9.OF9SabdurZG8_v3UZOWe0A'
}).addTo(mymap);

let places = [
  {"lokasi": [1.455512, 124.827119], "sponsor" : "Kantro Pusat UNSRAT"},
  {"lokasi": [1.456103, 124.827903], "sponsor" : "Kantor PTI UNSRAT"},
  {"lokasi": [1.459395, 124.828179], "sponsor" : "Kantor LPPM UNSRAT"},
  {"lokasi": [1.460392, 124.829631], "sponsor" : "Auditorium UNSRAT"},
  {"lokasi": [1.458786, 124.826212], "sponsor" : "Food Court UNSRAT"}
];

for (var p of places) {
  var  marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}