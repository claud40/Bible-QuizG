/**
 * Bible Quiz - Offline Service Worker
 * 
 * Implements a high-performance offline caching strategy:
 * 1. Cache-First (Offline-First) for static immutable assets (JS, CSS, compiled images).
 * 2. Network-First with Cache-Fallback for core shell pages and manifest files.
 */

const CACHE_NAME = 'bible-quiz-offline-v1';

// Core assets required for initial startup
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/improved_bible_quiz_icon_1781298923445.jpg',
  '/new_bible_quiz_icon_with_speech_box_1781298502381.jpg'
];

// Install Event - Pre-cache core shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Pre-caching core shell assets...');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[Service Worker] All core assets cached. Activating...');
        return self.skipWaiting();
      })
  );
});

// Activate Event - Clean up stale cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Removing stale cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] Active and taking control of clients.');
        return self.clients.claim();
      })
  );
});

// Fetch Event - Dynamic intercept and smart-caching strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Check if requested resource is a hashed Vite build asset (JS, CSS, bundled images)
  const isViteAsset = url.pathname.startsWith('/assets/');

  if (isViteAsset) {
    // 1. Cache-First Strategy: Hashed build assets are immutable, we cache them forever
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            // Clone and put in cache
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });

            return networkResponse;
          })
          .catch(() => {
            // Return nothing if both offline and uncached (rare)
            console.warn('[Service Worker] Static asset fetch failed and not cached:', url.pathname);
          });
      })
    );
  } else {
    // 2. Network-First Strategy: Shell pages (/) and manifest should be fresh if online, fallback to cache if offline
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // If valid response, update the cache with the fresh version
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Network failed (we are offline) - serve from cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }

            // SPA route fallback: if navigating and offline, return the root cache (index.html)
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
          });
        })
    );
  }
});
