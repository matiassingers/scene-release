'use strict';

var assert = require('assert');
var sceneRelease = require('./');

describe('sceneRelease', function(){
  it('should parse The Raid 2 example correctly', function() {
    var result = sceneRelease('The.Raid.2.2014.BluRay.720p.DTS.x264-CHD');

    assert.equal(result.title, 'The Raid 2');
    assert.equal(result.original, 'The.Raid.2.2014.BluRay.720p.DTS.x264-CHD');
    assert.equal(result.year, '2014');
    assert.equal(result.group, 'CHD');

    assert.equal(result.resolution, '720p');
    assert.equal(result.type, 'BluRay');

    assert.equal(result.video, 'x264');
    assert.equal(result.audio, 'DTS');

    assert.equal(result.language, '');
    assert.equal(result.tags, null);
    assert.equal(result.edition, '');
    assert.equal(result.release, '');
  });

  it('should parse Gravity example correctly', function() {
    var result = sceneRelease('Gravity.2013.1080p.BluRay.x264-SPARKS');

    assert.equal(result.title, 'Gravity');
    assert.equal(result.original, 'Gravity.2013.1080p.BluRay.x264-SPARKS');
    assert.equal(result.year, '2013');
    assert.equal(result.group, 'SPARKS');

    assert.equal(result.resolution, '1080p');
    assert.equal(result.type, 'BluRay');

    assert.equal(result.video, 'x264');
    assert.equal(result.audio, '');

    assert.equal(result.language, '');
    assert.equal(result.tags, null);
    assert.equal(result.edition, '');
    assert.equal(result.release, '');
  });

  it('should parse The Lego Movie example correctly', function() {
    var result = sceneRelease('The.Lego.Movie.2014.3D.COMPLETE.BLURAY-BAKED');

    assert.equal(result.title, 'The Lego Movie');
    assert.equal(result.original, 'The.Lego.Movie.2014.3D.COMPLETE.BLURAY-BAKED');
    assert.equal(result.year, '2014');
    assert.equal(result.group, 'BAKED');

    assert.equal(result.resolution, '');
    assert.equal(result.type, 'BLURAY');

    assert.equal(result.video, '');
    assert.equal(result.audio, '');

    assert.equal(result.language, '');
    assert.equal(result.tags[0], 'COMPLETE');
    assert.equal(result.edition, '3D');
    assert.equal(result.release, '');
  });

  it('should parse Thor: The Dark World example correctly', function() {
    var result = sceneRelease('Thor.The.Dark.World.3D.2013.MULTi.COMPLETE.BLURAY-iND');

    assert.equal(result.title, 'Thor The Dark World');
    assert.equal(result.original, 'Thor.The.Dark.World.3D.2013.MULTi.COMPLETE.BLURAY-iND');
    assert.equal(result.year, '2013');
    assert.equal(result.group, 'iND');

    assert.equal(result.resolution, '');
    assert.equal(result.type, 'BLURAY');

    assert.equal(result.video, '');
    assert.equal(result.audio, '');

    assert.equal(result.language, 'MULTi');
    assert.equal(result.tags[0], 'COMPLETE');
    assert.equal(result.edition, '3D');
    assert.equal(result.release, '');
  });

  it('should parse Veronica Mars french language example correctly', function() {
    var result = sceneRelease('Veronica.Mars.2014.LIMITED.FRENCH.720p.BluRay.x264-PRiDEHD');

    assert.equal(result.title, 'Veronica Mars');
    assert.equal(result.original, 'Veronica.Mars.2014.LIMITED.FRENCH.720p.BluRay.x264-PRiDEHD');
    assert.equal(result.year, '2014');
    assert.equal(result.group, 'PRiDEHD');

    assert.equal(result.resolution, '720p');
    assert.equal(result.type, 'BluRay');

    assert.equal(result.video, 'x264');
    assert.equal(result.audio, '');

    assert.equal(result.language, 'FRENCH');
    assert.equal(result.tags[0], 'LIMITED');
    assert.equal(result.edition, '');
    assert.equal(result.release, '');
  });

  it('should parse long title with The 100-Year-Old Man example correctly', function() {
    var result = sceneRelease('Hundraaringen.Som.Klev.Ut.Genom.Fonstret.Och.Forsvann.2013.DiRFiX.SWEDiSH.1080p.BluRay.x264-GNiSTOR');

    assert.equal(result.title, 'Hundraaringen Som Klev Ut Genom Fonstret Och Forsvann');
    assert.equal(result.original, 'Hundraaringen.Som.Klev.Ut.Genom.Fonstret.Och.Forsvann.2013.DiRFiX.SWEDiSH.1080p.BluRay.x264-GNiSTOR');
    assert.equal(result.year, '2013');
    assert.equal(result.group, 'GNiSTOR');

    assert.equal(result.resolution, '1080p');
    assert.equal(result.type, 'BluRay');

    assert.equal(result.video, 'x264');
    assert.equal(result.audio, '');

    assert.equal(result.language, 'SWEDiSH');
    assert.equal(result.tags, null);
    assert.equal(result.edition, '');
    assert.equal(result.release, 'DiRFiX');
  });
});
