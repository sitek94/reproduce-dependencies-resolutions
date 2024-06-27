const {resolve} = require('path')
const webpack = require('webpack')
const {DuplicatesPlugin} = require('inspectpack/plugin')

/**
 * @type {webpack.Configuration}
 */
const config = {
  devtool: false,
  context: resolve(__dirname, '..'),
  entry: {
    bundle: resolve(__dirname, 'index.js'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    pathinfo: true,
    filename: '[name].js',
  },
  plugins: [
    new DuplicatesPlugin({
      emitErrors: process.env.IP_EMIT_ERROR === 'true',
      verbose: process.env.IP_VERBOSE === 'true',
    }),
  ],
}

module.exports = config
