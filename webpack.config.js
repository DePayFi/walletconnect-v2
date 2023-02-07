const path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const umd = {
  output: {
    filename: 'index.js',
    library: 'WalletConnectV2',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/umd')
  },
  node: {
    Buffer: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              target: 'es2015'
            }
          }
        ]
      }
    ]
  }
}

const esm = {
  output: {
    filename: 'index.js',
    library: 'WalletConnectV2',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist/esm')
  },
  plugins: [
    new EsmWebpackPlugin()
  ],
  node: {
    Buffer: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              target: 'es2015'
            }
          }
        ]
      }
    ]
  }
}

module.exports = [umd, esm]
