var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader","css-loader","sass-loader"]
            }
        ]
    }

};