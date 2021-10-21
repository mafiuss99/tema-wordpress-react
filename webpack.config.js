const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  // configurações otimidas
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      // '@containers': path.resolve(__dirname, 'src', 'containers'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      // '@utils': path.resolve(__dirname, 'src', 'utils')
    }
  }

}
