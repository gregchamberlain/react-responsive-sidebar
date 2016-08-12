var getConfig = require('hjs-webpack');

var config = getConfig({

  isDev: process.env.NODE_ENV !== "production",
  // entry point for the app
  in: process.env.NODE_ENV !== "production"?'example/main.js':'src/index.js',
  out: 'dist',
  output: {
    filename: 'bundle.js'
  },
  clearBeforeBuild: true
});

if (process.env.NODE_ENV === "production"){
  config.output.libraryTarget = "commonjs2";
}
module.exports = config;
