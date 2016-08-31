const htmlStandards = require('spike-html-standards')
const cssStandards = require('spike-css-standards')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const DedupePlugin = webpack.optimize.DedupePlugin
const OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin

module.exports = {
  // disable source maps
  devtool: false,
  // webpack optimization and minfication plugins
  plugins: [
    new UglifyJsPlugin(),
    new DedupePlugin(),
    new OccurrenceOrderPlugin()
  ],
  // image optimization
  module: {
    loaders: [{ test: /\.(jpe?g|png|gif|svg)$/i, loader: 'image-webpack' }]
  },
  // adds html minification plugin
  reshape: (ctx) => {
    return htmlStandards({
      parser: false,
      webpack: ctx,
      locals: { foo: 'bar' },
      minify: true
    })
  },
  // adds css minification plugin
  postcss: (ctx) => {
    return cssStandards({ parser: false, webpack: ctx, minify: true })
  }
}
