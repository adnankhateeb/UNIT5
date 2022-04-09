const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('.', 'dist'),
    filename: 'main.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/i,
        use: ['babel-loader'],
      },
    ],
  },
};
