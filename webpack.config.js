const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var webpack = require('webpack');


const nav = require(`./src/data.js`).nav;
const plugins = [];

nav.forEach(value => {
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${value.path}.html`,
      template: path.resolve(__dirname, './src', `${value.path}.ejs`),
      // inject: true,
      // chunks: ['common', value.path, value.text === '首页'?'bootstrap':''],
      chunks: ['common', value.path, 'bootstrap',value.text === '首页'?'fullpage':''],
    //   favicon: './src/assets/img/favicon.ico',
      title: value.text === '首页' ? 'xxxx' : `${value.text}_xxxx`,
      path:value.path,
      minify: { //压缩
        removeComments: false, // 改为false
        collapseWhitespace: false, // 改为false
        removeAttributeQuotes: false // 改为false
      }
    })
  )
})
var otherPlugins = [
  new webpack.ProvidePlugin({
    fullpage: "fullpage",
  }),
  new webpack.ProvidePlugin({
    Swiper: "swiper",
  }),
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    'window.$':'jquery',
    'window.jQuery':'jquery'
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    // chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
  })
  
]

plugins.splice(1,0,...otherPlugins);

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    entry: {
        fullpage: './src/js/fullpage.js',
        index: './src/js/index.js',
        about: './src/js/about.js',
        news: './src/js/news.js',
        product: './src/js/product.js',
        common: './src/js/common.js',
        talent: './src/js/talent.js',
        contact: './src/js/contact.js',
        bootstrap: './src/js/bootstrap.js'
    },
    resolve: {
        alias: {
        //  '@': path.resolve(__dirname, 'src'),
          imagest : path.join(__dirname, "src"),
        }
    },
    plugins: plugins,
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            // {
            //   test: /\.js$/,
            //   use: {
            //     loader: 'babel-loader',
            //     options: {
            //       presets: ['@babel/preset-env'] // 根据目标浏览器自动转换为相应es5代码
            //     }
            //   }
            // },
        
          //   {
          //     test: /\.js$/,
          //     loader: 'babel-loader',
          //     exclude: /node_modules/
          //  },
            {
                test: /\.(css|scss)$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: "postcss-loader",
                    options: {
                      plugins: [
                        require("autoprefixer")
                      ]
                    }
                  },
                  'sass-loader'
                ]
              },        
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                  // publicPath: '../',
                    esModule: false,
                    name: 'images/[name].[ext]',
                }
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,loader: "file-loader",options: {name: 'font/[name].[ext]'}},
            {test: /\.(woff|woff2)$/,loader:"file-loader", options: {name: 'font/[name].[ext]'}},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,loader:"file-loader", options: {name: 'font/[name].[ext]'}},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,loader:"file-loader", options: {name: 'font/[name].[ext]'}},
            {
                test: /\.ejs/,
                use: ['ejs-loader'],
            }
        ]
    }
};