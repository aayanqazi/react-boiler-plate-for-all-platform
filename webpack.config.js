var webpack = require('webpack');

module.exports = {
    entry: "./entry.js",
    devServer: {
        inline: true,
        contentBase: './',
        port: 8086
    },
    output: {
        path: __dirname,
        filename: "index.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/,/react-router-native/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    resolve: {
        alias: {
            "react-native": "react-native-web"
        }
    }
};