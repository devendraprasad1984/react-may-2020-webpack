const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copy=require('copy-webpack-plugin');

module.exports = {
    entry: [path.resolve(__dirname + '/src/index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new copy([{from:'./css',to:'./css'}]),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'template.html') })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    // attach the presets to the loader (most projects use .babelrc_NA file instead)
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    }
};