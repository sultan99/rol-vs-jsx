const CopyPlugin = require(`copy-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const DynamicCdnWebpackPlugin = require(`dynamic-cdn-webpack-plugin`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: rootPath(`./index`),
  output: {
    filename: `bundle.js`,
    path: rootPath(`./dist`),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      }
    ]
  },
  resolve: {
    alias: {
      'components': rootPath(`./components`),
    }
  },
  plugins: [
    new CopyPlugin([{from: rootPath(`../assets`)}]),
    new HtmlWebPackPlugin({template: rootPath(`../assets/index.html`)}),
    new DynamicCdnWebpackPlugin({env: `production`}),
  ]
}
