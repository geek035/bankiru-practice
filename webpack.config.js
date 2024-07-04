const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: {
        main: './src/main.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 9000,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            title: "Банки.ру",
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: false,
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                use: {
                    loader: "babel-loader",   // определяем загрузчик
                    options: {
                        cacheDirectory: true,
                    },
                },
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[ext]'
                },
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[ext]'
                },
            },

            {
                test: /\.(sass|css|scss)$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CSSMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(),
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
