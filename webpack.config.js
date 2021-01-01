const path = require('path')

module.exports = {
  mode: 'development', // default 는 production 모드
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  }
}
