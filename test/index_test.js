import assert from 'assert';
import tinycolor from 'tinycolor2';

import iromi from '../dist/iromi';


const colors = {
  // colors that should be able to meet AAA compliance
  aaa: [
    '#ffffff', '#000000', '#0000ff', '#ffff00', '#00ff00'
  ],
  // colors that should be able to meet AA compliance
  aa: [
    '#9012FE', '#AC3140', '#F6A623', '#3779B1', '#194d33',
    '#99FFCC', '#3D6176', '#BFBBD1', '#5DD3FF', '#FFD05D'
  ]
}

describe('Iromi', function() {
  describe('type()', function() {

    it('small text should meet WCAG AA standards', function() {
      let options = {level: 'AA', size: 'small'};
      for (let color of colors.aaa.concat(colors.aa)) {
        assert.ok(tinycolor.isReadable(
          iromi.type(color, 'default', options.size), color, options)
        )
      }
    });

    it('large text should meet WCAG AA standards', function() {
      let options = {level: 'AA', size: 'large'};
      for (let color of colors.aaa.concat(colors.aa)) {
        assert.ok(tinycolor.isReadable(
          iromi.type(color, 'default', options.size), color, options)
        )
      }
    });

    it('small text should meet WCAG AAA standards', function() {
      let options = {level: 'AAA', size: 'small'};
      for (let color of colors.aaa) {
        assert.ok(tinycolor.isReadable(
          iromi.type(color, 'more', options.size), color, options)
        )
      }
    });

    it('large text should meet WCAG AAA standards', function() {
      let options = {level: 'AAA', size: 'large'};
      for (let color of colors.aaa) {
        assert.ok(tinycolor.isReadable(
          iromi.type(color, 'more', options.size), color, options)
        )
      }
    });
  });
});
