const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = env => {
  let baseUrl = '';
  if (env.dev){
    baseUrl = 'https://dev.communication-scaffold.oodleslab.com/';
  }else if (env.stage){
    baseUrl = 'https://stage.communication-scaffold.oodleslab.com/';
  }else if (env.prod){
    baseUrl = 'https://communication-scaffold.oodles.io/';
  }

  return merge(common, {
    mode: 'production',
    entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
    module: {
      rules: [
        {
          test: /\.png|woff|woff2|eot|ttf|svg|jpg|gif$/,
          loader: 'file-loader',
          options: {
            outputPath: 'chat-app/images',
            publicPath: baseUrl + 'chat-app/images',
          },
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'chat-app/js/main.js',
      publicPath: "/",
      clean: true
    },
    stats: {
      logging: true,
      errors: true,
      errorDetails: true,
      timings: true
    }
  })
};
