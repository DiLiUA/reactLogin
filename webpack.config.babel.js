'use strict';

import webpack from 'webpack';
import path from 'path';
import del from 'del';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

del.sync(path.join(__dirname, '/', 'dist'));

const NODE_ENV = process.env.NODE_ENV || 'development';
const paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

const plugins = {
  noErrorsPlugin:     () => new webpack.NoErrorsPlugin(),
  definePlugin:       options => new webpack.DefinePlugin(options),
  commonsChunkPlugin: options => new webpack.optimize.CommonsChunkPlugin(options),
  htmlWebpackPlugin:  options => new HtmlWebpackPlugin(options),
  providePlugin:      options => new webpack.ProvidePlugin(options),
  writeFilePlugin:   () => new WriteFilePlugin()
};

del.sync(paths.dist);

const config = {
  context: paths.src,
  entry: {
    app: './app.js'
  },

  output: {
    path: paths.dist,
    publicPath: '/',
    filename: '[name].[hash].js',
    library: '[name]'
  },

  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 100
  // },

  devtool: NODE_ENV == 'development' ? 'source-map' : null,

  plugins: [
    new	webpack.HotModuleReplacementPlugin(),
    plugins.noErrorsPlugin(),
    plugins.htmlWebpackPlugin({
      title: 'the name of project is test',
      template: path.join(paths.src, 'index.html'),
      inject: true,
      filename: 'index.html'
    }),
    plugins.definePlugin({
      _DEV_:  NODE_ENV === 'development',
      _PROD_: NODE_ENV === 'production',
    }),
    plugins.commonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),
    plugins.providePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    plugins.writeFilePlugin()
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', 'jsx']
  },

  resolveLoaders: {
    modulesDirectories: ['node_modules'],
    modulesTemplates: ['*-loader', '*'],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: paths.src
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.scss/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ],
  },

  devServer: {
    outputPath: paths.dist,
    host: 'localhost',
    hot: true,
    inline: true, // in order to run not if iframe
    port: 3000,
    stats: {
      hash: true,
      errors: true,
      errorDetails: true,
      warnings: true,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      publicPath: false
    }
  }
};


if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );

  // module.exports.plugins.push(
  //   new CleanWebpackPlugin([[path.join(__dirname, '/dist/js')]], {
  //     root: __dirname,
  //     verbose: true,
  //     dry: false
  //   })
  // );
}

export default config;