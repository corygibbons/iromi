import test from 'ava';
import chroma from 'chroma-js';
import tiny from 'tinycolor2';

import { fontColor } from '../';

const colors = {
  // colors that should be able to meet AAA compliance
  aaa: ['#ffffff', '#000000', '#0000ff', '#ffff00', '#00ff00'],
  // colors that should be able to meet AA compliance
  aa: [
    '#9012FE',
    '#AC3140',
    '#F6A623',
    '#3779B1',
    '#194d33',
    '#99FFCC',
    '#3D6176',
    '#BFBBD1',
    '#5DD3FF',
    '#FFD05D'
  ]
};

test('small text should meet WCAG AA standards', t => {
  const options = { level: 'AA', size: 'small' };

  for (let color of colors.aaa.concat(colors.aa)) {
    t.true(
      tiny.isReadable(fontColor(color, 'default', options.size), color, options)
    );
  }
});

test('large text should meet WCAG AA standards', t => {
  let options = { level: 'AA', size: 'large' };

  for (let color of colors.aaa.concat(colors.aa)) {
    t.true(
      tiny.isReadable(fontColor(color, 'default', options.size), color, options)
    );
  }
});

test('small text should meet WCAG AAA standards', t => {
  let options = { level: 'AAA', size: 'small' };

  for (let color of colors.aaa) {
    t.true(
      tiny.isReadable(fontColor(color, 'more', options.size), color, options)
    );
  }
});

test('large text should meet WCAG AAA standards', t => {
  let options = { level: 'AAA', size: 'large' };

  for (let color of colors.aaa) {
    t.true(
      tiny.isReadable(fontColor(color, 'more', options.size), color, options)
    );
  }
});

test('WCAG AA complaince snapshots', t => {
  const colors = chroma.scale('Spectral').colors(50);
  const tree = colors.map((color, i) => {
    const ratio = tiny.readability(color, fontColor(color));
    return {
      index: i,
      input: color,
      output: fontColor(color),
      ratio: ratio,
      pass: tiny.isReadable(color, fontColor, { level: 'AA', size: 'small' })
    };
  });
  t.snapshot(tree);
});
