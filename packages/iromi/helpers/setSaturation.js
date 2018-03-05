import tinycolor from 'tinycolor2';
import modulate from './modulate';

const setSaturation = function (background, color) {

  const hsl = background.toHsl();

  if (hsl.l * 100 < 30 && hsl.s > 0.25 ) {
    let newHsl = color.toHsl();
    newHsl.s = modulate(0.1, [0, hsl.s], [0,0.20], true);
    color = tinycolor(newHsl).lighten(15);
  }

  return color;
}

export default setSaturation;
