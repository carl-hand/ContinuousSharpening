var path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                },
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
            }
        ]
    }
};