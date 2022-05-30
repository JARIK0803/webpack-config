const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

if (process.env.NODE_ENV?.trim() === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,

  output: {
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset', // 'asset/resource' 'asset/inline'
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024, // change size of inline imgs
        //   },
        // },
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url https://react-svgr.com/docs/webpack/
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
            // options: { publicPath: '../' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  // plugins: [new MiniCssExtractPlugin({filename: './css/main.css'})],
  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map', //'inline-source-map'
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
  },
};
