const CACHE_NAME = 'arcana-22-women-and-art-tarot-v1';
const ASSETS = ['index.html', 'css/style.css', 'js/app.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));