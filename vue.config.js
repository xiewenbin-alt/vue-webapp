module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */ 
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',

  assetsDir: "assets",

  indexPath:"index.html",

  productionSourceMap: false,
  
  filenameHashing: false,

  lintOnSave: false,
  
  devServer: {

      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      hotOnly: false,

      proxy: {
          '/api': {
              target: 'http://localhost:8080/data.json',
              changeOrigin: true,
              pathRewrite:{
                '^/api': '/' 
              }
          },  
      },
  },
}