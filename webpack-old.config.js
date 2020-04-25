var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'Components/');

const { version } = require('./package.json');

function getBabelConfig() {
    return {
        presets: [
            '@babel/react',
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['last 2 versions'],
                    },
                },
            ],
        ],
        plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-function-bind',
        ],
    };
}

const bundleExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/bundle.css',
    sourceMap: true,
});

const infernoBabelConfig = getBabelConfig();
infernoBabelConfig.plugins.push('inferno');

const preactBabelConfig = getBabelConfig();
preactBabelConfig.presets.splice(0, 1);
preactBabelConfig.plugins.push(['transform-react-jsx', { pragma: 'h' }]);

const copySrcToDist=new CopyWebpackPlugin([{from: APP_DIR, to: BUILD_DIR}]);

module.exports = {
    entry: [path.resolve(__dirname + '/index.js')],
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
        publicPath: '/',
        chunkFilename: '[id].[chunkhash].js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                beautify: false,
                ecma: 6,
                compress: true,
                comments: false
            }
        }),
        bundleExtractPlugin
    ],
    devServer: {
        inline: false,
        // contentBase: path.resolve(__dirname, "/Components"),
        port: 3000,
        publicPath: '/',
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /inferno.+\.js$/,
                loader: 'babel-loader',
                query: infernoBabelConfig,
            },
            {
                test: /preact.+\.js$/,
                loader: 'babel-loader',
                query: preactBabelConfig,
            },
            {
                test: /\.js$/,
                exclude: /node_modules|inferno|preact/,
                loader: 'babel-loader',
                query: getBabelConfig(),
            },
        ]
    }
    , watch: false
    ,devtool: 'source-map'
};