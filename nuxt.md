+ 20161025
 
# Nuxt.js
+ 基于Vue.js的通用应用框架
 
# Nuxt.js框架是如何运作的
+ Nuxt = Vue3 + Vue-Router + Vuex + SSR + Vue-Meta + Webpack
 
# 流程图
+ NuxtServerInit
+ middleware
+ validate
+ asyncData & fetch
+ Render
+ (Navigate)
 
# 服务端渲染SSR
 
# 单页应用程序SPA
+ nuxt --spa
+ 作为Nodejs后端的插件
 
# 静态化-预渲染
+ 静态站点 nuxt generate
+ 无服务端的自动静态化的Web应用，部署在CDN服务器
+ 
+ 前端微服务Microservices
+ 
 
# 目录结构
+ assets
+ components
+ layouts
+ middleware
+ pages
+ plugins
+ static
+ store
+ nuxt.config.js
+ package.json
 
# 配置
+ 使用nuxt.config.js覆盖默认的配置
+ build
+   vendor.bundle.js
+ css
+ dev
+ env
+ generate
+ head
+ loading
+ modules
+ modulesDir
+ plugins
+ rootDir
+ router
+ server
+ srcDir
+ dir
+ transition

# 路由
根据pages目录结构自动生成Vue-Router模块的路由配置
路由跳转 nuxt-link to
动态路由 _开头的vue文件
  路由参数校验
嵌套路由
  与文件同名的目录，存放子视图组件
动态嵌套路由
  未知嵌套深度的动态嵌套路由 _.vue动态匹配
  命名视图
    layout page中 name
  SPA fallback
    mode:spa 静态托管服务  
过渡动效 transition组件 page
  全局过渡动效设置
  页面过渡动效设置

# 中间件
自定义函数，运行在一个或一组页面渲染之前
context => result
执行流程顺序：nuxt.config.js -> 匹配layouts -> 匹配pages
可以异步执行

# 视图
应用模板
  定制默认的html模板
布局
  扩展默认的布局，或自定义的布局
页面
HTML头部

