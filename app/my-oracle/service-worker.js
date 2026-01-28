const CACHE_NAME = 'arcana-unified-my-oracle-v3';
const ASSETS = [
  'index.html',
  'manifest.json',
  'assets/cards/back.webp',
  'assets/cards/cover.webp'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));