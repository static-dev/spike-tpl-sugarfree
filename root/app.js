const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const env = process.env.NODE_ENV

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    parser: false,
    locals: { foo: 'bar' },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    parser: false,
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards({ modules: false })
}
