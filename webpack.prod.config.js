const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',

    entry: [
        './src/index'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            }, {
                test: /\.less?$/,
                loader: 'style-loader!css-loader!less-loader',
                include:  [
                    path.join(__dirname, 'src', 'styles'),
                    path.join(__dirname, '../node_modules/antd/dist/antd.less')
                ]
            }, {
                test: /\.css$/,
                include: path.join(__dirname, '../node_modules/antd'),
                loader: 'style-loader!css-loader'
            }, {
                test: /\.png$/,
                loader: 'file-loader'
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    }
}
