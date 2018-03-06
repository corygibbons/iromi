import tinycolor from 'tinycolor2';

const options = {
  maxIterations: 25,
  increment: 5
};

const decideDirection = color => {
  // we have a text color and bg color which are the same at this point
  // we need to check if they are readable (currently not because they're the same)
  let colorText = color.clone();
  let colorBackground = color.clone();
  let readable = false;

  // prevent us from an infinite loop
  let safety = 0;

  // take an educated guess and try to cut down on iterations
  if (color.isDark()) {
    while (!readable && safety < options.maxIterations) {
      colorText = colorText.lighten(options.increment);
      readable = tinycolor.isReadable(colorText, colorBackground, {
        level: 'AAA',
        size: 'small'
      });
      safety++;
    }
    if (!readable) {
      safety = 0;
      while (!readable && safety < options.maxIterations) {
        colorText = colorText.darken(options.increment);
        readable = tinycolor.isReadable(colorText, colorBackground, {
          level: 'AAA',
          size: 'small'
        });
        safety++;
      }
    }
  } else {
    while (!readable && safety < options.maxIterations) {
      colorText = colorText.darken(options.increment);
      readable = tinycolor.isReadable(colorText, colorBackground, {
        level: 'AAA',
        size: 'small'
      });
      safety++;
    }
    if (!readable) {
      safety = 0;
      while (!readable && safety < options.maxIterations) {
        colorText = colorText.lighten(options.increment);
        readable = tinycolor.isReadable(colorText, colorBackground, {
          level: 'AAA',
          size: 'small'
        });
        safety++;
      }
    }
  }

  return colorText.isDark() ? 'dark' : 'light';
};

export default decideDirection;
