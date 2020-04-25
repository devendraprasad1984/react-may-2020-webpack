const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copy=require('copy-webpack-plugin');
const minicss = require('mini-css-extract-plugin');

module.exports = {
    entry: [path.resolve(__dirname + '/src/index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new minicss({filename: './css/[name].css',chunkFilename: './css/[id].css',sourceMap: false}),
        new copy([{from:'./src/css',to:'./css'},{from:'./src/lib',to:'./lib'}]),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'template.html') })
    ],
    devtool:false,
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
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: minicss.loader,
                        options: {
                            publicPath: '/',
                        },
                    },
                    'css-loader'
                ],
            }
        ]
    }
};