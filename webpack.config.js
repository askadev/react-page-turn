const path = require("path")
const webpack = require("webpack")

module.exports = {
  devtool: "inline-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./example/index.js"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-stage-0"
            ]
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|woff2?|eot|ttf|svg|css)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets/"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
}
