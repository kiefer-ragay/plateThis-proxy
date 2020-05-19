const path = require('path');

const entryPath = path.join(__dirname, 'client', 'src', 'components', 'App.jsx');
const outputPath = path.join(__dirname, 'client', 'dist');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  plugins: [new CompressionPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
