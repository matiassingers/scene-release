#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var sceneRelease = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    scene-release Citizenfour.2014.720p.WEB-DL.AAC2.0.H.264-NOGRP',
    '',
    '    => { "year": "2014",',
    '         "resolution": "720p",',
    '         ... }'
  ].join('\n'));
}

if(argv.indexOf('--help') !== -1){
  help();
  return;
}

if(argv.indexOf('--version') !== -1){
  console.log(pkg.version);
  return;
}

if(!argv[0]){
  return console.error('Please supply a release name');
}

console.log(JSON.stringify(sceneRelease(argv[0]), null, 4));
