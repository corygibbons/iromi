import test from 'ava';
import tiny from 'tinycolor2';

import decideDirection from '../helpers/decideDirection';
import modulate from '../helpers/modulate';

test('decideDirection() — should return dark if the colour is light', t => {
  t.is('dark', decideDirection(tiny('#ffffff')));
  t.is('dark', decideDirection(tiny('#99FFCC')));
  t.is('dark', decideDirection(tiny('#69afff')));
});

test('modulate() — should modulate between two numbers', t => {
  t.is(50, modulate(0.5, [0, 1], [0, 100]));
  t.is(100, modulate(1, [0, 1], [0, 100]));
  t.is(200, modulate(2, [0, 1], [0, 100]));
  t.is(100, modulate(2, [0, 1], [0, 100], true));
  t.is(1, modulate(5, [50, 100], [10, 20]));
});

test('modulate() — should be able to convert c to f', t => {
  t.is(50, modulate(0.5, [0, 1], [0, 100]));
});

test('modulate() — should be able to convert km to miles', t => {
  t.is(86, modulate(30, [0, 100], [32, 212]));
});
