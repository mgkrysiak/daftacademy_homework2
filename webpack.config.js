const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV === 'production';


const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: distDir
  },
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: distDir
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
test: /\.s(a|c)ss$/,
use: [
isProduction
? MiniCssExtractPlugin.loader
: { loader: 'style-loader', options: { sourceMap: true } },
{ loader: 'css-loader', options: { sourceMap: isProduction } },
{ loader: 'postcss-loader', options: { sourceMap: isProduction } },
{ loader: 'sass-loader', options: { sourceMap: isProduction } }
]
}

    ]
  },
  plugins: [new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
// Options similar to the same options in webpackOptions.output; optional
filename: "[name].css",
chunkFilename: "[id].css"
})
]
};
