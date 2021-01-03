const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development', // default 는 production 모드
  entry: {
    index: './source/index.js',
    about: './source/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 2️⃣ 가져온 css 파일을 html 에 주입하는 로더
          'css-loader' // 1️⃣ css 파일을 읽어서 그것을 webpack으로 가져오는 로더
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html',
      filename: './index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './source/about.html',
      filename: './about.html',
      chunks: ['about']
    }),
    new CleanWebpackPlugin()
  ],
}
