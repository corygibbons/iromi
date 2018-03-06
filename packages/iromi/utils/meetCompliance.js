import tinycolor from 'tinycolor2';

const options = {
  maxIterations: 25,
  increment: 5
};

// This function will give us a colour that is lightened or darkened
// to meet minimum WCAG compliance
const meetCompliance = (color, level, size, direction) => {
  const colorBackground = color.clone();
  let safety = 0;
  let readable = tinycolor.isReadable(color, colorBackground, {
    level: level,
    size: size
  });

  // check if we have a direction to go in
  if (direction != 'light' || direction != 'dark') {
    direction = colorBackground.isDark() ? 'light' : 'dark';
  }

  while (!readable && safety < options.maxIterations) {
    color =
      direction == 'light'
        ? color.lighten(options.increment)
        : color.darken(options.increment);
    readable = tinycolor.isReadable(color, colorBackground, {
      level: level,
      size: size
    });
    safety++;
  }

  color.direction = direction;
  return color;
};

export default meetCompliance;
