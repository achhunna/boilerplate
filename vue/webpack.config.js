const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    vue: 'vue',
    index: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }
      },
      {
        // vue-loader config to load `.vue` files or single file components.
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
                css: ['vue-style-loader', {
                    loader: 'css-loader',
                }],
                js: [
                    'babel-loader',
                ],
            },
            cacheBusting: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  devServer: {
    // The url you want the webpack-dev-server to use for serving files.
    host: '0.0.0.0',
    // Can be the popular 8080 also.
    port: 8080,
    // gzip compression
    compress: true,
    // Open the browser window, set to false if you are in a headless browser environment.
    open: false,
    watchOptions: {
        ignored: /node_modules/,
        poll: true,
    },
    contentBase: 'src/',
    // Reload for code changes to static assets.
    watchContentBase: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};