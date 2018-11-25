(function() {

    (function () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js')
                .then(() => console.log('Service Worker Registered'))
                .catch((error) => console.log('Registration Failed', error))
        } else {
            console.log('Service worker are not supported.')
        }
    })()

})();