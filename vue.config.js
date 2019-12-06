// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
module.exports = {
  outputDir:
    process.env.VUE_APP_TITLE === "production"
      ? "dist_production"
      : process.env.VUE_APP_TITLE === "alpha"
      ? "dist_alpha"
      : "dist_develop",
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
        target: "http://127.0.0.1:8080", //develop
        // target: "http://192.168.1.193:7300/mock/5dc919286d973526997cad2b", // 模拟环境
        // target: "http://192.168.8.16:18088", //li jie
        // target: "http://192.168.1.194:18088", //li xin piao
        // target: "http://192.168.1.150:18088", //yao zhipeng
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/api/": "/" }
      }
    }
  }
};
