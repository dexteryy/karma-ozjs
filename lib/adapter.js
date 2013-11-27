(function(karma, oz) {

    var _require_count = 0, 
        _global_require = true;

    // make it async
    karma.loaded = function() {};

    var caches = karma.files;

    oz.load = function(url){
        url = '/' + url;
        var cache = caches[url];
        if (cache) {
            arguments[0] = url + '?' + cache;
        }
        var args = arguments;
        setTimeout(function(){
            oz.origin.load.apply(this, args);
        }, 0);
    };

    oz.require = function(deps, block){
        if (_global_require 
                && (typeof deps !== 'string' || block)) {
            _require_count++;
            setTimeout(function(){
                _global_require = false;
            }, 0);
        }
        return oz.origin.require.apply(this, arguments);
    };

    oz.require.config = oz.origin.require.config;

    oz.exec = function(){
        var re = oz.origin.exec.apply(this, arguments);
        if (--_require_count === 0) {
            oz.exec = oz.origin.exec;
            oz.require = oz.origin.require;
            window.__karma__.start();
        }
        return re;
    };

    oz.define.amd = null;

})(window.__karma__, window.oz);

