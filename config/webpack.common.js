const path = require("path");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// use the following for copying static assets, such as images
//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        vendors: './src/vendors.js',
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            inject: 'footer',
            template: './templates/index.html'
        }),
        // again, use with the above plugin for copying static assets
        // new CopyWebpackPlugin([
        //     {
        //         from:'./src/img',to:'img'
        //     }
        // ]),
    ],
    output: {
        filename: '[name].bundle.min.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            img: path.resolve(__dirname, './src/img/'),
            js: path.resolve(__dirname, './src/js/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jp(e*)g|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            //disable: true, // webpack@2.x and newer
                        },
                    }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};
