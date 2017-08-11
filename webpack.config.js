var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var argv = require('yargs').argv;

var plugins = [
    new ExtractTextPlugin('styles.css'),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    })
]
var app = ['./entry']

    app.unshift('react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8888',
     'webpack/hot/only-dev-server')

    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
  )

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool:  'inline-source-map',
    entry: {
        app: app
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        chunkFilename: '[name].js'
    },
    // BASE_URL是全局的api接口访问地址
    plugins,
    // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {

        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader?cacheDirectory=true'
            }
        }, {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader", "less-loader", "postcss-loader"]
            })
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: ['url-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
        }]
    }
};
