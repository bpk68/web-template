const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist",
        index: "index.html",
        compress: false,
        port: 8080,
        open: true,
        watchOptions: {
            poll: true
        },
        watchContentBase: true
    }
});
