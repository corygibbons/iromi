import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  input: 'index.js',
  plugins: [babel(babelrc({ addExternalHelpersPlugin: false }))],
  external: ['tinycolor2'],
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    }
  ]
};
