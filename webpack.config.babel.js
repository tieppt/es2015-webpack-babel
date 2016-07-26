import webpack from 'webpack';

export default {
    entry: './src/index.js',
    output: {
        filename: './public/js/app.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'babel', 
                exclude: /node_modules/ 
            },
        ],
    },
}