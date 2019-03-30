const CopyPlugin = require(`copy-webpack-plugin`)
const DynamicCdnWebpackPlugin = require(`dynamic-cdn-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`)
const cdnResolvers = require(`./cdn-resolvers`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: rootPath(`./index`),
  output: {
    filename: `bundle.js`,
    path: rootPath(`../dist/rol`),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, `css-loader`, `sass-loader`]
      }
    ]
  },
  resolve: {
    alias: {
      'general': rootPath(`../general`),
      'components': rootPath(`./components`),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({template: rootPath(`../general/index.html`)}),
    new MiniCssExtractPlugin({filename: `assets/[hash].css`}),
    new DynamicCdnWebpackPlugin({env: `production`, resolver: cdnResolvers}),
    new CopyPlugin([{from: rootPath(`../public`), to: `./assets`}]),
  ]
}
