import inRange from 'in-range';
import scale from 'scale-number-range';
import tiny from 'tinycolor2';

export default (start, desired) => {
  const defaultHue = 180;
  const color = tiny(start).toHsl();

  Object.keys(desired).forEach(key => {
    const range = absoluteRange(desired[key]);

    if (inRange(color[key], range[0], range[1])) {
      return;
    } else {
      if (key === 'h') {
        color[key] = scale(
          color[key] || defaultHue,
          0,
          360,
          range[0],
          range[1]
        );
      } else {
        color[key] = scale(color[key], 0, 1, range[0], range[1]);
      }
    }
  });

  return tiny(color).toRgbString();
};

const absoluteRange = ([start, end]) => {
  if (start > end) {
    return [start, end + 360];
  } else {
    return [start, end];
  }
};
