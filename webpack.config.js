const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [{
      test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      },
      {
      test:/\.(s*)css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader'
        ],
      })
    },
    {
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /(node_modules)|(boer_components)|(public)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      options: {
        name: '[hash].[ext]',
        limit: 10000,
      },
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'anatomy.html',
      template: path.resolve(__dirname, 'src', 'anatomy.html'),
    }),
    new ExtractTextPlugin('app.bundle.css')
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.scss']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/public/')
  }
};