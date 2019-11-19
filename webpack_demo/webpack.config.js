const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//         rules: [
//             /** 
//              * webpack 根据正则表达式，来确定应该查找哪些文件
//              * ，并将其提供给指定的 loader。在这种情况下
//              * 以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader
//              * */
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             },
//             /** 
//              * 使用file-loader，轻松将图片内容混合到CSS中
//             */
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: [
//                     'file-loader'
//                 ]
//             },
//             /** 
//              * file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录
//             */
//             {
//                 test: /\.(woff|woff2|eot|ttf|otf)$/,
//                 use: [
//                     'file-loader'
//                 ]
//             },
//             /**
//              * JSON文件的支持是内置的
//              * 对csv和xml数据的支持需安装 csv-loader和xml-loader
//              */
//             {
//                 test: /\.(csv|tsv)$/,
//                 use: ['csv-loader']
//             },
//             {
//                 test: /\.xml$/,
//                 use: ['xml-loader']
//             }
//         ]
//     }
// }

module.exports = {
    /** 
     * 我们将在 entry 添加 src/print.js 作为新的入口起点（print），
     * 然后修改 output，以便根据入口起点名称动态生成 bundle 名称
    */
   entry: {
    //    app: './src/index.js',
    //    print: './src/print.js'
        main: './src/index.js',
        vendors: [
            'lodash'
        ]
   },
   /** 开发工具，追踪源代码错误位置 */
   devtool: 'inline-source-map',
   /** 告知 webpack-dev-server，在 localhost:8080 下建立服务
    * 将 dist 目录下的文件，作为可访问文件 */
   devServer: {
       contentBase: './dist',
       hot: true
   },
   /** 
    * 使用HtmlWebpackPlugin解决
    * 入口文件名修改，index.html仍引用原入口文件打包的文件的问题
    * 执行打包会重新生成index.html，并引入依赖模块
   */
   plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
        //    title: 'Output Management'
        title: 'caching'
       }),
       new webpack.HashedModuleIdsPlugin(),
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin()
   ],
   optimization:{
       splitChunks: {
        cacheGroups: {
            commons: {
                chunks: 'all',
                minChunks: 2,
                name: 'common'
            }
        }
       },
       runtimeChunk: {
        name: 'manifest'
      }
   },
    output: {
        filename: process.env.production === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
        // filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
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
    mode: "production"
}