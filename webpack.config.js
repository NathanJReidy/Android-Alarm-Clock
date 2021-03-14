const path = require('path');

module.exports = {
  entry: ['./src/DOMchanges.js', './src/DOMload.js', './src/eventListeners.js', './src/localStorage.js', './src/logic.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
