# scene-release [![Build Status](http://img.shields.io/travis/matiassingers/scene-release.svg?style=flat-square)](https://travis-ci.org/matiassingers/scene-release) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/scene-release.svg?style=flat-square)](https://gemnasium.com/matiassingers/scene-release)
> parse scene release names

Examples and conventions based on:
- Good collection of scene rulesets: http://scenerules.irc.gs/
- Very brief Wikipedia description of scene naming schemes: http://en.wikipedia.org/wiki/Standard_(warez)#Naming
- Examples from any decent predb: http://rescene.wikidot.com/scene-databases

## Install

```sh
$ npm install --save scene-release
```


## Usage

```js
var sceneRelease = require('scene-release');

sceneRelease(Citizenfour.2014.720p.WEB-DL.AAC2.0.H.264-NOGRP)
// => { "year": "2014",
//      "resolution": "720p",
//      ... }
```


## CLI

```sh
$ npm install --global scene-release
```

```sh
$ scene-release --help

  parse scene release names

  Example
    scene-release Citizenfour.2014.720p.WEB-DL.AAC2.0.H.264-NOGRP

    => { "year": "2014",
         "resolution": "720p",
         ... }
```


## License

MIT © [Matias Singers](http://mts.io)
