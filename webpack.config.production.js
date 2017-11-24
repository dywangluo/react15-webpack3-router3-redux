var path = require("path"),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    postcss = require('postcss'),
    autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    LIBS_PATH = path.resolve(ROOT_PATH, 'libs'),
    TMPL_PATH = path.resolve(LIBS_PATH, 'tmpl');
module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx'),
        vendors: [
            "antd",
            "axios",
            "babel-polyfill",
            "jquery",
            "md5",
            "qs",
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "react-router-redux",
            "redux",
            "redux-logger",
            "redux-thunk",
        ]
    },
    output: {
        path: DIST_PATH,
        publicPath: '../',
        filename: 'js/[name]-[hash:8].js',
        chunkFilename: 'js/[name]-[hash:8].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: ['babel-loader'],
                include: SRC_PATH,
            },
            {
                test: /\.(less|scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader'},
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function(){
                                    return [autoprefixer(
                                        { browsers: ['iOS >= 7', 'Android >= 4.1', 'last 10 Chrome versions', 'last 10 Firefox versions', 'Safari >= 6', 'ie > 8'] }
                                    )]
                                },
                            },
                        },
                        'sass-loader'
                    ]
                }),
            }, {
                test: /\.(svg|gif|png|jpg)$/,
                loader: ['url-loader?limit=8096&name=img/[name]-[hash:8].[ext]'],
                include: SRC_PATH
            }, {
                test: /\.(swf|mp4|ogv|webm)$/,
                loader: ['file-loader?name=video/[name]-[hash:8].[ext]'],
                include: SRC_PATH
            }, {
                test: /\.(mp3|ogg|wav|m4a)$/,
                loader: ['file-loader?name=audio/[name]-[hash:8].[ext]'],
                include: SRC_PATH
            }, {
                test: /\.(woff|eot|ttf)$/,
                loader: ['file-loader?name=font/[name]-[hash:8].[ext]'],
                include: SRC_PATH
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new CleanWebpackPlugin([DIST_PATH], {
            root: '',
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin("css/[name]-[hash:8].css"),
        new webpack.optimize.CommonsChunkPlugin({
            filename: "js/[name]-[hash:8].js",
            name: "vendors"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlwebpackPlugin({
            title: 'webpack-react',
            filepath: DIST_PATH,
            template: path.resolve(TMPL_PATH, 'index.html'),
            chunks: ['index', 'vendors'],
            filename: 'html/index.html',
            inject: 'body'
        })
    ],
};