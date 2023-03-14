const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const { resolve } = require('path')
// const { default: dist } = require('webpack-merge')

module.exports = {
    entry : { 
        app: path.resolve(__dirname, 'src/index.js')
    },
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module : {
        rules : [
            //style dan css loader
            {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader',
                    },
                    {
                        loader : 'css-loader',
                    },
                ],
            },
        ],
    },
    // plugin
    plugins : [
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : path.resolve(__dirname, 'src/template.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'src/public/'),
                to: path.resolve(__dirname, 'dist/'),
              },
            ],
          }),
    ]
}