const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // Imposta il mode su 'development' per una build in sviluppo
  entry: './Assets/Js/app.js',  // punto di ingresso
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // il tuo template HTML
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // directory di destinazione dei file statici
    },
    compress: true,  // abilita la compressione per una risposta più veloce
    port: 9002,  // Cambia la porta a 9001
    open: true,   // apre automaticamente il browser alla partenza del server
  },
};
