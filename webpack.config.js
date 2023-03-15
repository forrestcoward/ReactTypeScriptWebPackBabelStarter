// webpack.config.js
const path = require('path')
module.exports = {
  entry: './src/Index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: false,
    client: {
      progress: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist')
    }
  }
}