const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');
const entry = path.join(__dirname, '/client/src/components/Index.jsx');
const output = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'production',
  entry: entry,
  output: {
    filename: 'bundle.js',
    path: output
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
