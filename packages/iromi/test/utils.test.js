import test from 'ava';
import tiny from 'tinycolor2';

import { decideDirection } from '../utils';

test('decideDirection() — should return dark if the colour is light', t => {
  t.is('dark', decideDirection(tiny('#ffffff')));
  t.is('dark', decideDirection(tiny('#99FFCC')));
  t.is('dark', decideDirection(tiny('#69afff')));
});
