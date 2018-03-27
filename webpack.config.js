const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.js$/, // include .js files
            enforce: 'pre', // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            include: path.join(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015',
                        'stage-2',
                        'react'
                    ]
                }
            },
            // {
            //         test: /\.css$/,
            //         loader: 'style!css'
            // }
            ],
            // use: [
            //     {
            //         loader: "jshint-loader",
            //         options: {
            //             camelcase: true,
            //             emitErrors: false,
            //             failOnHint: false
            //         }
            //     }
            // ]
        },
        ]
    }
};