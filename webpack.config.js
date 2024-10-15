const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const { sources } = require('webpack');

module.exports = {

    mode: 'development',
    optimization:{
        minimizer:[new CssMinimizerPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],

            },
            {
                test: /\.html$/i,
                use:[
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
                    
            },
            {
                test:/\.(png|jpe?g|gif|svg)$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            // esModule: false,
                            name: 'assets/[path][name].[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false

        })

    ]



}