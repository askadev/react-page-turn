var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-spring': {
    root: 'ReactSpring',
    commonjs2: 'react-spring',
    commonjs: 'react-spring',
    amd: 'react-spring'
  }
};

var config = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-page-turn.js',
    sourceMapFilename: 'react-page-turn.sourcemap.js',
    library: 'Transition',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)/, loader: 'babel-loader' },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: externals,
  plugins: []
};

if (TARGET === 'minify') {
  config.output.filename = 'react-page-turn.min.js';
  config.output.sourceMapFilename = 'react-page-turn.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'ReactMotion', 'Transition', 'getPrefix']
    }
  }));
}

module.exports = config;
