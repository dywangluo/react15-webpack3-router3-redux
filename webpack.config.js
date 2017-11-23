var path = require("path"),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    postcss = require('postcss'),
    autoprefixer = require('autoprefixer');

var ROOT_PATH = path.resolve(__dirname),
    SRC_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    LIBS_PATH = path.resolve(ROOT_PATH, 'libs'),
    TMPL_PATH = path.resolve(LIBS_PATH, 'tmpl');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
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
                use: [
                    { loader: 'style-loader'},
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
                ],
            },
            {
                test: /\.(svg|gif|png|jpg|swf|mp4|mp3|m4a|otf|eot|ttf|woff)$/,
                use: ['file-loader?name=[name].[ext]'],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlwebpackPlugin({
            title: 'webpack-react',
            filepath: DIST_PATH,
            template: path.resolve(TMPL_PATH, 'index.html'),
            chunks: ['index'],
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        host: '192.168.84.100',
        port: 9009,
        contentBase: ROOT_PATH,
        hot:true,
        inline:true,
        historyApiFallback: true,
    }
};