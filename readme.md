# scene-release [![Build Status](http://img.shields.io/travis/matiassingers/scene-release.svg?style=flat-square)](https://travis-ci.org/matiassingers/scene-release) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/scene-release.svg?style=flat-square)](https://gemnasium.com/matiassingers/scene-release)
> parse scene release names

## Install

```sh
$ npm install --save scene-release
```


## Usage

```js
var sceneRelease = require('scene-release');

sceneRelease(The.Raid.2.2014.BluRay.720p.DTS.x264-CHD)
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
    scene-release The.Raid.2.2014.BluRay.720p.DTS.x264-CHD

    => { "year": "2014",
         "resolution": "720p",
         ... }
```


## License

MIT © [Matias Singers](http://mts.io)
