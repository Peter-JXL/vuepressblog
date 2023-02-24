
import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"  
module.exports = {
  title: '从01开始',
  theme: 'vdoing',
  description: 'PeterJXL个人博客, VuePress搭建, 计算机基础，操作系统，Java, Web, 框架, 微服务, 工具, 前端等相关知识, 记录生活和技术路程。',
  locales: {
    '/': {
      lang: 'zh-CN' //VuePress默认时间是en-US，不修改则时间的展示格式默认是西方的格式
    }
  },
  head,
  themeConfig,
  plugins,
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4"]
  }
}