// webpack.config.js
const path = require('path')
module.exports = {
  entry: './src/Index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/', // Required for react router, if used.
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true, // Required for react router.
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
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
  }
}