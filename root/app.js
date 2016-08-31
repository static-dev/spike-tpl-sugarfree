const htmlStandards = require('spike-html-standards')
const cssStandards = require('spike-css-standards')
const latest = require('babel-preset-latest')

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({
      parser: false,
      webpack: ctx,
      locals: { foo: 'bar' }
    })
  },
  postcss: (ctx) => {
    return cssStandards({ parser: false, webpack: ctx })
  },
  babel: { presets: [latest] }
}
