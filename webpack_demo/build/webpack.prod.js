 /** 
  * 生产环境配置 
  * 
  * 许多 library 将通过与 process.env.NODE_ENV 环境变量关联，
  * 以决定 library 中应该引用哪些内容。例如，当不处于生产环境中时，
  * 某些 library 为了使调试变得容易，可能会添加额外的日志记录(log)和测试(test)。
  * 其实，当使用 process.env.NODE_ENV === 'production' 时
  * ，一些 library 可能针对具体用户的环境进行代码优化，从而删除或添加一些重要代码。
  * 我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量
  * */
 const webpack = require('webpack')
 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   devtool: 'source-map',
   plugins: [
     new UglifyJSPlugin({
         sourceMap: true
     }),
     new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('production')
     })
   ]
 });