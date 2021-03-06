module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-vant-app' : '/',
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    // outputDir: 'dist',
    // pages:{ type:Object,Default:undfind }
    lintOnSave: false,
    devServer: {
        port: 8086, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    },
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 16, // 换算的基数
                        selectorBlackList: [], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        }
    },
}
