// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
module.exports = {
  // outputDir:
  //   process.env.VUE_APP_TITLE === "production"
  //     ? "dist_production"
  //     : process.env.VUE_APP_TITLE === "alpha"
  //     ? "dist_alpha"
  //     : "dist_develop",
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  filenameHashing: true,
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/global.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    // requireModuleExtension: false
  },
  devServer: {
    disableHostCheck: true, // 跳过检查
    host: '0.0.0.0',
    proxy: {
      "/api/": {
        target: "http://ssp.jmaogou.com:3000", // develop
        // target: "http://127.0.0.1:3000", // local
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api/": "/" }
      }
    }
  }
};
