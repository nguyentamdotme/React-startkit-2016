const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    {
      loader: "css-loader"
    },
    {
      loader: "sass-loader",
    }
  ],
  publicPath: '/dist'
});

const cssConfig = isProduction ? cssProd : cssDev;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jpe?g|png|svg/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    stats: "errors-only",
    hot: true,
    inline: true,
    open: true,
    openPage: '',
    // historyApiFallback: true,

  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'ReactJS Starter Kit',
        hash: true,
        minify: {
          collapseWhitespace: true
        },
        template: './src/index.html'
      }
    ),
    new ExtractTextPlugin({
      filename: 'index.css',
      disable: !isProduction,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
  ]
}
