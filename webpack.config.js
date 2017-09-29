const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    context: path.resolve(__dirname, 'src'),
    entry: {
        client: './client.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].sdk.js',
        publicPath: '/assets',
        libraryTarget: 'umd',
        library: '21PeakLess',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].sdk.js.map',
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'src'), // New
    },
};
