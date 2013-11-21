(function(karma, oz) {

    var caches = karma.files;

    oz.load = function(url){
        url = '/' + url;
        var cache = caches[url];
        if (cache) {
            arguments[0] = url + '?' + cache;
        }
        return oz.origin.load.apply(this, arguments);
    };

})(window.__karma__, window.oz);

