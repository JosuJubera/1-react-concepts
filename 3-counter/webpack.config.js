const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
              modules: true,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
};