const path = require('path');

module.exports = {
  // Impostiamo la modalità di sviluppo per facilitare il debug
  mode: 'development',
  devtool: 'source-map',

  // Punto di ingresso del progetto, ossia il file principale che Webpack deve prendere e compilare
  entry: './Assets/Js/app.js',  // Indica il percorso del tuo file app.js

  // Configurazione per il risultato finale
  output: {
    // Il percorso di destinazione dove Webpack salverà il bundle
    path: path.resolve(__dirname, 'dist'), // La cartella 'dist' conterrà il file compilato
    // Nome del file di output
    filename: 'bundle.js', // Webpack genererà il file 'bundle.js' nella cartella 'dist'
  },

  // Configurazione per i moduli (loaders)
  module: {
    rules: [
      {
        test: /\.js$/, // Applica il loader ai file con estensione '.js'
        exclude: /node_modules/, // Non processare i file nelle cartelle 'node_modules'
        use: {
          loader: 'babel-loader', // Usa Babel per trasformare il codice JS
          options: {
            presets: ['@babel/preset-env'], // Usa il preset per ES6+
          },
        },
      },
    ],
  },

};
