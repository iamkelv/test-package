const path = require('path')

module.exports = {
  entry: './MyComponent.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'kelv-my-react-package.js',
    library: 'MyReactPackage',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
}
