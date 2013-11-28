(function(karma, oz) {

    var _is_global_require = true,
        _is_current_global = false,
        _global_require_count = 0;

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
        if (typeof deps !== 'string' || block) {
            if (_is_global_require) {
                block.__from_global = true;
                _global_require_count++;
                setTimeout(function(){
                    _is_global_require = false;
                }, 0);
            }
            if (block.__from_global) {
                _is_current_global = true;
            }
        }
        return oz.origin.require.apply(this, arguments);
    };

    oz.require.config = oz.origin.require.config;

    oz.scan = function(){
        var list = oz.origin.scan.apply(this, arguments);
        if (_is_current_global) {
            _is_current_global = false;
            list.__from_global = true;
        }
        return list;
    };

    oz.exec = function(list){
        var re = oz.origin.exec.apply(this, arguments);
        if (!re) {
            return re;
        }
        if (list.__from_global
                && --_global_require_count === 0) {
            oz.exec = oz.origin.exec;
            oz.require = oz.origin.require;
            window.__karma__.start();
        }
        return re;
    };

    oz.define.amd = null;

})(window.__karma__, window.oz);

