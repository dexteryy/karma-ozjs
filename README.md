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
    "karma-ozjs": "~0.4.0"
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
        frameworks: [
            'mocha',
            'chai-sinon',
            'ozjs', // ozjs must be executed last
        ],
        // list of files / patterns to load in the browser
        files: [
            { pattern: 'js/vendor/**/*.js', included: false },
            { pattern: 'js/appname/**/*.js', included: false },
            "test/config.js",
            "test/tests.js",
            "test/spec_model_A.js",
            "test/spec_view_B.js"
            // ...
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
        'test': '../../test/',
        'appname': '../appname/'
    }
});

define.amd = {}; // the default is null in karma-ozjs
```

## Using oz.js in tests

```js
// test/tests.js
require([
    'dollar',
    'appname/app'
], function($, app){

    describe('app.wrapper', function(){
        it('sould be an Dollar object', function(){
            expect(app.wrapper).to.be.an.instanceof($);
        });
    });

});

// `describe` is invalid here
```

```js
// test/spec_model_A.js
require([
    'dollar',
    'appname/model/A'
], function($, model_A){

    // describe(...

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


