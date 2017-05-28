const modulate = function (value, rangeA, rangeB, limit = false) {

  const fromLow = rangeA[0]
  const fromHigh = rangeA[1];
  const toLow = rangeB[0]
  const toHigh = rangeB[1];

  let result = toLow + (((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow));

  if (limit == true) {
    if (toLow < toHigh) {
      if (result < toLow) {
        return toLow;
      } else if (result > toLow) {
        return toHigh;
      }

    } else {
      if (result > toLow) {
        return toLow;
      } else if (result < toHigh) {
        return toHigh;
      }
    }
  }
  return result;
}

export default modulate;
