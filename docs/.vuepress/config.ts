
import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"  
module.exports = {
  title: '从01开始',
  theme: 'vdoing',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head,
  themeConfig,
  plugins
}