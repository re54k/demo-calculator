const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: false,
    // concatenateModules: false,
    // usedExports: false,
    // sideEffects: false,
  }
};
