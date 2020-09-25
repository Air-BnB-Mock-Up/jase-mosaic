const path = require('path');
const entry = path.join(__dirname, '/client/src');
const output_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: entry + 'index.jsx',
  output: {
    filename: 'bundle.js',
    path: output_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}