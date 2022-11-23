import { UserPlugins } from 'vuepress/config'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default <UserPlugins>[

  '@vuepress/last-updated',  //引入更新时间插件

  ['vuepress-plugin-code-copy', true],  //复制代码块的插件

  'reading-progress', //阅读进度条插件

  //版权相关的复制
  [
    'copyright',
    {
      noCopy: true, // 选中的文字将无法被复制
      authorName: '程序狗', // 选中的文字将无法被复制
      minLength: 30, // 如果长度超过  30 个字符
    },
  ],

  //光标效果的插件
  [
    'cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }
  ],


  //网站动态标题
  ['dynamic-title', {
    // showIcon: '',
    showText: '欢迎回来  O(∩_∩)O~~',
    // hideIcon: '',
    hideText: '等等，你别走啊 ::>_<::',
    recoverTime: 2000,
  }],

  //菜单高亮。页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录
  ['@vuepress/active-header-links'],

  //站点信息配置
  [
    {
      name: 'custom-plugins',
      clientAppRootComponentFiles: ["PageInfo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],


  //站点地图文件，用于推送给百度
  [
    'sitemap',
    {
      hostname: 'https://www.peterjxl.com'
    }
  ],


  //谷歌统计插件
  [
    '@vuepress/google-analytics',
    {
      'ga': 'G-8PPPBTJ1HM' // UA-00000000-0
    }
  ],

  [
    'autometa', {
      site: {
        name: 'peterjxl'
      },
      canonical_base: 'https://www.peterjxl.com',
    },
  ],

  //全局搜索插件
  //['fulltext-search'],

  //Twikoo
  {
    name: 'custom-plugins',
    globalUIComponents: ["Twikoo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
  }

]
