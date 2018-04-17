const webpack = require("webpack")
const path = require("path")
const isDev = process.env.NODE_ENV == "development"
const HtmlWebpackPlugin = require("html-webpack-plugin")
const config ={
  entry: path.resolve(__dirname, 'src/index.js'),
  output:{
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      },
      {
        test: /\.(jpg|gif|png|jpeg|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              name:'[name]-[sha512:hash:base64:7]:[ext]'
            }
          }
        ]
      }      
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html',
      filename:'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    })
  ]
}
if(isDev){
  
  config.devServer = {
    port:8089,
    host:'0.0.0.0',
    hot:true,
    historyApiFallback:true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}
module.exports = config