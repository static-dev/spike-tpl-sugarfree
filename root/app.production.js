const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const {UglifyJsPlugin} = require('webpack').optimize

module.exports = {
  // disable source maps
  devtool: false,
  // webpack optimization and minfication plugins
  plugins: [new UglifyJsPlugin()],
  // adds html minification plugin
  reshape: htmlStandards({
    parser: false,
    locals: { foo: 'bar' },
    minify: true
  }),
  // adds css minification plugin
  postcss: cssStandards({ parser: false, minify: true })
}
