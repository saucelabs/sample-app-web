const {resolve} = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.ejs",
            filename: "index.html"
        }),
        new HtmlWebPackPlugin({
            template: "src/inventory.ejs",
            filename: "inventory.html"
        }),
        new HtmlWebPackPlugin({
            template: "src/inventory-item.ejs",
            filename: "inventory-item.html"
        }),
        new HtmlWebPackPlugin({
            template: "src/cart.ejs",
            filename: "cart.html"
        }),
        new HtmlWebPackPlugin({
            template: "src/checkout-step-one.ejs",
            filename: "checkout-step-one.html"
        }),
        new HtmlWebPackPlugin({
            template: "src/checkout-step-two.ejs",
            filename: "checkout-step-two.html"
        }),
        new HtmlWebPackPlugin({
            template: "src/checkout-complete.ejs",
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
    ],
    devServer: {
        contentBase: resolve(__dirname, "dist"),
        historyApiFallback: true,
        compress: true,
        port: 3000,
        open: "Google Chrome",
        watchContentBase: true
    }
};
