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



