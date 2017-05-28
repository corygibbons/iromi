import test from 'ava';
import tinycolor from 'tinycolor2';

import iromi from './index.js';
import decideDirection from './src/helpers/decideDirection';

const colors = [
  '#ffffff', '#000000', '#9012FE', '#AC3140', '#F6A623', '#3779B1', '#194d33',
  '#99FFCC'
]

test('Proper direction is being calculated by decideDirection()', t => {
  t.is( decideDirection(tinycolor('#ffffff')), 'dark' );
  t.is( decideDirection(tinycolor('#000000')), 'light' );
  t.is( decideDirection(tinycolor('#3779B1')), 'light' );
  t.is( decideDirection(tinycolor('#194d33')), 'light' );
  t.is( decideDirection(tinycolor('#99FFCC')), 'dark' );
  t.is( decideDirection(tinycolor('#69afff')), 'dark' );
});


test('Large text meets WCAG AA compliance standards', t => {
  let options = {level: 'AA', size: 'large'};
  t.plan(colors.length);
  for (let color of colors) {
    t.true( tinycolor.isReadable(
      iromi.type(color, 'default', options.size), color, options)
    );
  }
});


test('Large text meets WCAG AAA compliance standards', t => {
  let options = {level: 'AAA', size: 'large'};
  t.plan(colors.length);
  for (let color of colors) {
    t.true( tinycolor.isReadable(
      iromi.type(color, 'more', options.size), color, options)
    );
  }
});

test('Small text meets WCAG AA standards', t => {
  let options = {level: 'AA', size: 'small'};
  t.plan(colors.length);
  for (let color of colors) {
    t.true( tinycolor.isReadable(
      iromi.type(color, 'default', options.size), color, options)
    );
  }
});
