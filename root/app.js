const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-env')

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    parser: false,
    locals: { foo: 'bar' }
  }),
  postcss: cssStandards({ parser: false }),
  babel: { presets: [[jsStandards, { modules: false }]] }
}
