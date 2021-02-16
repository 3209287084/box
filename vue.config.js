
const path =  require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    //=> process.env.NODE_ENV  : 环境变量中储存的是开发环境还是生产环境 
    publicPath: process.env.NODE_ENV === 'production'? 'http://www.xxx.cn/': '/',
    //=> 打包文件夹名字
    outputDir:'myassets',
    //=> 自定义目录名称,把生成的JS/CSS/图片等静态资源放置在这个目录中
     assetsDir:'assets',
    //=> 打包输出后 html文件的名称
    indexPath:'index.html',
    //=> 关闭生产环境下的资源映射(生产环境下不在创建xxx.js.map文件)
    productionSourceMap:false,
    //=> 多余1核CPU时 启动并运行压缩
    parallel:require('os').cpus().length > 1,
    //=> 是否可以使用template模板
    runtimeCompiler:true,
    //=> 设置一些webpack配置项，用这些配置项和默认的配置项合并
    configureWebpack:{
        // 新的插件等
           plugins:[]
    },
    //=> 直接去修改内置的webpack配置项
    chainWebpack:config=>{
        //=> config 原始信息配置对象
        // => 小案例 ↓
        config.module.rule('images').use('url-loader').tap(options =>{
            options.limit = 200 * 1024;
            return options
        }),
        // 添加别名
        config.resolve.alias 
        .set('@', resolve('src'))
    },
    //=> 修改webpack-dev-server配置（尤其是跨域代理）
    devServer:{
        host: "localhost",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        hotOnly: true, // 热更新
        // proxy:{
        //     //=> 请求地址 => /user/add
        //     //=> 跨域地址 => http://api.yuedada.cn/user/add
        //     // '/':{
        //     //     target:"http://api.yuedada.cn/",  //=> 代理地址
        //     //     changeOrigin: true, //=> 允许跨越
        //     // }
        // }
       
    } 
  }