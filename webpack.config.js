const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV?.trim() === 'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    devtool: 'source-map', //'inline-source-map'
    devServer: {
        // contentBase: "./dist",
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        // compress: true,
        // port: 9000,
    },
};
