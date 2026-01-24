const CACHE_NAME = 'butterfly-tarot-v1';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './manifest.json',
  './assets/cards/back.webp',
  './assets/cards/cover.webp',
  './assets/cards/logo.webp'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});