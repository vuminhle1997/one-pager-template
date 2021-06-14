const path = require('path')
const glob = require("glob")

module.exports = {
  mode: 'development',
  entry: glob.sync("./src/*"),
  devServer: {
    port: 9000,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "public", 'js'),
    publicPath: '/public/js/'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  }
}