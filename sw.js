const cacheKey = 'cache-0';

const requiredURLs = [
	'/',
	'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap',
	'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css',
	'https://fonts.googleapis.com/icon?family=Material+Icons',

	'https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js',
	'https://cdn.jsdelivr.net/npm/vue',
	'https://cdn.jsdelivr.net/npm/vue-markdown@2.2.4/dist/vue-markdown.js',
	'https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',

	'fonts/NotoNaskhArabicUI-Regular.ttf',
	'fonts/NotoNaskhArabicUI-Bold.ttf',

	'markdown/index.md',
	'markdown/math/calculus/functions.md',

	'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',

	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_AMS-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_AMS-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_AMS-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Caligraphic-Bold.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Caligraphic-Bold.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Caligraphic-Bold.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Caligraphic-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Caligraphic-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Caligraphic-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Fraktur-Bold.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Fraktur-Bold.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Fraktur-Bold.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Fraktur-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Fraktur-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Fraktur-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Bold.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Bold.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Bold.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-BoldItalic.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-BoldItalic.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-BoldItalic.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Italic.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Italic.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Italic.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Main-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Math-BoldItalic.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Math-BoldItalic.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Math-BoldItalic.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Math-Italic.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Math-Italic.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Math-Italic.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Bold.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Bold.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Bold.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Italic.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Italic.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Italic.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_SansSerif-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Script-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Script-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Script-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size1-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size1-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size1-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size2-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size2-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size2-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size3-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size3-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size3-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size4-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size4-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Size4-Regular.woff2',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Typewriter-Regular.ttf',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Typewriter-Regular.woff',
	'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/fonts/KaTeX_Typewriter-Regular.woff2',
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheKey).then(cache => cache.addAll(requiredURLs))
	);
});

self.addEventListener('fetch', event => {
	if (/fonts.(googleapis|gstatic).com/.test(event.request.url))
		caches.open(cacheKey).then(cache => cache.add(event.request.url))
	else if (!requiredURLs.includes(event.request.url)
		&& !['study-with.overcoder.dev', 'localhost'].includes(new URL(event.request.url).hostname))
		return false;

	event.respondWith(
		caches.match(event.request).then(cached => {
			console.log(`Fetching thru network: ${event.request.url}`);

			return fetch(event.request, {
				mode: 'cors',
				credentials: 'same-origin'
			}).then(response => {
				if (!response || !response.ok) {
					console.warn(`Fetch failed, serving from cache: ${event.request.url}`);
					return cached;
				}


				// Chrome Developers docs:
				// IMPORTANT: Clone the response. A response is a stream
				// and because we want the browser to consume the response
				// as well as the cache consuming the response, we need
				// to clone it so we have two streams.
				//
				// me at 2am: I don't understand that, wat.
				const responseToCache = response.clone();

				caches.open(cacheKey).then(cache => {
					cache.put(event.request, responseToCache);
				});

				return response;
			}).catch(error => {
				console.log(`Fetching failed, serving from cache: ${event.request.url}`);
				return cached;
			});
		})
	);
});