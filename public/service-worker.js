var dataCacheName = 'gdk-pwa-v1';
var cacheName = 'gdk-pwa-v1';
var filesToCache = [
 '/',
 '/service-worker.js',
 '/index.html',
 '/404.html',
 '/project1/calculator.html',
 '/project2/map.html',
 '/assets/images/aasumitro.png',
 '/assets/images/aasumitro144x132.png',
 '/assets/images/place/alibaba.png',
 '/assets/images/place/bensu.png',
 '/assets/images/place/mjm.png',
 '/assets/images/place/narto.png',
 '/assets/images/place/sate.png',
 '/assets/raw/places.json',
 '/assets/raw/manifest.json',
 '/assets/scripts/app.js',
 '/assets/scripts/calculator.js',
 '/assets/scripts/map.js',
 '/assets/styles/calculator.css',
 '/assets/styles/css-grid.css',
 '/assets/styles/map.css',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});