'use strict';

var { babel } = require('@rollup/plugin-babel');
// uglify handles only es5 code, so this also acts as smoke test against shipping es2015+ syntax
var { uglify } = require('rollup-plugin-uglify');
var pkg = require('./package.json');

var banner = '//  Utils v' + pkg.version + '\n'
  + '//  https://github.com/golechhasaloni/utilities\n'
  + '//  (c) 2013-' + new Date().getFullYear() + ' \n';

var input = 'source/index.js';

var config = {
  input: input,
  output: {
    format: 'umd',
    name: 'R',
    exports: 'named',
    banner: banner
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: [['@babel/preset-env', { targets: { ie: '11' } }]]
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
      warnings: false
    })
  );
}

module.exports = config;
