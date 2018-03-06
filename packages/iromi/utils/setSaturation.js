import tinycolor from 'tinycolor2';
import scale from 'scale-number-range';

const setSaturation = (background, color) => {
  const hsl = background.toHsl();

  if (hsl.l * 100 < 30 && hsl.s > 0.25) {
    let newHsl = color.toHsl();
    newHsl.s = scale(0.1, 0, hsl.s, 0, 0.2);
    color = tinycolor(newHsl).lighten(15);
  }

  return color;
};

export default setSaturation;
