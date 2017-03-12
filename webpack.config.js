// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var DEBUG = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: DEBUG ? 'babel-loader'
                    : 'babel-try-catch-loader?rethrow=true&verbose&reporter=reportError&tempdir=.tryCatchResult',
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        })
    ],

    entry: {
        index: './public/index',
    },

    output: {
        path: 'release',
        filename: DEBUG ? '[name].js' : '[name].[chunkhash].js',
        chunkFilename: "[chunkhash].js"
    },

    devtool: DEBUG ? 'inline-source-map' : false,
};
