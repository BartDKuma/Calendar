const path = require('path');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    fallback: {
      fs: false, 
    }
  }
};