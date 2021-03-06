exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof window.codePush === 'undefined') {
            return cb(false)
        }

        // pass through the codePush object
        Vue.cordova.codePush = window.codePush

        return cb(true)

    }, false)
}
