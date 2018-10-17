module.exports = {
  entry: ['./jsx/main.jsx'],
  output: {
    path: __dirname,
    filename: 'public/js/app.min.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node-modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', 'es2015'
          ],
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties',
            'transform-decorators-legacy'
          ]
        }
      }
    ]
  }
};
