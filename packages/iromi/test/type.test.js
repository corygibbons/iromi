import test from 'ava';
import tiny from 'tinycolor2';

import iromi from '../index';

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
      tiny.isReadable(
        iromi.type(color, 'default', options.size),
        color,
        options
      )
    );
  }
});

test('large text should meet WCAG AA standards', t => {
  let options = { level: 'AA', size: 'large' };

  for (let color of colors.aaa.concat(colors.aa)) {
    t.true(
      tiny.isReadable(
        iromi.type(color, 'default', options.size),
        color,
        options
      )
    );
  }
});

test('small text should meet WCAG AAA standards', t => {
  let options = { level: 'AAA', size: 'small' };

  for (let color of colors.aaa) {
    t.true(
      tiny.isReadable(iromi.type(color, 'more', options.size), color, options)
    );
  }
});

test('large text should meet WCAG AAA standards', t => {
  let options = { level: 'AAA', size: 'large' };

  for (let color of colors.aaa) {
    t.true(
      tiny.isReadable(iromi.type(color, 'more', options.size), color, options)
    );
  }
});
