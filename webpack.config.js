const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.jsx',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      },
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "@babel/env",
              "@babel/preset-react",
            ]
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "@babel/env",
              "@vue/babel-preset-jsx",
            ]
          }
        }
      },
    ]
  },

  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
}