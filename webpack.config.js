const path = require('path')


const config = {
  entry: {
    app: './src/index.js'
  },
  devServer: {
    contentBase: './build'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
}

module.exports = config