import React from 'react';
import chroma from 'chroma-js';
import { Box, Flex } from 'grid-styled';

import { fontColor } from '../index';

const colors = chroma.scale('Spectral').colors(50);
const tiles = colors.map((color, i) => {
  const lessContrast = fontColor(color, 'less');
  const defaultContrast = fontColor(color);
  const moreContrast = fontColor(color, 'more');

  return (
    <Flex
      key={i}
      style={{ background: color, textAlign: 'center' }}
      justifyContent="space-around"
      py={3}
    >
      <Box width={1 / 1} color={lessContrast}>
        {lessContrast}
        <br />
        {chroma.contrast(color, lessContrast).toFixed(2)}
      </Box>
      <Box width={1 / 1} color={defaultContrast}>
        {defaultContrast}
        <br />
        {chroma.contrast(color, defaultContrast).toFixed(2)}
      </Box>
      <Box width={1 / 1} color={moreContrast}>
        {moreContrast}
        <br />
        {chroma.contrast(color, moreContrast).toFixed(2)}
      </Box>
    </Flex>
  );
});

const App = props => {
  return (
    <React.Fragment>
      <title>Iromi</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            'body{margin: 0; font-family:-apple-system,BlinkMacSystemFont,sans-serif;line-height: 1.4;-webkit-font-smoothing: antialiased;}'
        }}
      />
      {tiles}
    </React.Fragment>
  );
};

export default App;
