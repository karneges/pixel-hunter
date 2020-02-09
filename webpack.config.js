module.exports = {
  mode: "development",

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
            outputPath: 'images',
            name: '[name]-[sha1:hash:7].[ext]'
          }
        }]
      },
      /// CSS
      {
        test: /\.(css)$/,
        use: [{
            loader: 'style-loader'
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
            loader: 'style-loader'
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
  }
};
