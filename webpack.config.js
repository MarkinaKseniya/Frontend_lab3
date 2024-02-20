const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/script.js', './src/style.css'],
        vendor: ['./src/calculator.js', './src/calculator.css'] 
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['main'],
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/calculator.html',
            chunks: ['vendor'],
            filename: 'calculator.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 9000
    }
};
