import test from 'ava';
import tiny from 'tinycolor2';

import shift from './';

const ranges = {
  yellow: {
    h: [40, 55],
    s: [0.75, 1],
    l: [0.55, 0.6]
  }
};

test('returns a valid color', t => {
  const color = shift('blue', ranges.yellow);
  t.true(tiny(color).isValid());
});

test('returns the same color if it falls within range', t => {
  const original = tiny({ h: 50, s: 0.8, l: 0.57 }).toRgbString();
  const shifted = shift(original, ranges.yellow);
  t.true(original === shifted);
});
