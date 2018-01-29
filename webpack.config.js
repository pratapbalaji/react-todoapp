var config = {
  entry: './index.js', // entry point
  output: {
        filename: 'index.js', // place where bundled app will be served
     },
  devServer: {
        inline: true, // autorefresh
        port: 8080 // development port server
     },
  module: {
        loaders: [
           {
              test: /\.jsx?$/, // search for js files 
              exclude: /node_modules/,
              loader: 'babel-loader',
  query: {
              presets: ['env', 'react'] // use env and react
           }
        }
     ]
  }
}
module.exports = config;