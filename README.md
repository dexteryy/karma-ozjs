<!---
layout: intro
title: karma-ozjs
-->

# karma-ozjs

> A Karma plugin. Adapter for the [OzJS](https://github.com/dexteryy/OzJS) framework.

## Installation

The easiest way is to keep `karma-ozjs` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-ozjs": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-ozjs --save-dev
```

## Configuring Karma

```js
// karma.conf.js
module.exports = function(config) {
    config.set({
        // frameworks to use
        frameworks: ['mocha', 'ozjs'],
        // list of files / patterns to load in the browser
        files: [
            { pattern: 'js/vendor/**/*.js', included: false },
            { pattern: 'js/appname/**/*.js', included: false },
            "test/config.js"
            "test/tests.js"
        ],
        // ...
```

## Configuring oz.js

```js
// test/config.js
require.config({
    // Karma serves files from '/base'
    baseUrl: 'base/js/vendor/',
    aliases: {
        'appname': '../appname/'
    }
});
```

```js
// test/tests.js
require([
    'dollar'
    'appname/app'
], function($, app){

    describe('app.wrapper', function(){
        it('sould be an Dollar object', function(){
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


