const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            /** 
             * webpack 根据正则表达式，来确定应该查找哪些文件
             * ，并将其提供给指定的 loader。在这种情况下
             * 以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader
             * */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            /** 
             * 使用file-loader，轻松将图片内容混合到CSS中
            */
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            /** 
             * file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录
            */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            /**
             * JSON文件的支持是内置的
             * 对csv和xml数据的支持需安装 csv-loader和xml-loader
             */
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    }
}