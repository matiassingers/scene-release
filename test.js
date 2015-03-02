'use strict';

var assert = require('assert');
var sceneRelease = require('./');

describe('sceneRelease', function(){
  it('should parse Citizenfour example correctly', function() {
    var result = sceneRelease('Citizenfour.2014.720p.WEB-DL.AAC2.0.H.264-NOGRP');

    assert.equal(result.title, 'Citizenfour');
    assert.equal(result.original, 'Citizenfour.2014.720p.WEB-DL.AAC2.0.H.264-NOGRP');
    assert.equal(result.year, '2014');
    assert.equal(result.group, 'NOGRP');

    assert.equal(result.resolution, '720p');
    assert.equal(result.type, 'WEB-DL');

    assert.equal(result.video, 'H.264');
    assert.equal(result.audio, 'AAC2.0');

    assert.equal(result.language, void 0);
    assert.equal(result.tags, null);
    assert.equal(result.edition, void 0);
    assert.equal(result.release, void 0);
  });

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

    assert.equal(result.language, void 0);
    assert.equal(result.tags, null);
    assert.equal(result.edition, void 0);
    assert.equal(result.release, void 0);
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
    assert.equal(result.audio, void 0);

    assert.equal(result.language, void 0);
    assert.equal(result.tags, null);
    assert.equal(result.edition, void 0);
    assert.equal(result.release, void 0);
  });

  it('should parse The Lego Movie example correctly', function() {
    var result = sceneRelease('The.Lego.Movie.2014.3D.COMPLETE.BLURAY-BAKED');

    assert.equal(result.title, 'The Lego Movie');
    assert.equal(result.original, 'The.Lego.Movie.2014.3D.COMPLETE.BLURAY-BAKED');
    assert.equal(result.year, '2014');
    assert.equal(result.group, 'BAKED');

    assert.equal(result.resolution, void 0);
    assert.equal(result.type, 'BLURAY');

    assert.equal(result.video, void 0);
    assert.equal(result.audio, void 0);

    assert.equal(result.language, void 0);
    assert.equal(result.tags[0], 'COMPLETE');
    assert.equal(result.edition, '3D');
    assert.equal(result.release, void 0);
  });

  it('should parse Thor: The Dark World example correctly', function() {
    var result = sceneRelease('Thor.The.Dark.World.3D.2013.MULTi.COMPLETE.BLURAY-iND');

    assert.equal(result.title, 'Thor The Dark World');
    assert.equal(result.original, 'Thor.The.Dark.World.3D.2013.MULTi.COMPLETE.BLURAY-iND');
    assert.equal(result.year, '2013');
    assert.equal(result.group, 'iND');

    assert.equal(result.resolution, void 0);
    assert.equal(result.type, 'BLURAY');

    assert.equal(result.video, void 0);
    assert.equal(result.audio, void 0);

    assert.equal(result.language, 'MULTi');
    assert.equal(result.tags[0], 'COMPLETE');
    assert.equal(result.edition, '3D');
    assert.equal(result.release, void 0);
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
    assert.equal(result.audio, void 0);

    assert.equal(result.language, 'FRENCH');
    assert.equal(result.tags[0], 'LIMITED');
    assert.equal(result.edition, void 0);
    assert.equal(result.release, void 0);
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
    assert.equal(result.audio, void 0);

    assert.equal(result.language, 'SWEDiSH');
    assert.equal(result.tags, null);
    assert.equal(result.edition, void 0);
    assert.equal(result.release, 'DiRFiX');
  });

  it('should parse title with a year in the beginning, like 2001: A Space Odyssey', function() {
    var result = sceneRelease('2001.A.Space.Odyssey.1968.iNTERNAL.1080p.BluRay.x264-MANNEKEPiS');

    assert.equal(result.title, '2001 A Space Odyssey');
    assert.equal(result.original, '2001.A.Space.Odyssey.1968.iNTERNAL.1080p.BluRay.x264-MANNEKEPiS');
    assert.equal(result.year, '1968');
    assert.equal(result.group, 'MANNEKEPiS');

    assert.equal(result.resolution, '1080p');
    assert.equal(result.type, 'BluRay');

    assert.equal(result.video, 'x264');
    assert.equal(result.audio, void 0);

    assert.equal(result.language, void 0);
    assert.equal(result.tags[0], 'iNTERNAL');
    assert.equal(result.edition, void 0);
    assert.equal(result.release, void 0);
  });

  it('should parse Greys Anatomy TV episode example with whitespace correctly', function() {
    var result = sceneRelease('Greys Anatomy S11E12 720p WEB-DL DD5 1 H 264-NTb');

    assert.equal(result.title, 'Greys Anatomy S11E12');
    assert.equal(result.original, 'Greys Anatomy S11E12 720p WEB-DL DD5 1 H 264-NTb');
    assert.equal(result.year, void 0);
    assert.equal(result.group, 'NTb');

    assert.equal(result.resolution, '720p');
    assert.equal(result.type, 'WEB-DL');

    assert.equal(result.video, 'H 264');
    assert.equal(result.audio, 'DD5 1');

    assert.equal(result.language, void 0);
    assert.equal(result.tags, null);
    assert.equal(result.edition, void 0);
    assert.equal(result.release, void 0);
  });

  it('should parse House of Cards TV episode example with NF tag correctly', function() {
    var result = sceneRelease('House.of.Cards.2013.S03E01.720p.NF.WEBRip.DD5.1.x264-NTb');

    assert.equal(result.title, 'House of Cards S03E01');
    assert.equal(result.original, 'House.of.Cards.2013.S03E01.720p.NF.WEBRip.DD5.1.x264-NTb');
    assert.equal(result.year, "2013");
    assert.equal(result.group, 'NTb');

    assert.equal(result.resolution, '720p');
    assert.equal(result.type, 'WEBRip');

    assert.equal(result.video, 'x264');
    assert.equal(result.audio, 'DD5.1');

    assert.equal(result.language, void 0);
    assert.equal(result.tags, null);
    assert.equal(result.edition, 'NF');
    assert.equal(result.release, void 0);
  });

  it('should parse What If movie example with EXTENDED CUT tag', function() {
    var result = sceneRelease('What.If.2013.Extended.Cut.DVDRip.x264-EXViD');

    assert.equal(result.title, 'What If');
    assert.equal(result.original, 'What.If.2013.Extended.Cut.DVDRip.x264-EXViD');
    assert.equal(result.year, "2013");
    assert.equal(result.group, 'EXViD');

    assert.equal(result.resolution, void 0);
    assert.equal(result.type, 'DVDRip');

    assert.equal(result.video, 'x264');
    assert.equal(result.audio, void 0);

    assert.equal(result.language, void 0);
    assert.equal(result.tags, null);
    assert.equal(result.edition, 'Extended Cut');
    assert.equal(result.release, void 0);
  });
});
