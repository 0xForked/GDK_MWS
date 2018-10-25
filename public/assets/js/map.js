var mymap = L.map('map').setView([1.4644352,124.8290538], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXN1bWl0cm8iLCJhIjoiY2oxaHM2bW9jMDBlazMycGpkYXExNDB2NSJ9.OF9SabdurZG8_v3UZOWe0A'
}).addTo(mymap);

let places = [
  {"lokasi": [1.463571, 124.829470], "pic": "bensu.png", "nama" : "Geprek BENSU", "alamat": "Jalan R.W.Monginsidi No.19 Sario Malalayang, Sario Tumpaan, Sario, Kota Manado, Sulawesi Utara"},
  {"lokasi": [1.463387, 124.829769], "pic": "mjm.png", "nama" : "RM. MJM", "alamat": "Jl. Wolter Monginsidi No.3, Ranotana, Sario, Sario Tumpaan, Sario, Kota Manado, Sulawesi Utara"},
  {"lokasi": [1.463193, 124.828400], "pic": "narto.png", "nama" : "Martabak Mas Narto", "alamat": "Jl. Bethesda, Sario Tumpaan, Sario, Kota Manado, Sulawesi Utara"},
  {"lokasi": [1.463407, 124.828284], "pic": "alibaba.png", "nama" : "Alibaba Coffee House", "alamat": "Jalan Wolter Monginsidi No.42, Sario Tumpaan, Sario, Sario Tumpaan, Sario, Kota Manado, Sulawesi Utara"},
  {"lokasi": [1.464188, 124.830079], "pic": "sate.png", "nama" : "Sate Madura Sario", "alamat": "Jl. Ahmad Yani, Sario Utara, Sario, Kota Manado, Sulawesi Utara"}
];

// for (var p of places) {
//   var  marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.nama);
// }

places.forEach(function(place) {
  return L.marker(place.lokasi).addTo(mymap).bindPopup(place.nama).on("click", () => {
    document.getElementById('imagePlace').src = `/assets/img/place/${place.pic}`;
    document.querySelector('.review').innerHTML = `${place.alamat}`
  });
})