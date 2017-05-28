import assert from 'assert';
import tinycolor from 'tinycolor2';

import decideDirection from '../src/helpers/decideDirection';
import modulate from '../src/helpers/modulate';

describe('Helper functions', function() {

  describe('decideDirection()', function() {
    it('should return dark if the colour is light', function() {
      assert.equal('dark', decideDirection(tinycolor('#ffffff')));
      assert.equal('dark', decideDirection(tinycolor('#99FFCC')));
      assert.equal('dark', decideDirection(tinycolor('#69afff')));
    });
    it('should return light if the colour is dark', function() {
      assert.equal('light', decideDirection(tinycolor('#000000')));
      assert.equal('light', decideDirection(tinycolor('#194d33')));
    });
  });

  describe('modulate()', function() {
    it('should modulate between two numbers', function() {
      assert.equal(50, modulate(0.5, [0, 1], [0, 100]));
      assert.equal(100, modulate(1, [0, 1], [0, 100]));
      assert.equal(200, modulate(2, [0, 1], [0, 100]));
      assert.equal(100, modulate(2, [0, 1], [0, 100], true));
      assert.equal(1, modulate(5, [50, 100], [10, 20]));
    })
    it('should be able to convert c to f', function() {
      assert.equal(50, modulate(0.5, [0, 1], [0, 100]));
    });
    it('should be able to convert km to miles', function() {
      assert.equal(86, modulate(30, [0, 100], [32, 212]));
    });
  });
});
