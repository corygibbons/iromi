import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';

let plugins = [
  babel(babelrc()),
];

if (process.env.BUILD !== 'production') {
  plugins.push(istanbul({
    exclude: ['test/**/*', 'node_modules/**/*']
  }));
}

export default {
  entry: 'src/index.js',
  plugins: plugins,
  external: [ 'tinycolor2' ],
  targets: [
    {
      dest: 'dist/iromi.js',
      format: 'cjs'
    }
  ]
};
