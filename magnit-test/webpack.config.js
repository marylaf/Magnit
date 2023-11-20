const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './js/index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, ''),
  //   },
  //   hot: true,
  //   open: true,
  // },
  // plugins: [
  //   new CopyPlugin([{
  //     patterns: [{ from: "/index.html", to: "/dist" }]
  //   }])
  // ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};