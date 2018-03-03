import React from 'react';
import Chart from 'react-color-chart';

import shiftColor from './index';

const ranges = {
  warning: {
    h: [40, 55],
    s: [0.75, 1],
    l: [0.55, 0.6]
  },
  error: {
    h: [340, 10],
    s: [0.65, 0.9],
    l: [0.5, 0.55]
  },
  success: {
    h: [105, 155],
    s: [0.4, 0.65],
    l: [0.45, 0.5]
  },
  neutral: {
    h: [0, 360],
    s: [0, 0.15],
    l: [0.3, 0.4]
  }
};

const baseColor = '#0074d9';

const colors = [
  {
    label: 'Base',
    color: baseColor
  },
  {
    label: 'Neutral',
    color: shiftColor(baseColor, ranges.neutral)
  },
  {
    label: 'Warning',
    color: shiftColor(baseColor, ranges.warning)
  },
  {
    label: 'Error',
    color: shiftColor(baseColor, ranges.error)
  },
  {
    label: 'Success',
    color: shiftColor(baseColor, ranges.success)
  }
];

const App = () => <Chart colors={colors} />;

export default App;
