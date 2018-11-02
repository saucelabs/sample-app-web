const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "index.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/inventory.html",
      filename: "inventory.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/inventory-item.html",
      filename: "inventory-item.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/cart.html",
      filename: "cart.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/checkout-step-one.html",
      filename: "checkout-step-one.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/checkout-step-two.html",
      filename: "checkout-step-two.html"
    }),
    new HtmlWebPackPlugin({
      template: "src/checkout-complete.html",
      filename: "checkout-complete.html"
    }),
    new CopyWebpackPlugin([{
      from: "src/css/",
      to: "css/"
    },
    {
      from: "src/img/",
      to: "img/"
    }])
  ]
};