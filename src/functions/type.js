import tinycolor from 'tinycolor2';
import decideDirection from '../helpers/decideDirection';
import meetCompliance from '../helpers/meetCompliance';
import setSaturation from '../helpers/setSaturation';

const type = function (background = '#ffffff', contrast = 'default', size = 'small') {

  let _color = tinycolor(background);
  let _background = tinycolor(background);

  if (!_color.isValid()) {
    throw new Error('Please use a valid color');
  }

  // check if all colors in the series need to be uniform. if so we adjust
  // lightness or darkness in the same direction for all of them
  // find out what direction we actually need to go in
  // we're basing it on which colour has AAA compliant large text
  const compliantIs = decideDirection(_color);

  // we know if it needs to be uniform and if what direction we need to go in
  // look at all the contrast levels and modify as needed
  switch (contrast) {
    case 'less':
      _color = meetCompliance(_color, 'AA', size, compliantIs);
      if ( _color.direction === 'dark' ) {
        _color = _color.lighten(15);
      } else {
        _color = _color.darken(15);
      }
      break;

    case 'default':
      _color = meetCompliance(_color, 'AA', size, compliantIs);
      break;

    case 'more':
      _color = meetCompliance(_color, 'AAA', size, compliantIs);
      break;
  }

  _color = setSaturation(_background, _color);

  return _color;
}

export default type;
