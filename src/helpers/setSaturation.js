import tinycolor from 'tinycolor2';

const setSaturation = function (background, color) {

  const hsl = background.toHsl();
  const saturation = hsl.s * 100;
  const typeSaturation = color.toHsl().s * 100;

  if (hsl.l * 100 < 30 ) {
    let newHsl = color.toHsl();
    newHsl.s = 0.25;
    color = tinycolor(newHsl).lighten(15);
  }

  return color;
}

export default setSaturation;
