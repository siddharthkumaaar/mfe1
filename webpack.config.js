const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode:'development',
    devServer:{
        port:8001,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'microFrontEnd1',
            filename: 'remoteEntry.js',
            exposes: {
                './MicroFrontEnd1Index': './src/App.js',
            },
        }),
        new HtmlWebpackPlugin({
            template:
                './public/index.html'
        }),
    ],
    module:{
        rules: [
            {
                test: /\.js?$/,
                loader:
                    'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                },
            },
        ],
    },
};