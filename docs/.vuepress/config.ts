
import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"  
module.exports = {
  title: '从01开始',
  theme: 'vdoing',
  description: '计算机技术博客',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head,
  themeConfig,
  plugins
}