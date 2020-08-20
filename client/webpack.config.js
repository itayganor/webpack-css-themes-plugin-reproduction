const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackCSSThemesPlugin = require('webpack-css-themes-plugin');
const ExcludeAssetsPlugin = require('@ianwalter/exclude-assets-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = (env, options) => {
    const envMode = options.mode;
    const isDevMode = envMode === 'development';

    return {
        mode: isDevMode ? 'development' : 'production',
        entry: {
            main: ['react-hot-loader/patch', './src/index.tsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: '/node_modules/',
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ],
                },
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.less$/,
                    exclude: /\.module\.less$/,
                    use: [
                        // {
                        //     loader: MiniCssExtractPlugin.loader,
                        //     options: {
                        //         hmr: isDevMode,
                        //     },
                        // },
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.module\.less$/,
                    use: [
                        // {
                        //     loader: MiniCssExtractPlugin.loader,
                        //     options: {
                        //         hmr: isDevMode,
                        //     },
                        // },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: isDevMode ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                                },
                            },
                        },
                        'less-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    exclude: /\.module\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.module\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.png$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                mimetype: 'image/png',
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|eot|ttf|woff2)$/,
                    loader: 'file-loader?name=resources/fonts/[name].[ext]',
                },
            ],
        },
        resolve: {
            extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
            ],
            alias: {
                'react-dom': '@hot-loader/react-dom',
                // '@demo': path.resolve(__dirname, '../common/src'), // sync with tsconfig.compileOptions.path
            },
        },
        devServer: {
            contentBase: './dist',
            historyApiFallback: true,
            host: '0.0.0.0',
        },
        plugins: [
            new LodashModuleReplacementPlugin,
            new WebpackCSSThemesPlugin({
                themes: [
                    {
                        name: 'main',
                        entryPath: path.resolve(__dirname, './src/theme/themes/demo-dark.less'),
                    },
                    {
                        name: 'light',
                        entryPath: path.resolve(__dirname, 'src/theme/themes/demo-light.less'),
                    },
                ],
            }),
            // exclude css inject
            new HtmlWebpackPlugin({
                excludeAssets: [/\.css$/],
                template: path.resolve(__dirname, './index.html'),
            }),
            new ExcludeAssetsPlugin(),
        ],
        devtool: isDevMode ? 'source-map' : false,
        stats: {
            children: false,
        },
    };
};

module.exports = config;
