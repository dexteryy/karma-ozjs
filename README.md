<!---
layout: intro
title: karma-ozjs
-->

# karma-ozjs

> A Karma plugin. Adapter for the [OzJS](https://github.com/dexteryy/OzJS) framework.

## Installation

Install the plugin from npm:

```sh
npm install karma-ozjs --save-dev
```

## Configuring Karma

`./karma.conf.js`:

```js
module.exports = function(config) {
    config.set({
        // frameworks to use
        frameworks: ['mocha', 'ozjs'],
        // list of files / patterns to load in the browser
        files: [
            { pattern: 'js/vendor/**/*.js', included: false },
            { pattern: 'js/appname/**/*.js', included: false },
            "test/tests.js"
        ],
        // ...
    });
};
```

## Configuring oz.js

`./test/tests.js`

```js
require.config({
    baseUrl: 'base/js/vendor/',
    aliases: {
        'appname': '../appname/'
    }
});

require([
    'dollar'
    'appname/app'
], function($, app){

    describe('app.wrapper', function(){
        it('sould be instanceof $', function(){
            expect(app.wrapper).to.be.an.instanceof($);
        });
    });

});
```

## Source code

* [View on Github](https://github.com/dexteryy/karma-ozjs)

## More References

* [Karma homepage](http://karma-runner.github.io/)
* [OzJS Project Homepage](http://ozjs.org/)

## Release History

See [OzJS Release History](http://ozjs.org/#release)

## License

Copyright (c) 2010 - 2013 dexteryy  
Licensed under the MIT license.


