const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  chainWebpack:
    config => {
      config.optimization.delete('splitChunks')
    },
  filenameHashing: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://upbit.bitsbee.io',
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/_variables.scss";',
      },
    },
  },
};
