const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "production",

  module: {
    rules: [
      ///JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      ///IMAGE
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img',
            name: '[name].[ext]'
          }
        }]
      },
      /// CSS
      {
        test: /\.(css)$/,
        use: [{
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },

      ///SCSS
      {
        test: /\.(scss)$/,
        use: [{
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCSSExtractPlugin()
  ],
  devServer: {
    open: true
  }
};
