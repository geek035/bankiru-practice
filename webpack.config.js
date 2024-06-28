// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'minifyCSS.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, "css-loader"],
            }
        ],
    },
    optimization: {
        minimizer: [
            new CSSMinimizerWebpackPlugin(),
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
