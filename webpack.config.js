module.exports = {
  context: __dirname,
  entry: {
    actrx: [
      './src/plug.js'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: '/',
    library: 'ActRx',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
