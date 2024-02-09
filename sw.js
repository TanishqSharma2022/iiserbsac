self.addEventListener('install', e => {
    console.log("Install SAC App")
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(["./", "css/style.css", "images/SAC_Logo.png"])
        })
    )
})


self.addEventListener('fetch', e =>{
    console.log(`Intercepting fetch request for: ${e.request.url}`)
    // e.respondWith(
    //     caches.match(e.request).then(response => {
    //         return response || fetch(e.request)
    //     })
    // )
})