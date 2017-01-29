const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const nodeModules = {}

fs.readdirSync('node_modules').filter(x => ['.bin'].indexOf(x) === -1)
.forEach(mod => nodeModules[mod] = `commonjs ${mod}` )

module.exports = {
  name: 'server',
  target: 'node',

  entry: [
    './server.js'
  ],
  module: {
    rules: [
      { test: /\.js.*$/, use: ['babel-loader'] }
    ]
  },
  output: {
    path: '.',
    filename: 'server.bundle.js',
  },
  externals: nodeModules
}
