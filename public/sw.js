// Ultra-fast service worker for instant loading
const CACHE_NAME = 'contwre-v1'
const CRITICAL_ASSETS = [
  '/',
  '/assets/contwre-logo-white.png',
  '/assets/engine-gif.gif',
  '/assets/founder-together.jpg',
  '/src/styles/index.css'
]

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CRITICAL_ASSETS))
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => 
        Promise.all(
          cacheNames.map((cacheName) => 
            cacheName !== CACHE_NAME ? caches.delete(cacheName) : Promise.resolve()
          )
        )
      )
      .then(() => self.clients.claim())
  )
})

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})
