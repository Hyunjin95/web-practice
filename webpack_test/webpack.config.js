module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: {
            test: /\.(.js|.jsx)$/,
            exclude: /node-modules/,
            use: ['babel-loader']
        }
    },
    resolve: {
        extensions: ['js', 'jsx']
    }
};
