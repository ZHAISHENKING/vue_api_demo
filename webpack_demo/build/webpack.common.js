/** webpack公共部分 */

const path = require('path');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js'
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production'
     })
   ],
   output: {
     filename: '[name].bundle.js',
     // 决定非入口 chunk 的名称
     chunkFilename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
    ]
    },
 };